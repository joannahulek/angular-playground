import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WishListComponent } from "./wish/wish-list/wish-list.component";
import { AddWishFormComponent } from "./wish/add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish/wish-filter/wish-filter.component";

import { WishItem } from "../shared/models/whishItem";
import { EventService } from "../shared/services/EventService";
import { WishService } from "./wish/wish.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, FormsModule, HttpClientModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  providers: [WishService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // items!: WishItem[];
  items : WishItem[] = [
    new WishItem("To learn Angular"),
    new WishItem("Get Coffee", true),
    new WishItem("To dance bachata")
  ]


  constructor(private events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let id = this.items.indexOf(wish);
      this.items.splice(id, 1);
    });
  }

  ngOnInit(): void {
    // this.wishService.getWishes().subscribe(
    //   (data: any) => {
    //     this.items = data;
    //     },
    //   (error:any) =>{
    //     alert(error.message)
    //   }
    //   );
  }

  filter: any = () => true;
}
