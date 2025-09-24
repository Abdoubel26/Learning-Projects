function Tile({ className , value, onClick, playerTurn}) {

    function HoverManager(){
        if(playerTurn == "X" && value == null){
            return "x-hover"
        }
        else if(playerTurn == "O" && value == null) {
            return "o-hover"
        }
    }

    return ( 
        <div onClick={onClick} className={`Tile ${ className} ${HoverManager()}`}>
            {value}
        </div>
     );
} 

export default Tile;