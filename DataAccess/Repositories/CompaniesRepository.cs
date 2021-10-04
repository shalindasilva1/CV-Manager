using CV_Manager.Models;
using Domain.Interfaces;
using Domain.Repositories;

namespace DataAccess.Repositories
{
    public class CompaniesRepository : GenericRepository<Companies>, ICompaniesRepository
    {
        public CompaniesRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
