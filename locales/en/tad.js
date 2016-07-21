var tad =
    {
    tad :
        {
        text :
            {
            profile : ["bullseye",
                       "range rings",
                       "flight plan",
                       "waypoints",
                       "hook",
                       "hook type",
                       "ownship",
                       "spi"]
            },
        switch :
            {
            boolean :
                {
                left : "on",
                right : "off"
                },
            spi     :
                {
                left : "passive",
                right : "active"
                },
            ownship :
                {
                left : "all",
                right : "own"
                }
            },
        data :
            {
            profiles : [{
                        name       : "ALL",
                        bullseye   : true,
                        rings      : true,
                        flightPlan : true,
                        waypoints  : true,
                        hook       : 1,
                        ownship    : true,
                        spi        : true
                        },
                        {
                        name       : "LOFF",
                        bullseye   : true,
                        rings      : true,
                        flightPlan : false,
                        waypoints  : true,
                        hook       : 1,
                        ownship    : true,
                        spi        : true
                        },
                        {
                        name       : "ACT",
                        bullseye   : true,
                        rings      : true,
                        flightPlan : true,
                        waypoints  : true,
                        hook       : 2,
                        ownship    : true,
                        spi        : true
                        },
                        {
                        name       : "NONE",
                        bullseye   : false,
                        rings      : false,
                        flightPlan : false,
                        waypoints  : false,
                        hook       : 0,
                        ownship    : false,
                        spi        : false}]
            }
        }
    }

// // //

module.exports = tad