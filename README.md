# storybook-issues
Minimal reproduction cases for [storybookjs/storybook](https://github.com/storybookjs/storybook).

Use branches to access different reproduction cases.

## Issue reproduced

[#8885 - Addon-docs : Source-loader warning when using CSF Stories with MDX Docs](https://github.com/storybookjs/storybook/issues/8885)

## Reproduction

1. `git clone -b 8885 --single-branch git@github.com:MatthisLT/storybook-cases.git`
2. `npm install`
3. `npm run storybook`
4. Visit [http://localhost:6006/?path=/story/ui-components-button--basic](http://localhost:6006/?path=/story/ui-components-button--basic)
