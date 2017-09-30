import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultadoPage } from '../resultado/resultado';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  goToCalcularDesconto(){
    this.navCtrl.push(AboutPage);
  }
  

  goToCalcularPreco(){
    this.navCtrl.push(ResultadoPage);
  }
  

}
