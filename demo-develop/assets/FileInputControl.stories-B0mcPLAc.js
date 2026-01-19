import{j as a}from"./iframe-qPncwkfy.js";import{u as h,b,c as g}from"./TimeControl-BMA4Tx5s.js";const s=({label:n="FileInput",name:o="example",description:l,registerOptions:i,wrapperProps:d,hideFieldError:c=!1,hideErrorMessage:p=!1,shouldShow:u=!0,...m})=>{const f=h({defaultValues:{[o]:""}});return a.jsx(b,{...f,children:a.jsx(g,{label:n,name:o,description:l,registerOptions:i,wrapperProps:d,hideFieldError:c,hideErrorMessage:p,shouldShow:u,...m})})};s.__docgenInfo={description:"",methods:[],displayName:"FileInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'FileInput'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const y={title:"Components/FileInputControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"},attributes:{control:"object",description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},e={args:{label:"Attachment",name:"attachment",registerOptions:{required:"An attachment is required"},wrapperProps:{}}},t={args:{label:"Attachment",name:"attachment1",description:"Please select your document.",registerOptions:{required:"An attachment is required"}}},r={args:{label:"Select a document",name:"attachment2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    name: 'attachment',
    registerOptions: {
      required: 'An attachment is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    name: 'attachment1',
    description: 'Please select your document.',
    registerOptions: {
      required: 'An attachment is required'
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a document',
    name: 'attachment2',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const F=["Primary","WithDescription","Disabled"],j=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,WithDescription:t,__namedExportsOrder:F,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,j as F,t as W};
