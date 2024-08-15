const formContatos = document.getElementById('form-contatos');
        // Esta parte adiciona linha e mantem //
        let linhas = '';
formContatos.addEventListener('submit', function(e) {

    e.preventDefault();

        const inputNomeContato = document.getElementById('nome');
        const inputNumeroContato = document.getElementById('telefone');

        // Esta parte adiciona uma coluna com o nome do contato e outra coluna com o numero do contato ///
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;

        linhas += linha;

        //Esta parte adiciona mais um conteúdo acima dentro da tabela linha a pós linha//
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';

});