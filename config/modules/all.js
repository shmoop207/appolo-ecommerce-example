"use strict";
const mongo_1 = require("@appolo/mongo");
const view_1 = require("@appolo/view");
const validator_1 = require("@appolo/validator");
const logger_1 = require("@appolo/logger");
module.exports = async function (app, env) {
    await app.module.load(logger_1.LoggerModule);
    app.module.use(view_1.ViewModule.for({ viewEngine: view_1.ViewEngines.nunjucks }), validator_1.ValidationModule, mongo_1.MongoModule.for({
        connection: env.mongo, config: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        }
    }));
};
//# sourceMappingURL=all.js.map