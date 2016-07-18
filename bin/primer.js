var http        = require("http")
var config      = require("./config")
var cartridger  = require(rootDir + "cartridger")

// // //

var primer =
    {
    server: undefined,

    start: function()
        {
        this.server = http.createServer(cartridger)
        this.server.listen(config.port)
        this.server.on("listening", debugState.bind(this))
        }
    }

function debugState()
    {
    var address = this.server.address()
    config.debug.server("primed")
    config.debug.server("listening on " + (address.address != "::" ? address.address : "localhost") + ":" + address.port)

    var minutesStep = 1
    var runningTime = 0
    setInterval(function()
        {
        runningTime += minutesStep
        config.debug.server("running for " + runningTime + " minutes")
        }, 1000*60*minutesStep)
    }

// // //

primer.start()

// // //

module.exports = primer