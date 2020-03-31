using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Website_v3.Controllers
{
    public class ServicesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Assess()
        {
            return View();
        }

        public IActionResult Identify()
        {
            return View();
        }

        public IActionResult ManageSafety()
        {
            return View();
        }
        public IActionResult ManageTreatment()
        {
            return View();
        }
        public IActionResult Monitor()
        {
            return View();
        }
        public IActionResult Automate()
        {
            return View();
        }
    }
}