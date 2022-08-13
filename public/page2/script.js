const featch =(url ,cb)=>{
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText)
        cb(data)
      } else {
        console.log('Error', JSON.parse(xhr.responseText))
      }
    }
  };
  
  xhr.open('GET', url);
  xhr.send();
}