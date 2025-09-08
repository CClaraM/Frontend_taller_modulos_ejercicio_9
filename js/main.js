/**
 * Importar modulo contactos
 */
import Contacto from "./contactos.js";

/**
 * Definicion de arreglo de contactos
 */
let misContactos=[];
let busqueda=null;

/**
 * 
 */
const btnAgregar = document.getElementById("btnAgregar");
const btnConsultar = document.getElementById("btnConsultar");
const btnActualizar = document.getElementById("btnActualizar");
const btnEliminar = document.getElementById("btnEliminar");

/**
 * Funcion que responde al evento clickAgregar del boton agregar
 * Esta funcion permite agregar un elemento a los contacts
 */
btnAgregar.addEventListener("click",function(){
    let identificacion = document.getElementById("txtId").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let correo = document.getElementById("txtCorreo").value;
    let celular = document.getElementById("txtCelular").value;

    let contacto = new Contacto(identificacion,nombre, apellido, correo, celular);
    misContactos.push(contacto);
    console.log(contacto);
    mostrarTablaContactos();
});

btnConsultar.addEventListener("click",function(){
    let nombre = document.getElementById("txtNombre").value;
    document.getElementById("frmContactos").reset();
    document.getElementById("txtNombre").value = nombre

    if(nombre!=""){
        busqueda = misContactos.find(con=>con.nombre===nombre);
        if (busqueda){
            document.getElementById("txtId").value=busqueda.identificacion;
            document.getElementById("txtNombre").value=busqueda.nombre;
            document.getElementById("txtApellido").value=busqueda.apellido;
            document.getElementById("txtCorreo").value=busqueda.correo;
            document.getElementById("txtCelular").value=busqueda.celular;
        } else {
            swal.fire("Consultar Contacto","No existe el contacto en la libreta","warning");
        }
    } else {
        swal.fire("Consultar Contacto","Debe ingresar un nombre para consultar","warning");
    }

});

/**
 * 
 */
btnEliminar.addEventListener("click",function(){
    if(busqueda!=null){
        swal.fire({
            text: `Desea eliminar el contacto ${busqueda.nombre}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Borrar!"
        }).then((result)=> {
            if(result.isConfirmed){
                document.getElementById("frmContactos").reset();
                const posicion = misContactos.indexOf(busqueda);
                console.log(posicion);
                //Eliminar
                misContactos.splice(posicion,1);
                mostrarTablaContactos();
                swal.fire("Deleted!","El contacto fue eliminado.","success");
                busqueda=null;
            }
        });
    } else {
        swal.fire("Eliminar Contacto","Para eliminar un contacto primero se tiene que consultar por nombre","warning");
    }
});

/**
 * Funcion
 */
function mostrarTablaContactos(){
    let listaContactos = document.getElementById("listaContactos");
    listaContactos.innerHTML=""; //Limpiar lista
    misContactos.forEach(elemento =>{
        /**
         * Creacion de fila de contacto
         */
        let fila = document.createElement("tr");
        /**
         * Creacion de los campos de columna
         */
        let colId = document.createElement("td");
        let colNombre = document.createElement("td");
        let colApellido = document.createElement("td");
        let colCorreo = document.createElement("td");
        let colCelular = document.createElement("td");

        /**
         * Asignacion de los campos de columna
         */ 
        colId.textContent = elemento.identificacion;
        colNombre.textContent = elemento.nombre;
        colApellido.textContent = elemento.apellido;
        colCorreo.textContent = elemento.correo;
        colCelular.textContent = elemento.celular;
        

        /**
         * Adhesion de campos a la fila
         */ 
        fila.appendChild(colId);
        fila.appendChild(colNombre);
        fila.appendChild(colApellido);
        fila.appendChild(colCorreo);
        fila.appendChild(colCelular);
         

        /**
         * Adhesion de la fila a lista de contactos
         */
        listaContactos.appendChild(fila);
    });
};
