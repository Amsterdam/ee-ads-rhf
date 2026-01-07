import{j as a}from"./iframe-CuBGIYij.js";import{u as D,b as S,a as q}from"./TimeControl-BuJcZqBQ.js";import{p as t}from"./provinces-BZRU43w1.js";const s=({isClearable:n=!0,isDisabled:l=!1,isMulti:i,options:c,id:d="example",name:u="example",required:p=!1,value:m=void 0,customAriaDescribedBy:f=void 0,menuPortalTarget:b=document.body,ref:v,error:g,onChange:y=()=>{},onBlur:h=()=>{},...x})=>{const j=D({defaultValues:{[u]:""}});return a.jsx(S,{...j,children:a.jsx(q,{id:d,ref:v,isClearable:n,isDisabled:l,isMulti:i,options:c,required:p,value:m,error:g,customAriaDescribedBy:f,menuPortalTarget:b,onChange:y,onBlur:h,...x})})};s.__docgenInfo={description:"",methods:[],displayName:"SelectInput",props:{label:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},isClearable:{defaultValue:{value:"true",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},id:{defaultValue:{value:"'example'",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},value:{defaultValue:{value:"undefined",computed:!0},required:!1},customAriaDescribedBy:{defaultValue:{value:"undefined",computed:!0},required:!1},menuPortalTarget:{defaultValue:{value:"document.body",computed:!0},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},onBlur:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const V={title:"Components/ReactSelectControl - SelectInput",component:s,tags:["autodocs"],argTypes:{isClearable:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},isDisabled:{control:"boolean",description:"Disables user interaction with the select."},isMulti:{control:"boolean",description:"Enable multiple selected options"},options:{control:"object",description:"List of selectable options. Each option is an object `{ label, value }`"},id:{control:"text",description:"Form field id"},name:{control:"text",description:"Form field name"},value:{control:"text",description:"Form field value"},customAriaDescribedBy:{control:"text",description:"By default React-Select only handles errors in `aria-describedby`, this enables the `describedby` tag if you use a description"},menuPortalTarget:{control:"object",description:"React-select exposes a menuPortalTarget prop, that lets you portal the select menu to a dom node of your choosing"},ref:{control:"object",description:"A ref that exposes the underlying DOM element or component instance"},error:{control:"text",description:"An error message, used to display error styles and aria invalid state"},onChange:{control:"object",description:"Handle blur events on the component"},onBlur:{control:"object",description:"Handle. change events on the component"}}},e={args:{id:"province",name:"province",options:t,error:void 0}},o={args:{id:"province2",name:"province",options:t,isMulti:!0,error:""}},r={args:{label:"Disabled province",name:"province4",options:t,isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'province',
    name: 'province',
    options: provinces,
    error: undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'province2',
    name: 'province',
    options: provinces,
    isMulti: true,
    error: ''
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province4',
    options: provinces,
    isDisabled: true
  }
}`,...r.parameters?.docs?.source}}};const _=["Primary","WithMultiple","Disabled"],C=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,WithMultiple:o,__namedExportsOrder:_,default:V},Symbol.toStringTag,{value:"Module"}));export{r as D,C as S,o as W};
