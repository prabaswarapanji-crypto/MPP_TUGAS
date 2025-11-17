let shoppingList = [];

function renderList() {
    const listElement = document.getElementById('itemsBelanja');
    const countElement = document.getElementById('jumlahItem');
    
    listElement.innerHTML = '';

    for (let i = 0; i < shoppingList.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = shoppingList[i];
        listElement.appendChild(listItem);
    }

    countElement.textContent = `Jumlah item saat ini: ${shoppingList.length}`;
}

function tambahItem() {
    const inputElement = document.getElementById('newItem');
    const newItemValue = inputElement.value.trim();

    if (newItemValue !== '') {
        shoppingList.push(newItemValue);
        inputElement.value = '';
        renderList();
    } else {
        alert('Mohon masukkan nama item terlebih dahulu.');
    }
}

function hapusItemTerakhir() {
    if (shoppingList.length > 0) {
        const deletedItem = shoppingList.pop();
        console.log(`Item yang dihapus: "${deletedItem}`);
        renderList();
    } else {
        alert('Daftar belanja sudah kosong, tidak ada item untuk dihapus.');
    }
}
renderList();
