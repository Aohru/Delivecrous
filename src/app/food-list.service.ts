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
      console.log(f.prix);
    }
    //prixTotal = this.foods.reduce(function(a, b){ return a.prix + b.prix; })
    //prixTotal = this.foods.reduce((a,b) =>  a.prix + b.prix ? a:b);
    console.log(this.prixTotal);
    return this.prixTotal;
  }

  addFood(food: Food) {
    this.foods.push({nom:food.nom, prix:food.prix, description:food.description, image:food.image});
  }
} 
