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

     
        // let estaData = new Date(dolarReal.create_date)
        // document.getElementById('title').innerHTML = dolarReal.name 
        // document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
                   
        // valorMaximo.innerHTML= parseFloat(dolarReal.high).toLocaleString('pt-br',{
        //   style: 'currency',
        //   currency: 'BRL'
        // })
  
        // valorMinimo.innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-br', {
        //   style:'currency',
        //   currency: 'BRL'
        // })

        // let estaData = new Date(euroReal.create_date)
        // document.getElementById('title').innerHTML = euroReal.name 
        // document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
                   
        // valorMaximo.innerHTML= parseFloat(euroReal.high).toLocaleString('pt-br',{
        //   style: 'currency',
        //   currency: 'BRL'
        // })
  
        // valorMinimo.innerHTML = parseFloat(euroReal.low).toLocaleString('pt-br', {
        //   style:'currency',
        //   currency: 'BRL'
        // })

        let estaData = new Date(btcReal.create_date)
        document.getElementById('title').innerHTML = btcReal.name 
        document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
                   
        valorMaximo.innerHTML= parseFloat(btcReal.high).toLocaleString('pt-br',{
          style: 'currency',
          currency: 'BRL'
        })
  
        valorMinimo.innerHTML = parseFloat(btcReal.low).toLocaleString('pt-br', {
          style:'currency',
          currency: 'BRL'
        })


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
                  
                    // let resultado = document.querySelector('.resultado')
                        resultado.innerHTML = "O valor " + 
                        (valorEmReal).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + 
                        " convertido em " + 
                        moedaEstrangeira + " é " + 
                        parseFloat(moedaConvertida).toLocaleString('pt-br', {style: 'currency',currency: 'BRL'
                    }) + "."
                break

                case 'Euro':
                    moedaConvertida  = valorEmReal / valorDoEuro
                        console.log(moedaConvertida)
                  
                    // let resultado = document.querySelector('.resultado')
                        resultado.innerHTML = "O valor " + 
                        (valorEmReal).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + 
                        " convertido em " + 
                        moedaEstrangeira + " é " + 
                        parseFloat(moedaConvertida).toLocaleString('pt-br', {style: 'currency',currency: 'BRL'
                    }) + "."
                break

                case 'Bitcoins':
                    moedaConvertida  = valorEmReal / valorDoBtc
                        console.log(moedaConvertida)
                  
                    // let resultado = document.querySelector('.resultado')
                        resultado.innerHTML = "O valor " + 
                        (valorEmReal).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + 
                        " convertido em " + 
                        moedaEstrangeira + " é " + 
                        parseFloat(moedaConvertida).toLocaleString('pt-br', {style: 'currency',currency: 'BRL'
                    }) + "."
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

      let valorEmReal = 0
      let moedaEstrangeira = ''
      let moedaConvertida = ''

      //cotações api

      function mensagemFotmatada(moedaConvertida){
        isNaN(valorEmReal) ? valorEmReal = 0 : ''
        console.log("Moeda Convertida" + moedaConvertida)
        mensagem.innerHTML = "O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', 
        currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida       
      }


    //   function bloquearBotao(){
    //     if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null){
    //         moedaSelecionada.setAttribute('disabled', 'disabled')
    //         moedaSelecionada.style.background = '#ccc'
    //         moedaSelecionada.style.cursor = 'not allowed'
    //     }
    //   }

    //   function ativarBotao(){
    //     if(valorDigitado.value > 0){
    //         // moedaSelecionada.removeAttribute('disabled')
    //         moedaSelecionada.style.background = '#ffc107'
    //         moedaSelecionada.style.cursor = 'pointer'
    //         }else{
    //             console.log('Não ativou')
    //         }
    //   }

   
    // btnConverter = document.querySelector('.input')

    //   btnConverter.addEventListener('click', function() {
    //         valorEmReal = parseFloat(valorDigitado.value)

    //         console.log('Escolha a moeda estrangeira')
    //         for(let i = 0; i < moedaSelecionada.length; i++){
    //             if(moedaSelecionada[i].checked){
    //                 moedaEstrangeira = moedaSelecionada[i].value
    //                 console.log(moedaEstrangeira)
    //             }
    //         }

    //         let valorDoDolar   = dolarReal.high 

    //         switch(moedaEstrangeira){
    //             case 'Dólar':
    //                 moedaConvertida  = valorEmReal / valorDoDolar
    //                 // mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
    //                 console.log(moedaConvertida)
    //                 // const dolar = (dolarReal.high)
                    
    //             valorMaximo.innerHTML= parseFloat(`${dolarReal.high}`).toLocaleString('pt-br',{
    //               style: 'currency',
    //               currency: 'BRL'
        
    //             })
    //             break

    //             default:
    //                 aviso.textContent = 'Escolha uma moeda estrangeira'
    //           }
    //           isNaN(moedaConvertida) ? moedaConvertida = 0 : ''

    //   })

      btnLimpar.addEventListener('click', function(){
        valorDigitado.focus()
        valorDigitado.value = ''
        resultado.textContent = ''
        aviso.textContent = 'digite o valor, escolha a moeda e clique no botão converter'
        moedaSelecionada[0].checked = false
        moedaSelecionada[1].checked = false
        moedaSelecionada[2].checked = false
        moedaSelecionada[3].checked = false 
})