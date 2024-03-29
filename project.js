let b = document.querySelector('#sendRequest');
b.addEventListener('click',sendRequest);


// 通信を開始する処理
function sendRequest() {
    let i = document.querySelector('select[name="prefecture"]');
    let id = i.value;

	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.weather[0].description);


    let description = document.querySelector('#result');
    description.textContent = data.weather[0].description;

	let temp = document.querySelector('#tempreture');
    temp.textContent = data.main.temp;

	let maxtemp = document.querySelector('#maxtemp');
    maxtemp.textContent = data.main.temp_max;

	let minitemp = document.querySelector('#minitemp');
    minitemp.textContent = data.main.temp_min;
}


// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}

