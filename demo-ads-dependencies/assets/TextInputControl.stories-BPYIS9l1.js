import{j as t}from"./iframe-wgQqdqp9.js";import{u as b,b as h,f as g}from"./TimeControl-BY3-9fi3.js";const s=({label:n="Name",name:a="example",description:l,registerOptions:i,wrapperProps:d,hideFieldError:p=!1,hideErrorMessage:c=!1,shouldShow:m=!0,...u})=>{const f=b({defaultValues:{[a]:""}});return t.jsx(h,{...f,children:t.jsx(g,{label:n,name:a,description:l,registerOptions:i,wrapperProps:d,hideFieldError:p,hideErrorMessage:c,shouldShow:m,...u})})};s.__docgenInfo={description:"",methods:[],displayName:"TextInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Name'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const x={title:"Components/TextInputControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"},attributes:{control:"object",description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},e={args:{label:"Name",name:"name",registerOptions:{required:"A name is required"},wrapperProps:{}}},r={args:{label:"Name",name:"name1",description:"Please provide your name",registerOptions:{required:"Please enter your name"}}},o={args:{label:"Disabled name",name:"name2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name',
    registerOptions: {
      required: 'A name is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name1',
    description: 'Please provide your name',
    registerOptions: {
      required: 'Please enter your name'
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled name',
    name: 'name2',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const y=["Primary","WithDescription","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Primary:e,WithDescription:r,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{o as D,P as T,r as W};
