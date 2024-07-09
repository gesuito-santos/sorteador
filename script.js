function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const numero = document.querySelector(".numero")

    if (max > min) {

        const result = Math.floor(Math.random() * (max - min + 1) + min);

        numero.innerHTML = result
        
    } else {
        alert("O valor mínimo deve ser MENOR que o valor máximo!")
    }

}


