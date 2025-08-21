import List from './list.jsx'


function Button() {
    let count = 0;
    const handleClick = (e) => {
        console.log(e);
        if(count < 5){
            count++;
            alert(`Bro stop clicking me!`)
        }
        else {
        e.target.textContent = "OUCH! 🤕"
        }
    };

    return (
        <>
        <button onDoubleClick={handleClick} className="button">
            Click me 🙃
        </button>
        </>
    );
}

  /*  let count = 0;

    const handleClick = ({name}) => {
        if (count < 5) {
            count += 1;
            alert(`${name} you clicked me ${count} times`);
        } else {
            alert(`${name} stop clicking me `);
        }
    }

*/


export default Button;