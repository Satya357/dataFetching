export const increNum = (num) => 
 { 
    return { type : "INCREMENT" ,
             payload : num 
             }
 }

 export const decreNum = (num) =>
 {
    return { type : "DECREMENT" ,
             payload : num
            }
 }