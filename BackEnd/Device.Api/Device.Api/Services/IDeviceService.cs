using Device.Db.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Device.Api.Services
{
    public interface IDeviceService
    {
        DeviceModel GetDevice(int id);
        IEnumerable<DeviceModel> GetDevices(string searchTerm = null);
    }
}