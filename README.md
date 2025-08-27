# ee-ads-rhf

Team responsible: Engineering Enablement team

> **Warning**
> This project is currently a prototype so will likely change in the future.

## Aims of this repo

This repository aims to provide a package combining [React Hook Form](https://react-hook-form.com) with [Amsterdam Design System](https://designsystem.amsterdam/) form components.

This project is a Node.js monorepo application with two workspaces:

### Workspaces

- `packages/dev` - A React SPA for testing the library
- `packages/ee-ads-forms` - A library wrapping Amsterdam Design System form components with [React Hook Form](https://react-hook-form.com)

## How to use this repo?

- `npm run dev` for dev watch mode; fires up a dev server at `http://localhost:5173/` (assuming port `5173` is available)
- `npm run build` to build

## Todo

### Basic components

These need either implementing and/or updating to surround the component with `forwardRef` and the necessary type updates. 

*✅ indicates a basic demo version is available with `forwardRef` and the correct types - and is consumable in the `packages/dev` application.*

- TextAreaControl (implemented in ee-react-form-demos) ✅
- CheckboxControl (implemented in ee-react-form-demos) ✅
- DateControl (implemented in ee-react-form-demos) ✅
- TextInputControl (implemented in ee-react-form-demos) ✅
- TimeControl (implemented in ee-react-form-demos) ✅
- Radio
- Select (implemented in ee-react-form-demos)
- React-select
- File input
- Switch
- Password input

### Application

- Clean up props order with spread vars (in `*Control` components)?
- Add option to use compact version of amsterdam-design-system? / inherit styles/ADS from parent application - dangerous if mismatch in versions?
- Tests
- Docs
  - Examples
- Package setup
  - Release-it (enables releases, changelog +  NPM publish)

## How to contribute to this repo?

Simply create and submit a pull request. You can also contact us via Teams (DV - Enablement) or Slack (#dv-enablement).
