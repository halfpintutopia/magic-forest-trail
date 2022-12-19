(function () {
    const ICON = {
        LOCATION_FROM_ROOT: 'assets/media/images/Character.png',
        LOCATION_FROM_TRAILS: '../assets/media/images/Character.png',
        SIZE: [90, 90],
        ANCHOR: [45, 45],
        POPUP_ANCHOR: [-3, -35]
    }

    const LOCATION = {
        GUMEN: {
            NAME: 'Gumen',
            COORDINATES: [46.95630300782775, 8.984794311962439]
        }, 
        BRAUNWALDALP_OBERSTAFEL: {
            NAME: 'Braunwaldalp Oberstafel',
            COORDINATES: [46.95284153426676, 8.980290264478532]
        },
        ZWERGENSCHLOSS: {
            NAME: 'Zwergenschloss',
            COORDINATES: [46.95135241573962, 8.979012529045242]
        }, 
        EDELSTEINPLATTE: {
            NAME: 'Edelsteinplatte',
            COORDINATES: [46.95037287337732, 8.986427037353042]
        }, 
        ZWERGENHOEHLE: {
            NAME: 'Zwergenhöhle',
            COORDINATES: [46.95352513294477, 8.991927300906667]
        }, 
        RINDENHUETTI: {
            NAME: 'Rindenhütti',
            COORDINATES: [46.95129948447688, 8.994199027159544]
        }, 
        GROTZENBUEEL: {
            NAME: 'Grotzenbüel',
            COORDINATES: [46.94911745145799, 8.994060692535617]
        }, 
        ZWERGENTURM: {
            NAME: 'Zwergenturm',
            COORDINATES: [46.94821303456593, 8.988419365248616]
        }, 
        WASSERSPEILPLATZ: {
            NAME: 'Wasserpeilplatz',
            COORDINATES: [46.94203436055754, 8.980612768158224]
        }, 
        TIDIS_HUESLI: {
            NAME: 'Tiidis Hüsli',
            COORDINATES: [46.94161120657334, 8.981221126195354]
        }, 
        MUSIKTRUHE_BRAUNWALD: {
            NAME: 'Musiktruhe',
            COORDINATES: [46.938889912172485, 8.998339463477796]
        }, 
    }

    const MAP = {
        AREA: [46.949986739165375, 8.993144532870112],
        ZOOM: 14,
        MAX_ZOOM: 20,
        MIN_ZOOM: 14,
    }

    const ID = {
        FULL_TRAIL: 'map-full',
        FULL_TRAIL_HALF: 'map-full-half',
        VARIATION_1: 'map-variation-1',
        VARIATION_2: 'map-variation-2',
        VARIATION_3: 'map-variation-3',
        VARIATION_4: 'map-variation-4',
        VARIATION_5: 'map-variation-5',
        ADDRESS: 'map-address'
    }

    /**
     * @param {string} id ID of map container
     * @param {Array<float>} coordinates Array of longitude and latitude 
     * @param {number} zoom Number for how much to zoom in
     * @returns 
     */
    const createMap = (id, mapCoordinates, zoom) => {
        return L.map(id).setView(mapCoordinates, zoom);
    }

    /**
     * @param {string} iconLocation String for relative location for the png
     * @returns 
     */
    const createCustomMarker = (iconLocation) => {
        return L.icon({
            iconUrl: iconLocation,

            iconSize: ICON.SIZE,
            iconAnchor: ICON.ANCHOR,
            popupAnchor: ICON.POPUP_ANCHOR
        });
    }

    /**
     * @param {Array<float>} markerCoordinates Coordinates in array of longitude and latitude
     * @param {object} marker Marker object
     * @param {object} map Map object
     */
    const addMarkers = (location, marker, map) => {
        L.marker(location.COORDINATES, {
            icon: marker
        }).addTo(map).bindPopup(location.NAME);
    }

    /**
     * @param {string} id String id name of the map container
     * @param {Array<float>} mapCoordinates Array of location coordinates
     * @param {number} zoom Number to represent how far to zoom into the map
     * @param {string} iconLocation Relative location of the png of the icon
     * @param {Array<Array>} locations Array of coordinates for multiple locations
     */
    const initMap = (
        id,
        mapCoordinates,
        zoom,
        iconLocation,
        locations
    ) => {

        const map = createMap(id, mapCoordinates, zoom)
        const marker = createCustomMarker(iconLocation)
        let bounds = []

        L.tileLayer('https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg', {
            attribution: '&copy; <a href="https://www.swisstopo.admin.ch/" target="_blank" rel="noopener noreferrer" aria-label="Link to Swiss Topo site">swisstopo</a>',
            maxZoom: MAP.MAX_ZOOM,
            minZoom: MAP.MIN_ZOOM,
        }).addTo(map);


        locations.forEach((location) => {
            addMarkers(location, marker, map)

            bounds.push(location.COORDINATES)
        })

        bounds = new L.LatLngBounds(bounds);

        map.fitBounds(bounds)
    }

    if (document.getElementById(ID.FULL_TRAIL)) {
        initMap(
            ID.FULL_TRAIL,
            MAP.AREA,
            MAP.ZOOM,
            ICON.LOCATION_FROM_TRAILS,
            [
                LOCATION.GUMEN,
                LOCATION.BRAUNWALDALP_OBERSTAFEL,
                LOCATION.ZWERGENSCHLOSS,
                LOCATION.EDELSTEINPLATTE,
                LOCATION.ZWERGENHOEHLE,
                LOCATION.RINDENHUETTI,
                LOCATION.GROTZENBUEEL,
                LOCATION.ZWERGENTURM,
                LOCATION.WASSERSPEILPLATZ,
                LOCATION.TIDIS_HUESLI,
                LOCATION.MUSIKTRUHE_BRAUNWALD
            ]
        );
    }

    if (document.getElementById(ID.VARIATION_1)) {
        initMap(
            ID.VARIATION_1,
            MAP.AREA,
            MAP.ZOOM,
            ICON.LOCATION_FROM_TRAILS,
            [
                LOCATION.GUMEN,
                LOCATION.ZWERGENSCHLOSS,
                LOCATION.EDELSTEINPLATTE,
                LOCATION.ZWERGENHOEHLE,
                LOCATION.RINDENHUETTI,
                LOCATION.GROTZENBUEEL,
            ]
        );
    }

    if (document.getElementById(ID.VARIATION_2)) {
        initMap(
            ID.VARIATION_2,
            MAP.AREA,
            MAP.ZOOM,
            ICON.LOCATION_FROM_TRAILS,
            [
                LOCATION.GROTZENBUEEL,
                LOCATION.ZWERGENTURM,
                LOCATION.WASSERSPEILPLATZ,
                LOCATION.TIDIS_HUESLI,
                LOCATION.MUSIKTRUHE_BRAUNWALD
            ]
        );
    }

    if (document.getElementById(ID.VARIATION_3)) {
        initMap(
            ID.VARIATION_3,
            MAP.AREA,
            MAP.ZOOM,
            ICON.LOCATION_FROM_TRAILS,
            [
                LOCATION.GROTZENBUEEL,
                LOCATION.RINDENHUETTI,
                LOCATION.EDELSTEINPLATTE,
                LOCATION.ZWERGENHOEHLE,
            ]
        );
    }

    if (document.getElementById(ID.VARIATION_4)) {
        initMap(
            ID.VARIATION_4,
            MAP.AREA,
            MAP.ZOOM,
            ICON.LOCATION_FROM_TRAILS,
            [
                LOCATION.GROTZENBUEEL,
                LOCATION.ZWERGENTURM,
                LOCATION.MUSIKTRUHE_BRAUNWALD
            ]
        );
    }

    if (document.getElementById(ID.VARIATION_5)) {
        initMap(
            ID.VARIATION_5,
            MAP.AREA,
            MAP.ZOOM,
            ICON.LOCATION_FROM_TRAILS,
            [
                LOCATION.MUSIKTRUHE_BRAUNWALD,
                LOCATION.TIDIS_HUESLI,
                LOCATION.WASSERSPEILPLATZ,
                LOCATION.ZWERGENSCHLOSS
            ]
        );
    }

    if (document.getElementById(ID.ADDRESS)) {
        initMap(
            ID.ADDRESS,
            MAP.AREA,
            13,
            ICON.LOCATION_FROM_ROOT,
            [
                LOCATION.GROTZENBUEEL
            ]
        );
    }
})();