// http://localhost:3000/characters


getCharacters()
 // fetch
function getCharacters(){
   fetch('http://localhost:3000/characters')
    .then((resp) => resp.json())
    .then((characterData) => {
        console.log(characterData)
    characterBarNames(characterData)
    });
}

//function getIndividualCharacters(){
  //  fetch('http://localhost:3000/characters/')
//}


// render 

function renderCharactersInfo(charactersInfo){
return `<div class = "characterInfo">
<div id="detailed-info">
    <p id="name">${charactersInfo?.name}</p>
    <img id="image" src=${charactersInfo?.image}>
    <h4>Total Calories: <span id="calories">${charactersInfo?.calories}</span> </h4>
    <form id="calories-form">
        <input type="hidden" value="Character's id" id="characterId"/> <!-- Assign character id as a value here -->
        <input type="text" placeholder="Enter Calories" id="calories"/>
        <input type="submit" value="Add Calories"/>
    </form>
    <button id="reset-btn">Reset Calories</button>
</div>
</div>`
}


function appendAllCharacters(allCharacters){
    allCharacters.forEach()
}


// adding span tag


function characterBarNames(characters){
const getCharacterBar = document.getElementById('character-bar')
characters.forEach((character) => {
    const characterSpan = document.createElement('span')
    characterSpan.innerHTML = character.name
    getCharacterBar.appendChild(characterSpan)
    })
    };