const collection=require('../utilities/connection');
const EmployeeDatabase=[
    {
        
        staffId:100001,
        userName:"NobleJose",
        password:"abcd1234"
    },
    {
       
        staffId:100002,
        userName:"VarshaeJose",
        password:"xyz1234"
    }
]

exports.setupDb=()=>{
    return collection.getEmployeeCollection().then((emp)=>{
        return emp.deleteMany().then(()=>{return emp.insertMany(EmployeeDatabase).then((data)=>{
            if(data){
                return "Insertion Succcessful"
            }
            else{
                let err=new Error("Insertion Failed");
                err.status=400;
                throw err;
            }
        })})
    })
}