var REQUEST_URL = 'https://goldtrader.cash/rest/';


export function Register(string){
	var promise= new Promise(function(resolve,reject){
		fetch(REQUEST_URL+'register.php',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'content-Type':'application/json'
          },
          body:JSON.stringify(string)
        }).then((response)=>response.json()).then((responseData)=>{
        	 resolve(responseData)
          }).catch((err)=>{
          	reject(err)
          })
	})
	return promise;
}

export function Login(string){
  var promise= new Promise(function(resolve,reject){
    fetch(REQUEST_URL+'login.php',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'content-Type':'application/json'
          },
          body:JSON.stringify(string)
        }).then((response)=>response.json()).then((responseData)=>{
           resolve(responseData)
          }).catch((err)=>{
            reject(err)
          })
  })
  return promise;
}