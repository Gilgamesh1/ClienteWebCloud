import { Component, OnInit, Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ClienteProyeccion } from 'src/app/models/ClienteProyeccion';

@Component({
  selector: 'app-cliente-proyeccion',
  templateUrl: './cliente-proyeccion.component.html',
  styleUrls: ['./cliente-proyeccion.component.css']
})
@Injectable({
  providedIn: "root"
})
export class ClienteProyeccionComponent implements OnInit {
  public clientes:ClienteProyeccion[]=[];
  constructor(public firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getAllClient().subscribe(results=>{
      results.forEach((result: any) => {
        let cliente =new ClienteProyeccion(
          result.payload.doc.data().nombre,
          result.payload.doc.data().apellido,
          result.payload.doc.data().edad,
          result.payload.doc.data().fecNacimiento
        );
        this.clientes.push(cliente);
      })
      console.log(this.clientes);
    });
  }

}
