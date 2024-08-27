import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    //window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    //window.scrollTo(0, 0);
  }

}
