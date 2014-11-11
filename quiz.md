###What is the result of this expression? (or multiple ones)
```javascript
(function(){
  var x = y = 1;
})();
console.log(y);
console.log(x);
```
1. 1, 1
2. error, error
3. 1, error
4. other


###What is the result of this expression? (or multiple ones)
```javascript
[,,,].join(", ")
```
1. ", , , "
2. "undefined, undefined, undefined, undefined"
3. ", , "
4. ""



###What is the result of this expression? (or multiple ones)
```javascript
'5' + 3
'5' - 3
```
1. "53", 2
2. 8, 2
3. error
4. other


###What is the result of this expression? (or multiple ones)

```javascript
var val = 'smtg';

console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
```
1. Value is Something
2. Value is Nothing
3. NaN
4. other



###What is the result of this expression? (or multiple ones)

```javascript
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
```
1. Goodbye Jack
2. Hello Jack
3. Hello undefined
4. Hello World


###What is the result of this expression? (or multiple ones)

```javascript
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));
```
1. Case A
2. Case B
3. Do not know!
4. undefined


###What is the result of this expression? (or multiple ones)
```javascript
function showCase2(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase2(String('A'));
```
1. Case A
2. Case B
3. Do not know!
4. undefined


###What is the result of this expression? (or multiple ones)
```javascript
var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log("wut");
}
```
1. true
2. false
3. "wut"
4. other








