// create our own function 
function inHTML(qu, content){
  if(content){
    document.querySelector(qu).innerHTML = content;
    return content;
  }else{
    return document.querySelector(qu).innerHTML;
  }
}

// add list item
function addList(qu, content){
  const list = document.querySelector(qu);

  if(content){
    const li = document.createElement("li");
    li.innerHTML = content;
    list.appendChild(li);
  }
}

// add eventlistener

function addEvent(qu, event, func){
  document.querySelector(qu).addEventListener(event, func);
}




























