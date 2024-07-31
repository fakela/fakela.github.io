"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2183],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const i={sidebar_position:6,sidebar_label:"Architecture Guides"},o="Architecture Guides",c={unversionedId:"writing-sample/architecture",id:"writing-sample/architecture",title:"Architecture Guides",description:"This section contains detailed architecture guides for various projects I've contributed to. These documents are designed to provide an in-depth understanding of the architecture, components, and interactions within these systems, helping developers and system architects to implement and troubleshoot effectively.",source:"@site/docs/writing-sample/architecture.md",sourceDirName:"writing-sample",slug:"/writing-sample/architecture",permalink:"/docs/writing-sample/architecture",draft:!1,editUrl:"https://github.com/fakela/fakela.github.io/docs/writing-sample/architecture.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Architecture Guides"},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/docs/writing-sample/faq"},next:{title:"Release Notes",permalink:"/docs/writing-sample/release"}},s={},l=[{value:"1. <strong>Bacalhau Architecture</strong>",id:"1-bacalhau-architecture",level:2},{value:"2. <strong>Optimistic Democracy on GenLayer</strong>",id:"2-optimistic-democracy-on-genlayer",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"architecture-guides"},"Architecture Guides"),(0,a.yg)("p",null,"This section contains detailed architecture guides for various projects I've contributed to. These documents are designed to provide an in-depth understanding of the architecture, components, and interactions within these systems, helping developers and system architects to implement and troubleshoot effectively."),(0,a.yg)("h2",{id:"1-bacalhau-architecture"},"1. ",(0,a.yg)("strong",{parentName:"h2"},"Bacalhau Architecture")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Purpose"),": Offer an in-depth look at the Bacalhau architecture."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Audience"),": Developers and system architects."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Tools"),": Bacalhau, Markdown."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"My Role/Approach"),": I researched and documented the architectural components and their interactions, ensuring a thorough understanding for better implementation and troubleshooting. The document is organized to offer a comprehensive understanding of Bacalhau's core components, interfaces, and the workflow of job submissions and executions.")),(0,a.yg)("admonition",{title:"link",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"Link:")," ",(0,a.yg)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/architecture"},"Bacalhau Architecture"))),(0,a.yg)("iframe",{width:"100%",height:"500",src:"/img/pdf/arch.pdf"}),(0,a.yg)("h2",{id:"2-optimistic-democracy-on-genlayer"},"2. ",(0,a.yg)("strong",{parentName:"h2"},"Optimistic Democracy on GenLayer")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Purpose"),": Provide a detailed guide on the architecture and deployment of the Optimistic Democracy system on GenLayer."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Audience"),": Blockchain developers and system architects."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Tools"),": GenLayer, Markdown."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"My Role/Approach"),": I developed an in-depth architectural guide that includes the design principles, system components, and interaction workflows, ensuring a clear understanding of the system's deployment and operation.")),(0,a.yg)("admonition",{title:"link",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"https://docs.genlayer.com/tutorial/optimistic-democracy"},"Optimistic Democracy on GenLayer"))),(0,a.yg)("iframe",{width:"100%",height:"500",src:"/img/pdf/Optimistic Democracy _ Detailed GenLayer Documentation.pdf"}))}d.isMDXComponent=!0}}]);