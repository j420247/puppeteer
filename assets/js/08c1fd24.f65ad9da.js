"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_label:"Mouse.move"},l="Mouse.move() method",i={unversionedId:"api/puppeteer.mouse.move",id:"version-19.0.0/api/puppeteer.mouse.move",title:"Mouse.move() method",description:"Dispatches a mousemove event.",source:"@site/versioned_docs/version-19.0.0/api/puppeteer.mouse.move.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.move",permalink:"/api/puppeteer.mouse.move",draft:!1,tags:[],version:"19.0.0",frontMatter:{sidebar_label:"Mouse.move"},sidebar:"sidebar",previous:{title:"Mouse.drop",permalink:"/api/puppeteer.mouse.drop"},next:{title:"Mouse.up",permalink:"/api/puppeteer.mouse.up"}},u={},s=[{value:"Parameters",id:"parameters",level:2}],m={toc:s};function c(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"mousemove-method"}),"Mouse.move() method"),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Mouse {\n  move(\n    x: number,\n    y: number,\n    options?: {\n      steps?: number;\n    }\n  ): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Horizontal position of the mouse.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Vertical position of the mouse.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"{ steps?: number; }"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)")," Optional object. If specified, the ",(0,n.kt)("code",null,"steps")," property sends intermediate ",(0,n.kt)("code",null,"mousemove")," events when set to ",(0,n.kt)("code",null,"1")," (default).")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"))}c.isMDXComponent=!0}}]);