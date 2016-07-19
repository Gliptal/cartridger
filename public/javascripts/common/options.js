var Options =
    {
    }

$("input.regex_int").filter_input({regex : "[A-M]"})
$("input.regex_float").filter_input({regex : "[0-9]"})
$("input.regex_float").filter_input({regex : "[0-9|.]"})