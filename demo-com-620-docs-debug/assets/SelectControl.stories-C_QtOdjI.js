import{j as n}from"./iframe-C1JbQLBR.js";import{u as g,F as h,S as q}from"./ReactSelectControl-qsz42cYT.js";import{p as a}from"./provinces-BZRU43w1.js";const l=({label:t="Type",name:i="example",options:p=[],description:c,registerOptions:d,wrapperProps:u,hideFieldError:m=!1,hideErrorMessage:v=!1,...f})=>{const b=g({defaultValues:{[i]:""}});return n.jsx(h,{...b,children:n.jsx(q,{label:t,name:i,options:p,description:c,registerOptions:d,wrapperProps:u,hideFieldError:m,hideErrorMessage:v,...f})})};l.__docgenInfo={description:"",methods:[],displayName:"SelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const y={title:"Components/SelectControl",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Province",name:"province",options:a,registerOptions:{required:"A province is required"},wrapperProps:{}}},r={args:{label:"Province",name:"province1",options:a.map(({label:t})=>t),registerOptions:{required:"A province is required"},wrapperProps:{}}},o={args:{label:"Province",name:"province2",options:a,description:"A province is required",registerOptions:{required:"You must select a province"}}},s={args:{label:"Disabled province",name:"province3",options:a,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const P=["Primary","WithPlainArray","WithDescription","Disabled"],O=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Primary:e,WithDescription:o,WithPlainArray:r,__namedExportsOrder:P,default:y},Symbol.toStringTag,{value:"Module"}));export{s as D,O as S,o as W};
