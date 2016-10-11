define("nls/ondemand",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/ondemand/components/__styles__/LoadingIndicator',[],function(){})
define("bundles/ondemand/components/LoadingIndicator",["require","exports","module","react","i18n!nls/ondemand","css!./__styles__/LoadingIndicator"],function(require,exports,module){function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var n=i[t],r=Object.getOwnPropertyDescriptor(o,n);r&&r.configurable&&void 0===e[n]&&Object.defineProperty(e,n,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var e=require("react"),t=require("i18n!nls/ondemand");require("css!./__styles__/LoadingIndicator");var n=function(n){function LoadingIndicator(){return _classCallCheck(this,LoadingIndicator),_possibleConstructorReturn(this,n.apply(this,arguments))}return _inherits(LoadingIndicator,n),LoadingIndicator.prototype.render=function render(){return e.createElement("div",{className:"rc-LoadingIndicator"},t("Loading"))},LoadingIndicator}(e.Component);module.exports=n});
define("nls/page",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/phoenix",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/naptimejs",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/requirejs/identity",["require","exports","module"],function(require,exports,module){module.exports=function(){for(var r=arguments.length,t=Array(r),e=0;r>e;e++)t[e]=arguments[e];return t}});
define("js/lib/require.memoize",["module"],function(module){function argsToJsonHasher(){var r=Array.prototype.slice.call(arguments);return JSON.stringify(r)}function memoize(e,t){var n={};t=t||argsToJsonHasher;var r=function memoized(){var r=t.apply(this,arguments);return r in n||(n[r]=e.apply(this,arguments)),n[r]};return r.force=function(){return r.clear.apply(this,arguments),r.apply(this,arguments)},r.clear=function(){var r=t.apply(this,arguments);delete n[r]},r.reset=function(){n={}},r}var r={version:"0.0.1",load:function load(r,n,t,e){n([r],function(r){t(memoize(r))})}};return r});


define('css!bundles/socialPlugins/wechat/__styles__/wechat-button',[],function(){})
define("nls/socialPlugins",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("bundles/requirejs/plugins/lazy",["require","exports","module"],function(require,exports,module){var e={version:"0.0.1",load:function load(e,r,u,i){var n=function getModule(n){r([e],function(e){return n(e)})};return n.lazy={moduleId:e},u(n)}};module.exports=e});

define("nls/scribe-plugins",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/ui",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/author-code-evaluator",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/code-evaluator",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/asset-admin",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/scribe-plugins/styles/scribe-image-upload-command',[],function(){})
define("nls/cml",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/content-feedback",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});









define("bundles/cml/constants/CMLVariableNames",["require","exports","module"],function(require,exports,module){module.exports={NAME:"NAME",USER_ID:"USER_ID"}});
define("js/json/nls/universities",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/languages",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/topics",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("pages/open-course/supplement/utils/supplementProgressApi",["require","exports","module","q","bundles/phoenix/lib/apiWrapper","bundles/phoenix/template/models/userIdentity","pages/open-course/common/constants","pages/open-course/common/singletons/course"],function(require,exports,module){function getCourseIdAndUserId(){return s.then(function(e){return[e.get("id"),o.get("id")]})}function updateSupplementProgress(e){var t=e.itemId,o=e.api;return getCourseIdAndUserId().spread(function(e,s){var p={data:{userId:s,courseId:e,itemId:t}};return n(o.post("",p))})}var n=require("q"),e=require("bundles/phoenix/lib/apiWrapper"),o=require("bundles/phoenix/template/models/userIdentity"),t=require("pages/open-course/common/constants"),s=require("pages/open-course/common/singletons/course"),p=e(t.supplementCompletionApi,{type:"rest"}),r=e(t.supplementStartApi,{type:"rest"}),i={markComplete:function markComplete(e){return updateSupplementProgress({itemId:e,api:p})},markStarted:function markStarted(e){return updateSupplementProgress({itemId:e,api:r})}};module.exports=i});
define("js/json/nls/specializations",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/categories",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/ondemand/components/reading/__styles__/ReadingCompleteButton',[],function(){})
define("bundles/ondemand/components/reading/ReadingCompleteButton",["require","exports","module","react","bundles/iconfont/Icon","pages/open-course/supplement/utils/supplementProgressApi","bundles/ondemand/actions/ProgressActions","pages/open-course/common/constants","i18n!nls/ondemand","css!./__styles__/ReadingCompleteButton"],function(require,exports,module){function _defaults(e,n){for(var s=Object.getOwnPropertyNames(n),t=0;t<s.length;t++){var o=s[t],r=Object.getOwnPropertyDescriptor(n,o);r&&r.configurable&&void 0===e[o]&&Object.defineProperty(e,o,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,o,e=require("react"),n=require("bundles/iconfont/Icon"),s=require("pages/open-course/supplement/utils/supplementProgressApi"),c=require("bundles/ondemand/actions/ProgressActions"),i=c.updateProgress,p=require("pages/open-course/common/constants"),r=require("i18n!nls/ondemand");require("css!./__styles__/ReadingCompleteButton");var a=(o=t=function(t){function ReadingCompleteButton(){var r,e,n;_classCallCheck(this,ReadingCompleteButton);for(var c=arguments.length,a=Array(c),o=0;c>o;o++)a[o]=arguments[o];return r=e=_possibleConstructorReturn(this,t.call.apply(t,[this].concat(a))),e.markComplete=function(){s.markComplete(e.props.itemId).then(e.refreshProgress).done()},e.refreshProgress=function(){var t=e.props,o=t.courseProgress,r=t.itemId,n=o.getItemProgress(r);n.setState(p.progressCompleted,{refreshCourseProgress:!0}),e.context.executeAction(i,o)},n=r,_possibleConstructorReturn(e,n)}return _inherits(ReadingCompleteButton,t),ReadingCompleteButton.prototype.render=function render(){return e.createElement("div",{className:"rc-ReadingCompleteButton horizontal-box align-items-right"},this.props.isComplete?e.createElement("div",{className:"completed"},e.createElement(n,{name:"checkmark",className:"color-success-dark"})," ",r("Complete")):e.createElement("button",{className:"primary mark-complete",onClick:this.markComplete},r("Mark as completed")))},ReadingCompleteButton}(e.Component),t.propTypes={isComplete:e.PropTypes.bool.isRequired,itemId:e.PropTypes.string.isRequired,courseProgress:e.PropTypes.object.isRequired},t.contextTypes={executeAction:e.PropTypes.func.isRequired},o);module.exports=a});
define("bundles/ondemand/components/reading/Reading",["require","exports","module","react","bundles/cml/components/CML","bundles/cml/constants/CMLVariableNames","bundles/ondemand/components/reading/ReadingCompleteButton","bundles/phoenix/lib/waitForStores","bundles/phoenix/template/models/userIdentity","pages/open-course/common/models/itemMetadata","pages/open-course/supplement/utils/supplementProgressApi"],function(require,exports,module){function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),t=0;t<s.length;t++){var o=s[t],n=Object.getOwnPropertyDescriptor(r,o);n&&n.configurable&&void 0===e[o]&&Object.defineProperty(e,o,n)}return e}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,o,e=require("react"),s=require("bundles/cml/components/CML"),n=require("bundles/cml/constants/CMLVariableNames"),i=require("bundles/ondemand/components/reading/ReadingCompleteButton"),a=require("bundles/phoenix/lib/waitForStores"),r=require("bundles/phoenix/template/models/userIdentity"),p=require("pages/open-course/common/models/itemMetadata"),u=require("pages/open-course/supplement/utils/supplementProgressApi"),l=(o=t=function(t){function Reading(){return _classCallCheck(this,Reading),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(Reading,t),Reading.prototype.componentDidMount=function componentDidMount(){u.markStarted(this.props.itemMetadata.getId())},Reading.prototype.getVariableData=function getVariableData(){var e;return e={},_defineProperty(e,n.NAME,r.get("full_name")),_defineProperty(e,n.USER_ID,r.get("id")),e},Reading.prototype.render=function render(){return e.createElement("div",null,e.createElement(s,{className:"rc-Reading",shouldApplyTracking:!0,cml:this.props.readingCml,variableData:this.getVariableData()}),e.createElement(i,{itemMetadata:this.props.itemMetadata,courseProgress:this.props.courseProgress,isComplete:this.props.isComplete,itemId:this.props.itemMetadata.getId()}))},Reading}(e.Component),t.propTypes={itemMetadata:e.PropTypes.instanceOf(p).isRequired,isComplete:e.PropTypes.bool.isRequired,readingCml:e.PropTypes.object.isRequired,courseProgress:e.PropTypes.object.isRequired},t.contextTypes={executeAction:e.PropTypes.func.isRequired},o);module.exports=a(l,["ProgressStore"],function(t,o){var e=t.ProgressStore;return{courseProgress:e.courseProgress,isComplete:e.isItemComplete(o.itemMetadata)}})});
define("bundles/ondemand/utils/componentDataFetcher",["require","exports","module","react"],function(require,exports,module){function _defaults(t,o){for(var a=Object.getOwnPropertyNames(o),e=0;e<a.length;e++){var n=a[e],r=Object.getOwnPropertyDescriptor(o,n);r&&r.configurable&&void 0===t[n]&&Object.defineProperty(t,n,r)}return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):_defaults(e,t))}var e=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},t=require("react"),n=function componentDataFetcher(n,c){var r,o,i=n.displayName||n.name,a=(o=r=function(r){function DataFetcherComponent(){var n,t,o;_classCallCheck(this,DataFetcherComponent);for(var a=arguments.length,c=Array(a),e=0;a>e;e++)c[e]=arguments[e];return n=t=_possibleConstructorReturn(this,r.call.apply(r,[this].concat(c))),t.displayName=i+"DataFetcher",t.state={isComponentLoaded:!1},o=n,_possibleConstructorReturn(t,o)}return _inherits(DataFetcherComponent,r),DataFetcherComponent.prototype.componentDidMount=function componentDidMount(){var r=this,o=this.props,n=this.context,a=n.router,t=c(o,a.params,n).then(function(t){r.setState(e({isComponentLoaded:!0},t))});t["catch"]&&t["catch"](function(t){throw t}),t.done&&t.done()},DataFetcherComponent.prototype.render=function render(){return t.createElement(n,e({},this.props,this.state))},DataFetcherComponent}(t.Component),r.contextTypes={executeAction:t.PropTypes.func,router:t.PropTypes.object},o);return a.BaseComp=n,a};module.exports=n});
define("bundles/confirmNavigation/nls/confirmNavigation",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/page/lib/nls/metatagsAddressBook",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/lib/nls/moment.lang",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});


define('css!bundles/ondemand/components/common/__styles__/NpsContent',[],function(){})

define('css!bundles/ondemand/components/common/__styles__/NpsModal',[],function(){})
define("nls/enroll-course",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/certificate-enroll",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/course-preview",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});





define('css!bundles/ondemand/components/sessions/__styles__/SessionStartedModal',[],function(){})
define("nls/payments-common",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("nls/account-settings",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/collapse/collapse',[],function(){})

define('css!bundles/phoenix/components/__styles__/ProfileImage',[],function(){})
define("nls/program-home",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/user-account",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("pages/open-course/item/views/nls/header",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/unauthenticated",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("pages/open-course/supplement/constants/config",["require","exports","module"],function(require,exports,module){module.exports={supplementsApi:"onDemandSupplements.v1"}});
define("pages/open-course/data/supplementData",["require","exports","module","pages/open-course/supplement/constants/config","pages/open-course/common/naptimeItemClient"],function(require,exports,module){var e=require("pages/open-course/supplement/constants/config"),s=require("pages/open-course/common/naptimeItemClient");module.exports=function(n){var t=new s(n),o={includes:["asset"],fields:["openCourseAssets.v1(typeName)","openCourseAssets.v1(definition)"]};return t.getWithCourseItemId(e.supplementsApi,o).then(function(e){return e.linked["openCourseAssets.v1"][0]})}});

define('css!bundles/ondemand/components/reading/__styles__/ReadingItem',[],function(){})
define("bundles/ondemand/components/reading/ReadingItem",["require","exports","module","react","bundles/content-feedback/constants/ItemTypes","bundles/ondemand/components/LoadingIndicator","bundles/ondemand/components/item/LightItemLayout","bundles/ondemand/components/reading/Reading","bundles/ondemand/utils/componentDataFetcher","bundles/ondemand/utils/itemViewValidator","js/lib/metatags","pages/open-course/common/models/itemMetadata","pages/open-course/data/supplementData","css!./__styles__/ReadingItem"],function(require,exports,module){function _defaults(e,a){for(var r=Object.getOwnPropertyNames(a),t=0;t<r.length;t++){var n=r[t],o=Object.getOwnPropertyDescriptor(a,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,n,e=require("react"),a=require("bundles/content-feedback/constants/ItemTypes"),r=require("bundles/ondemand/components/LoadingIndicator"),o=require("bundles/ondemand/components/item/LightItemLayout"),s=require("bundles/ondemand/components/reading/Reading"),i=require("bundles/ondemand/utils/componentDataFetcher"),d=require("bundles/ondemand/utils/itemViewValidator"),c=require("js/lib/metatags"),m=require("pages/open-course/common/models/itemMetadata"),p=require("pages/open-course/data/supplementData");require("css!./__styles__/ReadingItem");var u=(n=t=function(t){function ReadingItem(){return _classCallCheck(this,ReadingItem),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(ReadingItem,t),ReadingItem.prototype.componentDidMount=function componentDidMount(){var e=this.props.itemMetadata;c.setCommon({title:e.getName()+" | Coursera",description:e.get("lesson.module.description"),pageHref:window.location.href})},ReadingItem.prototype.render=function render(){var t=this.props,n=t.isComponentLoaded,i=t.itemMetadata,d=t.readingCml;return e.createElement("div",{className:"rc-ReadingItem"},e.createElement(o,{itemMetadata:i,itemType:a.Reading,showFeedback:n,isCard:!0},n?e.createElement(s,{itemMetadata:i,readingCml:d}):e.createElement(r,null)))},ReadingItem}(e.Component),t.propTypes={isComponentLoaded:e.PropTypes.bool.isRequired,itemMetadata:e.PropTypes.instanceOf(m).isRequired,readingCml:e.PropTypes.object},n),l=i(u,function(e,t){return p(e.itemMetadata).then(function(e){return{readingCml:e}})});module.exports=d(l)});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-LoadingIndicator{color:rgba(0,0,0,0.55);font-size:15px;text-align:center}.wechat-image{cursor:pointer}.wechat-qrcode-container{background:#fff;border:1px solid #ccc;position:absolute;z-index:100;width:260px;height:130px;font-size:13px;right:10px;top:-120px;margin-top:20px;-webkit-box-shadow:0 3px 7px rgba(0,0,0,0.3);box-shadow:0 3px 7px rgba(0,0,0,0.3)}#wechat-qrcode{display:inline-block;margin:20px 10px;float:left}.wechat-qrcode-message{display:inline-block;width:120px;height:90px;margin:20px 10px;line-height:20px;text-align:left}.wechat-qrcode-close{position:absolute;top:0;right:8px;cursor:pointer}.scribe-image-upload-command-loader{background:#fff;position:absolute;padding:5px 15px;border:1px solid #aaa}.scribe-image-upload-command-in-progress{opacity:.1;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\";filter:alpha(opacity=10)}.rc-ReadingCompleteButton{margin-top:36px}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-NpsContent .nps-rating-button{min-width:30px;min-height:30px;width:30px;height:30px;margin:3px;padding:5px;outline:none}.rc-NpsContent .nps-rating-label{padding:12px 5px}.rc-NpsContent .nps-feedback-enter{opacity:.01;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)\";filter:alpha(opacity=1);max-height:0;-webkit-transition:opacity 0.5s ease-in, max-height 0.5s;-moz-transition:opacity 0.5s ease-in, max-height 0.5s;-o-transition:opacity 0.5s ease-in, max-height 0.5s;-ms-transition:opacity 0.5s ease-in, max-height 0.5s;transition:opacity 0.5s ease-in, max-height 0.5s;overflow:hidden}.rc-NpsContent .nps-feedback-enter.nps-feedback-enter-active{opacity:1;-ms-filter:none;filter:none;max-height:300px}.rc-NpsContent .nps-feedback-leave{opacity:1;-ms-filter:none;filter:none;max-height:300px}.rc-NpsContent .nps-feedback-leave.nps-feedback-leave-active{opacity:.01;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)\";filter:alpha(opacity=1);max-height:0;-webkit-transition:opacity 0.5s ease-in, max-height 0.5s;-moz-transition:opacity 0.5s ease-in, max-height 0.5s;-o-transition:opacity 0.5s ease-in, max-height 0.5s;-ms-transition:opacity 0.5s ease-in, max-height 0.5s;transition:opacity 0.5s ease-in, max-height 0.5s}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-NpsModal{text-align:center;}.rc-NpsModal .nps-title{padding:32px;border-top-left-radius:3px;border-top-right-radius:3px;background-color:#354b72;text-align:center}.rc-NpsModal .nps-content{padding:28px 32px 32px 32px}.rc-NpsModal .nps-feedback-appear{opacity:.01;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)\";filter:alpha(opacity=1);-webkit-transition:opacity 0.5s ease-in;-moz-transition:opacity 0.5s ease-in;-o-transition:opacity 0.5s ease-in;-ms-transition:opacity 0.5s ease-in;transition:opacity 0.5s ease-in}.rc-NpsModal .nps-feedback-appear.nps-feedback-appear-active{opacity:1;-ms-filter:none;filter:none}.rc-NpsModal .nps-feedback-leave{opacity:1;-ms-filter:none;filter:none}.rc-NpsModal .nps-followup-text{margin-bottom:20px}.rc-NpsModal .nps-feedback-leave.nps-feedback-leave-active{opacity:.01;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)\";filter:alpha(opacity=1);-webkit-transition:opacity 0.5s ease-in;-moz-transition:opacity 0.5s ease-in;-o-transition:opacity 0.5s ease-in;-ms-transition:opacity 0.5s ease-in;transition:opacity 0.5s ease-in}.rc-NpsModal .feedback-prompt{padding-top:30px}.rc-NpsModal .thank-you{padding:20px}.rc-NpsModal .feedback-image{width:48px;margin-bottom:20px}.rc-NpsModal .rc-FeedbackEditor{text-align:left;min-height:50px;margin:15px 0}.rc-SessionStartedModal .rc-Modal .c-modal-content{max-width:550px}.collapse{display:none;}.collapse.open{display:block}.collapsing{position:relative;height:0;overflow:hidden}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-ProfileImage .c-profile-image{-webkit-border-radius:100%;border-radius:100%;}.rc-ProfileImage .c-profile-image img{-webkit-border-radius:100%;border-radius:100%}.rc-ProfileImage .c-profile-initials{background-color:#3277b2;color:#fff;text-transform:uppercase;}.rc-ProfileImage .c-profile-initials div{width:100%;height:100%;}.rc-ProfileImage .c-profile-initials div p{margin-bottom:0}.rc-ReadingItem .rc-LightItemLayout .content-container .content{margin-bottom:24px}');
