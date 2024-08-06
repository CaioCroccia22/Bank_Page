const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const NomeComoArray = nomeCompleto.split(' ');
    return NomeComoArray.length >= 2;
};


form.addEventListener('submit', function(e){
    e.preventDefault();
    const nomeBeneficiario = document.getElementById('nome_beneficiario');
    // console.log(nomeBeneficiario.value)
    if (!validaNome(nomeBeneficiario.value)){
        alert('Nome não esta completo');
    }
    else{
        alert('Nome esta completo')
    }
});

console.log(form);
//alert('Olá mundo!!')