using Domain.Entities;

namespace CV_Manager.Models
{
    public class Contacts : BaseEntity
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }
}
