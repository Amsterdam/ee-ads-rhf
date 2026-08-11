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

This project uses [Release Please](https://github.com/googleapis/release-please) and [Semantic Versioning](https://semver.org/), which will automatically run on successful merges to `main`. This action is followed by an NPM publish step. Please read the [How to create a release](./docs/how-to-create-a-release.md) for more information.

## How to contribute to this repo?

Simply create and submit an issue or pull request. You can also contact us via Teams (DV - Enablement) or Slack (#dv-enablement).

## How to update ADS packages?

In `packages/ee-ads-rhf` the ADS packages are `devDependencies` (exposed as `peerDependencies`), so they must be updated separately from `storybook`.

The `devDependencies` (used to build and test the library) should always track the latest ADS release. The `peerDependencies` (the compatibility contract consumers of this package rely on) should only be bumped when ADS ships a **major** version — minor/patch ADS releases are backwards compatible, so raising the peer floor for those would just force every consumer to update their ADS packages for no reason.

**Update the library's devDependencies:**
```bash
npm install \
  @amsterdam/design-system-assets@latest \
  @amsterdam/design-system-css@latest \
  @amsterdam/design-system-react@latest \
  @amsterdam/design-system-react-icons@latest \
  @amsterdam/design-system-tokens@latest \
  --save-dev \
  --workspace=packages/ee-ads-rhf
```

**Update Storybook:**
```bash
npm install \
  @amsterdam/design-system-assets@latest \
  @amsterdam/design-system-css@latest \
  @amsterdam/design-system-react@latest \
  @amsterdam/design-system-react-icons@latest \
  @amsterdam/design-system-tokens@latest \
  --workspace=storybook
```

**Only if the update includes a major version bump**, also raise the floor in `packages/ee-ads-rhf/package.json`'s `peerDependencies` to the new major (e.g. `^2.3.0` → `^3.0.0`). Leave the `peerDependencies` untouched for minor/patch updates.

> After updating, check the [ADS changelog](https://github.com/Amsterdam/design-system/blob/main/CHANGELOG.md) for breaking changes and rebuild the library with `npm run build`.