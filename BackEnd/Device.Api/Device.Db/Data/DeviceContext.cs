using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Device.Db.Models;
namespace Device.Db.Data
{
    public class DeviceContext: DbContext
    {
        public DbSet<DeviceModel> Devices { get; set; }

        public DeviceContext(DbContextOptions<DeviceContext> options): base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
                
        }
    }
}
