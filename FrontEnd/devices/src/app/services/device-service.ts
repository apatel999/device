import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable, of } from "rxjs";
import {DEVICES, RELATEDDEVICES} from "../mock";
import { Device } from "../models/device";

@Injectable({
  providedIn: 'root',
})
export class DeviceService{

  private devices$: BehaviorSubject<Device[]> = new BehaviorSubject(DEVICES);
  private searchText$: BehaviorSubject<string> = new BehaviorSubject('');
  search(searchText: string) {
    //throw new Error('Method not implemented.');
    this.searchText$.next(searchText)

  }

  getDevices():Observable<Device[]>{

    return combineLatest([this.devices$, this.searchText$]).pipe(
      map(values =>{
        let [devices, searchText] = values;
        return this.filterDevices(devices, searchText);
      })
    );
  }

  filterDevices(devices: Device[], searchText: string): Device[]{
    if(!searchText.trim())
      return devices;

    return devices.filter(d => d.name.toLowerCase().includes(searchText.toLowerCase()))
  }

  getDeviceDetail(deviceId: number): Device{
    var index = DEVICES.findIndex(d => d.id == deviceId);
    return DEVICES[index];
  }

  getRelatedDevices(deviceId: number): Device[] | undefined{
    var index = DEVICES.findIndex(d => d.id == deviceId);
    if(index >= 0)
    {
      let relatedDevices = RELATEDDEVICES.find(rd => rd.deviceId == DEVICES[index].id);
      return relatedDevices?.relatedDevices;
    }

    return;
  }
}
