// importar alquiler.js y venta.js donde están los arreglos de objetos(DATA)
import propiedades_alquiler from "./alquiler.js"
import propiedades_venta from "./venta.js"



// FUNCIÓN DE CARGA DEL HTML DE PROPIEDADES EN VENTA EN EL INDEX
function propiedadesV (){
    //La constante ventaHTML es la que va a renderizar el HTML de las propiedades en venta
    const ventaHTML = document.getElementById('venta').querySelector('.row')
    
    //Limitamos a 3, el recorrido del arreglo 
    propiedades_venta.slice(0,3).forEach(propiedad => {
        /*De la línea 33 a 39, aplicamos un ternario para generar la clase, el icono y el texto */
        const html1 = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img
                        src="${propiedad.src}"
                        class="card-img-top"
                        alt="Imagen del departamento"
                    />
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                    <i class="fas fa-bath"></i> ${propiedad.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p> 
                <p class="text-danger  ${propiedad.smoke ? 'verde' : 'rojo'}">
                    <i class="${propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"} "> 
                     </i>${propiedad.smoke ? '<span class="verde"> Permitido fumar</span>' : '<span class="rojo"> No se permite fumar</span>'}
                </p>
                <p class="text-danger ${propiedad.pets ? 'verde' : 'rojo'}">
                    <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"} ">
                     </i>${propiedad.pets  ? '<span class="verde"> Mascotas permitidas</span>' : '<span class="rojo"> No se permiten mascotas</span>'}
                </p>
            </div>
        </div>
        </div> `

        ventaHTML.innerHTML += html1
    });

}

//LLamamos a la función una vez cargado el DOM

document.addEventListener('DOMContentLoaded', propiedadesV)

// FUNCIÓN DE CARGA DEL HTML DE LAS PROPIEDADES EN ALQUILER LIMITADO A 3 ELEMENTOS

function propiedadesA (){

    const alquilerHTML = document.getElementById('alquiler').querySelector('.row')

    propiedades_alquiler.slice(0,3).forEach(propiedad => {
        const html2 = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img
                        src="${propiedad.src}"
                        class="card-img-top"
                        alt="Imagen del departamento"
                    />
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                    <i class="fas fa-bath"></i> ${propiedad.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                <p class="text-danger  ${propiedad.smoke ? 'verde' : 'rojo'}">
                    <i class="${propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"} "> 
                     </i>${propiedad.smoke ? '<span class="verde"> Permitido fumar</span>' : '<span class="rojo"> No se permite fumar</span>'}
                </p>
                <p class="text-danger ${propiedad.pets ? 'verde' : 'rojo'}">
                    <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"} ">
                     </i>${propiedad.pets  ? '<span class="verde"> Mascotas permitidas</span>' : '<span class="rojo"> No se permiten mascotas</span>'}
                </p>
            </div>
        </div>
        </div> `

        alquilerHTML.innerHTML += html2
    });

}

document.addEventListener('DOMContentLoaded',propiedadesA)


