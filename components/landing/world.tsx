"use client"

import WorldMap from "@/components/ui/world-map";

export default function World() {

    return (

        <WorldMap
            dots={dots}

        />

    );
}

const dots = [
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 28.6139, lng: 77.2090 }, // New Delhi
    },
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 24.7136, lng: 46.6753 }, // Riyadh
    },
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 48.8566, lng: 2.3522 }, // Paris
    },
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 37.5665, lng: 126.9780 }, // Seoul
    },
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 40.7128, lng: -74.0060 }, // New York
    },
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 34.3416, lng: 108.9398 }, // Xi'an
    },
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 17.9712, lng: -76.7936 }, // Kingston, Jamaica
    },
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 23.5859, lng: 58.4059 }, // Muscat, Oman
    },
    {
        start: { lat: 31.5204, lng: 74.3587 }, // Lahore
        end: { lat: 36.7538, lng: 3.0588 }, // Algiers, Algeria
    },
]