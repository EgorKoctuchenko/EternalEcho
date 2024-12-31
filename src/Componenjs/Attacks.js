"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../Style/App.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MainComp = function MainComp(_ref) {
  var setChoseMove = _ref.setChoseMove,
    setInterac = _ref.setInterac;
  //SuperBar
  var _useState = (0, _react.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    superBar = _useState2[0],
    setSuperBar = _useState2[1];

  //MouseLogic
  var _useState3 = (0, _react.useState)({
      visible: false,
      text: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    tooltip = _useState4[0],
    setTooltip = _useState4[1];
  var handleMouseMove = function handleMouseMove(text) {
    setTooltip({
      visible: true,
      text: text
    });
  };
  var handleMouseLeave = function handleMouseLeave() {
    setTooltip({
      visible: false,
      text: ""
    });
  };
  ///
  ///Attacks
  ///

  var attackObj = [{
    idAt: 1,
    nameAt: "Удар рукою",
    typeAt: "None",
    descAt: "Наносить шкоду ворогу у розмірі 10",
    valueAt: 10
  }, {
    idAt: 2,
    nameAt: "Фаєрбол",
    typeAt: "Magic",
    descAt: "Наносить магічну шкоду ворогові у розмірі 1352",
    valueAt: 634,
    anotherValAt: true,
    anotherValNumAt: 40
  }, {
    idAt: 3,
    nameAt: "Кігті демона",
    typeAt: "Demon",
    descAt: "Наносить 156 шкоди ворогові",
    valueAt: 30,
    anotherValAt: true,
    anotherValNumAt: 15
  }, {
    idAt: 4,
    nameAt: "Приголомшення",
    typeAt: "Control",
    descAt: "Ваш супротивник не може атакувати наступний хід",
    valueAt: 50
  }, {
    idAt: 5,
    nameAt: "Потужний удар",
    typeAt: "Nox",
    descAt: "Ваш герой наносить 150 шкоди супротивнику тричі",
    valueAt: 50,
    anotherValAt: true,
    anotherValNumAt: 100
  }];

  //
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceOuter"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setChoseMove("Back");
    },
    className: "BackButton"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "<"), /*#__PURE__*/_react.default.createElement("h3", null, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C")), /*#__PURE__*/_react.default.createElement("div", {
    className: "Tooltip"
  }, tooltip.visible && tooltip.text), /*#__PURE__*/_react.default.createElement("div", {
    className: "AttacksMenu"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "AttacksMenu__Base"
  }, attackObj.slice(0, 4).map(function (item) {
    return /*#__PURE__*/_react.default.createElement("button", {
      onMouseMove: function onMouseMove() {
        return handleMouseMove(item.descAt);
      },
      onMouseLeave: handleMouseLeave,
      key: item.idAt,
      className: "AttacksMenu__Base__at"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "".concat(item.nameAt)), /*#__PURE__*/_react.default.createElement("img", {
      className: "interfaceUpSide__First__Info__Names__Type",
      src: "/assets/Types/type".concat(item.typeAt, ".png")
    }), item.anotherValAt === true && /*#__PURE__*/_react.default.createElement("h4", {
      className: "AttacksMenu__Base__at__SecVal ".concat(item.typeAt === "Magic" ? "magic-style" : item.typeAt === "Demon" ? "demon-style" : "")
    }, "".concat(item.anotherValNumAt)));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "AttacksMenu__Super"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "AttacksMenu__Super__Bar"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "AttacksMenu__Super__Bar__Info"
  }, "".concat(superBar, " / 100")), /*#__PURE__*/_react.default.createElement("div", {
    className: "AttacksMenu__Super__Bar__Outside"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: superBar + "%"
    },
    className: "AttacksMenu__Super__Bar__Inside"
  }))), /*#__PURE__*/_react.default.createElement("button", {
    onMouseMove: function onMouseMove() {
      return handleMouseMove(attackObj[4].descAt);
    },
    onMouseLeave: handleMouseLeave,
    className: superBar < 100 ? "AttacksMenu__Super__at" : "AttacksMenu__Super__at__Active"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "".concat(attackObj[4].nameAt)), /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceUpSide__First__Info__Names__Type ".concat(superBar < 100 ? "icon-dark" : ""),
    src: "/assets/Types/type".concat(attackObj[4].typeAt, ".png")
  }), /*#__PURE__*/_react.default.createElement("h4", {
    className: "AttacksMenu__Base__at__SecVal super-style"
  }, "".concat(attackObj[4].anotherValNumAt))))));
};
var _default = exports.default = MainComp;