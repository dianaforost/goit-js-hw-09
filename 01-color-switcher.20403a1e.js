const t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let r;e.style.padding="10px",d.style.padding="10px",d.setAttribute("disabled",!0),e.addEventListener("click",(()=>{r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.setAttribute("disabled",!0),d.removeAttribute("disabled")})),d.addEventListener("click",(()=>{clearInterval(r),e.removeAttribute("disabled"),d.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.20403a1e.js.map
