"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../Style/App.css");
var _Attack = _interopRequireDefault(require("../assets/Icons/Attack.png"));
var _Run = _interopRequireDefault(require("../assets/Icons/Run.png"));
var _Inventory = _interopRequireDefault(require("../assets/Icons/Inventory.png"));
var _prepare = _interopRequireDefault(require("../assets/Icons/prepare.png"));
var _CharAtack = _interopRequireDefault(require("../assets/Icons/CharAtack.png"));
var _CharDefense = _interopRequireDefault(require("../assets/Icons/CharDefense.png"));
var _CharAgil = _interopRequireDefault(require("../assets/Icons/CharAgil.png"));
var _CharKrit = _interopRequireDefault(require("../assets/Icons/CharKrit.png"));
var _Classes = _interopRequireDefault(require("./Classes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PlayerInterface = function PlayerInterface(_ref) {
  var persons = _ref.persons,
    setChoseMove = _ref.setChoseMove,
    setPersons = _ref.setPersons;
  var _useState = (0, _react.useState)(200),
    _useState2 = _slicedToArray(_useState, 2),
    greenHP = _useState2[0],
    setGreenHP = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    redHP = _useState4[0],
    setRedHP = _useState4[1];
  //
  //HP Color
  //
  (0, _react.useEffect)(function () {
    var hpRatio = persons[0].getHpPerson() / persons[0].getFullHpPerson();
    setGreenHP(hpRatio * 200);
    setRedHP((1 - hpRatio) * 200);
  }, [persons[0].getHpPerson(), persons[0].getFullHpPerson()]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceOuter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__First"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceUpSide__First__Avatar",
    src: "/assets/Avatars/".concat(persons[0].getIconPerson(), ".png")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__First__Info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__First__Info__Names"
  }, /*#__PURE__*/_react.default.createElement("h3", null, persons[0].getNamePerson()), /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceUpSide__First__Info__Names__Type",
    src: "/assets/Types/type".concat(persons[0].getTypePerson(), ".png")
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__First__Info__Stats"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__First__Info__Stats__Current"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceUpSide__First__Info__Stats__Current__Img",
    src: _CharAtack.default
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceUpSide__First__Info__Stats__Current__Stat"
  }, persons[0].getAttackPerson())), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__First__Info__Stats__Current"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceUpSide__First__Info__Stats__Current__Img",
    src: _CharDefense.default
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceUpSide__First__Info__Stats__Current__Stat"
  }, persons[0].getDefPerson())), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__First__Info__Stats__Current"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceUpSide__First__Info__Stats__Current__Img",
    src: _CharAgil.default
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceUpSide__First__Info__Stats__Current__Stat"
  }, persons[0].getMoveOutPerson(), "%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__First__Info__Stats__Current"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceUpSide__First__Info__Stats__Current__Img",
    src: _CharKrit.default
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceUpSide__First__Info__Stats__Current__Stat"
  }, persons[0].getCritPerson(), "%"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__Bars"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__Bars__Hp"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceUpSide__Bars__Hp__Current"
  }, persons[0].getHpPerson(), " / ", persons[0].getFullHpPerson()), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__Bars__Hp__Bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "rgb(".concat(redHP, ", ").concat(greenHP, ", 0)"),
      width: persons[0].getHpPerson() / persons[0].getFullHpPerson() * 100 + "%"
    },
    className: "interfaceUpSide__Bars__Hp__Bar__Inner"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__Bars__Mana"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "interfaceUpSide__Bars__Mana__Current"
  }, persons[0].getManaPerson(), " / 100"), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceUpSide__Bars__Mana__Bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: persons[0].getManaPerson() + "%"
    },
    className: "interfaceUpSide__Bars__Mana__Bar__Inner"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "interfaceDownSide"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setChoseMove("Attack");
    },
    className: "interfaceDownSide__Attack"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceDownSide__Icon",
    src: _Attack.default
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceDownSide__Name"
  }, "\u0410\u0442\u0430\u043A\u0443\u0432\u0430\u0442\u0438")), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setChoseMove("Inventory");
    },
    className: "interfaceDownSide__Inv"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceDownSide__Icon",
    src: _Inventory.default
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceDownSide__Name"
  }, "\u0406\u043D\u0432\u0435\u043D\u0442\u0430\u0440")), /*#__PURE__*/_react.default.createElement("button", {
    className: "interfaceDownSide__Prepare"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceDownSide__Icon",
    src: _prepare.default
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceDownSide__Name"
  }, "\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430")), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      var updatedPersons = _toConsumableArray(persons);
      updatedPersons[0].setHpPerson(1200);
      setPersons(updatedPersons);
    },
    className: "interfaceDownSide__Run"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "interfaceDownSide__Icon",
    src: _Run.default
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "interfaceDownSide__Name"
  }, "\u0412\u0442\u0435\u043A\u0442\u0438"))));
};
var _default = exports.default = PlayerInterface;