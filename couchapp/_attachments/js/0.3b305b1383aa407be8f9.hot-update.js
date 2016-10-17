webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(4);\n\nvar _moment = __webpack_require__(28);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _reactSelect = __webpack_require__(135);\n\nvar _reactSelect2 = _interopRequireDefault(_reactSelect);\n\nvar _jquery = __webpack_require__(147);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dash = function (_React$Component) {\n  _inherits(Dash, _React$Component);\n\n  function Dash(props) {\n    _classCallCheck(this, Dash);\n\n    var _this = _possibleConstructorReturn(this, (Dash.__proto__ || Object.getPrototypeOf(Dash)).call(this, props));\n\n    console.log(props);\n    return _this;\n  }\n\n  _createClass(Dash, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // here load data\n      // no, not here\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(Day, null);\n    }\n  }]);\n\n  return Dash;\n}(React.Component);\n\nexports.default = Dash;\n\nvar DayClass = function (_React$Component2) {\n  _inherits(DayClass, _React$Component2);\n\n  function DayClass(props) {\n    _classCallCheck(this, DayClass);\n\n    return _possibleConstructorReturn(this, (DayClass.__proto__ || Object.getPrototypeOf(DayClass)).call(this, props));\n  }\n\n  _createClass(DayClass, [{\n    key: 'render',\n    value: function render() {\n      var daystart = (0, _moment2.default)(this.props.day).add(this.props.start, 'hours');\n      var dayend = (0, _moment2.default)(this.props.day).add(this.props.end, 'hours');\n      return React.createElement(\n        'section',\n        { className: 'beds' },\n        this.props.beds.map(function (bed) {\n          return React.createElement(Bed, { bed: bed, daystart: daystart, dayend: dayend });\n        }),\n        React.createElement(TimeSeries, { duration: _moment2.default.duration(10, 'minutes'), daystart: daystart, dayend: dayend })\n      );\n    }\n  }]);\n\n  return DayClass;\n}(React.Component);\n\nvar Day = (0, _reactRedux.connect)(function (state) {\n  return {\n    day: state.day,\n    beds: state.beds\n  };\n})(DayClass);\n\nfunction TimeSeries(props) {\n  var periods = props.dayend.diff(props.daystart) / props.duration;\n  var current = (0, _moment2.default)(props.daystart);\n  var out = [];\n  while (current.isBefore(props.dayend)) {\n    out.push(React.createElement(\n      'li',\n      null,\n      current.format('HH:mm')\n    ));\n    current.add(props.duration);\n  }\n  return React.createElement(\n    'section',\n    { className: 'times' },\n    React.createElement(\n      'header',\n      null,\n      'times'\n    ),\n    React.createElement(\n      'ul',\n      { className: 'list' },\n      out\n    )\n  );\n}\n\nvar Bed = function (_React$Component3) {\n  _inherits(Bed, _React$Component3);\n\n  function Bed(props) {\n    _classCallCheck(this, Bed);\n\n    var _this3 = _possibleConstructorReturn(this, (Bed.__proto__ || Object.getPrototypeOf(Bed)).call(this, props));\n\n    _this3.state = {\n      visits: [],\n      visit: {}\n    };\n    return _this3;\n  }\n\n  _createClass(Bed, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      load_bed_data(this.props.bed.id);\n    }\n  }, {\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      return shallowCompare(this, nextProps, nextState);\n    }\n  }, {\n    key: 'addVisit',\n    value: function addVisit(e) {\n      var clicktime = parseInt((0, _moment2.default)(this.props.dayend).diff(this.props.daystart) * e.clientY / e.target.clientHeight);\n      this.setState({\n        visit: {\n          start: (0, _moment2.default)(this.props.daystart).add(clicktime),\n          bed: this.props.bed.id\n        }\n      });\n    }\n  }, {\n    key: 'hide_modal',\n    value: function hide_modal() {\n      this.setState({ visit: {} });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      return React.createElement(\n        'section',\n        { className: 'bed' },\n        React.createElement(\n          'header',\n          null,\n          React.createElement(\n            'h3',\n            null,\n            'Кроватка №' + this.props.bed.id\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'list', onClick: this.addVisit.bind(this) },\n          this.state.visits.map(function (visit) {\n            return React.createElement(Period, _extends({ start: (0, _moment2.default)(new Date(visit.visit.start)), end: (0, _moment2.default)(new Date(visit.visit.end)), visit: visit }, _this4.props));\n          })\n        ),\n        React.createElement(VisitModal, { visit: this.state.visit, hide: this.hide_modal.bind(this) })\n      );\n    }\n  }]);\n\n  return Bed;\n}(React.Component);\n\nvar VisitModal = function (_React$Component4) {\n  _inherits(VisitModal, _React$Component4);\n\n  function VisitModal(props) {\n    _classCallCheck(this, VisitModal);\n\n    var _this5 = _possibleConstructorReturn(this, (VisitModal.__proto__ || Object.getPrototypeOf(VisitModal)).call(this, props));\n\n    _this5.state = {\n      clients: [],\n      start: (0, _moment2.default)(),\n      client: {}\n    };\n    return _this5;\n  }\n\n  _createClass(VisitModal, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextprops) {\n      this.setState({\n        start: (0, _moment2.default)(nextprops.visit.start)\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this6 = this;\n\n      _jquery2.default.getJSON('/krovati/_design/krovati-couch/_list/clients_json/clients').then(function (clients) {\n        return _this6.setState({ clients: clients });\n      });\n    }\n  }, {\n    key: 'change_visit_minute',\n    value: function change_visit_minute(evt) {\n      // here check the time table\n      this.setState({\n        start: (0, _moment2.default)(this.state.start).minute(evt.target.value)\n      });\n    }\n  }, {\n    key: 'change_visit_hour',\n    value: function change_visit_hour(evt) {\n      // here check the time table\n      this.setState({\n        start: (0, _moment2.default)(this.state.start).hour(evt.target.value)\n      });\n    }\n  }, {\n    key: 'select_client',\n    value: function select_client(client) {\n      this.setState({ client: client });\n    }\n  }, {\n    key: 'set_note',\n    value: function set_note(e) {\n      this.setState({ note: e.target.value });\n    }\n  }, {\n    key: 'send_visit',\n    value: function send_visit() {\n      add_visit(this.state.start, (0, _moment2.default)(this.state.start).add(40, 'minutes'), 8, this.state.client.value);\n      this.props.hide();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var visit = this.props.visit;\n\n      if (!visit.start) return null;\n      return React.createElement(\n        'dialog',\n        { className: 'modal' },\n        React.createElement(\n          'header',\n          null,\n          React.createElement(\n            'h2',\n            null,\n            'Add / edit visit'\n          ),\n          React.createElement('button', { onClick: this.props.hide, className: 'close' })\n        ),\n        React.createElement(\n          'main',\n          null,\n          React.createElement(_reactSelect2.default, {\n            value: this.state.client.value,\n            onChange: this.select_client.bind(this),\n            options: this.state.clients }),\n          React.createElement(\n            'label',\n            null,\n            React.createElement('input', { type: 'number', min: 0, max: 23, value: this.state.start.format('HH'), defaultValue: visit.start.format('HH'), onChange: this.change_visit_hour.bind(this) }),\n            React.createElement('input', { type: 'number', min: 0, max: 59, value: this.state.start.format('mm'), defaultValue: visit.start.format('mm'), onChange: this.change_visit_minute.bind(this) })\n          ),\n          React.createElement(\n            'textarea',\n            { onChange: this.set_note.bind(this) },\n            this.state.note\n          ),\n          React.createElement(\n            'button',\n            { onClick: this.send_visit.bind(this) },\n            'Отправить'\n          )\n        )\n      );\n    }\n  }]);\n\n  return VisitModal;\n}(React.Component);\n\nvar Period = function (_React$Component5) {\n  _inherits(Period, _React$Component5);\n\n  function Period(props) {\n    _classCallCheck(this, Period);\n\n    return _possibleConstructorReturn(this, (Period.__proto__ || Object.getPrototypeOf(Period)).call(this, props));\n  }\n\n  _createClass(Period, [{\n    key: 'render',\n    value: function render() {\n      var visit = this.props.visit ? React.createElement(Visit, { visit: this.props.visit }) : null;\n      var height = this.props.dayend.diff(this.props.daystart);\n      var style = {\n        marginTop: this.props.start.diff(this.props.daystart) * 100 / height + '%',\n        height: this.props.end.diff(this.props.start) * 100 / height + '%'\n      };\n      return React.createElement(\n        'time',\n        { style: style, className: visit ? 'occupied' : 'free' },\n        visit\n      );\n    }\n  }]);\n\n  return Period;\n}(React.Component);\n\nfunction Visit(props) {\n  return React.createElement(\n    'div',\n    { className: 'visit' },\n    props.visit.client.name\n  );\n}\nfunction add_visit(start, end, bed_id, tz) {\n  _jquery2.default.ajax({\n    method: 'put',\n    url: '/krovati/_design/krovati-couch/_update/add_visit/' + tz,\n    data: {\n      start: start.toString(),\n      end: end.toString(),\n      bed: bed_id\n    }\n  }).then(function () {\n    load_bed_data(bed_id);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\nfunction load_bed_data(bed_id) {\n  _jquery2.default.getJSON('/krovati/_design/krovati-couch/_list/by_bed_json/by_bed?key=[' + bed_id + ', ' + state.day.year() + ', ' + state.day.month() + ', ' + state.day.date() + ']').then(function (data) {\n    var index = state.beds.findIndex(function (bed) {\n      return bed.id == bed_id;\n    });\n    state.beds[index].visits = data;\n    state.revs[bed_id] = state.revs[bed_id] ? state.revs[bed_id] + 1 : 1;\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9kYXNoLmpzPzUzZjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG52YXIgX21vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG52YXIgX21vbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb21lbnQpO1xuXG52YXIgX3JlYWN0U2VsZWN0ID0gcmVxdWlyZSgncmVhY3Qtc2VsZWN0Jyk7XG5cbnZhciBfcmVhY3RTZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RTZWxlY3QpO1xuXG52YXIgX2pxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgX2pxdWVyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcXVlcnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEYXNoID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERhc2gsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERhc2gocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFzaCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRGFzaC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERhc2gpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhc2gsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIGhlcmUgbG9hZCBkYXRhXG4gICAgICAvLyBubywgbm90IGhlcmVcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEYXksIG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXNoO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEYXNoO1xuXG52YXIgRGF5Q2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKERheUNsYXNzLCBfUmVhY3QkQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gRGF5Q2xhc3MocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF5Q2xhc3MpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEYXlDbGFzcy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERheUNsYXNzKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERheUNsYXNzLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBkYXlzdGFydCA9ICgwLCBfbW9tZW50Mi5kZWZhdWx0KSh0aGlzLnByb3BzLmRheSkuYWRkKHRoaXMucHJvcHMuc3RhcnQsICdob3VycycpO1xuICAgICAgdmFyIGRheWVuZCA9ICgwLCBfbW9tZW50Mi5kZWZhdWx0KSh0aGlzLnByb3BzLmRheSkuYWRkKHRoaXMucHJvcHMuZW5kLCAnaG91cnMnKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnYmVkcycgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5iZWRzLm1hcChmdW5jdGlvbiAoYmVkKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmVkLCB7IGJlZDogYmVkLCBkYXlzdGFydDogZGF5c3RhcnQsIGRheWVuZDogZGF5ZW5kIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUaW1lU2VyaWVzLCB7IGR1cmF0aW9uOiBfbW9tZW50Mi5kZWZhdWx0LmR1cmF0aW9uKDEwLCAnbWludXRlcycpLCBkYXlzdGFydDogZGF5c3RhcnQsIGRheWVuZDogZGF5ZW5kIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXlDbGFzcztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIERheSA9ICgwLCBfcmVhY3RSZWR1eC5jb25uZWN0KShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXk6IHN0YXRlLmRheSxcbiAgICBiZWRzOiBzdGF0ZS5iZWRzXG4gIH07XG59KShEYXlDbGFzcyk7XG5cbmZ1bmN0aW9uIFRpbWVTZXJpZXMocHJvcHMpIHtcbiAgdmFyIHBlcmlvZHMgPSBwcm9wcy5kYXllbmQuZGlmZihwcm9wcy5kYXlzdGFydCkgLyBwcm9wcy5kdXJhdGlvbjtcbiAgdmFyIGN1cnJlbnQgPSAoMCwgX21vbWVudDIuZGVmYXVsdCkocHJvcHMuZGF5c3RhcnQpO1xuICB2YXIgb3V0ID0gW107XG4gIHdoaWxlIChjdXJyZW50LmlzQmVmb3JlKHByb3BzLmRheWVuZCkpIHtcbiAgICBvdXQucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIG51bGwsXG4gICAgICBjdXJyZW50LmZvcm1hdCgnSEg6bW0nKVxuICAgICkpO1xuICAgIGN1cnJlbnQuYWRkKHByb3BzLmR1cmF0aW9uKTtcbiAgfVxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnc2VjdGlvbicsXG4gICAgeyBjbGFzc05hbWU6ICd0aW1lcycgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2hlYWRlcicsXG4gICAgICBudWxsLFxuICAgICAgJ3RpbWVzJ1xuICAgICksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICB7IGNsYXNzTmFtZTogJ2xpc3QnIH0sXG4gICAgICBvdXRcbiAgICApXG4gICk7XG59XG5cbnZhciBCZWQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDMpIHtcbiAgX2luaGVyaXRzKEJlZCwgX1JlYWN0JENvbXBvbmVudDMpO1xuXG4gIGZ1bmN0aW9uIEJlZChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZWQpO1xuXG4gICAgdmFyIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChCZWQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCZWQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpczMuc3RhdGUgPSB7XG4gICAgICB2aXNpdHM6IFtdLFxuICAgICAgdmlzaXQ6IHt9XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJlZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgbG9hZF9iZWRfZGF0YSh0aGlzLnByb3BzLmJlZC5pZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gc2hhbGxvd0NvbXBhcmUodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZFZpc2l0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVmlzaXQoZSkge1xuICAgICAgdmFyIGNsaWNrdGltZSA9IHBhcnNlSW50KCgwLCBfbW9tZW50Mi5kZWZhdWx0KSh0aGlzLnByb3BzLmRheWVuZCkuZGlmZih0aGlzLnByb3BzLmRheXN0YXJ0KSAqIGUuY2xpZW50WSAvIGUudGFyZ2V0LmNsaWVudEhlaWdodCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaXQ6IHtcbiAgICAgICAgICBzdGFydDogKDAsIF9tb21lbnQyLmRlZmF1bHQpKHRoaXMucHJvcHMuZGF5c3RhcnQpLmFkZChjbGlja3RpbWUpLFxuICAgICAgICAgIGJlZDogdGhpcy5wcm9wcy5iZWQuaWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGlkZV9tb2RhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGVfbW9kYWwoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaXQ6IHt9IH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2JlZCcgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICfQmtGA0L7QstCw0YLQutCwIOKElicgKyB0aGlzLnByb3BzLmJlZC5pZFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2xpc3QnLCBvbkNsaWNrOiB0aGlzLmFkZFZpc2l0LmJpbmQodGhpcykgfSxcbiAgICAgICAgICB0aGlzLnN0YXRlLnZpc2l0cy5tYXAoZnVuY3Rpb24gKHZpc2l0KSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQZXJpb2QsIF9leHRlbmRzKHsgc3RhcnQ6ICgwLCBfbW9tZW50Mi5kZWZhdWx0KShuZXcgRGF0ZSh2aXNpdC52aXNpdC5zdGFydCkpLCBlbmQ6ICgwLCBfbW9tZW50Mi5kZWZhdWx0KShuZXcgRGF0ZSh2aXNpdC52aXNpdC5lbmQpKSwgdmlzaXQ6IHZpc2l0IH0sIF90aGlzNC5wcm9wcykpO1xuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlzaXRNb2RhbCwgeyB2aXNpdDogdGhpcy5zdGF0ZS52aXNpdCwgaGlkZTogdGhpcy5oaWRlX21vZGFsLmJpbmQodGhpcykgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJlZDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIFZpc2l0TW9kYWwgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDQpIHtcbiAgX2luaGVyaXRzKFZpc2l0TW9kYWwsIF9SZWFjdCRDb21wb25lbnQ0KTtcblxuICBmdW5jdGlvbiBWaXNpdE1vZGFsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2l0TW9kYWwpO1xuXG4gICAgdmFyIF90aGlzNSA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChWaXNpdE1vZGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVmlzaXRNb2RhbCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzNS5zdGF0ZSA9IHtcbiAgICAgIGNsaWVudHM6IFtdLFxuICAgICAgc3RhcnQ6ICgwLCBfbW9tZW50Mi5kZWZhdWx0KSgpLFxuICAgICAgY2xpZW50OiB7fVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzNTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWaXNpdE1vZGFsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRwcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXJ0OiAoMCwgX21vbWVudDIuZGVmYXVsdCkobmV4dHByb3BzLnZpc2l0LnN0YXJ0KVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBfanF1ZXJ5Mi5kZWZhdWx0LmdldEpTT04oJy9rcm92YXRpL19kZXNpZ24va3JvdmF0aS1jb3VjaC9fbGlzdC9jbGllbnRzX2pzb24vY2xpZW50cycpLnRoZW4oZnVuY3Rpb24gKGNsaWVudHMpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNi5zZXRTdGF0ZSh7IGNsaWVudHM6IGNsaWVudHMgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjaGFuZ2VfdmlzaXRfbWludXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbmdlX3Zpc2l0X21pbnV0ZShldnQpIHtcbiAgICAgIC8vIGhlcmUgY2hlY2sgdGhlIHRpbWUgdGFibGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGFydDogKDAsIF9tb21lbnQyLmRlZmF1bHQpKHRoaXMuc3RhdGUuc3RhcnQpLm1pbnV0ZShldnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2hhbmdlX3Zpc2l0X2hvdXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VfdmlzaXRfaG91cihldnQpIHtcbiAgICAgIC8vIGhlcmUgY2hlY2sgdGhlIHRpbWUgdGFibGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGFydDogKDAsIF9tb21lbnQyLmRlZmF1bHQpKHRoaXMuc3RhdGUuc3RhcnQpLmhvdXIoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlbGVjdF9jbGllbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RfY2xpZW50KGNsaWVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsaWVudDogY2xpZW50IH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldF9ub3RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0X25vdGUoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5vdGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlbmRfdmlzaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kX3Zpc2l0KCkge1xuICAgICAgYWRkX3Zpc2l0KHRoaXMuc3RhdGUuc3RhcnQsICgwLCBfbW9tZW50Mi5kZWZhdWx0KSh0aGlzLnN0YXRlLnN0YXJ0KS5hZGQoNDAsICdtaW51dGVzJyksIDgsIHRoaXMuc3RhdGUuY2xpZW50LnZhbHVlKTtcbiAgICAgIHRoaXMucHJvcHMuaGlkZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciB2aXNpdCA9IHRoaXMucHJvcHMudmlzaXQ7XG5cbiAgICAgIGlmICghdmlzaXQuc3RhcnQpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaWFsb2cnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ21vZGFsJyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoZWFkZXInLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMicsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ0FkZCAvIGVkaXQgdmlzaXQnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IG9uQ2xpY2s6IHRoaXMucHJvcHMuaGlkZSwgY2xhc3NOYW1lOiAnY2xvc2UnIH0pXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ21haW4nLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChfcmVhY3RTZWxlY3QyLmRlZmF1bHQsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmNsaWVudC52YWx1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnNlbGVjdF9jbGllbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuc3RhdGUuY2xpZW50cyB9KSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ251bWJlcicsIG1pbjogMCwgbWF4OiAyMywgdmFsdWU6IHRoaXMuc3RhdGUuc3RhcnQuZm9ybWF0KCdISCcpLCBkZWZhdWx0VmFsdWU6IHZpc2l0LnN0YXJ0LmZvcm1hdCgnSEgnKSwgb25DaGFuZ2U6IHRoaXMuY2hhbmdlX3Zpc2l0X2hvdXIuYmluZCh0aGlzKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAnbnVtYmVyJywgbWluOiAwLCBtYXg6IDU5LCB2YWx1ZTogdGhpcy5zdGF0ZS5zdGFydC5mb3JtYXQoJ21tJyksIGRlZmF1bHRWYWx1ZTogdmlzaXQuc3RhcnQuZm9ybWF0KCdtbScpLCBvbkNoYW5nZTogdGhpcy5jaGFuZ2VfdmlzaXRfbWludXRlLmJpbmQodGhpcykgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAgICAgeyBvbkNoYW5nZTogdGhpcy5zZXRfbm90ZS5iaW5kKHRoaXMpIH0sXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5vdGVcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgIHsgb25DbGljazogdGhpcy5zZW5kX3Zpc2l0LmJpbmQodGhpcykgfSxcbiAgICAgICAgICAgICfQntGC0L/RgNCw0LLQuNGC0YwnXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWaXNpdE1vZGFsO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgUGVyaW9kID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQ1KSB7XG4gIF9pbmhlcml0cyhQZXJpb2QsIF9SZWFjdCRDb21wb25lbnQ1KTtcblxuICBmdW5jdGlvbiBQZXJpb2QocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGVyaW9kKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUGVyaW9kLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUGVyaW9kKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBlcmlvZCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgdmlzaXQgPSB0aGlzLnByb3BzLnZpc2l0ID8gUmVhY3QuY3JlYXRlRWxlbWVudChWaXNpdCwgeyB2aXNpdDogdGhpcy5wcm9wcy52aXNpdCB9KSA6IG51bGw7XG4gICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5wcm9wcy5kYXllbmQuZGlmZih0aGlzLnByb3BzLmRheXN0YXJ0KTtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGlzLnByb3BzLnN0YXJ0LmRpZmYodGhpcy5wcm9wcy5kYXlzdGFydCkgKiAxMDAgLyBoZWlnaHQgKyAnJScsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5lbmQuZGlmZih0aGlzLnByb3BzLnN0YXJ0KSAqIDEwMCAvIGhlaWdodCArICclJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndGltZScsXG4gICAgICAgIHsgc3R5bGU6IHN0eWxlLCBjbGFzc05hbWU6IHZpc2l0ID8gJ29jY3VwaWVkJyA6ICdmcmVlJyB9LFxuICAgICAgICB2aXNpdFxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGVyaW9kO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5mdW5jdGlvbiBWaXNpdChwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogJ3Zpc2l0JyB9LFxuICAgIHByb3BzLnZpc2l0LmNsaWVudC5uYW1lXG4gICk7XG59XG5mdW5jdGlvbiBhZGRfdmlzaXQoc3RhcnQsIGVuZCwgYmVkX2lkLCB0eikge1xuICBfanF1ZXJ5Mi5kZWZhdWx0LmFqYXgoe1xuICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgdXJsOiAnL2tyb3ZhdGkvX2Rlc2lnbi9rcm92YXRpLWNvdWNoL191cGRhdGUvYWRkX3Zpc2l0LycgKyB0eixcbiAgICBkYXRhOiB7XG4gICAgICBzdGFydDogc3RhcnQudG9TdHJpbmcoKSxcbiAgICAgIGVuZDogZW5kLnRvU3RyaW5nKCksXG4gICAgICBiZWQ6IGJlZF9pZFxuICAgIH1cbiAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgbG9hZF9iZWRfZGF0YShiZWRfaWQpO1xuICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xufVxuZnVuY3Rpb24gbG9hZF9iZWRfZGF0YShiZWRfaWQpIHtcbiAgX2pxdWVyeTIuZGVmYXVsdC5nZXRKU09OKCcva3JvdmF0aS9fZGVzaWduL2tyb3ZhdGktY291Y2gvX2xpc3QvYnlfYmVkX2pzb24vYnlfYmVkP2tleT1bJyArIGJlZF9pZCArICcsICcgKyBzdGF0ZS5kYXkueWVhcigpICsgJywgJyArIHN0YXRlLmRheS5tb250aCgpICsgJywgJyArIHN0YXRlLmRheS5kYXRlKCkgKyAnXScpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgaW5kZXggPSBzdGF0ZS5iZWRzLmZpbmRJbmRleChmdW5jdGlvbiAoYmVkKSB7XG4gICAgICByZXR1cm4gYmVkLmlkID09IGJlZF9pZDtcbiAgICB9KTtcbiAgICBzdGF0ZS5iZWRzW2luZGV4XS52aXNpdHMgPSBkYXRhO1xuICAgIHN0YXRlLnJldnNbYmVkX2lkXSA9IHN0YXRlLnJldnNbYmVkX2lkXSA/IHN0YXRlLnJldnNbYmVkX2lkXSArIDEgOiAxO1xuICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvZGFzaC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})