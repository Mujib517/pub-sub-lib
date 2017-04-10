'use strict';

function PubSub() {

    //if user doesn't create object using new operator
    if (!(this instanceof PubSub)) return new PubSub();
    this.__events = {};
}

PubSub.prototype.subscribe = function () {

    var self = this;

    var event = arguments[0];
    var subscribers = Array.prototype.slice.call(arguments, 1);

    if (!self.__events[event]) self.__events[event] = [];  //initialize with empty subscriber array

    subscribers.forEach(function (subscriber) {
        self.__events[event].push(subscriber);
    });

};

PubSub.prototype.emit = function (event, data) {
    var subscribers = this.__events[event];

    if (subscribers) {
        for (var i = 0; i < subscribers.length; i++) {
            subscribers[i](data);
        }
    }
};

PubSub.prototype.broadcast = function (event, data) {
    this.emit(event, data);
};

//notify first n subscribers
PubSub.prototype.multicast = function (event, data, n) {

    var subscribers = this.__events[event];

    if (subscribers) {
        var length = subscribers.length < n ? subscribers.length : n;

        for (var i = 0; i < length; i++) {
            subscribers[i](data);
        }
    }
};

PubSub.prototype.unsubscribe = function () {

    var self = this;

    var event = arguments[0];
    var unsubscribers = Array.prototype.slice.call(arguments, 1); //get all the callbacks passed

    var subscribers = this.__events[event];

    if (subscribers) {
        unsubscribers.forEach(function (unsubscriber) {
            for (var i = 0; i < subscribers.length; i++) {
                if (subscribers[i] === unsubscriber) subscribers.splice(i, 1);
            }
        });
    }
};


PubSub.prototype.clearAll = function (event) {
    this.__events[event] = [];
};
