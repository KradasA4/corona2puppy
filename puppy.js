



  const targetNode = document.body;

  const config = { attributes: false, childList: true, subtree: true };
  
  const callback = function(mutationsList, observer) {
    window.setTimeout(function(){

        const mySelection =  ['https://media.giphy.com/media/12cPXJ36UX5nO0/giphy.gif',
        'https://media.giphy.com/media/2FhASosZtLUPe/giphy.gif',
        'https://media.giphy.com/media/bmrxNoGqGNMAM/giphy.gif',
        'https://media.giphy.com/media/12MY94aT1qTFjW/giphy.gif'
        ]
      
      

        var all = document.getElementsByTagName("span");
        for (var i=0, max=all.length; i < max; i++) {
           var num = mySelection[Math.floor(Math.random()*mySelection.length)]
            if(all[i].innerHTML){all[i].innerHTML =  all[i].innerHTML.replace(/coronavirus|covid-19|corona|covid|virus|quarantine/gi,  `<img src="${num}" alt="puppy gif" height="120" width="200">`)}}
      
      }, 1000);
    
  };
  
  const observer = new MutationObserver(callback);
  
  observer.observe(targetNode, config);





