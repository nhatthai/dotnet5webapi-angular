using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using Microsoft.Extensions.Configuration;
using Net5CoreWebAPI.Models;

namespace Net5CoreWebAPI.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(IProductstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _products = database.GetCollection<Product>(settings.ProductsCollectionName);
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            return await _products.Find(product => true).ToListAsync();
        }

        public async Task<Product> GetProduct(string id)
        {
            return await _products.Find(product => product.ProductId == id).FirstOrDefaultAsync();
        }

        public async Task Create(Product product)
        {
            product.DateCreated = DateTime.UtcNow;
            await _products.InsertOneAsync(product);
        }

        public async Task<bool> Delete(string id)
        {
            DeleteResult deleteResult = await _products.DeleteOneAsync(product => product.ProductId.Equals(id));
            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }

        public async Task<bool> Update(Product productIn)
        {
            ReplaceOneResult updateResult =
                await _products.ReplaceOneAsync(product => product.ProductId == productIn.ProductId, productIn);
            return updateResult.IsAcknowledged && updateResult.ModifiedCount > 0;
        }
    }
}