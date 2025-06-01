var row = 0;
const tiles = ['0', '1', '2', '3', '4']
var attempts = {}
var colors = {}

function KeyPress(event) {
    let key = event.key;

    if (key === "Enter" && document.getElementById(row + tiles[4]).innerText !== '') {

        for (let i = 0; i < tiles.length; i++) {
            attempts[row + tiles[i]] = document.getElementById(row + tiles[i]).innerText;
            colors[row + tiles[i]] = document.getElementById(row + tiles[i]).style.backgroundColor;
        }
        row++;

        fetch('/', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([attempts, colors]),
            })
        .then(response => response.json())
        .then(data => {

            list = data['received_data'];
            const ul_list = document.getElementById('suggest');

            for (let i = 0; i < list.length; i++) {
                const list_item = document.createElement('li');
                list_item.textContent = list[i];
                ul_list.appendChild(list_item);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
    }

    if (key === "Backspace") {
        for(let y = 5; y >= 0; y--) {
            const cellID = row + tiles[y];
            const cell = document.getElementById(cellID);

            if (!cell) continue;

            if (cell.innerText != '') {
                cell.style.backgroundColor = 'lightgrey';
                cell.innerText = '';
                return;
            }
        }
    }

    else {

        if (key.length > 1) {
            return;
        }

        if (!/^[a-zA-Z]*$/.test(key)) {
            return;
        }

        for (let j = 0; j < tiles.length; j++) {
            const cellID = row + tiles[j];
            const cell = document.getElementById(cellID);

            if (!cell) continue;

            else {
                if (cell.innerText === '') {
                    cell.innerText = key.toUpperCase();
                    return;
                }
            }
        }
    }
}

function Green() {

    for (let i = 5; i >= 0; i--) {
        const cell = document.getElementById(row + tiles[i]);

        if (!cell) {
            continue;
        }

        if (cell.innerText) {
            cell.style.backgroundColor = 'Green';
            return;
        }
    }
}

function Yellow() {
    for (let i = 5; i >= 0; i--) {
        const cell = document.getElementById(row + tiles[i]);

        if (!cell) {
            continue;
        }

        if (cell.innerText) {
            cell.style.backgroundColor = 'Yellow';
            return;
        }
    }
}
