(async() =>{

    console.log("Render is starting")
    console.log(window["globalLibraries"])
    var yamlLoad = window["globalLibraries"].yamlLoad;

    var canvas = document.getElementById('canvas')

    canvas.innerHTML = "";
    var header = document.createElement('header');
    header.classList.add("header");
    
    var divTitle = document.createElement('div');
    divTitle.classList.add("header-content");
    divTitle.setAttribute("id", "header-title")
    
    header.appendChild(divTitle)
    
    canvas.appendChild(header)
    
    var main = document.createElement('main');
    main.classList.add("main");
    canvas.appendChild(main)
    
    var leftSection = document.createElement('section');
    leftSection.classList.add("main-left");
    main.appendChild(leftSection)
    
    var leftMainBodySection = document.createElement('section');
    leftMainBodySection.classList.add("main-body");
    leftMainBodySection.setAttribute("id", "main-body")
    leftSection.appendChild(leftMainBodySection)
    
    var rightSection = document.createElement('section');
    rightSection.classList.add("main-right");
    rightSection.setAttribute("id", "main-right")
    main.appendChild(rightSection)
    
    var rightLayerSection = document.createElement('div');
    rightLayerSection.classList.add("layer-right");
    rightLayerSection.setAttribute("id", "layer-right")
    rightSection.appendChild(rightLayerSection);
    
    const dataText = document.getElementById('yamlTextArea').value;
    const yamlObject = await yamlLoad(dataText);
    console.log("data", yamlObject);

    const arrKeysYamlDataObject = Object.keys(yamlObject.layers);
    const lastElementOfYamlObject = yamlObject.layers[arrKeysYamlDataObject[arrKeysYamlDataObject.length - 1]];
    // SET TITLE
    const userElement = document.getElementById("header-title");
    userElement.innerHTML = yamlObject.users.title;
    //LEFT ELEMENTS
    const sectionRight = document.getElementById("main-body");
    let layersHtml = ""
    for await (const obj of arrKeysYamlDataObject) {
        const currentObj = yamlObject.layers[obj];
        if(currentObj.title === lastElementOfYamlObject.title || arrKeysYamlDataObject.length === 0) break;

        layersHtml = layersHtml + `<div class='layer'><div class="layer-title">${currentObj.title} </div><div class="layer-body"> replaceItems </div></div>`;
        let itemsHtml = "";
        for await (const item of currentObj.items) {
            itemsHtml = itemsHtml + `<div class="layer-body-item">${item}</div>`
        }
        layersHtml = layersHtml.replace("replaceItems", itemsHtml);
    }
    sectionRight.innerHTML= layersHtml;


    //RIGHT ELEMENTS
    const layerRight = document.getElementById("layer-right");
    let layerRightContent = "";
    layerRightContent = `<div class="layer-right-title">${lastElementOfYamlObject.title}</div><div class="layer-body-right">replaceItems</div>`
    
    let layerRightItems="";
    for (const item of lastElementOfYamlObject.items) {
        layerRightItems = layerRightItems + `<div class="layer-body-item">${item}</div>`
    }
    layerRightContent = layerRightContent.replace("replaceItems", layerRightItems)
    layerRight.innerHTML =layerRightContent    

})();