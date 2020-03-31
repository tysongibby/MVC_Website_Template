using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Website_v3.Controllers
{
    public class InfoController : Controller
    {
        public IActionResult Index()
        {
            return View("../Services/Index");
        }

        public IActionResult Assess()
        {
            return View("../Services/Assess");
        }

        public IActionResult IdentifyRisk()
        {
            return View("../Services/Identify");
        }



    }
}