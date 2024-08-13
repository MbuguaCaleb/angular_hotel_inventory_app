import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from Inline Template</h1>
  //   <p>Angular is Awesome!</p> `,
  styleUrl: './app.component.scss',
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'hotelInventoryApp';
  role = 'Admin';
}
