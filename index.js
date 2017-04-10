'use strict';

function PubSub() {

    //if user doesn't create object using new operator
    if (PubSub.prototype.constructor.name !== 'PubSub') return new PubSub();
    this.__events = {};
}

PubSub.prototype.subscribe = function (event, callback) {

    if (!this.__events[event]) this.__events[event] = [];  //initialize with empty subscriber array

    this.__events[event].push(callback);
};

PubSub.prototype.emit = function (event, data) {
    var subscribers = this.__events[event];

    if (subscribers) {
        for (var i = 0; i < subscribers.length; i++) {
            subscribers[i](data);
        }
    }
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

/*test*/

// var pubSub = new PubSub();

// pubSub.subscribe('evt', function (data) { console.log('hell') });
// pubSub.subscribe('evt', function (data) { console.log('hell2') });
// pubSub.subscribe('evt', function (data) { console.log('hell3') });

// pubSub.multicast('evt', { data: 'data' },1);
