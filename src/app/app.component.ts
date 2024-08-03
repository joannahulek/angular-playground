import { Component } from '@angular/core';
import { WishItem } from "../shared/models/whishItem";
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms'; // Import FormsModule

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
    new WishItem('Get Coffee', true)
  ];

  WishText = '';

  addWish() {
    if(this.WishText.trim()) {
      this.items.push(new WishItem(this.WishText));
      this.WishText = '';
    }
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
