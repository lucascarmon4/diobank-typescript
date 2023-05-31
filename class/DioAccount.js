"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.getName = function () {
            return _this.name;
        };
        this.setBalance = function (value) {
            _this.balance = value;
        };
        this.addBalance = function (value) {
            _this.balance += value;
        };
        this.deposit = function (value) {
            if (_this.validateStatus()) {
                _this.balance += value;
                console.log("Voc\u00EA depositou ".concat(value, " reais com sucesso! Novo saldo: ").concat(_this.balance));
            }
        };
        this.withdraw = function (value) {
            if (value > _this.balance) {
                throw new Error("Voc\u00EA n\u00E3o pode sacar um valor maior que ".concat(_this.balance, "!"));
            }
            else {
                if (_this.validateStatus()) {
                    _this.balance -= value;
                    console.log("Voc\u00EA sacou ".concat(value, " reais com sucesso! Novo saldo: ").concat(_this.balance));
                }
            }
        };
        this.getMyBalance = function () {
            console.log(_this.balance);
        };
        this.validateStatus = function () {
            if (_this.status) {
                return _this.status;
            }
            throw new Error("Sua conta está desativada! Por favor, contate o banco.");
        };
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;
