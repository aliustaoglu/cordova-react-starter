/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/www/injectCSP.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/csp-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/csp-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Policy(policy) {\n  // Allow empty policies\n  if (!policy) {\n    this.raw = '';\n    this.directives = {};\n    return this;\n  }\n\n  policy = policy.toLowerCase();\n\n  this.raw = policy;\n  this.directives = {};\n\n  var directives = this.raw.split(';');\n  for (var i = 0; i < directives.length; ++i) {\n    var directive = directives[i].trim();\n    var tokens = directive.split(/\\s+/);\n\n    var name = tokens[0];\n    if (!name) {\n      continue;\n    }\n    var values = tokens.slice(1, tokens.length);\n    this.directives[name] = values.join(' ');\n  }\n  return this;\n}\n\nPolicy.prototype.get = function(directive) {\n  if (!this.directives[directive])\n    return '';\n  return this.directives[directive];\n};\n\nPolicy.prototype.add = function(directive, value) {\n  if (!this.directives[directive]) {\n    this.directives[directive] = value;\n  } else {\n    this.directives[directive] += ' ' + value;\n  }\n  return this.directives[directive];\n};\n\nPolicy.prototype.set = function(directive, value) {\n  if (!value) {\n    delete this.directives[directive];\n    return;\n  }\n  this.directives[directive] = value;\n  return this.directives[directive];\n};\n\nPolicy.prototype.remove = function(directive, value) {\n  if (!this.directives[directive]) {\n    return;\n  } else {\n    var directiveValues = this.directives[directive].split(' ');\n    var index = directiveValues.indexOf(value);\n    if (index > -1) {\n      directiveValues.splice(index, 1);\n      this.directives[directive] = directiveValues.join(' ');\n    }\n  }\n};\n\nPolicy.prototype.toString = Policy.prototype.string = function() {\n  var out = '';\n  for (var directive in this.directives) {\n    if (this.directives[directive]) {\n      out += directive + ' ' + this.directives[directive] + '; ';\n    }\n  }\n  return out.trim();\n};\n\nPolicy.prototype.toPrettyString = Policy.prototype.prettyString = function() {\n  var out = '';\n  for (var directive in this.directives) {\n    if (this.directives[directive]) {\n      out += directive+'\\n\\t'+this.directives[directive]+';\\n';\n    }\n  }\n  return out.substring(0,out.length-1);\n};\n\nmodule.exports = Policy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NwLXBhcnNlL2luZGV4LmpzPzlhZGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEMsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2NzcC1wYXJzZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUG9saWN5KHBvbGljeSkge1xuICAvLyBBbGxvdyBlbXB0eSBwb2xpY2llc1xuICBpZiAoIXBvbGljeSkge1xuICAgIHRoaXMucmF3ID0gJyc7XG4gICAgdGhpcy5kaXJlY3RpdmVzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwb2xpY3kgPSBwb2xpY3kudG9Mb3dlckNhc2UoKTtcblxuICB0aGlzLnJhdyA9IHBvbGljeTtcbiAgdGhpcy5kaXJlY3RpdmVzID0ge307XG5cbiAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnJhdy5zcGxpdCgnOycpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcmVjdGl2ZXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1tpXS50cmltKCk7XG4gICAgdmFyIHRva2VucyA9IGRpcmVjdGl2ZS5zcGxpdCgvXFxzKy8pO1xuXG4gICAgdmFyIG5hbWUgPSB0b2tlbnNbMF07XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIHZhbHVlcyA9IHRva2Vucy5zbGljZSgxLCB0b2tlbnMubGVuZ3RoKTtcbiAgICB0aGlzLmRpcmVjdGl2ZXNbbmFtZV0gPSB2YWx1ZXMuam9pbignICcpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5Qb2xpY3kucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGRpcmVjdGl2ZSkge1xuICBpZiAoIXRoaXMuZGlyZWN0aXZlc1tkaXJlY3RpdmVdKVxuICAgIHJldHVybiAnJztcbiAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlc1tkaXJlY3RpdmVdO1xufTtcblxuUG9saWN5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihkaXJlY3RpdmUsIHZhbHVlKSB7XG4gIGlmICghdGhpcy5kaXJlY3RpdmVzW2RpcmVjdGl2ZV0pIHtcbiAgICB0aGlzLmRpcmVjdGl2ZXNbZGlyZWN0aXZlXSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlyZWN0aXZlc1tkaXJlY3RpdmVdICs9ICcgJyArIHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzLmRpcmVjdGl2ZXNbZGlyZWN0aXZlXTtcbn07XG5cblBvbGljeS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZGlyZWN0aXZlLCB2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgZGVsZXRlIHRoaXMuZGlyZWN0aXZlc1tkaXJlY3RpdmVdO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmRpcmVjdGl2ZXNbZGlyZWN0aXZlXSA9IHZhbHVlO1xuICByZXR1cm4gdGhpcy5kaXJlY3RpdmVzW2RpcmVjdGl2ZV07XG59O1xuXG5Qb2xpY3kucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGRpcmVjdGl2ZSwgdmFsdWUpIHtcbiAgaWYgKCF0aGlzLmRpcmVjdGl2ZXNbZGlyZWN0aXZlXSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlyZWN0aXZlVmFsdWVzID0gdGhpcy5kaXJlY3RpdmVzW2RpcmVjdGl2ZV0uc3BsaXQoJyAnKTtcbiAgICB2YXIgaW5kZXggPSBkaXJlY3RpdmVWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRpcmVjdGl2ZVZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5kaXJlY3RpdmVzW2RpcmVjdGl2ZV0gPSBkaXJlY3RpdmVWYWx1ZXMuam9pbignICcpO1xuICAgIH1cbiAgfVxufTtcblxuUG9saWN5LnByb3RvdHlwZS50b1N0cmluZyA9IFBvbGljeS5wcm90b3R5cGUuc3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHZhciBvdXQgPSAnJztcbiAgZm9yICh2YXIgZGlyZWN0aXZlIGluIHRoaXMuZGlyZWN0aXZlcykge1xuICAgIGlmICh0aGlzLmRpcmVjdGl2ZXNbZGlyZWN0aXZlXSkge1xuICAgICAgb3V0ICs9IGRpcmVjdGl2ZSArICcgJyArIHRoaXMuZGlyZWN0aXZlc1tkaXJlY3RpdmVdICsgJzsgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dC50cmltKCk7XG59O1xuXG5Qb2xpY3kucHJvdG90eXBlLnRvUHJldHR5U3RyaW5nID0gUG9saWN5LnByb3RvdHlwZS5wcmV0dHlTdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG91dCA9ICcnO1xuICBmb3IgKHZhciBkaXJlY3RpdmUgaW4gdGhpcy5kaXJlY3RpdmVzKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aXZlc1tkaXJlY3RpdmVdKSB7XG4gICAgICBvdXQgKz0gZGlyZWN0aXZlKydcXG5cXHQnK3RoaXMuZGlyZWN0aXZlc1tkaXJlY3RpdmVdKyc7XFxuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMCxvdXQubGVuZ3RoLTEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb2xpY3k7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/csp-parse/index.js\n");

/***/ }),

