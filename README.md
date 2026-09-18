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

### Branch naming

Release Please determines the version bump from the [Conventional Commits](https://www.conventionalcommits.org/) type of the commits/PR titles it finds on `main` (also enforced by the PR title check). Name your branch with the matching type prefix so it's clear up front what kind of release it will trigger:

- `feat/...` — a new feature (bumps the minor version)
- `fix/...` — a bug fix (bumps the patch version)
- `chore/...` — maintenance work that doesn't need its own release (e.g. dependency updates, docs, refactors)

Branch off of `develop` and open your PR against `develop`, not `main`. `main` is only updated by fast-forward merging `develop` into it to trigger a release, as described in [How to create a release](./docs/how-to-create-a-release.md).

## How to contribute to this repo?

Simply create and submit an issue or pull request. You can also contact us via Teams (DV - Enablement) or Slack (#dv-enablement).

## How to update packages?

This is an npm workspaces monorepo, so dependencies live in multiple `package.json` files (root, `packages/ee-ads-rhf`, `storybook`) but share one `package-lock.json`.

**1. See what's outdated:**
```bash
npm outdated --workspaces --include-workspace-root
```
`Wanted` is the highest version allowed by the current `^`/`~` range in `package.json`; `Latest` is the newest version on npm (often a major bump).

**2. Update within the existing semver ranges (safe, no `package.json` changes):**
```bash
npm update --workspaces
```
Or target a single package/workspace:
```bash
npm update <package> -w <workspace>
```

**3. Update to a new major version (changes `package.json`):**
```bash
npm install <package>@latest -w <workspace>
```
Do this per package (or small logical group), not all at once, so it's clear which bump caused which breakage.

**4. Verify:**
```bash
npm run build
npm run test
```

> The ADS packages (`@amsterdam/design-system-*`) follow a different flow — see the next section.

## How to update ADS packages?

In `packages/ee-ads-rhf` the ADS packages are `devDependencies` (exposed as `peerDependencies`), so they must be updated separately from `storybook`.

**Update the library:**
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

> After updating, check the [ADS changelog](https://github.com/Amsterdam/design-system/blob/main/CHANGELOG.md) for breaking changes and rebuild the library with `npm run build`.