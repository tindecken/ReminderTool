"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countdown(count) {
    var timer = setInterval(function () {
        tick(count--);
        if (count === 0) {
            clearInterval(timer);
        }
    }, 1000);
}
exports.countdown = countdown;
