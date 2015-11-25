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

function start(cb) {
	let startTime: number,
		endTime: number;
	startTime = +new Date();
	readFile('./test.html')
		.then(function () {
			endTime = +new Date();
			totalTime += endTime - startTime;
			cb();
		});
}

function main() {
	if (totalNum <= 1000) {
		totalNum++;
		start(main);
	} else {
		console.log(`spend time == ${totalTime}ms, average == ${ totalTime / totalNum }ms`);
	}
	
}

main();