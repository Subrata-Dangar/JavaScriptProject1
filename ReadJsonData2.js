data = '{"request_id":"sd3ds31","bot_id":"23","global_domain_id":"string","domain_id":"string","tenant_id":"IT","utterance":"my Outlook is not working","result_set_size":3,"objSRServiceTicket":{"DelegationMode":false,"TicketID":"357","DelegateeUserID":0,"ApprovalDelegatedId":0,"Org_ID":"1"},"articles":[{"KB_ID":8409,"KB_Subject":"Summit Mobile Access"},{"KB_ID":8408,"KB_Subject":"Outlook not responding??"},{"KB_ID":8407,"KB_Subject":"Hard Disk Extension"},{"KB_ID":8399,"KB_Subject":"self help for wifi access?"}]}'
let obj=JSON.parse(data)

console.log(obj.request_id)//sd3ds31
console.log(obj.tenant_id)//IT
console.log(obj.objSRServiceTicket.TicketID)//357
console.log(obj.articles[3].KB_Subject)//self help for wifi access?