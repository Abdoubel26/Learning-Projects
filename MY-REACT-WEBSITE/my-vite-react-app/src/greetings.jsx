
function Greetings({ loggedIn, username }) {
    return (loggedIn ?
           <h1>Welcome back, {username}!</h1> 
           : <h1>Welcome to our platform!</h1>);
}

export default Greetings;
