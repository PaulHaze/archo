(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2654)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t,n=e.src,r=e.sizes,i=e.unoptimized,s=void 0!==i&&i,c=e.priority,d=void 0!==c&&c,A=e.loading,h=e.lazyRoot,b=void 0===h?null:h,y=e.lazyBoundary,v=void 0===y?"200px":y,x=e.className,j=e.quality,w=e.width,S=e.height,k=e.objectFit,O=e.objectPosition,I=e.onLoadingComplete,P=e.loader,_=void 0===P?C:P,L=e.placeholder,D=void 0===L?"empty":L,Q=e.blurDataURL,R=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),T=l.useRef(null),B=R,M=r?"responsive":"intrinsic";"layout"in B&&(B.layout&&(M=B.layout),delete B.layout);var z="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(n)){var U=g(n)?n.default:n;if(!U.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(Q=Q||U.blurDataURL,z=U.src,(!M||"fill"!==M)&&(S=S||U.height,w=w||U.width,!U.height||!U.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)))}n="string"===typeof n?n:z;var F=N(w),q=N(S),H=N(j),W=!d&&("lazy"===A||"undefined"===typeof A);(n.startsWith("data:")||n.startsWith("blob:"))&&(s=!0,W=!1);(null===(t=T.current)||void 0===t?void 0:t.complete)&&(W=!1);0;var K,Y=a(f.useIntersection({rootRef:b,rootMargin:v,disabled:!W}),2),J=Y[0],X=Y[1],G=!W||X,V={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},$=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:O},te="blur"===D?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(Q,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===M)V.display="block",V.position="absolute",V.top=0,V.left=0,V.bottom=0,V.right=0;else if("undefined"!==typeof F&&"undefined"!==typeof q){var ne=q/F,re=isNaN(ne)?"100%":"".concat(100*ne,"%");"responsive"===M?(V.display="block",V.position="relative",$=!0,Z.paddingTop=re):"intrinsic"===M?(V.display="inline-block",V.position="relative",V.maxWidth="100%",$=!0,Z.maxWidth="100%",K="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%27".concat(F,"%27 height=%27").concat(q,"%27/%3e")):"fixed"===M&&(V.display="inline-block",V.position="relative",V.width=F,V.height=q)}else 0;var oe={src:p,srcSet:void 0,sizes:void 0};G&&(oe=E({src:n,unoptimized:s,layout:M,width:F,quality:H,sizes:r,loader:_}));var ae=n;0;var ie;0;var se=(o(ie={},"imagesrcset",oe.srcSet),o(ie,"imagesizes",oe.sizes),ie),ce=l.default.useLayoutEffect,le=l.useRef(I);return l.useEffect((function(){le.current=I}),[I]),ce((function(){J(T.current)}),[J]),l.useEffect((function(){!function(e,t,n,r,o){var a=function(){var t=e.current;t&&(t.src!==p&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&("blur"===r&&(t.style.filter="",t.style.backgroundSize="",t.style.backgroundImage="",t.style.backgroundPosition=""),o.current)){var n=t.naturalWidth,a=t.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))};e.current&&(e.current.complete?a():e.current.onload=a)}(T,0,0,D,le)}),[ae,M,D,G]),l.default.createElement("span",{style:V},$?l.default.createElement("span",{style:Z},K?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,l.default.createElement("img",Object.assign({},B,oe,{decoding:"async","data-nimg":M,className:x,ref:T,style:m({},ee,te)})),W&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},B,E({src:n,unoptimized:s,layout:M,width:F,quality:H,sizes:r,loader:_}),{decoding:"async","data-nimg":M,style:ee,className:x,loading:A||"lazy"}))),d?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+oe.src+oe.srcSet+oe.sizes,rel:"preload",as:"image",href:oe.srcSet?void 0:oe.src},se))):null)};var c,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(c=n(5443))&&c.__esModule?c:{default:c},d=n(5809),f=n(7190);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){A(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}new Map;var p="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=new URL("".concat(t).concat(S(n))),i=a.searchParams;i.set("auto",i.get("auto")||"format"),i.set("fit",i.get("fit")||"max"),i.set("w",i.get("w")||r.toString()),o&&i.set("q",o.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default"}||d.imageConfigDefault,y=b.deviceSizes,v=b.imageSizes,x=b.loader,j=b.path,w=(b.domains,i(y).concat(i(v)));function E(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,s=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(n);r)a.push(parseInt(r[2]));if(a.length){var s,c=.01*(s=Math).min.apply(s,i(a));return{widths:w.filter((function(e){return e>=y[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:y,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(o,r,s),u=l.widths,d=l.kind,f=u.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:u.map((function(e,n){return"".concat(c({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({src:t,quality:a,width:u[f]})}}function N(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function C(e){var t=h.get(x);if(t)return t(m({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(x))}function S(e){return"/"===e[0]?e.slice(1):e}y.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},s=n(6273),c=n(387),l=n(7190);var u={};function d(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=i.default.useMemo((function(){var t=o(s.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?s.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),f=a.href,A=a.as,m=e.children,p=e.replace,h=e.shallow,g=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,v=o(l.useIntersection({rootMargin:"200px"}),2),x=v[0],j=v[1],w=i.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);i.default.useEffect((function(){var e=j&&n&&s.isLocalURL(f),t="undefined"!==typeof b?b:r&&r.locale,o=u[f+"%"+A+(t?"%"+t:"")];e&&!o&&d(r,f,A,{locale:t})}),[A,f,j,b,n,r]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,r,f,A,p,h,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(f)&&d(r,f,A,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof b?b:r&&r.locale,C=r&&r.isLocaleDomain&&s.getDomainLocale(A,N,r&&r.locales,r&&r.domainLocales);E.href=C||s.addBasePath(s.addLocale(A,N,r&&r.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,l=a.useRef(),u=o(a.useState(!1),2),d=u[0],f=u[1],A=o(a.useState(t?t.current:null),2),m=A[0],p=A[1],h=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return a.useEffect((function(){if(!s&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&p(t.current)}),[t]),[h,d]};var a=n(7294),i=n(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map},8484:function(e,t,n){"use strict";n.d(t,{$_:function(){return k},a_:function(){return s},l2:function(){return u},pU:function(){return c},P:function(){return R}});var r=n(5893),o=n(7294),a=n(4298),i=n(2806);function s(){return(0,o.useEffect)((function(){var e=document.querySelector("body");i.QP&&(!function(){var e=document.querySelector("#preloader"),t=document.querySelector(".loading-text"),n=function(){e.classList.add("isdone"),t.classList.add("isdone")};Pace.on("done",(function(){n()})),document.querySelector("body").classList.contains("pace-done")&&n(),document.addEventListener("load",(function(){n()}))}(),e.classList.contains("hideX")?e.classList.remove("hideX"):e.classList.add("hideX"))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"".concat(i.QP?"showX":"hideX"),children:(0,r.jsx)("div",{id:"preloader",children:(0,r.jsx)("div",{className:"loading-text",children:"Loading"})})}),i.QP&&(0,r.jsx)(a.default,{id:"pace",strategy:"beforeInteractive",src:"/assets/js/pace.min.js"})]})}function c(){return(0,o.useEffect)((function(){!function(){var e=document.querySelector(".progress-wrap"),t=document.querySelector(".progress-wrap path"),n=t.getTotalLength(),r=function(){var e=window.pageYOffset,r=document.documentElement.scrollHeight-window.innerHeight,o=n-e*n/r;t.style.strokeDashoffset=o};e&&(t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray="".concat(n," ").concat(n),t.style.strokeDashoffset=n,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear",r(),window.addEventListener("scroll",r),window.addEventListener("scroll",(function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),e.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1})))}()}),[]),(0,r.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,r.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,r.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})}var l=n(1664);function u(e){var t=e.navbarRef,n=e.logoRef,a=e.logoClass,s=(0,o.useState)(!1),c=s[0],u=s[1],d=function(e){(function(e){var t=[];if(!e.parentNode)return t;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&t.push(n),n=n.nextSibling;return t})(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).forEach((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")};return(0,r.jsx)("nav",{className:"navbar change navbar-expand-lg nav-scroll",ref:t,children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(l.default,{href:"/demos",children:(0,r.jsx)("button",{type:"button",className:"logo ".concat(a&&a),children:(0,r.jsx)("img",{src:i.E8,alt:"logo",ref:n})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:function(){u((function(e){return!e})),document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")},"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"icon-bar mr-1",children:(0,r.jsx)("i",{className:"fas ".concat(c?"fa-times":"fa-bars")})})}),(0,r.jsx)("div",{id:"navbarSupportedContent",className:"collapse navbar-collapse",children:(0,r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,r.jsxs)("li",{className:"nav-item dropdown",onClick:d,onKeyPress:d,children:[(0,r.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"HOME"}),(0,r.jsxs)("div",{className:"dropdown-menu",children:[(0,r.jsx)(l.default,{href:"/home7",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Home Default"})}),(0,r.jsx)(l.default,{href:"/home6",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Interior Agency"})}),(0,r.jsx)(l.default,{href:"/home5",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Creative Arch"})}),(0,r.jsx)(l.default,{href:"/home4",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Architecture Studio"})}),(0,r.jsx)(l.default,{href:"/home1",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Home Light"})}),(0,r.jsx)(l.default,{href:"/home2",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Interior Light"})}),(0,r.jsx)(l.default,{href:"/home3",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Architecture Light"})})]})]}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(l.default,{href:"/about",children:(0,r.jsx)("a",{className:"nav-link",children:"About"})})}),(0,r.jsxs)("li",{className:"nav-item dropdown",onKeyPress:d,onClick:d,children:[(0,r.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Portfolio"}),(0,r.jsxs)("div",{className:"dropdown-menu",children:[(0,r.jsx)(l.default,{href:"/work1",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Two Column"})}),(0,r.jsx)(l.default,{href:"/work2",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Three Column"})}),(0,r.jsx)(l.default,{href:"/work3",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Four Column"})}),(0,r.jsx)(l.default,{href:"/project-details",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Single Project"})})]})]}),(0,r.jsxs)("li",{className:"nav-item dropdown",onKeyPress:d,onClick:d,children:[(0,r.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Blog"}),(0,r.jsxs)("div",{className:"dropdown-menu",children:[(0,r.jsx)(l.default,{href:"/blogs",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Blogs"})}),(0,r.jsx)(l.default,{href:"/blog-details",children:(0,r.jsx)("a",{className:"dropdown-item",children:"Post Details"})})]})]}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(l.default,{href:"/contact",children:(0,r.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}var d=n(7880),f=n.n(d);function A(e){var t=e.icon,n=e.contactType,o=e.contactDetails;return(0,r.jsxs)("div",{className:"flex my-6",children:[(0,r.jsx)("div",{className:"text-4xl min-w-[80px] text-stone-500 ".concat(t," ")}),(0,r.jsxs)("div",{className:"details",children:[(0,r.jsx)("p",{className:"font-semibold text-white/90 text-lg",children:n}),(0,r.jsx)("p",{className:"",children:o})]})]})}function m(){return(0,r.jsx)("div",{className:"w-full bg-primary-dark flex items-start",children:(0,r.jsxs)("div",{className:"mt-20 py-12",children:[(0,r.jsx)("h3",{className:"font-semibold mb-10",children:"Contact us"}),(0,r.jsx)(A,{icon:"pe-7s-map-marker",contactType:"Head Office",contactDetails:"123 Acacia Avenue, New York, USA, 20192"}),(0,r.jsx)(A,{icon:"pe-7s-mail",contactType:"Email Us",contactDetails:"support@gmail.com"}),(0,r.jsx)(A,{icon:"pe-7s-call",contactType:"Call Us",contactDetails:"+87986451666"})]})})}var p=n(5675);function h(e){var t=e.blogThumbImgUrl,n=e.blogTitle,o=e.blogDate;return(0,r.jsxs)("div",{className:f().blogSummaryContainer,children:[(0,r.jsx)("div",{className:f().imgContainer,children:(0,r.jsx)(p.default,{src:t,objectFit:"cover",layout:"fill"})}),(0,r.jsxs)("div",{className:f().textContainer,children:[(0,r.jsx)("p",{children:n}),(0,r.jsx)("p",{className:"text-sm text-sand mt-5",children:o})]})]})}var g={src:"/_next/static/media/blog_1.ba130f19.jpg",height:666,width:999,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAlAk//8QAHhAAAQMEAwAAAAAAAAAAAAAAAQIEEgADBRETIqH/2gAIAQEAAT8Ab4dob/CiaFbPeRPlf//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/ABW//8QAFxEBAAMAAAAAAAAAAAAAAAAAAgARMf/aAAgBAwEBPwBk3k//2Q=="},b={src:"/_next/static/media/blog_2.f41c6bfd.jpg",height:666,width:999,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKYUv//EAB0QAAAGAwEAAAAAAAAAAAAAAAECAwQFEQATM4H/2gAIAQEAAT8AWkZJNqLoXCY2Tnrovmf/xAAWEQADAAAAAAAAAAAAAAAAAAAAETH/2gAIAQIBAT8AVP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAwEBPwBXL//Z"};function y(){return(0,r.jsx)("div",{className:"w-full bg-primary-dark flex items-start",children:(0,r.jsxs)("div",{className:"mt-20 pt-12",children:[(0,r.jsx)("h3",{className:"font-semibold mb-10",children:"Recent News"}),(0,r.jsx)(h,{blogThumbImgUrl:g,blogTitle:"The Start-Up Ultimate Guide to Make Your WordPress Journal.",blogDate:"14 Jan 2022"}),(0,r.jsx)(h,{blogThumbImgUrl:b,blogTitle:"The Start-Up Ultimate Guide to Make Your WordPress Journal.",blogDate:"14 Jan 2022"})]})})}var v=n(7280),x=n.n(v);function j(){return(0,r.jsx)("div",{className:x().container,children:(0,r.jsx)("i",{className:"fab fa-facebook-f z-20"})})}function w(){return(0,r.jsx)("div",{className:x().container,children:(0,r.jsx)("i",{className:"fab fa-twitter z-20"})})}function E(){return(0,r.jsx)("div",{className:x().container,children:(0,r.jsx)("i",{className:"fab fa-youtube z-20"})})}function N(){return(0,r.jsx)("div",{className:x().container,children:(0,r.jsx)("i",{className:"fab fa-instagram z-20"})})}function C(){return(0,r.jsxs)("div",{className:"w-full mt-20 pt-12",children:[(0,r.jsx)("h3",{className:"font-semibold mb-10",children:"Connect with us"}),(0,r.jsxs)("div",{className:"flex justify-between ",children:[(0,r.jsx)(j,{}),(0,r.jsx)(w,{}),(0,r.jsx)(N,{}),(0,r.jsx)(E,{})]})]})}function S(){return(0,r.jsxs)("div",{className:f().subscribe,children:[(0,r.jsx)("input",{type:"text",className:"",placeholder:"Type Your Email"}),(0,r.jsx)("span",{className:"pe-7s-paper-plane"})]})}function k(){return(0,r.jsxs)("footer",{className:f().footerContainer,children:[(0,r.jsx)(m,{}),(0,r.jsx)(y,{}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(C,{}),(0,r.jsx)("div",{className:"w-full mt-4",children:(0,r.jsx)(S,{})}),(0,r.jsx)("p",{className:"font-light text-sm mt-14 text-center text-sand",children:"Designed and built by Artemist"})]})]})}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}var R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(i,e);var t,n,o,a=Q(i);function i(){return O(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props.children;return(0,r.jsx)("div",{children:e})}}])&&I(t.prototype,n),o&&I(t,o),i}(o.Component)},2654:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(7294),n(4298)),a=n(9008),i=n(8484);n(5420),n(472),n(9260);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Archo"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"})]}),(0,r.jsx)(i.a_,{}),(0,r.jsx)(t,c({},n)),(0,r.jsx)(i.pU,{}),(0,r.jsx)(o.default,{id:"wow",src:"/assets/js/wow.min.js"}),(0,r.jsx)(o.default,{id:"splitting",strategy:"beforeInteractive",src:"/assets/js/splitting.min.js"}),(0,r.jsx)(o.default,{id:"simpleParallax",src:"/assets/js/simpleParallax.min.js"}),(0,r.jsx)(o.default,{id:"isotope",src:"/assets/js/isotope.pkgd.min.js"}),(0,r.jsx)(o.default,{src:"/assets/js/main.js",id:"init",strategy:"lazyOnload"})]})}},7880:function(e){e.exports={footerContainer:"Footer_footerContainer__Lux0m",blogSummaryContainer:"Footer_blogSummaryContainer__xHID9",imgContainer:"Footer_imgContainer__FgDE3",textContainer:"Footer_textContainer__6HIbQ",subscribe:"Footer_subscribe__LuEtO"}},7280:function(e){e.exports={container:"Socials_container__b_Jwq"}},472:function(){},9260:function(){},5420:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},4298:function(e,t,n){e.exports=n(699)},2806:function(e){"use strict";e.exports=JSON.parse('{"E8":"/assets/img/logo-light.png","Q1":"/assets/img/logo-dark.png","QP":true}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);