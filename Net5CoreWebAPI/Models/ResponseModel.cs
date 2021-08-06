using System.Collections.Generic;

namespace Net5CoreWebAPI.Models
{
    public class ResponseModel
    {
        public int total { get; set; }

        public IEnumerable<object> results { get; set; }
    }
}
