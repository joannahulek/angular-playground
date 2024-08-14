import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WishItem} from "../../shared/models/whishItem";
import {NgClass} from "@angular/common";
import {EventService} from "./../../shared/services/EventService"

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})

export class WishListItemComponent implements OnInit {
  @Input() wish! : WishItem
  constructor(private events: EventService) {
  }
  ngOnInit() {
  }

  removeWish(){
    this.events.emit('removeWish', this.wish)
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete
  }

}
