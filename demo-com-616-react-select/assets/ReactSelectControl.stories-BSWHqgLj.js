import{j as o}from"./iframe-iYxTHeLQ.js";import{u as m,F as g,b as h}from"./index.esm-CA_qzDY0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpsacvjT.js";import"./index-BqzKUWfk.js";const t=({label:i="Type",name:r="example",options:s=[],isMulti:u=!1,description:d,registerOptions:v,wrapperProps:b,...c})=>{const p=m({defaultValues:{[r]:""}});return o.jsx(g,{...p,children:o.jsx(h,{label:i,name:r,options:s,isMulti:u,description:d,registerOptions:v,wrapperProps:b,...c})})};t.__docgenInfo={description:"",methods:[],displayName:"ReactSelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1},isMulti:{defaultValue:{value:"false",computed:!1},required:!1}}};const q={title:"Components/ReactSelectControl",component:t,tags:["autodocs"],argTypes:{label:{control:"text",description:"The react-select label"},name:{control:"text",description:"The react-select name"},description:{control:"text",description:"Optional description text"},options:{control:"object",description:"Array of options that populate the select menu"},registerOptions:{control:"object",description:"..."},isMulti:{control:"boolean",description:"Support multiple selected options"},disabled:{control:"boolean"}}},e={args:{label:"Province",name:"province",options:[{label:"Groningen",value:"gr"},{label:"Fryslân (Friesland)",value:"fr"},{label:"Drenthe",value:"dr"},{label:"Overijssel",value:"ov"},{label:"Flevoland",value:"fl"},{label:"Gelderland",value:"ge"},{label:"Utrecht",value:"ut"},{label:"Noord-Holland",value:"nh"},{label:"Zuid-Holland",value:"zh"},{label:"Zeeland",value:"ze"},{label:"Noord-Brabant",value:"nb"},{label:"Limburg",value:"li"}],registerOptions:{required:"A province is required"},wrapperProps:{}}},l={args:{label:"Province",name:"province1",options:["Groningen","Fryslân (Friesland)","Drenthe","Overijssel","Flevoland","Gelderland","Utrecht","Noord-Holland","Zuid-Holland","Zeeland","Noord-Brabant","Limburg"],registerOptions:{required:"A province is required"},wrapperProps:{}}},n={args:{label:"Province",name:"province2",options:[{label:"Groningen",value:"gr"},{label:"Fryslân (Friesland)",value:"fr"},{label:"Drenthe",value:"dr"},{label:"Overijssel",value:"ov"},{label:"Flevoland",value:"fl"},{label:"Gelderland",value:"ge"},{label:"Utrecht",value:"ut"},{label:"Noord-Holland",value:"nh"},{label:"Zuid-Holland",value:"zh"},{label:"Zeeland",value:"ze"},{label:"Noord-Brabant",value:"nb"},{label:"Limburg",value:"li"}],description:"A province is required",registerOptions:{required:"You must select a province"}}},a={args:{label:"Disabled province",name:"province3",options:[{label:"Groningen",value:"gr"},{label:"Fryslân (Friesland)",value:"fr"},{label:"Drenthe",value:"dr"},{label:"Overijssel",value:"ov"},{label:"Flevoland",value:"fl"},{label:"Gelderland",value:"ge"},{label:"Utrecht",value:"ut"},{label:"Noord-Holland",value:"nh"},{label:"Zuid-Holland",value:"zh"},{label:"Zeeland",value:"ze"},{label:"Noord-Brabant",value:"nb"},{label:"Limburg",value:"li"}],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province',
    options: [{
      label: 'Groningen',
      value: 'gr'
    }, {
      label: 'Fryslân (Friesland)',
      value: 'fr'
    }, {
      label: 'Drenthe',
      value: 'dr'
    }, {
      label: 'Overijssel',
      value: 'ov'
    }, {
      label: 'Flevoland',
      value: 'fl'
    }, {
      label: 'Gelderland',
      value: 'ge'
    }, {
      label: 'Utrecht',
      value: 'ut'
    }, {
      label: 'Noord-Holland',
      value: 'nh'
    }, {
      label: 'Zuid-Holland',
      value: 'zh'
    }, {
      label: 'Zeeland',
      value: 'ze'
    }, {
      label: 'Noord-Brabant',
      value: 'nb'
    }, {
      label: 'Limburg',
      value: 'li'
    }],
    registerOptions: {
      required: 'A province is required'
    },
    wrapperProps: {}
  }
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province1',
    options: ['Groningen', 'Fryslân (Friesland)', 'Drenthe', 'Overijssel', 'Flevoland', 'Gelderland', 'Utrecht', 'Noord-Holland', 'Zuid-Holland', 'Zeeland', 'Noord-Brabant', 'Limburg'],
    registerOptions: {
      required: 'A province is required'
    },
    wrapperProps: {}
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    name: 'province2',
    options: [{
      label: 'Groningen',
      value: 'gr'
    }, {
      label: 'Fryslân (Friesland)',
      value: 'fr'
    }, {
      label: 'Drenthe',
      value: 'dr'
    }, {
      label: 'Overijssel',
      value: 'ov'
    }, {
      label: 'Flevoland',
      value: 'fl'
    }, {
      label: 'Gelderland',
      value: 'ge'
    }, {
      label: 'Utrecht',
      value: 'ut'
    }, {
      label: 'Noord-Holland',
      value: 'nh'
    }, {
      label: 'Zuid-Holland',
      value: 'zh'
    }, {
      label: 'Zeeland',
      value: 'ze'
    }, {
      label: 'Noord-Brabant',
      value: 'nb'
    }, {
      label: 'Limburg',
      value: 'li'
    }],
    description: 'A province is required',
    registerOptions: {
      required: 'You must select a province'
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
    name: 'province3',
    options: [{
      label: 'Groningen',
      value: 'gr'
    }, {
      label: 'Fryslân (Friesland)',
      value: 'fr'
    }, {
      label: 'Drenthe',
      value: 'dr'
    }, {
      label: 'Overijssel',
      value: 'ov'
    }, {
      label: 'Flevoland',
      value: 'fl'
    }, {
      label: 'Gelderland',
      value: 'ge'
    }, {
      label: 'Utrecht',
      value: 'ut'
    }, {
      label: 'Noord-Holland',
      value: 'nh'
    }, {
      label: 'Zuid-Holland',
      value: 'zh'
    }, {
      label: 'Zeeland',
      value: 'ze'
    }, {
      label: 'Noord-Brabant',
      value: 'nb'
    }, {
      label: 'Limburg',
      value: 'li'
    }],
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const G=["Primary","WithPlainArray","WithDescription","Disabled"];export{a as Disabled,e as Primary,n as WithDescription,l as WithPlainArray,G as __namedExportsOrder,q as default};
