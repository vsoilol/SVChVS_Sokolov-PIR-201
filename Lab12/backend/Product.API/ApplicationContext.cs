using Microsoft.EntityFrameworkCore;
using Product.API.Models;

namespace Product.API;

public class ApplicationContext : DbContext
{
    public DbSet<Models.Product> Products { get; set; }

    public DbSet<User> Users { get; set; }
    
    public ApplicationContext(DbContextOptions<ApplicationContext> options)
        : base(options)
    {
        Database.EnsureCreated();
    }
}