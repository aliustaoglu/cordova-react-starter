"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
var cordova_common_1 = require("cordova-common");
var elementtree_1 = __importDefault(require("elementtree"));
var CordovaConfigParser = (function (_super) {
    __extends(CordovaConfigParser, _super);
    function CordovaConfigParser(path) {
        var _this = _super.call(this, path) || this;
        _this.path = path;
        return _this;
    }
    CordovaConfigParser.prototype.findOrCreate = function (name) {
        var ret = this.doc.find(name);
        if (!ret) {
            ret = elementtree_1.default.Element(name);
            this.doc.getroot().append(ret);
        }
        return ret;
    };
    CordovaConfigParser.prototype.content = function () {
        var el = this.doc.find('content');
        return el.attrib.src;
    };
    CordovaConfigParser.prototype.setContent = function (src) {
        var el = this.doc.find('content');
        el.attrib.src = src;
    };
    CordovaConfigParser.prototype.setElement = function (name, attributes) {
        var el = this.findOrCreate(name);
        el.attrib = attributes;
    };
    return CordovaConfigParser;
}(cordova_common_1.ConfigParser));
exports.default = CordovaConfigParser;
//# sourceMappingURL=CordovaConfigParser.js.map