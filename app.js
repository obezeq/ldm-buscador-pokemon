'use strict'

// 1. Definimos el nombre del Pokémon que queremos consultar
const nombrePokemon = prompt("Nombre del Pokemon: ").trim().toLowerCase();

// 2. Hacemos la solicitud usando Fetch API
fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        return response.json();
    })
    .then(data => {
        
        // 3. Mostramos datos relevantes
        console.log('Nombre:', data.name);
        console.log('Altura:', data.height + ' decímetros');
        console.log('Peso:', data.weight + ' hectogramos');

        // 4. Extraemos y mostramos los tipos
        const tipos = data.types.map(tipo => tipo.type.name);
        console.log('Tipos:', tipos.join(', '));

        console.log(data);

        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        document.body.appendChild(img);
        
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
    
