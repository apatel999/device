import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device, DeviceStatus } from '../models/device';
import { DeviceService } from '../services/device-service';

@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices$: Observable<Device[]> = of([]);


  constructor(private deviceService:DeviceService) { }

  ngOnInit(): void {
    this.devices$ = this.deviceService.getDevices();
  }

}
