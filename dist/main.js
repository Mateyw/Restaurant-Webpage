(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),a=t.n(o),r=t(314),i=t.n(r)()(a());i.push([n.id,":root {\n    --background-color: rgb(194, 194, 194);\n    --color-black: black;\n}\n\n\nbody {\n    align-items: center;\n    background-color: white;\n    box-sizing: border-box;\n    display: flex;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n\nheader {\n    align-items: center;\n    background-color: white;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n    display: flex;\n    height: 12vh;\n    max-height: 12vh;\n    position: fixed;\n    width: 100vw;\n    top: 0;\n}\n\nnav {\n    align-items: center;\n    display: flex;\n    height: 10vh;\n    justify-content: space-around;\n    margin: 0 auto;\n    width: clamp(50vw, 75vw, 100vw);\n}\n\nnav > * {\n    background-color: var(--background-color);\n    border: none;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n    font-weight: 600;\n    padding: 8px 20px;\n    position: relative;\n}\n\nnav > button:active {\n    transform: scale(0.95);\n}\n\nnav > button:after {\n    background-color: var(--background-color);\n    content: \" \";\n    height: 3px;\n    left: 50%;\n    opacity: 0.6;\n    position: absolute;\n    top: 125%;\n    transform: translate(-50%, -50%);\n    transform-origin: bottom left;\n    transition: width .2s ease;\n    width: 0rem;\n}\n\nnav > button:hover {\n    cursor: pointer;\n}\n\nnav > button:hover::after {\n    width: 4.7rem;\n}\n\n#content {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    top: 12vh;\n    width: 100vw;\n    z-index: -999;\n}\n\n.card {\n    background-color: white;\n    border: 1px solid var(--background-color);\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 100px;\n    margin-top: 30px;\n    max-width: 100%;\n    text-align: center;\n    width: 500px;\n}\n\n.card > * {\n    margin: 2% auto;\n}\n\n.card.about {\n    padding: 30px;\n    text-align: left;\n}\n\n.card.about > .section-name {\n    margin: 20px auto 0 auto;\n}\n\n.dish > .ingredients {\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.title {\n    border-bottom: 2px solid var(--color-black);\n    width: max-content;\n}\n\n.welcome-text {\n    padding: 0 5% 5% 5%;\n    text-align: left;\n}\n\nfooter {\n    align-items: center;\n    background-color: white;\n    bottom: 0;\n    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.4);\n    display: flex;\n    flex-direction: column;\n    height: 12vh;\n    justify-content: center;\n    line-height: 0.6;\n    margin-top: 300px;\n    max-height: 12vh;\n    position: fixed;\n    text-align: center;\n    width: 100vw;\n}\n\n#copy {\n    align-items: center;\n    color: #c3c3c3;\n    display: flex;\n    font-size: 0.8rem;\n    gap: 5px;\n}\n\n#copy > a {\n    text-decoration: none;\n}\n\n#copy > a > i {\n    color: #c3c3c3;\n    font-size: 1.1rem;\n}\n\n#rights {\n    color: #c3c3c3;\n    font-size: 0.8rem;\n}\n\n",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=a(p,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var c=o(n,a),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),a=t.n(o),r=t(659),i=t.n(r),s=t(56),c=t.n(s),l=t(540),d=t.n(l),u=t(113),m=t.n(u),p=t(208),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),e()(p.A,h),p.A&&p.A.locals&&p.A.locals;const g=document.getElementById("content"),f=document.getElementById("homeBtn"),v=document.getElementById("menuBtn"),y=document.getElementById("aboutBtn");document.addEventListener("DOMContentLoaded",(()=>{try{!function(){const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("card","home"),e.innerHTML='\n        <h3 class="title">Restaurant Bonasera</h3>\n        <p class="welcome-text">\n            "Welcome to <em>Restaurant Bonasera</em>!\n            Discover a culinary haven in the heart of <strong>Lisboa</strong>. Our cozy restaurant beckons with\n            irresistible <em>aromas</em> and a warm, inviting <em>atmosphere</em>.\n            Indulge in our chef-inspired <em>menu</em>, showcasing the finest <em>ingredients and flavors</em>. From savory <em>starters</em>\n            to mouthwatering <em>mains</em> and decadent <em>desserts</em>, each dish is a testament to our commitment to <em>\n                culinary excellence</em>.\n            Join us for an unforgettable <em>dining</em> experience, where every bite tells a <em>story</em> and every moment is\n            savored. We can\'t wait to welcome you!"\n        </p>\n    ',n.appendChild(e)}(),console.log("Content loaded successfully")}catch(n){console.log("Error loading content",n)}})),f.addEventListener("click",(()=>{g.innerHTML="",function(){const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("card","home"),e.innerHTML='\n        <h3 class="title">Restaurant Bonasera</h3>\n        <p class="welcome-text">\n            "Welcome to <em>Restaurant Bonasera</em>!\n            Discover a culinary haven in the heart of <strong>Lisboa</strong>. Our cozy restaurant beckons with\n            irresistible <em>aromas</em> and a warm, inviting <em>atmosphere</em>.\n            Indulge in our chef-inspired <em>menu</em>, showcasing the finest <em>ingredients and flavors</em>. From savory <em>starters</em>\n            to mouthwatering <em>mains</em> and decadent <em>desserts</em>, each dish is a testament to our commitment to <em>\n                culinary excellence</em>.\n            Join us for an unforgettable <em>dining</em> experience, where every bite tells a <em>story</em> and every moment is\n            savored. We can\'t wait to welcome you!"\n        </p>\n    ',n.appendChild(e)}()})),v.addEventListener("click",(()=>{g.innerHTML="",function(){const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("card","menu"),e.innerHTML='\n        <h3 class="title">Menu</h3>\n        <div class="menu">\n            <div class="dish">\n                <p class="food-name"><strong>Fish</strong></p>\n                <p class="ingredients">Fish, Chips, Sauce Bearnaise, Broccoli, Salad</p>\n            </div>\n            <div class="dish">\n                <p class="food-name"><strong>Steak</strong></p>\n                <p class="ingredients">French Fries, Smoked Hot Chili Sauce, Vegetables, Blue Cheese</p>\n            </div>\n            <div class="dish">\n                <p class="food-name"><strong>Pasta</strong></p>\n                <p class="ingredients">Rigatoni, Sauce Bolognese, Tomatoes, Parmigiano Reggiano, Basil</p>\n            </div>\n            <div class="dish">\n                <p class="food-name"><strong>Dessert</strong></p>\n                <p class="ingredients">Vanilla Ice Cream, Waffles, Amarettini, Café de Lait, Crema</p>\n            </div>\n        </div>\n    ',n.appendChild(e)}()})),y.addEventListener("click",(()=>{g.innerHTML="",function(){const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("card","about"),e.innerHTML='\n        <h3 class="title">About Us</h3>\n        <p class="section-name"><strong>Mission</strong></p>\n        <p class="mission">At Bonasera, our mission is to create unforgettable dining experiences by offering\n            exquisite cuisine, exceptional service, and a warm, inviting atmosphere for every guest.</p>\n        <p class="section-name"><strong>Who We Are</strong></p>\n        <p class="who-we-are">Bonasera is more than just a restaurant; it\'s a place where culinary artistry meets\n            heartfelt hospitality. Our story is crafted by passionate chefs, dedicated staff, and loyal patrons who\n            come together to celebrate food, community, and the joy of dining. Every dish we serve is a testament to\n            our commitment to quality, creativity, and tradition, bringing a taste of authentic flavors to your\n            table.</p>\n        <p class="values">\n            <p class="section-name"><strong>Values</strong></p>\n            <p class="values-structure-sentence">We believe in the power of food to bring people together and create\n                lasting memories. Our values are rooted in:</p>\n            <p class="values-details">\n                <strong>Excellence:</strong> Striving for perfection in every dish, drink, and detail of your dining\n                experience.\n                <br>\n                <strong>Sustainability:</strong> Sourcing locally and responsibly to support our community and the\n                environment.\n                <br>\n                <strong>Innovation:</strong> Continuously exploring new culinary ideas while honoring classic recipes.\n                <br>\n                <strong>Community:</strong> Fostering a welcoming space where everyone feels like family.\n            </p>\n        </p>\n        <p class="section-name"><strong>Contact</strong></p>\n        <p class="contact">We\'re here to make your visit exceptional. If you have any questions, need assistance, or\n            want to make a reservation, please don\'t hesitate to get in touch with us. We look forward to welcoming\n            you to Bonasera, where every meal is a celebration.</p>\n    ',n.appendChild(e)}()}))})()})();