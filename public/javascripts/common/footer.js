var Footer = function()
    {
    this.__setUpdateDate()
    this.__subscribeToggle()
    }

Footer.prototype.__setUpdateDate = function()
    {
    $.getJSON("https://api.github.com/repos/Gliptal/cartridger/tags", function(data)
        {
        var version = data[0].name
        $("#footer_meta h6:nth-of-type(2)").append(version)
        })
    .done(function()
        {
        $.getJSON("https://api.github.com/repos/Gliptal/cartridger", function(data)
            {
            var date = $.format.date(data.pushed_at, "D MMMM yyyy")
            $("#footer_meta h6:nth-of-type(2)").append(" (" + date + ")")
            })
        })
    }

Footer.prototype.__subscribeToggle = function()
    {
    cover = $("#footer_download-switch #cover")

    cover.click(function()
        {
        if (cover.hasClass("right"))
            {
            cover.removeClass("right")
            cover.addClass("left")
            }
        else
            {
            cover.removeClass("left")
            cover.addClass("right")
            }
        })
    }
