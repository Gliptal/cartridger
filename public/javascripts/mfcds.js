var Mfcds = function()
    {
    }

Mfcds.prototype.slideIn = function()
    {
    content = $("#content")

    content.css("left", -$("#mfcds").position().left)
    }
