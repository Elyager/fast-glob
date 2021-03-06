import * as path from 'path';

import * as glob from '../../../index';

import * as utils from '../../utils';

import { IPartialOptions } from '../../../managers/options';

const options: IPartialOptions = {
	cwd: path.join(process.cwd(), process.env.BENCHMARK_CWD as string),
	unique: false
};

const timeStart = utils.timeStart();

try {
	const matches = glob.sync(['**/*', '!**/*.txt'], options);
	const memory = utils.getMemory();
	const time = utils.timeEnd(timeStart);
	const measures = utils.getMeasures(matches.length, time, memory);

	console.info(measures);
} catch {
	process.exit(0);
}
