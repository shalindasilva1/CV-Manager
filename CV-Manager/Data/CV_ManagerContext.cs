using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CV_Manager.Models;

namespace CV_Manager.Data
{
    public class CV_ManagerContext : DbContext
    {
        public CV_ManagerContext (DbContextOptions<CV_ManagerContext> options)
            : base(options)
        {
        }

        public DbSet<CV_Manager.Models.Resumes> Resumes { get; set; }

        public DbSet<CV_Manager.Models.Companies> Companies { get; set; }

        public DbSet<CV_Manager.Models.Jobs> Jobs { get; set; }

        public DbSet<CV_Manager.Models.Skills> Skills { get; set; }
    }
}
