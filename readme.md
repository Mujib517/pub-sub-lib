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

===================================================================
5. Subscribe multiple subscribers all at once

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

6. unsubscribe multiple subscribers all at once

<pre>
    pubSub.unsubscribe('eventName',cb1,cb2);
</pre>

7. Remove all subscribers

<pre>
    pubSub.clearAll('eventName');
</pre>