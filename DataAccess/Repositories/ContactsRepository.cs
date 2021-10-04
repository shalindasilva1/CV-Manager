using CV_Manager.Models;
using Domain.Interfaces;
using Domain.Repositories;

namespace DataAccess.Repositories
{
    public class ContactsRepository : GenericRepository<Contacts>, IContactsRepository
    {
        public ContactsRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
