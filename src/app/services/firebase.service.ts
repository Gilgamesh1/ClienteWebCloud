import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  createClient(value:Cliente){
    console.log("FirebaseService");
    console.log(value.nombres);
    console.log(value.apellidos);
    console.log(value.edad);
    console.log(value.fechaNacimento);
    return this.db.collection('clientes').add({
      nombre: value.nombres,
      apellido: value.apellidos,
      edad: value.edad,
      fecNacimiento: value.fechaNacimento
    });
  }

  getAllClient(){
    return this.db.collection('clientes').snapshotChanges();
  }
}
