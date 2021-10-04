using CV_Manager.Models;
using Domain.Interfaces;
using Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class ResumesRepository : GenericRepository<Resumes>, IResumesRepository
    {
        public ResumesRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
