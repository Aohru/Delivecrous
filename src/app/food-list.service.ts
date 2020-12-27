import { Injectable } from '@angular/core';
import { Food } from './interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  foods: Array<Food> = new Array<Food>();
  foodDetail: Food;
  prixTotal: number ;

  constructor() {
   }

  getAll(): Array<Food>{
    return this.foods;
  }

  getFoodDetail(): Food{
    return this.foodDetail;
  }

  setFoodDetail(f: Food){
    this.foodDetail=f;
  }

  getPrix(): number{
    this.prixTotal=0
    for (let f of this.foods) {
      this.prixTotal = this.prixTotal+f.prix;
      console.log(f.id);
    }
    return this.prixTotal;
  }

  addFood(food: Food) {
    this.foods.push({nom:food.nom, prix:food.prix, description:food.description, image:food.image});
  }

  delete(food: Food){
    let i = 0;
for (var j = 0; j<this.foods.length;j++){
  if (this.foods[j].nom==food.nom){
    this.foods.splice(j,1);
j--;
  }
}

  }
} 
