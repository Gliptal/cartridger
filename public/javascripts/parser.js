var Parser = function()
    {
    }

Parser.prototype.runCmsc = function()
    {
    cmsc_1 = `local gettext = require("i_18n")
_ = gettext.translate

programs = {}

-- Old generation radar SAM
programs['A'] = {}
programs['A']["chaff"] = ${$(".cmsc_program-chaff").eq(0).children("input").val()}
programs['A']["flare"] = ${$(".cmsc_program-flare").eq(0).children("input").val()}
programs['A']["intv"]  = ${$(".cmsc_program-interval").eq(0).children("input").val()}
programs['A']["cycle"] = ${$(".cmsc_program-repeat").eq(0).children("input").val()}

-- Current generation radar SAM
programs['B'] = {}
programs['B']["chaff"] = ${$(".cmsc_program-chaff").eq(1).children("input").val()}
programs['B']["flare"] = ${$(".cmsc_program-flare").eq(1).children("input").val()}
programs['B']["intv"]  = ${$(".cmsc_program-interval").eq(1).children("input").val()}
programs['B']["cycle"] = ${$(".cmsc_program-repeat").eq(1).children("input").val()}

-- IR SAM
programs['C'] = {}
programs['C']["chaff"] = ${$(".cmsc_program-chaff").eq(2).children("input").val()}
programs['C']["flare"] = ${$(".cmsc_program-flare").eq(2).children("input").val()}
programs['C']["intv"]  = ${$(".cmsc_program-interval").eq(2).children("input").val()}
programs['C']["cycle"] = ${$(".cmsc_program-repeat").eq(2).children("input").val()}

-- Default manual presets
-- Mix 1
programs['D'] = {}
programs['D']["chaff"] = ${$(".cmsc_program-chaff").eq(3).children("input").val()}
programs['D']["flare"] = ${$(".cmsc_program-flare").eq(3).children("input").val()}
programs['D']["intv"]  = ${$(".cmsc_program-interval").eq(3).children("input").val()}
programs['D']["cycle"] = ${$(".cmsc_program-repeat").eq(3).children("input").val()}

-- Mix 2
programs['E'] = {}
programs['E']["chaff"] = ${$(".cmsc_program-chaff").eq(4).children("input").val()}
programs['E']["flare"] = ${$(".cmsc_program-flare").eq(4).children("input").val()}
programs['E']["intv"]  = ${$(".cmsc_program-interval").eq(4).children("input").val()}
programs['E']["cycle"] = ${$(".cmsc_program-repeat").eq(4).children("input").val()}

-- Mix 3
programs['F'] = {}
programs['F']["chaff"] = ${$(".cmsc_program-chaff").eq(5).children("input").val()}
programs['F']["flare"] = ${$(".cmsc_program-flare").eq(5).children("input").val()}
programs['F']["intv"]  = ${$(".cmsc_program-interval").eq(5).children("input").val()}
programs['F']["cycle"] = ${$(".cmsc_program-repeat").eq(5).children("input").val()}

-- Mix 4
programs['G'] = {}
programs['G']["chaff"] = ${$(".cmsc_program-chaff").eq(6).children("input").val()}
programs['G']["flare"] = ${$(".cmsc_program-flare").eq(6).children("input").val()}
programs['G']["intv"]  = ${$(".cmsc_program-interval").eq(6).children("input").val()}
programs['G']["cycle"] = ${$(".cmsc_program-repeat").eq(6).children("input").val()}

-- Chaff single
programs['H'] = {}
programs['H']["chaff"] = ${$(".cmsc_program-chaff").eq(7).children("input").val()}
programs['H']["flare"] = ${$(".cmsc_program-flare").eq(7).children("input").val()}
programs['H']["intv"]  = ${$(".cmsc_program-interval").eq(7).children("input").val()}
programs['H']["cycle"] = ${$(".cmsc_program-repeat").eq(7).children("input").val()}

-- Chaff pair
programs['I'] = {}
programs['I']["chaff"] = ${$(".cmsc_program-chaff").eq(8).children("input").val()}
programs['I']["flare"] = ${$(".cmsc_program-flare").eq(8).children("input").val()}
programs['I']["intv"]  = ${$(".cmsc_program-interval").eq(8).children("input").val()}
programs['I']["cycle"] = ${$(".cmsc_program-repeat").eq(8).children("input").val()}

-- Flare single
programs['J'] = {}
programs['J']["chaff"] = ${$(".cmsc_program-chaff").eq(9).children("input").val()}
programs['J']["flare"] = ${$(".cmsc_program-flare").eq(9).children("input").val()}
programs['J']["intv"]  = ${$(".cmsc_program-interval").eq(9).children("input").val()}
programs['J']["cycle"] = ${$(".cmsc_program-repeat").eq(9).children("input").val()}

-- Flare pair
programs['K'] = {}
programs['K']["chaff"] = ${$(".cmsc_program-chaff").eq(10).children("input").val()}
programs['K']["flare"] = ${$(".cmsc_program-flare").eq(10).children("input").val()}
programs['K']["intv"]  = ${$(".cmsc_program-interval").eq(10).children("input").val()}
programs['K']["cycle"] = ${$(".cmsc_program-repeat").eq(10).children("input").val()}

-- Chaff pre-empt
programs['L'] = {}
programs['L']["chaff"] = ${$(".cmsc_program-chaff").eq(11).children("input").val()}
programs['L']["flare"] = ${$(".cmsc_program-flare").eq(11).children("input").val()}
programs['L']["intv"]  = ${$(".cmsc_program-interval").eq(11).children("input").val()}
programs['L']["cycle"] = ${$(".cmsc_program-repeat").eq(11).children("input").val()}

-- Flare pre-empt
programs['M'] = {}
programs['M']["chaff"] = ${$(".cmsc_program-chaff").eq(12).children("input").val()}
programs['M']["flare"] = ${$(".cmsc_program-flare").eq(12).children("input").val()}
programs['M']["intv"]  = ${$(".cmsc_program-interval").eq(12).children("input").val()}
programs['M']["cycle"] = ${$(".cmsc_program-repeat").eq(12).children("input").val()}



`

    cmsc_2 = `ContainerChaffCapacity = 120

ContainerFlareCapacity = 60

NumberOfContiners      = 4

AN_ALE_40V_FAILURE_TOTAL = 0
AN_ALE_40V_FAILURE_CONTAINER_LEFT_WING  = 1
AN_ALE_40V_FAILURE_CONTAINER_LEFT_GEAR  = 2
AN_ALE_40V_FAILURE_CONTAINER_RIGHT_GEAR = 3
AN_ALE_40V_FAILURE_CONTAINER_RIGHT_WING = 4

Damage = {  {Failure = AN_ALE_40V_FAILURE_TOTAL, Failure_name = "AN_ALE_40V_FAILURE_TOTAL", Failure_editor_name = _("AN/ALE-40(V) total failure"),  Element = 10, Integrity_Treshold = 0.5, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*300},
        {Failure = AN_ALE_40V_FAILURE_CONTAINER_LEFT_WING, Failure_name = "AN_ALE_40V_FAILURE_CONTAINER_LEFT_WING", Failure_editor_name = _("AN/ALE-40(V) left wing container failure"),  Element = 23, Integrity_Treshold = 0.75, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*300},
        {Failure = AN_ALE_40V_FAILURE_CONTAINER_LEFT_GEAR, Failure_name = "AN_ALE_40V_FAILURE_CONTAINER_LEFT_GEAR", Failure_editor_name = _("AN/ALE-40(V) left gear container failure"),  Element = 15, Integrity_Treshold = 0.75, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*300},
        {Failure = AN_ALE_40V_FAILURE_CONTAINER_RIGHT_GEAR, Failure_name = "AN_ALE_40V_FAILURE_CONTAINER_RIGHT_GEAR", Failure_editor_name = _("AN/ALE-40(V) right gear container failure"),  Element = 16, Integrity_Treshold = 0.75, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*300},
        {Failure = AN_ALE_40V_FAILURE_CONTAINER_RIGHT_WING, Failure_name = "AN_ALE_40V_FAILURE_CONTAINER_RIGHT_WING", Failure_editor_name = _("AN/ALE-40(V) right wing container failure"),  Element = 24, Integrity_Treshold = 0.75, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*300},
}

need_to_be_closed = true -- lua_state  will be closed in post_initialize()`

    custom = ``
    $("#cmsc_list-custom .cmsc_program").each(function()
        {
        letter = $(this).children(".cmsc_program-letter").children("input").val().toUpperCase()
        custom += `programs['${letter}'] = {}
programs['${letter}']["chaff"] = ${$(this).children(".cmsc_program-chaff").children("input").val()}
programs['${letter}']["flare"] = ${$(this).children(".cmsc_program-flare").children("input").val()}
programs['${letter}']["intv"]  = ${$(this).children(".cmsc_program-interval").children("input").val()}
programs['${letter}']["cycle"] = ${$(this).children(".cmsc_program-repeat").children("input").val()}

`
        })

    return cmsc_1 + custom + cmsc_2
    }

