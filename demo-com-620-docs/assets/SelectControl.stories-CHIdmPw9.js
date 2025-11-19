import{j as t}from"./iframe-B8x5CHKp.js";import{u as b,F as g,S as f}from"./index.esm-BubBD6Ol.js";import{p as s}from"./provinces-BZRU43w1.js";const p=({label:a="Type",name:i="example",options:c=[],description:l,registerOptions:d,wrapperProps:u,...m})=>{const v=b({defaultValues:{[i]:""}});return t.jsx(g,{...v,children:t.jsx(f,{label:a,name:i,options:c,description:l,registerOptions:d,wrapperProps:u,...m})})};p.__docgenInfo={description:"",methods:[],displayName:"SelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1}}};const P={title:"Components/SelectControl",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Province",name:"province",options:s,registerOptions:{required:"A province is required"},wrapperProps:{}}},r={args:{label:"Province",name:"province1",options:s.map(({label:a})=>a),registerOptions:{required:"A province is required"},wrapperProps:{}}},o={args:{label:"Province",name:"province2",options:s,description:"A province is required",registerOptions:{required:"You must select a province"}}},n={args:{label:"Disabled province",name:"province3",options:s,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    name: 'province1',
    options: provinces.map(({
      label
    }) => label),
    registerOptions: {
      required: 'A province is required'
    },
    wrapperProps: {}
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province2',
    options: provinces,
    description: 'A province is required',
    registerOptions: {
      required: 'You must select a province'
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province3',
    options: provinces,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const q=["Primary","WithPlainArray","WithDescription","Disabled"],O=Object.freeze(Object.defineProperty({__proto__:null,Disabled:n,Primary:e,WithDescription:o,WithPlainArray:r,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{n as D,O as S,o as W};
