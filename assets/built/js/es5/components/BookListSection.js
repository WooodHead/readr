'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _BookList = require('components/BookList');

var _BookList2 = _interopRequireDefault(_BookList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookListSection = function (_Component) {
  _inherits(BookListSection, _Component);

  function BookListSection() {
    _classCallCheck(this, BookListSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookListSection).apply(this, arguments));
  }

  _createClass(BookListSection, [{
    key: 'render',
    value: function render() {
      var bookList = this.props.bookList;
      var title = this.props.title;
      var moreLink = this.props.moreLink ? this.props.moreLink : null;

      return _react2.default.createElement(
        'div',
        { className: 'book-list-section' },
        _react2.default.createElement(
          'h2',
          { className: 'section-title' },
          title
        ),
        moreLink ? _react2.default.createElement(
          _reactRouter.Link,
          { className: 'more', to: moreLink },
          '查看更多'
        ) : null,
        _react2.default.createElement(_BookList2.default, { bookList: bookList })
      );
    }
  }]);

  return BookListSection;
}(_react.Component);

exports.default = BookListSection;
