const input = document.getElementById("inputE").value.toLowerCase();
const button = document.getElementById("button");
const errorp = document.getElementById("errorp");
const spritedisplay = document.getElementById("displaysprite");




button.addEventListener('click', searchPokémon);



async function searchPokémon() {


    const input = document.getElementById("inputE").value.toLowerCase();
    const loading = document.getElementById("loadinggif");

    loading.style.display = "block";
    errorp.textContent = "";
    spritedisplay.removeAttribute('src');

    let result =  await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    if(!result.ok){
        errorp.textContent = "Could not find Pokemon!";
        spritedisplay.setAttribute('src', '');
    }
    else {
    let data = await result.json();
    let imageurl = data.sprites.front_default;
    spritedisplay.setAttribute('src', imageurl);
    }
    try {}
    catch {}
    finally {
        loading.style.display = "none";
    }
}