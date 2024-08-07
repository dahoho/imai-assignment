const str1 = "清掃費用:41800円（税込）";
const str2 = "退去費用:100,500円";
// const limited = str1.match(/^\D{4}:?\d{5}\D{5}$/);
//上は全部引き出すもの
// const identification = str1.match(/d{5}/);
//数だけ抜き出す
const pattern = /\d,?\d/g;

/*str1,2の両方に通用する正規表現を作りたい
まずはstr1に対応するものを。
"清掃費用:41800円（税込）"について分けて考える
文字４つ　＋　:　＋　数字5桁　＋　文字５つ？　＝＞（）は数値以外ではあるが適応されるのだろうか？
文中の数字5桁　のみ切り取りたい
str2について
"退去費用:100,500円"
,という部分も含めて切り取りたい
*/
const matchStr1 = str1.match(pattern).join(``);
console.log(matchStr1);
const matchStr2 = str2.match(pattern).join(``);
console.log(matchStr2);
// console.log(str1);
// console.log(str2);
// console.log(limited);
// console.log(identification);

//正規表現の練習から始めよう
// const postcode = "123-4567";
// const result = postcode.match(/^\d{3}-?\d{4}$/);
// console.log(result);
/*(/^\d{3}-?\d{4}$/)を解釈する
(/RegExp本文/)ってな大枠がある
郵便番号は　3桁の数＋ハイフン＋4桁の数　の形式
^\d{3}は前3桁の数に対応した正規表現
^は文頭一致。dは0から9までの数。{桁数}、今回は3桁
？は直前の文字が0or1回、今回はハイフンが対象
＄は文末一致。この場合は4桁の数値。

(/^\D{4}:?\d{5}\D{5}$/)
*/
