# ee-ads-rhf

Team responsible: Engineering Enablement team

## Aims of this repo

This repository provides the `@amsterdam/ee-ads-rhf` package combining [Amsterdam Design System](https://designsystem.amsterdam/) form components and [React Hook Form](https://react-hook-form.com).

This project is a Node.js monorepo application with two workspaces:

### Workspaces

- `packages/ee-ads-rhf` - A library wrapping [Amsterdam Design System](https://designsystem.amsterdam/) form components with [React Hook Form](https://react-hook-form.com)
- `storybook` - A [Storybook site](https://amsterdam.github.io/ee-ads-rhf/demo-develop/) with demos of the package's components and form examples.

## How to use this repo?

- `npm run dev` for dev watch mode; load storybook at `http://localhost:6006`
- `npm run build` to build the package

## How to publish

This project uses [Release Please](https://github.com/googleapis/release-please) and [Semantic Versioning](https://semver.org/), which will automatically run on successful merges to `main`. This action is followed by an NPM publish step.

## How to contribute to this repo?

Simply create and submit an issue or pull request. You can also contact us via Teams (DV - Enablement) or Slack (#dv-enablement).
