import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalcularProvider } from '../../providers/calcular/calcular';
import { ResultadoPage } from '../resultado/resultado';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [
    CalcularProvider,
    CurrencyPipe
  ]
})
export class AboutPage {

  public valorParaCalculo:string = "0";

  constructor(
    public navCtrl: NavController,
    public calcularProvider: CalcularProvider,
    private currencyPipe: CurrencyPipe

  ) {

  }

  calcular(): void {

    this.calcularProvider.setValorParaCalculo(this.valorParaCalculo.toString());

    console.log(this.calcularProvider.getValorParaCalculo());

    let descontos: any = JSON.parse(this.calcularProvider.getDescontos());

    this.impimir(descontos);

    this.calcularProvider.calcularDescontos();

    descontos = JSON.parse(this.calcularProvider.getDescontos());

    this.impimir(descontos);

    // console.log(descontos.um.valorDoDesconto);
    // console.log(descontos.um.valorMenosDesconto);

    this.navCtrl.push(ResultadoPage);
  }

  limpar(){
    this.valorParaCalculo = "0";
  }


  ionViewDidLoad() {
  }

  impimir(descontos: any) {
    console.log(descontos);
    console.log(descontos.um);
    console.log(descontos.um.valorDoDesconto);
    console.log(descontos.um.valorMenosDesconto);
  }

  adicionaNovalor(valor){
    this.valorParaCalculo = ((parseFloat(this.valorParaCalculo) + parseFloat(valor)).toString()).toString();
  }

}
