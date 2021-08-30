import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.scss']
})
export class CursosDetalheComponent implements OnInit {

  cursos: string[];

  constructor(
    private cursosService: CursosService
  ) {

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
