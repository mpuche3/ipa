let ipaButtons = [];

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
    function recurvise_func () {
        window.speechSynthesis.cancel();
        if (pause === true) {return};
        msg = new SpeechSynthesisUtterance();
        msg.voice = window.speechSynthesis.getVoices()[iVoice];//.filter(voice => voice.name === voice_name)[0];
        msg.onend = _ => recurvise_func() ;
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
        recurvise_func();
    }
    function stop() {
        window.speechSynthesis.cancel();
        pause = true;
    }
    function setRate(rate_) {
        rate = rate_;
        repeat();
    }
    function setVoiceKey(voiceKey) {
        const voice_name = voices[voiceKey]
        if (voice_name === undefined) {
            console.log(`"${voiceKey}" is not found`)
            return;
        } else {
            const voices = window.speechSynthesis.getVoices();
            const voices_name = voices.map(voice => voice.name);
            iVoice = voices_name.indexOf(voice_name);
        }
        repeat();
    }
    function getVoicesKey() {
        return Object.keys(voices);
    }
    function getWord() {
        return word;
    }
    return {repeat, stop, setRate, setVoiceKey, getVoicesKey, getWord}
})();

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetBody(){
    const x = document.body;
    removeAllChildNodes(x);
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
    x.style.boxSizing = "border-box";
    x.style.backgroundColor = "white";
    x.style.border = "1px solid black";
    x.style.position = "absolute";
    return x;
}

function createCloseButton(){
    const bttn = document.createElement("button");
    bttn.id = "closeButton";
    bttn.style.position = "absolute";
    bttn.style.top = "0px";
    bttn.style.right = "0px";
    bttn.style.width = "35px";
    bttn.style.height = "35px";
    bttn.style.border = "none";
    bttn.style.cursor = "pointer";
    bttn.style.fontSize = "20px";
    bttn.innerHTML = "&times;";
    bttn.style.backgroundColor = "white";
    bttn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
    bttn.addEventListener("mouseover", function() {
      bttn.style.backgroundColor = "red";
    });
    bttn.addEventListener("mouseout", function() {
      bttn.style.backgroundColor = "white";
    });
    return bttn
}

function createDivVoicekey(voiceKey){
    const div = document.createElement('div');
    div.id = voiceKey;
    div.textContent = voiceKey;
    div.style.cursor = "pointer";
    div.style.padding = "10px";
    div.style.paddingRight = "0";
    div.addEventListener('click', function() {
        const voiceKeys = speak.getVoicesKey();
        for (const divId of voiceKeys) {
            const divVoiceKey = document.querySelector("#" + divId);
            divVoiceKey.style.textDecoration = "";
        }
        div.style.textDecoration = "underline";
        speak.setVoiceKey(voiceKey)
    });
    return div
}

function createDivContainerVoiceKeys(){
    const div = document.createElement('div');
    div.id = "divContainerVoiceKeys";
    div.style.fontFamily = "'Arial', sans-serif";
    div.style.fontSize = "medium";
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.padding = "0px";
    return div;
}

function createInputWord(){
    const input = document.createElement("input");
    input.id = "inputWord";
    input.placeholder = "Write something here...";
    input.type = "text";
    input.style.border = "none";
    input.style.outline = "none";
    input.style.textAlign = "center";
    input.style.fontFamily = "'Arial', sans-serif";
    input.style.fontSize = "large";
    input.oninput = function () {
        speak.repeat(input.value);
        divIpa = document.querySelector("#divIpa");
        divIpa.innerHTML = "/" + DictIpa[input.value] + "/" || "";
        createIpaButtons();
    };
    return input
}

function createDivIpa(){
    const p = document.createElement("p");
    p.id = "divIpa";
    p.style.fontFamily = "'Arial', sans-serif";
    p.style.fontSize = "large";
    p.style.textAlign = "center";
    p.style.cursor = "pointer";
    p.onclick = function() {
        const address = "https://www.google.com/search?q=how+to+pronounce+";
        window.open(address + speak.getWord(), "_blank");
    }
    return p;
}

function createContainerIpaButtons(){
    const div = createDiv();
    div.id = "ipaButtonsContainer";
    div.style.flexDirection = "row";
    div.style.justifyContent = "center";
    div.style.flexWrap = "wrap";
    div.style.alignContent = "center";
    div.style.alignItems = "center";
    div.style.gap = "10px";
    return div;
}

function createIpaButton(char){
    const bttn = document.createElement("button");
    bttn.innerHTML = char;
    bttn.style.width = "30px";
    bttn.style.height = "30px";
    bttn.style.cursor = "pointer";
    bttn.style.backgroundColor = "#d5d5d5";
    bttn.classList.add('ipaBttnBorder');
    bttn.addEventListener("click", function () {
        if (bttn.style.backgroundColor === "grey") {
            bttn.style.backgroundColor = "#d5d5d5";
        } else {
            bttn.style.backgroundColor = "grey";
        }
    });
    return bttn;
}

