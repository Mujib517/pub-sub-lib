'use strict';

var pubSub = (function (eventName) {

    var events = {};

    var subscribe = function (callback) {

        if (!events[eventName]) events[eventName] = []; //initialize with empty subscribers for first time

        events[eventName].push(callback);
    };

    return {
        subscribe: subscribe,
        emit: emit
    }

});