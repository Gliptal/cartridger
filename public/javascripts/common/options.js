var Options = function()
    {
    this.filterInputs()
    }

Options.prototype.filterInputs = function()
    {
    $("input.regex_AM").filter_input({regex : "[a-m|A-M]"}).attr("maxlength", 1)
    $("input.regex_NZ").filter_input({regex : "[n-z|N-Z]"}).attr("maxlength", 1)
    $("input.regex_AM4").filter_input({regex : "[a-m|A-M]"}).attr("maxlength", 4)
    $("input.regex_int").filter_input({regex : "[0-9]"}).attr("maxlength", 2)
    $("input.regex_float").filter_input({regex : "[0-9|.]"}).attr("maxlength", 5)
    }
