var Switch =
    {
    }

Switch.subscribeToggle = function(cover)
    {
    cover.click(function()
        {
        if ($(this).hasClass("right"))
            {
            $(this).removeClass("right")
            $(this).addClass("left")
            }
        else
            {
            $(this).removeClass("left")
            $(this).addClass("right")
            }
        })
    }
