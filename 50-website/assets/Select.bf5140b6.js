import{a as S,r as v,w as k,p as x,m as C,n as j,f as d}from"./vendor.705df165.js";import{i as D,o as w}from"./util.90862d90.js";import{_ as T}from"./plugin-vue_export-helper.5a098b48.js";const m=new Map;let h;D||(w(document,"mousedown",t=>h=t),w(document,"mouseup",t=>{for(const{DocumentHandler:e}of m.values())e(t,h)}));const V=(t,e)=>{let n=[];return e.arg&&(Array.isArray(e.arg)?n=e.arg:n.push(e.arg)),(a,s)=>{const i=e.instance.popperRef,o=a.target,c=s.target,f=!e||!e.instance,r=!o||!c,u=t.contains(o)||t.contains(c),l=t===o,b=i&&(i.contains(o)||i.contains(c)),O=n.length&&(n.some(p=>p.contains&&(p==null?void 0:p.contains(o)))||n.indexOf(c)>-1);f||r||u||l||O||b||e.value()}},y=(t,e)=>{m.set(t,{DocumentHandler:V(t,e),bindingFn:e.value})},A={beforeMount(t,e){y(t,e)},updated(t,e){y(t,e)},unmounted(t){m.delete(t)}};var _={directive:"clickOutside",directiveOption:A};const H=Object.prototype.hasOwnProperty;function g(...t){const e=[];for(let n=0,a=t.length;n<a;n++){const s=t[n];if(!!s){if(typeof s=="string"||typeof s=="number")e.push(s);else if(Array.isArray(s)){if(s.length){const i=g.apply(null,s);i&&e.push(i)}}else if(typeof s=="object")if(s.toString===Object.prototype.toString)for(let i in s)H.call(s,i)&&s[i]&&e.push(i);else e.push(String(s))}}return e.join(" ")}var E=S({props:{placeholder:String,modelValue:String},directives:{[_.directive]:_.directiveOption},emits:["update:modelValue","on-change"],setup(t,{emit:e,slots:n}){const a="The select component should has 'mini-web-option' component as childs!";let s=[];if(n.default&&(s=n.default(),s.filter(l=>!l||l.type.toString()==="Symbol(Comment)").some(l=>l.type!=="mini-web-option")))return console.warn(a);const{placeholder:i}=t,o=v(!1),c=v(t.modelValue),f=()=>{o.value=!1},r={"mini-web-select-icon":!0,"mini-web-select-icon-down":!o.value,"mini-web-select-icon-up":o.value},u=()=>{o.value=!o.value};return k(()=>o.value,l=>{r["mini-web-select-icon-down"]=!o.value,r["mini-web-select-icon-up"]=o.value}),x("select-context",{emit:e,isDown:o,selectValue:c}),()=>C(d("div",{class:"mini-web-select"},[d("div",{class:"mini-web-select-title",placeholder:i,onClick:u},[c.value]),d("i",{class:g(r),onClick:u},null),d("div",{class:"mini-web-select-popper",style:{display:o.value?"block":"none"}},[s])]),[[j("click-outside"),f]])}});var M=T(E,[["__scopeId","data-v-4fb7ede4"]]);export{M as default};
