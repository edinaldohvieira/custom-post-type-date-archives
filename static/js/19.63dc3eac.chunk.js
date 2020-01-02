(this["webpackJsonpgithub-pages-code-reference"]=this["webpackJsonpgithub-pages-code-reference"]||[]).push([[19],{214:function(e){e.exports=JSON.parse('{"cptda_post_type_date_archives_feed-189":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$feed</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>)</span><span class=\\"description\\">Add a feed for a post type date archive. Default true.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/archive_has_feed","text":"CPTDA_Rewrite::archive_has_feed()"}]},"changelog":[],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \\"cptda_{$post_type}_date_archives_feed\\",  <nobr><span class=\\"arg-type\\">bool</span> <span class=\\"arg-name\\">$feed</span></nobr> )","notice":""},"cptda_date_archives_feed-178":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$feed</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"bool\\">bool</span>)</span><span class=\\"description\\">Add a feed for post type date archives. Default true</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/archive_has_feed","text":"CPTDA_Rewrite::archive_has_feed()"}]},"changelog":[{"description":"Introduced.","version":"2.3.0"}],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \'cptda_date_archives_feed\',  <nobr><span class=\\"arg-type\\">bool</span> <span class=\\"arg-name\\">$feed</span></nobr> )","notice":""},"cptda_flush_rewrite_rules-83":{"html":"<hr /><section class=\\"description\\"><h2>Description</h2><p>Rewrite rules are automatically flushed by this plugin on the front end. They are only flushed when the date rewrite rules for custom post types don&#8217;t exist yet. If disabled you&#8217;ll have to update the rewrite rules manually by going to wp-admin &gt; Settings &gt; Permalinks.</p></section><hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$flush</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"boolean\\">boolean</span>)</span><span class=\\"description\\">Flush rewrite rules for new cpt date archives. Default true.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/setup_archive_rewrite_rules","text":"CPTDA_Rewrite::setup_archive_rewrite_rules()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \'cptda_flush_rewrite_rules\',  <nobr><span class=\\"arg-type\\">boolean</span> <span class=\\"arg-name\\">$flush</span></nobr> )","notice":""},"cptda_rewrite-23":{"html":"","methods":[{"url":"/classes/cptda_rewrite/__construct","title":"__construct","excerpt":"Method: Constructor","deprecated":false},{"url":"/classes/cptda_rewrite/archive_has_feed","title":"archive_has_feed","excerpt":"Method: Check if acustom post type has date archive feeds.","deprecated":false},{"url":"/classes/cptda_rewrite/flush_rules","title":"flush_rules","excerpt":"Method: Flush rewrite rules for new custom post type date archives.","deprecated":false},{"url":"/classes/cptda_rewrite/generate_rewrite_rules","title":"generate_rewrite_rules","excerpt":"Method: Adds all custom post types date archive rewrite rules to the current rewrite rules.","deprecated":false},{"url":"/classes/cptda_rewrite/get_date_permastruct","title":"get_date_permastruct","excerpt":"Method: Returns date permastruct for a custom post type","deprecated":false},{"url":"/classes/cptda_rewrite/get_rewrite_rules","title":"get_rewrite_rules","excerpt":"Method: Returns date rewrite rules for all custom post types that support date archives.","deprecated":false},{"url":"/classes/cptda_rewrite/get_rules","title":"get_rules","excerpt":"Method: Returns rewrite rules","deprecated":false},{"url":"/classes/cptda_rewrite/is_new_rewrite_rules","title":"is_new_rewrite_rules","excerpt":"Method: Checks if the date rewrite rules for custom post types exist.","deprecated":false},{"url":"/classes/cptda_rewrite/setup_archive_rewrite_rules","title":"setup_archive_rewrite_rules","excerpt":"Method: Set up date archive rewrite rules","deprecated":false},{"url":"/classes/cptda_rewrite/setup_archives","title":"setup_archives","excerpt":"Method: Sets up custom post type date archives.","deprecated":false}],"related":{"uses":[],"used_by":[]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"CPTDA_Rewrite","notice":""},"cptda_rewrite::__construct-36":{"html":"","methods":[],"related":{"uses":[],"used_by":[]},"changelog":[],"signature":"CPTDA_Rewrite::__construct()","notice":""},"cptda_rewrite::archive_has_feed-170":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Post type.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(bool)</span> True if post type date archive has a feed.</p></section>","methods":[],"related":{"uses":[{"source":"includes/rewrite.php","url":"/hooks/cptda_date_archives_feed","text":"cptda_date_archives_feed"},{"source":"includes/rewrite.php","url":"/hooks/cptda_post_type_date_archives_feed","text":"cptda_{$post_type}_date_archives_feed"}],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/get_rules","text":"CPTDA_Rewrite::get_rules()"}]},"changelog":[{"description":"Introduced.","version":"2.3.0"}],"signature":"CPTDA_Rewrite::archive_has_feed( <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;)","notice":""},"cptda_rewrite::flush_rules-242":{"html":"<hr /><section class=\\"description\\"><h2>Description</h2><p>!Important. The rewrite rules are not flushed on every page load. That would be bad. See the custom_post_type_date_archives_flush_rules filter for when this method is called.</p></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/setup_archive_rewrite_rules","text":"CPTDA_Rewrite::setup_archive_rewrite_rules()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"CPTDA_Rewrite::flush_rules()","notice":""},"cptda_rewrite::generate_rewrite_rules-98":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$wp_rewrite</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"object\\">object</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">WP_Rewrite object.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(object)</span> WP_Rewrite object.</p></section>","methods":[],"related":{"uses":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/get_rewrite_rules","text":"CPTDA_Rewrite::get_rewrite_rules()"}],"used_by":[]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"CPTDA_Rewrite::generate_rewrite_rules( <span class=\\"arg-type\\">object</span>&nbsp;<span class=\\"arg-name\\">$wp_rewrite</span>&nbsp;)","notice":""},"cptda_rewrite::get_date_permastruct-158":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Post type.</span></p></dd></dl></section>","methods":[],"related":{"uses":[{"source":"includes/cpt-rewrite.php","url":"/classes/cptda_cpt_rewrite/__construct","text":"CPTDA_CPT_Rewrite::__construct()"}],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/get_rules","text":"CPTDA_Rewrite::get_rules()"}]},"changelog":[{"description":"Introduced.","version":"2.3.0"}],"signature":"CPTDA_Rewrite::get_date_permastruct( <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;)","notice":""},"cptda_rewrite::get_rewrite_rules-112":{"html":"<hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Custom post types date archive rewrite rules.</p></section>","methods":[],"related":{"uses":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/get_rules","text":"CPTDA_Rewrite::get_rules()"}],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/is_new_rewrite_rules","text":"CPTDA_Rewrite::is_new_rewrite_rules()"},{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/generate_rewrite_rules","text":"CPTDA_Rewrite::generate_rewrite_rules()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"CPTDA_Rewrite::get_rewrite_rules()","notice":""},"cptda_rewrite::get_rules-131":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Post type to return rewrite rules for.</span></p></dd></dl></section>","methods":[],"related":{"uses":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/archive_has_feed","text":"CPTDA_Rewrite::archive_has_feed()"},{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/get_date_permastruct","text":"CPTDA_Rewrite::get_date_permastruct()"}],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/get_rewrite_rules","text":"CPTDA_Rewrite::get_rewrite_rules()"}]},"changelog":[{"description":"Introduced.","version":"2.3.0"}],"signature":"CPTDA_Rewrite::get_rules( <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;)","notice":""},"cptda_rewrite::is_new_rewrite_rules-201":{"html":"<hr /><section class=\\"description\\"><h2>Description</h2><p>The date rules exist if they&#8217;re already in the current rewrite rules.</p></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(boolean)</span> Returns true if custom post types date rewrite rules don\'t exist.</p></section>","methods":[],"related":{"uses":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/get_rewrite_rules","text":"CPTDA_Rewrite::get_rewrite_rules()"}],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/setup_archive_rewrite_rules","text":"CPTDA_Rewrite::setup_archive_rewrite_rules()"}]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"CPTDA_Rewrite::is_new_rewrite_rules()","notice":""},"cptda_rewrite::setup_archive_rewrite_rules-67":{"html":"<hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>","methods":[],"related":{"uses":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/is_new_rewrite_rules","text":"CPTDA_Rewrite::is_new_rewrite_rules()"},{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/flush_rules","text":"CPTDA_Rewrite::flush_rules()"},{"source":"includes/rewrite.php","url":"/hooks/cptda_flush_rewrite_rules","text":"cptda_flush_rewrite_rules"}],"used_by":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/setup_archives","text":"CPTDA_Rewrite::setup_archives()"}]},"changelog":[{"description":"Introduced.","version":"2.3.0"}],"signature":"CPTDA_Rewrite::setup_archive_rewrite_rules()","notice":""},"cptda_rewrite::setup_archives-48":{"html":"<hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>","methods":[],"related":{"uses":[{"source":"includes/rewrite.php","url":"/classes/cptda_rewrite/setup_archive_rewrite_rules","text":"CPTDA_Rewrite::setup_archive_rewrite_rules()"},{"source":"custom-post-type-date-archives.php","url":"/functions/cptda_date_archives","text":"cptda_date_archives()"}],"used_by":[]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"CPTDA_Rewrite::setup_archives()","notice":""}}')}}]);
//# sourceMappingURL=19.63dc3eac.chunk.js.map