Parser.prototype.runLeftMfcd = function()
    {
    leftMfcd = `MFCD_NAME    = "Left MFCD"

dofile(LockOn_Options.script_path.."MFCD/device/MFCD.lua")

local gettext = require("i_18n")
_ = gettext.translate

RunwayStartInitMode = {master = 7,level_2 = 0,level_3 = 0,level_4 = 0}
AirStartInitMode    = {master = 7,level_2 = 0,level_3 = 0,level_4 = 0}

-- default layout
DPP_OSB_labels =
{
    "",-- OSB_01
    "",-- OSB_02
    "",-- OSB_03
    "",-- OSB_04
    "",-- OSB_05
    "",-- OSB_06
    "STAT",-- OSB_07
    "LOAD",-- OSB_08
    "MAV",-- OSB_09
    "CLR",-- OSB_10
    "DCLT",-- OSB_11
    -- magic (programmable) buttons
    "${$("#mfcds_links-left div press:nth-of-type(4)").text()}",-- OSB_12
    "${$("#mfcds_links-left div press:nth-of-type(3)").text()}", -- OSB_13
    "${$("#mfcds_links-left div press:nth-of-type(2)").text()}", -- OSB_14
    "${$("#mfcds_links-left div press:nth-of-type(1)").text()}", -- OSB_15
    --
    "CDU",-- OSB_16
    "MSG",-- OSB_17
    "DSMS",-- OSB_18
    "TGP",-- OSB_19
    "TAD",-- OSB_20
}


MFCD_FAILURE = 0
Damage = {  {Failure = MFCD_FAILURE, Failure_name = "LEFT_MFCD_FAILURE", Failure_editor_name = _("Left MFCD"),  Element = 4, Integrity_Treshold = 0.8, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*300}}

-- programmed layout
local buttons = settings["osb_buttons"]
if buttons then
    DPP_OSB_labels[12] = buttons[11]["label"]
    DPP_OSB_labels[13] = buttons[12]["label"]
    DPP_OSB_labels[14] = buttons[13]["label"]
    DPP_OSB_labels[15] = buttons[14]["label"]
end
`

    return leftMfcd
    }

