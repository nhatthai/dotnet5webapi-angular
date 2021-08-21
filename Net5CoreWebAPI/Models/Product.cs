using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Net5CoreWebAPI.Models
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ProductId { get; set; }

        public string ProductName { get; set; }

        public string Code { get; set; }

        public decimal Price { get; set; }

        public int Quantity {get; set;}

        public DateTime DateCreated { get; set; }
    }
}
