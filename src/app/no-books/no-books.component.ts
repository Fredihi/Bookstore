import { Component } from '@angular/core';

@Component({
  selector: 'app-no-books',
  template: `
    <div class="front">
      <h1 style="color: white;">Oops! Seems like your took a wrong turn,</h1>
      <br>
      <h3 style="color: white;">there are no books here.</h3>
    </div>
  `,
  styleUrls: ['./no-books.component.css']
})
export class NoBooksComponent {

}
