import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log("entre yo");
  }

}
