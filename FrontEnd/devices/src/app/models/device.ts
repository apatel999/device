export interface Device {
  id: number;
  name: string;
  status: DeviceStatus,
  type: DeviceType,
  temprature?:number
}

export enum DeviceStatus{
  Available = 'Available',
  Offline = 'Offline'
}

export enum DeviceType{
  Mobile = 1,
  Tablet,
  Desktop,
  Laptop
}
