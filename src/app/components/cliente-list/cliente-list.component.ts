import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  public clientes=[];
  public promedio:number;
  public desEstandar:number;

  constructor(public firebaseService:FirebaseService) { }

  ngOnInit() {
    var count=0;
    this.promedio=0;
    this.desEstandar=0;
    this.firebaseService.getAllClient().subscribe(results=>{
      this.clientes=[];
      results.forEach((result: any) => {
        count++;
        this.promedio+=result.payload.doc.data().edad;
        this.clientes.push({
          id: result.payload.doc.id,
          data: result.payload.doc.data()
        });
      })
      this.promedio=this.promedio/count;
      results.forEach((result: any) => {
        this.desEstandar+=Math.pow(result.payload.doc.data().edad-this.promedio,2);
      })
      this.desEstandar=Math.round(Math.sqrt(this.desEstandar/(count-1))*100)/100;
    });
  }

}
