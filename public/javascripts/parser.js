var Parser = function()
    {
    }

Parser.prototype.runInstructions = function()
    {
    instructions = `- Copy "AN_ALE40V_params.lua" inside "Mods\\aircraft\\A-10C\\Cockpit\\Scripts\\AN_ALE40V\\device" in your DCS installation root folder.
- Copy "MFCD_left_param.lua" and MFCD_right_param.lua" inside "Mods\\aircraft\\A-10C\\Cockpit\\Scripts\\MFCD\\device" in your DCS installation root folder.
- Copy "Profiles.lua" inside "Mods\\aircraft\\A-10C\\Cockpit\\Scripts\\TAD" in your DCS installation root folder.
- Copy "IFFCC_param.lua" inside "Mods\\aircraft\\A-10C\\Cockpit\\Scripts\\IFFCC" in your DCS installation root folder.`

    return instructions.replace(/\r?\n/g, "\r\n")
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

    return (cmsc_1 + custom + cmsc_2).replace(/\r?\n/g, "\r\n")
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

    return leftMfcd.replace(/\r?\n/g, "\r\n")
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

    return rightMfcd.replace(/\r?\n/g, "\r\n")
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

    return (tad_1 + custom + tad_2).replace(/\r?\n/g, "\r\n")
    }

