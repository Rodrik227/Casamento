function copiarTexto(){
    const content = document.getElementById('cpf').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...");
        alert("CPF copiado");
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}