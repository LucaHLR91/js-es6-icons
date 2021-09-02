//CONSEGNA: stampare a video tutti gli elementi nella pagina html
//Array icone
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
//Fine array icone

// STAMPARE TRAMITE CICLO FOREACH A VIDEO

const cardContainer = document.getElementById('card_container');
const colors =[
    'blue',
    'orange',
    'purple'
];

// USO FUNZIONE PER CREARE ARRAY COLORATO
const coloredArray = colorIcons(icons, colors);

// USO FUNZIONE PER STAMPARE 
const types = getTypes(coloredArray);
const select = document.getElementById('type');
printOption(types, select);

//STAMPO LE CARTE
icons.forEach((element) => {
    const { name, prefix, family, type, color} = element;
    cardContainer.innerHTML += `
    <div class="card">
        <div class="symbol">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        </div>
        <div class="text">
            ${name.toUpperCase()}
        </div>
    </div>
    `
});

// AL CAMBIO DI SELEZIONE MOSTRARE LE ICONE FILTRATE - ANDARE A LEGGERE METODO ONCHANGE
select.onchange = function(element) {
    console.log(element.targert.value);
    const filtered = filteredValue(icons, element.target.value);
    console.log(filtered);

    print(filtered, cardContainer);
};

console.log(getTypes(icons));

// const coloredArray = colorIcons(icons, colors);

//FUNZIONI
// print(icons, cardContainer);  INVOCAZIONE FUNZIONE

// FUNZIONE PER FARE ESATTAMENTE LO STESSO FATTO SOPRA, SOLO CON LA POSSIBILITA DI RIUTILIZZARLA
function print(array, container) {
    array.forEach((element) => {
        const { name, prefix, family, type} = element;
        container.innerHTML += `
        <div class="card">
            <div class="symbol">
                <i class="${family} ${prefix}${name}"></i>
            </div>
            <div class="text">
                ${name.toUpperCase()}
            </div>
        </div>
        `
    });
};

// FUNZIONE PER PRENDERE IL TYPE DELL'ELEMENTO E CREARE UN ARRAY SUDDIVISO PER TIPOLOGIA
function getTypes(array) {
    const types = [];
    array.forEach((element) => {
        console.log(element.type);
        if (types.includes(element.type) == false) {
            types.push(element.type);
        }
    });
    return types;
}ò

// FUNZIONE PER COLORARE LE ICONE IN BASE AL TYPE DELL'ELEMENTO - AGGIUNTA PROPRIETA COLOR AGLI ELEMENTI DELL'ARRAY
function colorIcons(array, colors) {
    const types = getTypes(array);

    const coloredArray = array.map((element) => { //aggiungo la prorietà color agli elementi tramite metodo map
        const indexType = types.indexOf(element.type);
        console.log(indexType);

        element.color = colors[indexType];
        return element;
    });
    return coloredArray;
};

// FUNZIONE PER SCRIVERE IN HTML LE OPZIONI NEL TAG SELECT IN BASE AL TYPE DELL'ELEMENTO
function printOption(array, select) {
    array.forEach((element) => {
        console.log(element);
        select.innerHTML += `<option value="${element}">${element}</option>`
    });
};

// FUNZIONE PER FILTRARE LE CARTE IN BASE ALLA SELEZIONE
function filteredValue(array, type) {
    const filteredIcons = array.filter((element) => {
        if(element.type === type) {
            return true
        }

        return false;
    });

    if(type === "") {
        return array;
    };

    return filteredIcons;
};