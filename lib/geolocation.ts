export interface GeoCity {
    name: string;
    lat: number;
    lng: number;
}

const CITY_COORDS: GeoCity[] = [
    // ===== ASIA =====
    // Taiwan
    { name: "Taipei", lat: 25.033, lng: 121.565 }, { name: "Kaohsiung", lat: 22.627, lng: 120.301 },
    { name: "Taichung", lat: 24.147, lng: 120.673 }, { name: "Tainan", lat: 22.999, lng: 120.227 },
    { name: "Hsinchu", lat: 24.804, lng: 120.972 }, { name: "Keelung", lat: 25.131, lng: 121.743 },
    { name: "Chiayi", lat: 23.480, lng: 120.449 }, { name: "Pingtung", lat: 22.669, lng: 120.486 },
    { name: "Yilan", lat: 24.757, lng: 121.753 }, { name: "Hualien", lat: 23.977, lng: 121.605 },
    { name: "Taitung", lat: 22.756, lng: 121.144 }, { name: "Changhua", lat: 24.074, lng: 120.516 },
    // Japan
    { name: "Tokyo", lat: 35.682, lng: 139.759 }, { name: "Osaka", lat: 34.694, lng: 135.502 },
    { name: "Kyoto", lat: 35.012, lng: 135.768 }, { name: "Yokohama", lat: 35.444, lng: 139.638 },
    { name: "Nagoya", lat: 35.181, lng: 136.906 }, { name: "Sapporo", lat: 43.062, lng: 141.354 },
    { name: "Fukuoka", lat: 33.590, lng: 130.402 }, { name: "Kobe", lat: 34.691, lng: 135.196 },
    { name: "Hiroshima", lat: 34.385, lng: 132.455 }, { name: "Sendai", lat: 38.268, lng: 140.872 },
    { name: "Nara", lat: 34.685, lng: 135.805 }, { name: "Okinawa", lat: 26.334, lng: 127.796 },
    // South Korea
    { name: "Seoul", lat: 37.566, lng: 126.978 }, { name: "Busan", lat: 35.180, lng: 129.076 },
    { name: "Incheon", lat: 37.456, lng: 126.705 }, { name: "Daegu", lat: 35.872, lng: 128.602 },
    { name: "Daejeon", lat: 36.351, lng: 127.385 }, { name: "Gwangju", lat: 35.160, lng: 126.851 },
    { name: "Suwon", lat: 37.264, lng: 127.000 }, { name: "Ulsan", lat: 35.539, lng: 129.311 },
    { name: "Jeju", lat: 33.499, lng: 126.531 }, { name: "Changwon", lat: 35.228, lng: 128.682 },
    // China
    { name: "Beijing", lat: 39.904, lng: 116.407 }, { name: "Shanghai", lat: 31.230, lng: 121.474 },
    { name: "Guangzhou", lat: 23.129, lng: 113.264 }, { name: "Shenzhen", lat: 22.543, lng: 114.058 },
    { name: "Chengdu", lat: 30.573, lng: 104.066 }, { name: "Hangzhou", lat: 30.275, lng: 120.155 },
    { name: "Wuhan", lat: 30.593, lng: 114.305 }, { name: "Xi'an", lat: 34.264, lng: 108.943 },
    { name: "Chongqing", lat: 29.563, lng: 106.552 }, { name: "Nanjing", lat: 32.061, lng: 118.797 },
    { name: "Tianjin", lat: 39.084, lng: 117.201 }, { name: "Suzhou", lat: 31.299, lng: 120.585 },
    { name: "Qingdao", lat: 36.067, lng: 120.383 }, { name: "Dalian", lat: 38.914, lng: 121.615 },
    { name: "Kunming", lat: 25.042, lng: 102.708 },
    // Hong Kong
    { name: "Hong Kong", lat: 22.320, lng: 114.169 },
    // Thailand
    { name: "Bangkok", lat: 13.756, lng: 100.502 }, { name: "Chiang Mai", lat: 18.796, lng: 98.979 },
    { name: "Phuket", lat: 7.879, lng: 98.399 }, { name: "Pattaya", lat: 12.927, lng: 100.877 },
    { name: "Chiang Rai", lat: 19.910, lng: 99.832 }, { name: "Krabi", lat: 8.086, lng: 98.906 },
    { name: "Hat Yai", lat: 7.003, lng: 100.474 }, { name: "Koh Samui", lat: 9.512, lng: 100.014 },
    { name: "Nakhon Ratchasima", lat: 14.970, lng: 102.102 }, { name: "Udon Thani", lat: 17.415, lng: 102.787 },
    // Singapore
    { name: "Singapore", lat: 1.352, lng: 103.820 },
    // Malaysia
    { name: "Kuala Lumpur", lat: 3.139, lng: 101.687 }, { name: "Penang", lat: 5.415, lng: 100.336 },
    { name: "Johor Bahru", lat: 1.493, lng: 103.741 }, { name: "Malacca", lat: 2.189, lng: 102.250 },
    { name: "Kota Kinabalu", lat: 5.980, lng: 116.073 }, { name: "Kuching", lat: 1.550, lng: 110.334 },
    { name: "Ipoh", lat: 4.597, lng: 101.090 }, { name: "Shah Alam", lat: 3.074, lng: 101.519 },
    { name: "Langkawi", lat: 6.350, lng: 99.800 }, { name: "Putrajaya", lat: 2.926, lng: 101.696 },
    // Vietnam
    { name: "Ho Chi Minh City", lat: 10.823, lng: 106.630 }, { name: "Hanoi", lat: 21.028, lng: 105.854 },
    { name: "Da Nang", lat: 16.047, lng: 108.207 }, { name: "Hue", lat: 16.463, lng: 107.585 },
    { name: "Nha Trang", lat: 12.238, lng: 109.197 }, { name: "Hai Phong", lat: 20.865, lng: 106.684 },
    { name: "Can Tho", lat: 10.045, lng: 105.747 }, { name: "Da Lat", lat: 11.942, lng: 108.458 },
    { name: "Hoi An", lat: 15.880, lng: 108.338 }, { name: "Vung Tau", lat: 10.346, lng: 107.084 },
    // Philippines
    { name: "Manila", lat: 14.600, lng: 120.984 }, { name: "Cebu", lat: 10.315, lng: 123.886 },
    { name: "Davao", lat: 7.073, lng: 125.613 }, { name: "Quezon City", lat: 14.676, lng: 121.044 },
    { name: "Makati", lat: 14.554, lng: 121.014 }, { name: "Boracay", lat: 11.968, lng: 121.925 },
    { name: "Baguio", lat: 16.412, lng: 120.599 }, { name: "Iloilo", lat: 10.720, lng: 122.562 },
    { name: "Palawan", lat: 9.835, lng: 118.738 }, { name: "Zamboanga", lat: 6.910, lng: 122.074 },
    // Indonesia
    { name: "Jakarta", lat: -6.208, lng: 106.846 }, { name: "Bali", lat: -8.410, lng: 115.189 },
    { name: "Surabaya", lat: -7.250, lng: 112.751 }, { name: "Bandung", lat: -6.917, lng: 107.619 },
    { name: "Yogyakarta", lat: -7.797, lng: 110.369 }, { name: "Medan", lat: 3.595, lng: 98.673 },
    { name: "Semarang", lat: -6.967, lng: 110.420 }, { name: "Makassar", lat: -5.147, lng: 119.433 },
    { name: "Lombok", lat: -8.651, lng: 116.325 }, { name: "Palembang", lat: -2.991, lng: 104.757 },
    // India
    { name: "Mumbai", lat: 19.076, lng: 72.878 }, { name: "New Delhi", lat: 28.614, lng: 77.209 },
    { name: "Bangalore", lat: 12.972, lng: 77.594 }, { name: "Hyderabad", lat: 17.385, lng: 78.487 },
    { name: "Chennai", lat: 13.083, lng: 80.270 }, { name: "Kolkata", lat: 22.573, lng: 88.364 },
    { name: "Pune", lat: 18.520, lng: 73.857 }, { name: "Ahmedabad", lat: 23.023, lng: 72.571 },
    { name: "Jaipur", lat: 26.913, lng: 75.787 }, { name: "Lucknow", lat: 26.847, lng: 80.947 },
    { name: "Goa", lat: 15.300, lng: 74.000 }, { name: "Varanasi", lat: 25.318, lng: 83.010 },
    // UAE
    { name: "Dubai", lat: 25.205, lng: 55.270 }, { name: "Abu Dhabi", lat: 24.454, lng: 54.377 },
    { name: "Sharjah", lat: 25.338, lng: 55.405 }, { name: "Ajman", lat: 25.410, lng: 55.448 },
    { name: "Ras Al Khaimah", lat: 25.790, lng: 55.976 },
    // Turkey
    { name: "Istanbul", lat: 41.009, lng: 28.978 }, { name: "Ankara", lat: 39.934, lng: 32.860 },
    { name: "Izmir", lat: 38.424, lng: 27.143 }, { name: "Antalya", lat: 36.897, lng: 30.714 },
    { name: "Bursa", lat: 40.183, lng: 29.067 }, { name: "Bodrum", lat: 37.034, lng: 27.430 },
    { name: "Cappadocia", lat: 38.643, lng: 34.829 }, { name: "Trabzon", lat: 41.003, lng: 39.717 },
    { name: "Konya", lat: 37.872, lng: 32.492 }, { name: "Gaziantep", lat: 37.066, lng: 37.383 },
    // Israel
    { name: "Tel Aviv", lat: 32.085, lng: 34.782 }, { name: "Jerusalem", lat: 31.769, lng: 35.216 },
    { name: "Haifa", lat: 32.794, lng: 34.989 }, { name: "Eilat", lat: 29.558, lng: 34.952 },
    // Saudi Arabia
    { name: "Riyadh", lat: 24.714, lng: 46.675 }, { name: "Jeddah", lat: 21.486, lng: 39.177 },
    { name: "Mecca", lat: 21.389, lng: 39.857 }, { name: "Medina", lat: 24.468, lng: 39.611 },
    { name: "Dammam", lat: 26.434, lng: 50.103 },
    // Pakistan
    { name: "Karachi", lat: 24.861, lng: 67.010 }, { name: "Lahore", lat: 31.550, lng: 74.350 },
    { name: "Islamabad", lat: 33.693, lng: 73.064 }, { name: "Rawalpindi", lat: 33.598, lng: 73.048 },
    { name: "Faisalabad", lat: 31.418, lng: 73.079 }, { name: "Peshawar", lat: 34.015, lng: 71.579 },
    { name: "Multan", lat: 30.198, lng: 71.472 }, { name: "Quetta", lat: 30.184, lng: 66.998 },
    // Bangladesh
    { name: "Dhaka", lat: 23.811, lng: 90.413 }, { name: "Chittagong", lat: 22.356, lng: 91.783 },
    { name: "Sylhet", lat: 24.899, lng: 91.870 },
    // Sri Lanka
    { name: "Colombo", lat: 6.927, lng: 79.861 }, { name: "Kandy", lat: 7.291, lng: 80.637 },
    { name: "Galle", lat: 6.037, lng: 80.217 },
    // Nepal
    { name: "Kathmandu", lat: 27.717, lng: 85.324 }, { name: "Pokhara", lat: 28.210, lng: 83.987 },

    // ===== EUROPE =====
    // France
    { name: "Paris", lat: 48.857, lng: 2.352 }, { name: "Lyon", lat: 45.764, lng: 4.836 },
    { name: "Marseille", lat: 43.296, lng: 5.370 }, { name: "Toulouse", lat: 43.605, lng: 1.445 },
    { name: "Nice", lat: 43.710, lng: 7.262 }, { name: "Bordeaux", lat: 44.838, lng: -0.576 },
    { name: "Strasbourg", lat: 48.573, lng: 7.752 }, { name: "Lille", lat: 50.633, lng: 3.066 },
    { name: "Nantes", lat: 47.218, lng: -1.554 }, { name: "Montpellier", lat: 43.611, lng: 3.877 },
    // UK
    { name: "London", lat: 51.507, lng: -0.128 }, { name: "Manchester", lat: 53.483, lng: -2.244 },
    { name: "Edinburgh", lat: 55.953, lng: -3.189 }, { name: "Birmingham", lat: 52.490, lng: -1.891 },
    { name: "Glasgow", lat: 55.861, lng: -4.250 }, { name: "Liverpool", lat: 53.408, lng: -2.992 },
    { name: "Bristol", lat: 51.455, lng: -2.588 }, { name: "Leeds", lat: 53.800, lng: -1.549 },
    { name: "Oxford", lat: 51.752, lng: -1.257 }, { name: "Cambridge", lat: 52.205, lng: 0.119 },
    { name: "Bath", lat: 51.380, lng: -2.360 }, { name: "Belfast", lat: 54.597, lng: -5.930 },
    // Germany
    { name: "Berlin", lat: 52.520, lng: 13.405 }, { name: "Munich", lat: 48.135, lng: 11.582 },
    { name: "Frankfurt", lat: 50.111, lng: 8.682 }, { name: "Hamburg", lat: 53.551, lng: 9.994 },
    { name: "Cologne", lat: 50.938, lng: 6.960 }, { name: "Stuttgart", lat: 48.776, lng: 9.183 },
    { name: "Düsseldorf", lat: 51.233, lng: 6.783 }, { name: "Dresden", lat: 51.051, lng: 13.738 },
    { name: "Leipzig", lat: 51.340, lng: 12.375 }, { name: "Nuremberg", lat: 49.454, lng: 11.077 },
    { name: "Heidelberg", lat: 49.399, lng: 8.672 }, { name: "Hannover", lat: 52.376, lng: 9.732 },
    // Italy
    { name: "Rome", lat: 41.902, lng: 12.496 }, { name: "Milan", lat: 45.464, lng: 9.190 },
    { name: "Florence", lat: 43.770, lng: 11.249 }, { name: "Venice", lat: 45.440, lng: 12.316 },
    { name: "Naples", lat: 40.852, lng: 14.268 }, { name: "Turin", lat: 45.070, lng: 7.687 },
    { name: "Bologna", lat: 44.494, lng: 11.343 }, { name: "Genoa", lat: 44.407, lng: 8.934 },
    { name: "Palermo", lat: 38.116, lng: 13.362 }, { name: "Verona", lat: 45.438, lng: 10.993 },
    { name: "Pisa", lat: 43.723, lng: 10.402 }, { name: "Amalfi", lat: 40.634, lng: 14.603 },
    // Spain
    { name: "Madrid", lat: 40.417, lng: -3.704 }, { name: "Barcelona", lat: 41.385, lng: 2.173 },
    { name: "Seville", lat: 37.389, lng: -5.984 }, { name: "Valencia", lat: 39.470, lng: -0.376 },
    { name: "Bilbao", lat: 43.263, lng: -2.935 }, { name: "Malaga", lat: 36.721, lng: -4.421 },
    { name: "Granada", lat: 37.177, lng: -3.599 }, { name: "San Sebastian", lat: 43.323, lng: -1.985 },
    { name: "Palma de Mallorca", lat: 39.570, lng: 2.650 }, { name: "Zaragoza", lat: 41.649, lng: -0.888 },
    // Portugal
    { name: "Lisbon", lat: 38.722, lng: -9.139 }, { name: "Porto", lat: 41.158, lng: -8.629 },
    { name: "Faro", lat: 37.019, lng: -7.930 }, { name: "Braga", lat: 41.550, lng: -8.427 },
    { name: "Coimbra", lat: 40.211, lng: -8.429 },
    // Netherlands
    { name: "Amsterdam", lat: 52.367, lng: 4.904 }, { name: "Rotterdam", lat: 51.924, lng: 4.478 },
    { name: "The Hague", lat: 52.070, lng: 4.300 }, { name: "Utrecht", lat: 52.091, lng: 5.122 },
    { name: "Eindhoven", lat: 51.442, lng: 5.470 },
    // Switzerland
    { name: "Zurich", lat: 47.377, lng: 8.542 }, { name: "Geneva", lat: 46.205, lng: 6.144 },
    { name: "Bern", lat: 46.948, lng: 7.448 }, { name: "Basel", lat: 47.560, lng: 7.589 },
    { name: "Lucerne", lat: 47.050, lng: 8.310 }, { name: "Interlaken", lat: 46.686, lng: 7.863 },
    // Austria
    { name: "Vienna", lat: 48.208, lng: 16.374 }, { name: "Salzburg", lat: 47.800, lng: 13.045 },
    { name: "Innsbruck", lat: 47.263, lng: 11.394 }, { name: "Graz", lat: 47.071, lng: 15.439 },
    { name: "Linz", lat: 48.307, lng: 14.286 },
    // Sweden
    { name: "Stockholm", lat: 59.329, lng: 18.069 }, { name: "Gothenburg", lat: 57.709, lng: 11.975 },
    { name: "Malmö", lat: 55.605, lng: 13.000 }, { name: "Uppsala", lat: 59.859, lng: 17.639 },
    // Norway
    { name: "Oslo", lat: 59.914, lng: 10.752 }, { name: "Bergen", lat: 60.393, lng: 5.324 },
    { name: "Tromsø", lat: 69.649, lng: 18.956 }, { name: "Stavanger", lat: 58.970, lng: 5.733 },
    // Denmark
    { name: "Copenhagen", lat: 55.676, lng: 12.568 }, { name: "Aarhus", lat: 56.162, lng: 10.204 },
    { name: "Odense", lat: 55.396, lng: 10.389 },
    // Finland
    { name: "Helsinki", lat: 60.170, lng: 24.938 }, { name: "Tampere", lat: 61.498, lng: 23.761 },
    { name: "Turku", lat: 60.451, lng: 22.267 }, { name: "Rovaniemi", lat: 66.503, lng: 25.729 },
    // Iceland
    { name: "Reykjavik", lat: 64.146, lng: -21.943 },
    // Ireland
    { name: "Dublin", lat: 53.350, lng: -6.260 }, { name: "Cork", lat: 51.897, lng: -8.470 },
    { name: "Galway", lat: 53.270, lng: -9.057 },
    // Czech
    { name: "Prague", lat: 50.076, lng: 14.438 }, { name: "Brno", lat: 49.195, lng: 16.608 },
    { name: "Karlovy Vary", lat: 50.232, lng: 12.872 }, { name: "Český Krumlov", lat: 48.811, lng: 14.315 },
    // Poland
    { name: "Warsaw", lat: 52.230, lng: 21.012 }, { name: "Krakow", lat: 50.065, lng: 19.945 },
    { name: "Gdansk", lat: 54.352, lng: 18.647 }, { name: "Wroclaw", lat: 51.110, lng: 17.032 },
    { name: "Poznan", lat: 52.407, lng: 16.930 },
    // Hungary
    { name: "Budapest", lat: 47.497, lng: 19.040 }, { name: "Debrecen", lat: 47.531, lng: 21.625 },
    // Greece
    { name: "Athens", lat: 37.984, lng: 23.728 }, { name: "Santorini", lat: 36.393, lng: 25.461 },
    { name: "Thessaloniki", lat: 40.640, lng: 22.944 }, { name: "Mykonos", lat: 37.446, lng: 25.329 },
    { name: "Rhodes", lat: 36.435, lng: 28.218 }, { name: "Crete", lat: 35.240, lng: 24.471 },
    // Croatia
    { name: "Zagreb", lat: 45.815, lng: 15.982 }, { name: "Dubrovnik", lat: 42.651, lng: 18.094 },
    { name: "Split", lat: 43.509, lng: 16.440 },
    // Russia
    { name: "Moscow", lat: 55.756, lng: 37.617 }, { name: "Saint Petersburg", lat: 59.934, lng: 30.336 },
    { name: "Novosibirsk", lat: 55.031, lng: 82.921 }, { name: "Vladivostok", lat: 43.116, lng: 131.887 },
    { name: "Kazan", lat: 55.796, lng: 49.108 }, { name: "Sochi", lat: 43.600, lng: 39.730 },
    { name: "Yekaterinburg", lat: 56.839, lng: 60.607 },
    // Romania
    { name: "Bucharest", lat: 44.427, lng: 26.103 }, { name: "Cluj-Napoca", lat: 46.770, lng: 23.590 },
    { name: "Brasov", lat: 45.655, lng: 25.611 },
    // Belgium
    { name: "Brussels", lat: 50.850, lng: 4.352 }, { name: "Bruges", lat: 51.209, lng: 3.225 },
    { name: "Antwerp", lat: 51.219, lng: 4.402 }, { name: "Ghent", lat: 51.054, lng: 3.721 },
    // Ukraine
    { name: "Kyiv", lat: 50.450, lng: 30.524 }, { name: "Lviv", lat: 49.842, lng: 24.032 },
    { name: "Odessa", lat: 46.482, lng: 30.723 },

    // ===== NORTH AMERICA =====
    // US
    { name: "New York", lat: 40.713, lng: -74.006 }, { name: "Los Angeles", lat: 34.052, lng: -118.244 },
    { name: "Chicago", lat: 41.878, lng: -87.630 }, { name: "San Francisco", lat: 37.775, lng: -122.419 },
    { name: "Miami", lat: 25.762, lng: -80.192 }, { name: "Seattle", lat: 47.606, lng: -122.332 },
    { name: "Washington D.C.", lat: 38.907, lng: -77.037 }, { name: "Boston", lat: 42.360, lng: -71.059 },
    { name: "Las Vegas", lat: 36.169, lng: -115.140 }, { name: "Houston", lat: 29.760, lng: -95.370 },
    { name: "Denver", lat: 39.739, lng: -104.990 }, { name: "San Diego", lat: 32.716, lng: -117.161 },
    { name: "Austin", lat: 30.267, lng: -97.743 }, { name: "Nashville", lat: 36.163, lng: -86.781 },
    { name: "Portland", lat: 45.505, lng: -122.676 }, { name: "Philadelphia", lat: 39.953, lng: -75.164 },
    { name: "Phoenix", lat: 33.449, lng: -112.074 }, { name: "Atlanta", lat: 33.749, lng: -84.388 },
    { name: "Dallas", lat: 32.777, lng: -96.797 }, { name: "New Orleans", lat: 29.951, lng: -90.072 },
    { name: "Detroit", lat: 42.331, lng: -83.046 }, { name: "Minneapolis", lat: 44.978, lng: -93.265 },
    { name: "Honolulu", lat: 21.307, lng: -157.858 }, { name: "Anchorage", lat: 61.218, lng: -149.900 },
    // Canada
    { name: "Toronto", lat: 43.653, lng: -79.383 }, { name: "Vancouver", lat: 49.283, lng: -123.121 },
    { name: "Montreal", lat: 45.502, lng: -73.567 }, { name: "Ottawa", lat: 45.421, lng: -75.690 },
    { name: "Calgary", lat: 51.045, lng: -114.072 }, { name: "Edmonton", lat: 53.546, lng: -113.494 },
    { name: "Quebec City", lat: 46.814, lng: -71.208 }, { name: "Winnipeg", lat: 49.896, lng: -97.139 },
    { name: "Halifax", lat: 44.649, lng: -63.576 }, { name: "Victoria", lat: 48.429, lng: -123.366 },
    // Mexico
    { name: "Mexico City", lat: 19.433, lng: -99.133 }, { name: "Cancún", lat: 21.161, lng: -86.851 },
    { name: "Guadalajara", lat: 20.677, lng: -103.347 }, { name: "Monterrey", lat: 25.687, lng: -100.316 },
    { name: "Puebla", lat: 19.044, lng: -98.198 }, { name: "Tijuana", lat: 32.522, lng: -117.038 },
    { name: "Playa del Carmen", lat: 20.629, lng: -87.078 }, { name: "Oaxaca", lat: 17.060, lng: -96.726 },
    { name: "Mérida", lat: 20.975, lng: -89.617 }, { name: "Puerto Vallarta", lat: 20.653, lng: -105.228 },
    // Caribbean
    { name: "Havana", lat: 23.113, lng: -82.366 }, { name: "Kingston", lat: 18.017, lng: -76.810 },
    { name: "San José", lat: 9.934, lng: -84.088 }, { name: "Panama City", lat: 8.984, lng: -79.519 },

    // ===== SOUTH AMERICA =====
    // Brazil
    { name: "São Paulo", lat: -23.551, lng: -46.634 }, { name: "Rio de Janeiro", lat: -22.907, lng: -43.173 },
    { name: "Brasília", lat: -15.794, lng: -47.882 }, { name: "Salvador", lat: -12.972, lng: -38.512 },
    { name: "Fortaleza", lat: -3.718, lng: -38.543 }, { name: "Belo Horizonte", lat: -19.919, lng: -43.938 },
    { name: "Manaus", lat: -3.119, lng: -60.022 }, { name: "Curitiba", lat: -25.429, lng: -49.271 },
    { name: "Recife", lat: -8.058, lng: -34.871 }, { name: "Florianópolis", lat: -27.596, lng: -48.548 },
    // Argentina
    { name: "Buenos Aires", lat: -34.604, lng: -58.381 }, { name: "Córdoba", lat: -31.420, lng: -64.188 },
    { name: "Mendoza", lat: -32.889, lng: -68.845 }, { name: "Rosario", lat: -32.947, lng: -60.630 },
    { name: "Bariloche", lat: -41.134, lng: -71.310 }, { name: "Ushuaia", lat: -54.802, lng: -68.303 },
    // Chile
    { name: "Santiago", lat: -33.449, lng: -70.669 }, { name: "Valparaíso", lat: -33.046, lng: -71.620 },
    { name: "Concepción", lat: -36.827, lng: -73.050 },
    // Colombia
    { name: "Bogotá", lat: 4.711, lng: -74.072 }, { name: "Medellín", lat: 6.245, lng: -75.574 },
    { name: "Cartagena", lat: 10.391, lng: -75.514 }, { name: "Cali", lat: 3.451, lng: -76.532 },
    { name: "Barranquilla", lat: 10.964, lng: -74.781 },
    // Peru
    { name: "Lima", lat: -12.046, lng: -77.043 }, { name: "Cusco", lat: -13.532, lng: -71.968 },
    { name: "Arequipa", lat: -16.409, lng: -71.537 },
    // Others
    { name: "Quito", lat: -0.180, lng: -78.468 }, { name: "Guayaquil", lat: -2.170, lng: -79.922 },
    { name: "Montevideo", lat: -34.901, lng: -56.165 }, { name: "La Paz", lat: -16.490, lng: -68.119 },
    { name: "Caracas", lat: 10.481, lng: -66.904 },

    // ===== AFRICA =====
    { name: "Cairo", lat: 30.044, lng: 31.236 }, { name: "Alexandria", lat: 31.200, lng: 29.919 },
    { name: "Luxor", lat: 25.687, lng: 32.642 }, { name: "Aswan", lat: 24.091, lng: 32.899 },
    { name: "Sharm El Sheikh", lat: 27.849, lng: 34.302 },
    { name: "Cape Town", lat: -33.925, lng: 18.424 }, { name: "Johannesburg", lat: -26.205, lng: 28.050 },
    { name: "Durban", lat: -29.858, lng: 31.022 }, { name: "Pretoria", lat: -25.747, lng: 28.229 },
    { name: "Port Elizabeth", lat: -33.961, lng: 25.602 },
    { name: "Lagos", lat: 6.524, lng: 3.379 }, { name: "Abuja", lat: 9.058, lng: 7.491 },
    { name: "Nairobi", lat: -1.292, lng: 36.822 }, { name: "Mombasa", lat: -4.043, lng: 39.668 },
    { name: "Casablanca", lat: 33.573, lng: -7.589 }, { name: "Marrakech", lat: 31.630, lng: -7.981 },
    { name: "Fez", lat: 34.033, lng: -5.000 }, { name: "Tangier", lat: 35.759, lng: -5.834 },
    { name: "Rabat", lat: 33.972, lng: -6.850 },
    { name: "Addis Ababa", lat: 9.025, lng: 38.747 },
    { name: "Dar es Salaam", lat: -6.792, lng: 39.208 }, { name: "Zanzibar", lat: -6.165, lng: 39.203 },
    { name: "Accra", lat: 5.603, lng: -0.187 }, { name: "Tunis", lat: 36.807, lng: 10.182 },
    { name: "Dakar", lat: 14.693, lng: -17.444 },

    // ===== OCEANIA =====
    { name: "Sydney", lat: -33.869, lng: 151.209 }, { name: "Melbourne", lat: -37.814, lng: 144.963 },
    { name: "Brisbane", lat: -27.470, lng: 153.021 }, { name: "Perth", lat: -31.951, lng: 115.861 },
    { name: "Adelaide", lat: -34.929, lng: 138.601 }, { name: "Gold Coast", lat: -28.017, lng: 153.426 },
    { name: "Canberra", lat: -35.282, lng: 149.129 }, { name: "Hobart", lat: -42.880, lng: 147.325 },
    { name: "Darwin", lat: -12.462, lng: 130.842 }, { name: "Cairns", lat: -16.920, lng: 145.771 },
    { name: "Auckland", lat: -36.849, lng: 174.764 }, { name: "Wellington", lat: -41.287, lng: 174.776 },
    { name: "Christchurch", lat: -43.532, lng: 172.637 }, { name: "Queenstown", lat: -45.031, lng: 168.662 },
    { name: "Suva", lat: -18.142, lng: 178.442 },

    // ===== ANTARCTICA =====
    { name: "McMurdo Station", lat: -77.846, lng: 166.668 },
];

function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export function findNearestCity(lat: number, lng: number): { city: string; distance: number } {
    let nearest = CITY_COORDS[0];
    let minDist = Infinity;
    for (const city of CITY_COORDS) {
        const dist = haversineDistance(lat, lng, city.lat, city.lng);
        if (dist < minDist) { minDist = dist; nearest = city; }
    }
    return { city: nearest.name, distance: Math.round(minDist) };
}

export function getCityCoords(cityName: string): GeoCity | undefined {
    return CITY_COORDS.find(c => c.name.toLowerCase() === cityName.toLowerCase());
}
