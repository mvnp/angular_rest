import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineComponent } from './online/online.component';
import { PresencialComponent } from './presencial/presencial.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';


@NgModule({
  declarations: [
    OnlineComponent,
    PresencialComponent,
    CursosDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnlineComponent,
    PresencialComponent,
    CursosDetalheComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
