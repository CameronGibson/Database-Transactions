using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmployeeDataAccess;
using System.Web.Http.Cors;

namespace dbapi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmployeeController : ApiController
    {
        //GET
        public IEnumerable<Employee> Get()
        {
            using (EmployeesEntities entities = new EmployeesEntities())
            {
                    return entities.Employees.ToList();
            }
        }

        //POST
    }
}
