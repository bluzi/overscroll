window.overscroll = function(callback) {
    if (!window.overscroll.callbacks) {
        window.overscroll.callbacks = [callback];

        var mostReventScrollEvent = 0;        

        window.addEventListener('mousewheel', function(e) {
            var timeOfEvent = new Date().getTime();
            setTimeout(() => {
                if ((timeOfEvent - 1000) > mostReventScrollEvent) {
                    for(var key in window.overscroll.callbacks) {
                        window.overscroll.callbacks[key]();
                    }
                }
            });
        });

        window.addEventListener('scroll', function(e) { mostReventScrollEvent = new Date(); });
    } else { 
        window.overscroll.callbacks.push(callback);
    }
}
