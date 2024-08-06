import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";
import { SharedModule } from '../../shared/shared.module';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videojuego',
  standalone: true,
  imports: [HeroComponent,SelectDropDownModule,FormsModule],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css'
})
export class VideojuegoComponent implements OnInit {

  dropdownOptions:any;

  constructor() {
    
    
  }

  ngOnInit(): void {
    this.dropdownOptions = [
      {
        id: 1,
        name: "Nombre"
      },
      {
        id: 2,
        name: "Categoría"
      }
    ]
  }

  selectionChanged(ev:any){

    console.log(ev);
  }


  config = {

    displayKey:"name", //if objects array passed which key to be displayed defaults to description
    search:false, //true/false for the search functionlity defaults to false,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder:'Selecciona', // text to be displayed when no item is selected defaults to Select,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    noResultsFound: 'No se encontraron resultados!', // text to be displayed when no items are found while searching
    searchPlaceholder:'Buscar', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    clearOnSelection: false, // clears search criteria when an option is selected if set to true, default is false
    inputDirection: 'ltr', // the direction of the search input can be rtl or ltr(default)
    enableSelectAll: false, // enable select all option to select all available items, default is false
    
  }



}
