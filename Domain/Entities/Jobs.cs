using System.Collections.Generic;

namespace CV_Manager.Models
{
    public class Jobs
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public Status Status { get; set; }
        public int YearsOfExperience { get; set; }
        public List<Skills> TechStack { get; set; }
        public Companies Company { get; set; }
    }

    public enum Status
    {
        Todo = 1,
        OnGoing = 2,
        Done = 3
    }
}
