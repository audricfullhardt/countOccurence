function countOccurence(text, occurence) {
    if(text == document.body){
        var bodyElement = document.body
        var bodyText = bodyElement.innerText || bodyElement.textContent;
        text = bodyText.split('');
    }else{
        text = text.split('');
    }
    var WordOccurence = 0;
    for(var i = 0 ; i<text.length; i++){
      if(occurence == text[i])
        WordOccurence++;
    }
    return WordOccurence;
  }