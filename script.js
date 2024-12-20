async function loadProductions() {
    const response = await fetch('/productions.json');
    const productions = await response.json();
    const productionList = document.getElementById('productionList');
    productionList.innerHTML = '';

    productions.forEach(prod => {
        const li = document.createElement('li');
        li.textContent = `${prod.title} - ${prod.description} (Lien: ${prod.youtubeLink})`;
        productionList.appendChild(li);
    });
}
