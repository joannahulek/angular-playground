import { Component } from '@angular/core';
import {WhishItem} from "../shared/models/whishItem";
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
  items: WhishItem[] = [
    new WhishItem('To learn Angular'),
    new WhishItem('Get Coffee', true)
  ]
  title = 'Angular Playground App!';

  toggleItem(item: WhishItem){
    item.isComplete = !item.isComplete
    console.log(item)

  }
}
