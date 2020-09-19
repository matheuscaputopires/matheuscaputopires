"use strict";

/* Style the SVG area */
function addStyle(duration, delay, id) {
  var svg = document.querySelectorAll('#svg');
  var styles = '';

  for (var item = 0; item < svg.length; item++) {
    var totalDelay = delay; // For each path it sets the stroke size and it offsets it by its own size so the object is blank

    for (var i = 0; i < svg[item].childElementCount; i++) {
      styles += "header .".concat(svg[item].parentElement.parentElement.className, " .").concat(svg[item].parentElement.className, " .").concat(svg[item].className.baseVal, " path:nth-child(").concat(i + 1, ") {") + "stroke-dasharray:".concat(svg[item].children[i].getTotalLength(), "px;") + "stroke-dashoffset:".concat(svg[item].children[i].getTotalLength(), "px;") + "animation: line-anim ".concat(duration, "s ease forwards ").concat(totalDelay, "s;") + "}";
      totalDelay += delay;
    } // Sets the style for the SVG and animations


    styles += "header .".concat(svg[item].parentElement.parentElement.className, " .").concat(svg[item].parentElement.className, " .").concat(svg[item].className.baseVal, " {") + "animation: fill ".concat(duration, "s ease forwards ").concat(totalDelay + 3 * delay, "s;}");
  }

  styles += "svg path {" + "stroke: white;" + "stroke-width: 7;" + "z-index=999}" + "@keyframes line-anim{" + "to {" + "stroke-dashoffset: 0;" + "}" + "}" + "@keyframes fill{" + "from {" + "fill: transparent;" + "}" + "to {" + "fill: white;" + "}" + "}";
  /* Create style document */

  var css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = styles;else css.appendChild(document.createTextNode(styles));
  /* Append style to the tag name */

  document.getElementsByTagName("head")[0].appendChild(css);
}

var duration = 1;
var delay = 0.1;
/* Function call */

window.onload = function () {
  addStyle(duration, delay, ['name_svg', 'logo_svg']);
};