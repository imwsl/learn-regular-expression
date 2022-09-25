var str1 = 'abc123efg'
var pattern = /[0-9]+/
console.log(str1.match(pattern)[0])

/* 

   ^[0-9]+abc$

   ^ 输入字符串的开始位置
   [0-9]+ 匹配多个数字，[0-9]匹配单个数字，+匹配一个或多个数字
   abc$匹配字母abc，并以abc结尾, $匹配字符串的结尾位置

*/

var str2 = '1234121212abc'
pattern = /^[0-9]+abc$/
console.log(str2.match(pattern))


/*

  [ABC]模式，匹配[...]中的所有的字符串
*/

var str3 = 'google facebook hive you are'
pattern = /[aeiou]/g
console.log("origin => " + str3)
console.log(str3.match(pattern))

/*

  [^ABC]模式，匹配除[...]中的所有的字符串
*/
var str4 = 'google facebook hive you are'
pattern = /[^aeiou]/g
console.log("origin => " + str4)
console.log(str4.match(pattern))

/*

  [A-Z]模式，匹配A-Z中的所有大写字母
*/
var str5 = 'Google Facebook Hive You Are'
pattern = /[A-Z]/g
console.log("origin => " + str5)
console.log(str5.match(pattern))

/*

  [^A-Z]模式，匹配除A-Z中的大写字母
*/
var str6 = 'Google Facebook Hive You Are'
pattern = /[^A-Z]/g
console.log("origin => " + str6)
console.log(str6.match(pattern))

/*

  [^a-z]模式，匹配除a-z中的小写字母
*/
var str7 = 'Google Facebook Hive You Are'
pattern = /[^a-z]/g
console.log("origin => " + str7)
console.log(str7.match(pattern))

/*

  /./g，匹配除换行的所有字符串，等同于[^\n\r]
*/
var str7 = 'Google\n\r Facebook\n\r Hive You Are'
pattern = /./g
console.log("origin => " + str7)
console.log(str7.match(pattern))


/*

  [\s\S]模式，匹配所有。\s匹配所有的空白符，\S匹配所有非空白符
*/
var str8 = 'Google Facebook Hive You Are'
pattern = /[\s\S]/g
console.log("origin => " + str8)
console.log(str8.match(pattern))

/*

  /\w/g模式，匹配字母、数字、下划线，等价于[A-Za-z0-9_]
*/
var str10 = 'Google__$$$^^& Facebook Hive You Are 1213434'
pattern = /\w/g
console.log("origin => " + str10)
console.log(str10.match(pattern))
