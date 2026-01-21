import z from 'zod/v4';

const GENDER_OPTIONS = [
  'man',
  'vrouw',
  'non_binair',
  'zeg_ik_liever_niet',
] as const;

const INTEREST_OPTIONS = [
  'newsletters',
  'product_updates',
  'events_webinars',
] as const;

const contactFormSchema = z.object({
  name: z
    .string({
      error: () => 'Naam is verplicht',
    })
    .min(1, { error: 'Naam is verplicht' }),
  email: z
    .email({
      error: (issue) =>
        issue.input === undefined
          ? 'E-mailadres is verplicht'
          : 'Voer een geldig e-mailadres in',
    })
    .min(1, { error: 'E-mailadres is verplicht' }),
  message: z
    .string({
      error: () => 'Bericht is verplicht',
    })
    .min(1, { error: 'Bericht is verplicht' }),
  gender: z.enum(GENDER_OPTIONS, { message: 'Geslacht is verplicht' }),
  interests: z
    .array(z.enum(INTEREST_OPTIONS))
    .min(1, { message: 'Selecteer minimaal één interesse' }),
});

// We kunnen de types afleiden van het zod object
export type ContactFormData = z.infer<typeof contactFormSchema>;

export default contactFormSchema;
