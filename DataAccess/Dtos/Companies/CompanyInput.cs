using System.ComponentModel.DataAnnotations;

namespace DataAccess.Dtos.Companies
{
    public class CompanyInput : BaseDto
    {
        [Required]
        public string Name { get; set; }
    }
}
