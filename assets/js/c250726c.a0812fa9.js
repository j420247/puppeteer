"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85014],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),w=s(r),m=o,b=w["".concat(c,".").concat(m)]||w[m]||u[m]||a;return r?n.createElement(b,p(p({ref:t},l),{},{components:r})):n.createElement(b,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=w;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},59138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>w,frontMatter:()=>p,metadata:()=>c,toc:()=>l});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={sidebar_label:"Browser.createIncognitoBrowserContext"},i="Browser.createIncognitoBrowserContext() method",c={unversionedId:"api/puppeteer.browser.createincognitobrowsercontext",id:"api/puppeteer.browser.createincognitobrowsercontext",title:"Browser.createIncognitoBrowserContext() method",description:"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts.",source:"@site/../docs/api/puppeteer.browser.createincognitobrowsercontext.md",sourceDirName:"api",slug:"/api/puppeteer.browser.createincognitobrowsercontext",permalink:"/next/api/puppeteer.browser.createincognitobrowsercontext",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Browser.createIncognitoBrowserContext"},sidebar:"sidebar",previous:{title:"Browser.close",permalink:"/next/api/puppeteer.browser.close"},next:{title:"Browser.defaultBrowserContext",permalink:"/next/api/puppeteer.browser.defaultbrowsercontext"}},s={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],u={toc:l};function w(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"browsercreateincognitobrowsercontext-method"}),"Browser.createIncognitoBrowserContext() method"),(0,n.kt)("p",null,"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Browser {\n  createIncognitoBrowserContext(\n    options?: BrowserContextOptions\n  ): Promise<BrowserContext>;\n}\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/next/api/puppeteer.browsercontextoptions"}),"BrowserContextOptions")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",o({parentName:"p"},{href:"/next/api/puppeteer.browsercontext"}),"BrowserContext"),">"),(0,n.kt)("h2",o({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"(async () => {\n  const browser = await puppeteer.launch();\n  // Create a new incognito browser context.\n  const context = await browser.createIncognitoBrowserContext();\n  // Create a new page in a pristine context.\n  const page = await context.newPage();\n  // Do stuff\n  await page.goto('https://example.com');\n})();\n")))}w.isMDXComponent=!0}}]);