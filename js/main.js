const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome_beneficiario');
let formValido = false;

function validaNome(nomeCompleto){
    const NomeComoArray = nomeCompleto.split(' ');
    return NomeComoArray.length >= 2;
};


form.addEventListener('submit', function(e){
    
    e.preventDefault();
    
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

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);
        if (!formValido){
            
            nomeBeneficiario.style.border = '1px solid red';
            document.querySelector('.error-message').style.display = 'block';
            
        }
        else{
            nomeBeneficiario.style.border = 'none';
            document.querySelector('.error-message').style.display = 'none';
        }
})