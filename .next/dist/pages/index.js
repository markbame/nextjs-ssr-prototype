'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('../layout/header');

var _header2 = _interopRequireDefault(_header);

var _style3 = require('../style/style');

var _style4 = _interopRequireDefault(_style3);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/clouduser/knowledgeview/nextjs-ssr/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'Shows',
    value: function Shows(props) {
      var listShows = props.shows.map(function (tv) {
        return _react2.default.createElement('li', { key: tv.show.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, 'Title: ', tv.show.name, ' | Score: ', tv.score);
      });
      return _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, listShows);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('div', { className: 'wrapper', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('title', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Index'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('p', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Index Page!'), _react2.default.createElement('p', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.Shows(this.props.data)), _react2.default.createElement(_style2.default, {
        styleId: _style4.default.__scopedHash,
        css: _style4.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _style3.globalcss.__hash,
        css: _style3.globalcss
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {};
                _context.next = 3;
                return new _promise2.default(function (resolve) {
                  var request = _axios2.default.get('http://api.tvmaze.com/search/shows?q=girls').then(function (res) {
                    data = { shows: res.data };
                    console.log(res.data);
                    resolve();
                  }).catch(function (error) {
                    console.log(error);
                  });
                });

              case 3:
                return _context.abrupt('return', { data: data });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;