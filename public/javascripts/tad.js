var Tad = function()
    {
    Switch.subscribeToggle($("#tad .cover"))
    this.__subscribeHookToggle()
    }

Tad.prototype.__subscribeHookToggle = function()
    {
    $(".tad_switch-hook").click(function()
        {
        console.log($(this).siblings())
        if ($(this).children("switch").children(".cover").hasClass("right"))
            $(this).siblings(".tad_switch-hook-type").removeClass("inactive")
        else
            $(this).siblings(".tad_switch-hook-type").addClass("inactive")
        })
    }

Tad.prototype.slideIn = function()
    {
    content = $("#content")

    content.css("left", -$("#tad").position().left)
    }
