<h3>
	<?php _e( 'Add date archives', 'custom-post-type-date-archives' ); ?>
</h3>
<p>
	<?php printf( __( 'Add date archives to the custom post type %s.', 'custom-post-type-date-archives' ), $label ); ?>
</p>
<p>
	<?php _e( 'Example date archive url', 'custom-post-type-date-archives' ); ?><br/>
	<code><?php echo $sample_day_link ?></code>
</p>
<h3>
	<?php _e( 'Remove date archive feeds', 'custom-post-type-date-archives' ); ?>
</h3>
<p>
	<?php printf( __( 'Feeds are automatically created for custom post type date archives.', 'custom-post-type-date-archives' ), $label ); ?>
	<?php printf( __( 'Check the "Remove feeds" checkbox if you don\'t want any feeds for the %s date archives.', 'custom-post-type-date-archives' ), $label ); ?>
	<a href="https://codex.wordpress.org/WordPress_Feeds"><?php _e('More information about feeds', 'custom-post-type-date-archives') ?></a>
</p>
<p>
	<?php _e( 'Example date archive feed url', 'custom-post-type-date-archives' ); ?><br/>
	<code><?php echo $sample_day_link ?>feed</code>
</p>
<h3>
	<?php _e( 'Publish posts with future dates', 'custom-post-type-date-archives' ); ?>
</h3>

<p>
	<?php _e( "Scheduled posts are posts with a future date. Normally these posts don't show up in the front of your site. The \"Publish posts with future dates\" checkbox allows you to have scheduled posts display in your site the same as published posts.", 'custom-post-type-date-archives' ); ?>
</p>

<p> 
	<?php _e('If checked <strong>new scheduled posts</strong> will be automatically set to published instead of scheduled.', 'custom-post-type-date-archives'); ?>
	<?php printf( __( "To publish <strong>existing scheduled posts </strong> see the %s.", 'custom-post-type-date-archives' ), $scheduled_posts ); ?>
</p>
<h4>
	<?php printf( __( 'This help section is generated by the %s plugin.', 'custom-post-type-date-archives' ), '<a href="https://wordpress.org/plugins/custom-post-type-date-archives/">' . __('Custom Post Type Date Archives', 'custom-post-type-date-archives') . '</a>'); ?><br/>
</h4>
