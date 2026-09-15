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

## Deployment

Already setup with Vercel for deployment.
