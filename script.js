const list_items = []

document.getElementById('submit').addEventListener('click', function() {

    let word = document.getElementById('color-picker').value;
    let li = document.createElement('li');
    li.innerText = word;
    document.getElementById('item-list').appendChild(li)

    list_items.push(word);

    document.getElementById('color-picker').value = null;

})

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('item-list').innerHTML = '';
})

document.getElementById('get-name').addEventListener('click', function() {
    const item_to_remove = document.getElementById('enter-word').value;

    if (!list_items.includes(item_to_remove)) {
        alert(`${item_to_remove} is not available to remove.`)
    } else {
        const items = document.querySelectorAll('li');
        items.forEach((item) => {
            if (item.innerHTML == item_to_remove) {
                item.remove();
            }
        });
    }


    document.getElementById('enter-word').value = null;
})