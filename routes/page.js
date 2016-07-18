var express = require("express")
var merge   = require("object-merge")
var config  = require(rootDir + "bin/config")

var meta    = require(rootDir + "locales/" + config.lang + "/common/meta")
var header  = require(rootDir + "locales/" + config.lang + "/common/header")
var footer  = require(rootDir + "locales/" + config.lang + "/common/footer")
var cmsc    = require(rootDir + "locales/" + config.lang + "/cmsc")
var content = merge(meta, header, footer, cmsc)

// // //

var router = express.Router()

router.get("/", function(req, res, next)
    {
    config.debug.routing("GET request -> /")

    res.render("page", content)
    })

// // //

module.exports = router