const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const NomeComoArray = nomeCompleto.split(' ');
    return NomeComoArray.length >= 2;
};


form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();
    const nomeBeneficiario = document.getElementById('nome_beneficiario');
    const numeroContaBeneficiario = document.getElementById('number_account');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}`;

    // console.log(nomeBeneficiario.value)
    formValido = validaNome(nomeBeneficiario.value)
        if (formValido){
            alert(mensagemSucesso);
            nomeBeneficiario = '';
            numeroContaBeneficiario = '';
            valorDeposito = '';
            
        }
        else{
            alert('Nome não esta completo');
            
        }
});

console.log(form);
//alert('Olá mundo!!')