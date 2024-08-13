import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges {
  //Applied on Components with @Input
  //Detects how many times a component has been changed
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  //Once i fetch the data i want to pass the data into another component.
  //rooms will become a propery inside our <hinv-rooms-list>
  //Thus we can pass in the data
  //@Input is used when a component is receving Data
  //Acts as a receiver when it is called in another component,but as a normal prop when called within the component
  @Input() rooms: RoomList[] = [];

  //The child component communicates to the parent component through events.
  //Wow the parent will subscribe to this event (Will always be listening to a change in the event)
  //This will be the property of that component/ emmitting of events
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
