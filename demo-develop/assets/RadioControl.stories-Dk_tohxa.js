import{j as l}from"./iframe-DGu5gyO-.js";import{u as v,b as h,e as q}from"./TimeControl-DKMR2caP.js";const n=({label:i="Type",name:s="example",options:p=[],columns:u,description:d,registerOptions:c,wrapperProps:m,hideErrorMessage:b=!1,shouldShow:y=!0,...f})=>{const g=v({defaultValues:{[s]:""}});return l.jsx(h,{...g,children:l.jsx(q,{label:i,name:s,options:p,columns:u,description:d,registerOptions:c,wrapperProps:m,hideErrorMessage:b,shouldShow:y,...f})})};n.__docgenInfo={description:"",methods:[],displayName:"RadioControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:"false",computed:!1},required:!1},shouldShow:{defaultValue:{value:"true",computed:!1},required:!1}}};const A={title:"Components/RadioControl",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Form field name, used by React Hook Form for registration."},label:{control:"text",description:"Field label displayed above the select."},description:{control:"text",description:"Optional helper text displayed below the label."},columns:{control:"number",default:1,description:"Number of columns to display the radio buttons in."},required:{control:"boolean",description:"Marks the field as required."},disabled:{control:"boolean",description:"Disables user interaction with the select."},registerOptions:{control:"object",description:"Validation rules passed directly to React Hook Form."},wrapperProps:{control:"object",description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideErrorMessage:{control:"boolean",default:"false",description:"Hides the error message text"},shouldShow:{control:"boolean",default:"true",description:"Whether to render tshe field, useful for conditional form elements"},attributes:{control:"object",description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},e={args:{label:"Type",options:[{label:"A",value:"a"},{label:"B",value:"b"}],registerOptions:{required:"A type is required"},wrapperProps:{}}},r={args:{label:"Which district do you prefer?",name:"district",registerOptions:{required:"A district is required"},columns:3,options:[{label:"Centrum",value:"a"},{label:"Nieuw-West",value:"b"},{label:"Noord",value:"c"},{label:"Oost",value:"d"},{label:"Weesp",value:"e"},{label:"West",value:"f"},{label:"Westpoort",value:"g"},{label:"Zuid",value:"h"},{label:"Zuidoost",value:"i"}]}},a={args:{label:"Type",name:"type",options:["A","B","C"],registerOptions:{required:"A type is required"},wrapperProps:{}}},o={args:{label:"Type",name:"type1",options:[{label:"A",value:"a"},{label:"B",value:"b"}],description:"A type is required",registerOptions:{required:"You must select a type"}}},t={args:{label:"Disabled select a type",name:"type2",options:[{label:"A",value:"a"},{label:"B",value:"b"}],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Type',
    options: [{
      label: 'A',
      value: 'a'
    }, {
      label: 'B',
      value: 'b'
    }],
    registerOptions: {
      required: 'A type is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Which district do you prefer?',
    name: 'district',
    registerOptions: {
      required: 'A district is required'
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Type',
    name: 'type',
    options: ['A', 'B', 'C'],
    registerOptions: {
      required: 'A type is required'
    },
    wrapperProps: {}
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Type',
    name: 'type1',
    options: [{
      label: 'A',
      value: 'a'
    }, {
      label: 'B',
      value: 'b'
    }],
    description: 'A type is required',
    registerOptions: {
      required: 'You must select a type'
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled select a type',
    name: 'type2',
    options: [{
      label: 'A',
      value: 'a'
    }, {
      label: 'B',
      value: 'b'
    }],
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const W=["Primary","WithColumns","WithPlainArray","WithDescription","Disabled"],w=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Primary:e,WithColumns:r,WithDescription:o,WithPlainArray:a,__namedExportsOrder:W,default:A},Symbol.toStringTag,{value:"Module"}));export{t as D,w as R,r as W,o as a};
