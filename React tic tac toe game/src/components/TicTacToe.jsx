import Board from "./board";
import { useEffect, useState } from "react";
import GameOver from "./gameover";
import GameStates from "./gameState";

const PlayerX = 'X';
const PlayerO = 'O';




const winningCombinations = [
    //Rows
    {
        combo: [0, 1, 2],
        strikeClass: "strike-row-1"
    },
    {
        combo: [3, 4, 5],
        strikeClass: "strike-row-2"
    },
    {
        combo: [6, 7, 8],
        strikeClass: "strike-row-3"
    },
    //columns 
      {
        combo: [0, 3, 6],
        strikeClass: "strike-column-1"
    },
    {
        combo: [1, 4, 7],
        strikeClass: "strike-column-2"
    },
    {
        combo: [2, 5, 8],
        strikeClass: "strike-column-3"
    },
    //diagonals 
          {
        combo: [0, 4, 8],
        strikeClass: "strike-diagonal-1"
    },
    {
        combo: [6, 4, 2],
        strikeClass: "strike-diagonal-2"
    },
]

function TicTacToe(){

    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [playerTurn, setPlayerTurn] = useState(PlayerX)
    const [strikeClass, setStrikeClass] = useState(null);
    const [shown, setShown] = useState('not-shown');
    const [Winner, setWinner] = useState(GameStates.inprogress);
   
    useEffect(() => {
        checkWinner();
    }, [tiles])


    

    function checkWinner(){
        for (const {combo, strikeClass} of winningCombinations) {
            const tileValue1 = tiles[combo[0]]
            const tileValue2 = tiles[combo[1]]
            const tileValue3 = tiles[combo[2]]

            if (
                tileValue1 !== null &&
                tileValue1 === tileValue2 &&
                tileValue1 === tileValue3
            ){
                if( tileValue1 === "X"){
                    setWinner(GameStates.Xwins)
                    setPlayerTurn(null)
                    setShown(null)
                }
                else if (tileValue1 === "O"){
                    setWinner(GameStates.Owins)
                    setPlayerTurn(null)
                    setShown(null)
                }


                setStrikeClass(strikeClass)
            }

    
            
        }
    
    }

    if( tiles.filter(tile => tile !== null).length === 9 && Winner === GameStates.inprogress ){
                    setWinner(GameStates.draw)
                    setPlayerTurn(null)
                    setShown(null)
                }

    function PlayerTurnChanger() {
        if(playerTurn == PlayerX ){
            return PlayerO;
        }
        else {
            return PlayerX;
        }
    }

    function TileContent() {
        setPlayerTurn(PlayerTurnChanger())
    }

    function handleTileClick(index){
        if (Winner !== GameStates.inprogress){
            return;
        }

        const newtiles = [...tiles];
        if (newtiles[index] == null) {
            newtiles[index] = playerTurn;  
            TileContent()
          
        }
        setTiles(newtiles);
        
    }

    function reset(){
        setTiles(Array(9).fill(null));
        setPlayerTurn(PlayerX)
        setStrikeClass(null)
        setShown('not-shown')
        setWinner(GameStates.inprogress)


    }
    

    return(
        <>
        <GameOver Winner={Winner}/>
        <Board tiles={tiles} onTileClick={handleTileClick} playerTurn={playerTurn}  strikeClass={strikeClass}/>
        <div className={`${shown} reset-button-div`}>
        <button onClick={reset} className="reset-button">
            Reset
        </button>
        </div>
        </>
    )
}

export default TicTacToe;