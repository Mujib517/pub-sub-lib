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

    or 

    pubSub.broadcast('eventName',data);

    </pre>

4. Multicast: notify first n subscribers

    <pre>
    pubSub.multicast('eventName',data,2); //notifies first two subscribers
    </pre>

5. Unsubscribe

    <pre>
    pubSub.unsubscribe('eventName',callback);
    </pre>

======================================================

6. Subscribe multiple subscribers all at once

    <pre>
    var cb1=function(data){
    console.log('hello world',data);
    };

    var cb2=function(data){
    console.log('hello world',data);
    };

    var cb3=function(data){
    console.log('hello world',data);
    };


    pubSub.subscribe('eventName',cb1,cb2,cb3);
    </pre>

7. unsubscribe multiple subscribers all at once

    <pre>
    pubSub.unsubscribe('eventName',cb1,cb2);
    </pre>

8. Remove all subscribers

    <pre>
    pubSub.clearAll('eventName');
    </pre>