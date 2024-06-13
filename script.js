const form = document.getElementById('postagemForm');
const textoPostagem = document.getElementById('textoPostagem');
const postagensContainer = document.querySelector('#postagensContainer .list-group');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const texto = textoPostagem.value.trim();

  if (texto) {
    // Crie um objeto para representar a postagem
    const postagem = {
      id: Date.now(), // ID único para cada postagem
      texto: texto,
      curtidas: 0 // Contador inicial de curtidas
    };

    // Salve a postagem (local storage, banco de dados, etc.)
    // Exemplo de salvar no localStorage:
    localStorage.setItem(`postagem-${postagem.id}`, JSON.stringify(postagem));

    // Crie o HTML da postagem
    const postagemHTML = `
      <li class="list-group-item" data-id="${postagem.id}">
        <p>${postagem.texto}</p>
        <button class="btn btn-sm btn-primary curtida-btn">Curtir <span class="badge bg-secondary">${postagem.curtidas}</span></button>
      </li>
    `;

    // Adicione o HTML da postagem à lista
    postagensContainer.innerHTML += postagemHTML;

    // Limpe o campo de texto
    textoPostagem.value = '';
  }
});

postagensContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('curtida-btn')) {
    const listItem = event.target.closest('.list-group-item');
    const postagemId = listItem.getAttribute('data-id');
    const postagem = JSON.parse(localStorage.getItem(`postagem-${postagemId}`));

    postagem.curtidas++;
    localStorage.setItem(`postagem-${postagem.id}`, JSON.stringify(postagem));
    
    const badge = event.target.querySelector('.badge');
    badge.textContent = postagem.curtidas;
  }
});


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const texto = textoPostagem.value.trim();

  if (texto) {
    // Crie um objeto para representar a postagem
    const postagem = {
      id: Date.now(), // ID único para cada postagem
      texto: texto,
      curtidas: 0 // Contador inicial de curtidas
    };

    // Salve a postagem (local storage, banco de dados, etc.)
    // Exemplo de salvar no localStorage:
    localStorage.setItem(`postagem-${postagem.id}`, JSON.stringify(postagem));

    // Crie o HTML da postagem
    const postagemHTML = `
      <li class="list-group-item" data-id="${postagem.id}">
        <p>${postagem.texto}</p>
        <button class="btn btn-sm btn-primary curtida-btn">Curtir <span class="badge bg-secondary">${postagem.curtidas}</span></button>
      </li>
    `;

    // Adicione o HTML da postagem à lista
    postagensContainer.innerHTML += postagemHTML;

    // Limpe o campo de texto
    textoPostagem.value = '';
  }
});

postagensContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('curtida-btn')) {
    const listItem = event.target.closest('.list-group-item');
    const postagemId = listItem.getAttribute('data-id');
    const postagem = JSON.parse(localStorage.getItem(`postagem-${postagemId}`));

    postagem.curtidas++;
    localStorage.setItem(`postagem-${postagem.id}`, JSON.stringify(postagem));
    
    const badge = event.target.querySelector('.badge');
    badge.textContent = postagem.curtidas;
  }
});
