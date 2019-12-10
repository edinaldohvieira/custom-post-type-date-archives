(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{215:function(e){e.exports={"cptda_rest_api_calendar-138":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$allowed</dt><dd><p class="desc"><span class="type">(<span class="bool">bool</span>)</span><span class="description">Default true.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/rest-api/class-rest-api-calendar.php",url:"/classes/cptda_rest_api_calendar/get_items_permissions_check",text:"CPTDA_Rest_API_Calendar::get_items_permissions_check()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'<span class="hook-func">apply_filters</span>( \'cptda_rest_api_calendar\',  <nobr><span class="arg-type">bool</span> <span class="arg-name">$allowed</span></nobr> )',notice:""},"cptda_rest_api_calendar_args-182":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">Sanitized Rest API request arguments.</span></p></dd><dt>$request</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">Rest API request.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/rest-api/class-rest-api-calendar.php",url:"/classes/cptda_rest_api_calendar/prepare_item_for_response",text:"CPTDA_Rest_API_Calendar::prepare_item_for_response()"}]},changelog:[{description:"Introduced.",version:"2.7.0"}],signature:'<span class="hook-func">apply_filters</span>( \'cptda_rest_api_calendar_args\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$args</span></nobr>,  <nobr><span class="arg-type">array</span> <span class="arg-name">$request</span></nobr> )',notice:""},"cptda_rest_api_calendar-24":{html:'<hr /><section class="description"><h2>Description</h2><p>Registered endpoint: /wp-json/custom-post-type-date-archives/v1/{post_type}/calendar</p></section>',methods:[{url:"/classes/cptda_rest_api_calendar/calendar_filter_callback",title:"calendar_filter_callback",excerpt:"Method: Returns arguments used by the calendar.",deprecated:!1},{url:"/classes/cptda_rest_api_calendar/get_calendar",title:"get_calendar",excerpt:"Method: Returns calendar HTML.",deprecated:!1},{url:"/classes/cptda_rest_api_calendar/get_item",title:"get_item",excerpt:"Method: Get one item from the collection.",deprecated:!1},{url:"/classes/cptda_rest_api_calendar/get_item_permissions_check",title:"get_item_permissions_check",excerpt:"Method: Check if a given request has access to get a specific item",deprecated:!1},{url:"/classes/cptda_rest_api_calendar/get_item_schema",title:"get_item_schema",excerpt:"Method: Retrieves the calendar schema, conforming to JSON Schema.",deprecated:!1},{url:"/classes/cptda_rest_api_calendar/get_items_permissions_check",title:"get_items_permissions_check",excerpt:"Method: Check if a given request has access to get items",deprecated:!1},{url:"/classes/cptda_rest_api_calendar/init",title:"init",excerpt:"Method: Register routes on rest_api_init.",deprecated:!1},{url:"/classes/cptda_rest_api_calendar/prepare_item_for_response",title:"prepare_item_for_response",excerpt:"Method: Prepare the item for the REST response",deprecated:!1},{url:"/classes/cptda_rest_api_calendar/register_routes",title:"register_routes",excerpt:"Method: Register the routes for the objects of the controller.",deprecated:!1}],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:"CPTDA_Rest_API_Calendar",notice:""},"cptda_rest_api_calendar::calendar_filter_callback-269":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$calendar</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">Calendar HTML.</span></p></dd><dt>$date</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Calendar date.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Calendar HTML.</p></section>',methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'CPTDA_Rest_API_Calendar::calendar_filter_callback( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$calendar</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$date</span>&nbsp;)',notice:""},"cptda_rest_api_calendar::get_calendar-283":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Arguments used to get the calendar.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Calendar HTML.</p></section>',methods:[],related:{uses:[{source:"includes/utils/calendar.php",url:"/functions/cptda_get_calendar_html",text:"cptda_get_calendar_html()"}],used_by:[{source:"includes/rest-api/class-rest-api-calendar.php",url:"/classes/cptda_rest_api_calendar/prepare_item_for_response",text:"CPTDA_Rest_API_Calendar::prepare_item_for_response()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'CPTDA_Rest_API_Calendar::get_calendar( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;)',notice:""},"cptda_rest_api_calendar::get_item-83":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$request</dt><dd><p class="desc"><span class="type">(<span class="WP_REST_Request">WP_REST_Request</span>)</span><span class="required">(Required)</span><span class="description">Full data about the request.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(WP_Error|WP_REST_Response)</span> </p></section>',methods:[],related:{uses:[{source:"includes/utils/calendar.php",url:"/functions/cptda_get_calendar_date",text:"cptda_get_calendar_date()"},{source:"includes/rest-api/class-rest-api-calendar.php",url:"/classes/cptda_rest_api_calendar/prepare_item_for_response",text:"CPTDA_Rest_API_Calendar::prepare_item_for_response()"},{source:"includes/functions.php",url:"/functions/cptda_get_post_types",text:"cptda_get_post_types()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'CPTDA_Rest_API_Calendar::get_item( <span class="arg-type">WP_REST_Request</span>&nbsp;<span class="arg-name">$request</span>&nbsp;)',notice:""},"cptda_rest_api_calendar::get_item_permissions_check-150":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$request</dt><dd><p class="desc"><span class="type">(<span class="WP_REST_Request">WP_REST_Request</span>)</span><span class="required">(Required)</span><span class="description">Full data about the request.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(WP_Error|bool)</span> </p></section>',methods:[],related:{uses:[{source:"includes/rest-api/class-rest-api-calendar.php",url:"/classes/cptda_rest_api_calendar/get_items_permissions_check",text:"CPTDA_Rest_API_Calendar::get_items_permissions_check()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'CPTDA_Rest_API_Calendar::get_item_permissions_check( <span class="arg-type">WP_REST_Request</span>&nbsp;<span class="arg-name">$request</span>&nbsp;)',notice:""},"cptda_rest_api_calendar::get_item_schema-219":{html:"<hr /><section class=\"return\"><h3>Return</h3><p><span class='return-type'>(array)</span> Item schema data.</p></section>",methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:"CPTDA_Rest_API_Calendar::get_item_schema()",notice:""},"cptda_rest_api_calendar::get_items_permissions_check-130":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$request</dt><dd><p class="desc"><span class="type">(<span class="WP_REST_Request">WP_REST_Request</span>)</span><span class="required">(Required)</span><span class="description">Full data about the request.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(WP_Error|bool)</span> </p></section>',methods:[],related:{uses:[{source:"includes/rest-api/class-rest-api-calendar.php",url:"/hooks/cptda_rest_api_calendar",text:"cptda_rest_api_calendar"}],used_by:[{source:"includes/rest-api/class-rest-api-calendar.php",url:"/classes/cptda_rest_api_calendar/get_item_permissions_check",text:"CPTDA_Rest_API_Calendar::get_item_permissions_check()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'CPTDA_Rest_API_Calendar::get_items_permissions_check( <span class="arg-type">WP_REST_Request</span>&nbsp;<span class="arg-name">$request</span>&nbsp;)',notice:""},"cptda_rest_api_calendar::init-31":{html:"",methods:[],related:{uses:[],used_by:[{source:"custom-post-type-date-archives.php",url:"/classes/custom_post_type_date_archives/instance",text:"Custom_Post_Type_Date_Archives::instance()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:"CPTDA_Rest_API_Calendar::init()",notice:""},"cptda_rest_api_calendar::prepare_item_for_response-164":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">WP Rest API arguments of the item.</span></p></dd><dt>$request</dt><dd><p class="desc"><span class="type">(<span class="WP_REST_Request">WP_REST_Request</span>)</span><span class="required">(Required)</span><span class="description">Request object.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(mixed)</span> </p></section>',methods:[],related:{uses:[{source:"includes/rest-api/class-rest-api-calendar.php",url:"/classes/cptda_rest_api_calendar/get_calendar",text:"CPTDA_Rest_API_Calendar::get_calendar()"},{source:"includes/rest-api/class-rest-api-calendar.php",url:"/hooks/cptda_rest_api_calendar_args",text:"cptda_rest_api_calendar_args"}],used_by:[{source:"includes/rest-api/class-rest-api-calendar.php",url:"/classes/cptda_rest_api_calendar/get_item",text:"CPTDA_Rest_API_Calendar::get_item()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'CPTDA_Rest_API_Calendar::prepare_item_for_response( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>,  <span class="arg-type">WP_REST_Request</span>&nbsp;<span class="arg-name">$request</span>&nbsp;)',notice:""},"cptda_rest_api_calendar::register_routes-49":{html:"",methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:"CPTDA_Rest_API_Calendar::register_routes()",notice:""}}}}]);
//# sourceMappingURL=17.c4c163a8.chunk.js.map