
let stop_repeat = false;
let msg;
let ipaButtons = []; // Array to store the dynamically created IPA buttons
let voice_name = "Microsoft Guy Online (Natural) - English (United States)"
createWindow();

async function speak(text, rate = 1) {
    msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.rate = rate;
    await new Promise(resolve => {
        var id = setInterval(() => {
            var voices = window.speechSynthesis.getVoices();
            if (voices.length !== 0) {
                var selectedVoice = voices.filter(voice => voice.name === voice_name)[0];
                if (selectedVoice) {
                    msg.voice = selectedVoice;
                    clearInterval(id);
                    resolve();
                } else {
                    console.log('Desired voice not available');
                    clearInterval(id);
                    resolve();
                }
            }
        }, 10);
    });
    return new Promise(resolve => {
        msg.onend = function (event) {
            resolve();
        };
        speechSynthesis.speak(msg);
    });
}

async function repeat_word() {
    const nOuterLoop = 1000;
    const nInnerLoop = 5;
    const rates = [0.1, 1];
    for (const i of new Array(nOuterLoop)) {
        for (const rate of rates) {
            for (const k of new Array(nInnerLoop)) {
                if (repeated_word === undefined) return;
                await speak(repeated_word, rate);
            }
        }
    }
}

function createWindow() {
    repeated_word = "";
    repeat_word();

    // Words to be added
    const words = ["us_m1", "us_f1", "uk_m1", "uk_f1"];
    
    // Create a container for the words
    const wordContainer = document.createElement('div');
    wordContainer.style.position = "absolute";
    wordContainer.style.top = "0";
    wordContainer.style.left = "0";
    wordContainer.style.padding = "10px";
    wordContainer.id = "wordContainer";
    
    // Create a word element for each word
    for (const word of words) {
        const wordElement = document.createElement('button');
        wordElement.textContent = word;
        wordElement.id = word;
        wordElement.className = 'word';
        wordElement.style.cursor = "pointer";
        wordElement.style.marginRight = "10px";
        wordElement.addEventListener('click', function() {
            // Remove highlight from all words
            for (const w of words) {
                document.getElementById(w).style.backgroundColor = "transparent";
            }
            // Change the voice
            changeVoice(word);
            // Add highlight to clicked word
            this.style.backgroundColor = "yellow";
            const key_name = this.outerText
            changeVoice(key_name)
        });
        wordContainer.appendChild(wordElement);
    }

    
    const windowDiv = document.createElement("div");
    windowDiv.id = "windowDiv";
    windowDiv.style.position = "fixed";
    windowDiv.style.top = "50%";
    windowDiv.style.left = "50%";
    windowDiv.style.transform = "translate(-50%, -50%)";
    windowDiv.style.backgroundColor = "white";
    windowDiv.style.border = "1px solid black";
    windowDiv.style.width = "600px"; // Modified width
    windowDiv.style.height = "400px"; // Modified height
    windowDiv.style.padding = "20px";
    windowDiv.style.boxSizing = "border-box";
    windowDiv.style.textAlign = "center";
    windowDiv.style.display = "flex";
    windowDiv.style.flexDirection = "column";
    windowDiv.style.justifyContent = "center";

    const closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.innerHTML = "&times;";
    closeButton.style.position = "absolute";
    closeButton.style.top = "0px";
    closeButton.style.right = "0px";
    closeButton.style.border = "none";
    closeButton.style.width = "20px";
    closeButton.style.background = "transparent";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "20px";
    closeButton.addEventListener("click", function () {
        document.body.removeChild(windowDiv);
        repeated_word = undefined;
    });

    const word = document.createElement("input");
    word.id = "input_word";
    word.placeholder = "Write something here...";
    word.type = "text";
    word.style.width = "95%";
    word.style.margin = "20px 0";
    word.style.marginTop = "55px";
    word.style.border = "none";
    word.style.outline = "none";
    word.style.textAlign = "center";
    word.style.fontFamily = "'Arial', sans-serif";
    word.style.fontSize = "large";
    word.oninput = function () {
        repeated_word = this.value;
        ipa.innerHTML = "/" + DictIpa[word.value] + "/" || "";
        createIPAButtons(); // Call the function to create/update the IPA buttons
    };

    const ipa = document.createElement("p");
    ipa.id = "ipa";
    ipa.style.fontFamily = "'Arial', sans-serif";
    ipa.style.fontSize = "large";
    ipa.style.textAlign = "center";
    ipa.style.margin = "20px 0";

    const ipaButtonsContainer = document.createElement("div");
    ipaButtonsContainer.id = "ipaButtonsContainer";
    ipaButtonsContainer.style.display = "flex";
    ipaButtonsContainer.style.justifyContent = "center";
    ipaButtonsContainer.style.marginTop = "20px";

    windowDiv.appendChild(closeButton);
    windowDiv.appendChild(word);
    windowDiv.appendChild(ipa);
    windowDiv.appendChild(ipaButtonsContainer);
    windowDiv.appendChild(wordContainer);
    document.body.appendChild(windowDiv);

    createIPAButtons(); // Call the function to initially create the IPA buttons
}

