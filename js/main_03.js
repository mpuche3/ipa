const letter_words = ["a", "i", "n", "s", "sz"]
let words = a_words;
let game_status;
let game_score = 0;
let text_word;
let text_opposite_word;
let msg;
let voice_name = "Microsoft Guy Online (Natural) - English (United States)"
let voiceKeys = ["m1us", "f1us", "m1uk", "f1uk"];

createWindowIndex();

function resetBody(){
    const x = document.body;
    while (x.firstChild) {
        x.removeChild(x.firstChild);
    }
    x.style.margin = "0";
    x.style.backgroundColor = "rgb(180, 180, 180)";
    return x;
}

function createDiv(){
    const x = document.createElement("div");
    x.style.boxSizing = "border-box";
    x.style.display = "flex";
    return x;
}

function createBttn(){
    const x = document.createElement("button");
    x.style.margin = "0px";
    x.style.width = "150px";
    x.style.height = "45px";
    x.style.cursor = "pointer";
    x.style.border = "1px solid black";
    x.style.fontFamily = "Verdana, sans-serif";
    x.style.fontSize = "medium";
    x.style.backgroundColor = "light-grey";//"#b2d5b2";
    x.addEventListener("mouseover", function() {
      x.style.border = "2px solid black";
    });
    x.addEventListener("mouseout", function() {
      x.style.border = "1px solid black";
    });
    return x;
}

function createH3(str){
    const x = document.createElement("h3");
    x.innerText = str;
    x.style.margin = "0";
    x.style.textAlign = "center";
    x.style.fontFamily = "Verdana, sans-serif";
    return x
}

function createH3Score(){
    const x = createH3("Score: " + game_score);
    x.id = "h3Score";
    return x;
}

function createH3Question(){
    const x = createH3("Guess the word");
    x.id = "h3Question";
    return x;
}

function createDivApp(){
    const x = createDiv();
    x.id = "divApp";
    x.style.flexDirection = "column";
    x.style.alignItems = "center";
    x.style.padding = "20px";
    x.style.fontFamily = "Verdana, sans-serif";
    x.style.width = "100%";
    x.style.height = "100%";
    return x;
}

function createDivWindow() {
    const x = createDiv();
    x.id = "divWindow";
    x.style.flexDirection = "column";
    x.style.justifyContent = "center";
    x.style.textAlign = "center";
    x.style.width = "100%"
    x.style.maxWidth = "800px";
    x.style.height = "300px";
    x.style.backgroundColor = "white";
    x.style.border = "1px solid black";
    x.style.position = "absolute";
    x.style.gap = "15px";
    return x;
}

function createCloseButton(){
    const x = document.createElement("button");
    x.id = "closeButton";
    x.style.position = "absolute";
    x.style.top = "0px";
    x.style.right = "0px";
    x.style.width = "35px";
    x.style.height = "35px";
    x.style.border = "none";
    x.style.cursor = "pointer";
    x.style.fontSize = "20px";
    x.innerHTML = "&times;";
    x.style.backgroundColor = "white";

    x.addEventListener("mouseover", function() {
      x.style.backgroundColor = "red";
    });
    x.addEventListener("mouseout", function() {
      x.style.backgroundColor = "white";
    });
    return x
}

function createDivContainerVoiceKeys(){
    const x = document.createElement('div');
    x.id = "divContainerVoiceKeys";
    x.style.fontFamily = "'Arial', sans-serif";
    x.style.fontSize = "medium";
    x.style.display = "flex";
    x.style.flexDirection = "row";
    x.style.position = "absolute";
    x.style.top = "0";
    x.style.left = "0";
    x.style.padding = "15px";
    x.style.gap = "15px";
    return x;
}

function createDivVoicekey(voiceKey){
    const x = document.createElement('div');
    x.id = voiceKey;
    x.innerHTML = voiceKey;
    x.style.cursor = "pointer";
    x.addEventListener('click', function() {
        for (const divId of voiceKeys) {
            const divVoiceKey = document.querySelector("#" + divId);
            divVoiceKey.style.textDecoration = "";
        }
        x.style.textDecoration = "underline";
        voice_name = getVoiceName(voiceKey)
    });
    return x
}

