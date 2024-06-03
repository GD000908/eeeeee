document.addEventListener('DOMContentLoaded', function() {
    // 기존 날씨 정보 업데이트 코드

    // 미세먼지 정보 업데이트
    function updateDustInfo() {
        const apiKey = 'n0gLrocOg7J%2FpvGcbwD4474n%2FwqSgrO3gH2jLgLx7sdTJNVLNraR18En19OmmfvHnRFcFxctRbnDQsZw%2BIxrUw%3D%3D';
        const apiUrl = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${apiKey}&sidoName=%EA%B2%BD%EB%B6%81&returnType=json`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const items = data.response.body.items;
                const andongData = items.find(item => item.stationName === "안동"); // 안동 데이터를 찾음

                if (andongData) {
                    const dustTimeElement = document.querySelector('.dust-time');
                    const dustPM10Element = document.querySelector('.dust-pm10');
                    const dustPM25Element = document.querySelector('.dust-pm2_5');

                    const dustTime = andongData.dataTime;
                    const dustPM10 = `PM10: ${andongData.pm10Value} µg/m³`;
                    const dustPM25 = `PM2.5: ${andongData.pm25Value} µg/m³`;

                    dustTimeElement.textContent = dustTime;
                    dustPM10Element.textContent = dustPM10;
                    dustPM25Element.textContent = dustPM25;
                }
            })
            .catch(error => console.error('Error fetching dust data:', error));
    }

    updateDustInfo();
});
