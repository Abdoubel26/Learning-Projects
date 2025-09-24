import GameStates from './gameState'


function GameOver({Winner}) {
    
    let value = 'Tic Tac Toe';

    switch (true){
        case Winner === GameStates.Xwins:
            value = "X Wins!"
            break
        case Winner === GameStates.Owins:
            value = 'O Wins!'
            break
        case Winner === GameStates.draw:
            value = "It's a Tie!"
            break
    }

    return ( 
        <div className='gameover'>
            <h1>
                {value}
            </h1>
        </div>
     );
}

export default GameOver;