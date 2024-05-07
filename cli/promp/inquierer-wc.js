import { readdirSync } from 'fs';
import inquirer from 'inquirer';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true }).filter(dirent => dirent.isDirectory());

const atoms = getDirectories('packages/component/atom');
const molecules = getDirectories('packages/component/molecule');
const structural = getDirectories('packages/component/organism/structural');
const business = getDirectories('packages/component/organism/business');

const webComponentsFolder = [...atoms, ...molecules, ...structural, ...business];

const choicesAtoms = atoms.length > 0 ? [new inquirer.Separator(' = Atom = '), ...atoms.map(({ name }) => ({ name }))] : [];
const choicesMolecules = molecules.length > 0 ? [new inquirer.Separator(' = Molecule = '), ...molecules.map(({ name }) => ({ name }))] : [];
const choicesStructural = structural.length > 0 ? [new inquirer.Separator(' = Structural = '), ...structural.map(({ name }) => ({ name }))] : [];
const choicesBusiness = business.length > 0 ? [new inquirer.Separator(' = Business = '), ...business.map(({ name }) => ({ name }))] : [];


const result = await inquirer.prompt([
  {
    type: 'list',
    message: 'Web Components',
    name: 'wc',
    choices: [
      { name: 'All', value: 'all' },
      ...choicesAtoms,
      ...choicesMolecules,
      ...choicesStructural,
      ...choicesBusiness,
    ],
    validate(answer) {
      if (answer.length < 1) {
        return 'you can select one.';
      }
      return true;
    },
  },
]);
let webComponentPath;

if (result.wc === 'all') {
  webComponentPath = webComponentsFolder.map((webComponent) => webComponent?.path + '/' + webComponent.name + '/index.ts');
} else {
  const webComponent = webComponentsFolder.find(({ name }) => name === result.wc);
  webComponentPath = webComponent?.path + '/' + webComponent.name + '/index.ts';
}

export { webComponentPath };

