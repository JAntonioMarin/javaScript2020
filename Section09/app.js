let miLibro = {
    titulo: 'El libro de JavaScript',
    autor: 'Grover Pablo Vásquez',
    paginas: 400,
    publicado: false
}

console.log(miLibro.titulo);
console.log(`${miLibro.titulo} creado por ${miLibro.autor}`);
miLibro.paginas = 500;
console.log(miLibro.paginas);