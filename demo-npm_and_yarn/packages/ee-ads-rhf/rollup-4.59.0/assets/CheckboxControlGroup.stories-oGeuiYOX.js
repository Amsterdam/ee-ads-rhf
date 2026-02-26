import{j as n}from"./iframe-BVNOWFrW.js";import{u as v,b as g,c as O}from"./TimeControl-Bmkhrk0F.js";const l=({label:s="Which options do you prefer?",name:a="example",options:i=[],columns:p,description:u,registerOptions:d,wrapperProps:c,hideErrorMessage:b=!1,shouldShow:m=!0,...h})=>{const f=v({defaultValues:{[a]:[]}});return n.jsx(g,{...f,children:n.jsx(O,{label:s,name:a,description:u,options:i,columns:p,registerOptions:d,wrapperProps:c,hideErrorMessage:b,shouldShow:m,...h})})};l.__docgenInfo={description:"",methods:[],displayName:"CheckboxControlGroup",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Which options do you prefer?'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const y={title:"Components/CheckboxControlGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},columns:{control:"number",default:1,description:"Number of columns to display the checkboxes in."},description:{control:"text",description:"Optional helper text displayed below the label."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render the field, useful for conditional form elements"},attributes:{control:"object",description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},e={args:{label:"Which options do you prefer?",options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],name:"terms",registerOptions:{required:"At least one option is required"},wrapperProps:{}}},o={args:{label:"Which districts do you prefer?",name:"terms1",registerOptions:{required:"At least one option is required"},columns:3,options:[{label:"Centrum",value:"a"},{label:"Nieuw-West",value:"b"},{label:"Noord",value:"c"},{label:"Oost",value:"d"},{label:"Weesp",value:"e"},{label:"West",value:"f"},{label:"Westpoort",value:"g"},{label:"Zuid",value:"h"},{label:"Zuidoost",value:"i"}]}},r={args:{label:"Which options do you prefer?",name:"terms2",description:"Multiple options can be selected.",registerOptions:{required:"At least one option is required"},options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}]}},t={args:{label:"Which options do you prefer?",name:"terms3",options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    label: 'Which districts do you prefer?',
    name: 'terms1',
    registerOptions: {
      required: 'At least one option is required'
    },
    columns: 3,
    options: [{
      label: 'Centrum',
      value: 'a'
    }, {
      label: 'Nieuw-West',
      value: 'b'
    }, {
      label: 'Noord',
      value: 'c'
    }, {
      label: 'Oost',
      value: 'd'
    }, {
      label: 'Weesp',
      value: 'e'
    }, {
      label: 'West',
      value: 'f'
    }, {
      label: 'Westpoort',
      value: 'g'
    }, {
      label: 'Zuid',
      value: 'h'
    }, {
      label: 'Zuidoost',
      value: 'i'
    }]
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Which options do you prefer?',
    name: 'terms2',
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Which options do you prefer?',
    name: 'terms3',
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
}`,...t.parameters?.docs?.source}}};const W=["Primary","WithColumns","WithDescription","Disabled"],q=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithColumns:o,WithDescription:r,__namedExportsOrder:W,default:y},Symbol.toStringTag,{value:"Module"}));export{q as C,t as D,o as W,r as a};
