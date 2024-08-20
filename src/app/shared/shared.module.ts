import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectDropDownModule,
    FormsModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    SelectDropDownModule,
    FormsModule,
    RouterModule,
    MatDialogModule
  ]
})
export class SharedModule { }
