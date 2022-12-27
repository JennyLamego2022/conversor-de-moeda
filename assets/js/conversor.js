//API CONVERSOR DE MOEDA

const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch(url+coins)
    .then(function(response){
         return response.json()
})

    .then(function(data){
        console.log(data)
      const dolarReal = data.USDBRL
      const euroReal = data.EURBRL 
      const btcReal = data.BTCBRL

      const valorMaximo = document.getElementById('maxvalue');
      const valorMinimo = document.getElementById('minvalue');



        // let estaData = new Date(btcReal.create_date)
        // document.getElementById('title').innerHTML = btcReal.name 
        // document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
                   
        // valorMaximo.innerHTML= parseFloat(btcReal.low).toFixed(5)
  
        // valorMinimo.innerHTML = parseFloat(btcReal.low).toFixed(5)


        btnConverter.addEventListener('click', function() {
            valorEmReal = parseFloat(valorDigitado.value)

            console.log('Escolha a moeda estrangeira')
            for(let i = 0; i < moedaSelecionada.length; i++){
                if(moedaSelecionada[i].checked){
                    moedaEstrangeira = moedaSelecionada[i].value
                    console.log(moedaEstrangeira)
                }
            }

          
            let valorDoDolarHigh   = dolarReal.high 
            let valorDoEuro   = euroReal.high 
            let valorDoBtc   = btcReal.high 
            let resultado = document.querySelector('.resultado')

            switch(moedaEstrangeira){
                case 'Dólar':
                    moedaConvertida  = valorEmReal / valorDoDolarHigh
                        console.log(moedaConvertida)
                        console.log(valorDoDolarHigh)
                  
                    // let resultado = document.querySelector('.resultado')
                        resultado.innerHTML = "O valor de " + 
                        (valorEmReal).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + 
                        " convertido em " + 
                        moedaEstrangeira + " é equivalente a " + 
                        parseFloat(moedaConvertida).toLocaleString('en-US', {style: 'currency',currency: 'USD'
                    }) + "."

                        let estaData = new Date(dolarReal.create_date)
                        document.getElementById('title').innerHTML = dolarReal.name 
                        document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
                                
                        valorMaximo.innerHTML= parseFloat(dolarReal.high).toLocaleString('pt-br',{
                        style: 'currency',
                        currency: 'BRL'
                        })
                
                        valorMinimo.innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-br', {
                        style:'currency',
                        currency: 'BRL'
                        })

                break

                case 'Euro':
                    moedaConvertida  = valorEmReal / valorDoEuro
                        console.log(moedaConvertida)
                        console.log(valorDoEuro)
                  
                        resultado.innerHTML = "O valor de " + 
                        (valorEmReal).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + 
                        " convertido em " + 
                        moedaEstrangeira + " é equivalente a " + 
                        parseFloat(moedaConvertida).toLocaleString('de-DE', {style: 'currency',currency: 'EUR'
                    }) + "."

                        let estaData2 = new Date(euroReal.create_date)
                        document.getElementById('title').innerHTML = euroReal.name 
                        document.getElementById('thisdate').innerHTML = estaData2.toLocaleString()
                                
                        valorMaximo.innerHTML= parseFloat(euroReal.high).toLocaleString('pt-br',{
                        style: 'currency',
                        currency: 'BRL'
                        })
                
                        valorMinimo.innerHTML = parseFloat(euroReal.low).toLocaleString('pt-br', {
                        style:'currency',
                        currency: 'BRL'
                        })
                break

                case 'Bitcoins':
                    moedaConvertida  = valorEmReal / valorDoBtc
                        console.log(moedaConvertida)
                        console.log(valorDoBtc)
                  
                        resultado.innerHTML = "O valor de " + 
                        (valorEmReal).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + 
                        " convertido em " + 
                        moedaEstrangeira + " é equivalente a " + 
                        parseFloat(moedaConvertida).toFixed(5) + " Bitcoins."

                        let estaData3 = new Date(btcReal.create_date)
                        document.getElementById('title').innerHTML = btcReal.name 
                        document.getElementById('thisdate').innerHTML = estaData3.toLocaleString()
                                    
                        valorMaximo.innerHTML= parseFloat(btcReal.low).toFixed(5)
                    
                        valorMinimo.innerHTML = parseFloat(btcReal.low).toFixed(5)
                break


                default:
                    aviso.textContent = 'Escolha uma moeda estrangeira'
              }
              isNaN(moedaConvertida) ? moedaConvertida = 0 : ''

        })     
    } )     

     
      //formulario

      let valorDigitado = document.querySelector('#valorEmReal')
      let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

      let aviso = document.querySelector('#aviso')
      
      let btnConverter = document.querySelector('#btnConverter')
      let btnLimpar = document.querySelector('#btnLimpar')

      let valorEmReal = 0.00
      let moedaEstrangeira = ''
      let moedaConvertida = ''

   
      btnLimpar.addEventListener('click', function(){
        valorDigitado.focus()
        valorDigitado.value = ''
        resultado.textContent = 'Resultado'
        document.getElementById('title').textContent = '' 
        document.getElementById('thisdate').textContent = ''
        document.getElementById('maxvalue').textContent = ''
        document.getElementById('minvalue').textContent = ''
        aviso.textContent = 'digite o valor, escolha a moeda e clique no botão converter'
        moedaSelecionada[0].checked = false
        moedaSelecionada[1].checked = false
        moedaSelecionada[2].checked = false
        
})


const checkbox = document.querySelector('.btn-toggle');

checkbox.addEventListener('click', () => {
  document.body.classList.toggle('light');
})