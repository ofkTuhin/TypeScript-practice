const country="Bangladesh"
console.log(country)

const checkFunction=(params: number)=>{
    const ans=params*2
   return ans
}
checkFunction(2)
const x=checkFunction
console.log(x)

// explicit type

let a:string
let b:number
let c:object

let array:(string|number)[]=[]
array.push("xyz")
console.log(array)


// Alisses functon
// alisses function
 
type UserType ={user:string,age:number} ;

type UserId =string | number

const UserDetails =(id:UserId, user:UserType)=>{
    console.log(`User Id:${id} the name of user is ${user.user} and his age is ${user.age}`)
}
const object={
    user:"rrr",
    age:34
}
UserDetails(12, object)

// sfignature function