/***/ "./src/www/injectCSP.ts":
/*!******************************!*\
  !*** ./src/www/injectCSP.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar csp_parse_1 = __importDefault(__webpack_require__(/*! csp-parse */ \"./node_modules/csp-parse/index.js\"));\nvar defaultPolicyStr = 'default-src \"self\" data: gap: https://ssl.gstatic.com \"unsafe-eval\"; style-src \"self\" \"unsafe-inline\"; media-src *; img-src \"self\" data: content:;';\nvar existingPolicyEl = document.querySelector('meta[http-equiv=\"Content-Security-Policy\"]');\nvar exstingPolicyStr = existingPolicyEl && existingPolicyEl.getAttribute('content');\nif (existingPolicyEl)\n    existingPolicyEl.remove();\nvar policyEl = document.createElement('meta');\npolicyEl.setAttribute('http-equiv', 'Content-Security-Policy');\npolicyEl.setAttribute('content', exstingPolicyStr || defaultPolicyStr);\nvar policy = new csp_parse_1.default(policyEl.getAttribute('content'));\npolicy.add('default-src', '*');\npolicyEl.setAttribute('content', policy.toString());\ndocument.head.appendChild(policyEl);\nconsole.log(\"Set Content Security Policy:\", policy.toString());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd3d3L2luamVjdENTUC50cz83Yzk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkdBQStCO0FBRS9CLElBQU0sZ0JBQWdCLEdBQ3BCLG9KQUFvSixDQUFDO0FBQ3ZKLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDN0MsNENBQTRDLENBQzdDLENBQUM7QUFDRixJQUFNLGdCQUFnQixHQUNwQixnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0QsSUFBSSxnQkFBZ0I7SUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFDL0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsQ0FBQztBQUN2RSxJQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQVcsQ0FBQyxDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvd3d3L2luamVjdENTUC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb2xpY3kgZnJvbSAnY3NwLXBhcnNlJztcblxuY29uc3QgZGVmYXVsdFBvbGljeVN0ciA9XG4gICdkZWZhdWx0LXNyYyBcInNlbGZcIiBkYXRhOiBnYXA6IGh0dHBzOi8vc3NsLmdzdGF0aWMuY29tIFwidW5zYWZlLWV2YWxcIjsgc3R5bGUtc3JjIFwic2VsZlwiIFwidW5zYWZlLWlubGluZVwiOyBtZWRpYS1zcmMgKjsgaW1nLXNyYyBcInNlbGZcIiBkYXRhOiBjb250ZW50OjsnO1xuY29uc3QgZXhpc3RpbmdQb2xpY3lFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE1ldGFFbGVtZW50PihcbiAgJ21ldGFbaHR0cC1lcXVpdj1cIkNvbnRlbnQtU2VjdXJpdHktUG9saWN5XCJdJyxcbik7XG5jb25zdCBleHN0aW5nUG9saWN5U3RyID1cbiAgZXhpc3RpbmdQb2xpY3lFbCAmJiBleGlzdGluZ1BvbGljeUVsLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuaWYgKGV4aXN0aW5nUG9saWN5RWwpIGV4aXN0aW5nUG9saWN5RWwucmVtb3ZlKCk7XG5cbmNvbnN0IHBvbGljeUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xucG9saWN5RWwuc2V0QXR0cmlidXRlKCdodHRwLWVxdWl2JywgJ0NvbnRlbnQtU2VjdXJpdHktUG9saWN5Jyk7XG5wb2xpY3lFbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBleHN0aW5nUG9saWN5U3RyIHx8IGRlZmF1bHRQb2xpY3lTdHIpO1xuY29uc3QgcG9saWN5ID0gbmV3IFBvbGljeShwb2xpY3lFbC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSBhcyBzdHJpbmcpO1xucG9saWN5LmFkZCgnZGVmYXVsdC1zcmMnLCAnKicpO1xucG9saWN5RWwuc2V0QXR0cmlidXRlKCdjb250ZW50JywgcG9saWN5LnRvU3RyaW5nKCkpO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChwb2xpY3lFbCk7XG5cbmNvbnNvbGUubG9nKGBTZXQgQ29udGVudCBTZWN1cml0eSBQb2xpY3k6YCwgcG9saWN5LnRvU3RyaW5nKCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/www/injectCSP.ts\n");

/***/ })

/******/ });