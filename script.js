"use strict";

document.addEventListener("DOMContentLoaded", start);

let currentColor;

async function start(){
    let response = await fetch("./shoe-01.svg");
    let mySVGData = await response.text()
    document.querySelector("section").innerHTML = mySVGData;
    init();
}



function init(){
    const body = document.querySelector("#body");
    const mesh  = document.querySelector("#mesh");
    const sole1  = document.querySelector("#sole1");
    const sole2  = document.querySelector("#sole2");

    setColor(body, "white");
    setColor(mesh, "white");
    setColor(sole1, "white");
    setColor(sole2, "white");

    body.addEventListener("mouseover", function( event ) {
        // highlight the mouseover target
        event.target.style.stroke = "gold";
        event.target.style.strokeWidth = "5";

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.stroke = "";
          }, 1000);
        }, false);
      

      mesh.addEventListener("mouseover", function( event ) {
        // highlight the mouseover target
        event.target.style.stroke = "aqua";
        event.target.style.strokeWidth = "5";
      
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.stroke = "";
        }, 1000);
      }, false);

      sole1.addEventListener("mouseover", function( event ) {
        // highlight the mouseover target
        event.target.style.stroke = "greenyellow";
        event.target.style.strokeWidth = "5";
      
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.stroke = "";
        }, 1000);
      }, false);

      sole2.addEventListener("mouseover", function( event ) {
        // highlight the mouseover target
        event.target.style.stroke = "orange";
        event.target.style.strokeWidth = "5";
      
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.stroke = "";
        }, 1000);
      }, false);


    body.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
    });

    mesh.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
    });

    sole1.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
    });

    sole2.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
    });

    document.querySelectorAll(".color_selector").forEach(element => {
        element.style.backgroundColor =
        element.addEventListener("click", event => {
            // event.target.classList.remove("selection");
            // event.target.classList.add("selection");
            currentColor = event.target.style.backgroundColor;
        });
    });
}


function setColor(element, colorString){
    element.style.fill = colorString;
}
