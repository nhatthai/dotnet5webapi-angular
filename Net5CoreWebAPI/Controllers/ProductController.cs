using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Net5CoreWebAPI.Models;


namespace Net5CoreWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        //[Authorize]
        public ActionResult<ResponseModel> GetProducts([FromQuery] RequestModel requestModel)
        {
            try
            {
                var clients = new string[] {
                    "Shoes",
                    "Clothes",
                    "Paint",
                    "Short",
                    "Hat",
                    "Neckline",
                    "Demo",
                    "Brace",
                    "Table",
                    "Chair",
                    "Keyboard",
                    "Mouse",
                    "Monitor",
                    "CPU",
                    "VGA",
                    "Chip",
                    "Phone",
                    "Watch",
                    "Lipper"
                };

                Random rnd = new();
                DateTime startDate = new DateTime(2019, 1, 1);
                var mockData = clients.Select(c => new Product()
                {
                    ProductId = rnd.Next(100, 290),
                    ProductName = c,
                    Code = rnd.Next(10000, 99999).ToString(),
                    Price = rnd.Next(1000, 90000),
                    Quality = rnd.Next(100, 9000),
                    DateCreated = DateTime.UtcNow,
                }).OrderBy(c => c.ProductId).ToList();

                // Return all as default. Otherwise, handle for pagination
                if (requestModel.PageSize <= 0)
                {
                    return Ok(mockData);
                }


                // handle pagination
                var products = mockData.Skip(requestModel.PageIndex * requestModel.PageSize)
                    .Take(requestModel.PageSize)
                    .ToList();

                var productsResponse = new ResponseModel
                {
                    total = mockData.Count(),
                    results = products
                };

                return Ok(productsResponse);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }
    }
}