var express = require("express")
var merge   = require("object-merge")
var config  = require(rootDir + "bin/config")

var meta    = require(rootDir + "locales/" + config.lang + "/common/meta")
var header  = require(rootDir + "locales/" + config.lang + "/common/header")
var footer  = require(rootDir + "locales/" + config.lang + "/common/footer")
var cmsc    = require(rootDir + "locales/" + config.lang + "/cmsc")
var mfcds   = require(rootDir + "locales/" + config.lang + "/mfcds")
var tad     = require(rootDir + "locales/" + config.lang + "/tad")
var iffcc   = require(rootDir + "locales/" + config.lang + "/iffcc")
var content = merge(meta, header, footer, cmsc, mfcds, tad, iffcc)

// // //

var router = express.Router()

router.get("/", function(req, res, next)
    {
    config.debug.routing("GET request -> /")

    res.render("cartridger", content)
    })

// // //

module.exports = router