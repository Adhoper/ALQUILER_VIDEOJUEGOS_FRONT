import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectDropDownModule
  ]
})
export class SharedModule { }
