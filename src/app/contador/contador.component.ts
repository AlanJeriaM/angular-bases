import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `<h3>{{contador}}</h3>

  <button (click)="incrementar(1)">+1</button>

  <button (click)="reset()">reset</button>

  <button (click)="incrementar(-1)">-1</button>




  `,

})

export class ContadorComponent{

  public contador: number = 10;

  incrementar(valor: number):void{
    this.contador+=valor;
  }

  reset():void{
    this.contador=10;
  }


}
