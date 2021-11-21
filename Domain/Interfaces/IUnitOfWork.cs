using System;

namespace Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IResumesRepository Resumes { get; }
        IJobsRepository Jobs { get; }
        ICompaniesRepository Companies { get; }
        ISkillsRepository Skills { get; }
        int Complete();
    }
}
