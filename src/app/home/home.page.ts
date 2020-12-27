import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodListService } from '../food-list.service';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  foods: Array<Food> = new Array<Food>();

  constructor(private router: Router, private foodListService: FoodListService){
    this.foods.push({nom:'HotPot', prix:40, description:'La fondue chinoise pour 2 personnes,c’est super bon !', image:'assets/icon/hotpot5.png'});
    this.foods.push({nom:'Ecrevisse Epicee', prix:35, description:'La Ecrevisse Epicee,c’est super bon !',image:'assets/icon/Ecrevisse.jpg'});
    this.foods.push({nom:'Petit pain vapeur', prix:20, description:'Le pain farci cuit vapeur,c’est super bon !',image:'assets/icon/vapeur.png'});
    this.foods.push({nom:'Entree', prix:19, description:'La entree contient 7 plats accompagnement,c’est super bon !',image:'assets/icon/Entree.jpg'});
    this.foods.push({nom:'Blanquette de veau', prix:18, description:'La blanquette de veau,c’est super bon !',image:'assets/icon/blanquette.jpg'});
  }

  goToPanier(){
    this.router.navigate(['panier']);
  }

  goToFoodDetail(f){
    this.foodListService.setFoodDetail(f);
    this.router.navigate(['food-detail']);
  }
  
  addToPanier(f){
this.foodListService.addFood(f);
  }
}
