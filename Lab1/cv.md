<header style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin-bottom: 3em;">
<img style="border-style: none; max-height: 9em; border-radius: 50%; margin-right: 2em;" id="photo" src="./photo.jpg" alt="profile picture" />

<div id="name">
    <p style="font-size: 2.5em; padding: 0; margin: 0; letter-spacing: 3px;">Vladislav</p>
    <p style="font-size: 2.5em; padding: 0; margin: 0;"><strong>Sokolov</strong></p>
</div>
</header>

# Contacts Info

- Cell: +375293053140
- Email: [vsoilol1701@gmail.com](mailto:vsoilol1701@gmail.com)
- Telegram: [https://t.me/heruSokol](https://t.me/heruSokol)
- Github: [https://github.com/vsoilol](https://github.com/vsoilol)

&#8194;

# Summary

I'm an enthusiastic, responsible and hard working IT person. Being worked for different projects helped me to adopt to the changes quickly and made me a mature team worker. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines. Ready to learn new technologies and try new areas in professional growth.

&#8194;

# Skills

**_Primary Skill_** - development on Microsoft Platform (.NET, .NET Core).

**_Secondary_** – development on Angular (v.12).

&#8194;

# Experience

### **January 2022 – Till Now – Student, BRU university**

**Project:** Website for generating educational programs.

**Activities:**

- Design and implementation of DB tables structure;
- Implementation of Mediator pattern and clean architecture;
- Design and implementation of data access logic (EF);

**Github:** https://github.com/vsoilol/department-automation

**URL:** https://department-automation-angular.firebaseapp.com/

**Technologies:**

- Back-end: ASP.NET Core API, EF Core;
- Front-end: Angular

---

### **March 2021 – June 2021 – Student, EPAM Systems**

**Project:** Website for posting and storing recipes of dishes.

**Activities:**

- Design and implementation of DB tables structure;
- Design and implementation of data access logic (ADO.NET, EF);
- Implementation of unit-tests for MVC application;

**Github:** https://github.com/vsoilol/RecipeBook

**Technologies:**

- Back-end: ASP.NET Core MVC, ADO.NET;
- Front-end: ASP.NET Core Razor, Bootstrap 5

&#8194;

# Additional Information

**_English Level_** – Pre-Intermediate (A2)

&#8194;

# Completed courses

- **_ASP.NET Core: March 2021 – June 2021, EPAM Systems_**

&#8194;

# Code

```C#
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace DepartmentAutomation.Web.Controllers
{
    [ApiController]
    public abstract class ApiControllerBase : ControllerBase
    {
        private ISender _mediator = null!;

        protected ISender Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<ISender>();
    }
}
```
