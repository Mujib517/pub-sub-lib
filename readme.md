Publish Subscribe Libray
======================================================
1. Create an object
    <code>
    var pubSub=new PubSub();
    </code>
2. Subscribe

 <code>
    var callback=function(){
        console.log('hello world');
    };
    
    </code>
    <code>
        pubSub.subscribe('eventName',callback);
     </code>

3. Emit

    <code>
        var data={name:'pub-sub-lib'};
    </code>
    <code>
        pubSub.emit('eventName',data);
    </code>

4. Unsubscribe

    <code>
        pubSub.unsubscribe('eventName',callback);
    </code>