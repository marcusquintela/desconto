import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const constante_descontos             = "descontos";
const constante_valorParaCalculo      = "constante_valorParaCalculo";
/*
  Generated class for the CalcularProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalcularProvider {

  public valorParaCalculo: string = "0";
  private dados_desconto = {
    um: {
      valorDoDesconto: "",
      valorMenosDesconto: ""
    },
    dois: {
      valorDoDesconto: "",
      valorMenosDesconto: ""
    },
    cinco: {
      valorDoDesconto: "",
      valorMenosDesconto: ""
    },
    dez: {
      valorDoDesconto: "",
      valorMenosDesconto: ""
    },
    onze: {
      valorDoDesconto: "",
      valorMenosDesconto: ""
    },
    doze: {
      valorDoDesconto: "",
      valorMenosDesconto: ""
    },
    quinze: {
      valorDoDesconto: "",
      valorMenosDesconto: ""
    },
    vinte: {
      valorDoDesconto: "",
      valorMenosDesconto: ""
    },
  }


  constructor(public http: Http) {
    console.log('Hello CalcularProvider Provider');
  }

  limpar() {
    this.valorParaCalculo = "0";
  }

  adicionaNovalor(valor: number): void {
    this.valorParaCalculo += valor;
  }

  getValorParaCalculo(): string {
    return localStorage.getItem(constante_valorParaCalculo).toString();
    
  }

  setValorParaCalculo(valor: string) {
    localStorage.setItem(constante_valorParaCalculo, valor);    
  }

  getDescontos(): any {
    return localStorage.getItem(constante_descontos);
  }

  calcularDescontos(): void {
    this.dados_desconto.um.valorDoDesconto        = this.calculaValorDodesconto(1);
    this.dados_desconto.um.valorMenosDesconto     = this.calculaValorMenosDesconto(this.dados_desconto.um.valorDoDesconto);

    this.dados_desconto.dois.valorDoDesconto      = this.calculaValorDodesconto(2);
    this.dados_desconto.dois.valorMenosDesconto   = this.calculaValorMenosDesconto(this.dados_desconto.dois.valorDoDesconto);

    this.dados_desconto.cinco.valorDoDesconto     = this.calculaValorDodesconto(5);
    this.dados_desconto.cinco.valorMenosDesconto  = this.calculaValorMenosDesconto(this.dados_desconto.cinco.valorDoDesconto);

    this.dados_desconto.dez.valorDoDesconto       = this.calculaValorDodesconto(10);
    this.dados_desconto.dez.valorMenosDesconto    = this.calculaValorMenosDesconto(this.dados_desconto.dez.valorDoDesconto);

    this.dados_desconto.onze.valorDoDesconto      = this.calculaValorDodesconto(11);
    this.dados_desconto.onze.valorMenosDesconto   = this.calculaValorMenosDesconto(this.dados_desconto.onze.valorDoDesconto);

    this.dados_desconto.doze.valorDoDesconto      = this.calculaValorDodesconto(12);
    this.dados_desconto.doze.valorMenosDesconto   = this.calculaValorMenosDesconto(this.dados_desconto.doze.valorDoDesconto);

    this.dados_desconto.quinze.valorDoDesconto    = this.calculaValorDodesconto(15);
    this.dados_desconto.quinze.valorMenosDesconto = this.calculaValorMenosDesconto(this.dados_desconto.quinze.valorDoDesconto);

    this.dados_desconto.vinte.valorDoDesconto     = this.calculaValorDodesconto(20);
    this.dados_desconto.vinte.valorMenosDesconto  = this.calculaValorMenosDesconto(this.dados_desconto.vinte.valorDoDesconto);

    localStorage.setItem(constante_descontos, JSON.stringify(this.dados_desconto));

  }

  calculaValorDodesconto(valor: number): string {

    console.log("CalcularProvider :: calculaValorDodesconto :: valor-> " + valor);
    valor = parseFloat(this.getValorParaCalculo()) * (valor / 100);
    
    return valor.toString();
  }
  
  calculaValorMenosDesconto(valor: string): string {
    console.log("CalcularProvider :: calculaValorMenosDesconto :: valor-> " + valor);    
    return (parseFloat(this.getValorParaCalculo()) - parseFloat(valor)).toString();
  }
  
}
