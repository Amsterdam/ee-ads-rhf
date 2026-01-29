import{j as a}from"./iframe-CGVYDA2B.js";import{u as f,b as h,c as O}from"./TimeControl-Bw-3yHSm.js";const n=({label:s="Which options do you prefer?",name:t="example",options:l=[],description:i,registerOptions:p,wrapperProps:c,hideErrorMessage:d=!1,shouldShow:u=!0,...m})=>{const b=f({defaultValues:{[t]:[]}});return a.jsx(h,{...b,children:a.jsx(O,{label:s,name:t,description:i,options:l,registerOptions:p,wrapperProps:c,hideErrorMessage:d,shouldShow:u,...m})})};n.__docgenInfo={description:"",methods:[],displayName:"CheckboxControlGroup",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Which options do you prefer?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const g={title:"Components/CheckboxControlGroup",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"},attributes:{control:"object",description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},e={args:{label:"Which options do you prefer?",options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],name:"terms",registerOptions:{required:"At least one option is required"},wrapperProps:{}}},o={args:{label:"Which options do you prefer?",name:"terms1",description:"Multiple options can be selected.",registerOptions:{required:"At least one option is required"},options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}]}},r={args:{label:"Which options do you prefer?",name:"terms2",options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Which options do you prefer?',
    options: [{
      label: 'Option A',
      value: 'a'
    }, {
      label: 'Option B',
      value: 'b'
    }, {
      label: 'Option C',
      value: 'c'
    }],
    name: 'terms',
    registerOptions: {
      required: 'At least one option is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Which options do you prefer?',
    name: 'terms1',
    description: 'Multiple options can be selected.',
    registerOptions: {
      required: 'At least one option is required'
    },
    options: [{
      label: 'Option A',
      value: 'a'
    }, {
      label: 'Option B',
      value: 'b'
    }, {
      label: 'Option C',
      value: 'c'
    }]
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Which options do you prefer?',
    name: 'terms2',
    options: [{
      label: 'Option A',
      value: 'a'
    }, {
      label: 'Option B',
      value: 'b'
    }, {
      label: 'Option C',
      value: 'c'
    }],
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const v=["Primary","WithDescription","Disabled"],C=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,WithDescription:o,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{C,r as D,o as W};
