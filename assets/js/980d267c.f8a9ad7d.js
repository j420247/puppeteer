"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,g=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(g,p(p({ref:t},u),{},{components:r})):n.createElement(g,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_label:"Browser.waitForTarget"},i="Browser.waitForTarget() method",l={unversionedId:"api/puppeteer.browser.waitfortarget",id:"api/puppeteer.browser.waitfortarget",title:"Browser.waitForTarget() method",description:"Searches for a target in all browser contexts.",source:"@site/../docs/api/puppeteer.browser.waitfortarget.md",sourceDirName:"api",slug:"/api/puppeteer.browser.waitfortarget",permalink:"/next/api/puppeteer.browser.waitfortarget",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Browser.waitForTarget"},sidebar:"sidebar",previous:{title:"Browser.version",permalink:"/next/api/puppeteer.browser.version"},next:{title:"Browser.wsEndpoint",permalink:"/next/api/puppeteer.browser.wsendpoint"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"browserwaitfortarget-method"}),"Browser.waitForTarget() method"),(0,n.kt)("p",null,"Searches for a target in all browser contexts."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Browser {\n  waitForTarget(\n    predicate: (x: Target) => boolean | Promise<boolean>,\n    options?: WaitForTargetOptions\n  ): Promise<Target>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"predicate"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"(x: ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.target"}),"Target"),") =",">"," boolean ","|"," Promise","<","boolean",">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A function to be run for every target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.waitfortargetoptions"}),"WaitForTargetOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.target"}),"Target"),">"),(0,n.kt)("p",null,"The first target found that matches the ",(0,n.kt)("inlineCode",{parentName:"p"},"predicate")," function."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("p",null,"An example of finding a target for a page opened via ",(0,n.kt)("inlineCode",{parentName:"p"},"window.open"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browser.waitForTarget(\n  target => target.url() === 'https://www.example.com/'\n);\n")))}m.isMDXComponent=!0}}]);