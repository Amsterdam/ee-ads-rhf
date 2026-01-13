import{j as e,G as a,B as c}from"./iframe-B4WcyFLF.js";import{u as p,F as u,T as s,C as g}from"./TimeControl-Ce1l3Zqg.js";const t=({useGrid:n=!1,gridProps:i,noValidate:d})=>{const l=p({defaultValues:{example:""}});return e.jsxs(u,{form:l,onSubmit:m=>{console.log("submitted",m)},useGrid:n,gridProps:i,noValidate:d,children:[e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:5},children:e.jsx(s,{label:"Name",name:"name",registerOptions:{required:!0},className:"ams-mb-m"})}),e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:5},children:e.jsx(s,{label:"E-mailadres",type:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-m"})}),e.jsx(a.Cell,{span:{narrow:4,medium:5,wide:5},children:e.jsx(g,{label:"A checkbox label",name:"checkbox",className:"ams-mb-m"})}),e.jsx(a.Cell,{span:{narrow:4,medium:8,wide:12},children:e.jsx(c,{type:"submit",children:"Verzenden"})})]})};t.__docgenInfo={description:"",methods:[],displayName:"FormProvider",props:{useGrid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={title:"Form/FormProvider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{useGrid:{control:"boolean",description:"Wraps children in the Grid layout"},noValidate:{control:"boolean",description:"Disables native browser validation"},gridProps:{control:"object",description:"Props passed to the Grid component"}}},r={args:{useGrid:!1}},o={args:{useGrid:!0,gridProps:{paddingBottom:"2x-large",paddingTop:"large"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    useGrid: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    useGrid: true,
    gridProps: {
      paddingBottom: '2x-large',
      paddingTop: 'large'
    }
  }
}`,...o.parameters?.docs?.source}}};const x=["Default","WithGridLayout"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithGridLayout:o,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{j as F};
