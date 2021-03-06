/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SelectControl, RangeControl } from '@wordpress/components';

export default function QueryPanel({
	limit,
	onLimitChange,
	type,
	onTypeChange,
	order,
	onOrderChange,
}) {
	return [
		onTypeChange && (
			<SelectControl
			key="cptda-select-order"
			label={ __( 'Type of archives', 'custom-post-type-date-archives' ) }
			value={ `${type}` }
			options={ typeOptions }
			onChange={ ( value ) => { onTypeChange( value ); } }
		/>),
		onLimitChange && (
			<RangeControl
				key="cptda-range-limit"
				label={ __( 'Limit', 'custom-post-type-date-archives' ) }
				value={ limit }
				onChange={ ( value ) => { onLimitChange( value ); } }
				min={ 1 }
				max={ 100 }
			/>),
		onOrderChange && (
			<SelectControl
			key="cptda-select-order"
			label={ __( 'Order', 'custom-post-type-date-archives' ) }
			value={ `${order}` }
			options={ orderOptions }
			onChange={ ( value ) => { onOrderChange( value ); } }
		/>)
	]
}

const orderOptions = [
	{ value: 'ASC', label: __('Ascending') },
	{ value: 'DESC', label: __('Descending') },
];

const typeOptions = [
	{ value: 'alpha', label: __('Alphabetical') },
	{ value: 'daily', label: __('Daily') },
	{ value: 'monthly', label: __('Monthly') },
	{ value: 'postbypost', label: __('Post By Post') },
	{ value: 'weekly', label: __('Weekly') },
	{ value: 'yearly', label: __('Yearly') },
];