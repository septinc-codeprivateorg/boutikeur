import{k as p,r,o as m,s as d,y as c,a0 as V}from"./vendor.e9042f2c.js";const i={props:{modelValue:{type:[String,Number],default:null}},emits:["update:modelValue"],setup(l,{emit:u}){const a=l,e=p({get:()=>a.modelValue,set:o=>{u("update:modelValue",o)}});return(o,t)=>{const n=r("BaseInput");return m(),d(n,{modelValue:c(e),"onUpdate:modelValue":t[0]||(t[0]=s=>V(e)?e.value=s:null),type:"number"},null,8,["modelValue"])}}};export{i as default};