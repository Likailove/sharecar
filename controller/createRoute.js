exports.createRoute = function() {
    return function(req, res) {
        // console.log("get in to createRoute controller");
        // var routeModel = require('../database/driverRoute');

        // var newRoute = new routeModel({
        //     DriverDeptDate : req.body.DriverDeptDate,
        //     DriverDeptTime : req.body.DriverDeptTime,
        //     // TimeTolerance: req.body.TimeTolerance,
        //     PostalCode : req.body.PostalCode,
        //     // AreaTolerance: req.body.AreaTolerance,
        //     driver:req.session.user
        // });
        // newRoute.save();
        // console.log("SAVE");
        // res.send(200);
        var Route = global.dbHandel.getModel('driverroute');
        var name = req.session.user;
        var drideptdate = req.body.drideptdate;
        var dridepthour = req.body.dridepthour;
        //var drideptmin = req.body.drideptmin;
        var postcode = req.body.postcode;
        Route.create({ // 创建一组route对象置入model
            name: name,
            dridate: drideptdate,
            drihour: dridepthour,
            //drimin: drideptmin,
            pcode: postcode
        }, function(err) {
            if (err) {
                res.send(500);
                console.log(err);
            } else {
                // req.session.error = '用户名创建成功！';
                res.send(200);
            }
        });
    };
};
// exports.getAllRoutes = function() {
//     return function(req, res) {
//         console.log("get in to getAllEventTypes controller");
//     }
// }
