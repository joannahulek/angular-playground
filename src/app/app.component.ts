import { Component } from '@angular/core';
import { WishComponent } from './wish/wish.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
