export const isLatLongWithinRadius = (originLatLong, radius, searchLatLong) => {
    //not real math or how it works
    //this service would be replaced by PostGIS I imagine
    const radiusAsFloat = parseFloat(radius);
    const upperLatBound = parseFloat(originLatLong.lat) + radiusAsFloat;
    const lowerLatBound = parseFloat(originLatLong.lat) - radiusAsFloat;
    const upperLongBound = parseFloat(originLatLong.long) + radiusAsFloat;
    const lowerLongBound = parseFloat(originLatLong.long) - radiusAsFloat;
    return upperLatBound >= searchLatLong.lat &&
            lowerLatBound <= searchLatLong.lat &&
            upperLongBound >= searchLatLong.long &&
            lowerLongBound <= searchLatLong.long;
}