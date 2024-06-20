import ejs from 'ejs';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { changeToCamelCase } from '../utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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


  const bindDataObj = {
    cssClassName,
    cssFileName,
    viewModelFileName,
    viewModelClassName,
    viewClassName,
    tagName,
    wcName,
    wcCamelCase
  }

  // css
  const templateThemeCss = readFileSync(path.resolve(__dirname, './templates/wc:create/src/css/theme.css.ts.ejs'), 'utf8');
  const ThemeCssContent = ejs.render(templateThemeCss, bindDataObj);
  writeFileSync(cssFilePath, ThemeCssContent);


  // viewmodel
  const templateViewModel = readFileSync(path.resolve(__dirname, './templates/wc:create/src/viewmodel.ts.ejs'), 'utf8');
  const ViewModelContent = ejs.render(templateViewModel, bindDataObj);
  writeFileSync(viewModelFilePath, ViewModelContent);

  // view 
  const templateView = readFileSync(path.resolve(__dirname, './templates/wc:create/src/view.ts.ejs'), 'utf8');
  const viewContent = ejs.render(templateView, bindDataObj);
  writeFileSync(viewFilePath, viewContent);

  // story
  const templateIndexStory = readFileSync(path.resolve(__dirname, './templates/wc:create/stories/index.stories.ts.ejs'), 'utf8');
  const indexStoryContent = ejs.render(templateIndexStory, { wcName, wcCamelCase, tagName });
  writeFileSync(storyFilePath, indexStoryContent);

  // package.json
  const templatePackageJson = readFileSync(path.resolve(__dirname, './templates/wc:create/package.json.ejs'), 'utf8');
  const packageJsonContent = ejs.render(templatePackageJson, { wcName });
  writeFileSync(packageJsonFilePath, packageJsonContent);

  // index.ts
  const templateIndex = readFileSync(path.resolve(__dirname, './templates/wc:create/index.ts.ejs'), 'utf8');
  const indexContent = ejs.render(templateIndex, { viewFileName });
  writeFileSync(indexFilePath, indexContent);

  console.log(`End create wc ${wcName}`);
}