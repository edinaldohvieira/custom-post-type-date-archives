<?php

function cptda_get_archive_settings() {
	return array(
		'post_type'       => 'post',
		'title'           => '',
		'before_title'    => '',
		'after_title'     => '',
		'limit'           => 10,
		'type'            => 'monthly',
		'order'           => 'DESC',
		'format'          => 'html',
		'show_post_count' => false,
	);
}

function cptda_sanitize_archive_settings( $args ) {
	$defaults = cptda_get_recent_posts_settings();
	$args     = array_merge( $defaults, $args );

	$args['post_type']       = sanitize_key( (string) $args['post_type'] );
	$args['title']           = strip_tags( trim( (string) $args['title'] ) );
	$args['before_title']    = trim( (string) $args['before_title'] ) ;
	$args['after_title']     = trim( (string) $args['after_title'] );
	$args['limit']           = absint( $args['limit'] );
	$args['type']            = strip_tags( trim( (string) $args['type'] ) );
	$args['order']           = strip_tags( trim( (string) $args['order'] ) );
	$args['format']          = strip_tags( trim( (string) $args['format'] ) );
	$args['show_post_count'] = wp_validate_boolean( $args['show_post_count'] );

	return $args;
}

function cptda_validate_archive_settings( $args ) {
	$plugin       = cptda_date_archives();
	$defaults     = cptda_get_archive_settings();
	$args         = array_merge( $defaults, $args );
	$type         = array( 'alpha', 'daily', 'monthly', 'postbypost', 'weekly', 'yearly' );
	$order        = array( 'ASC', 'DESC' );
	$format       = array( 'custom', 'html', 'option' );
	$post_types   = $plugin->post_type->get_post_types( 'names' );
	$post_types[] = 'post';

	if ( ! in_array( $args['post_type'], $post_types ) ) {
		$args['post_type'] = 'post';
	}

	/* strings */
	$args['type']   = in_array( $args['type'], $type )     ? $args['type']   : 'monthly';
	$args['order']  = strtoupper( $args['order'] );
	$args['order']  = in_array( $args['order'], $order )   ? $args['order']  : 'DESC';
	$args['format'] = in_array( $args['format'], $format ) ? $args['format'] : 'html';

	/* Integers. */
	$args['limit'] = absint( $args['limit'] );
	$args['limit'] = $args['limit'] ? $args['limit'] : 10;

	return $args;
}

function cptda_get_archives_html( $args ) {
	$defaults = cptda_get_archive_settings();
	$args     = array_merge( $defaults, $args );

	/* Overwrite the $echo argument and set it to false. */
	$args['echo'] = false;
	$html = '';

	/* If a title was input by the user, display it. */
	if ( ! empty( $args['title'] ) ) {
		$html .= $args['before_title'] . $args['title'] . $args['after_title'];
	}

	/* Get the archives list. */
	if ( cptda_is_date_post_type( $args['post_type'] ) ) {
		$archives = str_replace( array( "\r", "\n", "\t" ), '', cptda_get_archives( $args ) );
	} else {
		$archives = str_replace( array( "\r", "\n", "\t" ), '', wp_get_archives( $args ) );
	}

	/* If the archives should be shown in a <select> drop-down. */
	if ( 'option' === $args['format'] ) {

		/* Create a title for the drop-down based on the archive type. */
		if ( 'yearly' === $args['type'] ) {
			$option_title = esc_html__( 'Select Year', 'custom-post-type-date-archives' );
		} elseif ( 'monthly' === $args['type'] ) {
			$option_title = esc_html__( 'Select Month', 'custom-post-type-date-archives' );
		} elseif ( 'weekly' === $args['type'] ) {
			$option_title = esc_html__( 'Select Week', 'custom-post-type-date-archives' );
		} elseif ( 'daily' === $args['type'] ) {
			$option_title = esc_html__( 'Select Day', 'custom-post-type-date-archives' );
		} elseif ( 'postbypost' === $args['type'] || 'alpha' === $args['type'] ) {
			$option_title = esc_html__( 'Select Post', 'custom-post-type-date-archives' );
		}

		/* Output the <select> element and each <option>. */
		$html .= '<p><select name="archive-dropdown" onchange=\'document.location.href=this.options[this.selectedIndex].value;\'>';
		$html .= '<option value="">' . $option_title . '</option>';
		$html .= $archives;
		$html .= '</select></p>';
	} elseif ( 'html' === $args['format'] ) {
		$html .= '<ul>' . $archives . '</ul>';
	} else {
		$html .= $archives;
	}

	return $html;
}
