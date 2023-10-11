'use client';
import React, { useContext, useState } from "react";
import { GoogleMap, Marker, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import SearchArea from "./SearchArea";
import { Context } from "@/context/Context";

export default function Maps() {
  const ctx = useContext(Context)
  const [map, setMap] = useState<google.maps.Map>();
  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);
  const [destination, setDestination] = useState<google.maps.LatLngLiteral | null>(null);
  const [searchBoxA, setSearchBoxA] = useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSearchBoxB] = useState<google.maps.places.SearchBox>();
  const [pointA, setPointA] = useState<google.maps.LatLngLiteral>();
  const [pointB, setPointB] = useState<google.maps.LatLngLiteral>();
  const [response, setResponse] = useState<google.maps.DistanceMatrixResponse | null>(null);
  const position = {
    lat: -27.590824,
    lng: -48.551262,
  };

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onLoadA = (ref: google.maps.places.SearchBox) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref: google.maps.places.SearchBox) => {
    setSearchBoxB(ref);
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA?.getPlaces();
    const place = places?.[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    ctx.setDuration(null);
    ctx.setDistance(null);
    map?.panTo(location);
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB?.getPlaces();
    const place = places?.[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    ctx.setDuration(null);
    ctx.setDistance(null);
    map?.panTo(location);
  };

  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  const directionsServiceOptions =
    // @ts-ignore
    React.useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin: origin,
        destination: destination,
        travelMode: ctx.typeTransport === "DRIVING" ? 'DRIVING' : ctx.typeTransport === "WALKING" ? 'WALKING' : 'BICYCLING',
      };
    }, [origin, destination]);

  const directionsCallback = React.useCallback((res: any) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);

      const route = res.routes[0];
      if (route) {
        const legs = route.legs[0];
        if (legs) {
          ctx.setDuration(legs.duration?.text || null);
          ctx.setDistance(legs.distance?.text || null);
          map?.setZoom(10);
        }
      }
    } else {
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = React.useMemo<any>(() => {
    return {
      directions: response,
    };
  }, [response]);


  return (
    <section className='w-screen h-screen '>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY!}
        libraries={["places"]}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={10}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <h1>{process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}</h1>
          <SearchArea
            onLoadA={onLoadA} onLoadB={onLoadB}
            onPlacesChangedA={onPlacesChangedA} onPlacesChangedB={onPlacesChangedB}
            traceRoute={traceRoute} pointA={pointA} pointB={pointB}
          />

          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {origin && destination && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </section>
  )
}
