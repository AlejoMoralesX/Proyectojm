import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitulocuatroComponent} from './titulocuatro.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import { Titulocuatroroutes } from './titulocuatro.routing';
import { CapitulounoComponent } from './capitulouno/capitulouno.component';
import { CapitulodosComponent } from './capitulodos/capitulodos.component';

import { BarRatingModule } from "../../../node_modules/ngx-bar-rating";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Titulocuatroroutes),
    SharedModule,
    BarRatingModule
  ],
  declarations: [
    TitulocuatroComponent,
    CapitulounoComponent,
    CapitulodosComponent
  ]
})
export class TitulocuatroModule { }
