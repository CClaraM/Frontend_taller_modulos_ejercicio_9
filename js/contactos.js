export default class Contacto{
        /**
         *  Constructor de clase
         * @param {int} identificacion 
         * @param {string} nombre 
         * @param {string} apellido 
         * @param {string} correo 
         * @param {int} celular 
         */
    constructor(identificacion, nombre, apellido, correo, celular){
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.celular = celular;
    }

        /**
         * Metodo utilizado para actualizar los datos del contacto
         * @param {int} identificacion 
         * @param {string} nombre 
         * @param {string} apellido 
         * @param {string} correo 
         * @param {int} celular 
         */
    upgradeContacto(identificacion, nombre, apellido, correo, celular){
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.celular = celular;
    }

}