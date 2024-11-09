fetch("conf.json").then(r =>r.json()).then(confData => {

  let data = {};


  const upload = () => {
    return new Promise(()=>{
       try{
          fetch(confData.url + "set", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'key': confData.token
            },
            body: JSON.stringify({
                key: confData.key,
                value: data
            })
      }).then(r => r.json())
      .then(r => {console.log(r);})
      }
      catch(error){
       reject(error)
      }
    })
 }
 
  const download = () => {
    return new Promise((resolve,reject)=>{
      try{
        fetch(confData.url + "get", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'key': confData.token
          },
          body: JSON.stringify({
            key: confData.key
          })
        }).then(r => r.json())
        .then(r => {resolve(r);})
        }catch(error) {
          reject(error)
        }
    })   
 } 

 upload();
 download().then(console.log);

});