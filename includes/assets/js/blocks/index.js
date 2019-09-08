!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){var r=n(19);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(20),o=n(11);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),o=n(8),s=wp.i18n.__,a=wp.components.SelectControl;function c(e){var t=e.postType,n=e.onPostTypeChange;return[n&&Object(r.createElement)(a,{key:"cptda-select-post-type",label:s("Post Type","custom-post-type-date-archives"),value:"".concat(t),options:function(){var e=[{label:s("Post"),value:"post"}],t=Object(o.get)(window.cptda_data,"post_type",{});for(var n in t)t.hasOwnProperty(n)&&e.push({label:t[n],value:n});return e}(),onChange:function(e){n(e)}})]}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,n){"use strict";var r=n(13),o=n.n(r),s=n(6),a=n.n(s),c=n(5),i=n.n(c),l=n(4),u=n.n(l),p=n(3),h=n.n(p),f=n(2),y=n.n(f),b=n(12),m=n.n(b),d=n(0),v=n(8);n(7);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var O=wp.element,w=O.Component,j=O.RawHTML,E=wp.i18n,C=E.__,P=E.sprintf,_=wp.apiFetch,x=wp.url.addQueryArgs,S=wp.components,k=S.Placeholder,M=S.Spinner;function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.post_type,o=Object.assign({},t);return delete o.post_type,x("/custom_post_type_date_archives/v1/".concat(r,"/").concat(e),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){m()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{},o))}var V=function(e){function t(e){var n;return a()(this,t),(n=u()(this,h()(t).call(this,e))).state={response:null},n}return y()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.fetch(this.props),this.fetch=Object(v.debounce)(this.fetch,500)}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"componentDidUpdate",value:function(e){Object(v.isEqual)(e,this.props)||this.fetch(this.props)}},{key:"fetch",value:function(e){var t=this;if(this.isStillMounted){null!==this.state.response&&this.setState({response:null});var n=e.block,r=e.attributes,o=void 0===r?null:r,s=e.urlQueryArgs,a=T(n,o,void 0===s?{}:s),c=this.currentFetchRequest=_({path:a}).then(function(e){t.isStillMounted&&c===t.currentFetchRequest&&e&&t.setState({response:e.rendered})}).catch(function(e){t.isStillMounted&&c===t.currentFetchRequest&&t.setState({response:{error:!0,errorMsg:e.message}})});return c}}},{key:"render",value:function(){var e=this.state.response,t=this.props,n=t.className,r=t.EmptyResponsePlaceholder,s=t.ErrorResponsePlaceholder,a=t.LoadingResponsePlaceholder;return""===e?Object(d.createElement)(r,o()({response:e},this.props,{label:this.props.title})):e?e.error?Object(d.createElement)(s,o()({response:e},this.props,{label:this.props.title})):Object(d.createElement)(j,{key:"html",className:n},e):Object(d.createElement)(a,o()({response:e},this.props,{label:this.props.title}))}}]),t}(w);V.defaultProps={EmptyResponsePlaceholder:function(e){var t=e.className,n=e.label,r=C("No posts found with the current block settings","custom-post-type-date-archives");return Object(d.createElement)(k,{className:t,label:n},r)},ErrorResponsePlaceholder:function(e){var t=e.response,n=e.className,r=e.label,o=P(C("Error loading block: %s","custom-post-type-date-archives"),t.errorMsg);return Object(d.createElement)(k,{className:n,label:r},o)},LoadingResponsePlaceholder:function(e){var t=e.className,n=e.label;return Object(d.createElement)(k,{className:t,label:n},Object(d.createElement)(M,null))}},t.a=V},function(e,t){!function(){e.exports=this.React}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){e.exports=function(e,t){var n,r,o,s=0;function a(){var t,a,c=r,i=arguments.length;e:for(;c;){if(c.args.length===arguments.length){for(a=0;a<i;a++)if(c.args[a]!==arguments[a]){c=c.next;continue e}return c!==r&&(c===o&&(o=c.prev),c.prev.next=c.next,c.next&&(c.next.prev=c.prev),c.next=r,c.prev=null,r.prev=c,r=c),c.val}c=c.next}for(t=new Array(i),a=0;a<i;a++)t[a]=arguments[a];return c={args:t,val:e.apply(null,t)},r?(r.prev=c,c.next=r):o=c,s===n?(o=o.prev).next=null:s++,r=c,c.val}return t&&t.maxSize&&(n=t.maxSize),a.clear=function(){r=null,o=null,s=0},a}},function(e,t){!function(){e.exports=this.moment}()},function(e,t,n){"use strict";n.r(t);var r=n(12),o=n.n(r),s=n(6),a=n.n(s),c=n(5),i=n.n(c),l=n(4),u=n.n(l),p=n(3),h=n.n(p),f=n(11),y=n.n(f),b=n(2),m=n.n(b),d=n(0),v=n(10),g=n(15),O=n.n(g),w=n(14),j=n.n(w),E=n(9),C=n(7);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var _=wp.i18n.__,x=wp.components,S=x.Disabled,k=x.PanelBody,M=wp.element.Component,T=wp.data.withSelect,V=wp.editor.InspectorControls,H=function(e){function t(){var e;return a()(this,t),(e=u()(this,h()(t).apply(this,arguments))).getYearMonth=j()(e.getYearMonth.bind(y()(e)),{maxSize:1}),e.getServerSideAttributes=j()(e.getServerSideAttributes.bind(y()(e)),{maxSize:1}),e}return m()(t,e),i()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.postType,n=e.setAttributes;e.attributes.post_type||n({post_type:t})}},{key:"getYearMonth",value:function(e){if(!e)return{};var t=O()(e);return{year:t.year(),month:t.month()+1}}},{key:"getServerSideAttributes",value:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},this.getYearMonth(t))}},{key:"render",value:function(){var e=this.props,t=e.setAttributes,n=e.attributes.post_type;if(!n)return null;var r=Object(d.createElement)(V,null,Object(d.createElement)(k,{title:_("Calendar Settings","custom-post-type-date-archives")},Object(d.createElement)(C.a,{postType:n,onPostTypeChange:function(e){return t({post_type:e})}})));return Object(d.createElement)(v.Fragment,null,r,Object(d.createElement)(S,null,Object(d.createElement)(E.a,{block:"calendar",title:"Custom Post Type Calendar",attributes:this.getServerSideAttributes(this.props.attributes,this.props.date)})))}}]),t}(M),D=T(function(e){var t=e("core/editor");if(t){var n=t.getEditedPostAttribute;return{date:n("date"),postType:n("type")}}})(H),A=n(1),R=Object(d.createElement)(A.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(d.createElement)(A.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(d.createElement)(A.G,null,Object(d.createElement)(A.Path,{d:"M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"}))),z=wp.i18n.__;(0,wp.blocks.registerBlockType)("cptda/calendar",{title:z("Custom Post Type Calendar","custom-post-type-date-archives"),description:z("A calendar of your site’s custom post type posts.","custom-post-type-date-archives"),icon:R,category:"widgets",keywords:[z("posts","custom-post-type-date-archives"),z("archive","custom-post-type-date-archives")],supports:{align:!0},edit:D,save:function(){return null}})},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),s=n(5),a=n.n(s),c=n(4),i=n.n(c),l=n(3),u=n.n(l),p=n(11),h=n.n(p),f=n(2),y=n.n(f),b=n(0),m=n(10),d=n(8),v=n(9),g=n(7),O=wp.i18n.__,w=wp.components.SelectControl,j=[{label:O("all posts"),value:"all"},{label:O("posts with future dates only"),value:"future"},{label:O("posts from the current year"),value:"year"},{label:O("posts from the current month"),value:"month"},{label:O("posts from today"),value:"day"}];function E(e){var t=e.include,n=e.onIncludeChange;return[n&&Object(b.createElement)(w,{key:"cptda-select-post-type",label:O("Include Posts","custom-post-type-date-archives"),value:"".concat(t),options:j,onChange:function(e){n(e)}})]}var C=wp.i18n.__,P=wp.components,_=P.Disabled,x=P.PanelBody,S=P.ToggleControl,k=P.RangeControl,M=(P.TextareaControl,P.BaseControl),T=wp.element.Component,V=wp.data.withSelect,H=wp.editor.InspectorControls,D=0,A=function(e){function t(){var e;return o()(this,t),(e=i()(this,u()(t).apply(this,arguments))).onMessageChange=e.onMessageChange.bind(h()(e)),e.messageDebounced=Object(d.debounce)(e.updateMessage,1e3),e.instanceId=D++,e}return y()(t,e),a()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.postType,n=e.setAttributes;e.attributes.post_type||n({post_type:t})}},{key:"componentWillUnmount",value:function(){this.messageDebounced.cancel()}},{key:"onMessageChange",value:function(e){this.messageDebounced(e.target.value)}},{key:"updateMessage",value:function(e){(0,this.props.setAttributes)({message:e})}},{key:"render",value:function(){var e=this.props,t=e.setAttributes,n=e.attributes,r="inspector-textarea-control-"+this.instanceId,o=n.post_type,s=n.number,a=n.show_date,c=n.include,i=n.message;if(!o)return null;var l=Object(b.createElement)(H,null,Object(b.createElement)(x,{title:C("Latest Posts Settings","custom-post-type-date-archives")},Object(b.createElement)(g.a,{postType:o,onPostTypeChange:function(e){return t({post_type:e})}}),Object(b.createElement)(k,{label:C("Number of posts","custom-post-type-date-archives"),value:s,onChange:function(e){return t({number:e})},min:1,max:100}),Object(b.createElement)(E,{include:c,onIncludeChange:function(e){return t({include:e})}}),Object(b.createElement)(S,{label:C("Display post date","custom-post-type-date-archives"),checked:a,onChange:function(e){return t({show_date:e})}}),Object(b.createElement)(M,{label:C("Message when no posts are found","custom-post-type-date-archives"),id:r},Object(b.createElement)("textarea",{className:"components-textarea-control__input",id:r,rows:"4",onChange:this.onMessageChange,defaultValue:i}))));return Object(b.createElement)(m.Fragment,null,l,Object(b.createElement)(_,null,Object(b.createElement)(v.a,{block:"recent-posts",title:"Custom Post Type Latest Posts",attributes:this.props.attributes})))}}]),t}(T),R=V(function(e){var t=e("core/editor");if(t)return{postType:(0,t.getEditedPostAttribute)("type")}})(A),z=n(1),B=Object(b.createElement)(z.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(b.createElement)(z.Path,{d:"M0,0h24v24H0V0z",fill:"none"}),Object(b.createElement)(z.Rect,{x:"11",y:"7",width:"6",height:"2"}),Object(b.createElement)(z.Rect,{x:"11",y:"11",width:"6",height:"2"}),Object(b.createElement)(z.Rect,{x:"11",y:"15",width:"6",height:"2"}),Object(b.createElement)(z.Rect,{x:"7",y:"7",width:"2",height:"2"}),Object(b.createElement)(z.Rect,{x:"7",y:"11",width:"2",height:"2"}),Object(b.createElement)(z.Rect,{x:"7",y:"15",width:"2",height:"2"}),Object(b.createElement)(z.Path,{d:"M20.1,3H3.9C3.4,3,3,3.4,3,3.9v16.2C3,20.5,3.4,21,3.9,21h16.2c0.4,0,0.9-0.5,0.9-0.9V3.9C21,3.4,20.5,3,20.1,3z M19,19H5V5h14V19z"})),N=wp.i18n.__;(0,wp.blocks.registerBlockType)("cptda/recent-posts",{title:N("Custom Post Type latest Posts","custom-post-type-date-archives"),description:N("Display a list of your most recent posts.","custom-post-type-date-archives"),icon:B,category:"widgets",keywords:[N("recent posts","custom-post-type-date-archives")],supports:{align:!0,html:!1},edit:R,save:function(){return null}})},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),s=n(5),a=n.n(s),c=n(4),i=n.n(c),l=n(3),u=n.n(l),p=n(2),h=n.n(p),f=n(0),y=n(10),b=n(9),m=n(7),d=wp.i18n.__,v=wp.components,g=v.SelectControl,O=v.RangeControl;function w(e){var t=e.limit,n=e.onLimitChange,r=e.format,o=e.onFormatChange,s=e.type,a=e.onTypeChange,c=e.order,i=e.onOrderChange;return[n&&Object(f.createElement)(O,{key:"cptda-range-limit",label:d("Limit","custom-post-type-date-archives"),value:t,onChange:function(e){n(e)},min:1,max:100}),i&&Object(f.createElement)(g,{key:"cptda-select-order",label:d("Order","custom-post-type-date-archives"),value:"".concat(c),options:j,onChange:function(e){i(e)}}),a&&Object(f.createElement)(g,{key:"cptda-select-order",label:d("Type of archives","custom-post-type-date-archives"),value:"".concat(s),options:E,onChange:function(e){a(e)}}),o&&Object(f.createElement)(g,{key:"cptda-select-format",label:d("Format","custom-post-type-date-archives"),value:"".concat(r),options:C,onChange:function(e){o(e)}})]}var j=[{value:"ASC",label:d("Ascending")},{value:"DESC",label:d("Descending")}],E=[{value:"alpha",label:d("Alphabetical")},{value:"daily",label:d("Daily")},{value:"monthly",label:d("Monthly")},{value:"postbypost",label:d("Post By Post")},{value:"weekly",label:d("Weekly")},{value:"yearly",label:d("Yearly")}],C=[{value:"custom",label:d("Custom")},{value:"html",label:d("HTML")},{value:"option",label:d("Option")}],P=wp.i18n.__,_=wp.components,x=_.Disabled,S=_.PanelBody,k=_.ToggleControl,M=wp.element.Component,T=wp.data.withSelect,V=wp.editor.InspectorControls,H=function(e){function t(){return o()(this,t),i()(this,u()(t).apply(this,arguments))}return h()(t,e),a()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.postType,n=e.setAttributes;e.attributes.post_type||n({post_type:t})}},{key:"render",value:function(){var e=this.props,t=e.setAttributes,n=e.attributes,r=n.post_type,o=n.type,s=n.format,a=n.order,c=n.limit,i=n.show_post_count;if(!r)return null;var l=Object(f.createElement)(V,null,Object(f.createElement)(S,{title:P("Archives Settings","custom-post-type-date-archives")},Object(f.createElement)(m.a,{postType:r,onPostTypeChange:function(e){return t({post_type:e})}}),Object(f.createElement)(k,{label:P("Show post count","custom-post-type-date-archives"),checked:i,onChange:function(e){return t({show_post_count:e})}}),Object(f.createElement)(w,{limit:c,onLimitChange:function(e){return t({limit:e})},type:o,onTypeChange:function(e){return t({type:e})},format:s,onFormatChange:function(e){return t({format:e})},order:a,onOrderChange:function(e){return t({order:e})}})));return Object(f.createElement)(y.Fragment,null,l,Object(f.createElement)(x,null,Object(f.createElement)(b.a,{block:"archives",title:"Custom Post Type Archives",attributes:this.props.attributes})))}}]),t}(M),D=T(function(e){var t=e("core/editor");if(t)return{postType:(0,t.getEditedPostAttribute)("type")}})(H),A=n(1),R=Object(f.createElement)(A.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(f.createElement)(A.Path,{d:"M21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.9 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19ZM11 12H17V14H11V12ZM17 16H11V18H17V16ZM7 12H9V14H7V12ZM9 18V16H7V18H9Z"})),z=wp.i18n.__;(0,wp.blocks.registerBlockType)("cptda/archives",{title:z("Custom Post Type Archives","custom-post-type-date-archives"),description:z("Display a monthly archive of your posts.","custom-post-type-date-archives"),icon:R,category:"widgets",supports:{align:!0,html:!1},edit:D,save:function(){return null}})},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t,n){n(16),n(17),e.exports=n(18)}]);