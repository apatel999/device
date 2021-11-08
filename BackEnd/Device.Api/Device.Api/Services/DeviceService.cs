using Device.Db.Data;
using Device.Db.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Device.Api.Services
{
    public class DeviceService : IDeviceService
    {
        private DeviceContext _deviceContext;

        public DeviceService(DeviceContext deviceContext)
        {
            _deviceContext = deviceContext;
        }
        public IEnumerable<DeviceModel> GetDevices(string searchTerm = null)
        {

            var devices = _deviceContext.Devices.Select(d=>d);//from d in _deviceContext.Devices select d;

            if(!string.IsNullOrEmpty(searchTerm))
            {
                devices = devices.Where(d => d.Name.Contains(searchTerm));
            }

            return devices.ToList<DeviceModel>();
        }

        public DeviceModel GetDevice(int id)
        {
            return _deviceContext.Devices.FirstOrDefault(d => d.DeviceId == id)
                ;
        }
    }
}
