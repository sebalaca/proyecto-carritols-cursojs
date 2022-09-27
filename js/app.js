//VARIABLES
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')

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
    console.log(curso);
    //Creo objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso);
}
