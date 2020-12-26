import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  constructor(private routerToback: Router) { }

  goToHome(){
    this.routerToback.navigate(['home']);
  }
  ngOnInit() {
  }

}
