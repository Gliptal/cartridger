var Iffcc = function()
    {
    Switch.subscribeToggle($("#iffcc .cover"))
    }

Iffcc.prototype.slideIn = function()
    {
    content = $("#content")

    content.css("left", -$("#iffcc").position().left)
    }
