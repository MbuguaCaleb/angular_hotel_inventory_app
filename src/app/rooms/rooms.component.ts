import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
 
  hotelName = 'Calebs Hotel Master Class';
  numberOfRooms = 10;
  hideRooms = false;
  roomList: RoomList[] = [];

  //Initialize an empty Json Object from interface
  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 10,
    totalRooms: 40,
  };

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      rating: 4.5456677,
      roomNumber: 4,
      roomType: 'Test',
      ammenities: 'Kitchen',
      price: 4000,
      photos:
        'https://unsplash.com/photos/a-close-up-of-a-motherboard-and-a-pen-on-a-table-boMKfQkphro',
      checkInTime: new Date('2024-02-22'),
      checkOutTime: new Date('2024-02-22'),
    };

    //because of immutability concept (this.roomList.push(room), mutates the Object,
    //but does not create a new instance each time)
    //New Object each time (Previous Object  + New Item)
    this.roomList = [...this.roomList, room];
  }

  ngOnInit(): void {
    this.roomList = [
      {
        rating: 1.5456677,
        roomNumber: 1,
        roomType: 'Test',
        ammenities: 'Kitchen',
        price: 1000,
        photos:
          'https://unsplash.com/photos/a-close-up-of-a-motherboard-and-a-pen-on-a-table-boMKfQkphro',
        checkInTime: new Date('2024-02-20'),
        checkOutTime: new Date('2024-02-20'),
      },
      {
        rating: 2.545554,
        roomNumber: 2,
        roomType: 'TestThree',
        ammenities: 'Kitchen',
        price: 10000,
        photos:
          'https://unsplash.com/photos/a-view-of-a-beach-at-sunset-from-a-restaurant-r9IieuZ-ZmI',
        checkInTime: new Date('2024-02-20'),
        checkOutTime: new Date('2024-02-20'),
      },
      {
        rating: 3.5454,
        roomNumber: 3,
        roomType: 'Test Four',
        ammenities: 'Kitchen',
        price: 10000000,
        photos:
          'https://unsplash.com/photos/a-man-holding-a-cell-phone-in-his-hand-dIfsOkzzSk4',
        checkInTime: new Date('2024-02-20'),
        checkOutTime: new Date('2024-02-20'),
      },
    ];
  }
}