function createDivRow1(){
    const x = createDiv();
    x.id = "divRow1";
    x.style.flexDirection = "row";
    x.style.justifyContent = "center";
    x.style.gap = "15px";
    return x;
}

function createDivRow2(){
    const x = createDiv();
    x.id = "divRow1";
    x.style.flexDirection = "row";
    x.style.justifyContent = "center";
    x.style.gap = "15px";
    return x;
}

function createBttnSound(){
    const x = createBttn();
    x.id = "bttnSoundNext";
    x.style.width = "195px";
    x.innerHTML = "";
    return x;
}

function createBttnOpposite(){
    const x = createBttn();
    x.innerHTML = "-";
    x.style.width = x.style.height;
    x.onclick = _ => speak(text_opposite_word);
    return x;
}

function createBttnLeft(word){
    const x = createBttn();
    x.id = "bttnLeft"
    x.innerHTML = word;
    return x;
}

function createBttnRight(word){
    const x = createBttn();
    x.id = "bttnRight"
    x.innerHTML = word;
    return x;
}

function createBttnLetter(letter_word){
    const x = createBttn();
    x.id = "bttnLetter"
    x.innerHTML = letter_word;
    x.style.width = x.style.height;
    x.onclick = _ => launchGame(letter_word);
    return x;
}

function launchGame(letter_word){
    if (letter_word == "a") {words = a_words;}
    else if (letter_word == "i") {words = i_words;}
    else if (letter_word == "n") {words = n_words;}
    else if (letter_word == "s") {words = s_words;}
    else if (letter_word == "sz") {words = sz_words;}
    else {letter_word = [].concat(a_words, i_words, n_words, s_words, sz_words);}
    createWindowGame();
}

function createWindowIndex(){
    resetBody();

    const divApp = createDivApp();
    document.body.appendChild(divApp);

    const divWindow = createDivWindow();
    divApp.appendChild(divWindow);
    
    const closeButton = createCloseButton();
    closeButton.onclick = _ => window.location.href = "index.html";
    divWindow.appendChild(closeButton);
    
    const divRow1 = createDivRow1();
    divRow1.innerText = "Choose a game";
    divWindow.appendChild(divRow1);

    const divRow2 = createDivRow2();
    divWindow.appendChild(divRow2);

    for (const letter_word of letter_words) {
        const bttnLetter = createBttnLetter(letter_word);
        divRow2.appendChild(bttnLetter);
    }
}

function createWindowGame() {
    resetBody();

    const divApp = createDivApp();
    document.body.appendChild(divApp);

    const divWindow = createDivWindow();
    divApp.appendChild(divWindow);
    
    const closeButton = createCloseButton();
    closeButton.onclick = _ => createWindowIndex();
    divWindow.appendChild(closeButton);

    const divContainerVoiceKeys = createDivContainerVoiceKeys();
    divWindow.appendChild(divContainerVoiceKeys)
    
    for (const voiceKey of voiceKeys) {
        const divVoiceKey = createDivVoicekey(voiceKey)
        divContainerVoiceKeys.appendChild(divVoiceKey);
    }

    const h3Score = createH3Score();
    divWindow.appendChild(h3Score);

    const h3Question = createH3Question();
    divWindow.appendChild(h3Question);

    const divRow1 = createDivRow1();
    divWindow.appendChild(divRow1);

    const bttnOppositeLeft = createBttnOpposite();
    divRow1.appendChild(bttnOppositeLeft);

    const bttnSound = createBttnSound();
    divRow1.appendChild(bttnSound);

    const bttnOppositeRight = createBttnOpposite();
    divRow1.appendChild(bttnOppositeRight);

    const divRow2 = createDivRow2();
    divWindow.appendChild(divRow2);

    const bttnLeft = createBttnLeft();
    divRow2.appendChild(bttnLeft);

    const bttnRight = createBttnRight();
    divRow2.appendChild(bttnRight);

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft"){
            if (document.getElementById("bttnLeft").innerHTML == text_word){
                setStatusCorrect();
            } else {
                setStatusIncorrect();
            }
        }
        if (event.key === "ArrowRight"){
            if (document.getElementById("bttnRight").innerHTML == text_word){
                setStatusCorrect();           
            } else {
                setStatusIncorrect();
            }
        }
        if (event.key === "Enter"){
            document.getElementById("bttnSoundNext").click();
        }
    });

    if (document.getElementById("bttnLeft").innerHTML == text_word){
        setStatusCorrect();
        setStatusPlaying();
    } else {
        setStatusIncorrect();
    }

    setStatusPlaying();
    document.querySelector("#m1uk").click()
}