Parser.prototype.runRightMfcd = function()
    {
    rightMfcd = `MFCD_NAME   = "Right MFCD"

dofile(LockOn_Options.script_path.."MFCD/device/MFCD.lua")

local gettext = require("i_18n")
_ = gettext.translate

RunwayStartInitMode = {master = 10,level_2 = 1,level_3 = 0,level_4 = 0}
AirStartInitMode    = {master = 6,level_2 = 0,level_3 = 0,level_4 = 0}

-- default layout
DPP_OSB_labels =
{
    "",-- OSB_01
    "",-- OSB_02
    "",-- OSB_03
    "",-- OSB_04
    "",-- OSB_05
    "",-- OSB_06
    "STAT",-- OSB_07
    "LOAD",-- OSB_08
    "MAV",-- OSB_09
    "CLR",-- OSB_10
    "DCLT",-- OSB_11
    -- magic (programmable) buttons
    "${$("#mfcds_links-right div press:nth-of-type(4)").text()}",-- OSB_12
    "${$("#mfcds_links-right div press:nth-of-type(3)").text()}", -- OSB_13
    "${$("#mfcds_links-right div press:nth-of-type(2)").text()}", -- OSB_14
    "${$("#mfcds_links-right div press:nth-of-type(1)").text()}", -- OSB_15
    --
    "CDU",-- OSB_16
    "MSG",-- OSB_17
    "DSMS",-- OSB_18
    "TGP",-- OSB_19
    "TAD",-- OSB_20
}


MFCD_FAILURE = 0
Damage = {  {Failure = MFCD_FAILURE, Failure_name = "RIGHT_MFCD_FAILURE", Failure_editor_name = _("Right MFCD"),  Element = 5, Integrity_Treshold = 0.5, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*300}}

-- programmed layout
local buttons = settings["osb_buttons"]
if buttons then
    DPP_OSB_labels[12] = buttons[11]["label"]
    DPP_OSB_labels[13] = buttons[12]["label"]
    DPP_OSB_labels[14] = buttons[13]["label"]
    DPP_OSB_labels[15] = buttons[14]["label"]
end
`

    return rightMfcd
    }

