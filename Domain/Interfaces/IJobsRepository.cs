using CV_Manager.Models;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IJobsRepository : IGenericRepository<Jobs>
    {
        Task<Jobs> GetByIdIncludedAsync(long id);
    }
}
