const upload = () => {
  return new Promise(()=>{
      try{
        fetch(url + "set", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'key': token
          },
          body: JSON.stringify({
              key: key,
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
      fetch(url + "get", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'key': token
        },
        body: JSON.stringify({
          key: key
        })
      }).then(r => r.json())
      .then(r => {resolve(r);})
      }catch(error) {
        reject(error)
    }
  })   
}