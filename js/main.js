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
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`;

    // console.log(nomeBeneficiario.value)
    formValido = validaNome(nomeBeneficiario.value);
        if (formValido){
            const containerSucessMessage = document.querySelector('.sucess-message')
            containerSucessMessage.innerHTML = mensagemSucesso;
            containerSucessMessage.style.display =  'block';
            nomeBeneficiario = '';
            numeroContaBeneficiario = '';
            valorDeposito = '';
            
        }
        else{
            alert('Nome não esta completo');
            const containerErrorMessage = document.querySelector('.error-message');
            nomeBeneficiario.style.border = '1px solid red'
            containerErrorMessage.style.display = 'block';
            
        }
});

