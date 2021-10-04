using CV_Manager.Models;
using Domain.Interfaces;
using Domain.Repositories;

namespace DataAccess.Repositories
{
    public class JobsRepository : GenericRepository<Jobs>, IJobsRepository
    {
        public JobsRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
