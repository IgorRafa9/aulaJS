function botao(){
    //alert("Obrigado por clicar")
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById('agradecimento').value);
}

function redirecionar(){
    //window.open("https://www.youtube.com/watch?v=aPTHCcxCIL0")
    window.location.href = "https://www.youtube.com/watch?v=aPTHCcxCIL0"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar Texto")
}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}
/*function soma(n1, n2){
    return n1+n2;
}
alert(soma(5,10));*/

/*function validarIdade(idade){
    var validar;
    if(idade >= 18){
        return true;
    }
    return false;

}
var idade = prompt("Qual sua idade?");
alert(validarIdade(idade));*/

/*var d = new Date();
alert(d.getHours()+":"+d.getMinutes());*/

/*var count;
for(count = 0; count < 5; count++){
    alert(count);
}*/

/*var count = 0;
while(count < 5 ){
    console.log(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade: ");
if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
};*/

//var lista = ["maça", "pera", "uva"]
//console.log(lista)
//var nome = "Igor Rafael";
//var n1 = 5;
//var n2 = 3;
//alert(nome + " tem "+idade+" anos")
//Number(alert(n1*n2))
//console.log(nome.replace("Igor Rafael", "Igor"));