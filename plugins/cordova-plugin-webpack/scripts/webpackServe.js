"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var glob_1 = __importDefault(require("glob"));
var yargs_parser_1 = __importDefault(require("yargs-parser"));
var webpack_1 = __importDefault(require("webpack"));
var webpack_inject_plugin_1 = __importDefault(require("webpack-inject-plugin"));
var webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
var express_1 = __importDefault(require("express"));
var create_html_1 = __importDefault(require("create-html"));
var WebpackDevServerUtils_1 = require("react-dev-utils/WebpackDevServerUtils");
var webpackHelpers = __importStar(require("./utils/webpackHelpers"));
var CordovaConfigParser_1 = __importDefault(require("./utils/CordovaConfigParser"));
module.exports = function (ctx) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var platforms, targetPlatforms, argv, customWebpackConfig, customDevServerConfig, protocol, host, defaultPort, port, urls, defaultAccessHost, webpackConfig, devServerConfig, compiler, server;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    platforms = ['browser', 'android', 'ios'];
                    targetPlatforms = platforms.filter(function (platform) {
                        return ctx.opts.platforms.includes(platform);
                    });
                    if (!platforms.some(function (platform) { return ctx.opts.platforms.includes(platform); })) {
                        resolve();
                        return [2];
                    }
                    argv = yargs_parser_1.default(ctx.opts.options.argv.join(' '));
                    if (!argv.livereload && !argv.l) {
                        resolve();
                        return [2];
                    }
                    customWebpackConfig = webpackHelpers.webpackConfig(ctx.opts.projectRoot, argv.webpackConfig || argv.w);
                    customDevServerConfig = customWebpackConfig.devServer || {};
                    protocol = customDevServerConfig.https ? 'https' : 'http';
                    host = customDevServerConfig.host || '0.0.0.0';
                    defaultPort = customDevServerConfig.port || 8080;
                    return [4, WebpackDevServerUtils_1.choosePort(host, defaultPort)];
                case 1:
                    port = _a.sent();
                    if (!port) {
                        resolve();
                        return [2];
                    }
                    urls = WebpackDevServerUtils_1.prepareUrls(protocol, host, port);
                    defaultAccessHost = {
                        android: "10.0.2.2",
                        ios: "localhost",
                    };
                    webpackConfig = __assign({}, customWebpackConfig, { mode: 'development', plugins: (customWebpackConfig.plugins || []).concat([
                            new webpack_inject_plugin_1.default(function () {
                                return fs_1.default.readFileSync(path_1.default.join(__dirname, 'www/injectCSP.js'), 'utf8');
                            }),
                            new webpack_inject_plugin_1.default(function () {
                                return fs_1.default.readFileSync(path_1.default.join(__dirname, 'www/injectCordovaScript.js'), 'utf8');
                            }),
                        ]) });
                    devServerConfig = __assign({ contentBase: path_1.default.join(ctx.opts.projectRoot, 'www'), historyApiFallback: true, watchContentBase: true, hot: true }, customDevServerConfig, { host: host,
                        port: port, before: function (app, server) {
                            if (customDevServerConfig.before) {
                                customDevServerConfig.before(app, server);
                            }
                            targetPlatforms.forEach(function (platform) {
                                app.use("/" + platform, express_1.default.static(path_1.default.join(ctx.opts.projectRoot, 'platforms', platform, 'platform_www')));
                            });
                        } });
                    if (devServerConfig.hot)
                        webpack_dev_server_1.default.addDevServerEntrypoints(webpackConfig, devServerConfig);
                    targetPlatforms.forEach(function (platform) {
                        if (platform === 'browser') {
                            var html = create_html_1.default({
                                head: "<meta http-equiv=\"refresh\" content=\"0;URL=" + urls.localUrlForBrowser + "\">",
                            });
                            fs_1.default.writeFileSync(path_1.default.join(ctx.opts.projectRoot, 'platforms', platform, 'www/index.html'), html);
                            return;
                        }
                        glob_1.default
                            .sync(path_1.default.join(ctx.opts.projectRoot, 'platforms', platform, '**/config.xml'))
                            .forEach(function (configXmlPath) {
                            var configXml = new CordovaConfigParser_1.default(configXmlPath);
                            configXml.setContent(protocol + "://" + (urls.lanUrlForConfig ||
                                defaultAccessHost[platform]) + ":" + port);
                            if (platform === 'ios') {
                                configXml.setElement('allow-navigation', { href: '*' });
                            }
                            configXml.write();
                        });
                    });
                    compiler = webpack_1.default(webpackConfig);
                    server = new webpack_dev_server_1.default(compiler, devServerConfig);
                    server.listen(port, host, function (err) {
                        if (err && err.message) {
                            console.log(err.message);
                            reject();
                            return;
                        }
                        console.log('Starting the development server...\n');
                        resolve();
                    });
                    return [2];
            }
        });
    }); });
};
//# sourceMappingURL=webpackServe.js.map