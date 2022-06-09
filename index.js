const {edFolha, edGalho} = require("./arrays")

function OrdenaListas(lista1, lista2){
    
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let itemAtualLista1 = lista1[posicaoAtualLista1]
        let itemAtualLista2 = lista2[posicaoAtualLista2]

        if (itemAtualLista1.preco < itemAtualLista2.preco){
            listaFinal[atual] = itemAtualLista1
            posicaoAtualLista1 ++;
        }
        else{
            listaFinal[atual]  =  itemAtualLista2
            posicaoAtualLista2 ++;
        }
        atual++;
    }

    while(posicaoAtualLista1 < lista1.length){
        listaFinal[atual] = lista1[posicaoAtualLista1]
        posicaoAtualLista1++;
        atual++;
    }

    while(posicaoAtualLista2 < lista2.length){
        listaFinal[atual] = lista2[posicaoAtualLista2]
        posicaoAtualLista2++;
        atual++;
    }


    return listaFinal

}


console.log(OrdenaListas(edFolha, edGalho));