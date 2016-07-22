var Options = function()
    {
    this.filterInputs()
    }

Options.prototype.filterInputs = function()
    {
    $("input.regex_AM").filter_input({regex : "[a-m|A-M]"}).attr("maxlength", 1)
    $("input.regex_NZ").filter_input({regex : "[n-z|N-Z]"}).attr("maxlength", 1)
    $("input.regex_AZ4").filter_input({regex : "[a-z|A-Z]"}).attr("maxlength", 4)
    $("input.regex_9").attr("maxlength", 9)
    $("input.regex_int2").filter_input({regex : "[0-9]"}).attr("maxlength", 2)
    $("input.regex_int3").filter_input({regex : "[0-9]"}).attr("maxlength", 3)
    $("input.regex_float").filter_input({regex : "[0-9|.]"}).attr("maxlength", 5)
    }
