import * as fs from 'fs';

let totalTime = 0,
	totalNum = 1;

function readFile(filename): Promise<string> {
	return new Promise(function (resolve, reject) {
		fs.readFile(filename, 'utf-8', function (err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

async function start() {
	await readFile('./test.html');
}

async function main() {
	let startTime: number,
		endTime: number;
	for (; totalNum <= 1000; totalNum++) {
		startTime = +new Date();
		await start();
		endTime = +new Date();
		totalTime += endTime - startTime;
	}
	
	console.log(`spend time == ${totalTime}ms, average == ${ totalTime / totalNum }ms`);
}

main();