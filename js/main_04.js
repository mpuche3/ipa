// global words

const speak = (function (){
    let msg;
    let word = "attrition";
    let iVoice = 117;
    let rate = 0.5;
    let pause = true;

    const voices = {
        "m1us": "Microsoft Guy Online (Natural) - English (United States)",
        "m2us": "Microsoft Roger Online (Natural) - English (United States)",
        "m3us": "Microsoft Steffan Online (Natural) - English (United States)",
        "m4us": "Microsoft Christopher Online (Natural) - English (United States)",
        "m5us": "Microsoft Eric Online (Natural) - English (United States)",
        "f1us": "Microsoft Aria Online (Natural) - English (United States)",
        "f2us": "Microsoft Ana Online (Natural) - English (United States)",
        "f3us": "Microsoft Jenny Online (Natural) - English (United States)",
        "f4us": "Microsoft Michelle Online (Natural) - English (United States)",
    };

    function run () {
        window.speechSynthesis.cancel();
        if (pause === true) {return};
        msg = new SpeechSynthesisUtterance();
        msg.voice = window.speechSynthesis.getVoices()[iVoice];//.filter(voice => voice.name === voice_name)[0];
        msg.onend = _ => run() ;
        msg.text = word;
        msg.rate = rate;
        window.speechSynthesis.speak(msg);
        console.log(msg.text);
    }
    function repeat(word_) {
        window.speechSynthesis.cancel();
        if (word_ !== undefined) {
            word = word_;
        }
        pause = false;
        run();
    }
    function stop() {
        window.speechSynthesis.cancel();
        pause = true;
    }
    function getVoices() {
        return window.speechSynthesis.getVoices();
    }
    function setRate(rate_) {
        rate = rate_;
    }
    function setVoice(voice_name) {
        const voices = window.speechSynthesis.getVoices();
        const voices_name = voices.map(voice => voice.name);
        const iVoice_ = voices_name.indexOf(voice_name);
        if (iVoice_ !== -1){
            iVoice = iVoice_;
            msg.voice = window.speechSynthesis.getVoices()[iVoice];
        } else {
            console.log(`"${voice_name}" is not found`)
        }
    }
    function read(text) {
        window.speechSynthesis.cancel();
        pause = false;
        msg = new SpeechSynthesisUtterance();
        msg.voice = window.speechSynthesis.getVoices()[iVoice];
        msg.rate = rate;
        msg.text = text;
        window.speechSynthesis.speak(msg);
        console.log(msg.text);
    }
    return {repeat, read, stop, setRate, setVoice, getVoices, voices}
})();

createWindowGame();

document.body.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        resetGame();
    }
});

function resetBody(){
    x = document.body
    while (x.firstChild) {
        x.firstChild.remove();
    }
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

function createDivHor(){
    const x = createDiv();
    x.style.flexDirection = "row";
    return x;
}

function createDivVer(){
    const x = createDiv();
    x.style.flexDirection = "column";
    return x;
}

function createBttn(){
    const x = document.createElement("button");
    x.style.margin = "0px";
    x.style.width = "80px";
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
        syllableInput.value = syllableInput.value.toLowerCase();
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
        for (const divId in speak.voices) {
            const divVoiceKey = document.querySelector("#" + divId);
            divVoiceKey.style.textDecoration = "";
        }
        x.style.textDecoration = "underline";
        voice_name = speak.voices[voiceKey];
        speak.setVoice(voice_name);
    });
    return x
}

function createWindowGame() {
    const isEdge = /Edg/.test(navigator.userAgent);
    if (!isEdge) {
        return createWindowWarningOnlyEdge(); 
    }

    resetBody(document.body);

    const divApp = createDivApp();
    document.body.appendChild(divApp);

    const divWindow = createDivWindow();
    divApp.appendChild(divWindow);
    
    const closeButton = createCloseButton();
    closeButton.onclick = _ => window.location.href = "index.html";
    divWindow.appendChild(closeButton);

    const divContainerVoiceKeys = createDivContainerVoiceKeys();
    divWindow.appendChild(divContainerVoiceKeys)
    
    for (const voiceKey in speak.voices) {
        const divVoiceKey = createDivVoicekey(voiceKey)
        divContainerVoiceKeys.appendChild(divVoiceKey);
    }

    const h3Word = createH3Word();
    divWindow.appendChild(h3Word);

    const divSyllables = createDivSyllables();
    divWindow.appendChild(divSyllables);

    resetGame()
}

function createWindowWarningOnlyEdge(){
    resetBody(document.body);

    const divApp = createDivApp();
    document.body.appendChild(divApp);

    const divWindow = createDivWindow();
    divApp.appendChild(divWindow);
    
    const closeButton = createCloseButton();
    closeButton.onclick = _ => window.location.href = "index.html";
    divWindow.appendChild(closeButton);

    const h3Word = createH3Word();
    h3Word.innerText = "This game only works in Microsoft Edge";
    divWindow.appendChild(h3Word);
}

function resetGame(){
    const arr_words = Object.keys(words);
    const word = getRandomElement(arr_words);
    const h3Word = document.querySelector("#h3Word")
    h3Word.innerText = word;
    const divSyllables = document.querySelector("#divSyllables");
    divSyllables.innerHTML = "";
    const syllables = words[word].replaceAll("./", "").replaceAll("/.", "").split(".");
    for (const syllable of syllables){
        const syllableInput = createInputSyllable(syllable);
        divSyllables.appendChild(syllableInput);
    }
    divSyllables.querySelector("*:first-child").focus();
    speak.repeat(word);
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function isSyllableInputCorrect(syllableInput) {
    if (syllableInput.name === syllableInput.value){
        return true;
    } else if (syllableInput.name.startsWith(syllableInput.value)) {
        return undefined;
    } else {
        return false;
    }   
}

function getQueryParams() {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    let params = {};
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
}



//   let queryParams = getQueryParams();
//   console.log(queryParams);
