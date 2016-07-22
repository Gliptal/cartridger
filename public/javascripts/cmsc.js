var Cmsc = function()
    {
    this.__subscribeCustomAdder()
    }

Cmsc.prototype.programs = 0

Cmsc.prototype.__subscribeCustomAdder = function()
    {
    self = this
    adder = $("#cmsc_program-add")
    list = $("#cmsc_list-custom")

    adder.click(function()
        {
        Cmsc.programs += 1

        if (Cmsc.programs <= 13)
            {
            adder.before("<div class=\"cmsc_program\"><press class=\"cmsc_program-remove interactable\"></press><value class=\"cmsc_program-letter\"><p>program</p><input class=\"regex_NZ\"></value><value class=\"cmsc_program-chaff\"><p>chaff</p><input class=\"regex_int2\"></value><value class=\"cmsc_program-flare\"><p>flare</p><input class=\"regex_int2\"></value><value class=\"cmsc_program-interval\"><p>interval</p><input class=\"regex_float\"></value><value class=\"cmsc_program-repeat\"><p>repeat</p><input class=\"regex_float\"></value></div>")

            self.__subscribeCustomRemover(list.children(".cmsc_program").last().children("press"))
            Options.filterInputs()

            list.scrollLeft(9999)
            }

        if (Cmsc.programs == 13)
            adder.addClass("hidden")
        })
    }

Cmsc.prototype.__subscribeCustomRemover = function(remover)
    {
    remover.click(function()
        {
        remover.parent().remove()
        })
    }

Cmsc.prototype.slideIn = function()
    {
    content = $("#content")

    content.css("left", -$("#cmsc").position().left)
    }
