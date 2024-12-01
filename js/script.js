
const botaoAdicionar = document.getElementById('adicionar');
const inputNovaTarefa = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', function() {
    const tarefaTexto = inputNovaTarefa.value.trim(); 

    if (tarefaTexto !== '') {  
        
        const novaTarefa = document.createElement('li');
        
        
        novaTarefa.classList.add('tarefa');

   
        const textoTarefa = document.createElement('span');
        textoTarefa.textContent = tarefaTexto;

      
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('remover');  

        novaTarefa.appendChild(textoTarefa);
        novaTarefa.appendChild(botaoRemover);

      
        listaTarefas.appendChild(novaTarefa);

        inputNovaTarefa.value = '';

      
        botaoRemover.addEventListener('click', function() {
            listaTarefas.removeChild(novaTarefa);
        });
    } else {
        alert('Insira uma tarefa válida!');
    }
});
