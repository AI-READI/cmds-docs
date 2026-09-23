# CMDS Specification

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

### Prerequisites/Dependencies

You will need the following installed on your system:

- [mise](https://mise.jdx.dev) - manages Node.js and pnpm versions (see `mise.toml`)

```bash
mise trust # trust the versions specified in mise.toml
mise install
pnpm install
```

## Local Development

```bash
pnpm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Versioning

You can use the version script to create a new documentation version based on the latest content in the `docs` directory. That specific set of documentation will then be preserved and accessible even as the documentation in the `docs` directory changes moving forward.

Create a new branch, update the relevant pages, and open a PR for review.

The `docs` directory is the current version (right now **0.1.1**). Older versions live in `versioned_docs/` and stay unchanged unless you edit them on purpose.

Only do these steps after all changes to the documentation for the specific version have been completed:

1. Make sure the current docs version (the `docs` directory) is ready to be frozen.
2. Update the `version` key in `package.json` for this repository.
3. Freeze it:

```bash
pnpm docusaurus docs:version 0.1.1
```

4. In `docusaurus.config.ts`, point `current` at the next version label and path (for example `0.1.2`).

The files under `docs` are then the next version you will work on. To patch an already published version, edit files under `versioned_docs/version-0.1.x/` on a branch and open a PR.

## Deployment

Already setup with Vercel for deployment.
