(this["webpackJsonpgithub-pages-code-reference"]=this["webpackJsonpgithub-pages-code-reference"]||[]).push([[13],{208:function(s){s.exports=JSON.parse('{"cptda_get_day_archive_link-210":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current year. Integer of year.</span></p></dd><dt>$month</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current month. Integer of month.</span></p></dd><dt>$day</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current day. Integer of day.</span></p></dd><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Post type.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Archive permalink.</p></section>","methods":[],"related":{"uses":[{"source":"includes/link-template.php","url":"/functions/cptda_get_day_link","text":"cptda_get_day_link()"}],"used_by":[{"source":"includes/archives.php","url":"/functions/cptda_get_archives","text":"cptda_get_archives()"},{"source":"includes/calendar.php","url":"/functions/cptda_get_calendar","text":"cptda_get_calendar()"}]},"changelog":[{"description":"Introduced.","version":"2.6.0"}],"signature":"cptda_get_day_archive_link( <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$year</span>,  <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$month</span>,  <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$day</span>,  <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;)","notice":""},"cptda_get_day_link-121":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current year. Integer of year.</span></p></dd><dt>$month</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current month. Integer of month.</span></p></dd><dt>$day</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current day. Integer of day.</span></p></dd><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Optional)</span><span class=\\"description\\">Post type.</span></p><p class=\\"default\\">Default value: \'\'</p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> </p></section>","methods":[],"related":{"uses":[{"source":"includes/functions.php","url":"/functions/cptda_is_date_post_type","text":"cptda_is_date_post_type()"},{"source":"includes/link-template.php","url":"/hooks/cptda_get_day_link","text":"cptda_get_day_link"},{"source":"includes/cpt-rewrite.php","url":"/classes/cptda_cpt_rewrite/__construct","text":"CPTDA_CPT_Rewrite::__construct()"}],"used_by":[{"source":"includes/link-template.php","url":"/functions/cptda_get_day_archive_link","text":"cptda_get_day_archive_link()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"cptda_get_day_link( <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$year</span>,  <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$month</span>,  <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$day</span>,  <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;=&nbsp;<span class=\\"arg-default\\">\'\'</span>&nbsp;)","notice":""},"cptda_get_month_archive_link-192":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current year. Integer of year.</span></p></dd><dt>$month</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current month. Integer of month.</span></p></dd><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Post type.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Archive permalink.</p></section>","methods":[],"related":{"uses":[{"source":"includes/link-template.php","url":"/functions/cptda_get_month_link","text":"cptda_get_month_link()"}],"used_by":[{"source":"includes/archives.php","url":"/functions/cptda_get_archives","text":"cptda_get_archives()"},{"source":"includes/calendar.php","url":"/functions/cptda_get_calendar","text":"cptda_get_calendar()"}]},"changelog":[{"description":"Introduced.","version":"2.6.0"}],"signature":"cptda_get_month_archive_link( <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$year</span>,  <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$month</span>,  <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;)","notice":""},"cptda_get_month_link-70":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current year. Integer of year.</span></p></dd><dt>$month</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current month. Integer of month.</span></p></dd><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Optional)</span><span class=\\"description\\">Post type.</span></p><p class=\\"default\\">Default value: \'\'</p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> </p></section>","methods":[],"related":{"uses":[{"source":"includes/functions.php","url":"/functions/cptda_is_date_post_type","text":"cptda_is_date_post_type()"},{"source":"includes/link-template.php","url":"/hooks/cptda_get_month_link","text":"cptda_get_month_link"},{"source":"includes/cpt-rewrite.php","url":"/classes/cptda_cpt_rewrite/__construct","text":"CPTDA_CPT_Rewrite::__construct()"}],"used_by":[{"source":"includes/link-template.php","url":"/functions/cptda_get_month_archive_link","text":"cptda_get_month_archive_link()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"cptda_get_month_link( <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$year</span>,  <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$month</span>,  <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;=&nbsp;<span class=\\"arg-default\\">\'\'</span>&nbsp;)","notice":""},"cptda_get_year_archive_link-175":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>|<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current year. Integer of year.</span></p></dd><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Post type.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Archive permalink.</p></section>","methods":[],"related":{"uses":[{"source":"includes/link-template.php","url":"/functions/cptda_get_year_link","text":"cptda_get_year_link()"}],"used_by":[{"source":"includes/archives.php","url":"/functions/cptda_get_archives","text":"cptda_get_archives()"}]},"changelog":[{"description":"Introduced.","version":"2.6.0"}],"signature":"cptda_get_year_archive_link( <span class=\\"arg-type\\">bool|int</span>&nbsp;<span class=\\"arg-name\\">$year</span>,  <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;)","notice":""},"cptda_get_year_link-26":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>|<span class=\\"bool\\">bool</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">False for current year or year for permalink.</span></p></dd><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Optional)</span><span class=\\"description\\">Post type.</span></p><p class=\\"default\\">Default value: \'\'</p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> </p></section>","methods":[],"related":{"uses":[{"source":"includes/functions.php","url":"/functions/cptda_is_date_post_type","text":"cptda_is_date_post_type()"},{"source":"includes/link-template.php","url":"/hooks/cptda_get_year_link","text":"cptda_get_year_link"},{"source":"includes/cpt-rewrite.php","url":"/classes/cptda_cpt_rewrite/__construct","text":"CPTDA_CPT_Rewrite::__construct()"}],"used_by":[{"source":"includes/link-template.php","url":"/functions/cptda_get_year_archive_link","text":"cptda_get_year_archive_link()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"cptda_get_year_link( <span class=\\"arg-type\\">int|bool</span>&nbsp;<span class=\\"arg-name\\">$year</span>,  <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;=&nbsp;<span class=\\"arg-default\\">\'\'</span>&nbsp;)","notice":""},"cptda_get_day_link-163":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$daylink</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">Permalink for the day archive.</span></p></dd><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Year for the archive.</span></p></dd><dt>$month</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Month for the archive.</span></p></dd><dt>$day</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">The day for the archive.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/link-template.php","url":"/functions/cptda_get_day_link","text":"cptda_get_day_link()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \'cptda_get_day_link\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$daylink</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$year</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$month</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$day</span></nobr> )","notice":""},"cptda_get_month_link-106":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$monthlink</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">Permalink for the month archive.</span></p></dd><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Year for the archive.</span></p></dd><dt>$month</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">The month for the archive.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/link-template.php","url":"/functions/cptda_get_month_link","text":"cptda_get_month_link()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \'cptda_get_month_link\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$monthlink</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$year</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$month</span></nobr> )","notice":""},"cptda_get_year_link-56":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$yearlink</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">Permalink for the year archive.</span></p></dd><dt>$year</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Year for the archive.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/link-template.php","url":"/functions/cptda_get_year_link","text":"cptda_get_year_link()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \'cptda_get_year_link\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$yearlink</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$year</span></nobr> )","notice":""}}')}}]);
//# sourceMappingURL=13.44756b6c.chunk.js.map