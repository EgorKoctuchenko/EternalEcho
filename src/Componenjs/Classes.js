"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Person = /*#__PURE__*/function () {
  function Person(namePerson, atPerson, defPerson, moveOutPerson, critPerson, iconPerson, hpPerson, fullHpPerson, typePerson) {
    _classCallCheck(this, Person);
    _defineProperty(this, "namePerson", void 0);
    _defineProperty(this, "atPerson", void 0);
    _defineProperty(this, "defPerson", void 0);
    _defineProperty(this, "moveOutPerson", void 0);
    _defineProperty(this, "critPerson", void 0);
    _defineProperty(this, "iconPerson", void 0);
    _defineProperty(this, "hpPerson", void 0);
    _defineProperty(this, "fullHpPerson", void 0);
    _defineProperty(this, "typePerson", void 0);
    this.namePerson = namePerson;
    this.atPerson = atPerson;
    this.defPerson = defPerson;
    this.moveOutPerson = moveOutPerson;
    this.critPerson = critPerson;
    this.iconPerson = iconPerson;
    this.hpPerson = hpPerson;
    this.fullHpPerson = fullHpPerson;
    this.typePerson = typePerson;
  }
  return _createClass(Person, [{
    key: "getNamePerson",
    value: function getNamePerson() {
      return this.namePerson;
    }
  }, {
    key: "getAttackPerson",
    value: function getAttackPerson() {
      return this.atPerson;
    }
  }, {
    key: "getDefPerson",
    value: function getDefPerson() {
      return this.defPerson;
    }
  }, {
    key: "getMoveOutPerson",
    value: function getMoveOutPerson() {
      return this.moveOutPerson;
    }
  }, {
    key: "getCritPerson",
    value: function getCritPerson() {
      return this.critPerson;
    }
  }, {
    key: "getIconPerson",
    value: function getIconPerson() {
      return this.iconPerson;
    }
  }, {
    key: "getHpPerson",
    value: function getHpPerson() {
      return this.hpPerson;
    }
  }, {
    key: "setHpPerson",
    value: function setHpPerson(newVal) {
      this.hpPerson += newVal;
      this.hpPerson > this.fullHpPerson ? this.hpPerson = this.fullHpPerson : this.hpPerson;
    }
  }, {
    key: "getFullHpPerson",
    value: function getFullHpPerson() {
      return this.fullHpPerson;
    }
  }, {
    key: "getTypePerson",
    value: function getTypePerson() {
      return this.typePerson;
    }
  }]);
}();
var HeroPerson = /*#__PURE__*/function (_Person2) {
  function HeroPerson(namePerson, atPerson, defPerson, moveOutPerson, critPerson, iconPerson, hpPerson, fullHpPerson, typePerson, manaPerson) {
    var _this;
    _classCallCheck(this, HeroPerson);
    _this = _callSuper(this, HeroPerson, [namePerson, atPerson, defPerson, moveOutPerson, critPerson, iconPerson, hpPerson, fullHpPerson, typePerson]);
    _defineProperty(_this, "manaPerson", void 0);
    _this.manaPerson = manaPerson;
    return _this;
  }
  _inherits(HeroPerson, _Person2);
  return _createClass(HeroPerson, [{
    key: "getManaPerson",
    value: function getManaPerson() {
      return this.manaPerson;
    }
  }]);
}(Person);
var _default = exports.default = HeroPerson;