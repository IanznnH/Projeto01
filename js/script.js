// Seleciona os elementos da página
const botaoAdicionar = document.getElementById('adicionar');
const inputNovaTarefa = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// Função para adicionar uma nova tarefa
botaoAdicionar.addEventListener('click', function() {
    const tarefaTexto = inputNovaTarefa.value.trim();  // Pega o texto da tarefa e remove espaços em branco

    if (tarefaTexto !== '') {  // Verifica se o texto não está vazio
        // Cria um novo item de lista (li)
        const novaTarefa = document.createElement('li');
        
        // Adiciona a classe "tarefa" para estilização (opcional)
        novaTarefa.classList.add('tarefa');

        // Cria um elemento de texto com a tarefa
        const textoTarefa = document.createElement('span');
        textoTarefa.textContent = tarefaTexto;

        // Cria um botão para remover a tarefa
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('remover');  // Adiciona uma classe para o botão (opcional)

        // Adiciona o texto e o botão ao item de lista (li)
        novaTarefa.appendChild(textoTarefa);
        novaTarefa.appendChild(botaoRemover);

        // Adiciona o item de tarefa à lista de tarefas (ul)
        listaTarefas.appendChild(novaTarefa);

        // Limpa o campo de input
        inputNovaTarefa.value = '';

        // Evento para remover uma tarefa
        botaoRemover.addEventListener('click', function() {
            listaTarefas.removeChild(novaTarefa);
        });
    } else {
        alert('Insira uma tarefa válida!');
    }
});
