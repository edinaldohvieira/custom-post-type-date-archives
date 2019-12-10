(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={page_title:"Search The Code Reference!",home_desc:"Want to know what's going on inside this %1$s.","home_desc-2":"Search the Code Reference for more information about functions, classes, methods, and hooks.",home:"Home",functions:"Functions",function:"Function",classes:"Classes",class:"Class",hooks:"Hooks",hook:"Hook",methods:"Methods",method:"Method",search_results:"Search Results",results_for:"Search Results for: %1$s",functions_search:"Search functions",classes_search:"Search classes",hooks_search:"Search hooks",methods_search:"Search methods",source:"Source",source_file:"Source: %1$s",view_source:"View source",view_source_file:"View source file",submit:"Search",repo:"GitHub Repository",docs:"Documentation",related:"Related",used_by:"Used By",uses:"Uses",changelog:"Changelog",version:"Version",version_label:"Version: %1$s",description:"Description",code_base:"code base",loading:"Loading...",retry:"Retry",timeout:"Taking a long time...",error:"Error!",namespace:"Namespace: %1$s",filter_by_version:"Since version:",filter_by_type:"Type:",none:"none",modified:"modified",introduced:"introduced",deprecated:"deprecated",deprecated_in:"deprecated in version: %1$s",undocumented:"undocumented",undocumented_version:"undocumented version",found:"%1$d %2$s found",filter_version_found:"%1$d %2$s found with version %3$s",filter_type_found:"%1$d %2$s %3$s found",filter_all_found:"%1$d %2$s %3$s found with version %4$s",not_found:"No %1$s found",filter_version_not_found:"No %1$s found with version %2$s",filter_type_not_found:"No %1$s %2$s found",filter_all_not_found:"No %1$s %2$s found with version %3$s"}},112:function(e,t,n){var a={"./classes.json":[196,27],"./functions.json":[197,28],"./hooks.json":[198,29],"./methods.json":[199,30],"./version.json":[200,31]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,3)})}r.keys=function(){return Object.keys(a)},r.id=112,e.exports=r},192:function(e,t,n){var a={"./custom-post-type-date-archives.json":[201,3],"./includes-admin-settings.json":[202,4],"./includes-admin.json":[203,5],"./includes-archives.json":[204,6],"./includes-calendar.json":[205,7],"./includes-cpt-rewrite.json":[206,8],"./includes-deprecated.json":[207,9],"./includes-editor-blocks.json":[208,10],"./includes-functions.json":[209,11],"./includes-install.json":[210,12],"./includes-link-template.json":[211,13],"./includes-post_type.json":[212,14],"./includes-query.json":[213,15],"./includes-rest-api-class-rest-api-archives.json":[214,16],"./includes-rest-api-class-rest-api-calendar.json":[215,17],"./includes-rest-api-class-rest-api-recent-posts.json":[216,18],"./includes-rewrite.json":[217,19],"./includes-utils-archives.json":[218,20],"./includes-utils-calendar.json":[219,21],"./includes-utils-recent-posts.json":[220,22],"./includes-widgets-class-cptda-widget-archives.json":[221,23],"./includes-widgets-class-cptda-widget-calendar.json":[222,24],"./includes-widgets-class-cptda-widget-recent-posts.json":[223,25],"./includes-widgets.json":[224,26]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,3)})}r.keys=function(){return Object.keys(a)},r.id=192,e.exports=r},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(72),o=n.n(s),i=n(3),c=n(17),l=n(12),u=n.n(l),p=n(7),h=n(8),d=n(11),m=n(9),f=n(10),g=n(43),v=n(2),y=n.n(v),E=r.a.createContext(),_=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).fetchData=function(e){if(a.setState({status:"searching",postType:e}),y()(a.state[e]))try{n(112)("./"+e+".json").then(function(t){var n;a.setState((n={},Object(g.a)(n,e,t),Object(g.a)(n,"status","done"),n))})}catch(t){a.setState({status:"error"})}else a.setState({status:"done"})},a.state={functions:{},classes:{},hooks:{},methods:{}},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(E.Provider,{value:{postType:this.state.postType,postTypeData:this.state,fetchData:this.fetchData}},this.props.children)}}]),t}(r.a.Component);function b(e){return function(t){function n(){return Object(p.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(h.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(E.Consumer,null,function(n){n.postType;var a=n.postTypeData,s=n.fetchData;return r.a.createElement(e,Object.assign({},t.props,{postType:t.props.postType,postTypeData:a,fetchData:s}))})}}]),n}(a.Component)}var j=n(16),O=n(73),w=n.n(O),T=n(33),S=n.n(T),k=n(18);function C(e){return u()(e,"/").split("/").filter(function(e){return""!==e})}function $(e){return e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce(function(e,t){var n=t.split("="),a=Object(k.a)(n,2),r=a[0],s=a[1];return e[r]=s?decodeURIComponent(s.replace(/\+/g," ")):"",e},{}):{}}function N(e,t){var n=$(e);return n.hasOwnProperty(t)&&n[t].length?n[t]:""}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.length?"/"+(e=u()(e," /"))+(""===(t=u()(t," /"))?"":"/")+t:e}function x(e){if(!e.length||!function(e){return 1===["functions","hooks","classes","methods"].filter(function(t){return e===t}).length}(e))return"";var t=e.substring(0,e.length-1);return"classe"===t?"class":t}function L(e,t){var n="",a=C(e);return t<=a.length&&(n=a[t]),n}function R(e,t){return t===C(e).length}function q(e,t){return e=e.title,t=t.title,e.length!==t.length?e.length-t.length:e<t?-1:1}var P=function(e,t){return RegExp(U(t.trim()),"i").test(e)},U=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")};function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=t.trim().toLowerCase()).length?e.length?e.filter(function(e){return function(e,t){if(P(e,t))return!0;var n=U(e.trim().toLowerCase().replace(/[_\-\s]+/g," ")),a=U(t.trim().toLowerCase().replace(/[_\-\s]+/g," "));if(P(n,a))return!0;var r=(a=a.split(" ")).length;if(1>=r)return!1;for(var s=0,o=0;o<r;o++)-1!==n.indexOf(a[o].trim())&&s++;if(s===r)return!0;return!1}(e.title.toLowerCase(),t)}).sort(q):[]:e}var M=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e,t){var a=t.newValue;n.setState({value:a})},n.onSuggestionsFetchRequested=function(e){var t=e.value;n.loadSuggestions(t)},n.onSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.state={value:"",suggestions:[],isLoading:!1},n.lastRequestId=null,n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=D(this.props.home,this.props.postType),a=this.props.postTypeData[this.props.postType],r=S()(a.content,function(e){return e.title===t.state.value});n=-1!==r?n+"/"+a.content[r].slug:n+"/?search="+this.state.value.trim().replace(/\s+/g,"+"),this.props.history.push(n)}},{key:"loadSuggestions",value:function(e){var t=this.props.postType;if(this.setState({isLoading:!0}),this.props.fetchData(t),y()(this.props.postTypeData[t]));else{var n=this.props.postTypeData[t].content;this.setState({isLoading:!1,suggestions:F(n,e)})}}},{key:"renderSuggestion",value:function(e){return r.a.createElement("div",null,e.title)}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.suggestions,a=this.props.postType,s={placeholder:this.props.strings[a+"_search"],value:t,onChange:this.onChange};return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(w.a,{suggestions:n,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:function(e){return e.title},renderSuggestion:this.renderSuggestion,inputProps:s}),r.a.createElement("input",{type:"submit",value:this.props.strings.submit,id:"submit"}))}}]),t}(a.Component),H=Object(c.f)(M),I=n(22),V=function(e){var t=e.referenceData,n=t.parsed_name,a=t.parsed_version,s=t.app_description,o=e.page,c=e.postType,l=e.home,u="methods"===c?"classes":c,p=e.strings.page_title;n.length&&(p=n,p+=a.length?" "+a:"","home"!==o&&(p=r.a.createElement(i.b,{to:l},p)));var h="";return s.length&&(h=r.a.createElement("p",{className:"site-description"},s)),r.a.createElement("header",{className:"site-header"},r.a.createElement("h1",{className:"site-title"},p),h,-1!==I.indexOf(u)&&r.a.createElement(H,Object.assign({},e,{postType:u})),r.a.createElement("nav",null,r.a.createElement(i.c,{to:l,exact:!0,activeClassName:"active"},e.strings.home),I.map(function(t,n){var a=D(l,t);return"methods"!==t&&r.a.createElement(i.c,{to:a,key:n,activeClassName:"active"},e.strings[t])})))},Q=n(1),W=function(e){var t=e.page,n=e.children,a="hfeed site devhub-wrap",s=t?a+" "+t:a;return window.scrollTo(0,0),r.a.createElement("div",{id:"page",className:s},r.a.createElement(V,Object.assign({},e,{strings:Q})),r.a.createElement("div",{id:"content",className:"site-content"},r.a.createElement("div",{id:"content-area",className:"code-reference"},r.a.createElement("main",{id:"main",className:"site-main",role:"main"},n))))},B=function(e){var t=e.referenceData,n=t.parsed_name,a=t.repo_url,s=t.app_url,o=t.parsed_type,i="";n.length&&(i=Q.page_title);var c=Q.repo?Q.repo:"GitHub",l=o.length?o:Q.code_base,u="";l.length&&(u=Q.home_desc.replace("%1$s",l));var p="";s&&n&&(p=r.a.createElement("li",null,r.a.createElement("a",{href:s},n)));var h="";return a&&c.length&&(h=r.a.createElement("li",null,r.a.createElement("a",{href:a},c))),r.a.createElement("div",null,i&&r.a.createElement("h2",null,i),r.a.createElement("p",null,u," ",Q["home_desc-2"]),(p||h)&&r.a.createElement("ul",null,p,h))},A=b(function(e){return r.a.createElement(W,Object.assign({},e,{page:"home"}),r.a.createElement(B,e))}),G=n(78),J=n(4),z=n.n(J);function K(e,t,n,a){var r=n.length,s="undocumented"===e,o=x(t),i=!a||1<a?t:o;t=Q[i].toLowerCase();var c=a?"%2$s":"%1$s",l=a?"%3$s":"%2$s",u=a?"%2$s":"%1$s",p=a?"":"not_",h=e.length?"filter_version_".concat(p,"found"):"".concat(p,"found"),d=Q[h];return(r||s)&&(n=s?Q.undocumented:n,h="filter_type_".concat(p,"found"),e.length&&!s&&(h="filter_all_".concat(p,"found"),l=a?"%4$s":"%3$s"),c=a?"%3$s":"%2$s",d=Q[h].replace(u,n)),a&&(d=d.replace("%1$d",a)),d.replace(c,i).replace(l,e)}function X(e){var t=e.terms,n=e.version,s=e.postType,o=e.filter,i=e.postCount,c="undocumented"===n;if(y()(t))return null;var l=t.map(function(e,t){return r.a.createElement("option",{key:t,value:e},"undocumented"===e?Q.undocumented_version:e)}),u=K(n,s,o,i);return r.a.createElement(a.Fragment,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("label",null,Q.filter_by_version,r.a.createElement("select",{value:n,onChange:function(t){e.onChangeVersion(t.target.value)}},r.a.createElement("option",{key:"none",value:""},Q.none),l)),!c&&r.a.createElement("label",null,Q.filter_by_type,r.a.createElement("select",{value:o,onChange:function(t){e.onChangeType(t.target.value)}},r.a.createElement("option",{value:"none"},Q.none),r.a.createElement("option",{value:"introduced"},Q.introduced),r.a.createElement("option",{value:"modified"},Q.modified),r.a.createElement("option",{value:"deprecated"},Q.deprecated)))),i?"":r.a.createElement("hr",null),r.a.createElement("p",null,u)," ",i?r.a.createElement("hr",null):"")}function Y(e){return 1===["introduced","modified","deprecated"].filter(function(t){return e===t}).length}function Z(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),s=n[0],o=n[1];if(Object(a.useEffect)(function(){var e=setTimeout(function(){o(!0)},500);return function(){return clearTimeout(e)}},[s]),!s)return null;var i=e.hasOwnProperty("message")?e.message:"";return i.length?r.a.createElement("div",null,i):r.a.createElement("div",{className:"loader"},Q.loading)}var ee=function(e){return function(t){function n(){return Object(p.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(h.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.postType!==this.props.postType&&y()(this.props.postTypeData[this.props.postType])&&this.props.fetchData(this.props.postType)}},{key:"componentDidMount",value:function(){y()(this.props.postTypeData[this.props.postType])&&this.props.fetchData(this.props.postType)}},{key:"render",value:function(){var t=z()(this.props,"postTypeData."+this.props.postType+".content",[]);return y()(t)?r.a.createElement(Z,null):(t=t.sort(function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n<a?-1:n>a?1:0}),r.a.createElement(e,Object.assign({},this.props,{content:t})))}}]),n}(r.a.Component)},te=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={type:"",version:"",terms:{},failedRequest:!1},n.handleChangeType=n.handleChangeType.bind(Object(j.a)(n)),n.handleChangeVersion=n.handleChangeVersion.bind(Object(j.a)(n)),n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"setStateFromQuery",value:function(){var e=this.getStateFromQuery();this.setState(e)}},{key:"getStateFromQuery",value:function(){var e=this.props.location.search,t=N(e,"type"),n=this.isSearch();return{type:!n&&Y(t)?t:"",version:n?"":N(e,"since")}}},{key:"isSearch",value:function(){var e,t=this.props.location.search;return e="search",!!$(t).hasOwnProperty(e)}},{key:"getSearch",value:function(){return N(this.props.location.search,"search").replace(/\++/g," ").toLowerCase()}},{key:"get_versions",value:function(){var e=this;if(y()(this.state.terms))try{n.e(32).then(n.t.bind(null,225,3)).then(function(t){e.setState({terms:t})})}catch(t){this.setState({failedRequest:!0})}}},{key:"update_query_string",value:function(){var e=this.props.home+"/"+this.props.postType,t=Y(this.state.type)?this.state.type:"",n=this.props.location.search,a=this.state.version.length?"since="+this.state.version+"&":"";(a+=t.length?"type="+t+"&":"",this.isSearch())&&(a="search="+N(n,"search"));((a=a.replace(/\s+/g,"+")).length||n)&&(a="?"+u()(a," &")).length&&n!==a&&(this.props.history.push(e+a),this.props.history.replace({pathname:this.props.location.pathname,search:a,state:this.state}))}},{key:"componentDidUpdate",value:function(e,t){var n=t.version!==this.state.version,a=t.type!==this.state.type;if(n||a)this.update_query_string();else{var r=this.getStateFromQuery(),s=r.version!==this.state.version,o=r.type!==this.state.type;(s||o)&&this.setState(r)}}},{key:"componentDidMount",value:function(){this.setStateFromQuery(),this.get_versions()}},{key:"handleChangeType",value:function(e){(e=Y(e)?e:"")!==this.state.type&&this.setState({type:e})}},{key:"handleChangeVersion",value:function(e){e!==this.state.version&&this.setState({version:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.postType,a=t.home,s=t.content,o=z()(this.state.terms,n,{}),c=this.isSearch(),l=this.getSearch(),u=Q.results_for.replace("%1$s",l),p=Q[n],h=[],d="",m="";return y()(o)||y()(this.state.version)||(d=-1===o.indexOf(this.state.version)?"":this.state.version),c?(p=Q.search_results,h=F(s,l),m=K("",n,"",h.length)):h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=!t.length;return a&&!n.length?e:e=e.filter(function(e){var r=-1!==e.terms.indexOf(t),s=-1!==e.terms.indexOf(e.introduced),o=-1!==e.terms.indexOf(e.deprecated),i=-1!==e.terms.indexOf("undocumented");switch(n){case"deprecated":return a?e.deprecated:e.deprecated===t;case"introduced":return a?e.introduced:e.introduced===t;case"modified":if(a){var c=e.terms.length;return!(!c||i)&&(c=s?--c:c,0<(c=o?--c:c))}var l=s&&e.introduced===t,u=o&&e.deprecated===t;return r&&!(l||u)}return!!a||r})}(s,d,this.state.type),r.a.createElement("div",null,r.a.createElement("h2",null,p),c?r.a.createElement("p",null,u):"",c&&!h.length?r.a.createElement("hr",null):"",c?r.a.createElement("p",null,m):"",c&&h.length?r.a.createElement("hr",null):"",!this.isSearch()&&!this.state.failedRequest&&!y()(o)&&r.a.createElement(X,{onChangeType:function(t){return e.handleChangeType(t)},onChangeVersion:function(t){return e.handleChangeVersion(t)},postType:n,terms:o,version:d,filter:this.state.type,postCount:h.length}),h.map(function(t,s){var o="",c=D(a,n+"/"+t.slug);if(t.deprecated){var l=Q.deprecated_in.replace("%1$s",t.deprecated);o=r.a.createElement("span",null," \u2014 ",r.a.createElement("span",{className:"deprecated-item"},l))}return r.a.createElement("article",{key:s,className:e.props.postClass},r.a.createElement("h1",null,r.a.createElement(i.b,{to:c},t.title),o),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.summary}}),r.a.createElement("div",{className:"sourcefile"},r.a.createElement("p",null,Q.source_file.replace("%1$s",t.source_file))))}))}}]),t}(r.a.Component),ne=Object(G.a)(ee,c.f)(te),ae=function(e){return e.data.hasOwnProperty("signature")&&e.data.signature.length?r.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.data.signature}}):null},re=function(e){return e.element.hasOwnProperty("summary")&&e.element.summary.length?r.a.createElement("section",{className:"summary",dangerouslySetInnerHTML:{__html:e.element.summary}}):null},se=function(e){return e.data.hasOwnProperty("html")&&e.data.html.length?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.html}}):null},oe=function(e){var t=e.element,n=t.line_num,a=t.source_file,s=t.parent,o=t.namespace,c=e.referenceData.repo_release_url;if(!a.length)return null;var l=Q.source_file.replace("%1$s",a),p="",h="",d=!1,m="",f="",g="";if(c.length&&(h=Q.view_source_file,p=u()(c,"/")+"/"+a,n.length&&(h=Q.view_source,p+="#L"+n)),s&&"methods"===e.postType){f=s;var v=e.slug.split("::");2===v.length&&(f=r.a.createElement(i.b,{to:D(e.home,"/classes/"+v[0])},s)),m=r.a.createElement("li",null,Q.class,": ",f)}return o.length&&"global"!==o.toLowerCase()&&(g=r.a.createElement("li",null,Q.namespace.replace("%1$s",o))),p.length&&h?(d=r.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},h),r.a.createElement("ul",{className:"source-info"},m,g,r.a.createElement("li",null,l," \u2014 ",d))):r.a.createElement("ul",{className:"source-info"},m,g,r.a.createElement("li",null,l))},ie=function(e){var t=z()(e,"data.related.uses",{}),n=z()(e,"data.related.used_by",{});if(y()(t)&&y()(n))return null;var a="";y()(t)||(a=r.a.createElement("article",{className:"uses"},r.a.createElement("h3",null,Q.uses),r.a.createElement("ul",null,t.map(function(t,n){return r.a.createElement("li",{key:n},r.a.createElement("span",null,t.source)," ",r.a.createElement(i.b,{to:e.home+t.url},t.text))}))));var s="";return y()(n)||(s=r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("article",{className:"used-by"},r.a.createElement("h3",null,Q.used_by),r.a.createElement("ul",null,n.map(function(t,n){return r.a.createElement("li",{key:n},r.a.createElement("span",null,t.source)," ",r.a.createElement(i.b,{to:e.home+t.url},t.text))}))))),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("section",{className:"related"},r.a.createElement("h2",null,Q.related),a,s))},ce=function(e){var t=e.data.changelog,n=e.archiveUrl;return y()(e.data.changelog)?null:r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("section",{className:"changelog"},r.a.createElement("h3",null,Q.changelog),r.a.createElement("table",null,r.a.createElement("caption",{className:"screen-reader-text"},Q.changelog),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"changelog-version"},Q.version),r.a.createElement("th",{className:"changelog-desc"},Q.description))),r.a.createElement("tbody",null,t.map(function(e,t){var a=e.version;return y()(n)||(a=r.a.createElement(i.b,{to:n+"?since="+a},a)),r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.description}}))})))))},le=function(e){return e.data.hasOwnProperty("methods")?r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("section",{className:"class-methods"},r.a.createElement("h2",null,Q.methods),r.a.createElement("ul",null,e.data.methods.map(function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(i.b,{to:D(e.home,t.url)},t.title)," \u2014 ",r.a.createElement("div",{className:"class-methods-excerpt",dangerouslySetInnerHTML:{__html:t.excerpt}}))})))):null},ue=function(e){return e.data.hasOwnProperty("notice")&&e.data.notice.length?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.notice}}):null};var pe=ee(function(e){var t,s=e.postType,o=e.home,i=e.slug,l=e.content,u=S()(l,function(e){return e.slug===i}),p=-1!==u?l[u]:{};if(t=function(e){var t=Object(a.useState)(e),r=Object(k.a)(t,2),s=r[0],o=r[1],i=Object(a.useState)(!1),c=Object(k.a)(i,2),l=c[0],u=c[1];return Object(a.useEffect)(function(){try{y()(e)?(o(null),u(!0)):n(192)("./"+e+".json").then(function(e){o(e),u(!1)})}catch(t){o(null),u(!0)}},[e]),{data:s,failedRequest:l}}(z()(p,"json_file","")),y()(t.data)||y()(p))return t.failedRequest?r.a.createElement(c.a,{to:o}):r.a.createElement(Z,null);var h=z()(p,"slug",""),d=z()(p,"line_num","");if(!h.length||!d.length)return null;var m=z()(t.data,h+"-"+d,{});if(y()(m))return null;var f="";"classes"===s&&(f=r.a.createElement(le,{element:p,data:m,home:o}));var g=D(o,s);return"methods"===s&&(g=""),r.a.createElement("article",{className:e.postClass},r.a.createElement(ue,{element:p,data:m}),r.a.createElement(ae,{element:p,data:m}),r.a.createElement(re,{element:p,data:m}),r.a.createElement(oe,Object.assign({element:p},e)),r.a.createElement(se,{element:p,data:m}),r.a.createElement(ce,{element:p,data:m,archiveUrl:g}),f,r.a.createElement(ie,{element:p,data:m,home:o}))});var he=b(function(e){var t=e.location.pathname,n=e.routeIndex,a=e.route.postType,s=D(e.home,e.route.path),o=e.match.isExact?1:2,i=R(t,n+o),l=L(t,o);if(i||"classes"!==a||(i=R(t,n+ ++o),a=i?"methods":a),!i)return r.a.createElement(c.a,{to:e.home});"methods"===a&&(l+="::"+L(t,o));var u=function(e){var t=x(e);return t.length?"wp-parser-"+t:""}(a),p=e.match.isExact?"archive":"single";return r.a.createElement(W,Object.assign({},e,{postType:a,page:p}),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:s,exact:!0,render:function(t){return r.a.createElement(ne,Object.assign({},e,{postType:a,postClass:u}))}}),r.a.createElement(c.b,{path:s+"/:slug",render:function(t){return r.a.createElement(pe,Object.assign({},e,{postType:a,postClass:u,slug:l}))}})))}),de=[{path:"/",postType:"functions",component:A,exact:!0},{path:"/hooks",postType:"hooks",component:he,exact:!1},{path:"/functions",postType:"functions",component:he,exact:!1},{path:"/classes",postType:"classes",component:he,exact:!1}],me=n(46),fe=(n(193),n(194),function(e){var t=me.app_basename,n=u()("/"+t),a={appName:t,referenceData:me,home:n,routeIndex:"/"===n?0:1};return r.a.createElement(i.a,null,r.a.createElement(c.d,null,de.map(function(e){return function(e,t){var n=D(t.home,e.path);if(t.home!==n&&-1===I.indexOf(e.postType))return null;var a=e.component;return r.a.createElement(c.b,{path:n,key:n,exact:e.exact,render:function(n){return r.a.createElement(a,Object.assign({},n,t,{postType:e.postType,route:e}))}})}(e,a)}),r.a.createElement(c.a,{to:a.home})))}),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(_,null,r.a.createElement(E.Consumer,null,function(e){var t=e.fetchData;return r.a.createElement(fe,{fetchData:t})})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/custom-post-type-date-archives",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/custom-post-type-date-archives","/service-worker.js");ge?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ve(e)})}}()},22:function(e){e.exports=["functions","hooks","classes","methods"]},46:function(e){e.exports={homepage:"https://keesiemeijer.github.io/custom-post-type-date-archives",app_basename:"custom-post-type-date-archives",app_description:"Plugin Code Reference",app_url:"https://wordpress.org/plugins/custom-post-type-date-archives",app_docs_url:"",repo_url:"https://github.com/keesiemeijer/custom-post-type-date-archives",repo_release_url:"https://github.com/keesiemeijer/custom-post-type-date-archives/tree/2.7.0",repo_gh_pages:"https://github.com/keesiemeijer/custom-post-type-date-archives.git",parsed_name:"Custom Post Type Date Archives",parsed_version:"v2.7.0",parsed_type:"plugin"}},79:function(e,t,n){e.exports=n(195)}},[[79,1,2]]]);
//# sourceMappingURL=main.0071e8e2.chunk.js.map