import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule

  ],


  exports: [
    ListComponent,
    HeroComponent,

  ],
  declarations: [
    ListComponent,
    HeroComponent,


  ],

  providers: [],
})

export class HeroesModule { }
