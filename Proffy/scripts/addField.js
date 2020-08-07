//document.getElementById("add-time").addEventListener('click', cloneField)

window.onload = function() {
    //Executar uma ação
    function cloneField() {
        //Duplicar os campos
        //Mas que campos?
        const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean

        //pegar os campos, mas que campos?
        const fields = newFieldsContainer.querySelectorAll('input')
            //Para cada campo, limpar
        fields.forEach(function(field) {
            //Pega o field do momento e limpa ele
            field.value = ""
        })


        //Colocar na página: Onde?
        document.querySelector('#schedule-items').appendChild(newFieldsContainer)
    }
    //Procurar o botao
    document.getElementById("add-time") //quando clicar no botão (evento)
        .addEventListener('click', cloneField, false);
}