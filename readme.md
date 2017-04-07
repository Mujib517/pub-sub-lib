Publish Subscribe Libray
======================================================
1. Create an object
    <pre>
    var pubSub=new PubSub();
    </pre>
2. Subscribe

    <pre>
    var callback=function(){
    console.log('hello world');
    };

    pubSub.subscribe('eventName',callback);
    </pre>

3. Emit

    <pre>
    var data={
        name:'pub-sub-lib'
    };

    pubSub.emit('eventName',data);
    </pre>

4. Unsubscribe

    <pre>
    pubSub.unsubscribe('eventName',callback);
    </pre>