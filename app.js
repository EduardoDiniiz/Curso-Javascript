
var btnsIncrementa = document.querySelectorAll(".btn-incrementa");
var btnsDecrementa = document.querySelectorAll(".btn-decrementa");

addBtnsIncrementa(btnsIncrementa);
addBtnsDecrementa(btnsDecrementa);

var formPedido = document.forms.pedido;

formPedido.addEventListener('submit', function (event){
    var contador = 0;
    
    var inputs = document.querySelectorAll('input.quantidade');

    inputs.forEach(inpt => {
        if(inpt.value > 0 ){
            contador++;
        }
    });

    if(contador == 0){
        alert('Deve ter pelo menos 1 pizza no pedido');
        event.preventDefault();
    }
});



function addBtnsIncrementa(btns){
    btns.forEach(btn => {
        btn.addEventListener('click', incrementa);
        function incrementa(){
            var item = btn.closest('.item');
            var input = item.querySelector('.quantidade');
            input.value++;
            var preco = pegaPrecoItem(item);
            adicionaAoTotal(preco);
        }
    });
}

function addBtnsDecrementa(btns){
    btns.forEach(btn => {
        btn.addEventListener('click', decrementa);
        function decrementa(){

            var item = btn.closest('.item');
            var input = item.querySelector('.quantidade');
            if(input.value > 0){
                input.value--;
                var item = btn.closest('.item');
                var preco = pegaPrecoItem(item);
                adicionaAoTotal(-preco);
            }
        }
    });
}



function pegaPrecoItem(item){
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function adicionaAoTotal(preco){
    var elementoTotal = document.querySelector('#total');
    elementoTotal.textContent = preco + Number(elementoTotal.textContent);
}
