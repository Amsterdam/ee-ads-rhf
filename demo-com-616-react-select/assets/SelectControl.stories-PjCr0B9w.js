import{j as t}from"./iframe-McgelQI5.js";import{u as g,F as b,S as f}from"./index.esm-ChTQVhkg.js";import{p as n}from"./provinces-BZRU43w1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtjVCgdH.js";import"./index-CUTcyBeF.js";const p=({label:i="Type",name:a="example",options:c=[],description:l,registerOptions:d,wrapperProps:m,...u})=>{const v=g({defaultValues:{[a]:""}});return t.jsx(b,{...v,children:t.jsx(f,{label:i,name:a,options:c,description:l,registerOptions:d,wrapperProps:m,...u})})};p.__docgenInfo={description:"",methods:[],displayName:"SelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1}}};const A={title:"Components/SelectControl",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Province",name:"province",options:n,registerOptions:{required:"A province is required"},wrapperProps:{}}},r={args:{label:"Province",name:"province1",options:n.map(({label:i})=>i),registerOptions:{required:"A province is required"},wrapperProps:{}}},o={args:{label:"Province",name:"province2",options:n,description:"A province is required",registerOptions:{required:"You must select a province"}}},s={args:{label:"Disabled province",name:"province3",options:n,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province3',
    options: provinces,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const O=["Primary","WithPlainArray","WithDescription","Disabled"];export{s as Disabled,e as Primary,o as WithDescription,r as WithPlainArray,O as __namedExportsOrder,A as default};
