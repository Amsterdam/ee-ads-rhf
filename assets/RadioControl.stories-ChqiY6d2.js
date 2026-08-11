import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,F as i,N as a,g as o,t as s}from"./src-CXqVK_ZX.js";var c,l;function u(){return(u=e((()=>{s(),a(),c=n(),l=({label:e=`Type`,name:t=`example`,options:n=[],columns:a,description:s,registerOptions:l,wrapperProps:u,hideErrorMessage:d=!1,shouldShow:f=!0,...p})=>{let m=i({defaultValues:{[t]:``}});return(0,c.jsx)(r,{...m,children:(0,c.jsx)(o,{label:e,name:t,options:n,columns:a,description:s,registerOptions:l,wrapperProps:u,hideErrorMessage:d,shouldShow:f,...p})})},l.__docgenInfo={description:``,methods:[],displayName:`RadioControl`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Type'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'example'`,computed:!1}},options:{defaultValue:{value:`[]`,computed:!1},required:!1},hideErrorMessage:{defaultValue:{value:`false`,computed:!1},required:!1},shouldShow:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var d=t({Disabled:()=>_,Primary:()=>p,WithColumns:()=>m,WithDescription:()=>g,WithPlainArray:()=>h,__namedExportsOrder:()=>v,default:()=>f}),f,p,m,h,g,_,v;function y(){return(y=e((()=>{u(),f={title:`Components/RadioControl`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Form field name, used by React Hook Form for registration.`},label:{control:`text`,description:`Field label displayed above the select.`},description:{control:`text`,description:`Optional helper text displayed below the label.`},columns:{control:`number`,default:1,description:`Number of columns to display the radio buttons in.`},required:{control:`boolean`,description:`Marks the field as required.`},disabled:{control:`boolean`,description:`Disables user interaction with the select.`},registerOptions:{control:`object`,description:`Validation rules passed directly to React Hook Form.`},wrapperProps:{control:`object`,description:"Generic props, for example, `className`, to apply to the `Field` wrapper component"},hideErrorMessage:{control:`boolean`,default:`false`,description:`Hides the error message text`},shouldShow:{control:`boolean`,default:`true`,description:`Whether to render tshe field, useful for conditional form elements`},attributes:{control:`object`,description:"Generic input props, for example, `className`, to apply to the design-system form field component"}}},p={args:{label:`Type`,options:[{label:`A`,value:`a`},{label:`B`,value:`b`}],registerOptions:{required:`A type is required`},wrapperProps:{}}},m={args:{label:`Which district do you prefer?`,name:`district`,registerOptions:{required:`A district is required`},columns:3,options:[{label:`Centrum`,value:`a`},{label:`Nieuw-West`,value:`b`},{label:`Noord`,value:`c`},{label:`Oost`,value:`d`},{label:`Weesp`,value:`e`},{label:`West`,value:`f`},{label:`Westpoort`,value:`g`},{label:`Zuid`,value:`h`},{label:`Zuidoost`,value:`i`}]}},h={args:{label:`Type`,name:`type`,options:[`A`,`B`,`C`],registerOptions:{required:`A type is required`},wrapperProps:{}}},g={args:{label:`Type`,name:`type1`,options:[{label:`A`,value:`a`},{label:`B`,value:`b`}],description:`A type is required`,registerOptions:{required:`You must select a type`}}},_={args:{label:`Disabled select a type`,name:`type2`,options:[{label:`A`,value:`a`},{label:`B`,value:`b`}],disabled:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Type',
    name: 'type',
    options: ['A', 'B', 'C'],
    registerOptions: {
      required: 'A type is required'
    },
    wrapperProps: {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Primary`,`WithColumns`,`WithPlainArray`,`WithDescription`,`Disabled`]})))()}export{y as a,g as i,d as n,m as r,_ as t};