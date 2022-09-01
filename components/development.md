# Adiago Components Development

To start developing locally, use the following steps:

1. In the root directory of the repo, run `yarn dev:setup`.
   > This will link the components package to the docs site.
1. Run `yarn dev:components
   > This will watch the `components/src` directory for changes and run the build.
1. In another terminal window, run `yarn dev:docs`.
   > This will start the vite dev server for the docs site.
1. Visit http://localhost:5173.

> ⚠️ If this doesn't work on your first time setting up the project, try going to the components directory and running yarn build then following the steps again.

<details>
  <summary>The Long Way</summary>
  1. In the `components` directory, run `yarn watch`.<br/>
      <code>This will watch the `src` directory for changes and run the build</code><br/>
  1. In another terminal window, run `yarn link`.<br/>
  1. Then change to the `docs` directory, and run `yarn link @adiago/components`.<br/>
  1. Now run `yarn dev` to start the docs dev server.<br/>
  1. Visit http://localhost:5173.<br/>
</details>
<br/>

## Creating a new component

> We want to mimicking Radix UI file/component structure if we have more complex components and sub-components  
> Reference: https://github.com/radix-ui/primitives/tree/main/packages/react/accordion/src

1. Create a new folder in the `src` directory with the name of your component.
1. Create a new file by the same name of your component in that folder as well as an `index.ts` file.
1. Add exports to the `{component-name}/index.ts` and to the top level `index.ts` file.

## Adding a new page to the docs

1. Create a new file in the `docs/src/pages/docs` directory with the file name `page-docs-{component-name}.tsx`.
1. Name the component `PageDocs{ComponentName}.tsx` and add it to the `index.ts` in the directory.
1. You can now visit http://localhost:5173/{ComponentName} to see your new page.

### Troubleshooting

This library is built with [Parcel](https://parceljs.org/).
I have tried esbuild, rollup and webpack. Each was either too slow or created files that did not work.

There has been an open bug in `@parcel/transformer-typescript-types` package that is interfering with Typescript 4.8.0.  
https://github.com/parcel-bundler/parcel/issues/8419

There is another bug prohibiting the use of nested/doubly exported exports. This is the reason for the extra work in the index.ts files.
https://github.com/parcel-bundler/parcel/issues/5911
