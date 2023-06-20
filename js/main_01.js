
function main_01(){
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
        x.style.margin = "0";
        x.style.fontFamily = "Verdana, sans-serif";
        x.style.lineHeight = 1.5;
        return x;
    }

    function renderBook(strBook){
        resetBody();
        let app = createContainerApp();
        document.body.append(app);
        let chapters = strBook.split("\n\n");
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

    function loadScript(url) {
        return new Promise((resolve, reject) => {
        // Create an XMLHttpRequest object
        const xhr = new XMLHttpRequest();
    
        // Set up the request
        xhr.open('GET', url, true);
    
        // Set up a callback function for when the request is complete
        xhr.onload = function() {
            if (xhr.status === 200) {
            // The request was successful, so execute the downloaded code
            eval(xhr.responseText);
            resolve();
            } else {
            // The request failed, so handle the error
            reject(new Error('Request failed. Returned status of ' + xhr.status));
            }
        };
    
        // Send the request
        xhr.send();
        });
    }

    function getQueryParams() {
        const query = window.location.search.substring(1);
        const strpairs = query.split("&");
        const params = {};
        for (const strpair of strpairs) {
            const pair = strpair.split("=");
            const key = pair[0];
            const value = decodeURIComponent(pair[1]);
            params[key] = value;
        }
        return params;
    }
    
    function main() {
        const queryParams = getQueryParams();
        console.log(queryParams);
        if (queryParams.book === "ml") {
            loadScript('data/data01/ml.js').then(_ => {
                renderBook(strBook_ml);
            });
        } else {
            console.log("book not found");
        }
    }

    return main()
}

main_01();