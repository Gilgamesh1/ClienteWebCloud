import { Component, OnInit, Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import {Cliente} from 'src/app/models/Cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable({
  providedIn: "root"
})
export class HomeComponent implements OnInit {
  public cliente:Cliente={
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