function createIPAButtons() {
    // Get the IPA text
    const ipaText = document.getElementById("ipa").innerHTML;

    if (ipaText === "") {
        return;
    }

    const ipaButtonsContainer = document.getElementById(
        "ipaButtonsContainer"
    );

    // Remove existing IPA buttons
    ipaButtons.forEach((button) => {
        ipaButtonsContainer.removeChild(button);
    });
    ipaButtons = [];

    const leftButton = document.createElement("button"); // New left button
    leftButton.innerHTML = "&#8634;"; // Arrow-like character going around
    leftButton.style.width = "30px"; // Set button width
    leftButton.style.height = "30px"; // Set button height
    leftButton.style.border = "1px solid black"; // Added border style
    leftButton.addEventListener("click", function () {
        // Perform action when left button is clicked
        console.log("Left button clicked");
        const randomNumber = Math.floor(Math.random() * 5001);
        document.querySelector("#input_word").value = arrArrAlphabet[randomNumber][0];
        const event = new Event("input");
        document.querySelector("#input_word").dispatchEvent(event);
    });

    ipaButtons.push(leftButton);
    ipaButtonsContainer.appendChild(leftButton);

    // Create buttons for each character in the IPA text
    for (let i = 0; i < ipaText.length; i++) {
        const char = ipaText[i];
        // if (char === "ˌ" || char === "ˈ") {
        //     continue
        // }
        const button = document.createElement("button");
        button.innerHTML = char;
        button.style.margin = "5px";
        button.style.width = "30px";
        button.style.height = "30px";
        button.style.border = "1px solid black";
        button.addEventListener("click", function () {
            if (button.style.backgroundColor === "grey") {
                button.style.backgroundColor = "white";
            } else {
                button.style.backgroundColor = "grey";
            }
        });
        ipaButtons.push(button);
        ipaButtonsContainer.appendChild(button);
    }

    const rightButton = document.createElement("button"); // New right button
    rightButton.innerHTML = "&#8594;"; // Right arrow character
    rightButton.style.width = "30px"; // Set button width
    rightButton.style.height = "30px"; // Set button height
    rightButton.style.border = "1px solid black"; // Added border style
    rightButton.addEventListener("click", function () {
        console.log("Right button clicked");
        const inputString = getActiveIPAButtons().join("");
        const new_word = findRandomKeyBySubstring(inputString, DictIpa)
        document.querySelector("#input_word").value = new_word;
        const event = new Event("input");
        document.querySelector("#input_word").dispatchEvent(event);
    });

    ipaButtons.push(rightButton);
    ipaButtonsContainer.appendChild(rightButton);
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

function findRandomKeyBySubstring(inputString, dictionary) {
  const matchingKeys = Object.keys(dictionary).filter(key => `/${dictionary[key]}/`.includes(inputString));
  if (matchingKeys.length === 0) {
    return null; // No matching keys found
  }
  const randomKey = matchingKeys[Math.floor(Math.random() * matchingKeys.length)];
  return randomKey;
}

function changeVoice(nameKey) {
    const DictVoices = {
        "us_m1": "Microsoft Guy Online (Natural) - English (United States)",
        "us_f1": "Microsoft Ana Online (Natural) - English (United States)",
        "uk_m1": "Microsoft Ryan Online (Natural) - English (United Kingdom)",
        "uk_f1": "Microsoft Sonia Online (Natural) - English (United Kingdom)",
    }
    voice_name = DictVoices[nameKey] ?? voice_name;
}
