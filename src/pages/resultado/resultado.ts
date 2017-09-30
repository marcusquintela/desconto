import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalcularProvider } from '../../providers/calcular/calcular';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  public valorParaCalculo: string = this.calcularProvider.getValorParaCalculo();
  public descontos: any = JSON.parse(this.calcularProvider.getDescontos());

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public calcularProvider: CalcularProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');

    console.log(this.descontos);
    console.log(this.valorParaCalculo);
  }

}
