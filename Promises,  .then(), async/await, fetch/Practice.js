async function fetchUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let data = await response.json();
    console.log(data);
  }
