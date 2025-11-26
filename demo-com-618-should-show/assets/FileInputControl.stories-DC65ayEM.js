import{j as o}from"./iframe-BZNJ1hkU.js";import{u as h,F as f,a as b}from"./ReactSelectControl-hiwpIvzw.js";const s=({label:n="FileInput",name:a="example",description:i,registerOptions:l,wrapperProps:c,hideFieldError:d=!1,hideErrorMessage:p=!1,...m})=>{const u=h({defaultValues:{[a]:""}});return o.jsx(f,{...u,children:o.jsx(b,{label:n,name:a,description:i,registerOptions:l,wrapperProps:c,hideFieldError:d,hideErrorMessage:p,...m})})};s.__docgenInfo={description:"",methods:[],displayName:"FileInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'FileInput'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const g={title:"Components/FileInputControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Attachment",name:"attachment",registerOptions:{required:"An attachment is required"},wrapperProps:{}}},t={args:{label:"Attachment",name:"attachment1",description:"Please select your document.",registerOptions:{required:"An attachment is required"}}},r={args:{label:"Select a document",name:"attachment2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const F=["Primary","WithDescription","Disabled"],x=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,WithDescription:t,__namedExportsOrder:F,default:g},Symbol.toStringTag,{value:"Module"}));export{r as D,x as F,t as W};
