using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_BS_Website.Controllers
{
    public class ErrorController : Controller
    {
        // GET: Error
        public ActionResult Index()
        {
            return View("Home/Index");
        }

        public ActionResult PageNotFound()
        {
            Response.StatusCode = 404;
            return View("PageNotFound");
        }

        public ActionResult InternalServer()
        {
            Response.StatusCode = 503;
            return View("InternalServer");
        }
    }
}