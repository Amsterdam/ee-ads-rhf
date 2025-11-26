import{j as a}from"./iframe-DyVYpfYc.js";import{u as m,F as u,c as g}from"./ReactSelectControl-Bwd4l199.js";const o=({label:n="Do you accept the terms?",name:s="example",description:i,registerOptions:c,wrapperProps:l,...p})=>{const d=m({defaultValues:{[s]:!1}});return a.jsx(u,{...d,children:a.jsx(g,{label:n,name:s,description:i,registerOptions:c,wrapperProps:l,...p})})};o.__docgenInfo={description:"",methods:[],displayName:"SwitchControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Do you accept the terms?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const b={title:"Components/SwitchControl",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The switch label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Do you agree?",name:"terms",registerOptions:{required:"The terms are required"},wrapperProps:{}}},r={args:{label:"Accept terms and conditions",name:"terms2",description:"Please read the terms carefully before accepting",registerOptions:{required:"You must accept the terms"}}},t={args:{label:"Disabled switch",name:"terms3",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do you agree?',
    name: 'terms',
    registerOptions: {
      required: 'The terms are required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    name: 'terms2',
    description: 'Please read the terms carefully before accepting',
    registerOptions: {
      required: 'You must accept the terms'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    name: 'terms3',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const h=["Primary","WithDescription","Disabled"],x=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{t as D,x as S,r as W};
