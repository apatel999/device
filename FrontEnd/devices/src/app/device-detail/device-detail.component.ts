import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Device } from '../models/device';
import { DeviceService } from '../services/device-service';

@Component({
  selector: 'device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  device$: BehaviorSubject<any>  = new BehaviorSubject(null);
  relatedDevices$: BehaviorSubject<any>  = new BehaviorSubject([]);

  constructor(private deviceService: DeviceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

      this.route.params.subscribe(params => {
        console.log(params['id']);
        this.device$.next(this.deviceService.getDeviceDetail(params['id']));
       this.relatedDevices$.next(this.deviceService.getRelatedDevices(params['id']));
      });
  }

}
