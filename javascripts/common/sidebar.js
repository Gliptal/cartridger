var Sidebar = function()
    {
    this.__subscribeSidebar()
    }

Sidebar.prototype.stage = 1

Sidebar.prototype.__subscribeSidebar = function()
    {
    sidebar = $("sidebar")
    download = $("#footer_download")

    sidebar.click(function()
        {
        Sidebar.stage += 1

        if (Sidebar.stage == 5)
            {
            sidebar.addClass("hidden")
            download.removeClass("hidden")
            }
        else
            {
            Header.activateNextTab()
            Header.selectTab(Sidebar.stage)

            if (Sidebar.stage == 4)
                sidebar.css("background-image", "url(\"../images/end.png\"")
            }
        })
    }
