"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,w=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(w,a(a({ref:t},c),{},{components:n})):r.createElement(w,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={sidebar_label:"PredefinedNetworkConditions"},p="PredefinedNetworkConditions variable",l={unversionedId:"api/puppeteer.predefinednetworkconditions",id:"api/puppeteer.predefinednetworkconditions",title:"PredefinedNetworkConditions variable",description:"A list of network conditions to be used with Page.emulateNetworkConditions().",source:"@site/../docs/api/puppeteer.predefinednetworkconditions.md",sourceDirName:"api",slug:"/api/puppeteer.predefinednetworkconditions",permalink:"/next/api/puppeteer.predefinednetworkconditions",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"PredefinedNetworkConditions"},sidebar:"sidebar",previous:{title:"Point.y",permalink:"/next/api/puppeteer.point.y"},next:{title:"PressOptions",permalink:"/next/api/puppeteer.pressoptions"}},s={},c=[{value:"Example",id:"example",level:2}],u={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"predefinednetworkconditions-variable"}),"PredefinedNetworkConditions variable"),(0,r.kt)("p",null,"A list of network conditions to be used with ",(0,r.kt)("a",o({parentName:"p"},{href:"/next/api/puppeteer.page.emulatenetworkconditions"}),"Page.emulateNetworkConditions()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"PredefinedNetworkConditions: Readonly<{\n  'Slow 3G': NetworkConditions;\n  'Fast 3G': NetworkConditions;\n}>;\n")),(0,r.kt)("h2",o({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import {PredefinedNetworkConditions} from 'puppeteer';\nconst slow3G = PredefinedNetworkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n")))}d.isMDXComponent=!0}}]);