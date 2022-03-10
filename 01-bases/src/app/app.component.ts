import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
}
)
export class AppComponent {
  titulo: string = 'Contador App';
  // public titulo: string = 'Contador App'; ES LO MISMO
  numero: number = 10;

  acumular(valor: number){
    this.numero += valor;
  }
}
