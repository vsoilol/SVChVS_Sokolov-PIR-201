<style>
img {
  border-style: none;
}
#photo {
  max-height: 9em;
  border-radius: 50%;
  margin-right: 2em;
}
#name p {
  font-size: 2.5em;
  padding: 0;
  margin: 0;
  letter-spacing: 3px;
}

#name p strong {
  color: #20b1f4 !important;
  color: var(--sp) !important;
  letter-spacing: 0px;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3em;
}
</style>

<header>
<img id="photo" src="img/photo.jpg" alt="profile picture" />

<div id="name">
    <p>Vladislav</p>
    <p><strong>Sokolov</strong></p>
</div>
</header>

# Contacts Info
* Cell: +375293053140
* Email: [vsoilol1701@gmail.com](mailto:john@example.com)
* Telegram: https://t.me/heruSokol
* Github: https://github.com/vsoilol
  
&#8194;

# Summary
I'm an enthusiastic, responsible and hard working IT person. Being worked for different projects helped me to adopt to the changes quickly and made me a mature team worker. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines. Ready to learn new technologies and try new areas in professional growth.

&#8194;

# Skills
___Primary Skill___ - development on Microsoft Platform (.NET, .NET Core).

___Secondary___ – development on Angular (v.12).

&#8194;

# Experience

### __January 2022 – Till Now  – Student, BRU university__

__Project:__ Website for generating educational programs.

__Activities:__
+ Design and implementation of DB tables structure; 
+ Implementation of Mediator pattern and clean architecture;
+ Design and implementation of data access logic (EF);

__Github:__ https://github.com/vsoilol/department-automation

__URL:__ https://department-automation-angular.firebaseapp.com/

__Technologies:__

+ Back-end: ASP.NET Core API, EF Core;
+ Front-end: Angular

---

### __March 2021 – June 2021 – Student, EPAM Systems__

__Project:__ Website for posting and storing recipes of dishes.

__Activities:__
+ Design and implementation of DB tables structure; 
+ Design and implementation of data access logic (ADO.NET, EF);
+ Implementation of unit-tests for MVC application;

__Github:__ https://github.com/vsoilol/RecipeBook

__Technologies:__
+ Back-end: ASP.NET Core MVC, ADO.NET;
+ Front-end: ASP.NET Core Razor, Bootstrap 5

&#8194;

# Additional Information
___English Level___ – Pre-Intermediate (A2)

&#8194;

# Completed courses
+ ___ASP.NET Core: March 2021 – June 2021, EPAM Systems___

&#8194;

# Code

``` C#
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