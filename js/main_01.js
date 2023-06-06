function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetBody(){
    const x = document.body;
    removeAllChildNodes(x);
    x.style.margin = "0";
    return x;
}

function createDiv(){
    const x = document.createElement("div");
    x.style.boxSizing = "border-box";
    x.style.display = "flex";
    return x;
}

function createContainerApp(){
    const x = createDiv();
    x.style.flexDirection = "column";
    x.style.alignItems = "center";
    x.style.gap = "20px";
    x.style.padding = "20px";    
    x.style.backgroundColor = "rgb(180, 180, 180)";
    x.style.font = "Serif";
    return x;
}

function createContainerChapter(){
    const x = createDiv();
    x.style.flexDirection = "column";
    x.style.minHeight = "80px";
    x.style.maxWidth = "800px";
    x.style.backgroundColor = "white";
    x.style.border = "1px solid black";
    x.style.padding = "40px";
    x.style.gap = "20px";
    return x
}

function createHeader(str){
    const x = document.createElement("h2");
    x.innerText = str;
    x.style.margin = "0"
    x.style.fontFamily = "Verdana, sans-serif";
    return x
}

function createParagraph(str){
    const x = document.createElement("p");
    x.innerText = str;
    x.style.margin = "0"
    x.style.fontFamily = "Verdana, sans-serif";
    x.style.lineHeight = 1.5;
    return x;
}

function main_01(){
    resetBody()
    let app = createContainerApp();
    document.body.append(app);
    let chapters = text_ml.split("\n\n");
    for (let chapter of chapters){
        let containerChapter = createContainerChapter();
        app.append(containerChapter);
        chapter = chapter.trim().split("\n");
        let header = createHeader(chapter[0]);
        containerChapter.append(header);
        let textParagraphs = chapter.slice(1);
        for (let textParagraph of textParagraphs) {
            let paragraphElement = createParagraph(textParagraph);
            containerChapter.append(paragraphElement);
        }
    }
}