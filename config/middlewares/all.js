"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const serve = require("serve-static");
const path = require("path");
const cors = require("cors");
module.exports = function (app) {
    app.route
        .use(bodyParser.json())
        .use(cors())
        .use("/uploads", serve(path.join(__dirname, "/uploads")))
        .use(serve(path.join(__dirname, "../../client/build")));
};
//# sourceMappingURL=all.js.map