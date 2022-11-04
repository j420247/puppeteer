"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||p;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<p;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_label:"Puppeteer"},u="Puppeteer class",o={unversionedId:"api/puppeteer.puppeteer",id:"version-19.1.2/api/puppeteer.puppeteer",title:"Puppeteer class",description:"The main Puppeteer class.",source:"@site/versioned_docs/version-19.1.2/api/puppeteer.puppeteer.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer",permalink:"/api/puppeteer.puppeteer",draft:!1,tags:[],version:"19.1.2",frontMatter:{sidebar_label:"Puppeteer"},sidebar:"sidebar",previous:{title:"PuppeteerNode.product",permalink:"/api/puppeteer.puppeteernode.product"},next:{title:"Puppeteer.clearCustomQueryHandlers",permalink:"/api/puppeteer.puppeteer.clearcustomqueryhandlers"}},i={},s=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],c={toc:s};function d(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"puppeteer-class"}),"Puppeteer class"),(0,n.kt)("p",null,"The main Puppeteer class."),(0,n.kt)("p",null,"IMPORTANT: if you are using Puppeteer in a Node environment, you will get an instance of ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.puppeteernode"}),"PuppeteerNode")," when you import or require ",(0,n.kt)("inlineCode",{parentName:"p"},"puppeteer"),". That class extends ",(0,n.kt)("inlineCode",{parentName:"p"},"Puppeteer"),", so has all the methods documented below as well as all that are defined on ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.puppeteernode"}),"PuppeteerNode"),"."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export declare class Puppeteer\n")),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"Puppeteer")," class."),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteer.clearcustomqueryhandlers"}),"clearCustomQueryHandlers()")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Unregisters all custom query handlers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteer.connect"}),"connect(options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"This method attaches Puppeteer to an existing browser instance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteer.customqueryhandlernames"}),"customQueryHandlerNames()")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets the names of all custom query handlers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteer.registercustomqueryhandler"}),"registerCustomQueryHandler(name, queryHandler)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Registers a ",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.customqueryhandler"}),"custom query handler"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteer.unregistercustomqueryhandler"}),"unregisterCustomQueryHandler(name)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Unregisters a custom query handler for a given name.")))))}d.isMDXComponent=!0}}]);