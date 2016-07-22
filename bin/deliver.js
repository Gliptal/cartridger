var colors = require("colors")
var fs     = require("fs-extra")
var pug   = require("pug")
var merge  = require("object-merge")

// // //

var source      = "public"
var destination = "STATIC"

function fail(output)
    {
    return "[   FAIL   ]".red + "    " + output
    }

function success(output)
    {
    return "[    OK    ]".green + "    " + output
    }

function deliverImages()
    {
    fs.remove(destination + "/images", function(error)
        {
        if (error)
            console.log(fail("remove old images\n" + error))
        else
            console.log(success("remove old images"))

        fs.mkdirs(destination + "/images", function()
            {
            fs.copy(source + "/images", destination + "/images", function(error)
                {
                if (error)
                    console.log(fail("copy images\n" + error))
                else
                    console.log(success("copy images"))
                })
            })
        })
    }

function deliverScripts()
    {
    fs.remove(destination + "/javascripts", function(error)
        {
        if (error)
            console.log(fail("remove old javascripts\n" + error))
        else
            console.log(success("remove old javascripts"))

        fs.mkdirs(destination + "/javascripts", function()
            {
            fs.copy(source + "/javascripts", destination + "/javascripts", function(error)
                {
                if (error)
                    console.log(fail("copy javascripts\n" + error))
                else
                    console.log(success("copy javascripts"))
                })
            })
        })
    }

function deliverStylesheets()
    {
    fs.remove(destination + "/style", function(error)
        {
        if (error)
            console.log(fail("remove old stylesheets\n" + error))
        else
            console.log(success("remove old stylesheets"))

        fs.mkdirs(destination + "/style", function()
            {
            fs.copy(source + "/style", destination + "/style", function(error)
                {
                if (error)
                    console.log(fail("copy stylesheets\n" + error))
                else
                    console.log(success("copy stylesheets"))
                })
            })
        })
    }

function deliverHtml()
    {
    var meta    = require("../locales/en/common/meta")
    var header  = require("../locales/en/common/header")
    var footer  = require("../locales/en/common/footer")
    var cmsc    = require("../locales/en/cmsc")
    var iffcc   = require("../locales/en/iffcc")
    var mfcds   = require("../locales/en/mfcds")
    var tad     = require("../locales/en/tad")
    var content = merge(meta, header, footer, cmsc, iffcc, mfcds, tad)

    var render = pug.compileFile("./views/cartridger.pug", {basedir: "./", pretty: true})
    var html = render(content)

    fs.writeFile(destination + "/cartridger.html", html, function(error)
        {
        if (error)
            console.log(fail("compile cartridger.html\n" + error))
        else
            console.log(success("compile cartridger.html"))
        })
    }

// // //

deliverImages()
deliverScripts()
deliverStylesheets()
deliverHtml()
