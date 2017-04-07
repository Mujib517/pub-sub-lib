Publish Subscribe Libray
======================================================
1. Create an object
    <code>
    var pubSub=new PubSub();
    </code>
2. Subscribe

 <pre>
     var callback=function(){
        console.log('hello world');};
    
    </pre>
    <pre>
        pubSub.subscribe('eventName',callback);
     </pre>

3. Emit

    <pre>
        var data={name:'pub-sub-lib'};
    </pre>
    <pre>
        pubSub.emit('eventName',data);
    </pre>

4. Unsubscribe

    <pre>
        pubSub.unsubscribe('eventName',callback);
    </pre>