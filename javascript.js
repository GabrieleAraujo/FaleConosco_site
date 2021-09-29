


function validacao () {

if(document.form.nome.value=="") {
alert("Por favor, preencha o campo nome.");
document.form.nome.focus();
return false;
}

if(document.form.email.value=="") {
alert("Por favor, preencha o campo E-mail.");
document.form.email.focus();
return false;

}

if(document.form.telefone.value=="") {
alert("Por favor, preencha o campo telefone.");
document.form.telefone.focus();
return false;
}


if(document.form.enderecodaloja.value=="") {
alert("Por favor, preencha o campo Endereço.");
document.form.enderecodaloja.focus();
return false;

}

if(document.form.cidadedaloja.value=="") {
alert("Por favor, preencha o campo cidade.");
document.form.cidadedaloja.focus();
return false;
}

if(document.form.email.value=="" || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1) {
alert("Por favor, digite um endereco de email valido.");
document.form.email.focus();
return false;
}


}