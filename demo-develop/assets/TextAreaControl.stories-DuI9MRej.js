import{j as s}from"./iframe-C1JbQLBR.js";import{u as f,F as b,T as g}from"./ReactSelectControl-qsz42cYT.js";const a=({label:n="Message",name:t="example",description:l,registerOptions:i,wrapperProps:m,hideFieldError:d=!1,hideErrorMessage:c=!1,...p})=>{const u=f({defaultValues:{[t]:""}});return s.jsx(b,{...u,children:s.jsx(g,{label:n,name:t,description:l,registerOptions:i,wrapperProps:m,hideFieldError:d,hideErrorMessage:c,...p})})};a.__docgenInfo={description:"",methods:[],displayName:"TextAreaControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Message'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},hideFieldError:{defaultValue:{value:"false",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1}}};const h={title:"Components/TextAreaControl",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, className, to apply to the `Field` wrapper component"},hideFieldError:{control:"boolean",default:"false",description:"Hides the invalid prop on the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"}}},e={args:{label:"Comments",name:"comments",registerOptions:{required:"A comment is required"},wrapperProps:{},placeholder:"Comments"}},r={args:{label:"Comments",name:"comments1",description:"Please enter a comment",registerOptions:{required:"A comment is required"},placeholder:"Comments"}},o={args:{label:"Disabled comments",name:"comments2",disabled:!0,placeholder:"Comments"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled comments',
    name: 'comments2',
    disabled: true,
    placeholder: 'Comments'
  }
}`,...o.parameters?.docs?.source}}};const x=["Primary","WithDescription","Disabled"],y=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Primary:e,WithDescription:r,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{o as D,y as T,r as W};
