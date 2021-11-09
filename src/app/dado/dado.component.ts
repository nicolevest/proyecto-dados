import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  valor!: number;
  constructor() { }

  ngOnInit(): void {
    this.valor=Math.trunc(Math.random()*6)+1;
  }
  caradado(){
    return `assets/face_${this.valor}.png`;
  }

  lanzar (){
    this.valor=Math.trunc(Math.random()*6)+1;
    return this.valor
  }

}
