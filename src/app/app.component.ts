import { Component, QueryList, ViewChildren } from '@angular/core';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-dados';
  resultado!:number;
  @ViewChildren('dadoselector') dados!:QueryList<DadoComponent>;
  lanzardados(){

    for (const dado of this.dados) {
      dado.lanzar();
    }
  }
  esganador(){
    if(!this.dados) return false;
    const [primerdado] = this.dados // Primer valor del array
    let gano=true;
    for (const dado of this.dados) {
      gano=gano&&primerdado.valor==dado.valor;
      if (!gano) break
    }
    return gano;
  }
  range (size:number){
    return new Array(size);

  }
}
