let company=["Bloomberg", "Microsoft", "Uber", "Google", "IBM"]

for(let i=0; i<company.length; i++){
    console.log(company[i])
}

console.log("-------------------------------")

company.splice(0,1)
for(let i=0; i<company.length; i++){
    console.log(company[i])
}  

console.log("-------------------------------")
company.splice(2,1,"Ola")
for(let i=0; i<company.length; i++){
    console.log(company[i])
}  

console.log("-------------------------------")

company.push("Amazon")

for(let i=0; i<company.length; i++){
    console.log(company[i])
} 

console.log("-------------------------------")

let printCompany = function(company){
    for(let i=0; i<company.length; i++){
        console.log(company[i])
    }
}
