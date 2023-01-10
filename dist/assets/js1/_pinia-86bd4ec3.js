import{K as t}from"./__vendor-830ad3aa.js";import{ai as e,r as n,aj as s,i as o,a7 as c,E as a,ak as r,C as i,w as u,h as f,d as p,D as l,n as h,a9 as d,f as y}from"./_@vue-f7294240.js";
/*!
  * pinia v2.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let v;const _=t=>v=t,b=Symbol();function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var $,O;function m(){const o=e(!0),c=o.run((()=>n({})));let a=[],r=[];const i=s({install(t){_(i),i._a=t,t.provide(b,i),t.config.globalProperties.$pinia=i,r.forEach((t=>a.push(t))),r=[]},use(e){return this._a||t?a.push(e):r.push(e),this},_p:a,_a:null,_e:o,_s:new Map,state:c});return i}(O=$||($={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const g=()=>{};function P(t,e,n,s=g){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&p()&&l(o),o}function w(t,...e){t.slice().forEach((t=>{t(...e)}))}function E(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];j(o)&&j(s)&&t.hasOwnProperty(n)&&!a(s)&&!r(s)?t[n]=E(o,s):t[n]=s}return t}const S=Symbol();const{assign:I}=Object;function k(t,o,i={},p,l,d){let y;const v=I({actions:{}},i),b={deep:!0};let O,m,k,x=s([]),A=s([]);const F=p.state.value[t];let C;function D(e){let n;O=m=!1,"function"==typeof e?(e(p.state.value[t]),n={type:$.patchFunction,storeId:t,events:k}):(E(p.state.value[t],e),n={type:$.patchObject,payload:e,storeId:t,events:k});const s=C=Symbol();h().then((()=>{C===s&&(O=!0)})),m=!0,w(x,n,p.state.value[t])}d||F||(p.state.value[t]={}),n({});const J=g;function K(e,n){return function(){_(p);const s=Array.from(arguments),o=[],c=[];function a(t){o.push(t)}function r(t){c.push(t)}let i;w(A,{args:s,name:e,store:N,after:a,onError:r});try{i=n.apply(this&&this.$id===t?this:N,s)}catch(u){throw w(c,u),u}return i instanceof Promise?i.then((t=>(w(o,t),t))).catch((t=>(w(c,t),Promise.reject(t)))):(w(o,i),i)}}const M={_p:p,$id:t,$onAction:P.bind(null,A),$patch:D,$reset:J,$subscribe(e,n={}){const s=P(x,e,n.detached,(()=>o())),o=y.run((()=>u((()=>p.state.value[t]),(s=>{("sync"===n.flush?m:O)&&e({storeId:t,type:$.direct,events:k},s)}),I({},b,n))));return s},$dispose:function(){y.stop(),x=[],A=[],p._s.delete(t)}},N=f(I({},M));p._s.set(t,N);const q=p._e.run((()=>(y=e(),y.run((()=>o())))));for(const e in q){const n=q[e];if(a(n)&&(!a(B=n)||!B.effect)||r(n))d||(!F||j(z=n)&&z.hasOwnProperty(S)||(a(n)?n.value=F[e]:E(n,F[e])),p.state.value[t][e]=n);else if("function"==typeof n){const t=K(e,n);q[e]=t,v.actions[e]=n}}var z,B;return I(N,q),I(c(N),q),Object.defineProperty(N,"$state",{get:()=>p.state.value[t],set:t=>{D((e=>{I(e,t)}))}}),p._p.forEach((t=>{I(N,y.run((()=>t({store:N,app:p._a,pinia:p,options:v}))))})),F&&d&&i.hydrate&&i.hydrate(N.$state,F),O=!0,m=!0,N}function x(t,e,n){let c,a;const r="function"==typeof e;function i(t,n){const i=p();(t=t||i&&o(b))&&_(t),(t=v)._s.has(c)||(r?k(c,e,a,t):function(t,e,n,o){const{state:c,actions:a,getters:r}=e,i=n.state.value[t];let u;u=k(t,(function(){i||(n.state.value[t]=c?c():{});const e=d(n.state.value[t]);return I(e,a,Object.keys(r||{}).reduce(((e,o)=>(e[o]=s(y((()=>{_(n);const e=n._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,n,0,!0),u.$reset=function(){const t=c?c():{};this.$patch((e=>{I(e,t)}))}}(c,a,t));return t._s.get(c)}return"string"==typeof t?(c=t,a=r?n:e):(a=t,c=t.id),i.$id=c,i}function A(t){{t=c(t);const e={};for(const n in t){const s=t[n];(a(s)||r(s))&&(e[n]=i(t,n))}return e}}export{m as c,x as d,A as s};
