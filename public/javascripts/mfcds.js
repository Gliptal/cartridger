var Mfcds = function()
    {
    this.__subscribeLinks($(".mfcds_links:nth-of-type(1) press"))
    this.__subscribeLinks($(".mfcds_links:nth-of-type(2) press"))
    this.__subscribePages()
    }

Mfcds.prototype.__subscribeLinks = function(links)
    {
    links.click(function()
        {

        current = []
        links.each(function()
            {
            current.push($(this).text())
            })

        $("#mfcds_pages press").each(function()
            {
            if ($.inArray($(this).text(), current) == -1)
                $(this).addClass("interactable")
            })

        if ($(".mfcds_links press.selected").size() == 1)
            {
            swap = $(".mfcds_links press.selected").text()
            $(".mfcds_links press.selected").text($(this).text())
            $(this).text(swap)

            $(".mfcds_links press.selected").removeClass("selected")
            pages = $("#mfcds_pages press").removeClass("interactable")
            }
        else
            $(this).addClass("selected")
        })
    }

Mfcds.prototype.__subscribePages = function()
    {
    pages = $("#mfcds_pages press")
    links = $(".mfcds_links press")

    pages.click(function()
        {
        clicked = $(this).text()

        $(".mfcds_links press.selected").text(clicked)

        pages.removeClass("interactable")
        links.removeClass("selected")
        links.addClass("interactable")
        })
    }

Mfcds.prototype.slideIn = function()
    {
    content = $("#content")

    content.css("left", -$("#mfcds").position().left)
    }
