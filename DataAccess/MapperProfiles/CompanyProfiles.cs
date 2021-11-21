using AutoMapper;
using CV_Manager.Models;
using DataAccess.Dtos.Companies;
using System.Collections.Generic;

namespace DataAccess.MapperProfiles
{
    public class CompanyProfiles : Profile
    {
        public CompanyProfiles()
        {
            CreateMap<Companies, CompanyOutput>();
            CreateMap<CompanyInput, Companies>();
        }
    }
}
