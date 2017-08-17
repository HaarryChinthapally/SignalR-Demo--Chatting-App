using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularDemo.Models;
namespace AngularDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
          //  angularEntities ar = new angularEntities();
            
        }
        [HttpGet]
        public JsonResult getAll()
        {
            using (angularEntities dataContext = new angularEntities())
            {
                var employeeList = dataContext.tblcustomers.ToList();
                return Json(employeeList, JsonRequestBehavior.AllowGet);
            }
            //return Json();
        }
        public JsonResult getCustomerByNo(string id)
        {
            using (angularEntities dataContext = new angularEntities())
            {
                int no = Convert.ToInt32(id);
                var employeeList = dataContext.tblcustomers.Find(no);
                return Json(employeeList, JsonRequestBehavior.AllowGet);
            }
        }
        public string UpdateCustomer(Customer Cust)
        {
            if (Cust != null)
            {
                using (angularEntities dataContext = new angularEntities())
                {
                    int no = Convert.ToInt32(Cust.id);
                    var employeeList = dataContext.tblcustomers.Where(x => x.id == no).FirstOrDefault();
                    employeeList.Name = Cust.Name;
                    employeeList.Address1 = Cust.Address1;
                    employeeList.Address2 = Cust.Address2;
                    employeeList.State = Cust.State;
                    employeeList.Zipcode = Cust.Zipcode;
                    employeeList.Country = Cust.Country;
                    dataContext.SaveChanges();
                    return "Customer Updated";
                }
            }
            else
            {
                return "Invalid Customer";
            }
        }
        public string AddEmployee(Customer Cust)
        {
            if (Cust != null)
            {
                using (angularEntities dataContext = new angularEntities())
                {
                    tblcustomer one = new tblcustomer
                    {
                        Name = Cust.Name,
                        Address1 = Cust.Address1,
                        Address2 = Cust.Address2,
                        State = Cust.State,
                        Zipcode = Cust.Zipcode,
                        Country = Cust.Country
                    };
                    dataContext.tblcustomers.Add(one);
                    dataContext.SaveChanges();
                    return "Customer Updated";
                }
            }
            else
            {
                return "Invalid Customer";
            }
        }
        public string DeleteEmployee(Customer Cust)
        {
            if (Cust != null)
            {
                using (angularEntities dataContext = new angularEntities())
                {
                    int no = Convert.ToInt32(Cust.id);
                    var employeeList = dataContext.tblcustomers.Where(x => x.id == no).FirstOrDefault();
                    dataContext.tblcustomers.Remove(employeeList);
                    dataContext.SaveChanges();
                    return "Customer Deleted";
                }
            }
            else
            {
                return "Invalid Customer";
            }
        }
    }
}
