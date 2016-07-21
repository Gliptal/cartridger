var Header = function()
    {
    this.__subscribeTabs()
    }

Header.prototype.__subscribeTabs = function()
    {
    var self = this

    $("tab:nth-of-type(1)").click(function()
        {
        self.selectTab(1)
        })

    $("tab:nth-of-type(2)").click(function()
        {
        self.selectTab(2)
        })

    $("tab:nth-of-type(3)").click(function()
        {
        self.selectTab(3)
        })

    $("tab:nth-of-type(4)").click(function()
        {
        self.selectTab(4)
        })
    }

Header.prototype.activateNextTab = function()
    {
    tab = $("tab.inactive").first()

    tab.removeClass("inactive")
    }

Header.prototype.selectTab = function(tab)
    {
    $("tab").removeClass("selected")

    switch (tab)
        {
        case 1:
            $("tab:nth-of-type(1)").addClass("selected")
            Cmsc.slideIn()
            break
        case 2:
            $("tab:nth-of-type(2)").addClass("selected")
            Mfcds.slideIn()
            break
        case 3:
            $("tab:nth-of-type(3)").addClass("selected")
            Tad.slideIn()
            break
        case 4:
            $("tab:nth-of-type(4)").addClass("selected")
            break
        }

    if (tab != Sidebar.stage)
        $("sidebar").addClass("hidden")
    else if (tab == Sidebar.stage)
        $("sidebar").removeClass("hidden")
    }