Parser.prototype.runTad = function()
    {
    tad_1 = `dofile(LockOn_Options.common_script_path.."tools.lua")
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
----   DEBUG DEFINITIONS  -------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
is_debug = false
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
----   END OF DEBUG DEFINITIONS  --------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

function get_file_name(loader)
    local campaign = LockOn_Options.mission.campaign
    local mission  = LockOn_Options.mission.title
    local                     name     = db_path
    if campaign ~= "" then    name     = name .. campaign .. "/" end
    if mission  ~= "" then    name     = name .. mission .. CDU_DB_name_suffix end
    return                    name
end

-- ALL - All options set to ON
-- LOFF - All options set to ON except LINES OFF
-- ACT - All options set to ON except passive tagging turned OFF (Active only)
-- NONE - All options turned OFF

HOOK_INFO = {}
HOOK_INFO["OFF"] = 0
HOOK_INFO["ON"]  = 1
HOOK_INFO["ACT"] = 2

SHOW_SPI = {}
SHOW_SPI["OWN"] = 0
SHOW_SPI["ALL"] = 1

-- Always present in the system
default_profile =
{
    name                    = "DFLT",
    bullseye                = true,
    range_rings             = true,
    flight_plan_lines       = true,
    waypoint_labels         = true,
    tag_info                = HOOK_INFO.ON,
    ownship_waypoints       = true,
    spi_display             = SHOW_SPI.ALL,
    frequency_mapping       = 8,
    guardChannel1           = 3,
    guardChannel2           = 7,
    gateway_key             = "1",
    air_key                 = "1",
    ground_key              = "A",
    LCN1                    = "00",
    LCN2                    = "00",
}

profiles    = {}
for i = 1, 4 do
    profiles[i] = {}
    copyTable(profiles[i], default_profile)
end

`

    tad_2 = `--------------------------------------------------
-- OSBs to profiles map
--
-- Enumeration was changed to reflect RL logic:
-- up -> down, left -> right

TAD_PPP_profiles = {}
for i = 1, 20 do
    TAD_PPP_profiles[i] = -1
end

-- Currently in use - 'magic OSBs'
TAD_PPP_profiles[2]  = 0
TAD_PPP_profiles[3]  = 1
TAD_PPP_profiles[4]  = 2
TAD_PPP_profiles[5]  = 3

-- Stored, may be selected for use at TAD Display Program Page
TAD_PPP_profiles[6]  = 5
TAD_PPP_profiles[7]  = 6
TAD_PPP_profiles[8]  = 7
TAD_PPP_profiles[9]  = 8
TAD_PPP_profiles[16] = 4
TAD_PPP_profiles[17] = 3
TAD_PPP_profiles[18] = 2
TAD_PPP_profiles[19] = 1
TAD_PPP_profiles[20] = 0

function ReadBoolOnOff(str, tbl, field)
    if nil == string.find(str, "Off", 1, true) then
        tbl[field] = true
    else
        tbl[field] = false
    end
end

function ReadProfileData(str)
    local temp
    local index
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)

    if "" == TrimStringLeft(TrimStringRight(str)) then
        return nil
    end

    str, index  = GetNumberField(str)

    local ret = {}
    str, temp   = GetStringField(str)
    ret["name"] = TrimStringLeft(temp)

    str, temp   = GetStringField(str)
    if nil ~= string.find(temp, "OSB 2", 1, true) then
        TAD_PPP_profiles[2] = index-1
    elseif nil ~= string.find(temp, "OSB 3", 1, true) then
        TAD_PPP_profiles[3] = index-1
    elseif nil ~= string.find(temp, "OSB 4", 1, true) then
        TAD_PPP_profiles[4] = index-1
    elseif nil ~= string.find(temp, "OSB 5", 1, true) then
        TAD_PPP_profiles[5] = index-1
    end

    str, temp   = GetStringField(str)
    ReadBoolOnOff(temp, ret, "bullseye")

    str, temp   = GetStringField(str)
    ReadBoolOnOff(temp, ret, "range_rings")

    str, temp   = GetStringField(str)
    ReadBoolOnOff(temp, ret, "flight_plan_lines")

    str, temp   = GetStringField(str)
    ReadBoolOnOff(temp, ret, "waypoint_labels")

    str, temp   = GetStringField(str)
    ReadBoolOnOff(temp, ret, "ownship_waypoints")

    str, temp       = GetStringField(str)
    local HOOK_STRINGS = {}
    HOOK_STRINGS[0]     = "OFF"
    HOOK_STRINGS[1]     = "ON"
    HOOK_STRINGS[2]     = "ACT"
    GetValueFromString(ret, "tag_info", TrimStringLeft(temp), HOOK_STRINGS)

    str, temp       = GetStringField(str)
    local SPI_STRINGS = {}
    SPI_STRINGS[0]      = "OWN"
    SPI_STRINGS[1]      = "ALL"
    GetValueFromString(ret, "spi_display", TrimStringLeft(temp), SPI_STRINGS)

    str, temp       = GetStringField(str)
    ret["air_key"]  = TrimStringLeft(temp)

    str, temp       = GetStringField(str)
    ret["ground_key"]   = string.upper(TrimStringLeft(temp))

    str, temp       = GetStringField(str)
    ret["gateway_key"]  = TrimStringLeft(temp)

    str, temp       = GetStringField(str)
    ret["LCN1"]     = TrimStringLeft(temp)

    str, temp       = GetStringField(str)
    ret["LCN2"]     = TrimStringLeft(temp)

    str, temp       = GetStringField(str)
    temp = TrimStringLeft(temp)
    ret["guardChannel1"]    = string.byte(temp, 1)-48
    ret["guardChannel2"]    = string.byte(temp, 2)-48

    ret["frequency_mapping"]        = tonumber(str)

    return index, ret
end

function ReadProfiles(f)
    local str
    str=f:read()
    while nil ~= str do
        if nil ~= string.find(str, "TAD Profiles", 1, true) then
            profiles = nil
            profiles = {}

            TAD_PPP_profiles[2] = -1
            TAD_PPP_profiles[3] = -1
            TAD_PPP_profiles[4] = -1
            TAD_PPP_profiles[5] = -1

            str=f:read()
            str=f:read()
            local res
            local index = 0

            while nil ~= index do
                index, res = ReadProfileData(str)
                if nil ~= index then
                    profiles[index] = res
                else
                    return
                end
                str=f:read()
            end

            return
        end
        str=f:read()
    end
end
`

    custom = ``
    $(".tad_profile").each(function(index)
        {
        bullseye = $(this).children(".tad_switch-bullseye").children("switch").children(".cover").hasClass("right")
        rings = $(this).children(".tad_switch-rings").children("switch").children(".cover").hasClass("right")
        flightPlan = $(this).children(".tad_switch-flightPlan").children("switch").children(".cover").hasClass("right")
        waypoints = $(this).children(".tad_switch-waypoints").children("switch").children(".cover").hasClass("right")
        if ($(this).children(".tad_switch-hook").children("switch").children(".cover").hasClass("left"))
            hook = "HOOK_INFO.OFF"
        else if ($(this).children(".tad_switch-hook-type").children("switch").children(".cover").hasClass("right"))
            hook = "HOOK_INFO.ON"
        else
            hook = "HOOK_INFO.ACT"
        ownship = $(this).children(".tad_switch-ownship").children("switch").children(".cover").hasClass("right")
        if ($(this).children(".tad_switch-spi").children("switch").children(".cover").hasClass("right"))
            spi = "SHOW_SPI.ALL"
        else
            spi = "SHOW_SPI.OWN"

        custom += `profiles[${index+1}].name              = "${$(this).children("value").children("input").val().toUpperCase()}"
profiles[${index+1}].bullseye          = ${bullseye}
profiles[${index+1}].range_rings       = ${rings}
profiles[${index+1}].flight_plan_lines = ${flightPlan}
profiles[${index+1}].waypoint_labels   = ${waypoints}
profiles[${index+1}].tag_info          = ${hook}
profiles[${index+1}].ownship_waypoints = ${ownship}
profiles[${index+1}].spi_display       = ${spi}

`
        })

    return tad_1 + custom + tad_2
    }