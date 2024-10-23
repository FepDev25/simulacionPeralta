export class Tarea{
    private static contadorid = 0;

    public id : number;

    constructor(
        public estado : boolean,
        public titulo : string,
        public descripcion : string,
        public mostrarDetalles = false
    ){
        this.id = ++Tarea.contadorid;
    }
}