"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewAccountType = void 0;
var DioAccount_1 = require("./DioAccount");
var NewAccountType = /** @class */ (function (_super) {
    __extends(NewAccountType, _super);
    function NewAccountType(name, accountNumber) {
        var _this = _super.call(this, name, accountNumber) || this;
        _this.deposit = function (value) {
            if (_this.validateStatus()) {
                _this.addBalance(value + 10);
                console.log("Voc\u00EA depositou ".concat(value + 10, " reais com sucesso!"));
            }
        };
        return _this;
    }
    return NewAccountType;
}(DioAccount_1.DioAccount));
exports.NewAccountType = NewAccountType;
