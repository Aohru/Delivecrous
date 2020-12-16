import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  foods: Array<Food> = new Array<Food>();
  constructor(private router: Router){
    this.foods.push({nom:'HotPot', prix:20, description:'La fondue chinoise,c est super bon !', image:'assets/icon/hotpot5.png'});
    this.foods.push({nom:'HotPot', prix:20, description:'La fondue chinoise,c est super bon !',image:'assets/icon/hotpot5.png'});
    this.foods.push({nom:'Blanquette de veau', prix:45, description:'La blanquette de veau,c est super bon !',image:'assets/icon/blanquette.jpg'});
  }

  goToCommande(){
    this.router.navigate(['commande']);
  }

  
}
