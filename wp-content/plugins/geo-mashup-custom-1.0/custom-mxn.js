(function() {
	
	GeoMashup.addAction( 'colorIcon', function( properties, icon, color_name ) {
		// For single category icons use the Geo Mashup color icon names, 
		// but the 24x24 ones in the custom image directory
		icon.image = properties.custom_url_path + '/images/mm.png';
		icon.iconShadow = '';
		icon.iconSize = [ 24, 24 ];
		icon.iconAnchor = [ 12, 24 ];
		icon.iconInfoWindowAnchor = [ 12, 1 ];
	} );

	GeoMashup.addAction( 'objectIcon', function( properties, obj ) {

		if ( obj.categories.length == 0 ) {

			// When there are no categories - mm_20_uncategorised.png
			obj.icon.image = properties.custom_url_path + '/images/mm.png';
			obj.icon.iconShadow = '';
			obj.icon.iconSize = [ 24, 24 ];
			obj.icon.iconAnchor = [ 12, 24 ];
			obj.icon.iconInfoWindowAnchor = [ 12, 1 ];

		} else if ( obj.categories.length > 1 ) {

			// When there is more than one category - mm_20_mixed.png
			obj.icon.image = properties.custom_url_path + '/images/mm.png';
			obj.icon.iconShadow = '';
			obj.icon.iconSize = [ 24, 24 ];
			obj.icon.iconAnchor = [ 12, 24 ];
			obj.icon.iconInfoWindowAnchor = [ 12, 1 ];

		}
	} );

	GeoMashup.addAction( 'multiObjectMarker', function( properties, marker ) {
	
		// When there is more than one marker assigned to the same location - mm_20_plus.png
		marker.setIcon( 'https://maps.gstatic.com/mapfiles/api-3/images/review_stars.png' );

	} );

	GeoMashup.addAction( 'singleMarkerOptions', function ( properties, options ) {

		// When the map is a single object map with just one marker
		options.icon.image = properties.custom_url_path + '/images/mm.png';
		options.icon.iconShadow = '';
		options.icon.iconSize = [ 24, 24 ];
		options.icon.iconAnchor = [ 12, 24 ];
		options.icon.iconInfoWindowAnchor = [ 12, 1 ];

	} );
}());