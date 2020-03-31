using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Website_v3.Controllers
{
    public class DiscountEligibilityController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult EducationEligibility()
        {
            return View();
        }

        public IActionResult NonprofitEligibility()
        {
            return View();
        }

        public IActionResult GovernmentEligibility()
        {
            return View();
        }

    }
}