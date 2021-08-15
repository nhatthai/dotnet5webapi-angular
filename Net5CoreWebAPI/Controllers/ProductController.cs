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
                    total = results.Count(),
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

            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Create(Product product)
        {
            try
            {
                await _productService.Create(product);
                return Ok(product);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> Update(Product product)
        {
            try
            {
                var updatedProduct = await _productService.Update(product);
                return Ok(updatedProduct);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            try
            {
                _logger.LogInformation("Delete", id);
                await _productService.Delete(id);
                return Ok();
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }
    }
}