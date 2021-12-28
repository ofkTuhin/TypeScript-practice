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
// return void
let UserInfo:(id:UserId,user:UserType)=> void;

UserInfo=(id:UserId,user:UserType)=>{
    return 
}
//return number

let Calculation:(a:number,b:number,c:string)=>number

Calculation=(a:number,b:number,c:string)=>{
    if (c=="devide") {
        return a/b
    } else {
        return a*b
    }
}
const result=Calculation(4,2,"devide")
console.log(result)

// class & object

class Player{
    name: string;
    age: number;
    country:string
    constructor(name:string,age:number,country:string){
        this.name=name
        this.age=age
        this.country=country

    }
    play(){
       return `the name of the palyer is ${this.name} age is ${this.age} and from ${this.country} `
    }
}

class Club extends Player{
    club:string
    constructor(c:string,name:string,age:number,country:string){
        super(name,age,country)
        this.club=c

    }
    setPlayer(){
        return `${this.play()} and he also play in ${this.club}`
    }
}

const messi= new Club("Barcelona","messi",33,"argentina")
console.log(messi.setPlayer())

// access modifier

class Developer{
    constructor(
        public designation: string,
        readonly language:string,
        private salary:number
    ){}
    All(){
        return `Mr. Rakib is ${this.designation} he is in expert in ${this.language} he withdraw $${this.salary} every month`
    }
}
const rakib=new Developer("Developer","React",1200)

console.log(rakib.All())