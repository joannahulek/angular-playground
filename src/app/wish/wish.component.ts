import { Component } from '@angular/core';
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import {WishFilterComponent} from "./wish-filter/wish-filter.component";
import {WishListComponent} from "./wish-list/wish-list.component";

import { WishItem } from "../../shared/models/whishItem";
import { EventService } from "../../shared/services/EventService";
import { WishService } from "./wish.service";

@Component({
  selector: 'app-wish',
  standalone: true,
    imports: [
        AddWishFormComponent,
        WishFilterComponent,
        WishListComponent
    ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
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
