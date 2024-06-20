import { readdirSync } from 'fs';

export const getDirectories = source =>
    readdirSync(source, { withFileTypes: true }).filter(dirent => dirent.isDirectory());

export const atoms = getDirectories('packages/component/atom');
export const molecules = getDirectories('packages/component/molecule');
export const structural = getDirectories('packages/component/organism/structural');
export const business = getDirectories('packages/component/organism/business');

export const webComponentsFolder = [...atoms, ...molecules, ...structural, ...business];