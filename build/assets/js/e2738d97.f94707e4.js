"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1138],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},538:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:2,sidebar_label:"Documentation Samples"},i="Documentation Tutorial Guide Sample",s={unversionedId:"writing-sample/tutorial",id:"writing-sample/tutorial",title:"Documentation Tutorial Guide Sample",description:"Welcome to my Documentation Tutorials portfolio section! I am a technical writer dedicated to creating comprehensive, yet easy-to-follow tutorials. My focus is on guiding users through complex processes with clarity and simplicity. Below is a showcase of my expertise:",source:"@site/docs/writing-sample/tutorial.md",sourceDirName:"writing-sample",slug:"/writing-sample/tutorial",permalink:"/docs/writing-sample/tutorial",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writing-sample/tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Documentation Samples"},sidebar:"tutorialSidebar",previous:{title:"Writing Samples",permalink:"/docs/category/writing-samples"},next:{title:"How-to Guides",permalink:"/docs/writing-sample/how-to-guide"}},l={},c=[{value:"Project 1: Running Jupyter Notebooks on Bacalhau",id:"project-1-running-jupyter-notebooks-on-bacalhau",level:3},{value:"Project 2: Deploy a Hello World Application to the GlueOps Platform",id:"project-2-deploy-a-hello-world-application-to-the-glueops-platform",level:3},{value:"Project 3: Set up Cloud Connect for your Cluster",id:"project-3-set-up-cloud-connect-for-your-cluster",level:3},{value:"Project 4: Getting Started with Bacalhau",id:"project-4-getting-started-with-bacalhau",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-tutorial-guide-sample"},"Documentation Tutorial Guide Sample"),(0,a.kt)("p",null,"Welcome to my ",(0,a.kt)("strong",{parentName:"p"},"Documentation Tutorials portfolio section"),"! I am a technical writer dedicated to creating comprehensive, yet easy-to-follow tutorials. My focus is on guiding users through complex processes with clarity and simplicity. Below is a showcase of my expertise:"),(0,a.kt)("h3",{id:"project-1-running-jupyter-notebooks-on-bacalhau"},"Project 1: Running Jupyter Notebooks on Bacalhau"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," This tutorial teaches how to run Jupyter Notebooks on Bacalhau, starting with a simple \"Hello, World!\" notebook for beginners, and advancing to executing a notebook for training a machine-learning model on the MNIST dataset. It's a practical guide to using Bacalhau's containerized environment for various data science projects."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tools Used:")," Markdown, Docusarus"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Approach:")," My approach was centered around providing a clear, accessible path for users of different skill levels. The tutorial begins with the basics of installing the Bacalhau client and progresses to more intricate operations like running notebooks for machine learning. Each step is detailed with code snippets and explanations, ensuring users can confidently execute notebooks in Bacalhau\u2019s containerized setting."),(0,a.kt)("iframe",{width:"100%",height:"800",src:"/img/pdf/running-jupyter-notebook.pdf"}),(0,a.kt)("h3",{id:"project-2-deploy-a-hello-world-application-to-the-glueops-platform"},"Project 2: Deploy a Hello World Application to the GlueOps Platform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),':  I created a straightforward guide to deploy a "Hello World" application on the GlueOps platform. The guide starts from the basics and covers each step in detail, ensuring a smooth deployment process.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tools Used"),": Docusaurus, Markdown"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Approach"),": My goal was to simplify the deployment process for beginners. I broke down the steps into clear, easy-to-follow instructions, using a demo project for practical understanding. This approach makes it easier for users to grasp the concepts and apply them to their own projects."),(0,a.kt)("iframe",{width:"100%",height:"800",src:"/img/pdf/glueops-deploy-helloworld.pdf"}),(0,a.kt)("h3",{id:"project-3-set-up-cloud-connect-for-your-cluster"},"Project 3: Set up Cloud Connect for your Cluster"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," This tutorial guides users through the setup of Cloud Connect within Calimero, enabling the management of decentralized, secure infrastructure. It focuses on integrating private chains and workspaces with Kubernetes clusters using personal AWS/GCP credentials, ensuring data sovereignty for users."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tools Used:")," Docusaurus, Markdown"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Approach:")," My method for creating this tutorial was focused and straightforward. I aimed to simplify the complex process of setting up Cloud Connect, presenting each step in an easy-to-understand manner. The guide combines clear instructions with practical examples and screenshots, ensuring accessibility for users of all skill levels. My goal was to empower users to confidently navigate and complete the setup process."),(0,a.kt)("iframe",{width:"100%",height:"800",src:"/img/pdf/bacalhau-getting-started.pdf"}),(0,a.kt)("h3",{id:"project-4-getting-started-with-bacalhau"},"Project 4: Getting Started with Bacalhau"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," In this project, I developed a comprehensive tutorial aimed at helping users get started with Bacalhau. The tutorial covers the installation process and how to run jobs using the Bacalhau client. It provides guidance on utilizing both the Bacalhau CLI and Docker for various tasks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tools Used:")," Docusaurus, Markdown"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Approach:")," The old guide was a bit complicated and hard for some users. So, I researched what users really needed and where they were getting stuck. Then, I rewrote the guide to make it simpler. I included easy steps and clear instructions so that anyone can start using Bacalhau without getting confused or overwhelmed."),(0,a.kt)("iframe",{width:"100%",height:"800",src:"/img/pdf/bacalhau-getting-started.pdf"}))}d.isMDXComponent=!0}}]);