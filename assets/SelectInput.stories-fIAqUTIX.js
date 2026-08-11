import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,F as i,N as a,m as o,t as s}from"./src-CXqVK_ZX.js";import{n as c,t as l}from"./provinces-TvkSsvw4.js";var u,d;function f(){return(f=e((()=>{s(),a(),u=n(),d=({isClearable:e=!0,isDisabled:t=!1,isMulti:n,options:a,id:s=`example`,name:c=`example`,required:l=!1,value:d=void 0,customAriaDescribedBy:f=void 0,menuPortalTarget:p=document.body,ref:m,error:h,onChange:g=()=>{},onBlur:_=()=>{},...v})=>{let y=i({defaultValues:{[c]:``}});return(0,u.jsx)(r,{...y,children:(0,u.jsx)(o,{id:s,ref:m,isClearable:e,isDisabled:t,isMulti:n,options:a,required:l,value:d,error:h,customAriaDescribedBy:f,menuPortalTarget:p,onChange:g,onBlur:_,...v})})},d.__docgenInfo={description:``,methods:[],displayName:`SelectInput`,props:{label:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'example'`,computed:!1}},isClearable:{defaultValue:{value:`true`,computed:!1},required:!1},isDisabled:{defaultValue:{value:`false`,computed:!1},required:!1},id:{defaultValue:{value:`'example'`,computed:!1},required:!1},required:{defaultValue:{value:`false`,computed:!1},required:!1},value:{defaultValue:{value:`undefined`,computed:!0},required:!1},customAriaDescribedBy:{defaultValue:{value:`undefined`,computed:!0},required:!1},menuPortalTarget:{defaultValue:{value:`document.body`,computed:!0},required:!1},onChange:{defaultValue:{value:`() => {}`,computed:!1},required:!1},onBlur:{defaultValue:{value:`() => {}`,computed:!1},required:!1}}}})))()}var p=t({Disabled:()=>_,Primary:()=>h,WithMultiple:()=>g,__namedExportsOrder:()=>v,default:()=>m}),m,h,g,_,v;function y(){return(y=e((()=>{f(),l(),m={title:`Components/ReactSelectControl - SelectInput`,component:d,tags:[`autodocs`],argTypes:{isClearable:{control:`object`,description:"Generic props, for example, className, to apply to the `Field` wrapper component"},isDisabled:{control:`boolean`,description:`Disables user interaction with the select.`},isMulti:{control:`boolean`,description:`Enable multiple selected options`},options:{control:`object`,description:"List of selectable options. Each option is an object `{ label, value }`"},id:{control:`text`,description:`Form field id`},name:{control:`text`,description:`Form field name`},value:{control:`text`,description:`Form field value`},customAriaDescribedBy:{control:`text`,description:"By default React-Select only handles errors in `aria-describedby`, this enables the `describedby` tag if you use a description"},menuPortalTarget:{control:`object`,description:`React-select exposes a menuPortalTarget prop, that lets you portal the select menu to a dom node of your choosing`},ref:{control:`object`,description:`A ref that exposes the underlying DOM element or component instance`},error:{control:`text`,description:`An error message, used to display error styles and aria invalid state`},onChange:{control:`object`,description:`Handle blur events on the component`},onBlur:{control:`object`,description:`Handle. change events on the component`}}},h={args:{id:`province`,name:`province`,options:c,error:void 0}},g={args:{id:`province2`,name:`province`,options:c,isMulti:!0,error:``}},_={args:{label:`Disabled province`,name:`province4`,options:c,isDisabled:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'province',
    name: 'province',
    options: provinces,
    error: undefined
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'province2',
    name: 'province',
    options: provinces,
    isMulti: true,
    error: ''
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province4',
    options: provinces,
    isDisabled: true
  }
}`,..._.parameters?.docs?.source}}},v=[`Primary`,`WithMultiple`,`Disabled`]})))()}export{y as i,p as n,g as r,_ as t};