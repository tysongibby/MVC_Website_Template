using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_BS_Website.Controllers
{
    public class InfoController : Controller
    {
        // GET: Info
        public ActionResult Index()
        {
            return View("../Home/Index");
        }

        public ActionResult Assess()
        {
            return View("Assess");
        }

        public ActionResult IdentifyIllness()
        {
            return View("IdentifyIllness");
        }

        public ActionResult Treat()
        {
            return View("Treat");
        }

        public ActionResult IdentifyRisk()
        {
            return View("IdentifyRisk");
        }

        public ActionResult ProgressReports()
        {
            return View("ProgressReports");
        }
        public ActionResult Notes()
        {
            return View("Notes");
        }
    }
}