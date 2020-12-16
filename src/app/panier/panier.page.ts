import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../food-list.service';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  foods: Array<Food> = new Array<Food>();
  prixTotal: number;
  constructor(private foodList: FoodListService) { }

  ngOnInit() {
    this.foods=this.foodList.getAll();
    this.prixTotal=this.foodList.getPrix();
    console.log(this.prixTotal);
  }

}
