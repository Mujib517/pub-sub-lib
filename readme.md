Publish Subscribe Libray
======================================================
1. Create an object
    var pubSub=new PubSub();
2. Subscribe

 <code>
    var callback=function(){
        console.log('hello world');
    };
    
    pubSub.subscribe('eventName',callback);

     </code>

3. Emit

    <code>
    var data={name:'pub-sub-lib'};
    pubSub.emit('eventName',data);
    </code>

4. Unsubscribe

    <code>
    pubSub.unsubscribe('eventName',callback);
    </code>