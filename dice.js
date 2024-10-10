function rolldice(){
const input = document.getElementById(`input`);
const btn = document.getElementById(`btn`);
const numresult = document.getElementById(`numresult`);
const diceresult = document.getElementById(`diceresult`);
const values = [];
const images = [];
let number = input.value;
if(input.value >= 1){
    for(let i = 0; i < number; i++){
        let dicenumber = Math.floor(Math.random() * 6) +1;
        values.push(dicenumber);
        images.push(`<img src="dice_photo/${dicenumber}.png" id="photo" />`);
    }
    numresult.textContent = `The Dice result : ${values.join(", ")}`;
    diceresult.innerHTML  = `${images}`;
}else{
    numresult.textContent = `Please Enter an appropriate number`;
    diceresult.textContent  = ``;
}
    
}