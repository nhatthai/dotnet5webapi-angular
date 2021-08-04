using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
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

        //[HttpGet]
        //public IEnumerable<Product> Get()
        //{
        //    return Ok();
        //}

        //// GET api/products
        /// <summary>
        /// Get products.
        /// </summary>
        /// <returns></returns>
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Product>>> Get()
        //{
        //    return new ObjectResult();
        //}
    }
}