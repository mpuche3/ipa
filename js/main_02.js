let repeated_word = "pronunciation";
let msg;
let text;
let ipa = "";
let ipaButtons = [];
let voice_name = "Microsoft Guy Online (Natural) - English (United States)"
let voiceKeys = ["m1us", "f1us", "m1uk", "f1uk"];
insertStyleTag();
createWindow();

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
        // const divWindow = document.querySelector("#divWindow");
        // const divApp = document.querySelector("#divApp");
        // divApp.removeChild(divWindow);
        // repeated_word = "";
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
        for (const divId of voiceKeys) {
            const divVoiceKey = document.querySelector("#" + divId);
            divVoiceKey.style.textDecoration = "";
        }
        div.style.textDecoration = "underline";
        voice_name = getVoiceName(voiceKey)
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
        repeated_word = input.value;
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
        window.open(address + repeated_word, "_blank");
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
        console.log("Right button clicked");
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

function createWindow() {
    resetBody();

    const divApp = createDivApp();
    document.body.appendChild(divApp);

    const divWindow = createDivWindow();
    divApp.appendChild(divWindow);
    
    const closeButton = createCloseButton();
    divWindow.appendChild(closeButton);

    const divContainerVoiceKeys = createDivContainerVoiceKeys();
    divWindow.appendChild(divContainerVoiceKeys)
    
    for (const voiceKey of voiceKeys) {
        const divVoiceKey = createDivVoicekey(voiceKey)
        divContainerVoiceKeys.appendChild(divVoiceKey);
    }

    const divFirstVoiceKey = document.querySelector("#" + voiceKeys[0])
    divFirstVoiceKey.style.textDecoration = "underline";
    
    const inputWord = createInputWord();
    divWindow.appendChild(inputWord);
    
    const divIpa = createDivIpa();
    divWindow.appendChild(divIpa);

    const ipaButtonsContainer = createContainerIpaButtons()
    divWindow.appendChild(ipaButtonsContainer);
    
    document.querySelector("#inputWord").value = repeated_word;
    const event = new Event("input");
    document.querySelector("#inputWord").dispatchEvent(event);

    repeat_word();
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
    return new Promise(resolve => {
        msg = new SpeechSynthesisUtterance();
        msg.voice = window.speechSynthesis.getVoices().filter(voice => voice.name === voice_name)[0];
        msg.onend = resolve ;
        msg.text = text;
        msg.rate = rate;
        window.speechSynthesis.speak(msg);
        console.log(msg.text);
    });
}

async function repeat_word() {
    const nOuterLoop = 1000;
    const nInnerLoop = 1;
    const rates = [0.4, 1];
    for (const i of new Array(nOuterLoop)) {
        for (const k of new Array(nInnerLoop)) {
            for (const rate of rates) {
                // if (repeated_word === undefined) {return};
                try {
                    // console.log("----");
                    await Promise.race([speak(repeated_word, rate), timeout(6000)]);
                } catch (error) {
                    console.log("Error")
                    // console.log(error);
                }
            }
        }
    }
}

function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Promise timed out.'));
      }, ms);
    });
}

function insertStyleTag() {
    if (!document.querySelector('#style001')) {
        let style = document.createElement('style');
        style.id = "style001";
        style.innerHTML = getStrStyle001();
        document.head.appendChild(style);
    }
}

function getStrStyle001(){
    return `
        .ipaBttnBorder:hover {
            border: 2px solid black;
        }
        .ipaBttnBorder {
            border: 1px solid black;
        }
    `
}