var Footer = function()
    {
    this.__setRepoDetails()
    Switch.subscribeToggle($("#footer_download-switch .cover"))
    }

Footer.prototype.__setRepoDetails = function()
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
