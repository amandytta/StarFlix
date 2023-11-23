function adicionarFilme() {
	let filmeFavorito = document.getElementById("filme").value;
	let nomeFilme = document.getElementById("nomeFilme").value;
	let elementoListaFilmes = document.getElementById("cartaz-filmes");

	if (filmeFavorito === "" || nomeFilme === "") {
		alert("Por favor, preencha todos os campos!");
		return;
	}

    if (!/(jpg|jpeg)/i.test(filmeFavorito)) {
        alert("Por favor, forneça uma URL de imagem que contenha 'jpg' ou 'jpeg'.");
        return;
    }

	let divFilme = document.createElement("div");
	divFilme.classList.add("filme");

	let imgFilme = document.createElement("img");
	imgFilme.src = filmeFavorito;
	imgFilme.alt = nomeFilme;

    imgFilme.addEventListener("error", function() {
        alert("A imagem não pôde ser carregada. Certifique-se de fornecer uma URL válida.");
        divFilme.remove();
    });

	let pNomeFilme = document.createElement("p");
	pNomeFilme.classList.add("nome-filme");
	pNomeFilme.textContent = nomeFilme;

    let btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "btn-remover";
    btnRemover.onclick = function () {
        removerFilme(divFilme);
    };

	divFilme.appendChild(imgFilme);
	divFilme.appendChild(pNomeFilme);
    divFilme.appendChild(btnRemover);

	elementoListaFilmes.appendChild(divFilme);

	document.getElementById("filme").value = "";
	document.getElementById("nomeFilme").value = "";
}

function removerFilme(elementoFilme) {
    elementoFilme.remove();
}