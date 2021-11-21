using System;

namespace DataAccess.Dtos
{
    public class BaseDto
    {
        public long Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
