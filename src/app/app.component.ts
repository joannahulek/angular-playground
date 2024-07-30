import { Component } from '@angular/core';
import {WishItem} from "../shared/models/whishItem";
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true)
  ]
  title = 'Angular Playground App!';

  toggleItem(item: WishItem){
    item.isComplete = !item.isComplete
    console.log(item)

  }
}
