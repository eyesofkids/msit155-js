/**
 * @type HTMLInputElement
 */
const fullname = document.getElementById('fullname');
/**
 * @type HTMLInputElement
 */
const email = document.getElementById('email');
/**
 * @type HTMLInputElement
 */
const username = document.getElementById('username');
/**
 * @type HTMLInputElement
 */
const password = document.getElementById('password');
/**
 * @type HTMLInputElement
 */
const password2 = document.getElementById('password2');
// span
const fullnameError = document.getElementById('fullnameError');
const emailError = document.getElementById('emailError');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const password2Error = document.getElementById('password2Error');
// button
const register = document.getElementById('register');

//  檢查
//console.log(fullname, email, username, password, password2, fullnameError, emailError, usernameError, passwordError, password2Error, register);

// 驗証測試
// index.html中需要加入以下在head標記中(或在index.js導入前也可以)
// <script src="https://unpkg.com/validator@latest/validator.min.js"></script>
console.log('---id---');
console.log(validator.isIdentityCard('A123456789' , 'zh-TW'));
console.log(validator.isIdentityCard('A123456788' , 'zh-TW'));
console.log('---mobile---');
console.log(validator.isMobilePhone('0919123456' , 'zh-TW'));
console.log(validator.isMobilePhone('88132465' , 'zh-TW'));
console.log('---email---');
console.log(validator.isEmail('test@goo.ppp'));
console.log(validator.isEmail('test@gmail.com'));


// 一進入頁面時，先聚焦(focus)到第一個輸入欄位(只是為了要提供更好的使用者經驗)
fullname.focus();

register.addEventListener('click', function () {
    // 使用者操作時，會反覆操作這種介面(如果有錯誤發生後)
    // 先清空所有錯誤訊息
    fullnameError.innerText = '';
    emailError.innerText = '';
    usernameError.innerText = '';
    passwordError.innerText = '';
    password2Error.innerText = '';

    // 以下為處理各必填欄位
    if (!fullname.value) {
        fullnameError.innerText = '姓名為必填';
    }

    if (!email.value) {
        emailError.innerText = 'email為必填';
    }

    if(!validator.isEmail(email.value)){
        emailError.innerText += 'email格式錯誤';
    }

    if (!username.value) {
        usernameError.innerText = '帳號為必填';
    }

    if (!password.value) {
        passwordError.innerText = '密碼為必填';
    }

    if (!password2.value) {
        password2Error.innerText = '確認密碼為必填';
    }

    if (password.value.length < 6) {
        // 多出的錯誤訊息要用 `+=` 相當於字串增長串接
        passwordError.innerText += (passwordError.innerText.length > 0)
            ? ' ' + '密碼要超過6個字元'
            : '密碼要超過6個字元';
    }

    // 如果密碼和確認密碼相同，而且密碼有輸入值時
    if (password.value !== password2.value && password.value) {
        passwordError.innerText += ' 密碼與確認密碼需要相同';
        password2Error.innerText += ' 密碼與確認密碼需要相同';
    }

    // 以下使用錯誤訊息是否有存在來判斷
    // 注意要依上下次序寫，而且每個if都要寫return
    if (fullnameError.innerText) {
        fullname.focus();
        // 在函式中可以使用return搭配if...else作更有彈性的流程控制
        // return會跳出函式，不再執行之後的程式碼
        // 回傳的值並不重要，主要是利用函式對return的處理機制而已
        return;
    }

    if (emailError.innerText) {
        email.focus();
        return;
    }

    if (usernameError.innerText) {
        username.focus();
        return;
    }

    if (passwordError.innerText) {
        password.focus();
        return;
    }

    if (password2Error.innerText) {
        password2.focus();
        return;
    }

});