using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Website_v3.Models;

namespace Website_v3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Test()
        {
            return View();
        }

        public IActionResult Custom()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }

        //public IActionResult Corporate()
        //{
        //    return View();
        //}

        public IActionResult Software()
        {
            return View("../Services/Index");
        }

        public IActionResult FAQ()
        {
            return View();
        }

        public IActionResult Technology()
        {
            return View("../Technology/Index");
        }

        public IActionResult FAQs()
        {
            return View("../Home/FAQ");
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult EmergencyResources()
        {
            return View();
        }

        public IActionResult About()
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
