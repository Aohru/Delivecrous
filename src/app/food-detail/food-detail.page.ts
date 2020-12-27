import { Component, OnInit } from '@angular/core';
import { Food } from '../interfaces/food';
import { Router } from "@angular/router";
import { FoodListService } from '../food-list.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {

  f: Food

  constructor(private foodList: FoodListService,
      private routerToback: Router) { }

      goToHome(){
        this.routerToback.navigate(['home']);
      }
      
  ngOnInit() {
    this.f= this.foodList.getFoodDetail();
  }

}
