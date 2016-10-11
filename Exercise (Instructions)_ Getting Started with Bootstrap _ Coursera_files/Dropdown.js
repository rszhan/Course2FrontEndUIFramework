define("bundles/phoenix/components/Dropdown",["require","exports","module","react","classnames","bundles/iconfont/Icon","js/lib/popups"],function(require,exports,module){"use strict";function _defaults(e,n){for(var s=Object.getOwnPropertyNames(n),t=0;t<s.length;t++){var o=s[t],r=Object.getOwnPropertyDescriptor(n,o);r&&r.configurable&&void 0===e[o]&&Object.defineProperty(e,o,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,o,e=require("react"),r=require("classnames"),n=require("bundles/iconfont/Icon");require("js/lib/popups");var s=(o=t=function(t){function Dropdown(){return _classCallCheck(this,Dropdown),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(Dropdown,t),Dropdown.prototype.render=function render(){var t=this.props.dropdownId,o=r("nostyle",this.props.toggleClassName),s=this.props.iconName||"ellipsis-h";return e.createElement("div",{className:this.props.className},e.createElement("div",null,e.createElement("button",{"aria-haspopup":"true","aria-expanded":"false","data-toggle":"dropdown","aria-owns":t,"data-popup":"#"+t,"data-popup-bind-open":"click","data-popup-direction":this.props.dropdownDirection,"data-popup-close":"data-popup-close",className:o,bsRole:"toggle"},e.createElement(n,{name:s,className:this.props.iconClassName})),e.createElement("ul",{className:"styleguide dropdown bt3-dropdown-menu",id:t},this.props.listItems.map(function(o,r){return e.createElement("li",{key:t+"-listItem"+r},o)}))))},Dropdown}(e.Component),t.propTypes={dropdownId:e.PropTypes.string.isRequired,listItems:e.PropTypes.arrayOf(e.PropTypes.node).isRequired,dropdownDirection:e.PropTypes.string.isRequired,className:e.PropTypes.string,toggleClassName:e.PropTypes.string,iconClassName:e.PropTypes.string,iconName:e.PropTypes.string},t.defaultProps={dropdownDirection:"se"},o);module.exports=s});