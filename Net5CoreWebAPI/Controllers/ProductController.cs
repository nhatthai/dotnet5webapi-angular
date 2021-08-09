using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Net5CoreWebAPI.Models;
using Net5CoreWebAPI.Services;

namespace Net5CoreWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        private readonly ProductService _productService;

        public ProductController(ProductService productService, ILogger<ProductController> logger)
        {
            _logger = logger;
            _productService = productService;
        }

        [HttpGet]
        //[Authorize]
        public async Task<ActionResult<ResponseModel>> GetProductsAsync([FromQuery] RequestModel requestModel)
        {
            try
            {
                var results = await _productService.GetProducts();
                var products = results.Skip(requestModel.PageIndex * requestModel.PageSize)
                    .Take(requestModel.PageSize)
                    .ToList();
                var productsResponse = new ResponseModel
                {
                    total = products.Count(),
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

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetByIdAsync(string id)
        {
            var product = await _productService.GetProduct(id);
            
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Create(Product product)
        {
            await _productService.Create(product);
            return new OkObjectResult(product);
        }

        [HttpPut]
        public async Task<ActionResult<Product>> Update(Product product)
        {
            var updatedProduct = await _productService.Update(product);
            return new OkObjectResult(updatedProduct);
        }

    }
}