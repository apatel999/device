using Device.Api.Services;
using Device.Db.Data;
using Device.Db.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Device.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevicesController : ControllerBase
    {
        private IDeviceService _deviceService;

        public DevicesController(IDeviceService deviceService)
        {
            _deviceService = deviceService;
        }
        // GET: api/<DeviceController>
        [HttpGet]
        public ActionResult<IEnumerable<DeviceModel>> Get([FromQuery] string searchTerm = null)
        {
            var devices =  _deviceService.GetDevices(searchTerm);
            return Ok(devices);
        }

        // GET api/<DeviceController>/5
        [HttpGet("{id}")]
        public ActionResult<DeviceModel> Get(int id)
        {
            var device =  _deviceService.GetDevice(id);
            if(device == null)
            {
                return NotFound("Student does not exist");
            }

            return Ok(device);
        }
    }
}
