import { mkdirSync, writeFileSync } from 'fs';
import { changeToCamelCase } from './utils.js';

export function createWC(webComponent) {
  const split = webComponent.split("/");
  const wcName = split[split.length - 1];
  const pathWc = webComponent;

  console.log(`Creating service ${wcName}...`);

  const baseDir = `packages/${pathWc}`;
  const baseDirSRC = `${baseDir}/src`;

  // Create directories
  mkdirSync(baseDirSRC, { recursive: true });
  mkdirSync(`${baseDirSRC}/css`, { recursive: true });
  mkdirSync(`${baseDir}/stories`, { recursive: true });


  const prefix = "wc";
  const prefixCamelCase = changeToCamelCase(prefix);
  const wcCamelCase = changeToCamelCase(wcName);

  const viewModelClassName = `${prefixCamelCase}${wcCamelCase}ViewModel`;
  const viewModelFileName = `${prefix}-${wcName}.viewmodel`;
  const viewModelFilePath = `${baseDirSRC}/${viewModelFileName}.ts`;

  const viewClassName = `${prefixCamelCase}${wcCamelCase}View`;
  const viewFileName = `${prefix}-${wcName}.view`;
  const viewFilePath = `${baseDirSRC}/${viewFileName}.ts`;

  const cssClassName = `${prefixCamelCase}${wcCamelCase}Theme`;
  const cssFileName = `${prefix}-${wcName}-theme.css`;
  const cssFilePath = `${baseDirSRC}/css/${cssFileName}.ts`;

  const storyFileName = `index.stories.ts`;
  const storyFilePath = `${baseDir}/stories/${storyFileName}`;

  const packageJsonName = `package.json`;
  const packageJsonFilePath = `${baseDir}/${packageJsonName}`;

  const indexName = `index.ts`;
  const indexFilePath = `${baseDir}/${indexName}`;

  const tagName = `${prefix}-${wcName}`;

  const literalQuote = "`";

  // css
  const cssContent =
    `import { css } from 'lit';
  
  export const ${cssClassName} = css${literalQuote}
      :host {
          display: block;
      }
    ${literalQuote};
  `;
  writeFileSync(cssFilePath, cssContent);


  // viewmodel
  const ViewModelContent = `
   import { LitElement } from 'lit';
  
   export class ${viewModelClassName} extends LitElement {}
      `;
  writeFileSync(viewModelFilePath, ViewModelContent);

  // view
  const viewContent =
    `import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
  import { ${cssClassName} } from './css/${cssFileName}';
  import { ${viewModelClassName} } from './${viewModelFileName}';
  
  export class ${viewClassName} extends ${viewModelClassName} {
    protected static finalizeStyles(styles?: CSSResultGroup | undefined): CSSResultOrNative[] {
      return [...super.finalizeStyles(styles), ${cssClassName}];
    }
  
    public render(): TemplateResult {
      return html${literalQuote} <h1>Hello ${viewClassName}!</h1> ${literalQuote};
    }
  }
  
  window.customElements.define('${tagName}', ${viewClassName});
  declare global {
    interface HTMLElementTagNameMap {
      '${tagName}': ${viewClassName};
    }
  }
  
  `
  writeFileSync(viewFilePath, viewContent);

  // story
  const storyContent = `
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
type ${wcCamelCase}Props = {
};

const meta = {
  title: 'Atom/${wcCamelCase}',
  
  argTypes: {
  },
  render: args =>
    html\`<${tagName} ></${tagName}>\`,
} satisfies Meta<${wcCamelCase}Props>;

export default meta;
type Story = StoryObj<${wcCamelCase}Props>;

export const Default: Story = {
  args: {
  },
};

`
  writeFileSync(storyFilePath, storyContent);

  // package.json
  const packageJsonContent = `
{
  "name": "@jgarcrol98/wc-${wcName}",
  "version": "0.0.1",
  "description": "",
  "author": "jgarcrol98",
  "license": "MIT",
  "main": "index.ts",
  "module": "index.ts",
  "scripts": {},
  "dependencies": {
    "lit": "3.1.3"
  },  
  "files": [],
  "publishConfig": {
    "access": "public"
  }
}
`
  writeFileSync(packageJsonFilePath, packageJsonContent);

  // index.ts
  const indexContent = `
  export * from './src/${viewFileName}';
  `
  writeFileSync(indexFilePath, indexContent);

  console.log(`End create wc ${wcName}`);
}