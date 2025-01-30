using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet("")]
        public async Task<ActionResult> GetAllProducts(){
            return Ok("Responce from GetAll products");
        }
    }
}
