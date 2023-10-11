export type SearchAreaProps = {
  onLoadA: (ref: google.maps.places.SearchBox) => void;
  onLoadB: (ref: google.maps.places.SearchBox) => void;
  onPlacesChangedA: () => void;
  onPlacesChangedB: () => void;
  traceRoute: () => void;
  pointA?: google.maps.LatLngLiteral;
  pointB?: google.maps.LatLngLiteral;
}