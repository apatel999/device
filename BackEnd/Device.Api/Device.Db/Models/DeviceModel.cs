
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Device.Db.Models
{
    [Table("Device")]
    public class DeviceModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("DeviceId")]
        public int DeviceId { get; set; }
        public string Name { get; set; }
        public DeviceTypeEnum Type { get; set; }
        public DeviceStatusEnum Status { get; set; }
        public decimal Temprature { get; set; }
      
        //public virtual List<DeviceModel> RelatedDevice { get; set; }
    }
}
