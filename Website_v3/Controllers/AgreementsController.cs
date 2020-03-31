using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Website_v3.Controllers
{
    public class AgreementsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult SubscriptionAgreement()
        {
            return View();
        }

        public IActionResult AcceptableUsePolicy()
        {
            return View();
        }

        public IActionResult CodeOfConduct()
        {
            return View();
        }

        public IActionResult EducationEligibility()
        {
            return View();
        }

        public IActionResult GovernmentEligibility()
        {
            return View();
        }

        public IActionResult PrivacyPolicy()
        {
            return View();
        }

        public IActionResult HIPAA()
        {
            return View();
        }
    }
}