import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {WishItem} from "../../shared/models/whishItem";

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
