using Microsoft.AspNetCore.Mvc;
using P1_ASP.Context;
using P1_ASP.Models;
using P1_ASP.Services;
using System.Diagnostics;

namespace P1_ASP.Controllers
{
    public class HomeController : Controller
    {
        private readonly ContextDB contextDB;
        private readonly ILogger<HomeController> _logger;

        
        public HomeController(ILogger<HomeController> logger, ContextDB contextDB)
        {
            _logger = logger;
            this.contextDB = contextDB;
           
        }

        public IActionResult Index()
        {
            ViewBag.Vname = "Autor:Toni";
            ViewBag.Vdesc = "Programador ASPx.net";
            return View();
        }
        public IActionResult Proyectos()
        {
            //ViewBag.Vname = new RepositoryOfProjects().GetProjects();
            ViewBag.Vname = contextDB.ClassProjects.ToList();
            return View();
        }
        public IActionResult Formacion()
        {
            return View();
        }
        public IActionResult Experiencias()
        {
            ViewBag.Vname = new RepositoryOfExperiencia().GetExperiencias();
            return View();
        }
        public IActionResult Conocimientos()
        {
            return View();
        }
        public IActionResult AboutMi()
        {
            return View();
        }
        public IActionResult Curriculum()
        {
            return View();
        }
        public IActionResult Contacto()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}