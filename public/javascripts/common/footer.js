var Footer = function()
    {
    this.__setRepoDetails()
    this.__subscribeDownload()
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

Footer.prototype.__subscribeDownload = function()
    {
    $("#footer_download-button").click(function()
        {
        zip = new JSZip()

        instructionsFile = ""
        cmscFile = Parser.runCmsc()
        leftMfcdFile = Parser.runLeftMfcd()
        rightMfcdFile = Parser.runRightMfcd()
        tadFile = ""
        iffccFile = ""

        if ($("#footer_download-switch .cover").hasClass("right"))
            {
            scripts = zip.folder("Cartridge").folder("Mods").folder("aircraft").folder("A-10C").folder("Cockpit").folder("Scripts")
            cmsc = scripts.folder("AN_ALE40V").folder("device")
            mfcds = scripts.folder("MFCD").folder("device")
            tad = scripts.folder("TAD")
            iffcc = scripts.folder("IFFCC")

            cmsc.file("AN_ALE40V_params.lua", cmscFile)
            mfcds.file("MFCD_left_param.lua", leftMfcdFile)
            mfcds.file("MFCD_right_param.lua", rightMfcdFile)
            tad.file("Profiles.lua", tadFile)
            iffcc.file("IFFCC_param.lua", iffccFile)
            }
        else
            {
            zip.file("instructions.txt", instructionsFile)
            zip.file("AN_ALE40V_params.lua", cmscFile)
            zip.file("MFCD_left_param.lua", leftMfcdFile)
            zip.file("MFCD_right_param.lua", rightMfcdFile)
            zip.file("Profiles.lua", tadFile)
            zip.file("IFFCC_param.lua", iffccFile)
            }

        zip.generateAsync({type : "blob"}).then(function (blob)
            {
            saveAs(blob, "Cartridge.zip");
            })
        })
    }