Parser.prototype.runIffcc = function()
    {
    iffcc = `package.path = package.path..";./Scripts/?.lua"

local S        = require("Serializer")
local gettext = require("i_18n")

_ = gettext.translate

device_timer_dt     = 0.2

Funnel_min_distance = 250
Funnel_max_distance = 1500

MRGS_balistic_time  = 1.0
MRGS_line_distance  = 23.0
MRGS_k_time         = 0.14
MRGS_k_angle_g      = 2.0
MRGS_k_length_g     = 1.0
MRGS_k_length       = 0.1

FEDS_delta_time     = 0.2

Bomb_lead_time      = 4.0
Rocket_lead_time    = 4.0

PAC_PID_pitch       = {3,3,1}
PAC_PID_heading     = {-1,-0,-0}

Alt_GND_SLOPE_check_time = 1.0   -- sec

DefaultAirThreats = {}
DefaultAirThreats["MAN-FXD"] = {Name = "MAN-FXD", Wingspan = 0, Length = 10, TargetSpeed = 50, Selected = true}
DefaultAirThreats["MAN-RTY"] = {Name = "MAN-RTY", Wingspan = 0, Length = 10, TargetSpeed = 50, Selected = true}
DefaultAirThreats["Array"] = {}
DefaultAirThreats["Array"][0] =
    {Index = 1, Name = "${$(".iffcc_profile:eq(0) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(0) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(0) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(0) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(0) .cover").hasClass("right")}}
DefaultAirThreats["Array"][1] =
    {Index = 2, Name = "${$(".iffcc_profile:eq(1) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(1) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(1) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(1) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(1) .cover").hasClass("right")}}
DefaultAirThreats["Array"][2] =
    {Index = 3, Name = "${$(".iffcc_profile:eq(2) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(2) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(2) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(2) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(2) .cover").hasClass("right")}}
DefaultAirThreats["Array"][3] =
    {Index = 4, Name = "${$(".iffcc_profile:eq(3) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(3) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(3) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(3) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(3) .cover").hasClass("right")}}
DefaultAirThreats["Array"][4] =
    {Index = 5, Name = "${$(".iffcc_profile:eq(4) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(4) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(4) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(4) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(4) .cover").hasClass("right")}}
DefaultAirThreats["Array"][5] =
    {Index = 6, Name = "${$(".iffcc_profile:eq(5) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(5) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(5) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(5) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(5) .cover").hasClass("right")}}
DefaultAirThreats["Array"][6] =
    {Index = 7, Name = "${$(".iffcc_profile:eq(6) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(6) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(6) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(6) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(6) .cover").hasClass("right")}}
DefaultAirThreats["Array"][7] =
    {Index = 8, Name = "${$(".iffcc_profile:eq(7) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(7) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(7) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(7) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(7) .cover").hasClass("right")}}
DefaultAirThreats["Array"][8] =
    {Index = 9, Name = "${$(".iffcc_profile:eq(8) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(8) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(8) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(8) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(8) .cover").hasClass("right")}}
DefaultAirThreats["Array"][9] =
    {Index = 10, Name = "${$(".iffcc_profile:eq(9) .iffcc_program-name input").val()}", Wingspan = ${$(".iffcc_profile:eq(9) .iffcc_program-wingspan input").val()}, Length = ${$(".iffcc_profile:eq(9) .iffcc_program-length input").val()}, TargetSpeed = ${$(".iffcc_profile:eq(9) .iffcc_program-speed input").val()}, Selected = ${$(".iffcc_profile:eq(9) .cover").hasClass("right")}}

---------------------------------------------------------------------------------
----   DEBUG DEFINITIONS  -------------------------------------------
---------------------------------------------------------------------------------
is_debug = false
---------------------------------------------------------------------------------
----   END OF DEBUG DEFINITIONS  --------------------------------
---------------------------------------------------------------------------------

dofile (LockOn_Options.script_path.."IFFCC/IFFCC_radius_table.lua")
dofile (LockOn_Options.script_path.."IFFCC/IFFCC_BIT_modes.lua")

default_db          = LockOn_Options.script_path.."IFFCC/Database/DataBase.lua"

function get_file_name(loader)
    local campaign = LockOn_Options.mission.campaign
    local mission  = LockOn_Options.mission.title
    local                     name     = db_path
    if campaign ~= "" then    name     = name .. campaign .. "/" end
    if mission  ~= "" then    name     = name .. mission .. IFFCC_DB_name_suffix end
    return                    name
end

IFFCC_data = {}

function ReadAGL_FloorAlt(str)
    str, temp   = GetStringField(str)
    str, temp   = GetNumberField(str)
    IFFCC_data["AGL_FloorAlt"] = tonumber(temp)
end

function ReadMSL_FloorAlt(str)
    str, temp   = GetStringField(str)
    IFFCC_data["MSL_FloorAlt"] = tonumber(str)
end

function ReadMSL_CeilingAlt(str)
    str, temp   = GetStringField(str)
    str, temp   = GetNumberField(str)
    IFFCC_data["MSL_CeilingAlt"] = tonumber(temp)

    str, temp   = GetStringField(str)
    if nil ~= string.find(str, "NO", 1, true) then
        IFFCC_data["CCIPGunCrossOccult"] = false
    else
        IFFCC_data["CCIPGunCrossOccult"] = true
    end
end

function ReadCCIPConsentMode(str)
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    local CONSENT_MODE_STRINGS = {}
    CONSENT_MODE_STRINGS[0]     = "OFF"
    CONSENT_MODE_STRINGS[1]     = "3/9"
    CONSENT_MODE_STRINGS[2]     = "5 MIL"

    -- enum CCIP_CONSENT_OPTIONS
    --   CON_OPT_OFF
    --   CON_OPT_3_9
    --   CON_OPT_5_mil

    GetValueFromString(IFFCC_data, "CCIPConsentMode", TrimStringLeft(TrimStringRight(str)), CONSENT_MODE_STRINGS) --TO DO: ЗАПОЛНИТЬ ТАБЛИЦУ РЕАЛЬНЫХ ЗНАЧЕНИЙ
end

function ReadHUDOptions(f)
    local str
    str=f:read()
    local temp
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    local SPEED_OPTIONS_STRINGS = {}
    SPEED_OPTIONS_STRINGS[0]        = "Indicated"
    SPEED_OPTIONS_STRINGS[1]        = "True"
    SPEED_OPTIONS_STRINGS[2]        = "Ground"

    -- AIRSPEED_DISPLAY_OPTIONS
    --   SPEED_OPT_IAS,
    --   SPEED_OPT_TAS,
    --   SPEED_OPT_GS,
    --   SPEED_OPT_MACH_IAS

    GetValueFromString(IFFCC_data, "SpeedDisplayOptions", TrimStringLeft(TrimStringRight(temp)), SPEED_OPTIONS_STRINGS)     --TO DO: ЗАПОЛНИТЬ ТАБЛИЦУ РЕАЛЬНЫХ ЗНАЧЕНИЙ
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    if nil ~= string.find(temp, "Numerics", 1, true) then
        IFFCC_data["Tapes"] = false
    else
        IFFCC_data["Tapes"] = true
    end
    str, temp   = GetStringField(str)
    str, temp   = GetStringField(str)
    if nil ~= string.find(temp, "Standard", 1, true) then
        IFFCC_data["Metric"] = false
    else
        IFFCC_data["Metric"] = true
    end
end

function ReadThreatString(str)
    local ret = {}

    str, temp   = GetNumberField(str)
    if nil ~= temp then
        ret["Index"] = tonumber(temp)
    end

    str, temp   = GetStringField(str)
    if "" == temp  or nil == temp then
        return ret
    end
    ret["Name"] = TrimStringLeft(TrimStringRight(temp))

    str, temp   = GetNumberField(str)
    if nil ~= temp then
        ret["Wingspan"] = tonumber(temp)
    end

    str, temp   = GetNumberField(str)
    if nil ~= temp then
        ret["Length"] = tonumber(temp)
    end

    str, temp   = GetNumberField(str)
    if nil ~= temp then
        ret["TargetSpeed"] = tonumber(temp)
    end

    return ret
end

function ReadAirThreats(f)
    local str
    str=f:read()
    str=f:read()
    IFFCC_data["AirThreats"]            = {}
    IFFCC_data["AirThreats"]["Array"]   = {}
    for i = 0, 11 do
        local res = ReadThreatString(str)
        if nil ~= res["Name"] then
            if "MAN-FXD" == res["Name"] then
                IFFCC_data["AirThreats"]["MAN-FXD"] = res
            elseif "MAN-RTY" == res["Name"] then
                IFFCC_data["AirThreats"]["MAN-RTY"] = res
            else
                print(tostring(res["Index"]-1))
                IFFCC_data["AirThreats"]["Array"][tostring(res["Index"]-1)] = res
            end
        end
        str=f:read()
    end
end

function Read_from_CDU_DB(f)
    local str
    str=f:read()
    while nil ~= str do
        if nil ~= string.find(str, "AGL Floor Alt Alert:", 1, true) then
            ReadAGL_FloorAlt(str)
        end
        if nil ~= string.find(str, "MSL Floor Alt Alert:", 1, true) then
            ReadMSL_FloorAlt(str)
        end
        if nil ~= string.find(str, "MSL Ceiling Alt Alert:", 1, true) then
            ReadMSL_CeilingAlt(str)
        end
        if nil ~= string.find(str, "CCIP Consent Mode", 1, true) then
            ReadCCIPConsentMode(str)
        end
        if nil ~= string.find(str, "HUD Options", 1, true) then
            ReadHUDOptions(f)
        end
        if nil ~= string.find(str, "Air to Air Threats", 1, true) then
            ReadAirThreats(f)
        end
        str=f:read()
    end
end

function ReadAmmoType(str)
    str, temp   = GetStringField(str)
    local AMMO_TYPE_STRINGS = {}
    AMMO_TYPE_STRINGS[0]        = "CM"
    AMMO_TYPE_STRINGS[1]        = "HEI"
    AMMO_TYPE_STRINGS[2]        = "TP"
    GetValueFromString(IFFCC_data, "AmmoType", TrimStringLeft(TrimStringRight(str)), AMMO_TYPE_STRINGS)     --TO DO: ЗАПОЛНИТЬ ТАБЛИЦУ РЕАЛЬНЫХ ЗНАЧЕНИЙ
end

function ReadAmmoManufacturer(str)
    str, temp   = GetStringField(str)
    local AMMO_MANUFACTURER_STRINGS = {}
    AMMO_MANUFACTURER_STRINGS[0]        = "AVERAGE"
    AMMO_MANUFACTURER_STRINGS[1]        = "OLIN"
    AMMO_MANUFACTURER_STRINGS[2]        = "ALLIANT"

    -- GunMFGTypes
    --   AmmoMFG_AVE,
    --   AmmoMFG_OLIN,
    --   AmmoMFG_ALLT

    GetValueFromString(IFFCC_data, "AmmoManufacturer", TrimStringLeft(TrimStringRight(str)), AMMO_MANUFACTURER_STRINGS)     --TO DO: ЗАПОЛНИТЬ ТАБЛИЦУ РЕАЛЬНЫХ ЗНАЧЕНИЙ
end

function ReadPAC1Mode(str)
    str, temp   = GetStringField(str)
    if nil ~= string.find(str, "DISABLED", 1, true) then
        IFFCC_data["PAC1Mode"] = false
    else
        IFFCC_data["PAC1Mode"] = true
    end
end

function ReadGUNMinAlt(str)
    str, temp   = GetStringField(str)
    IFFCC_data["GUNMinAlt"] = tonumber(str)
end

function Read_from_DSMS_Actual(f)
    local str
    str=f:read()
    while nil ~= str do
        if nil ~= string.find(str, "Ammo Type", 1, true) then
            ReadAmmoType(str)
        end
        if nil ~= string.find(str, "Ammo Manufacturer", 1, true) then
            ReadAmmoManufacturer(str)
        end
        if nil ~= string.find(str, "PAC-1 Position Mode", 1, true) then
            ReadPAC1Mode(str)
        end
        if nil ~= string.find(str, " Min Alt (ft)", 1, true) then
            ReadGUNMinAlt(str)
        end
        str=f:read()
    end
end


SETTINGS_PATH  = "IFFCC/SETTINGS.lua"
dofile(LockOn_Options.common_script_path.."mission_prepare.lua")

--RADAR_ALTIMETR_LEFT_ANT_FAILURE       = 0
--RADAR_ALTIMETR_RIGHT_ANT_FAILURE  = 1
--Damage = {    {Failure = RADAR_ALTIMETR_LEFT_ANT_FAILURE, Failure_name = "RadarAltimetr",  Element = 39, Integrity_Treshold = 0.3, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*200},
--          {Failure = RADAR_ALTIMETR_RIGHT_ANT_FAILURE, Failure_name = "RadarAltimetr",  Element = 40, Integrity_Treshold = 0.3}}

--------------------------------------------------------------
-- BIT config
preflight_bit_test_states={{A10C_PREFLIGHT_TEST_START,3.125},{A10C_PREFLIGHT_TEST_B1,5.209},{A10C_PREFLIGHT_TEST_C1_1,6.5},
                           {A10C_PREFLIGHT_TEST_C1_2,1.375},{A10C_PREFLIGHT_TEST_C1_1,4.875},{A10C_PREFLIGHT_TEST_40,4.791},{A10C_PREFLIGHT_TEST_50,4.792},
                           {A10C_PREFLIGHT_TEST_80,1.375},
                           {A10C_GCAS_TEST_4,1.792},{A10C_GCAS_TEST_P_ON,1.416},{A10C_GCAS_TEST_P_LINE,0.375},{A10C_GCAS_TEST_P_ON,0.125},{A10C_GCAS_TEST_5_1,1.0},
                           {A10C_GCAS_TEST_CROSS,1.5,"GCAS_PullUpMessage"},{A10C_GCAS_TEST_CROSS,1.5,"GCAS_AltitudeMessage"},{A10C_GCAS_TEST_5_2,2.084},{A10C_GCAS_TEST_5_3,1.916},
                           {A10C_BIT_TESTS_COMPLETE,2}}

gcas_bit_test_states ={ {A10C_GCAS_TEST_4,1.792},{A10C_GCAS_TEST_P_ON,1.416},{A10C_GCAS_TEST_P_LINE,0.375},{A10C_GCAS_TEST_P_ON,0.125},{A10C_GCAS_TEST_5_1,1.0},
                           {A10C_GCAS_TEST_CROSS,1.5,"GCAS_PullUpMessage"},{A10C_GCAS_TEST_CROSS,1.5,"GCAS_AltitudeMessage"},{A10C_GCAS_TEST_5_2,2.084},{A10C_GCAS_TEST_5_3,1.916},
                           {A10C_BIT_TESTS_COMPLETE,2}}

vmu_bit_test_states ={ {A10C_VMU_TEST_START,2.0},
{A10C_VMU_TEST_RUN,1.5,"VMU_Message_Play",VMU_TEST_PULL_UP},
{A10C_VMU_TEST_RUN,1.5,"VMU_Message_Play",VMU_TEST_ALTITUDE},
{A10C_VMU_TEST_RUN,1.5,"VMU_Message_Play",VMU_TEST_OBSTACLE},
{A10C_VMU_TEST_RUN,1.5,"VMU_Message_Play",VMU_TEST_SPEEDBRAKE},
{A10C_VMU_TEST_RUN,1.5,"VMU_Message_Play",VMU_TEST_WARNING_AUTOPILOT},
{A10C_VMU_TEST_RUN,1.5,"VMU_Message_Play",VMU_TEST_CEILING},
{A10C_VMU_TEST_RUN,1.5,"VMU_Message_Play",VMU_TEST_IFF},
{A10C_VMU_TEST_RUN,1.5,"VMU_Message_Play",VMU_TEST_AUTOPILOT_ENGAGE},
{A10C_BIT_TESTS_COMPLETE,2.0}}


IFFCC_FAILURE_TOTAL = 0
IFFCC_FAILURE_GUN   = 1

Damage = {  {Failure = IFFCC_FAILURE_TOTAL, Failure_name = "IFFCC_FAILURE_TOTAL", Failure_editor_name = _("IFFCC total failure"),  Element = 9, Integrity_Treshold = 0.75, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*300},
        {Failure = IFFCC_FAILURE_GUN, Failure_name = "IFFCC_FAILURE_GUN", Failure_editor_name = _("Gun failure"),  Element = 7, Integrity_Treshold = 0.05, work_time_to_fail_probability = 0.5, work_time_to_fail = 3600*200}}
`

    return iffcc.replace(/\r?\n/g, "\r\n")
    }