(function () {
    /* Style the SVG area */ 
    function addStyle(duration, delay, id) { 
        
        const svg = document.querySelectorAll('#svg')
        
        let styles = '';
        
        for (var item = 0; item<svg.length; item++) {
            let totalDelay = delay;
            
            // For each path it sets the stroke size and it offsets it by its own size so the object is blank
            for (var i = 0; i<svg[item].childElementCount; i++) {
                styles += `header .${svg[item].parentElement.parentElement.className} .${svg[item].parentElement.className} .${svg[item].className.baseVal} path:nth-child(${i+1}) {`+
                `stroke-dasharray:${svg[item].children[i].getTotalLength()}px;`+
                `stroke-dashoffset:${svg[item].children[i].getTotalLength()}px;`+
                `animation: line-anim ${duration}s ease forwards ${totalDelay}s;`+
                `}`;
                totalDelay += delay;
            }
            // Sets the style for the SVG and animations
            styles += `header .${svg[item].parentElement.parentElement.className} .${svg[item].parentElement.className} .${svg[item].className.baseVal} {`+
            `animation: fill ${duration}s ease forwards ${totalDelay + 3*delay}s;}`;
        }
        styles += `svg path {`+
            `stroke: black;`+
            `stroke-width: 7;`+    
            `z-index=999}`+
        `@keyframes line-anim{`+
            `to {`+
                `stroke-dashoffset: 0;`+
            `}`+
        `}`+
        `@keyframes fill{`+
            `from {`+
                `fill: transparent;`+
            `}`+
            `to {`+
                `fill: black;`+
            `}`+
        `}`;
        
        /* Create style document */ 
        var css = document.createElement('style'); 
        css.type = 'text/css'; 

        if (css.styleSheet)  
            css.styleSheet.cssText = styles; 
        else  
            css.appendChild(document.createTextNode(styles)); 
        
        /* Append style to the tag name */ 
        document.getElementsByTagName("head")[0].appendChild(css); 
    }

    let duration = 1;
    let delay = 0.1;
    
    /* Function call */ 
    window.onload = function() {
        addStyle(duration, delay, ['name_svg', 'logo_svg']);
    };

})()
