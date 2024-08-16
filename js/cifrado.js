function cifrado(texto,desplazamiento){
    const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';

    for (let i=0; i< texto.length; i++){
        const letraActual = texto[i].toUpperCase();
        const indiceActual = abecedario.indexOf(letraActual);
        
        if(indiceActual === -1){
            resultado += letraActual;
        }else{
            let nuevoIndice = (indiceActual + desplazamiento)%abecedario.length;
            resultado += abecedario[nuevoIndice];
        }
    }
    return resultado;
}
let textoOriginal = "Hola";
let desplazamiento = 25;
let textoCifrado = cifrado(textoOriginal,desplazamiento)
console.log(textoCifrado);