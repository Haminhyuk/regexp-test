let str = `
010-5428-2153
thesecon@gmail.com
https://heropy.blog/2018/10/28/regexp/
The Destiny Hero Blood-D is the Good.
abbcccdddd
http://localhost:2708
동해물과_백두산이 마르고 닳도록
d`

// const h = ` the hello  world    

// `

// console.log(h.replace(/\s/g, ''))

console.log(str.match(/.{1,}(?=@)/g))