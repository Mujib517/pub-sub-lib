'use strict';

function PubSub() {

    //if user doesn't create object using new operator
    if (!(this instanceof PubSub)) return new PubSub();
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

var pubSub = new PubSub();
var cb = function (data) { console.log('hello2') };

pubSub.subscribe('evt', function (data) { console.log('hello') });
pubSub.subscribe('evt', cb);
pubSub.subscribe('evt', function (data) { console.log('hello3') });

pubSub.unsubscribe('evt', cb);

pubSub.broadcast('evt', { data: 'data' });
