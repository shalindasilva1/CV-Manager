using AutoMapper;
using DataAccess;
using DataAccess.MapperProfiles;
using DataAccess.Repositories;
using DataAccess.UnitOfWork;
using Domain.Interfaces;
using Domain.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System.Text.Json.Serialization;

namespace CV_Manager
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string CROSPolicy = "_CVMCROSPolicy";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Auto Mapper Configurations
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new CompanyProfiles());
                mc.AddProfile(new SkillProfiles());
                mc.AddProfile(new JobProfiles());
                mc.AddProfile(new ResumeProfiles());

            });
            mapperConfig.AssertConfigurationIsValid();
            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddCors(options =>
            {
                options.AddPolicy(name: CROSPolicy,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:4200")
                                      .AllowAnyHeader()
                                      .AllowAnyMethod();
                                  });
            });
            services.AddControllers().AddJsonOptions(x =>
            {
                x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "CV_Manager", Version = "v1" });
            });

            services.AddDbContext<ApplicationContext>(options =>
                    options.UseSqlServer(
                        Configuration.GetConnectionString("CV_ManagerContext"),
                        b => b.MigrationsAssembly(typeof(ApplicationContext).Assembly.FullName)));

            services.AddTransient<IUnitOfWork, UnitOfWork>();

            #region Repositories
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            // Add extended repositories when its available
            services.AddScoped<IJobsRepository, JobsRepository>();
            services.AddScoped<IResumesRepository, ResumesRepository>();
            services.AddScoped<ICompaniesRepository, CompaniesRepository>();
            services.AddScoped<IContactsRepository, ContactsRepository>();
            services.AddScoped<IDesignationsRepository, DesignationsRepository>();
            services.AddScoped<ISkillsRepository, SkillsRepository>();


            #endregion

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "CV_Manager v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(CROSPolicy);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
