let nameOne = document.getElementById("name-one");
let nameTwo = document.getElementById("name-two");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let labelOne = document.getElementById("label-one");
let labelTwo = document.getElementById("label-two");
let labelEmail = document.getElementById("label-email");
let labelPass = document.getElementById("label-pass");




//Validar se o nome está com os caracteres corretos
nameOne.addEventListener('keyup', ()=>{
    if (nameOne.value.length <=3) {
        labelOne.style.color = "red";
        labelOne.innerHTML = "<strong>Nome *Acima de 4 letras.</strong>"
    }else {
        labelOne.style.color = "green";
        labelOne.innerHTML = "<strong>Nome</strong>"
    }
})

//Validar se o sobrenome está com os caracteres corretos, se tem a quantidade certa
nameTwo.addEventListener('keyup', () =>{
    if(nameTwo.value.length <=2) {
        labelTwo.style.color = "red";
    }else {
        labelTwo.style.color = "green";
    }
})

//Validar se o senha está com os caracteres se tem a quantidade certa
pass.addEventListener('keyup', ()=> {
    if(pass.value.length <=5) {
        labelPass.style.color = "red";
        labelPass.innerHTML = "Senha * No mínimo 5 caracteres";
    }else {
        labelPass.style.color = "green";
        labelPass.innerHTML = "Senha:"

    }
})

function cadastrar() {

    if(nameOne.value.length <=3 || nameTwo.value.length <= 2 || email.value.length == "" || pass.value.length <= 5) {
        swal("ERRO!", "Preencha os campos corretamente!", "error");

        nameOne.value = "";
        nameTwo.value = "";
        email.value = "";
        pass.value = "";
    }else {
        swal("Sucesso!", "Cadastro feito com sucesso. Você será redirecionado para a tela de login.", "success");
        nameOne.value = "";
        nameTwo.value = "";
        email.value = "";
        pass.value = "";

        setTimeout(function(){
            window.location.href = "http://127.0.0.1:5500/login.html";
        },3000)
    }
}


  
  








