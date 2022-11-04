"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>l});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_label:"FrameWaitForFunctionOptions.timeout"},p="FrameWaitForFunctionOptions.timeout property",u={unversionedId:"api/puppeteer.framewaitforfunctionoptions.timeout",id:"api/puppeteer.framewaitforfunctionoptions.timeout",title:"FrameWaitForFunctionOptions.timeout property",description:"Maximum time to wait in milliseconds. Defaults to 30000 (30 seconds). Pass 0 to disable the timeout. Puppeteer's default timeout can be changed using Page.setDefaultTimeout().",source:"@site/../docs/api/puppeteer.framewaitforfunctionoptions.timeout.md",sourceDirName:"api",slug:"/api/puppeteer.framewaitforfunctionoptions.timeout",permalink:"/next/api/puppeteer.framewaitforfunctionoptions.timeout",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"FrameWaitForFunctionOptions.timeout"},sidebar:"sidebar",previous:{title:"FrameWaitForFunctionOptions.polling",permalink:"/next/api/puppeteer.framewaitforfunctionoptions.polling"},next:{title:"GeolocationOptions",permalink:"/next/api/puppeteer.geolocationoptions"}},c={},l=[{value:"Signature:",id:"signature",level:4}],s={toc:l};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"framewaitforfunctionoptionstimeout-property"}),"FrameWaitForFunctionOptions.timeout property"),(0,n.kt)("p",null,"Maximum time to wait in milliseconds. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," to disable the timeout. Puppeteer's default timeout can be changed using ",(0,n.kt)("a",o({parentName:"p"},{href:"/next/api/puppeteer.page.setdefaulttimeout"}),"Page.setDefaultTimeout()"),"."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface FrameWaitForFunctionOptions {\n  timeout?: number;\n}\n")))}f.isMDXComponent=!0}}]);