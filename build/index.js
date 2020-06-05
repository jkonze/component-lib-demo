'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".MyComponent_demo__1ZkhF {\n  color: #8f19e7; }\n";
var styles = {"demo":"MyComponent_demo__1ZkhF"};
styleInject(css_248z);

var MyComponent = function (_a) {
    var name = _a.name;
    return (React.createElement("div", { className: styles.demo },
        "My First Component: ",
        name));
};

exports.MyComponent = MyComponent;
//# sourceMappingURL=index.js.map
