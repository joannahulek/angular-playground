import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { WishItem } from "../shared/models/whishItem";
import {WishListComponent} from "./wish-list/wish-list.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import {WishFilterComponent} from "./wish-filter/wish-filter.component";
import {EventService} from "./../shared/services/EventService"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent], // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('To dance bachata', false),
  ];

  constructor(private events:EventService) {
    events.listen('removeWish', (wish: any) =>{
      let id = this.items.indexOf(wish)
      this.items.splice(id, 1)
    })
  }
  filter:any = () => true
}
