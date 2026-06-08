const slides = [
{
    imagen: "../Images/11inicialRG.jpg",
    titulo: "Esto es rio grande",
    descripcion: "Rio grande es más que un club, es una familia que lucha por sueños."
},
{
    imagen: "img2.jpg",
    titulo: "Imagen 2",
    descripcion: "Descripción de la imagen 2"
},
{
    imagen: "img3.jpg",
    titulo: "Imagen 3",
    descripcion: "Descripción de la imagen 3"
}
];

let actual = 0;

function mostrarSlide() {

    const img = document.getElementById("imagen");

    img.classList.add("fade-out");

    setTimeout(() => {
        img.src = slides[actual].imagen;
        document.getElementById("titulo").textContent = slides[actual].titulo;
        document.getElementById("descripcion").textContent = slides[actual].descripcion;

        img.classList.remove("fade-out");
    }, 500);
}

function siguiente() {
    actual = (actual + 1) % slides.length;
    mostrarSlide();
}

function anterior() {
    actual = (actual - 1 + slides.length) % slides.length;
    mostrarSlide();
}