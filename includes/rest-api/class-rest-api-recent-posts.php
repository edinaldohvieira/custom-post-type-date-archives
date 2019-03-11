<?php
/**
 * Rest API Recent Posts endpoint.
 *
 * @package     Custom Post Type Date Archives
 * @subpackage  Rest_API/Recent_Posts
 * @copyright   Copyright (c) 2019, Kees Meijer
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       2.5.2
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds a WordPress REST API endpoint to get a custom post type calendar.
 *
 * Registered endpoint: /wp-json/custom-post-type-date-archives/v1/{post_type}/calendar
 *
 * @since 2.5.2
 */
class CPTDA_Rest_API_Recent_Posts extends WP_REST_Controller {

	/**
	 * Register routes on rest_api_init.
	 *
	 * @since 2.5.2
	 */
	public function init() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Register the routes for the objects of the controller.
	 *
	 * @since 2.5.2
	 */
	public function register_routes() {
		$version = '1';
		$namespace = 'custom_post_type_date_archives/v' . $version;
		$base = 'recent-posts';

		register_rest_route( $namespace, '/(?P<type>[\w-]+)/' . $base, array(
				'args' => array(
					'type' => array(
						'description' => __( 'An alphanumeric identifier for the post type.' ),
						'type'        => 'string',
					),
				),
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
					'args'                => array(
						'context' => $this->get_context_param( array( 'default' => 'view' ) ),
					),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

	/**
	 * Get one item from the collection.
	 *
	 * @since 2.5.2
	 * @access public
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_item( $request ) {
		$args  = $request->get_params();
		$error = new WP_Error( 'rest_invalid_args', __( 'Invalid post type', 'custom-post-type-date-archives' ), array( 'status' => 404 ) );
		$data  = array();

		$post_type = $args['type'];
		if ( ! ( isset( $post_type ) && post_type_exists( $post_type ) ) ) {
			return $error;
		}


		$defaults = cptda_get_recent_posts_settings();
		$args     = wp_parse_args( $args, $defaults );

		$args['post_type'] = $post_type;
		$args = cptda_sanitize_recent_posts_settings( $args );

		$args = $this->prepare_item_for_response( $args, $request );

		return rest_ensure_response( $args );
	}

	/**
	 * Check if a given request has access to get items
	 *
	 * @since 2.5.2
	 * @access public
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function get_items_permissions_check( $request ) {
		/**
		 * Whether users are allowed to view recent posts Rest API items.
		 *
		 * @since 2.5.2
		 *
		 * @param bool $allowed Default true.
		 */
		return apply_filters( 'cptda_rest_api_recent_posts', true, $request );
	}

	/**
	 * Check if a given request has access to get a specific item
	 *
	 * @since 2.5.2
	 * @access public
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function get_item_permissions_check( $request ) {
		return $this->get_items_permissions_check( $request );
	}

	/**
	 * Prepare the item for the REST response
	 *
	 * @since 2.5.2
	 * @access public
	 *
	 * @param array           $args    WP Rest API arguments of the item.
	 * @param WP_REST_Request $request Request object.
	 * @return mixed
	 */
	public function prepare_item_for_response( $args, $request ) {

		$recent_posts = cptda_get_recent_posts( $args );
		$rendered     = cptda_get_recent_posts_html( $recent_posts, $args );

		$data = array(
			'posts'     => $recent_posts,
			'rendered'  => $rendered,
		);

		$context = ! empty( $request['context'] ) ? $request['context'] : 'view';
		$data    = $this->add_additional_fields_to_object( $data, $request );
		$data    = $this->filter_response_by_context( $data, $context );

		// Wrap the data in a response object.
		$response = rest_ensure_response( $data );

		return $response;
	}

	/**
	 * Retrieves the calendar schema, conforming to JSON Schema.
	 *
	 * @since 2.5.2
	 * @access public
	 *
	 * @return array Item schema data.
	 */
	public function get_item_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/schema#',
			'title'      => 'custom_post_type_date_archives_calendar',
			'type'       => 'object',
			'properties' => array(
				'posts' => array(
					'description' => __( 'Recent Posts post type.', 'custom-post-type-date-archives' ),
					'type'        => 'array',
					'items'       => array(
						'type'    => 'object|integer|string',
					),
					'context'     => array( 'view' ),
				),
				'rendered' => array(
					'description' => __( 'Rendered calendar HTML', 'custom-post-type-date-archives' ),
					'type'        => 'string',
					'context'     => array( 'view' ),
				),
			),
		);

		return $this->add_additional_fields_schema( $schema );
	}
}
