import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Device, DeviceStatus, DeviceType } from '../models/device';
import { DeviceService } from '../services/device-service';

import { DeviceListComponent } from './device-list.component';


const devices: Device[] = [
  {id: 1, name: 'android 123', status: DeviceStatus.Available, type: DeviceType.Mobile, temprature: 20},
  {id: 2, name: 'Laptop 2025', status: DeviceStatus.Offline, type: DeviceType.Laptop, temprature: 10},
  {id: 3, name: 'iPhone 3323', status: DeviceStatus.Offline, type: DeviceType.Mobile, temprature: 12},
  {id: 4, name: 'Desktop 7897', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 24},
];

let deviceServiceStub = {
  getDevices: ()=>{ return of(devices)}
}

describe('DeviceListComponent', () => {
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceListComponent ],
      providers: [{provide: DeviceService, useValue: deviceServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  devices.forEach(device => {
    it('should render device: '+device.name, () => {
      const html = fixture.debugElement.nativeElement.innerHTML;
      let pattern = new RegExp(device.name, 'i');
      expect(pattern.test(html)).toBeTruthy();
    });

  });


});
