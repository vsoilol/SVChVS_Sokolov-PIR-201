using Microsoft.EntityFrameworkCore;
using Product.API;
using Product.API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var sqlConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ApplicationContext>(options =>
{
    options.UseSqlServer(sqlConnectionString);
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "CorsPolicy",
        builder =>
        {
            builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
});

var app = builder.Build();



using (var scope = app.Services.CreateScope()) {
    var services = scope.ServiceProvider;

    var context = services.GetRequiredService<ApplicationContext>();
    await SeedData.SeedUserAsync(context);
}

/*using (ServiceProvider serviceProvider = app.Services.GetService())
{
    // Review the FormMain Singleton.
    var formMain = serviceProvider.GetRequiredService<FormMain>();
    Application.Run(formMain);
}*/

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("CorsPolicy");

app.MapControllers();

app.Run();