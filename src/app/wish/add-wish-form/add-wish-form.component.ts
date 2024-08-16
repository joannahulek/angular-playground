import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WishItem} from "../../../shared/models/whishItem";

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit{

  @Output() newWish = new EventEmitter<WishItem>

  ngOnInit(): void {
  }

  WishText = '';

  addWish() {
    if(this.WishText.trim()) {
      this.newWish.emit(new WishItem(this.WishText))
      this.WishText = '';
    }
  }
}
