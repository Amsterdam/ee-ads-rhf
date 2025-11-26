import{j as o}from"./iframe-Cgbu11J_.js";import{u as p,F as u,T as g}from"./ReactSelectControl-AzgJ21tx.js";const a=({label:n="Message",name:t="example",description:m,registerOptions:l,wrapperProps:i,...c})=>{const d=p({defaultValues:{[t]:""}});return o.jsx(u,{...d,children:o.jsx(g,{label:n,name:t,description:m,registerOptions:l,wrapperProps:i,...c})})};a.__docgenInfo={description:"",methods:[],displayName:"TextAreaControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Message'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}}}};const b={title:"Components/TextAreaControl",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The textarea label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Comments",name:"comments",registerOptions:{required:"A comment is required"},wrapperProps:{},placeholder:"Comments"}},r={args:{label:"Comments",name:"comments1",description:"Please enter a comment",registerOptions:{required:"A comment is required"},placeholder:"Comments"}},s={args:{label:"Disabled comments",name:"comments2",disabled:!0,placeholder:"Comments"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    name: 'comments',
    registerOptions: {
      required: 'A comment is required'
    },
    wrapperProps: {},
    placeholder: 'Comments'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    name: 'comments1',
    description: 'Please enter a comment',
    registerOptions: {
      required: 'A comment is required'
    },
    placeholder: 'Comments'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled comments',
    name: 'comments2',
    disabled: true,
    placeholder: 'Comments'
  }
}`,...s.parameters?.docs?.source}}};const x=["Primary","WithDescription","Disabled"],h=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Primary:e,WithDescription:r,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{s as D,h as T,r as W};
