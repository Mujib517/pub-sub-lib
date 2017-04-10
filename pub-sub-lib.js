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

PubSub.prototype.unsubscribe = function (event, callback) {
    var subscribers = this.__events[event];
    for (var i = 0; i < subscribers.length; i++) {
        if (subscribers[i] === callback) subscribers.splice(i, 1);
    }
};

/*test*/

// var pubSub = new PubSub();
// var cb = function (data) { console.log('hello2',data) };
// var cb2 = function (data) { console.log('hello') };
// var cb3 = function (data) { console.log('hello3') };

// pubSub.subscribe('evt', cb, cb2, cb3);
// pubSub.subscribe('evt', cb);
// pubSub.subscribe('evt', cb);

//pubSub.unsubscribe('evt', cb);

//pubSub.multicast('evt', { data: 'data' },2);
