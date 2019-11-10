 export class ClienteProyeccion{
    nombres: String;
    apellidos: String;
    edad: number;
    fechaNacimento: Date;
    fechaMuerte: Date;
    calificacion: String;
    
    constructor(nombres:String, apellidos: String, edad: number, fechaNacimento: Date) {
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.edad=edad;
        this.fechaNacimento=fechaNacimento;
        var start=new Date(fechaNacimento);
        this.fechaMuerte=new Date();
        this.fechaMuerte.setFullYear(start.getFullYear()+74);
        var now=new Date();
        if(this.fechaMuerte>now)
            this.calificacion="APTO";
        else
            this.calificacion="NO APTO";
    }
}