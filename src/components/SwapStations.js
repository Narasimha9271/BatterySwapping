import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { REACT_APP_GOOGLE_MAPS_API_KEY } from "../config/constants";

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";

const center = { lat: 16.8367, lng: 81.538 };
const center1 = { lat: 16.8367, lng: 81.538 };
const center2 = { lat: 16.8367, lng: 81.538 };
const center3 = { lat: 16.8367, lng: 81.538 };
const center4 = { lat: 16.8367, lng: 81.538 };
const center5 = { lat: 16.8367, lng: 81.538 };

function SwapStations() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef();

    if (!isLoaded) {
        return <SkeletonText />;
    }

    async function calculateRoute() {
        if (
            originRef.current.value === "" ||
            destiantionRef.current.value === ""
        ) {
            return;
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        });
        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);
    }

    function clearRoute() {
        setDirectionsResponse(null);
        setDistance("");
        setDuration("");
        originRef.current.value = "";
        destiantionRef.current.value = "";
    }

    return (
        <Flex
            position="relative"
            flexDirection="column"
            alignItems="center"
            h="100vh"
            w="100vw"
        >
            <Box position="absolute" left={0} top={0} h="100%" w="100%">
                {/* Google Map Box */}
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    options={{
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={(map) => setMap(map)}
                >
                    <Marker position={center} />
                    <Marker position={center1} />
                    <Marker position={center2} />
                    <Marker position={center3} />
                    <Marker position={center4} />
                    <Marker position={center5} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </Box>
            <Box
                p={4}
                borderRadius="lg"
                m={4}
                bgColor="white"
                shadow="base"
                minW="container.md"
                zIndex="1"
            >
                <HStack spacing={2} justifyContent="space-between">
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input
                                type="text"
                                placeholder="Origin"
                                ref={originRef}
                            />
                        </Autocomplete>
                    </Box>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input
                                type="text"
                                placeholder="Destination"
                                ref={destiantionRef}
                            />
                        </Autocomplete>
                    </Box>

                    <ButtonGroup>
                        <Button
                            colorScheme="pink"
                            type="submit"
                            onClick={calculateRoute}
                        >
                            Calculate Route
                        </Button>
                        <IconButton
                            aria-label="center back"
                            icon={<FaTimes />}
                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                </HStack>
                <HStack spacing={4} mt={4} justifyContent="space-between">
                    <Text>Distance: {distance} </Text>
                    <Text>Duration: {duration} </Text>
                    <IconButton
                        aria-label="center back"
                        icon={<FaLocationArrow />}
                        isRound
                        onClick={() => {
                            map.panTo(center);
                            map.setZoom(15);
                        }}
                    />
                </HStack>
            </Box>
        </Flex>
    );
}

export default SwapStations;
