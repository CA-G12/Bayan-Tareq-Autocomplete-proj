const searchBtn =document.querySelector('.search-button')
const searchInput = document.querySelector('.search-text')
const body = document.querySelector('.body')
const optionsList = document.getElementsByTagName('option')


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
const createCard =(data)=>{
/// condition to delete the old main if exist
  if(body.childNodes.length ==18){
    const bodyElements =body.childNodes
    bodyElements.item(17).remove()
  }

  const main = document.createElement('main');
  main.classList.add('main');
  const img = document.createElement('img');
  img.src = data.artists[0].strArtistThumb;
  const div = document.createElement('div');
  const artistName = document.createElement('h2');
  div.appendChild(artistName);
  artistName.textContent=`Artist name: ${data.artists[0].strArtist}`;
  const divInfo = document.createElement('div');
  divInfo.classList.add('info');
  const spanDate = document.createElement('span');
  const spanStyle = document.createElement('span');
  const pOfDate = document.createElement('p');
  pOfDate.classList.add('a-date');
  pOfDate.textContent=` Date of birth:${data.artists[0].intBornYear}`; 
  const pOfStyle = document.createElement('p');
  pOfStyle.classList.add('a-style');
  pOfStyle.textContent=`Music Style:${data.artists[0].strStyle};`
  spanDate.appendChild(pOfDate);
  spanStyle.appendChild(pOfStyle);
  divInfo.appendChild(spanDate);
  divInfo.appendChild(spanStyle);
  const btn = document.createElement('button');
  btn.textContent='Albums';
  btn.classList.add('album-btn');
    

  main.appendChild(img);
  main.appendChild(div);
  main.appendChild(divInfo);
  main.appendChild(btn);
  body.appendChild(main);
}


searchBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  if(searchInput.value == ''){
    return
  }
  featch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${searchInput.value}`, createCard)
  searchInput.value=''
    
})


searchInput.addEventListener('input', () => {
  featch(`/post/${searchInput.value}`,(data)=>{
    data.forEach((ele ,index) => {
      optionsList[index].value =ele.artist
    });
  })
})