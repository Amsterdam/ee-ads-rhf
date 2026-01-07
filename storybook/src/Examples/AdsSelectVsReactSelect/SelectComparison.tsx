import {
  FormProvider,
  ReactSelectControl,
  SelectControl,
  InputAutoSelect,
} from '@amsterdam/ee-ads-rhf-lib';
import { Column, Row } from '@amsterdam/design-system-react';
import { useForm } from 'react-hook-form';
import options from '../../utils/provinces';

const SelectComparison = () => {
  const form = useForm({
    defaultValues: {
      'ads-select-1': 'DR',
      'react-select-1': 'DR',
      'ads-select-2': 'NH',
      'react-select-2': { label: 'Noord-Holland', value: 'NH' },
      'ads-select-3': 'UT',
      'react-select-3': [
        { label: 'Utrecht', value: 'UT' },
        { label: 'Zeeland', value: 'ZE' },
      ],
    },
  });

  return (
    <FormProvider form={form} onSubmit={() => {}}>
      <Column gap="large">
        <Row>
          <SelectControl
            label="Provincies"
            name="ads-select-1"
            options={options || []}
            registerOptions={{ required: 'Verplicht!' }}
          />
          <ReactSelectControl
            label="Provincies"
            name="react-select-1"
            options={options || []}
            registerOptions={{ required: 'Verplicht!' }}
          />
        </Row>
        <Row>
          <SelectControl
            label="Provincies"
            name="ads-select-2"
            options={options || []}
            registerOptions={{ required: 'Verplicht!' }}
          />
          <ReactSelectControl
            label="Provincies"
            name="react-select-2"
            options={options || []}
            registerOptions={{ required: 'Verplicht!' }}
            isMulti={false}
          />
        </Row>
        <Row>
          <SelectControl
            label="Provincies"
            name="ads-select-3"
            options={options || []}
            registerOptions={{ required: 'Verplicht!' }}
          />
          <ReactSelectControl
            label="Provincies"
            name="react-select-3"
            options={options || []}
            registerOptions={{ required: 'Verplicht!' }}
            isMulti={true}
          />
        </Row>
        <Row>
          <InputAutoSelect
            name="react-select-4"
            options={options}
            isMulti={true}
            onChange={() => {}}
            onBlur={() => {}}
          />
        </Row>
      </Column>
    </FormProvider>
  );
};

export default SelectComparison;
