using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Manager.Models
{
    public class Contacts : BaseEntity
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }
}
