var express = require("express")
var favicon = require("serve-favicon")
var logger  = require("morgan")
var stylus  = require("stylus")
var config  = require(rootDir + "bin/config")

var cartridger = require(rootDir + "routes/cartridger")

// // //

var configurator =
    {
    site: express(),

    configureLogger: function()
        {
        this.site.use(logger("dev"))
        },

    configureEngines: function()
        {
        this.site.locals.basedir = rootDir
        this.site.set("view engine", config.engines.view)
        this.site.use(stylus.middleware(config.options.stylus))
        },

    configurePaths: function()
        {
        this.site.set("views", config.paths.views)
        this.site.use(express.static(config.paths.static, config.options.static))
        this.site.use(favicon(config.paths.images + "favicon.ico"))
        },

    configureRoutes: function()
        {
        this.site.use("/", cartridger)
        }
    }

// // //

configurator.configureLogger()
configurator.configureEngines()
configurator.configurePaths()
configurator.configureRoutes()

// // //

module.exports = configurator.site