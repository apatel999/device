import { Component, Input, OnInit } from '@angular/core';
import { DeviceType } from '../models/device';

@Component({
  selector: 'device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.scss']
})
export class DeviceIconComponent implements OnInit {

  @Input() type:DeviceType = 0;
  constructor() { }
  deviceClass: string[] = ['','fa-mobile-alt','fa-tablet-alt','fa-desktop','fa-laptop']

  ngOnInit(): void {
  }

  getDeviceClass(type:DeviceType): string[]{
   let classes = ['fas'];
   if(this.deviceClass[type])
    classes.push(this.deviceClass[type]);
    return classes;
  }
}
