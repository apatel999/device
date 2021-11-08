using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Device.Db.Models
{
    public class DeviceRelation
    {
        [Key]
        public int DeviceRelationId { get; set; }
        public int DeviceId { get; set; }
        public int RelatedDeviceId { get; set; }
    }
}
