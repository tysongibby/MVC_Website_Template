using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_BS_Website.Controllers
{
    public class HomeController : Controller
    {
        [HandleError]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Software()
        {
            ViewBag.Message = "Your services description page.";

            return View();
        }
        public ActionResult FAQs()
        {
            ViewBag.Message = "Your FAQs page.";

            return View();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult UtahEducatorsMentalWellnessConference2019()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Events()
        {
            ViewBag.Message = "Your contact page.";

            return RedirectToAction("UtahEducatorsMentalWellnessConference2019");
        }
    }
}