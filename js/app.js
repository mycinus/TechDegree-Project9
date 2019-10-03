
let phraseArray = [];
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let selectedArrayLen = 0;
let lettersCorrect = 0;
let missed = 0;
let winConditionLength = 0;
const phrases = ['the apple of my eye', 'back to square one', 'i smell a rat', 'elephant in the room', 'spill the beans'];
const start_button = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');


function getRandomPhraseAsArray( arr ) {

    const result = [];
    var randArray = arr[Math.floor(Math.random()*arr.length)];
    let splitter = randArray.split('');

    return splitter;
}




function addPhraseToDisplay(arr) {
    //Do stuff any arr that is passed in, and add to `#phrase ul`
    let increase = 1;
    const ul = document.getElementById('phrase');
    for( var i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        li.setAttribute('id', 'li'+ increase.toString() )
        ul.appendChild(li);
        if(arr[i] === " ") {
            document.getElementById('li'+ increase.toString()).style.backgroundColor = 'white';
        }
        increase += 1;
    }

}

function disableButton( buttonID ) {
    // disables the button but also changes the right letter to blue..
    const id = document.getElementById(buttonID);
    id.disabled = 'true';

}



function checkLetter( button ) {
    let count = 0;

    for( var a = 0; a < phraseArray.length; a++) {
        
        if(button.innerHTML === phraseArray[a]) {
            count += 1;
        }

    }

    if( count === 0 ) {
        return null;
    } else {
        disableButton(button.id);
        document.getElementById(button.id).style.backgroundColor = 'steelblue';

        for( var b = 1; b <= phraseArray.length; b++){
            let li_item = document.getElementById('li' + b.toString());

            if( li_item.innerHTML === button.innerHTML ) {
                li_item.style.backgroundColor = 'steelblue';
                li_item.style.color = 'black';
                lettersCorrect += 1;
            }

        }
    }

}


function checkWin() {
    
    start_button.disabled = 'true';

    if( lettersCorrect === selectedArrayLen ) { // Cant win yet because the spaces are also accounted for to win.
        overlay.style.display = "block";
        overlay.style.backgroundColor = 'skyblue';
        start_button.innerHTML = 'GAME OVER';
        const winner = document.createElement('h4');
        winner.textContent = 'WINNER';
        winner.style.fontSize = '25px';
        winner.style.fontFamily = 'Roboto';
        overlay.appendChild(winner);
        
    }
    else if( missed === 5) { //Conditions if the user loses all of their hearts
        overlay.style.display = "block";
        overlay.style.backgroundColor = 'orangered';
        start_button.innerHTML = 'GAME OVER';
        const loser = document.createElement('h4');
        loser.textContent = 'LOSER';
        loser.style.fontSize = '25px';
        loser.style.fontFamily = 'Roboto';
        overlay.appendChild(loser);


    }

}


function hideArray() {

}

start_button.addEventListener('click', (e) => {
    overlay.style.display = "none";
    phraseArray = getRandomPhraseAsArray(phrases);
    for( var c = 0; c < phraseArray.length; c++) {
        if( phraseArray[c] !== " " ) {
            winConditionLength += 1;
        } 
    }
    selectedArrayLen = winConditionLength;
    addPhraseToDisplay(phraseArray);
    
});

qwerty.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON") {
        let user_button = e.target;
        letterFound = checkLetter(user_button);
    
        if(letterFound === null) {
            var imgLabel = 'img0';
            user_button.style.backgroundColor = 'red';
            missed += 1;
            if( missed > 1) {
                var image = document.getElementById(imgLabel + missed.toString());
            } else {
                var image = document.getElementById('img01');
            }
            image.parentNode.removeChild(image);
            disableButton(user_button.id);
            
        }
        checkWin();
    }


});
