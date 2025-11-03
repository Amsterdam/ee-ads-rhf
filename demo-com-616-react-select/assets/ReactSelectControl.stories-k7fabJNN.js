import{j as n}from"./iframe-McgelQI5.js";import{u as b,F as f,b as g}from"./index.esm-ChTQVhkg.js";import{p as t}from"./provinces-BZRU43w1.js";const i=({label:a="Type",name:s="example",options:c=[],isMulti:p=!1,description:l,registerOptions:d,wrapperProps:u,...m})=>{const v=b({defaultValues:{[s]:""}});return n.jsx(f,{...v,children:n.jsx(g,{label:a,name:s,options:c,isMulti:p,description:l,registerOptions:d,wrapperProps:u,...m})})};i.__docgenInfo={description:"",methods:[],displayName:"ReactSelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},isMulti:{defaultValue:{value:"false",computed:!1},required:!1}}};const q={title:"Components/ReactSelectControl",component:i,tags:["autodocs"],argTypes:{label:{control:"text",description:"The react-select label"},name:{control:"text",description:"The react-select name"},description:{control:"text",description:"Optional description text"},options:{control:"object",description:"Array of options that populate the select menu"},registerOptions:{control:"object",description:"..."},isMulti:{control:"boolean",description:"Support multiple selected options"},disabled:{control:"boolean"}}},e={args:{label:"Province",name:"province",options:t,registerOptions:{required:"A province is required"},wrapperProps:{}}},r={args:{label:"Province",name:"province2",options:t,description:"A province is required",registerOptions:{required:"You must select a province"}}},o={args:{label:"Disabled province",name:"province3",options:t,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province',
    options: provinces,
    registerOptions: {
      required: 'A province is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province2',
    options: provinces,
    description: 'A province is required',
    registerOptions: {
      required: 'You must select a province'
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province3',
    options: provinces,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const x=["Primary","WithDescription","Disabled"],h=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Primary:e,WithDescription:r,__namedExportsOrder:x,default:q},Symbol.toStringTag,{value:"Module"}));export{o as D,h as R,r as W};
