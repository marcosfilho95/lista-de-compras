import { criarItemLista } from "./scripts/criarItemDaLista.js";
import verificarLIstaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item")

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault()
    const itemDaLista = criarItemLista(listaDeCompras)
    if (itemDaLista) {
        listaDeCompras.appendChild(itemDaLista)
    
        const botaoDeletar = itemDaLista.querySelector(".botao-deletar")
        const botaoEditar = itemDaLista.querySelector(".botao-editar")

        if (botaoDeletar) {
            botaoDeletar.addEventListener('click', () => {
                itemDaLista.remove();
                verificarLIstaVazia(listaDeCompras);
            })
        }

        if(botaoEditar) {
            botaoEditar.addEventListener('click', () => {
                console.log("Botão editar clicado")
                const editarItem = itemDaLista.querySelector('p')
                const novoTexto = prompt("Editar item :", editarItem.innerText)

                if (novoTexto !== null && novoTexto.trim() !== "") {
                    editarItem.innerText = novoTexto.trim();
                }
            })
        }
    verificarLIstaVazia(listaDeCompras)
    }
})

verificarLIstaVazia(listaDeCompras)