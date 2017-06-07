"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countdown(count) {
    var timer = setInterval(function (_) {
        count--;
        if (count === -1)
            clearInterval(timer);
    }, 1000);
}
exports.countdown = countdown;
