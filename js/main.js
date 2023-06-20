function createPageHome(){

    function resetBody(){
        document.documentElement.style.height = '100%';
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
        x.style.maxWidth = "500px";
        x.style.width = "100%";
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

    function createH3Title(){
        const x = createH3("Choose an option");
        x.id = "h3Ttile";
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
        x.style.alignItems = "center";
        x.style.textAlign = "center";
        x.style.width = "100%"
        x.style.maxWidth = "800px";
        x.style.padding = "40px";
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
        x.addEventListener("click", function () {
            const divWindow = document.querySelector("#divWindow");
            const divApp = document.querySelector("#divApp");
            divApp.removeChild(divWindow);
            repeated_word = "";
        });
        x.addEventListener("mouseover", function() {
        x.style.backgroundColor = "red";
        });
        x.addEventListener("mouseout", function() {
        x.style.backgroundColor = "white";
        });
        return x
    }

    function createWindowIndex(){
        resetBody();

        const divApp = createDivApp();
        document.body.appendChild(divApp);

        const divWindow = createDivWindow();
        divApp.appendChild(divWindow);
        
        const closeButton = createCloseButton();
        divWindow.appendChild(closeButton);

        const h3Title = createH3Title();
        h3Title.innerText = "Choose an book";
        divWindow.appendChild(h3Title);

        const bttn1 = createBttn();
        bttn1.innerText = "Read";
        bttn1.onclick = _ => window.location.href = "index01.html";
        divWindow.appendChild(bttn1);
    }

    function main() {
        resetBody();

        const divApp = createDivApp();
        document.body.appendChild(divApp);

        const divWindow = createDivWindow();
        divApp.appendChild(divWindow);

        const h3Title = createH3Title();
        divWindow.appendChild(h3Title);

        const bttn1 = createBttn();
        bttn1.innerText = "Read";
        bttn1.onclick = _ => createPageBookIndex();
        divWindow.appendChild(bttn1);

        const bttn2 = createBttn();
        bttn2.innerText = "Pronounce";
        bttn2.onclick = _ => window.location.href = "index02.html";//window.open("game02.html", "_blank");
        divWindow.appendChild(bttn2);

        const bttn3 = createBttn();
        bttn3.innerText = "Play Minimal Pairs";
        bttn3.onclick = _ => window.location.href = "index03.html";//window.open("game02.html", "_blank");
        divWindow.appendChild(bttn3);

        const bttn4 = createBttn();
        bttn4.innerText = "Guess Pronunciation";
        bttn4.onclick = _ => window.location.href = "index04.html";//window.open("game02.html", "_blank");
        divWindow.appendChild(bttn4);

        const bttn5 = createBttn();
        bttn5.innerText = "Words Pronunciation";
        bttn5.onclick = _ => window.location.href = "index05.html";//window.open("game02.html", "_blank");
        divWindow.appendChild(bttn5);


    }

    return main();
}

function createPageBookIndex(){

    function resetBody(){
        document.documentElement.style.height = '100%';
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
        x.style.maxWidth = "500px";
        x.style.width = "100%";
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

    function createH3Title(){
        const x = createH3("Choose a book");
        x.id = "h3Ttile";
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
        x.style.alignItems = "center";
        x.style.textAlign = "center";
        x.style.width = "100%"
        x.style.maxWidth = "800px";
        x.style.padding = "40px";
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
        x.addEventListener("click", function () {
            createPageHome();
        });
        x.addEventListener("mouseover", function() {
            x.style.backgroundColor = "red";
        });
        x.addEventListener("mouseout", function() {
            x.style.backgroundColor = "white";
        });
        return x
    }

    function main() {
        resetBody();

        const divApp = createDivApp();
        document.body.appendChild(divApp);

        const divWindow = createDivWindow();
        divApp.appendChild(divWindow);

        const bttnClose = createCloseButton();
        divWindow.appendChild(bttnClose);

        const h3Title = createH3Title();
        divWindow.appendChild(h3Title);

        const bttn1 = createBttn();
        bttn1.innerText = "Read";
        bttn1.onclick = _ => window.open("index01.html?book=ml", "_blank");
        divWindow.appendChild(bttn1);

        const bttn2 = createBttn();
        bttn2.innerText = "Read";
        bttn2.onclick = _ => window.open("index01.html?book=ml", "_blank");
        divWindow.appendChild(bttn2);

    }

    return main();
}

// repeat = {
//     "word": "attrition",
//     "rate": 0.5,
//     "stop_": false,
//     "run": function () {
//         window.speechSynthesis.cancel();
//         if (this.stop_ === true) {return};
//         msg = new SpeechSynthesisUtterance();
//         msg.voice = window.speechSynthesis.getVoices()[117];//.filter(voice => voice.name === voice_name)[0];
//         msg.onend = _ => this.run() ;
//         msg.text = this.word;
//         msg.rate = this.rate;
//         window.speechSynthesis.speak(msg);
//         console.log(msg.text);
//     },
//     "start": function (word) {
//         window.speechSynthesis.cancel();
//         this.word = word;
//         this.stop_ = false;
//         this.run();
//     },
//     "stop": function () {
//         window.speechSynthesis.cancel();
//         this.stop_ = true;
//     }
// }

const speak = (function (){
    let msg;
    let word = "attrition";
    let iVoice = 117;
    let rate = 0.5;
    let pause = true;
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
        word = word_;
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
    return {repeat, read, stop, setRate, setVoice, getVoices}
})();

// "Microsoft Aria Online (Natural) - English (United States)"
// "Microsoft Ana Online (Natural) - English (United States)"
// "Microsoft Christopher Online (Natural) - English (United States)"
// "Microsoft Eric Online (Natural) - English (United States)"
// "Microsoft Guy Online (Natural) - English (United States)"
// "Microsoft Jenny Online (Natural) - English (United States)"
// "Microsoft Michelle Online (Natural) - English (United States)"
// "Microsoft Roger Online (Natural) - English (United States)"
// "Microsoft Steffan Online (Natural) - English (United States)"

createPageHome();

const text = `
Normalization.
In the context of machine learning, Normalization is a preprocessing technique applied to input data that ensures each feature has a similar scale. This standardization of ranges across features is an important process as it can significantly influence the performance of many machine learning algorithms.
Without normalization, features with larger ranges can dominate the outcome, which can distort the learning process and lead to suboptimal models. For example, consider a dataset containing house prices with features such as the number of rooms (which typically ranges from 1 to 10) and the total area in square feet (which can range in the thousands). If not normalized, the total area's influence on the learning algorithm could overshadow the number of rooms due to the difference in their ranges.
Normalization typically rescales the values of numeric features in the dataset to a standard range - often 0 to 1 or -1 to 1. Let's delve into a few common normalization techniques used in machine learning.
One of the most straightforward and common normalization methods is Min-Max Scaling. This approach rescales a feature to the range of 0 to 1 by subtracting the minimum value of the feature and then dividing by the range of the feature values. Min-Max Scaling is beneficial when you need a bounded interval, and it preserves the original distribution of the feature values.
Another popular method is Standard Scaling, also known as Z-score normalization. This approach centers the features around zero with a standard deviation of one. In other words, it subtracts the mean value of the feature and then divides by the standard deviation. The resulting distribution has a mean of 0 and a standard deviation of 1. This normalization technique is particularly useful when the features have a Gaussian (bell curve) distribution and can be less affected by outlier values compared to Min-Max Scaling.
Let's consider another normalization technique, L1 and L2 Normalization, which can also act as a form of regularization to prevent overfitting, a topic to be covered more extensively in later chapters. L1 Normalization, also known as Least Absolute Deviations, modifies the values so that the sum of their absolute values equals 1. L2 Normalization, also known as Least Squares, adjusts the values so that the sum of their squares equals 1. These techniques are often used in machine learning models, like Neural Networks and Support Vector Machines.
Normalization also plays an essential role in some specific types of machine learning algorithms. For instance, in K-Nearest Neighbors (K-NN) and K-Means algorithms, where the outcome depends on the distances between data points, normalization can be vital for obtaining accurate results.
However, normalization might not always be necessary or even beneficial, and the choice often depends on the specific algorithm and problem at hand. For example, decision tree-based algorithms, such as Random Forest and Gradient Boosting, are less sensitive to the scale of the features and might not benefit from normalization.
In summary, normalization is a critical step in preparing your data for machine learning algorithms. It can lead to faster convergence of the learning process, improved model performance, and more robust models that are less sensitive to the scale of the features. In the following chapters, we will often see normalization as a recommended preprocessing step for various machine learning models.
`