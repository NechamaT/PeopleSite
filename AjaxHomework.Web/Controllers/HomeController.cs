using AjaxHomework.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AjaxHomework.Data;

namespace AjaxHomework.Web.Controllers
{
    public class HomeController : Controller
    {
        private string _connectionString = @"Data Source=.\sqlexpress;Initial Catalog=PeopleDb;Integrated Security=true;";

        public IActionResult Index()
        {

            return View();
        }

        public IActionResult Add()
        {
            return View();
        }
        [HttpPost]

        public IActionResult Add(Person p)
        {
            var db = new PeopleDb(_connectionString);
            db.AddPerson(p);
            return Json(p);
        }

        public IActionResult Edit(Person p)
        {
            var db = new PeopleDb(_connectionString);
            db.EditPerson(p);
            return Json(p);
        }

        public IActionResult Delete(int id)
        {
            var db = new PeopleDb(_connectionString);
            db.DeletePerson(id);
            return Json(id);
        }

        public IActionResult GetAll()
        {
            var db = new PeopleDb(_connectionString);
            var ppl = db.GetAll();
            return Json(ppl);
        }



    }
}
