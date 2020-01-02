(this["webpackJsonpgithub-pages-code-reference"]=this["webpackJsonpgithub-pages-code-reference"]||[]).push([[4],{199:function(s){s.exports=JSON.parse('{"cptda_admin_settings-23":{"html":"","methods":[{"url":"/classes/cptda_admin_settings/get_default_settings","title":"get_default_settings","excerpt":"Method:","deprecated":false},{"url":"/classes/cptda_admin_settings/get_settings","title":"get_settings","excerpt":"Method: Returns the settings for the current admin page post type.","deprecated":false},{"url":"/classes/cptda_admin_settings/merge_settings","title":"merge_settings","excerpt":"Method: Merge settings from a post type with the old settings","deprecated":false},{"url":"/classes/cptda_admin_settings/remove_invalid_post_types","title":"remove_invalid_post_types","excerpt":"Method: Remove invalid admin post types from settings.","deprecated":false},{"url":"/classes/cptda_admin_settings/sanitize_settings","title":"sanitize_settings","excerpt":"Method: Sanitizes admin settings.","deprecated":false}],"related":{"uses":[],"used_by":[]},"changelog":[{"description":"Introduced.","version":"1.0"}],"signature":"CPTDA_Admin_Settings","notice":""},"cptda_admin_settings::get_default_settings-25":{"html":"","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/get_settings","text":"CPTDA_Admin_Settings::get_settings()"},{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/sanitize_settings","text":"CPTDA_Admin_Settings::sanitize_settings()"}]},"changelog":[],"signature":"CPTDA_Admin_Settings::get_default_settings()","notice":""},"cptda_admin_settings::get_settings-38":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Current admin page post type.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Current post type settings</p></section>","methods":[],"related":{"uses":[{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/get_default_settings","text":"CPTDA_Admin_Settings::get_default_settings()"},{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/sanitize_settings","text":"CPTDA_Admin_Settings::sanitize_settings()"}],"used_by":[]},"changelog":[],"signature":"CPTDA_Admin_Settings::get_settings()","notice":""},"cptda_admin_settings::merge_settings-61":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$old_settings</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Old settings.</span></p></dd><dt>$new_settings</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">New settings.</span></p></dd><dt>$post_type</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Post type of new settings to merge with old settings.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Settings with new settings merged.</p></section>","methods":[],"related":{"uses":[{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/sanitize_settings","text":"CPTDA_Admin_Settings::sanitize_settings()"}],"used_by":[]},"changelog":[],"signature":"CPTDA_Admin_Settings::merge_settings( <span class=\\"arg-type\\">array</span>&nbsp;<span class=\\"arg-name\\">$old_settings</span>,  <span class=\\"arg-type\\">array</span>&nbsp;<span class=\\"arg-name\\">$new_settings</span>,  <span class=\\"arg-type\\">string</span>&nbsp;<span class=\\"arg-name\\">$post_type</span>&nbsp;)","notice":""},"cptda_admin_settings::remove_invalid_post_types-97":{"html":"<hr /><section class=\\"description\\"><h2>Description</h2><p>e.g. Removes post types that no longer exist or don&#8217;t have an archive (anymore).</p></section><hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$settings</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Settings.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Settings with invalid post types removed.</p></section>","methods":[],"related":{"uses":[{"source":"includes/functions.php","url":"/functions/cptda_get_post_types","text":"cptda_get_post_types()"}],"used_by":[{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/sanitize_settings","text":"CPTDA_Admin_Settings::sanitize_settings()"}]},"changelog":[],"signature":"CPTDA_Admin_Settings::remove_invalid_post_types( <span class=\\"arg-type\\">array</span>&nbsp;<span class=\\"arg-name\\">$settings</span>&nbsp;)","notice":""},"cptda_admin_settings::sanitize_settings-79":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$settings</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Admin settings.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Sanitized admin settings.</p></section>","methods":[],"related":{"uses":[{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/get_default_settings","text":"CPTDA_Admin_Settings::get_default_settings()"},{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/remove_invalid_post_types","text":"CPTDA_Admin_Settings::remove_invalid_post_types()"}],"used_by":[{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/get_settings","text":"CPTDA_Admin_Settings::get_settings()"},{"source":"includes/admin-settings.php","url":"/classes/cptda_admin_settings/merge_settings","text":"CPTDA_Admin_Settings::merge_settings()"}]},"changelog":[],"signature":"CPTDA_Admin_Settings::sanitize_settings( <span class=\\"arg-type\\">array</span>&nbsp;<span class=\\"arg-name\\">$settings</span>&nbsp;)","notice":""}}')}}]);
//# sourceMappingURL=4.00c33e8c.chunk.js.map