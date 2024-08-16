import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WishListComponent } from "./wish/wish-list/wish-list.component";
import { AddWishFormComponent } from "./wish/add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish/wish-filter/wish-filter.component";
import {WishComponent} from "./wish/wish.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, FormsModule, HttpClientModule, WishListComponent, AddWishFormComponent, WishFilterComponent, WishComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }

}
