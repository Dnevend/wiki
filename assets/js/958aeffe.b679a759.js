"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[851],{478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(7294),l=n(2263),r=n(7961);function a(e,t){if(!e)return t;let n;return n="function"==typeof e?e():"current"in e?e.current:e,n}const c=(e,t)=>{const{callback:n,...l}=t||{},[r,c]=i.useState(0),[m,s]=i.useState(!1);return(0,i.useEffect)((()=>{const i=(r=e,Array.isArray(r)?e:[e]);var r;if(0===i.length)return;const m=new IntersectionObserver((e=>{e.forEach((e=>{c(e.intersectionRatio),s(e.isIntersecting),n?.(e)}))}),{...l,root:a(t?.root)});return i.forEach((e=>{e&&m.observe(a(e))})),()=>{m.disconnect()}}),[e,n,l]),{ratio:r,visible:m}},m={"body-container":"body-container_Wk9U","timeline-item--no-children":"timeline-item--no-children_WwyR","timeline-item-date":"timeline-item-date_ZUSG","timeline-item-dateinner":"timeline-item-dateinner_iwxz",entry:"entry_gutG",title:"title_dTUx",body:"body_d1oz","is-hidden":"is-hidden_fV9W","bounce-in":"bounce-in_WjSr"};var s=n(6010);const o="timeline__wrapper_JqKe",d="timeline_Ypeg",u=e=>{let{className:t,animate:n,children:l}=e;return i.createElement("div",{className:o},i.createElement("div",{className:(0,s.Z)(t,d,{timeline__animate:n})},l))};u.Item=e=>{let{dateText:t,children:n,dateStyle:l,dateInnerStyle:r,bodyContainerStyle:a}=e;const o=i.useRef(null),{visible:d}=c(o),[u,E]=i.useState(!1);return(0,i.useEffect)((()=>{d&&E(d)}),[d]),i.createElement("div",{ref:o,className:(0,s.Z)(m.entry,m[n?"timeline-item":"timeline-item--no-children"])},i.createElement("div",{className:m.title},i.createElement("div",{style:l,className:m[u?"bounce-in":"is-hidden"]},i.createElement("span",{style:r,className:m["timeline-item-date"]},i.createElement("time",{className:m["timeline-item-dateinner"],title:t},t)))),i.createElement("div",{className:m.body},i.createElement("div",{style:a,className:(0,s.Z)(m["body-container"],m[u?"bounce-in":"is-hidden"])},n)))};const E=u;function b(){const{siteConfig:e}=(0,l.Z)();return i.createElement(r.Z,{title:"About",description:`About ${e.title}`},i.createElement("main",null,"About",i.createElement(E,{animate:!0},i.createElement(E.Item,{dateText:"2022.02 - Present"},i.createElement("p",null,"Work in ...")),i.createElement(E.Item,{dateText:"2021 - 2022.01"},i.createElement("p",null,"Work in ...")),i.createElement(E.Item,{dateText:"2019 - 2020"},i.createElement("p",null,"Practice in ...")),i.createElement(E.Item,{dateText:"2015 - 2019"},i.createElement("div",null,i.createElement("p",null,"honor"),i.createElement("ul",null,i.createElement("li",null,"...")))))))}}}]);