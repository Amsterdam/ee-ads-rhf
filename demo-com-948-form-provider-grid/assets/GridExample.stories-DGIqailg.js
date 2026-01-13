import{r as o,j as e,P as c,a as u,G as r,B as p}from"./iframe-B4WcyFLF.js";import{u as b,F as x,T as t,C as g}from"./TimeControl-Ce1l3Zqg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-45GP-phd.js";import"./index-C8s3jWjj.js";const m=()=>{const[i,s]=o.useState(!1),l=b({defaultValues:{name:"",email:"",checkbox:!1}}),n=o.useCallback(async()=>{try{s(!0),setTimeout(()=>{s(!1)},1500)}catch(d){console.log("form error!",d)}},[]);return e.jsxs(c,{children:[e.jsx(u,{className:"ams-mb-xl"}),e.jsxs(x,{form:l,onSubmit:n,useGrid:!0,gridProps:{paddingBottom:"2x-large",paddingTop:"large"},children:[e.jsx(r.Cell,{span:{narrow:4,medium:5,wide:5},children:e.jsx(t,{label:"Name",name:"name",registerOptions:{required:!0},className:"ams-mb-m"})}),e.jsx(r.Cell,{span:{narrow:4,medium:5,wide:5},children:e.jsx(t,{label:"E-mailadres",type:"email",name:"email",registerOptions:{required:!0},className:"ams-mb-m"})}),e.jsx(r.Cell,{span:{narrow:4,medium:5,wide:5},children:e.jsx(g,{label:"A checkbox label",name:"checkbox",className:"ams-mb-m"})}),e.jsx(r.Cell,{span:{narrow:4,medium:8,wide:12},children:e.jsx(p,{type:"submit",disabled:i,children:"Verzenden"})})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"GridExample"};const P={title:"Examples/GridExample",component:m,parameters:{layout:"centered",docs:{source:{code:`
        import { useCallback, useState } from 'react';
        import { SubmitHandler, useForm } from 'react-hook-form';
        import {
          CheckboxControl,
          FormProvider,
          TextInputControl,
        } from '@amsterdam/ee-ads-rhf-lib';
        import { Button, Grid, Page, PageHeader } from '@amsterdam/design-system-react';

        interface FormData {
          name: string;
          email: string;
          checkbox: boolean;
        }

        const GridExample = () => {
          const [isLoading, setIsLoading] = useState(false);

          const form = useForm<FormData>({
            defaultValues: {
              name: '',
              email: '',
              checkbox: false,
            },
          });

          const onValidSubmit: SubmitHandler<FormData> = useCallback(async () => {
            try {
              /**
               * Use setTimeout to Simulate API call
               * - Here's where validation can happen
               * - Here's where you can show a post-submission success component
               * or redirect the user to a new page
               */
              setIsLoading(true);

              setTimeout(() => {
                setIsLoading(false);
              }, 1500);
            } catch (error) {
              console.log('form error!', error);
            }
          }, []);

          return (
            <Page>
              <PageHeader className="ams-mb-xl" />
              <FormProvider
                form={form}
                onSubmit={onValidSubmit}
                useGrid
                gridProps={{ paddingBottom: '2x-large', paddingTop: 'large' }}
              >
                <Grid.Cell span={{ narrow: 4, medium: 5, wide: 5 }}>
                  <TextInputControl<FormData>
                    label="Name"
                    name="name"
                    registerOptions={{
                      required: true,
                    }}
                    className="ams-mb-m"
                  />
                </Grid.Cell>
                <Grid.Cell span={{ narrow: 4, medium: 5, wide: 5 }}>
                  <TextInputControl<FormData>
                    label="E-mailadres"
                    type="email"
                    name="email"
                    registerOptions={{
                      required: true,
                    }}
                    className="ams-mb-m"
                  />
                </Grid.Cell>
                <Grid.Cell span={{ narrow: 4, medium: 5, wide: 5 }}>
                  <CheckboxControl<FormData>
                    label="A checkbox label"
                    name="checkbox"
                    className="ams-mb-m"
                  />
                </Grid.Cell>
                <Grid.Cell span={{ narrow: 4, medium: 8, wide: 12 }}>
                  <Button type="submit" disabled={isLoading}>
                    Verzenden
                  </Button>
                </Grid.Cell>
              </FormProvider>
            </Page>
          );
        };

        export default GridExample;
        `},description:{component:"It is common to use the amsterdam-design-system Grid system with form templates. This is an example to demonstrate use of the FormProvider `useGrid` and `gridProps` props."}}},tags:["autodocs"]},a={args:{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};const y=["Primary"];export{a as Primary,y as __namedExportsOrder,P as default};
