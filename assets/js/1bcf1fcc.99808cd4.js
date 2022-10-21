"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),k=n,y=c["".concat(i,".").concat(k)]||c[k]||u[k]||p;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<p;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={sidebar_label:"Keyboard"},l="Keyboard class",i={unversionedId:"api/puppeteer.keyboard",id:"version-19.0.0/api/puppeteer.keyboard",title:"Keyboard class",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.type(), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-19.0.0/api/puppeteer.keyboard.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard",permalink:"/api/puppeteer.keyboard",draft:!1,tags:[],version:"19.0.0",frontMatter:{sidebar_label:"Keyboard"},sidebar:"sidebar",previous:{title:"Accessibility.snapshot",permalink:"/api/puppeteer.accessibility.snapshot"},next:{title:"Keyboard.down",permalink:"/api/puppeteer.keyboard.down"}},d={},s=[{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}],u={toc:s};function c(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"keyboard-class"}),"Keyboard class"),(0,a.kt)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.keyboard.type"}),"Keyboard.type()"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class Keyboard\n")),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"For finer control, you can use ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.keyboard.down"}),"Keyboard.down()"),", ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.keyboard.up"}),"Keyboard.up()"),", and ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.keyboard.sendcharacter"}),"Keyboard.sendCharacter()")," to manually fire events as if they were generated from a real keyboard."),(0,a.kt)("p",null,"On macOS, keyboard shortcuts like ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2318 A")," -",">"," Select All do not work. See ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues/1313"}),"#","1313"),"."),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Keyboard")," class."),(0,a.kt)("h2",n({},{id:"example-1"}),"Example 1"),(0,a.kt)("p",null,"An example of holding down ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.keyboard.type('Hello World!');\nawait page.keyboard.press('ArrowLeft');\n\nawait page.keyboard.down('Shift');\nfor (let i = 0; i < ' World'.length; i++)\n  await page.keyboard.press('ArrowLeft');\nawait page.keyboard.up('Shift');\n\nawait page.keyboard.press('Backspace');\n// Result text will end up saying 'Hello!'\n")),(0,a.kt)("h2",n({},{id:"example-2"}),"Example 2"),(0,a.kt)("p",null,"An example of pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"A")),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.keyboard.down('Shift');\nawait page.keyboard.press('KeyA');\nawait page.keyboard.up('Shift');\n")),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.keyboard.down"}),"down(key, options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,a.kt)("code",null,"keydown")," event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.keyboard.press"}),"press(key, options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Shortcut for ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.keyboard.down"}),"Keyboard.down()")," and ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.keyboard.up"}),"Keyboard.up()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.keyboard.sendcharacter"}),"sendCharacter(char)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,a.kt)("code",null,"keypress")," and ",(0,a.kt)("code",null,"input")," event. This does not send a ",(0,a.kt)("code",null,"keydown")," or ",(0,a.kt)("code",null,"keyup")," event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.keyboard.type"}),"type(text, options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Sends a ",(0,a.kt)("code",null,"keydown"),", ",(0,a.kt)("code",null,"keypress"),"/",(0,a.kt)("code",null,"input"),", and ",(0,a.kt)("code",null,"keyup")," event for each character in the text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.keyboard.up"}),"up(key)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,a.kt)("code",null,"keyup")," event.")))))}c.isMDXComponent=!0}}]);