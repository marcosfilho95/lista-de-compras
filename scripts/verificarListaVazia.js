const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia')

export default function verificarLIstaVazia(listaDeCompras){
    const itensDaLista = listaDeCompras.querySelectorAll("li")
    if(itensDaLista.length === 0) {
        mensagemListaVazia.style.display = 'block'
        mensagemListaVazia.style.backgroundColor = 'yellow'
    }
    else {
        mensagemListaVazia.style.display = 'none'
    }
}
