function s(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function o(e,f,n){f.forEach((t,l)=>{"#"+t==n&&c(l,e)}),n==""&&c(0,e)}function c(e,f){if(f!=null&&f.querySelectorAll("a")!=null){const n=f.querySelectorAll("a")[e].offsetLeft,t=f.querySelectorAll("a")[e].offsetWidth/f.offsetWidth;f.style.setProperty("--_left",n+"px"),f.style.setProperty("--_width",t.toString())}}export{c,s as e,o as u};
