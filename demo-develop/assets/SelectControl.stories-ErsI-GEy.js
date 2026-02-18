import{j as i}from"./iframe-DF7uoV1_.js";import{u as h,b as q,S as y}from"./TimeControl-9FPDsUUg.js";import{p as t}from"./provinces-BZRU43w1.js";const l=({label:a="Type",name:n="example",options:p=[],description:c,registerOptions:d,wrapperProps:u,hideFieldError:m=!1,hideErrorMessage:f=!1,shouldShow:v=!0,...b})=>{const g=h({defaultValues:{[n]:""}});return i.jsx(q,{...g,children:i.jsx(y,{label:a,name:n,options:p,description:c,registerOptions:d,wrapperProps:u,hideFieldError:m,hideErrorMessage:f,shouldShow:v,...b})})};l.__docgenInfo={description:"",methods:[],displayName:"SelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const P={title:"Components/SelectControl",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"},attributes:{control:"object",description:"Generic select props, for example, `className`, to apply to the design-system form field component"}}},e={args:{label:"Province",name:"province",options:t,registerOptions:{required:"A province is required"},wrapperProps:{}}},r={args:{label:"Province",name:"province1",options:t.map(({label:a})=>a),registerOptions:{required:"A province is required"},wrapperProps:{}}},o={args:{label:"Province",name:"province2",options:t,description:"A province is required",registerOptions:{required:"You must select a province"}}},s={args:{label:"Disabled province",name:"province3",options:t,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const x=["Primary","WithPlainArray","WithDescription","Disabled"],F=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Primary:e,WithDescription:o,WithPlainArray:r,__namedExportsOrder:x,default:P},Symbol.toStringTag,{value:"Module"}));export{s as D,F as S,o as W};