function createGoButton(){
    const bttn = document.createElement("button");
    bttn.innerHTML = "&#8594;";
    bttn.style.margin = "5px";
    bttn.style.width = "30px";
    bttn.style.height = "30px";
    bttn.style.cursor = "pointer";
    bttn.style.border = "1px solid black";
    bttn.style.backgroundColor = "#b2d5b2";
    bttn.addEventListener("click", function () {
        ipa = getActiveIPAButtons().join("");
        const new_word = findRandomKeyBySubstring(ipa, DictIpa)
        document.querySelector("#inputWord").value = new_word;
        const event = new Event("input");
        document.querySelector("#inputWord").dispatchEvent(event);
    });
    bttn.addEventListener("mouseover", function() {
      bttn.style.border = "2px solid black";
    });
    bttn.addEventListener("mouseout", function() {
      bttn.style.border = "1px solid black";
    });
    return bttn;
}

function createWindowWarningOnlyEdge(){
    resetBody();

    const divApp = createDivApp();
    document.body.appendChild(divApp);

    const divWindow = createDivWindow();
    divApp.appendChild(divWindow);
    
    const closeButton = createCloseButton();
    divWindow.appendChild(closeButton);

    const warning = createDivIpa();
    warning.innerText = "This game only works in Microsoft Edge";
    divWindow.appendChild(warning);
}

function createWindow() {
    const isEdge = /Edg/.test(navigator.userAgent);
    if (!isEdge) {
        return createWindowWarningOnlyEdge(); 
    }

    resetBody();

    const divApp = createDivApp();
    document.body.appendChild(divApp);

    const divWindow = createDivWindow();
    divApp.appendChild(divWindow);
    
    const closeButton = createCloseButton();
    divWindow.appendChild(closeButton);

    const divContainerVoiceKeys = createDivContainerVoiceKeys();
    divWindow.appendChild(divContainerVoiceKeys)
    
    const voices = speak.getVoicesKey();
    for (const voiceKey of voices) {
        const divVoiceKey = createDivVoicekey(voiceKey)
        divContainerVoiceKeys.appendChild(divVoiceKey);
    }

    const divFirstVoiceKey = document.querySelector("#" + voices[0])
    divFirstVoiceKey.style.textDecoration = "underline";
    
    const inputWord = createInputWord();
    divWindow.appendChild(inputWord);
    
    const divIpa = createDivIpa();
    divWindow.appendChild(divIpa);

    const ipaButtonsContainer = createContainerIpaButtons()
    divWindow.appendChild(ipaButtonsContainer);
    
    document.querySelector("#inputWord").value = "attrition";
    const event = new Event("input");
    document.querySelector("#inputWord").dispatchEvent(event);

    speak.repeat();
}

function createIpaButtons() {
    const ipaText = document.querySelector("#divIpa").innerHTML;
    if (ipaText === "") {return;}

    const ipaButtonsContainer = document.querySelector("#ipaButtonsContainer")
    ipaButtons.forEach((button) => {
        ipaButtonsContainer.removeChild(button);
    });
    
    ipaButtons = [];
    for (let i = 0; i < ipaText.length; i++) {
        const char = ipaText[i];
        if (char === "ˌ" || char === "ˈ") {continue;}
        const ipaButton = createIpaButton(char)
        ipaButtons.push(ipaButton);
        ipaButtonsContainer.appendChild(ipaButton);
    }
    
    setActiveIPAButtons()

    const goButton = createGoButton();
    ipaButtons.push(goButton);
    ipaButtonsContainer.appendChild(goButton);
}

function setActiveIPAButtons() {
    const ipaButtonsString = getIpaButtonsString();
    const pos = ipaButtonsString.search(ipa);
    if (pos === -1) {return ""}
    ipaButtons.slice(pos, pos + ipa.length).forEach((button) => {
        if (ipa.includes(button.innerHTML)) {
            button.style.backgroundColor = "grey";
        }
    });
}

function getActiveIPAButtons() {
    const activeButtons = [];
    ipaButtons.forEach((button) => {
        if (button.style.backgroundColor === "grey") {
            activeButtons.push(button.innerHTML);
        }
    });
    return activeButtons;
}

function getIpaButtonsString() {
    let ipaButtonsString = "";
    ipaButtons.forEach((button) => {
            ipaButtonsString += button.innerHTML;
    });
    return ipaButtonsString;
}

function findRandomKeyBySubstring(inputString, dictionary) {
  const matchingKeys = Object.keys(dictionary).filter(key => {
      return `/${dictionary[key]}/`.includes(inputString)
  })
  if (matchingKeys.length === 0) {
    return null; // No matching keys found
  }
  const randomKey = matchingKeys[Math.floor(Math.random() * matchingKeys.length)];
  return randomKey;
}

createWindow();