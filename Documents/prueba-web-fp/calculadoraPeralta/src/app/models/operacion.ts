export class Operacion{
    private static contadorid = 0;

    public id : number;

    constructor(
        public num1 : number,
        public num2 : number,
        public resultadoSuma : number,
        public resultadResta : number,
        public resultadoMulti : number,
        public resultadoDiv : number
    ){
        this.id = ++Operacion.contadorid;
    }
}