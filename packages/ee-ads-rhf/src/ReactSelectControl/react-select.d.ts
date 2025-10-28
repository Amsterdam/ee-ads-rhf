/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-select';
import type { GroupBase } from 'react-select';

declare module 'react-select/dist/declarations/src/Select' {
  // Extend the props for react-select
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
  > {
    /** Custom aria-describedby ID list (joined into input’s
     * aria-describedby) */
    customAriaDescribedBy?: string;
  }
}
