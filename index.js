
const cells = document.querySelectorAll('.cell');
let player = '';
let game = false;
function playerX(){
    player = 'X';
    cells.forEach( div=>{
        div.addEventListener('click', function(){
            if(!div.textContent && !game){
            div.textContent = player;
            gamerules();
            player = player === 'X' ? 'O':'X'
           }
    })   
});

function gamerules(){
    lines =[
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 5, 9], [3, 5, 7]
    ];
    for( let line of lines){
        const [a, b, c] = line;
        const cellA = document.getElementById(a.toString());
        const cellB = document.getElementById(b.toString());
        const cellC = document.getElementById(c.toString());

        if(cellA.textContent && cellA.textContent === cellB.textContent && cellA.textContent === cellC.textContent){
            cellA.style.backgroundColor = 'blue';
            cellB.style.backgroundColor = 'blue';
            cellC.style.backgroundColor = 'blue';
            game = true;
            return;
        }
    }
}
}

function playerO() {
    player = 'O';
    cells.forEach( div=>{
        div.addEventListener('click', function(){
            if(!div.textContent && !game){
            div.textContent = player;
            gamerules();
            player = player === 'O' ? 'X':'O'
            }
        })   
    });
    
    function gamerules(){
        lines =[
            [1, 4, 7], [2, 5, 8], [3, 6, 9],
            [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 5, 9], [3, 5, 7]
        ];
        for( let line of lines){
            const [a, b, c] = line;
            const cellA = document.getElementById(a.toString());
            const cellB = document.getElementById(b.toString());
            const cellC = document.getElementById(c.toString());
    
            if(cellA.textContent && cellA.textContent === cellB.textContent && cellA.textContent === cellC.textContent){
                cellA.style.backgroundColor = 'blue';
                cellB.style.backgroundColor = 'blue';
                cellC.style.backgroundColor = 'blue';
                game = true;
                return;
            }
        }
    }
}


function reset(){
    player= '';
    game = false;
    cells.forEach( div =>{
        div.textContent = "";
        div.style.backgroundColor = "";
    })
}