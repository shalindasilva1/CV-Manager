using CV_Manager.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        public DbSet<Resumes> Resumes { get; set; }

        public DbSet<Jobs> Jobs { get; set; }
        
        public DbSet<Companies> Companies { get; set; }

        public DbSet<Contacts> Contacts { get; set; }

        public DbSet<Designations> Designations { get; set; }

        public DbSet<Skills> Skills { get; set; }

    }
}
