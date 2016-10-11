define("bundles/ondemand/components/ClosedCourseRedirectApp",["require","exports","module","underscore","react","bundles/phoenix/lib/waitForStores","bundles/phoenix/lib/conditionalRedirect","pages/open-course/common/constants","js/lib/connectToRouter"],function(require,exports,module){function _defaults(e,n){for(var s=Object.getOwnPropertyNames(n),o=0;o<s.length;o++){var r=s[o],t=Object.getOwnPropertyDescriptor(n,r);t&&t.configurable&&void 0===e[r]&&Object.defineProperty(e,r,t)}return e}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(o,e){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?o:e}function _inherits(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):_defaults(o,e))}var o,r,s=require("underscore"),n=s.compose,e=require("react"),i=require("bundles/phoenix/lib/waitForStores"),c=require("bundles/phoenix/lib/conditionalRedirect"),t=require("pages/open-course/common/constants"),u=require("js/lib/connectToRouter"),p=(r=o=function(o){function ClosedCourseRedirectApp(){return _classCallCheck(this,ClosedCourseRedirectApp),_possibleConstructorReturn(this,o.apply(this,arguments))}return _inherits(ClosedCourseRedirectApp,o),ClosedCourseRedirectApp.prototype.render=function render(){return e.createElement("div",null,this.props.children)},ClosedCourseRedirectApp}(e.Component),o.propTypes={children:e.PropTypes.node},r);module.exports=n(i(["CourseStore","CourseMembershipStore"],function(e,t){var o=e.CourseStore,r=e.CourseMembershipStore;return{isClosedCourse:o.isClosedCourse(),isEnrolled:r.isEnrolled()}}),u(function(e){return{isCDPEnabled:e.isActive({params:e.params,pathname:t.courseRootPath},!0)}}),c(t.courseRootPath,function(e){var o=e.isClosedCourse,r=e.isEnrolled,t=e.isCDPEnabled;return o&&!r&&!t}))(p)});
