Publish Subscribe Libray
======================================================
1. Create an object
    var pubSub=new PubSub();
2. Subscribe

    var callback=function(){
        console.log('hello world');
    };
    
    pubSub.subscribe('eventName',callback);

3. Emit

    var data={name:'pub-sub-lib'};
    pubSub.emit('eventName',data);
