"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __importDefault(require("@actions/core"));
var http_1 = __importDefault(require("http"));
try {
    var youtubeId = core_1["default"].getInput('account-id');
    var youtubePw = core_1["default"].getInput('account-password');
    var requestOptions = {
        hostname: 'music.youtube.com',
        path: '/'
    };
    http_1["default"].request(requestOptions, function (response) {
        var serverData = '';
        response.on('data', function (chunk) {
            serverData += chunk;
        });
        response.on('end', function () {
            console.log(serverData);
        });
    });
}
catch (error) {
    core_1["default"].setFailed(error.message);
}
//# sourceMappingURL=index.js.map