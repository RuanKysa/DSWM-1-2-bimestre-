function calcular(tipo, valor){
    if(tipo === 'simbolo'){
        if(valor === 'c'){
            document.getElementById('resultado').value = '';

        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor;
        
        }

        if(valor === '='){
            let conta = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = conta;

        }
    } else if(tipo === 'numero'){
        document.getElementById('resultado').value += valor;
    }
}