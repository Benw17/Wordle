var row = 0;
const tiles = ['0', '1', '2', '3', '4']

function KeyPress(event) {
    let key = event.key;

    if (key === "Enter" && document.getElementById(row + tiles[4]).innerText !== '') {

        document.getElementById('000').value = document.getElementById('00').innerText;
        
        row++;
        return;
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

    for (let i = 0; i < tiles.length; i++) {
        const cell = document.getElementById(row + tiles[i]);

        if (!cell.innerText) {

            document.getElementById(row + tiles[i - 1]).style.backgroundColor = "green";
            return;
        }

        if (i === tiles.length - 1) {

            cell.style.backgroundColor = "green";
            return;
        }
    }
}

function Yellow() {
    for (let i = 0; i < tiles.length; i++) {
        const cell = document.getElementById(row + tiles[i]);

        if (!cell.innerText) {

            document.getElementById(row + tiles[i - 1]).style.backgroundColor = "yellow";
            return;
        }

        if (i === tiles.length - 1) {
            cell.style.backgroundColor = "yellow";
            return;
        }
    }
}

function Reset() {
    for (let i = 0; i < tiles.length; i++) {
        for (let j = 0; j < tiles.length; j++) {
            const cell = document.getElementById(tiles[i] + tiles[j]);

            cell.innerText = '';
            cell.style.backgroundColor = 'lightgrey';
            row = 0;
        }
    }
}
