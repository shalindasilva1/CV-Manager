using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        ValueTask<T> GetByIdAsync(long id);
        Task<T> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate);

        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task RemoveAsync(T id);

        Task<IEnumerable<T>> GetAllAsync();
        Task<IEnumerable<T>> GetWhereAsync(Expression<Func<T, bool>> predicate);

        Task<int> CountAllAsync();
        Task<int> CountWhereAsync(Expression<Func<T, bool>> predicate);
    }
}
