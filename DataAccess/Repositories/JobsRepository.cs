using CV_Manager.Models;
using Domain.Interfaces;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class JobsRepository : GenericRepository<Jobs>, IJobsRepository
    {
        public JobsRepository(ApplicationContext context) : base(context)
        {
        }

        public Task<Jobs> GetByIdIncludedAsync(long id) =>
            _context.Jobs
                .Include(J => J.Company)
                .Include(J => J.TechStack)
                .Where(j => j.Id == id).FirstOrDefaultAsync();
    }
}
