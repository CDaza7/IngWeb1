const restaurantes = [
    {
        path: './images/pacificomar.jpg',
        nombre: 'Restaurante pacífico mar',
        direccion: 'Av. 85 Nro.45 - Barranquilla',
        descripcion: 'Deliciosa comida de mar'
    },
    {
        path: './images/italiano.jpg',
        nombre: 'Restaurante Italiano',
        direccion: 'Av. 45 Nro. 1 - 85 Medellín',
        descripcion: 'Deliciosa comidad Italiana'
    },
    {
        path: './images/fritosymas.jpg',
        nombre: 'Restaurante Fritos y más ',
        direccion: 'Calle 45 Medellín',
        descripcion: 'Deliciosa comida rápida'
    },
    {
        path: './images/pollofrito.jpg',
        nombre: 'Restaurante Pollo frito',
        direccion: 'Kr 32 # 56 - 89 Medellín',
        descripcion: 'Lo mejor del pollo frito'
    }
];

const restItems = document.querySelector('#restItems');

function mostrarRest(){
    restaurantes.forEach((info) => {

        //Estructura 

        const miRest = document.createElement('div');
        miRest.classList.add('card', 'col-sm-4');

        const miRestCardBody = document.createElement('div');
        miRestCardBody.classList.add('card-body');

        const miRestTitle = document.createElement('h3');
        miRestTitle.classList.add('card-title');
        miRestTitle.textContent = info.nombre;

        const miRestImagen = document.createElement('img');
        miRestImagen.classList.add('img-fluid');
        miRestImagen.setAttribute('src',info.path);

        const miRestDireccion = document.createElement('div');
        miRestDireccion.classList.add('card-direccion');
        miRestDireccion.textContent = info.direccion;

        const miRestDescripcion = document.createElement('div');
        miRestDescripcion.classList.add('card-descripcion');
        miRestDescripcion.textContent = info.descripcion;

        const miRestBoton = document.createElement('button');
        miRestBoton.classList.add('btn','btn-primary');
        miRestBoton.textContent = 'Más información';

        // Insertamos
        miRestCardBody.appendChild(miRestTitle);
        miRestCardBody.appendChild(miRestImagen);
        miRestCardBody.appendChild(miRestDireccion);
        miRestCardBody.appendChild(miRestDireccion);
        miRestCardBody.appendChild(miRestDescripcion);
        miRestCardBody.appendChild(miRestBoton);
        miRest.appendChild(miRestCardBody);
        restItems.appendChild(miRest);    
    })
}

mostrarRest();
