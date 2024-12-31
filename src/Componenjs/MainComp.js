"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _howler = require("howler");
require("../Style/App.css");
var _PlayerInterface = _interopRequireDefault(require("./PlayerInterface.tsx"));
var _ClickAct = _interopRequireDefault(require("../assets/Sound/ClickAct.mp3"));
var _Inventory = _interopRequireDefault(require("./Inventory.tsx"));
var _Attacks = _interopRequireDefault(require("./Attacks.tsx"));
var _Classes = _interopRequireDefault(require("./Classes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var trackList = [{
  id: "1",
  name: "AnotherFight"
}, {
  id: "2",
  name: "MaiFight"
}, {
  id: "3",
  name: "NoxFight"
}, {
  id: "4",
  name: "LastDance"
}, {
  id: "5",
  name: "LOVEYOU"
}];
var MainComp = function MainComp() {
  //GetDataFromBD
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    persons = _useState2[0],
    setPersons = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  //Interfaces
  var _useState5 = (0, _react.useState)("Interface"),
    _useState6 = _slicedToArray(_useState5, 2),
    choseMove = _useState6[0],
    setChoseMove = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    interac = _useState8[0],
    setInterac = _useState8[1];
  //Track
  var _useState9 = (0, _react.useState)(4),
    _useState10 = _slicedToArray(_useState9, 2),
    currentTrack = _useState10[0],
    setCurrentTrack = _useState10[1];
  var soundRef = (0, _react.useRef)(null);
  var soundRefClick = (0, _react.useRef)(null);
  //Fetch data from DB
  (0, _react.useEffect)(function () {
    fetch("http://localhost:5000/api/persons").then(function (response) {
      if (!response.ok) {
        throw new Error("Ошибка при запросе данных с сервера");
      }
      return response.json();
    }).then(function (data) {
      var initializedPersons = data.map(function (person) {
        return new _Classes.default(person.namePerson || "", person.atPerson || 0, person.defPerson || 0, person.moveOutPerson || 0, person.critPerson || 0, person.iconPerson || "", person.fullHpPerson || 0, person.hpPerson || 0, person.typePerson || "", 0);
      });
      setPersons(initializedPersons);
      setLoading(false);
    }).catch(function (error) {
      console.error("Ошибка при получении данных:", error);
    });
  }, []);

  //Music setup
  (0, _react.useEffect)(function () {
    if (soundRef.current) {
      soundRef.current.stop();
    }
    var sound = new _howler.Howl({
      src: ["/assets/Music/" + trackList[currentTrack].name + ".mp3"],
      loop: true,
      volume: 0.5
    });
    sound.play();
    soundRef.current = sound;
    return function () {
      if (soundRef.current) {
        soundRef.current.stop();
      }
    };
  }, [currentTrack]);
  //ClickSound setup
  (0, _react.useEffect)(function () {
    if (choseMove !== "Interface" || interac === true) {
      if (soundRefClick.current) {
        soundRefClick.current.stop();
      }
      var soundClick = new _howler.Howl({
        src: [_ClickAct.default],
        loop: false,
        volume: 0.5
      });
      soundClick.play();
      soundRefClick.current = soundClick;
      setInterac(false);
      if (choseMove === "Back") {
        setTimeout(function () {
          return setChoseMove("Interface");
        }, 0);
      }
    }
  }, [choseMove, interac]);
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "loading"
    }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."); // Показываем, пока данные загружаются
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "WrapBack"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "BackPhoto"
  }, choseMove === "Interface" && /*#__PURE__*/_react.default.createElement(_PlayerInterface.default, {
    setChoseMove: setChoseMove,
    persons: persons,
    setPersons: setPersons
  }), choseMove === "Inventory" && /*#__PURE__*/_react.default.createElement(_Inventory.default, {
    setChoseMove: setChoseMove,
    setInterac: setInterac
  }), choseMove === "Attack" && /*#__PURE__*/_react.default.createElement(_Attacks.default, {
    setChoseMove: setChoseMove,
    setInterac: setInterac
  })));
};
var _default = exports.default = MainComp;