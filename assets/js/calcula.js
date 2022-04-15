function calcular(tipo, valor) {
    if(tipo === 'sinal') {
        document.getElementById('input_calc').style.background = '#fff'
        if(valor === 'c') {
            document.getElementById('input_calc').value = ''
        }
        } if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('input_calc').value += valor

        } if (valor === '=') {
            var resultado = eval(document.getElementById('input_calc').value)
            document.getElementById('input_calc').style.background = "#B9F8D3" 
            document.getElementById('input_calc').value = resultado
        }
    else if(tipo === 'numero') {
    document.getElementById('input_calc').value += valor
    document.getElementById('input_calc').style.background = '#fff'
    }

}