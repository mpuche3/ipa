function main(){
    createWindow();

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
        x.style.width = "500px";
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

    function createWindow() {
        resetBody();

        const divApp = createDivApp();
        document.body.appendChild(divApp);

        const divWindow = createDivWindow();
        divApp.appendChild(divWindow);
        
        // const closeButton = createCloseButton();
        // divWindow.appendChild(closeButton);

        const h3Title = createH3Title();
        divWindow.appendChild(h3Title);

        // const bttn1 = createBttn();
        // bttn1.innerText = "Read";
        // bttn1.onclick = _ => window.location.href = "index01.html";//window.open("game03.html", "_blank");
        // divWindow.appendChild(bttn1);

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

    }
}

main();