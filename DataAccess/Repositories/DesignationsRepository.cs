using CV_Manager.Models;
using Domain.Interfaces;
using Domain.Repositories;

namespace DataAccess.Repositories
{
    public class DesignationsRepository : GenericRepository<Designations>, IDesignationsRepository
    {
        public DesignationsRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
