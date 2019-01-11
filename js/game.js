const GRID_WIDTH = 1368;
const GRID_HEIGHT = 720;
const GRID_ROWS = 36;
const GRID_COLS = 54;
const GAME_SPEED = 100;

let isPlaying = false;

const root = document.getElementById('root');

const table = createTable(GRID_ROWS, GRID_COLS);

function createTable(rows, cols) {
    const table = document.createElement('table');

    table.className = 'grid';

    for (let i = 0; i < rows; i++) {
        const row  = document.createElement('tr');
        
        row.className = 'row';

        for (let j = 0; j < cols; j++) {
            const cell  = document.createElement('td');
            
            cell.className = 'cell';
            cell.width = GRID_WIDTH / cols;
            cell.height = GRID_HEIGHT / rows;

            row.appendChild(cell)   
        }

        table.appendChild(row);
    }

    table.addEventListener('click', event => {
        
        if (!event.target.classList.contains('cell')) return;

        const cell = event.target;

        cell.classList.toggle('alive');
        
    });

    root.appendChild(table);

    return table;
}

function createControls() {
    const startButton = document.createElement('button');
    startButton.className = 'material-icons';
    startButton.textContent = 'play_arrow';

    const restButton = document.createElement('button');
    startButton.className = 'material-icons';
    startButton.textContent = 'replay';

    const randomizeButton = document.createElement('button');
    startButton.className = 'material-icons';
    startButton.textContent = 'transform';

    const container = document.createElement('div');
    container.className = 'controls';

    container.append(startButton, restButton, randomizeButton);

}