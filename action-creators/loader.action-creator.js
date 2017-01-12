var loaderConstants = require('../core/constants').loader

function loaderActionCreator() {
    function incrementLoadCounter() {
        return {
            type: loaderConstants.INCREMENT_LOADER_COUNT
        }
    }

    function decrementLoadCounter() {
        return {
            type: loaderConstants.DECREMENT_LOADER_COUNT
        }
    }
    return {
        incrementLoadCounter: incrementLoadCounter,
        decrementLoadCounter: decrementLoadCounter
    }
}

module.exports = loaderActionCreator