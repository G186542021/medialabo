let b = document.querySelector('#print');
b.addEventListener('click',hantei);

// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// hantei();


// let result = document.querySelector('#result');
// let p = document.createElement('p');

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name="hantei"]');
    let h = i.value;
    let yoso = Number(h);

    let result = document.querySelector('#result');
    let p = document.createElement('p');
    // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    
    kaisu++;
    
    if (yoso == kotae) {
        p.textContent="正解です. おめでとう！";
    } else if (kaisu == 3) {
        p.textContent="まちがい．残念でした答えは" +kotae+ "です";
    } else if (kaisu >= 4 ) {
        p.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
    } else if (yoso<kotae) {
        p.textContent="まちがい．答えはもっと大きいですよ";
    } else if (yoso>kotae) {
        p.textContent="まちがい．答えはもっと小さいですよ";
    }
    result.insertAdjacentElement('afterend',p);

    //let s = document.querySelector('span#kaisu');
    //s.textConent = kaisu;
}
let s = document.querySelector('span#kaisu');
s.textConent = kaisu;

//document.querySelector('なんか');  htmlファイルの中の「なんか」を選ぶ
// let p = document.createElement('p');　タグを新しく作る
// p.textContent = '見出しの次の p 要素';

// h2ocean.insertAdjacentElement('afterend', p);　h2oceanをpの後に出力