
let stop_repeat = false;
let repeated_word = "pronunciation";
let msg;
let text;
let ipa = "";
let ipaButtons = [];
let voice_name = "Microsoft Guy Online (Natural) - English (United States)"
let voiceKeys = ["m1us", "f1us", "m1uk", "f1uk"];
insertStyleTag();
createWindow();

function createWindowDiv() {
    const div = document.createElement("div");
    div.id = "windowDiv";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.textAlign = "center";
    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.width = "80%"
    div.style.maxWidth = "800px";
    div.style.height = "300px";
    div.style.boxSizing = "border-box";
    div.style.backgroundColor = "white";
    div.style.border = "1px solid black";

    return div
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
        const windowDiv = document.querySelector("#windowDiv")
        document.body.removeChild(windowDiv);
        repeated_word = undefined;
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
            divVoiceKey = document.querySelector("#" + divId);
            divVoiceKey.style.textDecoration = "";
        }
        div.style.textDecoration = "underline";
        changeVoice(voiceKey)
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
    return p
}

function createContainerIpaButtons(){
    const div = document.createElement("div");
    div.id = "ipaButtonsContainer";
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.justifyContent = "center";
    div.style.flexWrap = "wrap";
    div.style.alignContent = "center";
    div.style.alignItems = "center";
    div.style.gap = "10px";
    return div
}

function createIpaButton(char){
    const bttn = document.createElement("button");
    bttn.innerHTML = char;
    // bttn.style.margin = "0";
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
    return bttn
}

function createWindow() {
    repeat_word();

    const windowDiv = createWindowDiv();
    document.body.appendChild(windowDiv);
    
    const closeButton = createCloseButton();
    windowDiv.appendChild(closeButton);

    const divContainerVoiceKeys = createDivContainerVoiceKeys();
    windowDiv.appendChild(divContainerVoiceKeys)
    
    for (const voiceKey of voiceKeys) {
        const divVoiceKey = createDivVoicekey(voiceKey)
        divContainerVoiceKeys.appendChild(divVoiceKey);
    }

    const divFirstVoiceKey = document.querySelector("#" + voiceKeys[0])
    divFirstVoiceKey.style.textDecoration = "underline";
    
    const inputWord = createInputWord();
    windowDiv.appendChild(inputWord);
    
    const divIpa = createDivIpa();
    windowDiv.appendChild(divIpa);

    const ipaButtonsContainer = createContainerIpaButtons()
    windowDiv.appendChild(ipaButtonsContainer);
    
    document.querySelector("#inputWord").value = repeated_word;
    const event = new Event("input");
    document.querySelector("#inputWord").dispatchEvent(event);
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

function changeVoice(nameKey) {
    const DictVoices = {
        "m1us": "Microsoft Guy Online (Natural) - English (United States)",
        "f1us": "Microsoft Ana Online (Natural) - English (United States)",
        "m1uk": "Microsoft Ryan Online (Natural) - English (United Kingdom)",
        "f1uk": "Microsoft Sonia Online (Natural) - English (United Kingdom)",
    }
    voice_name = DictVoices[nameKey] ?? voice_name;
}

async function speak(text, rate = 1) {
    msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.rate = rate;
    msg.voice = window.speechSynthesis.getVoices().filter(voice => voice.name === voice_name)[0];
    return new Promise(resolve => {
        msg.onend = function (event) {
            resolve();
        };
        console.log(msg.text)
        window.speechSynthesis.speak(msg);
    });
}

async function repeat_word() {
    const nOuterLoop = 1000;
    const nInnerLoop = 1;
    const rates = [0.1, 0.1];
    for (const i of new Array(nOuterLoop)) {
        for (const rate of rates) {
            for (const k of new Array(nInnerLoop)) {
                if (repeated_word === undefined) return;
                await speak(repeated_word, rate);
            }
        }
    }
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