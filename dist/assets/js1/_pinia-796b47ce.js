import{ai as t,r as e,aj as n,a7 as s,E as o,ak as c,C as a,w as r,h as i,i as u,g as f,b as p,n as l,d as h,a9 as d,f as y}from"./_@vue-46c95455.js";
/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let v;const b=t=>v=t,_=Symbol();function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var $,O;function g(){const s=t(!0),o=s.run((()=>e({})));let c=[],a=[];const r=n({install(t){b(r),r._a=t,t.provide(_,r),t.config.globalProperties.$pinia=r,a.forEach((t=>c.push(t))),a=[]},use(t){return this._a?c.push(t):a.push(t),this},_p:c,_a:null,_e:s,_s:new Map,state:o});return r}(O=$||($={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const m=()=>{};function E(t,e,n,s=m){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&f()&&p(o),o}function P(t,...e){t.slice().forEach((t=>{t(...e)}))}function S(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],a=t[n];j(a)&&j(s)&&t.hasOwnProperty(n)&&!o(s)&&!c(s)?t[n]=S(a,s):t[n]=s}return t}const w=Symbol();const{assign:I}=Object;function M(a,u,f={},p,h,d){let y;const v=I({actions:{}},f),_={deep:!0};let O,g,M,k=n([]),x=n([]);const A=p.state.value[a];let F;function C(t){let e;O=g=!1,"function"==typeof t?(t(p.state.value[a]),e={type:$.patchFunction,storeId:a,events:M}):(S(p.state.value[a],t),e={type:$.patchObject,payload:t,storeId:a,events:M});const n=F=Symbol();l().then((()=>{F===n&&(O=!0)})),g=!0,P(k,e,p.state.value[a])}d||A||(p.state.value[a]={}),e({});const J=m;function N(t,e){return function(){b(p);const n=Array.from(arguments),s=[],o=[];function c(t){s.push(t)}function r(t){o.push(t)}let i;P(x,{args:n,name:t,store:z,after:c,onError:r});try{i=e.apply(this&&this.$id===a?this:z,n)}catch(u){throw P(o,u),u}return i instanceof Promise?i.then((t=>(P(s,t),t))).catch((t=>(P(o,t),Promise.reject(t)))):(P(s,i),i)}}const q={_p:p,$id:a,$onAction:E.bind(null,x),$patch:C,$reset:J,$subscribe(t,e={}){const n=E(k,t,e.detached,(()=>s())),s=y.run((()=>r((()=>p.state.value[a]),(n=>{("sync"===e.flush?g:O)&&t({storeId:a,type:$.direct,events:M},n)}),I({},_,e))));return n},$dispose:function(){y.stop(),k=[],x=[],p._s.delete(a)}},z=i(q);p._s.set(a,z);const B=p._e.run((()=>(y=t(),y.run((()=>u())))));for(const t in B){const e=B[t];if(o(e)&&(!o(G=e)||!G.effect)||c(e))d||(!A||j(D=e)&&D.hasOwnProperty(w)||(o(e)?e.value=A[t]:S(e,A[t])),p.state.value[a][t]=e);else if("function"==typeof e){const n=N(t,e);B[t]=n,v.actions[t]=e}}var D,G;return I(z,B),I(s(z),B),Object.defineProperty(z,"$state",{get:()=>p.state.value[a],set:t=>{C((e=>{I(e,t)}))}}),p._p.forEach((t=>{I(z,y.run((()=>t({store:z,app:p._a,pinia:p,options:v}))))})),A&&d&&f.hydrate&&f.hydrate(z.$state,A),O=!0,g=!0,z}function k(t,e,s){let o,c;const a="function"==typeof e;function r(t,s){const r=h();(t=t||r&&u(_,null))&&b(t),(t=v)._s.has(o)||(a?M(o,e,c,t):function(t,e,s,o){const{state:c,actions:a,getters:r}=e,i=s.state.value[t];let u;u=M(t,(function(){i||(s.state.value[t]=c?c():{});const e=d(s.state.value[t]);return I(e,a,Object.keys(r||{}).reduce(((e,o)=>(e[o]=n(y((()=>{b(s);const e=s._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,s,0,!0),u.$reset=function(){const t=c?c():{};this.$patch((e=>{I(e,t)}))}}(o,c,t));return t._s.get(o)}return"string"==typeof t?(o=t,c=a?s:e):(c=t,o=t.id),r.$id=o,r}function x(t){{t=s(t);const e={};for(const n in t){const s=t[n];(o(s)||c(s))&&(e[n]=a(t,n))}return e}}export{g as c,k as d,x as s};
