import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceListComponent } from './device-list/device-list.component';

const routes: Routes = [
  {path: 'device-list', component: DeviceListComponent},
  {path: 'device-detail/:id', component: DeviceDetailComponent},
  {path: '', redirectTo: '/device-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
