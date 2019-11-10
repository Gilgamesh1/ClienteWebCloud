import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private cliente:Cliente={
    nombres: '',
    apellidos: '',
    edad: 0,
    fechaNacimento: new Date()
  };
  /*nombres: String;
  apellidos: String;
  Edad: number;
  fechaNacimento: Date;*/
  constructor() { }

  ngOnInit() {
    
  }

  guardar(){
    console.log("this.nombres");
    console.log(this.cliente.nombres);
  }
}
