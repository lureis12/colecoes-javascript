const meuArray = [30, 30, 40, 5, 232, 2502, 3005];

function valoresUnidos (array) {
    const mySet = new Set(array);

    return [...mySet];
}

console.log(valoresUnidos(meuArray));