import { describe, expect, it } from 'vitest';
import contactFormSchema from './schema';
import type { ContactFormData } from './schema';
import { ZodError } from 'zod';

const validData: ContactFormData = {
  name: 'Jane',
  email: 'jane@example.com',
  message: 'Hi there',
  gender: 'man',
  interests: ['newsletters'],
};

describe('contactFormSchema', () => {
  it('accepts valid data', () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects missing required top-level fields', () => {
    const invalid = { ...validData, name: '' };
    const result = contactFormSchema.safeParse(invalid);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name).toContain(
        'Naam is verplicht',
      );
    }
  });

  it('rejects invalid email', () => {
    const invalid = {
      ...validData,
      email: 'invalid-email',
    };
    const result = contactFormSchema.safeParse(invalid);
    expect(result.success).toBe(false);

    if (!result.success) {
      const error = result.error as unknown as ZodError;

      const emailError = error.issues.find(
        (e) => e.path.join('.') === 'email',
      )?.message;

      expect(emailError).toEqual('Voer een geldig e-mailadres in');
    } else {
      throw new Error('Expected validation to fail');
    }
  });
});
