// Seleciona os elementos do HTML
const menuSobre = document.getElementById('menuSobre');
const menuVerticalSobre = document.getElementById('sub-sobre');

const menuContato = document.getElementById('menuContato');
const menuVerticalContato = document.getElementById('sub-contato');

// Adiciona o evento de clique no botão "Sobre"
menuSobre.addEventListener('click', function(event) {
    abreMenu(event, menuVerticalSobre);
});

menuContato.addEventListener('click', function(event) {
    abreMenu(event, menuVerticalContato);
});

//Funcão geral para abrir/fechar TODOS OS menu vertical
function abreMenu(event, menu) {
    event.preventDefault(); // Evita que a página recarregue ao clicar no link
    // Liga/Desliga a classe 'active' do menu vertical
    menu.classList.toggle('active');
}

function fechaMenu(event, menu, btn) {
    if (!menu.contains(event.target) && event.target !== btn) {
        menu.classList.remove('active');
    }
}

// Opcional: Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', function(event) {
    fechaMenu(event, menuVerticalSobre, menuSobre);
    fechaMenu(event, menuVerticalContato, menuContato);
});