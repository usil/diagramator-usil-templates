function renderAndFill(e,t,n){var d=document.createElement("div");d.classList.add("column_3"),d.setAttribute("id",e.id);var i=document.createElement("H2");i.innerHTML=e.alias,d.append(i),divCloudContainer=document.createElement("div"),divCloudContainer.classList.add("dotted"),divCloudContainer.classList.add("grid-container"),divCloudContainer.setAttribute("id",`${e.id}_child`),divCloudContainer.style.height=`${n}px`,d.append(divCloudContainer);var a=e.items;for(var l of a){var o=document.createElement("div");o.classList.add("grid-item"),o.style.margin="5px",o.style.height="55px";var r=document.createElement("img");r.src=e.icon_url,r.style.width="60px",o.appendChild(r);var s=document.createElement("div");s.style.fontSize="smaller",s.innerHTML=l,o.appendChild(s),divCloudContainer.appendChild(o)}t.appendChild(d)}(async()=>{console.log("Render is starting"),console.log(window.globalLibraries);var e=window.globalLibraries.yamlLoad,t=document.getElementById("canvas");t.innerHTML="";const n=document.getElementById("yamlTextArea").value,d=await e(n);console.log("data",d);var i=document.getElementById("RightCol").clientHeight,a=0;for(var l in d)a>2||(renderAndFill(d[l],t,i),a++)})();