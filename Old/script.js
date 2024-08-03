document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');

    // Initialize Telegram WebApp
    const tg = window.Telegram.WebApp;
    tg.expand(); // Expand the WebApp to full height

    // Function to create a single cell
    function createCell() {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => {
            if (!cell.querySelector('.dot')) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                cell.appendChild(dot);
                // You can send data back to bot if needed
                tg.sendData(JSON.stringify({ cellIndex: Array.from(grid.children).indexOf(cell) }));
            }
        });
        return cell;
    }

    // Create a 6x6 grid
    for (let i = 0; i < 36; i++) {
        grid.appendChild(createCell());
    }

    // Handle closing WebApp
    tg.onEvent('mainButtonClicked', () => {
        tg.close();
    });

    // Example of using Main Button
    tg.MainButton.text = "Close";
    tg.MainButton.show();
});
