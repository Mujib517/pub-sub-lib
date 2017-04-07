'use strict';

var pubSub = (function (eventName) {

    var events = {};

    var subscribe = function (callback) {

        if (!events[eventName]) events[eventName] = []; //initialize with empty subscribers for first time

        events[eventName].push(callback);
    };

    var emit = function (data) {

        if (!events[eventName]) return;

        var subscribers = events[eventName];

        for (var i = 0; i < subscribers.length; i++) {
            subscribers[i](data);
        }
    };

    return {
        subscribe: subscribe,
        emit: emit
    }

});