﻿using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Manager.Models
{
    public class Resumes : BaseEntity
    {
        public string Name { get; set; }
        public string path { get; set; }
        public string Email { get; set; }
        public List<Contacts> Contacts { get; set; }
        public Designations Designation { get; set; }
    }
}