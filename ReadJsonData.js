let text ='{"articles": ['+
'{"KB_ID": 8409,"KB_CategoryID": "General","KB_Subject": "Summit Mobile Access"},'+
'{"KB_ID": 8408,"KB_CategoryID": "string","KB_Subject": "Outlook not responding??"},'+
'{"KB_ID": 8407,"KB_CategoryID": "General","KB_Subject": "Hard Disk Extension"},'+
'{"KB_ID": 8399,"KB_CategoryID": "General","KB_Subject": "self help for wifi access?"}]}' ;

let obj=JSON.parse(text)
let a=obj.articles[1].KB_ID
console.log(a)

let b=obj.articles[1].KB_Subject
console.log(b)

let c=obj.articles[1].KB_CategoryID
console.log(c)