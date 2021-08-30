import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  valorAtual: string = '';
  valorSalvo: string = '';
  valor: string = '';
  isMouseOver: boolean = false;
  nome: any = '';

  pessoa = {
    firstname: 'Marcos Vinicius',
    cpf: '020.393.261-70',
    age: 35
  };

  ngOnInit(): void {
  }

  botaoClicado() {
    return alert("Clicado!");
  }

  digitado(evento: any){
    console.log(evento);
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
