(()=>{const e={openMenuBtn:document.querySelectorAll("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuList:document.querySelector("[data-list]")};for(let t of e.openMenuBtn)t.addEventListener("click",n);function n(){document.body.classList.toggle("menu-open"),e.menu.classList.toggle("is-hidden")}e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),document.body.classList.remove("menu-open")}))})(),document.querySelector(".js-speaker-form").addEventListener("submit",(e=>{e.preventDefault(),new FormData(e.currentTarget).forEach(((e,n)=>console.log(`${n}: ${e}`))),e.currentTarget.reset()}));
//# sourceMappingURL=index.51dc962c.js.map
