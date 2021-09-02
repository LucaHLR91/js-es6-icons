//CONSEGNA: stampare a video tutti gli elementi nella pagina html
//Icons array
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];
//End icons array

// STAMPARE TRAMITE CICLO FOREACH A VIDEO

const cardContainer = document.getElementById('card_container');

icons.forEach((element) => {
    const { name, prefix, family, type} = element;
    cardContainer.innerHTML += `
    <div class="card">
        <div class="symbol">
            <i class="${family} ${prefix}${name}" style="color: blue;"></i>
        </div>
        <div class="text">
            ${name.toUpperCase()}
        </div>
    </div>
    `
});

//FUNZIONI
// print(icons, cardContainer);  INVOCAZIONE FUNZIONE

// FUNZIONE PER FARE ESATTAMENTE LO STESSO FATTO SOPRA, SOLO CON LA POSSIBILITA DI RIUTILIZZARLA
// function print(array, container) {
//     const { name, prefix, family, type} = element;
//     cardContainer.innerHTML += `
//     <div class="card">
//         <div class="symbol">
//             <i class="${family} ${prefix}${name}" style="color: blue;"></i>
//         </div>
//         <div class="text">
//             ${name.toUpperCase()}
//         </div>
//     </div>
//     `
// };