function getVoiceName(nameKey) {
    const DictVoicesEdge = {
        "m1us": "Microsoft Guy Online (Natural) - English (United States)",
        "f1us": "Microsoft Ana Online (Natural) - English (United States)",
        "m1uk": "Microsoft Ryan Online (Natural) - English (United Kingdom)",
        "f1uk": "Microsoft Sonia Online (Natural) - English (United Kingdom)",
    }
    const DictVoicesChrome ={
        "m1us": "Google US English",
        "f1us": "Google US English",
        "m1uk": "Google UK English Male",
        "f1uk": "Google UK English Female",
    }
    const voice_name_edge = DictVoicesEdge[nameKey];
    const voice_name_chrome = DictVoicesChrome[nameKey];
    isEdgeVoice = window.speechSynthesis.getVoices().filter(voice => voice.name === voice_name_edge)[0];
    isChromeVoice = window.speechSynthesis.getVoices().filter(voice => voice.name === voice_name_chrome)[0];
    if (isEdgeVoice !== undefined) {
        return voice_name_edge;
    } else if (isChromeVoice !== undefined) {
        return voice_name_chrome;
    } else {
        console.log("Voice not found");
        return window.speechSynthesis.getVoices()[0].name;
    }
}

function speak(text, rate = 1) {
    msg = new SpeechSynthesisUtterance();
    msg.voice = window.speechSynthesis.getVoices().filter(voice => voice.name === voice_name)[0];
    msg.text = text;
    msg.rate = rate;
    window.speechSynthesis.speak(msg);
    console.log("word played");
}

function setStatusPlaying(){
    game_status = "playing";
    const wordPair = words[Math.floor(Math.random() * words.length)];    
    const chosen = Math.floor(Math.random() * wordPair.length)
    text_word = wordPair[chosen];
    text_opposite_word = wordPair[(chosen + 1) % 2];
    document.getElementById("h3Question").style.color = "black";
    document.getElementById("h3Score").innerText = "Score: " + game_score;
    document.getElementById("h3Score").style.color = "black";      
    document.getElementById("h3Question").innerText = "";
    document.getElementById("bttnSoundNext").innerHTML = ""
    document.getElementById("bttnSoundNext").onclick = _ => speak(text_word);
    document.getElementById("bttnLeft").innerHTML = wordPair[0];
    document.getElementById("bttnRight").innerHTML = wordPair[1];
    document.getElementById("bttnLeft").onclick = event => event.target.innerHTML == text_word ? setStatusCorrect() : setStatusIncorrect();
    document.getElementById("bttnRight").onclick = event => event.target.innerHTML == text_word ? setStatusCorrect() : setStatusIncorrect();
    speak(text_word);
}

function setStatusCorrect(){
    setStatusBothCorrectIncorrect()    
    game_score = game_score + 1;
    document.querySelector("#h3Score").style.color = "green";
    document.querySelector("#h3Score").innerText = "Correct";
    setStatusPlaying();
}

function setStatusIncorrect(){
    setStatusBothCorrectIncorrect()    
    document.querySelector("#h3Score").style.color = "red";
    document.querySelector("#h3Score").innerText = "Incorrect! Your score was " + game_score;
    game_score = 0;
}

function setStatusBothCorrectIncorrect(){
    document.getElementById("bttnSoundNext").innerHTML = "Try again";
    document.getElementById("bttnSoundNext").onclick = setStatusPlaying;    
    document.getElementById("bttnLeft").onclick = event => speak(event.target.innerHTML);
    document.getElementById("bttnRight").onclick = event => speak(event.target.innerHTML);
}