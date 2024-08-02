let Rolls = 0;


function rollDice(){
    const numOfDice = document.getElementById(`numOfDice`).value;
    const diceResult = document.getElementById(`diceResult`);
    const diceImages = document.getElementById(`diceImages`);
    const rollsP = document.getElementById(`rollsP`);
    const values = [];
    const images = [];
    let sum = 0;

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        sum += Number(value);
        images.push(`<img src="diceSVGs/${value}.svg">`);
    }

    diceResult.textContent = `Dice: ${values.join(`, `)}; Sum: ${sum}`;
    diceImages.innerHTML = images.join('');
}

function rollCount(){
    Rolls++;
    rollsP.textContent = `Rolls: ${Rolls}`
}
