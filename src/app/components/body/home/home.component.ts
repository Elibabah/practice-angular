import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private pruebaService: ServiceService ) { }

  probarPokeApi() {
      this.pruebaService.pokeApi().subscribe(( resp: any ) =>{
        console.log(resp)
      })
  }

}
