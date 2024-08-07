
let comidaEscolhida=null;
let bebidaEscolhida=null;
let sobremesaEscolhida=null;


function selecionandoPrato(tipo){
        const nome=document.querySelector('.'+tipo);
       
        const selecionadoAntes=document.querySelector('.pratos .selecionado');
        if(selecionadoAntes!==null){
        selecionadoAntes.classList.remove('selecionado');
    };  
        comidaEscolhida=tipo;
        nome.classList.add('selecionado'); 
        continuar();
}
function selecionandoBebida(tipo){
    const nome=document.querySelector('.'+tipo);
   
    const selecionadoAntes=document.querySelector('.bebidas .selecionado');
    if(selecionadoAntes!==null){
    selecionadoAntes.classList.remove('selecionado');
};
    bebidaEscolhida=tipo;
    nome.classList.add('selecionado'); 
    continuar();
}
function selecionandoSobremesa(tipo){
    const nome=document.querySelector('.'+tipo);
   
    const selecionadoAntes=document.querySelector('.sobremesas .selecionado');
    if(selecionadoAntes!==null){
    selecionadoAntes.classList.remove('selecionado');
    };
    sobremesaEscolhida=tipo;
    nome.classList.add('selecionado'); 
    continuar();
  
}
function continuar(){
    if(comidaEscolhida && bebidaEscolhida&& sobremesaEscolhida){
        const comida = document.querySelector('.'+comidaEscolhida); 
        const bebida=document.querySelector('.'+bebidaEscolhida);
        const sobremesa=document.querySelector('.'+sobremesaEscolhida);
        const botao=document.querySelector('.botao');
        if (
            comida.classList.contains('selecionado') &&
            bebida.classList.contains('selecionado') &&
            sobremesa.classList.contains('selecionado')
        ) {
            botao.classList.add('habilitado');
            botao.innerHTML='Fechar pedido';
        } 
    }
}
function transformaEmNum(valor){
    return parseFloat(valor.replace(',', '.'));
}
function pegaValores(){
    const comidatxt = document.querySelector('.'+comidaEscolhida+' .valor'); 
    const bebidatxt=document.querySelector('.'+bebidaEscolhida+' .valor');
    const sobremesatxt=document.querySelector('.'+sobremesaEscolhida+' .valor');
    
    const comidaValor=transformaEmNum(comidatxt.textContent.trim());
    const bebidaValor=transformaEmNum(bebidatxt.textContent.trim());
    const sobremesaValor=transformaEmNum(sobremesatxt.textContent.trim());
    const comidaVal=document.querySelector('.valorcomi');
    const bebidaVal=document.querySelector('.valorbebi');
    const sobremesaVal=document.querySelector('.valorsobre');
    const totalvalor=document.querySelector('.valorTot');

    comidaVal.innerHTML=comidaValor.toFixed(2);
    bebidaVal.innerHTML=bebidaValor.toFixed(2);
    sobremesaVal.innerHTML=sobremesaValor.toFixed(2);
    totalvalor.innerHTML=(comidaValor+bebidaValor+sobremesaValor).toFixed(2);
    const totalnumero=transformaEmNum(totalvalor.innerText);
    return totalnumero.toFixed(2);
}


function confirmaPedido() {
    if(comidaEscolhida && bebidaEscolhida&& sobremesaEscolhida){
        pegaValores();
        const comida = document.querySelector('.'+comidaEscolhida); 
        const bebida=document.querySelector('.'+bebidaEscolhida);
        const sobremesa=document.querySelector('.'+sobremesaEscolhida);
        const comidasele=document.querySelector('.h1comida');
        const bebidasele=document.querySelector('.h1bebida');
        const sobremesasele=document.querySelector('.h1sobremesa');
        if (
            comida.classList.contains('selecionado') &&
            bebida.classList.contains('selecionado') &&
            sobremesa.classList.contains('selecionado')
        ) {
        const confirmar=document.querySelector('.centralizar');
        confirmar.classList.add('habilitar');
        } 
        const h1 = comida.querySelector('h1');
        const h2=bebida.querySelector('h1');
        const h3=sobremesa.querySelector('h1');
            const nomecomida = h1.innerText ;
            const nomebebida=h2.innerText;
            const nomesobremesa=h3.innerText;
            comidasele.innerHTML=nomecomida;
            bebidasele.innerHTML=nomebebida;
            sobremesasele.innerHTML=nomesobremesa;

    }  

}


function desabilitar(){
    const confirmar=document.querySelector('.centralizar');
    if(confirmar.classList.contains('habilitar')){
        confirmar.classList.remove('habilitar');
}
}
function mensagemZap(){
    const comida = document.querySelector('.'+comidaEscolhida); 
    const bebida=document.querySelector('.'+bebidaEscolhida);
    const sobremesa=document.querySelector('.'+sobremesaEscolhida);
    const h1 = comida.querySelector('h1');
    const h2=bebida.querySelector('h1');
    const h3=sobremesa.querySelector('h1');
    const nomecomida = h1.innerText ;
    const nomebebida=h2.innerText;
    const nomesobremesa=h3.innerText;
    let numero = "5521986468805";
    const valor=pegaValores();
    
    let mensagem = `Olá, gostaria de fazer o pedido:
    -Prato: ${nomecomida}
    -Bebida: ${nomebebida}
    -Sobremesa: ${nomesobremesa}
    Total: R$ ${valor}`;

let mensagemCodificada = encodeURIComponent(mensagem);
let linkWhatsApp = `https://wa.me/${numero}?text=${mensagemCodificada}`;
const linkElement = document.getElementById('link-whatsapp');
linkElement.href = linkWhatsApp;
return(linkWhatsApp)
}


