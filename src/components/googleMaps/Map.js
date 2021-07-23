import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { indyStyle } from "./MapStyle";
import { FriendsListArray as markers } from "./data";
import MarkerInfo from "./MarkerInfo";
import { GetPlaceName } from "./Geocode";

// initial map coordinates
const center = {
  lat: 0,
  lng: 0,
};

const options = {
  disableDefaultUI: true, // disables little yellow guy and satellite view
  zoomControl: true, // enables zoom in/out tool
  gestureHandling: "cooperative", // "none" < "cooperative" < "greedy"
  styles: indyStyle,
  minZoom: 2, 
  maxZoom: 3,
};

function Map({ width, height }) {

	const { isLoaded } = useJsApiLoader({
    	id: "google-map-script",
    	googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  	});

	const [map, setMap] = useState(null);
	const [selected, setSelected] = useState(null);

	const onMapLoad = useCallback(function callback(map) {
		setMap(map);
	}, []);

	// prints position and place name in console
	const onMapClick = (place) => {
		if (false) console.log(map);
		console.log("lat: " + place.latLng.lat() + " lng: " + place.latLng.lng());
		GetPlaceName({
			lat: place.latLng.lat(), 
			lng: place.latLng.lng()
		});
	}

	const onMarkerLoad = (marker) => {
		console.log("Marker on map: ", marker);
	};
	
	const onUnmount = useCallback(function callback(map) {
		setMap(null);	
	}, []);

	return isLoaded ? (		
		<GoogleMap
			mapContainerStyle={{
				width: width,
				height: height,
			}}
			center={center}
			zoom={2}
			onLoad={onMapLoad}
			onUnmount={onUnmount}
			options={options}
			onClick={(event) => {
				onMapClick(event);
			}}
		>
			<>
				{markers
				? markers.list.map((user) => (
					<Marker
						key={user.id}
						position={{
							lat: user.position.lat,
							lng: user.position.lng,
						}}
						onClick={() => {
							setSelected(user);
						}}
						onLoad={onMarkerLoad}
					/>
					))
				: null}
				{selected ? (
					<InfoWindow
						position={{
							lat: selected.position.lat + 3,
							lng: selected.position.lng,
						}}
						onCloseClick={() => setSelected(null)}	
					>
						<MarkerInfo
							name={selected.name}
							url={selected.url}
							title={selected.title}
							country={selected.country}
						/>
					</InfoWindow>
					) : null}
			</>
		</GoogleMap>	
	) : (
		<h1>Loading... or maybe not :D</h1>
	);

}

export default React.memo(Map);
