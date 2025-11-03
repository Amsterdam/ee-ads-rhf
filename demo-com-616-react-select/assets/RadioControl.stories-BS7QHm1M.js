import{j as o}from"./iframe-McgelQI5.js";import{u as b,F as y,R as g}from"./index.esm-ChTQVhkg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtjVCgdH.js";import"./index-CUTcyBeF.js";const n=({label:l="Type",name:t="example",options:i=[],description:p,registerOptions:d,wrapperProps:u,...c})=>{const m=b({defaultValues:{[t]:""}});return o.jsx(y,{...m,children:o.jsx(g,{label:l,name:t,options:i,description:p,registerOptions:d,wrapperProps:u,...c})})};n.__docgenInfo={description:"",methods:[],displayName:"RadioControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1}}};const T={title:"Components/RadioControl",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Type",options:[{label:"A",value:"a"},{label:"B",value:"b"}],registerOptions:{required:"A type is required"},wrapperProps:{}}},r={args:{label:"Type",name:"type",options:["A","B","C"],registerOptions:{required:"A type is required"},wrapperProps:{}}},a={args:{label:"Type",name:"type1",options:[{label:"A",value:"a"},{label:"B",value:"b"}],description:"A type is required",registerOptions:{required:"You must select a type"}}},s={args:{label:"Disabled select a type",name:"type2",options:[{label:"A",value:"a"},{label:"B",value:"b"}],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Type',
    options: [{
      label: 'A',
      value: 'a'
    }, {
      label: 'B',
      value: 'b'
    }],
    registerOptions: {
      required: 'A type is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Type',
    name: 'type',
    options: ['A', 'B', 'C'],
    registerOptions: {
      required: 'A type is required'
    },
    wrapperProps: {}
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Type',
    name: 'type1',
    options: [{
      label: 'A',
      value: 'a'
    }, {
      label: 'B',
      value: 'b'
    }],
    description: 'A type is required',
    registerOptions: {
      required: 'You must select a type'
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled select a type',
    name: 'type2',
    options: [{
      label: 'A',
      value: 'a'
    }, {
      label: 'B',
      value: 'b'
    }],
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const h=["Primary","WithPlainArray","WithDescription","Disabled"];export{s as Disabled,e as Primary,a as WithDescription,r as WithPlainArray,h as __namedExportsOrder,T as default};
