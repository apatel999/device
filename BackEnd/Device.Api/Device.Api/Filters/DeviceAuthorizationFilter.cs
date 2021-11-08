using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Device.Api.Filters
{
    public class DeviceAuthorizationFilter : IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var request = context.HttpContext.Request;
            var authorization = request.Headers["Authorization"];

            //Just checking authorization header exist, for better solution need to validate authorization token.
            if(string.IsNullOrEmpty(authorization))
            {
                context.Result = new ObjectResult("Authorization Fail")
                {
                    StatusCode = StatusCodes.Status401Unauthorized
                };
                return;
            }
            return;
        }
    }
}
