import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WishItem} from "../../shared/models/whishItem";

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => item.isComplete,
  (item: WishItem) => !item.isComplete,
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})

export class WishFilterComponent {

  @Output() filter = new EventEmitter<any>();

  listFilter: any = '0'

  changeFilter(value: any){
    this.filter.emit(filters[value])
  }
}
