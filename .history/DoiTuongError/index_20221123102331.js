// let score={
//     checkerror:function (score){
//       if(score<0)
//       {
//          try{
//            throw new EvalError('Error occurred');
//          }catch(e)
//          {
//             console.log(e.message); 
//          }
           
//       }
//     }
//   }
//   console.log(score.checkerror(-3));

function check(n)
{
    if( !(n >= -500 && n <= 500) )
    {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try
{
    check(2000)
}
catch(error)
{
    if (error instanceof RangeError)
    {
        console.log(error.message);
    }
}