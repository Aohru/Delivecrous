import { Injectable } from '@angular/core';
import { Food } from './interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  foods: Array<Food> = new Array<Food>();
  prixTotal: number ;

  constructor() { }

  getAll(): Array<Food>{
    return this.foods;
  }

  getPrix(): number{
    this.prixTotal=0;
    for (let f of this.foods) {
      this.prixTotal = this.prixTotal+f.prix;
    }
    return this.prixTotal;
  }

  addFood(food: Food) {
    this.foods.push({nom:food.nom, prix:food.prix, description:food.description, image:food.image});
  }
} 
