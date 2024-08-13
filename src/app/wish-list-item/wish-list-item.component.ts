import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WishItem} from "../../shared/models/whishItem";
import {NgClass} from "@angular/common";

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
  @Input() wishText! : string
  @Input() fullfilled! : boolean
  @Output() fullfilledChange = new EventEmitter<boolean>
  constructor() {
  }
  ngOnInit() {
  }

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled)
  }

}
