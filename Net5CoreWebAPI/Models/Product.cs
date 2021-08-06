using System;

namespace Net5CoreWebAPI.Models
{
    public class Product
    {
        public int ProductId;

        public string ProductName { get; set; }

        public string Code { get; set; }

        public decimal Price { get; set; }

        public int Quality {get; set;}

        public DateTime DateCreated { get; set; }
    }
}
