import{j as o}from"./iframe-DadblAY0.js";import{u as b,F as y,R as g}from"./ReactSelectControl-_Jd3EZcb.js";const n=({label:l="Type",name:t="example",options:i=[],description:p,registerOptions:d,wrapperProps:u,...c})=>{const m=b({defaultValues:{[t]:""}});return o.jsx(y,{...m,children:o.jsx(g,{label:l,name:t,options:i,description:p,registerOptions:d,wrapperProps:u,...c})})};n.__docgenInfo={description:"",methods:[],displayName:"RadioControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1}}};const v={title:"Components/RadioControl",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Type",options:[{label:"A",value:"a"},{label:"B",value:"b"}],registerOptions:{required:"A type is required"},wrapperProps:{}}},r={args:{label:"Type",name:"type",options:["A","B","C"],registerOptions:{required:"A type is required"},wrapperProps:{}}},a={args:{label:"Type",name:"type1",options:[{label:"A",value:"a"},{label:"B",value:"b"}],description:"A type is required",registerOptions:{required:"You must select a type"}}},s={args:{label:"Disabled select a type",name:"type2",options:[{label:"A",value:"a"},{label:"B",value:"b"}],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const f=["Primary","WithPlainArray","WithDescription","Disabled"],T=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Primary:e,WithDescription:a,WithPlainArray:r,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,T as R,a as W};
