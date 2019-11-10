import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private cliente:Cliente={
    nombres: "",
    apellidos: "",
    edad: 0,
    fechaNacimento: new Date()
  };

  constructor(public firebaseService:FirebaseService) { }

  ngOnInit() {
    
  }

  guardar(){
    this.firebaseService.createClient(this.cliente);
  }
}
