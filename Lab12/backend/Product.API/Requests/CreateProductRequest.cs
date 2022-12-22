namespace Product.API.Requests;

public class CreateProductRequest
{
    public string Name { get; set; }
    
    public double Price { get; set; }
    
    public string ImageURL { get; set; }
    
    public int Quantity { get; set; }
}