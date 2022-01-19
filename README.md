## Environment
node version v16.13.0

npm version 8.1.0

MongoDB

## Prepare
Weather API Key: please follow [氣象資料開放平臺](https://opendata.cwb.gov.tw/devManual/insrtuction) 

and paste the API key to pacakge.json weather.key.

MongoDB
default connection ```mongodb://localhost/weather```

## Get started
```
git clone https://github.com/ghostLWJ/weather-api

cd weather-api

npm i

npm run start:dev
```

## Swagger UI
While the application is running, open your browser and navigate to http://localhost:3000/api


## Docker
```sh
docker-compose up
```

## How to use
```sh
curl -X 'POST' \
  'http://localhost:3000/token/generate' \
  -H 'accept: */*' \
  -d ''
```

```sh
curl -X 'GET' \
  'http://localhost:3000/weather/search/Taipei' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer {YOUR TOKEN}'
```

