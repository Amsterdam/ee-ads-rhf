import{j as o}from"./iframe-DgOPTgh_.js";import{u as p,F as m,S as g}from"./index.esm-CuLVOd4D.js";import"./preload-helper-PPVm8Dsz.js";const s=({label:i="Type",name:r="example",options:t=[],description:d,registerOptions:u,wrapperProps:b,...v})=>{const c=p({defaultValues:{[r]:""}});return o.jsx(m,{...c,children:o.jsx(g,{label:i,name:r,options:t,description:d,registerOptions:u,wrapperProps:b,...v})})};s.__docgenInfo={description:"",methods:[],displayName:"SelectControl",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'example'",computed:!1}},options:{defaultValue:{value:"[]",computed:!1},required:!1}}};const N={title:"Components/SelectControl",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The checkbox label"},description:{control:"text",description:"Optional description text"},disabled:{control:"boolean"}}},e={args:{label:"Province",options:[{label:"Groningen",value:"gr"},{label:"Fryslân (Friesland)",value:"fr"},{label:"Drenthe",value:"dr"},{label:"Overijssel",value:"ov"},{label:"Flevoland",value:"fl"},{label:"Gelderland",value:"ge"},{label:"Utrecht",value:"ut"},{label:"Noord-Holland",value:"nh"},{label:"Zuid-Holland",value:"zh"},{label:"Zeeland",value:"ze"},{label:"Noord-Brabant",value:"nb"},{label:"Limburg",value:"li"}],registerOptions:{required:"A province is required"},wrapperProps:{className:"ams-mb-m"}}},l={args:{label:"Province",options:["Groningen","Fryslân (Friesland)","Drenthe","Overijssel","Flevoland","Gelderland","Utrecht","Noord-Holland","Zuid-Holland","Zeeland","Noord-Brabant","Limburg"],registerOptions:{required:"A province is required"},wrapperProps:{className:"ams-mb-m"}}},a={args:{label:"Province",options:[{label:"Groningen",value:"gr"},{label:"Fryslân (Friesland)",value:"fr"},{label:"Drenthe",value:"dr"},{label:"Overijssel",value:"ov"},{label:"Flevoland",value:"fl"},{label:"Gelderland",value:"ge"},{label:"Utrecht",value:"ut"},{label:"Noord-Holland",value:"nh"},{label:"Zuid-Holland",value:"zh"},{label:"Zeeland",value:"ze"},{label:"Noord-Brabant",value:"nb"},{label:"Limburg",value:"li"}],description:"A province is required",registerOptions:{required:"You must select a province"}}},n={args:{label:"Disabled province",options:[{label:"Groningen",value:"gr"},{label:"Fryslân (Friesland)",value:"fr"},{label:"Drenthe",value:"dr"},{label:"Overijssel",value:"ov"},{label:"Flevoland",value:"fl"},{label:"Gelderland",value:"ge"},{label:"Utrecht",value:"ut"},{label:"Noord-Holland",value:"nh"},{label:"Zuid-Holland",value:"zh"},{label:"Zeeland",value:"ze"},{label:"Noord-Brabant",value:"nb"},{label:"Limburg",value:"li"}],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
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
    wrapperProps: {
      className: 'ams-mb-m'
    }
  }
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
    options: ['Groningen', 'Fryslân (Friesland)', 'Drenthe', 'Overijssel', 'Flevoland', 'Gelderland', 'Utrecht', 'Noord-Holland', 'Zuid-Holland', 'Zeeland', 'Noord-Brabant', 'Limburg'],
    registerOptions: {
      required: 'A province is required'
    },
    wrapperProps: {
      className: 'ams-mb-m'
    }
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Province',
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled province',
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
}`,...n.parameters?.docs?.source}}};const y=["Primary","WithPlainArray","WithDescription","Disabled"];export{n as Disabled,e as Primary,a as WithDescription,l as WithPlainArray,y as __namedExportsOrder,N as default};
