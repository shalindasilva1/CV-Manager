using Domain.Entities;
using System.Collections.Generic;

namespace CV_Manager.Models
{
    public class Jobs : BaseEntity
    {
        public string Name { get; set; }
        public Status Status { get; set; }
        public int YearsOfExperience { get; set; }

        public long CompanyId { get; set; }
        public virtual Companies Company { get; set; }
        public virtual ICollection<Skills> TechStack { get; set; }
    }

    public enum Status
    {
        Todo = 1,
        OnGoing = 2,
        Done = 3
    }
}
