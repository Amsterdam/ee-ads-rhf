import{j as i}from"./iframe-CWTnwvuy.js";import{u as v,F as f,b as g}from"./index.esm-CDEQDI29.js";import{p as t}from"./provinces-BZRU43w1.js";const n=({label:a="Type",name:s="example",options:l=[],isMulti:c=!1,description:p,registerOptions:d,wrapperProps:u,...m})=>{const b=v({defaultValues:{[s]:""}});return i.jsx(f,{...b,children:i.jsx(g,{label:a,name:s,options:l,isMulti:c,description:p,registerOptions:d,wrapperProps:u,...m})})};n.__docgenInfo={description:"",methods:[],displayName:"ReactSelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},isMulti:{defaultValue:{value:"false",computed:!1},required:!1}}};const y={title:"Components/ReactSelectControl",component:n,tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},options:{control:"object",description:"List of selectable options. Each option is an object `{ label, value }`"},isMulti:{control:"boolean",description:"Enable multiple selected options"},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Props passed to the wrapping `<Field>` container."},inputProps:{control:"object",description:"Optional additional props for the underlying `InputAutoSelect` component."}}},e={args:{label:"Province",name:"province",options:t,registerOptions:{required:"A province is required"},wrapperProps:{}}},o={args:{label:"Province",name:"province2",options:t,description:"A province is required",registerOptions:{required:"You must select a province"}}},r={args:{label:"Disabled province",name:"province3",options:t,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province',
    options: provinces,
    registerOptions: {
      required: 'A province is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province2',
    options: provinces,
    description: 'A province is required',
    registerOptions: {
      required: 'You must select a province'
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province3',
    options: provinces,
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const h=["Primary","WithDescription","Disabled"],j=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,WithDescription:o,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,j as R,o as W};
