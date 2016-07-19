var Cmsc = function()
    {
    }

Cmsc.prototype.slideIn = function()
    {
    content = $("#content")

    content.css("left", -$("#cmsc").position().left)
    }
