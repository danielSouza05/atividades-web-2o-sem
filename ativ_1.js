const opcao = 4;
import {somar} from './som.js'
import{subtrair} from './sub.js'
import{multiplicacao} from './mult.js'
import{divisao} from './div.js'

switch(opcao)
{
    case 1: //soma
        console.log(somar(1, 1))
    break;

    case 2: //subtracao
        console.log(subtrair(5, 1))
    break;

    case 3: // multiplicacao
        console.log(multiplicacao(2, 3))
    break;

    case 4: // divisao
        console.log(divisao(6, 2))
    break;
}