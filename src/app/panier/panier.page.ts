import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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

  constructor(
      private foodList: FoodListService,
      private routerToCommande: Router,
      private routerToback: Router) {}

  goToHome(){
    this.routerToback.navigate(['home']);
  }

  goToCommande(){
    this.routerToCommande.navigate(['commande']);
  }

  delete(f){
    this.foodList.delete(f);
    this.prixTotal = this.foodList.getPrix();
  }


  ngOnInit(){
  this.foods = this.foodList.getAll();
  this.prixTotal = this.foodList.getPrix();
  console.log(this.prixTotal);
  }
}
