import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceService } from './services/device-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'devices';
  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  disabled: boolean = false;

  constructor(private deviceService:DeviceService) { }

  ngOnInit(){
    console.log("Parent ngOninit");
    let obj = this.searchTerm$.pipe(
      map(searchText => {
        return searchText ? searchText.trim() : '';
      }),
      map(searchText => {
        this.deviceService.search(searchText);
      })
    ).subscribe();
  }

  public onSearch(event: any){
     this.searchTerm$.next(event.target.value);
  }

  public onCancel(){
    this.searchTerm$.next('');
  }

  public onActivate(event:any){
    this.disabled = false;
    if(event instanceof DeviceDetailComponent )
       this.disabled = true;
  }
}
