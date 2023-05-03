import {minify} from "minify";
import path from "path";
import fs from 'fs'

(async function() {
    var diagramsAbsolutePath = 
        path.join(process.env.npm_config_local_prefix, "diagrams");
    const folders = (await fs.promises.readdir(diagramsAbsolutePath, { withFileTypes: true })).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    for(var folder of folders){
        var sourceLocation = path.join(process.env.npm_config_local_prefix, "diagrams",folder, "render.js");
        const minifiedContent = await minify(sourceLocation);    
        var targetLocation = path.join(process.env.npm_config_local_prefix, "diagrams",folder, "dist", "render.js");
        await fs.promises.writeFile(targetLocation, minifiedContent);
        //copy data file
        var dataLocation = path.join(process.env.npm_config_local_prefix, "diagrams",folder, "data.yaml");
        var dataOutputLocation = path.join(process.env.npm_config_local_prefix, "diagrams",folder, "dist", "data.yaml");
        await fs.promises.copyFile(dataLocation, dataOutputLocation);
    }    
})();

