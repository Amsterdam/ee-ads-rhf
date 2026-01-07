import{j as t}from"./iframe-AfZzknkC.js";import{u as b,a as h,e as g}from"./TimeControl-DTgiGSyX.js";const s=({label:n="Name",name:o="example",description:l,registerOptions:i,wrapperProps:d,hideFieldError:p=!1,hideErrorMessage:c=!1,shouldShow:u=!0,...m})=>{const f=b({defaultValues:{[o]:""}});return t.jsx(h,{...f,children:t.jsx(g,{label:n,name:o,description:l,registerOptions:i,wrapperProps:d,hideFieldError:p,hideErrorMessage:c,shouldShow:u,...m})})};s.__docgenInfo={description:"",methods:[],displayName:"TextInputControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Name'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const x={title:"Components/TextInputControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"}}},e={args:{label:"Name",name:"name",registerOptions:{required:"A name is required"},wrapperProps:{}}},r={args:{label:"Name",name:"name1",description:"Please provide your name",registerOptions:{required:"Please enter your name"}}},a={args:{label:"Disabled name",name:"name2",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled name',
    name: 'name2',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const y=["Primary","WithDescription","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,Primary:e,WithDescription:r,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,P as T,r as W};
