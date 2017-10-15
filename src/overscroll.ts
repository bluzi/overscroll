/**
 * Type declarations
 */
export type OverScrollCallback = (options: {
    direction: 'up' | 'down'
}) => any;

export interface OverScrollFunction {
    (callback: OverScrollCallback): void;
    callbacks?: OverScrollCallback[];
}

/**
 * Augment global window and navigator objects
 */
declare global {
    interface Window {
        overscroll: OverScrollFunction
    }

    interface Navigator {
        getBattery: Function;
    }
}

const overscroll: OverScrollFunction = (callback: OverScrollCallback) => {

    /**
     * Check for getBattery support. Bail out if not available.
     */
    if (!window.navigator || !window.navigator.getBattery) {
        return;
    }

    navigator.getBattery().then((battery: any) => {
        if (navigator.platform !== 'MacIntel') {
            // Not a Mac
            return;
        }

        if (overscroll.callbacks && overscroll.callbacks.length >= 0) {
            let mostReventScrollEvent: number = new Date().getTime();

            window.addEventListener('wheel', e => {
                const timeOfEvent = new Date().getTime();
                const direction = e.deltaY < 0 ? 'up' : 'down';

                const isEventWithinTimeMargin = (timeOfEvent - 1000) > mostReventScrollEvent;
                const hasScrollReachedDocumentStart = document.documentElement.scrollTop === 0 && direction === 'up';
                const hasScrollReachedDocumentEnd = (window.innerHeight + window.scrollY) >= document.body.scrollHeight && direction === 'down'

                if (isEventWithinTimeMargin && hasScrollReachedDocumentStart || hasScrollReachedDocumentEnd) {
                    overscroll.callbacks && overscroll.callbacks.forEach((callback: OverScrollCallback) => {
                        callback({direction})
                    })
                }
            });

            window.addEventListener('scroll', e => { mostReventScrollEvent = new Date().getTime(); });
        }

        overscroll.callbacks && overscroll.callbacks.push(callback);
    });
}

overscroll.callbacks = [];

/**
 * ES Module export
 */
export default overscroll;

/**
 * Set on the window for people to consume without a module loader
 */
window.overscroll = overscroll;
