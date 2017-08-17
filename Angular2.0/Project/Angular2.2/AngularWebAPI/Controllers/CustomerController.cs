using AngularWebAPI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace AngularWebAPI.Controllers
{
    public class CustomerController : ApiController
    {
        // GET: api/Customer
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Customer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Customer
        // new record -- Post
        // searcg -- Get , Put , Delete
        public HttpResponseMessage Post(FormDataCollection formData)
        {
            // Formdata collection made it a enumerator
            IEnumerator<KeyValuePair<string,
                string>> k = formData.GetEnumerator();
            // moved to next position
            k.MoveNext();
            // took the current value put in key value pair
            KeyValuePair<string, string> c = k.Current;
            // key is the data 
            // its moved to a string
            string str = c.Key; // reading 

            // string data in to a
            // proper JSON object
            //JArray json = JArray.Parse(str);

            List<Customer> custs = JsonConvert.
                            DeserializeObject<List<Customer>>(str);

            foreach (var cust in custs)
            {
                cust.CustomerName = cust.CustomerName.ToUpper();
            }
            return Request.CreateResponse(HttpStatusCode.OK,
                                        custs);
        }

        // PUT: api/Customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customer/5
        public void Delete(int id)
        {
        }
    }
}
