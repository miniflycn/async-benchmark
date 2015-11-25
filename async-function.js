"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var fs = require('fs');
let totalTime = 0, totalNum = 1;
function readFile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
function start() {
    return __awaiter(this, void 0, Promise, function* () {
        yield readFile('./test.html');
    });
}
function main() {
    return __awaiter(this, void 0, Promise, function* () {
        let startTime, endTime;
        for (; totalNum <= 1000; totalNum++) {
            startTime = +new Date();
            yield start();
            endTime = +new Date();
            totalTime += endTime - startTime;
        }
        console.log(`spend time == ${totalTime}ms, average == ${totalTime / totalNum}ms`);
    });
}
main();
