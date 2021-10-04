using DataAccess.Repositories;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationContext _context;
        public UnitOfWork(ApplicationContext context)
        {
            _context = context;
            Jobs = new JobsRepository(_context);
            Resumes = new ResumesRepository(_context);
            Companies = new CompaniesRepository(_context);
            Contacts = new ContactsRepository(_context);
            Designations = new DesignationsRepository(_context);
            Skills = new SkillsRepository(_context);
        }

        public IJobsRepository Jobs { get; private set; }
        public IResumesRepository Resumes { get; private set; }
        public ICompaniesRepository Companies { get; private set; }
        public IContactsRepository Contacts { get; private set; }
        public IDesignationsRepository Designations { get; private set; }
        public ISkillsRepository Skills { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
