import { Device, DeviceStatus, DeviceType } from "./models/device";

export const DEVICES:Device[] = [
  {id: 1, name: 'android 123', status: DeviceStatus.Available, type: DeviceType.Mobile, temprature: 20},
  {id: 2, name: 'Laptop 2025', status: DeviceStatus.Offline, type: DeviceType.Laptop, temprature: 10},
  {id: 3, name: 'iPhone 3323', status: DeviceStatus.Offline, type: DeviceType.Mobile, temprature: 12},
  {id: 4, name: 'Desktop 7897', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 24},
  {id: 5, name: 'Desktop 666', status: DeviceStatus.Offline, type: DeviceType.Desktop, temprature: 20},
  {id: 6, name: 'Desktop 212', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 21},
  {id: 7, name: 'Desktop 534', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 22}
];


export const RELATEDDEVICES:{deviceId: number, relatedDevices: Device[]}[] = [
  {
    deviceId: 1,
    relatedDevices:
    [
      {id: 2, name: 'Laptop 2025', status: DeviceStatus.Offline, type: DeviceType.Laptop, temprature: 10},
      {id: 3, name: 'iPhone 3323', status: DeviceStatus.Offline, type: DeviceType.Mobile, temprature: 12},
      {id: 4, name: 'Desktop 7897', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 24},
      {id: 6, name: 'Desktop 212', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 21},
    ]
  },

  {
    deviceId: 3,
    relatedDevices:
    [
      {id: 1, name: 'android 123', status: DeviceStatus.Available, type: DeviceType.Mobile, temprature: 20},
      {id: 2, name: 'Laptop 2025', status: DeviceStatus.Offline, type: DeviceType.Laptop, temprature: 10},
    ]
  },

  {
    deviceId: 4,
    relatedDevices:
    [
      {id: 1, name: 'android 123', status: DeviceStatus.Available, type: DeviceType.Mobile, temprature: 20},
      {id: 2, name: 'Laptop 2025', status: DeviceStatus.Offline, type: DeviceType.Laptop, temprature: 10},
      {id: 3, name: 'iPhone 3323', status: DeviceStatus.Offline, type: DeviceType.Mobile, temprature: 12},
      {id: 6, name: 'Desktop 212', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 21},
      {id: 7, name: 'Desktop 534', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 22}
    ]
  },

  {
    deviceId: 5,
    relatedDevices:
    [
      {id: 3, name: 'iPhone 3323', status: DeviceStatus.Offline, type: DeviceType.Mobile, temprature: 12},
      {id: 6, name: 'Desktop 212', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 21},
      {id: 7, name: 'Desktop 534', status: DeviceStatus.Available, type: DeviceType.Desktop, temprature: 22}
    ]
  }

];
