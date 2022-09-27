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
}



//FUNCIONES
function agregarCurso(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement 
        leerDatosCurso(cursoSeleccionado)
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
    // console.log(infoCurso);

    //Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
    console.log(articulosCarrito);
    carritoHTML()
}


//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar HTML para evitar duplicados
    limpiarHTML()

    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                ${curso.titulo}
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