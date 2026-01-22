import mapErrorsToAlert from './mapErrorsToAlert';

describe('mapErrorsToAlert', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('maps error object to array of { id, label } using DOM lookup', () => {
    document.body.innerHTML = `
      <input id="name" name="name" />
      <input id="email" name="email" />
    `;

    const input = {
      name: {
        type: 'required',
        message: 'Naam is verplicht',
      },
      email: {
        type: 'required',
        message: 'E-mailadres is verplicht',
      },
    };

    const result = mapErrorsToAlert(input);

    expect(result).toEqual([
      { id: '#name', label: 'Naam is verplicht' },
      { id: '#email', label: 'E-mailadres is verplicht' },
    ]);
  });

  it('returns an empty array when no errors', () => {
    const result = mapErrorsToAlert({});
    expect(result).toEqual([]);
  });

  it('handles single error correctly', () => {
    document.body.innerHTML = `
      <input id="startDate" name="startDate" />
    `;

    const result = mapErrorsToAlert({
      startDate: { type: 'required', message: 'Ongeldige datum' },
    });

    expect(result).toEqual([{ id: '#startDate', label: 'Ongeldige datum' }]);
  });

  it('handles missing DOM target gracefully', () => {
    const result = mapErrorsToAlert({
      unknownField: { type: 'required', message: 'Verplicht' },
    });

    expect(result).toEqual([{ id: '#undefined', label: 'Verplicht' }]);
  });
});
