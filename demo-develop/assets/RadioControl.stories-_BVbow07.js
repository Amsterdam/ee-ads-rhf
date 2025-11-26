import{j as s}from"./iframe-C1JbQLBR.js";import{u as y,F as g,R as f}from"./ReactSelectControl-qsz42cYT.js";const n=({label:l="Type",name:t="example",options:i=[],description:p,registerOptions:d,wrapperProps:c,hideErrorMessage:u=!1,...m})=>{const b=y({defaultValues:{[t]:""}});return s.jsx(g,{...b,children:s.jsx(f,{label:l,name:t,options:i,description:p,registerOptions:d,wrapperProps:c,hideErrorMessage:u,...m})})};n.__docgenInfo={description:"",methods:[],displayName:"RadioControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const v={title:"Components/RadioControl",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Type",options:[{label:"A",value:"a"},{label:"B",value:"b"}],registerOptions:{required:"A type is required"},wrapperProps:{}}},r={args:{label:"Type",name:"type",options:["A","B","C"],registerOptions:{required:"A type is required"},wrapperProps:{}}},a={args:{label:"Type",name:"type1",options:[{label:"A",value:"a"},{label:"B",value:"b"}],description:"A type is required",registerOptions:{required:"You must select a type"}}},o={args:{label:"Disabled select a type",name:"type2",options:[{label:"A",value:"a"},{label:"B",value:"b"}],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","WithPlainArray","WithDescription","Disabled"],x=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Primary:e,WithDescription:a,WithPlainArray:r,__namedExportsOrder:q,default:v},Symbol.toStringTag,{value:"Module"}));export{o as D,x as R,a as W};
