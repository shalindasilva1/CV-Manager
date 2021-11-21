using Domain.Entities;
using System.Collections.Generic;

namespace CV_Manager.Models
{
    public class Skills : BaseEntity
    {
        public string Name { get; set; }
        public ICollection<Jobs> Jobs { get; set; }
    }
}
