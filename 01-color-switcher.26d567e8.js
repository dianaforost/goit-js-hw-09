!function(){var t,e=document.querySelector("body"),n=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");n.style.padding="10px",o.style.padding="10px",n.addEventListener("click",(function(){t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n.setAttribute("disabled",!0)})),o.addEventListener("click",(function(){clearInterval(t),n.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.26d567e8.js.map
