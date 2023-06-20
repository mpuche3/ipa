// global words
let msg;
let repeated_word = "attrition";
let voice_name; //= getVoiceName("m1us")
let interval_id;

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

function createBttnInsert(){
    const x = createBttn();
    x.id = "bttnInsert";
    x.innerHTML = "+";
    x.onclick = function() {
        const divWindowInsert = createDivWindowInsert();
        document.body.appendChild(divWindowInsert);
    }
    return x;
}

function createBttnWord(word){
    const x = createBttn();
    x.id = "bttnWord_" + word;
    x.innerHTML = word;
    x.onclick = function(event) {
        const x = event.target;
        if (x.style.backgroundColor === "white") {
            window.speechSynthesis.cancel();
            repeated_word = x.innerHTML
            if (interval_id === undefined) {
                interval_id = setInterval(function() {
                    voice_name = getVoiceName("m1us")
                    speak(repeated_word, rate = 0.2)
                }, 2000);
            }
            x.style.backgroundColor = "lightgreen";
        } else if (x.style.backgroundColor === "lightgreen") {
            clearInterval(interval_id);
            interval_id = undefined;
            window.speechSynthesis.cancel();
            const address = "https://www.google.com/search?q=how+to+pronounce+";
            window.open(address + x.innerHTML, "_blank");
        } else {
            x.style.backgroundColor = "white";
        }
    }
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

function createDivApp(){
    const x = createDiv();
    x.id = "divApp";
    x.style.flexDirection = "row";
    x.style.flexWrap = "wrap";
    x.style.alignItems = "center";
    x.style.padding = "20px";
    x.style.fontFamily = "Verdana, sans-serif";
    x.style.width = "100%";
    x.style.height = "100%";
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
    x.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "red";
    });
    x.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "white";
    });
    x.addEventListener("mousedown", function(event) {
        event.target.parentElement.remove();
    });
    return x
}

function createDivWindowInsert() {
    const x = createDivCol();
    x.id = "divWindowWord";
    x.style.top = "50%";
    x.style.left = "50%";
    x.style.transform = "translate(-50%, -50%)";
    x.style.width = "400px";
    x.style.height = "200px";
    x.style.backgroundColor = "white";
    x.style.border = "1px solid black";
    x.style.position = "absolute";
    x.style.gap = "25px";

    const closeButton = createCloseButton();
    x.appendChild(closeButton);

    const h3Word_spelling = createH3Word();
    h3Word_spelling.id = "h3Word_spelling";
    h3Word_spelling.innerHTML = "spelling";
    x.appendChild(h3Word_spelling);

    const h3Word_pronunciation = createH3Word();
    h3Word_pronunciation.id = "h3Word_pronunciation";
    h3Word_pronunciation.innerHTML = "pronunciation";
    x.appendChild(h3Word_pronunciation);

    return x;
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
    const loop = 100;
    const rates = [0.1, 0.1];
    for (const _ of new Array(loop)) {
        for (const rate of rates) {
            try {
                await Promise.race([speak(repeated_word, rate), timeout(6000)]);
            } catch (error) {
                console.log("Error")
            }
        }
    }
}

function timeout(ms) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Promise timed out.'));
      }, ms);
    });
}

function run(){
    const divApp = createDivApp();
    document.body.appendChild(divApp);
    const bttnInsert = createBttnInsert();
    bttnInsert.onclick = function (){
        clearInterval(interval_id);
        interval_id = undefined;
        window.speechSynthesis.cancel();
    }
    divApp.appendChild(bttnInsert);
    for (const word in words) {
        const bttnWord = createBttnWord(word);
        divApp.appendChild(bttnWord);
    }
}



run();