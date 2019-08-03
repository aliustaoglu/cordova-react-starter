"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var interpret_1 = __importDefault(require("interpret"));
var rechoir_1 = __importDefault(require("rechoir"));
var findup_sync_1 = __importDefault(require("findup-sync"));
exports.defaultWebpackConfigPath = function (cwd) {
    var extensions = Object.keys(interpret_1.default.extensions);
    var defaultConfigFileNames = ['webpack.config', 'webpackfile'];
    var configFileRegExp = "(" + defaultConfigFileNames.join('|') + ")(" + extensions.join('|') + ")";
    var configPath = findup_sync_1.default(configFileRegExp, {
        cwd: cwd,
    }) || path_1.default.join(cwd, 'webpack.config.js');
    return configPath;
};
exports.webpackConfig = function (cwd, configPath) {
    var resolvedConfigPath = (function () {
        if (!configPath) {
            return exports.defaultWebpackConfigPath(cwd);
        }
        if (path_1.default.isAbsolute(configPath)) {
            return path_1.default.resolve(configPath);
        }
        return path_1.default.resolve(cwd, configPath);
    })();
    rechoir_1.default.prepare(interpret_1.default.extensions, resolvedConfigPath);
    var config = require(resolvedConfigPath);
    return config.default || config;
};
//# sourceMappingURL=webpackHelpers.js.map