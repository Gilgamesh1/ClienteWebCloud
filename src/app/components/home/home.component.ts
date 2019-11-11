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
  public status: String;

  constructor(public firebaseService:FirebaseService) { }

  ngOnInit() {
    status='ninguno';
  }

  guardar(){
    var x = this.firebaseService.createClient(this.cliente).then(()=>{
        this.cliente.nombres= "";
        this.cliente.apellidos= "";
        this.cliente.edad= 0;
        this.cliente.fechaNacimento= new Date();
        this.status="ok";
      }, (error) => {
        console.log(error);
        this.status="error";
    });
  }
}
