import{j as n}from"./iframe-B4WcyFLF.js";import{u as h,a as q,R as y}from"./TimeControl-Ce1l3Zqg.js";import{p as s}from"./provinces-BZRU43w1.js";const a=({label:l="Type",name:i="example",options:c=[],isMulti:p=!1,description:d,registerOptions:u,wrapperProps:m,hideFieldError:f=!1,hideErrorMessage:S=!1,shouldShow:v=!0,...b})=>{const g=h({defaultValues:{[i]:""}});return n.jsx(q,{...g,children:n.jsx(y,{label:l,name:i,options:c,isMulti:p,description:d,registerOptions:u,wrapperProps:m,hideFieldError:f,shouldShow:v,...b})})};a.__docgenInfo={description:"",methods:[],displayName:"ReactSelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},isMulti:{defaultValue:{value:"false",computed:!1},required:!1},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const x={title:"Components/ReactSelectControl",component:a,tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},options:{control:"object",description:"List of selectable options. Each option is an object `{ label, value }`"},isMulti:{control:"boolean",description:"Enable multiple selected options"},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"},inputProps:{control:"object",description:"Optional additional props for the underlying `InputAutoSelect` component."}}},e={args:{label:"Province",name:"province",options:s,registerOptions:{required:"A province is required"},isMulti:!0,wrapperProps:{}}},r={args:{label:"Province",name:"province2",options:s,description:"A province is required",registerOptions:{required:"You must select a province"}}},o={args:{label:"Province",name:"province3",options:s,description:"You can select multiple provinces",isMulti:!0,registerOptions:{required:"You must select a province"}}},t={args:{label:"Disabled province",name:"province4",options:s,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province',
    options: provinces,
    registerOptions: {
      required: 'A province is required'
    },
    isMulti: true,
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
    label: 'Province',
    name: 'province3',
    options: provinces,
    description: 'You can select multiple provinces',
    isMulti: true,
    registerOptions: {
      required: 'You must select a province'
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province4',
    options: provinces,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const P=["Primary","WithDescription","WithMultiple","Disabled"],F=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithDescription:r,WithMultiple:o,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{t as D,F as R,r as W,o as a};
