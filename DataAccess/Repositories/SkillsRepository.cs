using CV_Manager.Models;
using Domain.Interfaces;
using Domain.Repositories;

namespace DataAccess.Repositories
{
    public class SkillsRepository : GenericRepository<Skills>, ISkillsRepository
    {
        public SkillsRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
