// global words

let word;
let msg;
let voice_name = "Microsoft Guy Online (Natural) - English (United States)"
let voiceKeys = ["m1us", "f1us", "m1uk", "f1uk"];

createWindowGame();

function resetBody(){
    x = document.body
    x.style.margin = "0";
    x.style.backgroundColor = "rgb(180, 180, 180)";
    return x;
}

function createDiv(){
    const x = document.createElement("div");
    x.style.boxSizing = "border-box";
    x.style.display = "flex";
    x.style.gap = "15px";
    return x;
}

function createDivRow(){
    const x = createDiv();
    x.style.flexDirection = "row";
    return x;
}

function createDivCol(){
    const x = createDiv();
    x.style.flexDirection = "column";
    return x;
}

function createDivRow_App(){
    const x = createDivRow();
    x.id = "divApp";
    x.style.flexWrap = "wrap";
    x.style.padding = "20px";
    x.style.fontFamily = "Verdana, sans-serif";
    x.style.width = "100%";
    x.style.height = "100%";
    return x;
}

function createBttn(){
    const x = document.createElement("button");
    x.style.margin = "0px";
    x.style.width = "160px";
    x.style.height = "45px";
    x.style.cursor = "pointer";
    x.style.border = "1px solid black";
    x.style.fontFamily = "Verdana, sans-serif";
    x.style.fontSize = "medium";
    x.style.backgroundColor = "white";//"#b2d5b2";
    x.addEventListener("mouseover", function() {
      x.style.border = "2px solid black";
    });
    x.addEventListener("mouseout", function() {
        x.style.border = "1px solid black";
    });
    return x;
}

function createBttnWord(word){
    const x = createBttn();
    x.id = "bttnWord_" + word;
    x.innerHTML = word;
    return x;
}

function createH3(){
    const x = document.createElement("h3");
    x.style.margin = "0";
    x.style.textAlign = "center";
    x.style.fontFamily = "Verdana, sans-serif";
    return x
}

function createH3Word(){
    const x = createH3();
    x.id = "h3Word";
    x.innerHTML = "";
    x.onclick = function() {
        const address = "https://www.google.com/search?q=how+to+pronounce+";
        window.open(address + x.innerHTML, "_blank");
    }
    return x;
}

function createInputSyllable(syllable){
    const x = document.createElement("input");
    x.name = syllable;
    x.style.width = "80px";
    x.style.height = "45px";
    x.style.fontSize = "medium";
    x.style.textAlign = "center";
    x.style.fontFamily = "Verdana, sans-serif";
    x.style.outline = 'none';
    x.style.border = "0px solid black";
    x.style.borderBottom = "1px solid black";
    x.oninput = function(event) {
        const syllableInput = event.target;
        const is_syllable_input_correct = isSyllableInputCorrect(syllableInput)
        if (is_syllable_input_correct === true) {
            x.style.backgroundColor = "lightgreen";
        } else if (is_syllable_input_correct === false) {
            x.style.backgroundColor = "lightcoral";
        } else {
            x.style.backgroundColor = "white";
        }
    }
    return x;
}

function createDivSyllables(){
    const x = createDivHor();
    x.id = "divSyllables";
    x.style.justifyContent = "center";
    x.style.alignItems = "center";
    x.minHeight = "45px";
    return x;
}

function createDivBttns(){
    const x = createDivHor();
    x.id = "divBttns";
    x.style.justifyContent = "center";
    x.style.alignItems = "center";
    return x;
}

function createBttnCheck(){
    const x = createBttn();
    x.id = "bttnCheck";
    x.innerHTML = "Check";
    x.onclick = function() {
        const address = "https://www.google.com/search?q=how+to+pronounce+";
        window.open(address + x.innerHTML, "_blank");
    }
    return x;
}

function createBttnNext(){
    const x = createBttn();
    x.id = "bttnCheck";
    x.innerHTML = "Next";
    x.onclick = _ => resetGame();
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
    x.style.gap = "25px";
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
    x.onclick = _ => window.location.href = "index.html";
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

function createWindowIndex(){
    resetBody(document.body);

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

    const divRow3 = createDivRow3();
    divWindow.appendChild(divRow3);
}

function createWindowGame() {
    resetBody(document.body);

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

    const h3Word = createH3Word();
    divWindow.appendChild(h3Word);

    const divSyllables = createDivSyllables();
    divWindow.appendChild(divSyllables);

    resetGame()
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
    msg.rate = rate;
    window.speechSynthesis.speak(msg);
    console.log("word played");
}

function run(){
    const divApp = createDivApp();
    document.body.appendChild(divApp);
    for (const word of words) {
        const bttnWord = createBttnWord(word);
        divApp.appendChild(bttnWord);
    }
}

run();