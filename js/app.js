//VARIABLES
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

cargarEventListeners()
function cargarEventListeners() {

    //Cuando agregas curso presionando agregar curso
    listaCursos.addEventListener('click', agregarCurso)

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)
}



//FUNCIONES
function agregarCurso(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement 
        leerDatosCurso(cursoSeleccionado)
    }
}

//Elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        console.log(articulosCarrito);

        carritoHTML() //Iteramos y mostramos el carrito actualizado
    }
}

//Lee contenido del HTML y extrae info curso
function leerDatosCurso(curso) {
    // console.log(curso);
    //Creo objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
        if (existe) {
            //Actualizamos la cantidad
            const cursos = articulosCarrito.map(curso => {
                if(curso.id === infoCurso.id) {
                    curso.cantidad++
                    return curso //retorna objeto actualizado
                }else{
                    return curso //retorna objetos no duplicados
                }
            })
            articulosCarrito = [...cursos]
        }else{
            //Agregamos curso al carrito
            articulosCarrito = [...articulosCarrito, infoCurso]
        }
        


    //Agrega elementos al arreglo de carrito
    console.log(articulosCarrito);
    carritoHTML()
}


//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar HTML para evitar duplicados
    limpiarHTML()

    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${imagen}" width=100/>
             </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}

//Funcion que elimina duplicado en carrito
function limpiarHTML() {
    //Forma lenta
    // contenedorCarrito.innerHTML = ''

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}