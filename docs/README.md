# Adiago Docs

### Development

Run `yarn` from the parent directory to install packages for all workspaces in the yarn workspace.

To use while developing components follow these steps:

1. In the `components` directory, run `yarn link`
2. In the `docs` directory, run `yarn link @adiago/components`
3. Now, run `yarn dev` to start the dev server.

### Deployment

#### Vercel

1. Add the contents of .npmrc file to the env var `NPM_RC`.

#### Resources

https://vercel.com/guides/using-private-dependencies-with-vercel
