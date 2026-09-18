import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,f as i,m as a,n as o,p as s,r as c,y as l}from"./iframe-7DWDyYL-.js";import{F as u,N as d,O as f,g as p,i as m,o as h,t as g,w as _}from"./src-DBvqa9dU.js";import{a as v,c as y,d as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D}from"./schemas-BORPculs.js";var O,k,A;function j(){return(j=e((()=>{r(),O=t(),k=n(),A=({duration:e=`8s`,showGrid:t=!0,theme:n=`light`,className:r=``,size:i=140})=>{let a=(0,O.useId)().replace(/:/g,``),o=`
    .ams-spinner-${a} {
      --ams-red: #EC1C24;
      --text-color: #333;
      --grid-color: rgba(0, 0, 0, 0.08);
      --duration: ${e};
      --size: ${typeof i==`number`?`${i}px`:i};
      
      align-items: center;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      gap: var(--ams-space-m);
    }

    /* Accessibility: Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      .ams-spinner-${a} {
        --duration: 0s !important;
      }
      .ams-spinner-${a} * {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
      }
    }

    /* Theme Logic */
    .ams-spinner-theme-dark-${a} {
      --text-color: #e0e0e0;
      --grid-color: rgba(255, 255, 255, 0.1);
    }

    /* Auto: System Preference OR Class-based */
    @media (prefers-color-scheme: dark) {
      .ams-spinner-theme-auto-${a} {
        --text-color: #e0e0e0;
        --grid-color: rgba(255, 255, 255, 0.1);
      }
    }
    
    :where(.dark) .ams-spinner-theme-auto-${a} {
      --text-color: #e0e0e0;
      --grid-color: rgba(255, 255, 255, 0.1);
    }

    .ams-spinner-theme-light-${a} {
      --text-color: #333;
      --grid-color: rgba(0, 0, 0, 0.08);
    }

    .spinner-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      user-select: none;
    }

    .board-container {
      position: relative;
      width: var(--size);
      height: var(--size);
      overflow: hidden;
      border-radius: 8px;
    }

    .board {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10%; /* Relative gap */
      width: 100%;
      height: 100%;
      position: relative;
    }

    /* Grid Lines */
    .has-grid::before,
    .has-grid::after {
      content: '';
      position: absolute;
      background: var(--grid-color);
      z-index: 0;
      opacity: 0;
      animation: gridFade-${a} var(--duration) infinite;
    }

    .has-grid::before {
      width: 2px;
      height: 100%;
      left: calc(33.33% - 1px);
      box-shadow: calc(var(--size) / 3 + 1px) 0 0 var(--grid-color);
    }

    .has-grid::after {
      height: 2px;
      width: 100%;
      top: calc(33.33% - 1px);
      box-shadow: 0 calc(var(--size) / 3 + 1px) 0 var(--grid-color);
    }

    .cell {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }

    /* Marks scale relative to size */
    .mark-x {
      width: calc(var(--size) / 6);
      height: calc(var(--size) / 6);
      position: relative;
      opacity: 0;
      transform-origin: center;
    }
    .mark-x::before, .mark-x::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: calc(var(--size) / 28); /* Match O border thickness */
      background-color: var(--ams-red);
      border-radius: 2px;
    }
    .mark-x::before { transform: translateY(-50%) rotate(45deg); }
    .mark-x::after { transform: translateY(-50%) rotate(-45deg); }

    .mark-o {
      width: calc(var(--size) / 6.5);
      height: calc(var(--size) / 6.5);
      border: calc(var(--size) / 28) solid var(--text-color);
      border-radius: 50%;
      box-sizing: border-box;
      opacity: 0;
    }

    /* Animation assignments */
    .x1 { animation: cheerX1-${a} var(--duration) infinite; }
    .x2 { animation: cheerX2-${a} var(--duration) infinite; }
    .x3 { animation: cheerX3-${a} var(--duration) infinite; }
    .o1 { animation: fallO1-${a} var(--duration) infinite; }
    .o2 { animation: fallO2-${a} var(--duration) infinite; }

    @keyframes cheerX1-${a} {
      0%, 10% { opacity: 0; transform: scale(0.5); }
      11%, 66% { opacity: 1; transform: scale(1); }
      70%, 78%, 86% { opacity: 1; transform: scale(1.3); }
      74%, 82%, 90% { opacity: 1; transform: scale(1); }
      93%, 100% { opacity: 0; transform: scale(1); }
    }

    @keyframes cheerX2-${a} {
      0%, 27% { opacity: 0; transform: scale(0.5); }
      28%, 66% { opacity: 1; transform: scale(1); }
      70%, 78%, 86% { opacity: 1; transform: scale(1.3); }
      74%, 82%, 90% { opacity: 1; transform: scale(1); }
      93%, 100% { opacity: 0; transform: scale(1); }
    }

    @keyframes cheerX3-${a} {
      0%, 45% { opacity: 0; transform: scale(0.5); }
      46%, 66% { opacity: 1; transform: scale(1); }
      70%, 78%, 86% { opacity: 1; transform: scale(1.3); }
      74%, 82%, 90% { opacity: 1; transform: scale(1); }
      93%, 100% { opacity: 0; transform: scale(1); }
    }

    @keyframes fallO1-${a} {
      0%, 18% { opacity: 0; transform: scale(0.5); }
      19%, 62% { opacity: 1; transform: scale(1) translateY(0); }
      70%, 100% { opacity: 0; transform: scale(1) translateY(calc(var(--size) * 1.07)) rotate(45deg); }
    }

    @keyframes fallO2-${a} {
      0%, 36% { opacity: 0; transform: scale(0.5); }
      37%, 62% { opacity: 1; transform: scale(1) translateY(0); }
      70%, 100% { opacity: 0; transform: scale(1) translateY(calc(var(--size) * 1.07)) rotate(-45deg); }
    }

    @keyframes gridFade-${a} {
      0%, 1% { opacity: 0; }
      4%, 90% { opacity: 1; }
      94%, 100% { opacity: 0; }
    }
  `,s=`ams-spinner-theme-${n}-${a}`,c=[`ams-spinner-`+a,s,r].filter(Boolean).join(` `);return(0,k.jsxs)(`div`,{className:c,children:[(0,k.jsx)(`style`,{children:o}),(0,k.jsx)(`div`,{className:`spinner-wrap`,children:(0,k.jsx)(`div`,{className:`board-container`,children:(0,k.jsxs)(`div`,{className:`board ${t?`has-grid`:``}`,children:[(0,k.jsx)(`div`,{className:`cell`,children:(0,k.jsx)(`div`,{className:`mark-o o1`})}),(0,k.jsx)(`div`,{className:`cell`,children:(0,k.jsx)(`div`,{className:`mark-x x2`})}),(0,k.jsx)(`div`,{className:`cell`}),(0,k.jsx)(`div`,{className:`cell`}),(0,k.jsx)(`div`,{className:`cell`,children:(0,k.jsx)(`div`,{className:`mark-x x1`})}),(0,k.jsx)(`div`,{className:`cell`}),(0,k.jsx)(`div`,{className:`cell`}),(0,k.jsx)(`div`,{className:`cell`,children:(0,k.jsx)(`div`,{className:`mark-x x3`})}),(0,k.jsx)(`div`,{className:`cell`,children:(0,k.jsx)(`div`,{className:`mark-o o2`})})]})})}),(0,k.jsx)(l,{children:`Even geduld...`})]})},A.__docgenInfo={description:`AmsterdamTicTacToeLoader: A reusable TypeScript React component.
* Implements a Tic-Tac-Toe victory sequence (Amsterdam crosses)
with gravity-defying 'O' markers and celebratory pulses.`,methods:[],displayName:`AmsterdamTicTacToeLoader`,props:{duration:{required:!1,tsType:{name:`string`},description:`CSS duration string (e.g., '8s', '5000ms'). Default is '8s'.`,defaultValue:{value:`'8s'`,computed:!1}},showGrid:{required:!1,tsType:{name:`boolean`},description:`Whether to show the Tic-Tac-Toe grid lines. Default is true.`,defaultValue:{value:`true`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark' | 'auto'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`},{name:`literal`,value:`'auto'`}]},description:`Theme of the spinner. 'auto' follows system preferences. Default is
'light'.`,defaultValue:{value:`'light'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional class name for the wrapper.`,defaultValue:{value:`''`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Size of the spinner. Number (px) or CSS string. Default is 140.`,defaultValue:{value:`140`,computed:!1}}}}})))()}var M;function N(){return(N=e((()=>{T(),M=x({name:v({error:()=>`Vul uw naam in`}).min(1,{error:`Vul uw naam in`}),email:v({error:()=>`Vul uw e-mailadres in`}).min(1,{error:`Vul uw e-mailadres in`}).email({error:()=>`Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl`}),message:v({error:()=>`Vul uw bericht in`}).min(1,{error:`Vul uw bericht in`}),gender:D([`man`,`vrouw`,`non_binair`,`zeg_ik_liever_niet`],{message:`Vul uw geslacht in`}),interests:C(D([`newsletters`,`product_updates`,`events_webinars`])).min(1,{message:`Selecteer minimaal één interesse`})})})))()}var P,F,I;function L(){return(L=e((()=>{r(),P=t(),d(),g(),y(),E(),j(),N(),F=n(),I=()=>{let e=u({resolver:S(M),defaultValues:{name:``,email:``,message:``,interests:[]}}),[t,n]=(0,P.useState)(!1),r=(0,P.useRef)(!1),d=async e=>{if(!r.current){r.current=!0,console.log(`Form data:`,e);try{await new Promise(e=>{setTimeout(()=>{n(!0),e()},1500)})}finally{r.current=!1}}},g=Object.keys(e.formState.errors).length>0,v=b(e.formState.errors);return(0,P.useEffect)(()=>{if(!e.formState.isSubmitting)return;let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=t}},[e.formState.isSubmitting]),t?(0,F.jsx)(i,{paddingBottom:`x-large`,paddingTop:`large`,children:(0,F.jsxs)(i.Cell,{span:{narrow:4,medium:8,wide:6},className:`ams-mb-xl`,children:[(0,F.jsx)(s,{level:1,size:`level-3`,className:`ams-mb-m`,children:`Contactformulier`}),(0,F.jsx)(o,{heading:`Succes!`,headingLevel:2,severity:`success`,children:(0,F.jsx)(l,{children:`Het formulier is verzonden. We hebben je gegevens ontvangen.`})})]})}):(0,F.jsx)(i,{paddingBottom:`x-large`,paddingTop:`large`,children:(0,F.jsxs)(i.Cell,{span:{narrow:4,medium:8,wide:8},className:`ams-mb-xl`,children:[(0,F.jsx)(s,{level:1,size:`level-3`,className:`ams-mb-m`,children:`Contactformulier`}),(0,F.jsx)(l,{className:`ams-mb-m`,children:`Dit formulier is een eenvoudig contactformulier met vijf verplichte velden. Validatie vindt plaats bij het verzenden.`}),(0,F.jsx)(l,{className:`ams-mb-m`,children:`Het doel van deze demo is om de meest eenvoudige formulier-validatie te laten zien. Elk veld is verplicht en het e-mailadres moet een geldig formaat hebben. In tegenstelling tot complexere formulieren zijn er geen regels tussen velden nodig — waardoor dit een helder voorbeeld is van eenvoudige validatie.`}),(0,F.jsxs)(f,{form:e,onSubmit:d,children:[e.formState.isSubmitting&&(0,F.jsx)(w,{children:(0,F.jsx)(A,{})}),g&&(0,F.jsx)(a,{errors:v,headingLevel:4,className:`ams-mb-m`,"data-testid":`error-alert`}),(0,F.jsx)(h,{label:`Naam`,name:`name`,registerOptions:{required:!0},className:`ams-mb-m`}),(0,F.jsx)(h,{label:`E-mailadres`,type:`text`,inputMode:`email`,autoComplete:`email`,name:`email`,registerOptions:{required:!0},className:`ams-mb-m`}),(0,F.jsx)(m,{label:`Opmerkingen`,name:`message`,registerOptions:{required:!0},className:`ams-mb-m`}),(0,F.jsx)(p,{label:`Geslacht`,name:`gender`,options:[{label:`Man`,value:`man`},{label:`Vrouw`,value:`vrouw`},{label:`Non-binair`,value:`non_binair`},{label:`Zeg ik liever niet`,value:`zeg_ik_liever_niet`}],registerOptions:{required:!0},wrapperProps:{className:`ams-mb-m`}}),(0,F.jsx)(_,{label:`Interesses`,name:`interests`,description:`Selecteer minimaal één optie die op jou van toepassing is`,options:[{label:`Nieuwsbrieven`,value:`newsletters`},{label:`Productupdates`,value:`product_updates`},{label:`Evenementen en webinars`,value:`events_webinars`}],registerOptions:{required:!0},wrapperProps:{className:`ams-mb-xl`}}),(0,F.jsx)(`div`,{children:(0,F.jsx)(c,{type:`submit`,children:`Verzenden`})})]})]})})},I.__docgenInfo={description:``,methods:[],displayName:`ContactForm`}})))()}var R,z,B;function V(){return(V=e((()=>{L(),R={title:`Examples/ContactForm`,component:I,parameters:{layout:`centered`,docs:{source:{code:`
          import {
            Alert,
            Button,
            Grid,
            Heading,
            InvalidFormAlert,
            Paragraph,
          } from '@amsterdam/design-system-react';
          import { useRef, useState } from 'react';
          import { useForm } from 'react-hook-form';
          import {
            CheckboxControlGroup,
            FormProvider,
            mapErrorsToAlert,
            RadioControl,
            TextAreaControl,
            TextInputControl,
          } from '@amsterdam/ee-ads-rhf';
          import { zodResolver } from '@hookform/resolvers/zod';
          import contactFormSchema, { ContactFormData } from './schema';
          import Loader from './components/Loader/Loader';

          // This is a simple React Hook Form example that validates using a Zod schema
          const ContactForm = () => {
            const form = useForm<ContactFormData>({
              resolver: zodResolver(contactFormSchema),
              defaultValues: {
                name: '',
                email: '',
                message: '',
                interests: [],
              },
            });

            const [isSubmitted, setIsSubmitted] = useState(false);
            const isSubmittingRef = useRef(false);

            // onSubmit will only fire if the form is valid
            const onSubmit = async (data: ContactFormData) => {
              // Prevent duplicate submissions
              if (isSubmittingRef.current) return;
              isSubmittingRef.current = true;

              console.log('Form data:', data);

              /**
               * Use setTimeout to Simulate API call
               * - Here's where validation can happen
               * - Here's where you can show a post-submission success component
               * or redirect the user to a new page
               */
              setTimeout(() => {
                setIsSubmitted(true);
                isSubmittingRef.current = false;
              }, 1500);
            };

            const showErrors = Object.keys(form.formState.errors).length > 0;
            const alertErrors = mapErrorsToAlert(form.formState.errors);

            if (isSubmitted) {
              return (
                <Grid paddingBottom="x-large" paddingTop="large">
                  <Grid.Cell
                    span={{ narrow: 4, medium: 8, wide: 6 }}
                    className="ams-mb-xl"
                  >
                    <Heading level={1} size="level-3" className="ams-mb-m">
                      Contactformulier
                    </Heading>

                    <Alert heading="Succes!" headingLevel={2} severity="success">
                      <Paragraph>
                        Het formulier is verzonden. We hebben je gegevens ontvangen.
                      </Paragraph>
                    </Alert>
                  </Grid.Cell>
                </Grid>
              );
            }

            return (
              <Grid paddingBottom="x-large" paddingTop="large">
                <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }} className="ams-mb-xl">
                  <Heading level={1} size="level-3" className="ams-mb-m">
                    Contactformulier
                  </Heading>

                  <Paragraph className="ams-mb-m">
                    Dit formulier is een eenvoudig contactformulier met vijf verplichte
                    velden. Validatie vindt plaats bij het verzenden.
                  </Paragraph>

                  <Paragraph className="ams-mb-m">
                    Het doel van deze demo is om de meest eenvoudige formulier-validatie
                    te laten zien. Elk veld is verplicht en het e-mailadres moet een
                    geldig formaat hebben. In tegenstelling tot complexere formulieren
                    zijn er geen regels tussen velden nodig — waardoor dit een helder
                    voorbeeld is van eenvoudige validatie.
                  </Paragraph>

                  <FormProvider form={form} onSubmit={onSubmit}>
                    {/* Fake loader to simulate API request */}
                    {form.formState.isSubmitting && <Loader />}
                    {showErrors && (
                      <InvalidFormAlert
                        errors={alertErrors}
                        headingLevel={4}
                        className="ams-mb-m"
                        data-testid="error-alert"
                      />
                    )}

                    <TextInputControl<ContactFormData>
                      label="Naam"
                      name="name"
                      registerOptions={{ required: true }}
                      className="ams-mb-m"
                    />

                    <TextInputControl<ContactFormData>
                      label="E-mailadres"
                      type="text"
                      inputMode="email"
                      autoComplete="email"
                      name="email"
                      registerOptions={{
                        required: true,
                      }}
                      className="ams-mb-m"
                    />

                    <TextAreaControl<ContactFormData>
                      label="Opmerkingen"
                      name="message"
                      registerOptions={{ required: true }}
                      className="ams-mb-m"
                    />

                    <RadioControl<ContactFormData>
                      label="Geslacht"
                      name="gender"
                      options={[
                        { label: 'Man', value: 'man' },
                        { label: 'Vrouw', value: 'vrouw' },
                        { label: 'Non-binair', value: 'non_binair' },
                        { label: 'Zeg ik liever niet', value: 'zeg_ik_liever_niet' },
                      ]}
                      registerOptions={{ required: true }}
                      wrapperProps={{
                        className: 'ams-mb-m',
                      }}
                    />

                    <CheckboxControlGroup<ContactFormData>
                      label="Interesses"
                      name="interests"
                      description="Selecteer minimaal één optie die op jou van toepassing is"
                      options={[
                        { label: 'Nieuwsbrieven', value: 'newsletters' },
                        { label: 'Productupdates', value: 'product_updates' },
                        { label: 'Evenementen en webinars', value: 'events_webinars' },
                      ]}
                      registerOptions={{ required: true }}
                      wrapperProps={{
                        className: 'ams-mb-xl',
                      }}
                    />

                    <div>
                      <Button type="submit">Verzenden</Button>
                    </div>
                  </FormProvider>
                </Grid.Cell>
              </Grid>
            );
          };
        `}}},tags:[`autodocs`]},z={args:{}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...z.parameters?.docs?.source}}},B=[`Primary`]})))()}V();export{z as Primary,B as __namedExportsOrder,R as default};