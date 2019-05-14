const BASE_URL = 'https://api.foursquare.com/v2/venues/explore';
const CLIENT_ID = `client_id=UTI24NQIUWEOYJ4AI0LZZYDHBEPXIFHWXRX0EPHBAQXRN5E2`;
const CLIENT_SECRET = `client_secret=WC3ENWDDKL02H42M5IK1T0XBVSO2EATOURD0QL401LLEXLTS`;

const params = {
    'll': '-23.557552800000003, -46.675900299999995',
    'query': 'food',
    'limit': '20',
    'venue_id': ''
};

export const getVenue = id =>
    fetch(`${BASE_URL}&${CLIENT_ID}&${CLIENT_SECRET}&${params.query}&${params.limit}&${params.ll}&${id}`)
    .then(res => res.json())
    .then(data => data.response.groups[0])
    .catch(err => console.error(err))