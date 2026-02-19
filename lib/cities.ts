export interface CityData {
    name: string;
    nameCn: string;
}

export interface CountryData {
    name: string;
    nameCn: string;
    code: string;
    cities: CityData[];
}

export interface ContinentData {
    name: string;
    nameCn: string;
    countries: CountryData[];
}

export const CONTINENTS: ContinentData[] = [
    {
        name: "Asia", nameCn: "亞洲",
        countries: [
            {
                name: "Taiwan", nameCn: "台灣", code: "TW", cities: [
                    { name: "Taipei", nameCn: "台北" }, { name: "Kaohsiung", nameCn: "高雄" }, { name: "Taichung", nameCn: "台中" },
                    { name: "Tainan", nameCn: "台南" }, { name: "Hsinchu", nameCn: "新竹" }, { name: "Keelung", nameCn: "基隆" },
                    { name: "Chiayi", nameCn: "嘉義" }, { name: "Pingtung", nameCn: "屏東" }, { name: "Yilan", nameCn: "宜蘭" },
                    { name: "Hualien", nameCn: "花蓮" }, { name: "Taitung", nameCn: "台東" }, { name: "Changhua", nameCn: "彰化" },
                ]
            },
            {
                name: "Japan", nameCn: "日本", code: "JP", cities: [
                    { name: "Tokyo", nameCn: "東京" }, { name: "Osaka", nameCn: "大阪" }, { name: "Kyoto", nameCn: "京都" },
                    { name: "Yokohama", nameCn: "橫濱" }, { name: "Nagoya", nameCn: "名古屋" }, { name: "Sapporo", nameCn: "札幌" },
                    { name: "Fukuoka", nameCn: "福岡" }, { name: "Kobe", nameCn: "神戶" }, { name: "Hiroshima", nameCn: "廣島" },
                    { name: "Sendai", nameCn: "仙台" }, { name: "Nara", nameCn: "奈良" }, { name: "Okinawa", nameCn: "沖繩" },
                ]
            },
            {
                name: "South Korea", nameCn: "韓國", code: "KR", cities: [
                    { name: "Seoul", nameCn: "首爾" }, { name: "Busan", nameCn: "釜山" }, { name: "Incheon", nameCn: "仁川" },
                    { name: "Daegu", nameCn: "大邱" }, { name: "Daejeon", nameCn: "大田" }, { name: "Gwangju", nameCn: "光州" },
                    { name: "Suwon", nameCn: "水原" }, { name: "Ulsan", nameCn: "蔚山" }, { name: "Jeju", nameCn: "濟州" },
                    { name: "Changwon", nameCn: "昌原" },
                ]
            },
            {
                name: "China", nameCn: "中國", code: "CN", cities: [
                    { name: "Beijing", nameCn: "北京" }, { name: "Shanghai", nameCn: "上海" }, { name: "Guangzhou", nameCn: "廣州" },
                    { name: "Shenzhen", nameCn: "深圳" }, { name: "Chengdu", nameCn: "成都" }, { name: "Hangzhou", nameCn: "杭州" },
                    { name: "Wuhan", nameCn: "武漢" }, { name: "Xi'an", nameCn: "西安" }, { name: "Chongqing", nameCn: "重慶" },
                    { name: "Nanjing", nameCn: "南京" }, { name: "Tianjin", nameCn: "天津" }, { name: "Suzhou", nameCn: "蘇州" },
                    { name: "Qingdao", nameCn: "青島" }, { name: "Dalian", nameCn: "大連" }, { name: "Kunming", nameCn: "昆明" },
                ]
            },
            {
                name: "Hong Kong", nameCn: "香港", code: "HK", cities: [
                    { name: "Hong Kong", nameCn: "香港" },
                ]
            },
            {
                name: "Thailand", nameCn: "泰國", code: "TH", cities: [
                    { name: "Bangkok", nameCn: "曼谷" }, { name: "Chiang Mai", nameCn: "清邁" }, { name: "Phuket", nameCn: "普吉島" },
                    { name: "Pattaya", nameCn: "芭達雅" }, { name: "Chiang Rai", nameCn: "清萊" }, { name: "Krabi", nameCn: "甲米" },
                    { name: "Hat Yai", nameCn: "合艾" }, { name: "Koh Samui", nameCn: "蘇美島" }, { name: "Nakhon Ratchasima", nameCn: "呵叻" },
                    { name: "Udon Thani", nameCn: "烏隆他尼" },
                ]
            },
            {
                name: "Singapore", nameCn: "新加坡", code: "SG", cities: [
                    { name: "Singapore", nameCn: "新加坡" },
                ]
            },
            {
                name: "Malaysia", nameCn: "馬來西亞", code: "MY", cities: [
                    { name: "Kuala Lumpur", nameCn: "吉隆坡" }, { name: "Penang", nameCn: "檳城" }, { name: "Johor Bahru", nameCn: "新山" },
                    { name: "Malacca", nameCn: "馬六甲" }, { name: "Kota Kinabalu", nameCn: "亞庇" }, { name: "Kuching", nameCn: "古晉" },
                    { name: "Ipoh", nameCn: "怡保" }, { name: "Shah Alam", nameCn: "莎阿南" }, { name: "Langkawi", nameCn: "蘭卡威" },
                    { name: "Putrajaya", nameCn: "布城" },
                ]
            },
            {
                name: "Vietnam", nameCn: "越南", code: "VN", cities: [
                    { name: "Ho Chi Minh City", nameCn: "胡志明市" }, { name: "Hanoi", nameCn: "河內" }, { name: "Da Nang", nameCn: "峴港" },
                    { name: "Hue", nameCn: "順化" }, { name: "Nha Trang", nameCn: "芽莊" }, { name: "Hai Phong", nameCn: "海防" },
                    { name: "Can Tho", nameCn: "芹苴" }, { name: "Da Lat", nameCn: "大叻" }, { name: "Hoi An", nameCn: "會安" },
                    { name: "Vung Tau", nameCn: "頭頓" },
                ]
            },
            {
                name: "Philippines", nameCn: "菲律賓", code: "PH", cities: [
                    { name: "Manila", nameCn: "馬尼拉" }, { name: "Cebu", nameCn: "宿霧" }, { name: "Davao", nameCn: "達沃" },
                    { name: "Quezon City", nameCn: "奎松市" }, { name: "Makati", nameCn: "馬卡蒂" }, { name: "Boracay", nameCn: "長灘島" },
                    { name: "Baguio", nameCn: "碧瑤" }, { name: "Iloilo", nameCn: "怡朗" }, { name: "Palawan", nameCn: "巴拉望" },
                    { name: "Zamboanga", nameCn: "三寶顏" },
                ]
            },
            {
                name: "Indonesia", nameCn: "印尼", code: "ID", cities: [
                    { name: "Jakarta", nameCn: "雅加達" }, { name: "Bali", nameCn: "峇里島" }, { name: "Surabaya", nameCn: "泗水" },
                    { name: "Bandung", nameCn: "萬隆" }, { name: "Yogyakarta", nameCn: "日惹" }, { name: "Medan", nameCn: "棉蘭" },
                    { name: "Semarang", nameCn: "三寶壟" }, { name: "Makassar", nameCn: "望加錫" }, { name: "Lombok", nameCn: "龍目島" },
                    { name: "Palembang", nameCn: "巨港" },
                ]
            },
            {
                name: "India", nameCn: "印度", code: "IN", cities: [
                    { name: "Mumbai", nameCn: "孟買" }, { name: "New Delhi", nameCn: "新德里" }, { name: "Bangalore", nameCn: "班加羅爾" },
                    { name: "Hyderabad", nameCn: "海德拉巴" }, { name: "Chennai", nameCn: "清奈" }, { name: "Kolkata", nameCn: "加爾各答" },
                    { name: "Pune", nameCn: "浦那" }, { name: "Ahmedabad", nameCn: "艾哈邁達巴德" }, { name: "Jaipur", nameCn: "齋浦爾" },
                    { name: "Lucknow", nameCn: "勒克瑙" }, { name: "Goa", nameCn: "果阿" }, { name: "Varanasi", nameCn: "瓦拉納西" },
                ]
            },
            {
                name: "UAE", nameCn: "阿聯酋", code: "AE", cities: [
                    { name: "Dubai", nameCn: "杜拜" }, { name: "Abu Dhabi", nameCn: "阿布達比" }, { name: "Sharjah", nameCn: "沙迦" },
                    { name: "Ajman", nameCn: "阿治曼" }, { name: "Ras Al Khaimah", nameCn: "拉斯海瑪" },
                ]
            },
            {
                name: "Turkey", nameCn: "土耳其", code: "TR", cities: [
                    { name: "Istanbul", nameCn: "伊斯坦堡" }, { name: "Ankara", nameCn: "安卡拉" }, { name: "Izmir", nameCn: "伊茲密爾" },
                    { name: "Antalya", nameCn: "安塔利亞" }, { name: "Bursa", nameCn: "布爾薩" }, { name: "Bodrum", nameCn: "博德魯姆" },
                    { name: "Cappadocia", nameCn: "卡帕多奇亞" }, { name: "Trabzon", nameCn: "特拉布宗" },
                    { name: "Konya", nameCn: "科尼亞" }, { name: "Gaziantep", nameCn: "加濟安泰普" },
                ]
            },
            {
                name: "Israel", nameCn: "以色列", code: "IL", cities: [
                    { name: "Tel Aviv", nameCn: "特拉維夫" }, { name: "Jerusalem", nameCn: "耶路撒冷" },
                    { name: "Haifa", nameCn: "海法" }, { name: "Eilat", nameCn: "埃拉特" },
                ]
            },
            {
                name: "Saudi Arabia", nameCn: "沙烏地阿拉伯", code: "SA", cities: [
                    { name: "Riyadh", nameCn: "利雅德" }, { name: "Jeddah", nameCn: "吉達" }, { name: "Mecca", nameCn: "麥加" },
                    { name: "Medina", nameCn: "麥地那" }, { name: "Dammam", nameCn: "達曼" },
                ]
            },
            {
                name: "Pakistan", nameCn: "巴基斯坦", code: "PK", cities: [
                    { name: "Karachi", nameCn: "喀拉蚩" }, { name: "Lahore", nameCn: "拉合爾" }, { name: "Islamabad", nameCn: "伊斯蘭馬巴德" },
                    { name: "Rawalpindi", nameCn: "拉瓦爾品第" }, { name: "Faisalabad", nameCn: "費薩拉巴德" },
                    { name: "Peshawar", nameCn: "白沙瓦" }, { name: "Multan", nameCn: "木爾坦" }, { name: "Quetta", nameCn: "奎達" },
                ]
            },
            {
                name: "Bangladesh", nameCn: "孟加拉", code: "BD", cities: [
                    { name: "Dhaka", nameCn: "達卡" }, { name: "Chittagong", nameCn: "吉大港" }, { name: "Sylhet", nameCn: "錫爾赫特" },
                ]
            },
            {
                name: "Sri Lanka", nameCn: "斯里蘭卡", code: "LK", cities: [
                    { name: "Colombo", nameCn: "可倫坡" }, { name: "Kandy", nameCn: "康提" }, { name: "Galle", nameCn: "加勒" },
                ]
            },
            {
                name: "Nepal", nameCn: "尼泊爾", code: "NP", cities: [
                    { name: "Kathmandu", nameCn: "加德滿都" }, { name: "Pokhara", nameCn: "博卡拉" },
                ]
            },
        ],
    },
    {
        name: "Europe", nameCn: "歐洲",
        countries: [
            {
                name: "France", nameCn: "法國", code: "FR", cities: [
                    { name: "Paris", nameCn: "巴黎" }, { name: "Lyon", nameCn: "里昂" }, { name: "Marseille", nameCn: "馬賽" },
                    { name: "Toulouse", nameCn: "圖盧茲" }, { name: "Nice", nameCn: "尼斯" }, { name: "Bordeaux", nameCn: "波爾多" },
                    { name: "Strasbourg", nameCn: "斯特拉斯堡" }, { name: "Lille", nameCn: "里爾" }, { name: "Nantes", nameCn: "南特" },
                    { name: "Montpellier", nameCn: "蒙彼利埃" },
                ]
            },
            {
                name: "United Kingdom", nameCn: "英國", code: "GB", cities: [
                    { name: "London", nameCn: "倫敦" }, { name: "Manchester", nameCn: "曼徹斯特" }, { name: "Edinburgh", nameCn: "愛丁堡" },
                    { name: "Birmingham", nameCn: "伯明翰" }, { name: "Glasgow", nameCn: "格拉斯哥" }, { name: "Liverpool", nameCn: "利物浦" },
                    { name: "Bristol", nameCn: "布里斯托" }, { name: "Leeds", nameCn: "里茲" }, { name: "Oxford", nameCn: "牛津" },
                    { name: "Cambridge", nameCn: "劍橋" }, { name: "Bath", nameCn: "巴斯" }, { name: "Belfast", nameCn: "貝爾法斯特" },
                ]
            },
            {
                name: "Germany", nameCn: "德國", code: "DE", cities: [
                    { name: "Berlin", nameCn: "柏林" }, { name: "Munich", nameCn: "慕尼黑" }, { name: "Frankfurt", nameCn: "法蘭克福" },
                    { name: "Hamburg", nameCn: "漢堡" }, { name: "Cologne", nameCn: "科隆" }, { name: "Stuttgart", nameCn: "斯圖加特" },
                    { name: "Düsseldorf", nameCn: "杜塞道夫" }, { name: "Dresden", nameCn: "德勒斯登" }, { name: "Leipzig", nameCn: "萊比錫" },
                    { name: "Nuremberg", nameCn: "紐倫堡" }, { name: "Heidelberg", nameCn: "海德堡" }, { name: "Hannover", nameCn: "漢諾威" },
                ]
            },
            {
                name: "Italy", nameCn: "義大利", code: "IT", cities: [
                    { name: "Rome", nameCn: "羅馬" }, { name: "Milan", nameCn: "米蘭" }, { name: "Florence", nameCn: "佛羅倫斯" },
                    { name: "Venice", nameCn: "威尼斯" }, { name: "Naples", nameCn: "那不勒斯" }, { name: "Turin", nameCn: "都靈" },
                    { name: "Bologna", nameCn: "波隆那" }, { name: "Genoa", nameCn: "熱那亞" }, { name: "Palermo", nameCn: "巴勒莫" },
                    { name: "Verona", nameCn: "維洛那" }, { name: "Pisa", nameCn: "比薩" }, { name: "Amalfi", nameCn: "阿馬爾菲" },
                ]
            },
            {
                name: "Spain", nameCn: "西班牙", code: "ES", cities: [
                    { name: "Madrid", nameCn: "馬德里" }, { name: "Barcelona", nameCn: "巴塞隆納" }, { name: "Seville", nameCn: "塞維亞" },
                    { name: "Valencia", nameCn: "瓦倫西亞" }, { name: "Bilbao", nameCn: "畢爾包" }, { name: "Malaga", nameCn: "馬拉加" },
                    { name: "Granada", nameCn: "格拉納達" }, { name: "San Sebastian", nameCn: "聖塞巴斯提安" },
                    { name: "Palma de Mallorca", nameCn: "帕爾馬" }, { name: "Zaragoza", nameCn: "薩拉戈薩" },
                ]
            },
            {
                name: "Portugal", nameCn: "葡萄牙", code: "PT", cities: [
                    { name: "Lisbon", nameCn: "里斯本" }, { name: "Porto", nameCn: "波多" }, { name: "Faro", nameCn: "法魯" },
                    { name: "Braga", nameCn: "布拉加" }, { name: "Coimbra", nameCn: "科英布拉" },
                ]
            },
            {
                name: "Netherlands", nameCn: "荷蘭", code: "NL", cities: [
                    { name: "Amsterdam", nameCn: "阿姆斯特丹" }, { name: "Rotterdam", nameCn: "鹿特丹" }, { name: "The Hague", nameCn: "海牙" },
                    { name: "Utrecht", nameCn: "烏特勒支" }, { name: "Eindhoven", nameCn: "恩荷芬" },
                ]
            },
            {
                name: "Switzerland", nameCn: "瑞士", code: "CH", cities: [
                    { name: "Zurich", nameCn: "蘇黎世" }, { name: "Geneva", nameCn: "日內瓦" }, { name: "Bern", nameCn: "伯恩" },
                    { name: "Basel", nameCn: "巴塞爾" }, { name: "Lucerne", nameCn: "琉森" }, { name: "Interlaken", nameCn: "因特拉肯" },
                ]
            },
            {
                name: "Austria", nameCn: "奧地利", code: "AT", cities: [
                    { name: "Vienna", nameCn: "維也納" }, { name: "Salzburg", nameCn: "薩爾茲堡" }, { name: "Innsbruck", nameCn: "因斯布魯克" },
                    { name: "Graz", nameCn: "格拉茲" }, { name: "Linz", nameCn: "林茲" },
                ]
            },
            {
                name: "Sweden", nameCn: "瑞典", code: "SE", cities: [
                    { name: "Stockholm", nameCn: "斯德哥爾摩" }, { name: "Gothenburg", nameCn: "哥德堡" }, { name: "Malmö", nameCn: "馬爾默" },
                    { name: "Uppsala", nameCn: "烏普薩拉" },
                ]
            },
            {
                name: "Norway", nameCn: "挪威", code: "NO", cities: [
                    { name: "Oslo", nameCn: "奧斯陸" }, { name: "Bergen", nameCn: "卑爾根" }, { name: "Tromsø", nameCn: "特羅姆瑟" },
                    { name: "Stavanger", nameCn: "斯塔萬格" },
                ]
            },
            {
                name: "Denmark", nameCn: "丹麥", code: "DK", cities: [
                    { name: "Copenhagen", nameCn: "哥本哈根" }, { name: "Aarhus", nameCn: "奧胡斯" }, { name: "Odense", nameCn: "歐登塞" },
                ]
            },
            {
                name: "Finland", nameCn: "芬蘭", code: "FI", cities: [
                    { name: "Helsinki", nameCn: "赫爾辛基" }, { name: "Tampere", nameCn: "坦佩雷" }, { name: "Turku", nameCn: "圖爾庫" },
                    { name: "Rovaniemi", nameCn: "羅瓦涅米" },
                ]
            },
            {
                name: "Iceland", nameCn: "冰島", code: "IS", cities: [
                    { name: "Reykjavik", nameCn: "雷克雅維克" },
                ]
            },
            {
                name: "Ireland", nameCn: "愛爾蘭", code: "IE", cities: [
                    { name: "Dublin", nameCn: "都柏林" }, { name: "Cork", nameCn: "科克" }, { name: "Galway", nameCn: "高威" },
                ]
            },
            {
                name: "Czech Republic", nameCn: "捷克", code: "CZ", cities: [
                    { name: "Prague", nameCn: "布拉格" }, { name: "Brno", nameCn: "布爾諾" }, { name: "Karlovy Vary", nameCn: "卡羅維瓦利" },
                    { name: "Český Krumlov", nameCn: "庫倫洛夫" },
                ]
            },
            {
                name: "Poland", nameCn: "波蘭", code: "PL", cities: [
                    { name: "Warsaw", nameCn: "華沙" }, { name: "Krakow", nameCn: "克拉科夫" }, { name: "Gdansk", nameCn: "格但斯克" },
                    { name: "Wroclaw", nameCn: "弗羅茨瓦夫" }, { name: "Poznan", nameCn: "波茲南" },
                ]
            },
            {
                name: "Hungary", nameCn: "匈牙利", code: "HU", cities: [
                    { name: "Budapest", nameCn: "布達佩斯" }, { name: "Debrecen", nameCn: "德布勒森" },
                ]
            },
            {
                name: "Greece", nameCn: "希臘", code: "GR", cities: [
                    { name: "Athens", nameCn: "雅典" }, { name: "Santorini", nameCn: "聖托里尼" }, { name: "Thessaloniki", nameCn: "塞薩洛尼基" },
                    { name: "Mykonos", nameCn: "米科諾斯" }, { name: "Rhodes", nameCn: "羅德島" }, { name: "Crete", nameCn: "克里特島" },
                ]
            },
            {
                name: "Croatia", nameCn: "克羅埃西亞", code: "HR", cities: [
                    { name: "Zagreb", nameCn: "薩格勒布" }, { name: "Dubrovnik", nameCn: "杜布羅夫尼克" }, { name: "Split", nameCn: "斯普利特" },
                ]
            },
            {
                name: "Russia", nameCn: "俄羅斯", code: "RU", cities: [
                    { name: "Moscow", nameCn: "莫斯科" }, { name: "Saint Petersburg", nameCn: "聖彼得堡" },
                    { name: "Novosibirsk", nameCn: "新西伯利亞" }, { name: "Vladivostok", nameCn: "海參威" },
                    { name: "Kazan", nameCn: "喀山" }, { name: "Sochi", nameCn: "索契" },
                    { name: "Yekaterinburg", nameCn: "葉卡捷琳堡" },
                ]
            },
            {
                name: "Romania", nameCn: "羅馬尼亞", code: "RO", cities: [
                    { name: "Bucharest", nameCn: "布加勒斯特" }, { name: "Cluj-Napoca", nameCn: "克盧日" }, { name: "Brasov", nameCn: "布拉索夫" },
                ]
            },
            {
                name: "Belgium", nameCn: "比利時", code: "BE", cities: [
                    { name: "Brussels", nameCn: "布魯塞爾" }, { name: "Bruges", nameCn: "布魯日" }, { name: "Antwerp", nameCn: "安特衛普" },
                    { name: "Ghent", nameCn: "根特" },
                ]
            },
            {
                name: "Ukraine", nameCn: "烏克蘭", code: "UA", cities: [
                    { name: "Kyiv", nameCn: "基輔" }, { name: "Lviv", nameCn: "利沃夫" }, { name: "Odessa", nameCn: "敖德薩" },
                ]
            },
        ],
    },
    {
        name: "North America", nameCn: "北美洲",
        countries: [
            {
                name: "United States", nameCn: "美國", code: "US", cities: [
                    { name: "New York", nameCn: "紐約" }, { name: "Los Angeles", nameCn: "洛杉磯" }, { name: "Chicago", nameCn: "芝加哥" },
                    { name: "San Francisco", nameCn: "舊金山" }, { name: "Miami", nameCn: "邁阿密" }, { name: "Seattle", nameCn: "西雅圖" },
                    { name: "Washington D.C.", nameCn: "華盛頓" }, { name: "Boston", nameCn: "波士頓" }, { name: "Las Vegas", nameCn: "拉斯維加斯" },
                    { name: "Houston", nameCn: "休斯頓" }, { name: "Denver", nameCn: "丹佛" }, { name: "San Diego", nameCn: "聖地牙哥" },
                    { name: "Austin", nameCn: "奧斯汀" }, { name: "Nashville", nameCn: "納許維爾" }, { name: "Portland", nameCn: "波特蘭" },
                    { name: "Philadelphia", nameCn: "費城" }, { name: "Phoenix", nameCn: "鳳凰城" }, { name: "Atlanta", nameCn: "亞特蘭大" },
                    { name: "Dallas", nameCn: "達拉斯" }, { name: "New Orleans", nameCn: "紐奧良" }, { name: "Detroit", nameCn: "底特律" },
                    { name: "Minneapolis", nameCn: "明尼阿波利斯" }, { name: "Honolulu", nameCn: "檀香山" }, { name: "Anchorage", nameCn: "安克拉治" },
                ]
            },
            {
                name: "Canada", nameCn: "加拿大", code: "CA", cities: [
                    { name: "Toronto", nameCn: "多倫多" }, { name: "Vancouver", nameCn: "溫哥華" }, { name: "Montreal", nameCn: "蒙特婁" },
                    { name: "Ottawa", nameCn: "渥太華" }, { name: "Calgary", nameCn: "卡加利" }, { name: "Edmonton", nameCn: "艾德蒙頓" },
                    { name: "Quebec City", nameCn: "魁北克市" }, { name: "Winnipeg", nameCn: "溫尼伯" }, { name: "Halifax", nameCn: "哈利法克斯" },
                    { name: "Victoria", nameCn: "維多利亞" },
                ]
            },
            {
                name: "Mexico", nameCn: "墨西哥", code: "MX", cities: [
                    { name: "Mexico City", nameCn: "墨西哥城" }, { name: "Cancún", nameCn: "坎昆" }, { name: "Guadalajara", nameCn: "瓜達拉哈拉" },
                    { name: "Monterrey", nameCn: "蒙特雷" }, { name: "Puebla", nameCn: "普埃布拉" }, { name: "Tijuana", nameCn: "提華納" },
                    { name: "Playa del Carmen", nameCn: "卡門海灘" }, { name: "Oaxaca", nameCn: "瓦哈卡" },
                    { name: "Mérida", nameCn: "梅里達" }, { name: "Puerto Vallarta", nameCn: "巴亞爾塔港" },
                ]
            },
            { name: "Cuba", nameCn: "古巴", code: "CU", cities: [{ name: "Havana", nameCn: "哈瓦那" }] },
            { name: "Costa Rica", nameCn: "哥斯大黎加", code: "CR", cities: [{ name: "San José", nameCn: "聖何塞" }] },
            { name: "Panama", nameCn: "巴拿馬", code: "PA", cities: [{ name: "Panama City", nameCn: "巴拿馬城" }] },
            { name: "Jamaica", nameCn: "牙買加", code: "JM", cities: [{ name: "Kingston", nameCn: "乞斯頓" }] },
        ],
    },
    {
        name: "South America", nameCn: "南美洲",
        countries: [
            {
                name: "Brazil", nameCn: "巴西", code: "BR", cities: [
                    { name: "São Paulo", nameCn: "聖保羅" }, { name: "Rio de Janeiro", nameCn: "里約熱內盧" },
                    { name: "Brasília", nameCn: "巴西利亞" }, { name: "Salvador", nameCn: "薩爾瓦多" },
                    { name: "Fortaleza", nameCn: "福塔雷薩" }, { name: "Belo Horizonte", nameCn: "貝洛奧里藏特" },
                    { name: "Manaus", nameCn: "馬瑙斯" }, { name: "Curitiba", nameCn: "庫里提巴" },
                    { name: "Recife", nameCn: "累西腓" }, { name: "Florianópolis", nameCn: "弗洛里亞諾波利斯" },
                ]
            },
            {
                name: "Argentina", nameCn: "阿根廷", code: "AR", cities: [
                    { name: "Buenos Aires", nameCn: "布宜諾斯艾利斯" }, { name: "Córdoba", nameCn: "科爾多瓦" },
                    { name: "Mendoza", nameCn: "門多薩" }, { name: "Rosario", nameCn: "羅薩里奧" }, { name: "Bariloche", nameCn: "巴里洛切" },
                    { name: "Ushuaia", nameCn: "烏斯懷亞" },
                ]
            },
            {
                name: "Chile", nameCn: "智利", code: "CL", cities: [
                    { name: "Santiago", nameCn: "聖地亞哥" }, { name: "Valparaíso", nameCn: "瓦爾帕萊索" },
                    { name: "Concepción", nameCn: "康塞普西翁" },
                ]
            },
            {
                name: "Colombia", nameCn: "哥倫比亞", code: "CO", cities: [
                    { name: "Bogotá", nameCn: "波哥大" }, { name: "Medellín", nameCn: "麥德林" }, { name: "Cartagena", nameCn: "卡塔赫納" },
                    { name: "Cali", nameCn: "卡利" }, { name: "Barranquilla", nameCn: "巴蘭基亞" },
                ]
            },
            {
                name: "Peru", nameCn: "秘魯", code: "PE", cities: [
                    { name: "Lima", nameCn: "利馬" }, { name: "Cusco", nameCn: "庫斯科" }, { name: "Arequipa", nameCn: "阿雷基帕" },
                ]
            },
            { name: "Ecuador", nameCn: "厄瓜多", code: "EC", cities: [{ name: "Quito", nameCn: "基多" }, { name: "Guayaquil", nameCn: "瓜亞基爾" }] },
            { name: "Uruguay", nameCn: "烏拉圭", code: "UY", cities: [{ name: "Montevideo", nameCn: "蒙特維多" }] },
            { name: "Bolivia", nameCn: "玻利維亞", code: "BO", cities: [{ name: "La Paz", nameCn: "拉巴斯" }] },
            { name: "Venezuela", nameCn: "委內瑞拉", code: "VE", cities: [{ name: "Caracas", nameCn: "卡拉卡斯" }] },
        ],
    },
    {
        name: "Africa", nameCn: "非洲",
        countries: [
            {
                name: "Egypt", nameCn: "埃及", code: "EG", cities: [
                    { name: "Cairo", nameCn: "開羅" }, { name: "Alexandria", nameCn: "亞歷山大" }, { name: "Luxor", nameCn: "盧克索" },
                    { name: "Aswan", nameCn: "亞斯文" }, { name: "Sharm El Sheikh", nameCn: "沙姆沙伊赫" },
                ]
            },
            {
                name: "South Africa", nameCn: "南非", code: "ZA", cities: [
                    { name: "Cape Town", nameCn: "開普敦" }, { name: "Johannesburg", nameCn: "約翰內斯堡" },
                    { name: "Durban", nameCn: "德班" }, { name: "Pretoria", nameCn: "普利托利亞" },
                    { name: "Port Elizabeth", nameCn: "伊莉莎白港" },
                ]
            },
            {
                name: "Nigeria", nameCn: "奈及利亞", code: "NG", cities: [
                    { name: "Lagos", nameCn: "拉各斯" }, { name: "Abuja", nameCn: "阿布賈" },
                ]
            },
            {
                name: "Kenya", nameCn: "肯亞", code: "KE", cities: [
                    { name: "Nairobi", nameCn: "奈洛比" }, { name: "Mombasa", nameCn: "蒙巴薩" },
                ]
            },
            {
                name: "Morocco", nameCn: "摩洛哥", code: "MA", cities: [
                    { name: "Casablanca", nameCn: "卡薩布蘭卡" }, { name: "Marrakech", nameCn: "馬拉喀什" },
                    { name: "Fez", nameCn: "非斯" }, { name: "Tangier", nameCn: "丹吉爾" }, { name: "Rabat", nameCn: "拉巴特" },
                ]
            },
            { name: "Ethiopia", nameCn: "衣索比亞", code: "ET", cities: [{ name: "Addis Ababa", nameCn: "阿迪斯阿貝巴" }] },
            {
                name: "Tanzania", nameCn: "坦尚尼亞", code: "TZ", cities: [
                    { name: "Dar es Salaam", nameCn: "三蘭港" }, { name: "Zanzibar", nameCn: "乞力馬扎羅" },
                ]
            },
            { name: "Ghana", nameCn: "迦納", code: "GH", cities: [{ name: "Accra", nameCn: "阿克拉" }] },
            { name: "Tunisia", nameCn: "突尼西亞", code: "TN", cities: [{ name: "Tunis", nameCn: "突尼斯" }] },
            { name: "Senegal", nameCn: "塞內加爾", code: "SN", cities: [{ name: "Dakar", nameCn: "達喀爾" }] },
        ],
    },
    {
        name: "Oceania", nameCn: "大洋洲",
        countries: [
            {
                name: "Australia", nameCn: "澳大利亞", code: "AU", cities: [
                    { name: "Sydney", nameCn: "雪梨" }, { name: "Melbourne", nameCn: "墨爾本" }, { name: "Brisbane", nameCn: "布里斯班" },
                    { name: "Perth", nameCn: "伯斯" }, { name: "Adelaide", nameCn: "阿德萊德" }, { name: "Gold Coast", nameCn: "黃金海岸" },
                    { name: "Canberra", nameCn: "坎培拉" }, { name: "Hobart", nameCn: "荷巴特" }, { name: "Darwin", nameCn: "達爾文" },
                    { name: "Cairns", nameCn: "凱恩斯" },
                ]
            },
            {
                name: "New Zealand", nameCn: "紐西蘭", code: "NZ", cities: [
                    { name: "Auckland", nameCn: "奧克蘭" }, { name: "Wellington", nameCn: "威靈頓" }, { name: "Christchurch", nameCn: "基督城" },
                    { name: "Queenstown", nameCn: "皇后鎮" },
                ]
            },
            { name: "Fiji", nameCn: "斐濟", code: "FJ", cities: [{ name: "Suva", nameCn: "蘇瓦" }] },
        ],
    },
    {
        name: "Antarctica", nameCn: "南極洲",
        countries: [
            { name: "Antarctica", nameCn: "南極洲", code: "AQ", cities: [{ name: "McMurdo Station", nameCn: "麥克默多站" }] },
        ],
    },
];

export function findCityData(cityName: string): { city: CityData; country: CountryData; continent: ContinentData } | undefined {
    for (const continent of CONTINENTS) {
        for (const country of continent.countries) {
            const city = country.cities.find((c) => c.name === cityName);
            if (city) return { city, country, continent };
        }
    }
    return undefined;
}
