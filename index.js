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


/*test*/

// var pubSub =new PubSub();

// pubSub.subscribe('evt', function (data) { console.log('hello') });
// pubSub.subscribe('evt', function (data) { console.log('hello2') });
// pubSub.subscribe('evt', function (data) { console.log('hello3') });

// pubSub.emit('evt', { data: 'data' });
