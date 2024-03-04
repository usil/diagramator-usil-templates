(async() =>{

    console.log("Render is starting")
    console.log(window["globalLibraries"])
    var yamlLoad = window["globalLibraries"].yamlLoad;

    var canvas = document.getElementById('canvas')
    canvas.innerHTML = "";

    const dataText = document.getElementById('yamlTextArea').value;
    const yamlObject = await yamlLoad(dataText);
    console.log("data", yamlObject);

    var clientHeightPx = document.getElementById('RightCol').clientHeight;    

    if(typeof yamlObject["on-premise"]!='undefiend'){
        renderAndFill(yamlObject["on-premise"], canvas, clientHeightPx)
    }

    if(typeof yamlObject["aws"]!='undefiend'){
        renderAndFill(yamlObject["aws"], canvas, clientHeightPx)
    }

    if(typeof yamlObject["azure"]!='undefiend'){  
        renderAndFill(yamlObject["azure"], canvas, clientHeightPx)
    }   
    
})();


function renderAndFill(data, container, clientHeightPx){

    var divCloud = document.createElement('div');
    divCloud.classList.add("column_3");
    divCloud.setAttribute("id", data.id)    

    var h2= document.createElement('H2');
    h2.innerHTML = data.alias;
    divCloud.append(h2);

    divCloudContainer = document.createElement('div');
    divCloudContainer.classList.add("dotted");
    divCloudContainer.classList.add("grid-container");
    divCloudContainer.setAttribute("id", `${data.id}_child`)
    divCloudContainer.style.height=`${clientHeightPx}px`;

    divCloud.append(divCloudContainer)

    var items = data.items

    var count=1;
    for(var item of items){
        var cloudItem = document.createElement('div');
        cloudItem.classList.add("grid-item");
        cloudItem.style.margin="5px";
        cloudItem.style.height="55px";

        var img = document.createElement('img');
        img.src = data.icon_url;
        img.style.width="60px";
        cloudItem.appendChild(img);
        
        var title = document.createElement('div');
        title.style.fontSize="smaller";
        title.innerHTML = item;
        cloudItem.appendChild(title);

        divCloudContainer.appendChild(cloudItem);
        count++;
    }


    container.appendChild(divCloud)
}