import gerarDiaDaSemana from "./gerarDiaSemana.js";
import verificarLIstaVazia from "./verificarListaVazia.js";

const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemLista() {

    if (inputItem.value.trim() === "") {
        alert("Erro ao salvar. Por favor, insira um item!")
        return
    }

    const itemDaLista = document.createElement('li')
    const containerItemDaLista = document.createElement('div')
    containerItemDaLista.classList.add('lista-item-container')

    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = 'checkbox'
    inputCheckbox.id = 'checkbox-' + contador++

    const nomeItem = document.createElement('p')
    nomeItem.innerText = inputItem.value

    inputCheckbox.addEventListener('click', () => {
        nomeItem.style.textDecoration = inputCheckbox.checked? 'line-through' : 'none' // condicional if / else mais limpa
    })

    // Botão Deletar 
    const botaoDeletar = document.createElement('button')
    botaoDeletar.classList.add('item-lista-button', 'botao-deletar')

    const iconeLixeira = document.createElement('img')
    iconeLixeira.src = './img/delete.svg'
    iconeLixeira.alt = 'Ícone de deletar'
    iconeLixeira.style.width = '20px'
    iconeLixeira.style.height = '20px'
    botaoDeletar.appendChild(iconeLixeira)

    // Botao Editar7
    const botaoEditar = document.createElement('button')
    botaoEditar.classList.add('item-lista-button', 'botao-editar')

    const iconeEditar = document.createElement('img')
    iconeEditar.src = './img/edit.svg'
    iconeEditar.alt = 'Ícone de editar'
    iconeEditar.style.width = '20px'
    iconeEditar.style.height = '20px'
    botaoEditar.appendChild(iconeEditar)


    containerItemDaLista.appendChild(inputCheckbox) 
    containerItemDaLista.appendChild(nomeItem)
    containerItemDaLista.appendChild(botaoDeletar)
    containerItemDaLista.appendChild(botaoEditar)
    itemDaLista.appendChild(containerItemDaLista)

    const dataCompleta = gerarDiaDaSemana()
    const itemData = document.createElement("p")
    itemData.innerHTML = dataCompleta
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)

    return itemDaLista;

}
