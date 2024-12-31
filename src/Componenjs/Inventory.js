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
var listItems = [{
  id: 1,
  name: "Зілля здоров'я",
  valueEffect: 15,
  descEffect: "Ваш герой поповнює своє здоров'я на 15",
  type: "Heal"
}, {
  id: 2,
  name: "Ніж",
  valueEffect: 15,
  descEffect: "Ваш герой підвищує свою атаку на 15",
  type: "Attack"
}, {
  id: 3,
  name: "Зілля гніву",
  valueEffect: 50,
  descEffect: "Ваш герой підвищує свою атаку на 50, але його захист знижується на 20",
  valueEffect2: 20,
  type: "Attack"
}, {
  id: 4,
  name: "Зілля захисту",
  valueEffect: 15,
  descEffect: "Ваш герой підвищує свій захист на 15",
  type: "Shield"
}, {
  id: 5,
  name: "Зняття ефекту",
  valueEffect: 0,
  descEffect: "Ваш герой знімає усі негативні ефекти",
  type: "Immunity"
}];
var Inventory = function Inventory(_ref) {
  var setChoseMove = _ref.setChoseMove,
    setInterac = _ref.setInterac;
  //InventoryItems
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var itemsPerPage = 4;
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
    className: "InventoryList"
  }, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      opacity: currentPage > 0 ? 1 : 0
    },
    className: "InventoryList__Button",
    onClick: function onClick() {
      setCurrentPage(currentPage - 1), setInterac(true);
    }
  }, "<"), /*#__PURE__*/_react.default.createElement("div", {
    className: "InventoryList__Items"
  }, listItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.id,
      className: "InventoryList__Items__Item"
    }, /*#__PURE__*/_react.default.createElement("p", {
      onMouseMove: function onMouseMove(e) {
        return handleMouseMove(item.descEffect);
      },
      onMouseLeave: handleMouseLeave
    }, item.name));
  })), /*#__PURE__*/_react.default.createElement("button", {
    style: {
      opacity: (currentPage + 1) * itemsPerPage < listItems.length ? 1 : 0
    },
    className: "InventoryList__Button",
    onClick: function onClick() {
      setCurrentPage(currentPage + 1), setInterac(true);
    }
  }, ">")));
};
var _default = exports.default = Inventory;