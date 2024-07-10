document.addEventListener("DOMContentLoaded", function() {
    const texto1 = document.getElementById("texto1");
    const texto2 = document.getElementById("texto2");
    const botonEncriptar = document.querySelector(".boton_encriptar");
    const botonDesencriptar = document.querySelector(".boton_desencriptar");
    const botonCopiar = document.querySelector(".copiar");
    const imagen = document.querySelector(".texto_desencriptado img");
    const textoFijo = document.querySelector(".texto_fijo");

    botonEncriptar.addEventListener("click", function() {
        const texto = texto1.value;
        const textoEncriptado = encriptarTexto(texto);

        texto2.value = textoEncriptado;
        texto2.hidden = false;
        texto2.disabled = false;
        botonCopiar.hidden = false;
        imagen.hidden = true;
        textoFijo.hidden = true;
    });

    botonDesencriptar.addEventListener("click", function() {
        const texto = texto1.value;
        const textoDesencriptado = desencriptarTexto(texto);

        texto2.value = textoDesencriptado;
        texto2.hidden = false;
        texto2.disabled = false;
        botonCopiar.hidden = false;
        imagen.hidden = true;
        textoFijo.hidden = true;
    });

    botonCopiar.addEventListener("click", function() {
        texto2.select();
        texto2.setSelectionRange(0, texto2.value.length); // Selecciona el texto
        document.execCommand("copy"); // Copia el texto al portapapeles
    });

    function encriptarTexto(texto) {
        const reglas = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return texto.replace(/[eioua]/g, function(matched) {
            return reglas[matched];
        });
    }

    function desencriptarTexto(texto) {
        const reglas = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return texto.replace(/enter|imes|ai|ober|ufat/g, function(matched) {
            return reglas[matched];
        });
    }
});


