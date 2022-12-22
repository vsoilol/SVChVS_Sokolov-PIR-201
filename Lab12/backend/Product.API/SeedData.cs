using Product.API.Models;

namespace Product.API;

public class SeedData
{
    public static async Task SeedUserAsync(ApplicationContext context)
    {
        var user = new User
        {
            Username = "user",
            Password = "1111",
        };

        if (!context.Users.Any(_ => _.Username == user.Username && _.Password == user.Password))
        {
            await context.Users.AddAsync(user);
            await context.SaveChangesAsync();
        }
    }
}