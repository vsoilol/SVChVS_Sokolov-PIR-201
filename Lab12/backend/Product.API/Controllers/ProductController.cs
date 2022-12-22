using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Product.API.Requests;

namespace Product.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly ApplicationContext _context;

    public ProductController(ApplicationContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ActionResult<List<Models.Product>>> GetAllAsync()
    {
        return await _context.Products.ToListAsync();
    }
    
    [HttpPost]
    public async Task<ActionResult> CreateAsync([FromBody] CreateProductRequest request)
    {
        var product = new Models.Product
        {
            Name = request.Name,
            Price = request.Price,
            ImageURL = request.ImageURL,
            Quantity = request.Quantity
        };

        await _context.Products.AddAsync(product);
        await _context.SaveChangesAsync();
        return Ok();
    }
    
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAsync([FromRoute] Guid id)
    {
        var product = await _context.Products.FirstOrDefaultAsync(_ => _.Id == id);
        if (product is null)
        {
            return BadRequest();
        }
        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
        return Ok();
    }
    
    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateAsync([FromRoute] Guid id, [FromBody] UpdateProductRequest request)
    {
        var product = await _context.Products.FirstOrDefaultAsync(_ => _.Id == id);
        
        if (product is null)
        {
            return BadRequest();
        }

        product.Name = request.Name;
        product.Price = request.Price;
        product.ImageURL = request.ImageURL;
        product.Quantity = request.Quantity;
        
        await _context.SaveChangesAsync();
        return Ok();
    }
}