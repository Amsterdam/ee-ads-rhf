import z from 'zod/v4';

const contactFormSchema = z.object({
  name: z
    .string({
      error: () => 'Name is required',
    })
    .min(1, { error: 'Name is required' }),
  email: z
    .email({
      error: (issue) =>
        issue.input === undefined
          ? 'E-mail address is required'
          : 'Valid e-mail address is required',
    })
    .min(1, { error: 'E-mail address is required' }),
  message: z
    .string({
      error: () => 'Comment is required',
    })
    .min(1, { error: 'Comment is required' }),
});

// We can infer the types from the zod object rules
export type ContactFormData = z.infer<typeof contactFormSchema>;

export default contactFormSchema;
