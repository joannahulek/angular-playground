import { Component } from '@angular/core';
import { WishItem } from "../shared/models/whishItem";
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => item.isComplete,
  (item: WishItem) => !item.isComplete,
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, FormsModule], // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('To dance bachata', false),
  ];

  // visibility and filters
  listFilter: any = '0'

  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter])
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  // addWish() component
  WishText = '';

  addWish() {
    if(this.WishText.trim()) {
      this.items.push(new WishItem(this.WishText));
      this.WishText = '';
    }
  }
}
