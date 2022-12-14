using P1_ASP.Models;

namespace P1_ASP.Services
{
    public class RepositoryOfProjects
    {
        public List<ClassProjects> GetProjects()
        {
            return new List<ClassProjects>() {
                new ClassProjects {
                    Title = "ASP.net",
                    Description = "WEB realizado en ASP.NET Core",
                    Link = "https://amazon.com",
                    ImageURL = "/Images/aspNetLogo.png"
                },
                new ClassProjects {
                    Title = "Java Script",
                    Description = "Elejir tu propia aventura con Drag and Drop",
                    Link = "/proyectos/M6-Elegir aventura-ToniBone/index.html",
                    ImageURL = "/images/Aventura.PNG"
                 },
                 new ClassProjects {
                    Title = "Boostrap 5",
                    Description = "Pagina de Roberto con boostrap",
                    Link = "/proyectos/M9-Semantica-ToniBone/html5/index.html",
                    ImageURL = "/images/Boostrap5.png"
                 },
                  new ClassProjects {
                    Title = "Java Script",
                    Description = "Funciones de Java",
                    Link = "/proyectos/M6-Funciones Facilonas-ToniBone/index.html",
                    ImageURL = "/images/FuncionesFacilonas.PNG"
                 },
                   new ClassProjects {
                    Title = "PC Builder",
                    Description = "Proyecto de M12 pagina",
                    Link = "https://Monlau.com",
                    ImageURL = "/images/ProyectoM12.PNG"
                 },
                    new ClassProjects {
                    Title = "Webs al Punt",
                    Description = "Pagina de concurso de grado medio ",
                    Link = "/proyectos/WebsAlPunt.html",
                    ImageURL = "/images/WebsAlPunt.PNG"
                 }
            };
        }
    }
}
