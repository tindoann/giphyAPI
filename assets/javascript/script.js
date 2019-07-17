$(document).ready(function () {

  //=== 1. Create an array of strings ===// 

  const topics = ['Reanu Reeves', 'Pepe', 'Trump', 'Cats', 'Rainbows'];
  let searchTopic = 'cats';
  //=== 2. The topics in this array and create buttons in your HTML ===//

  let renderBtn = () => {
    $('#btn-view').empty()

    for (let i = 0; i < topics.length; i++) {
      let btns = `<button class='gif' data-name='${topics[i]}'>${topics[i]}</button>`;
      $('#btn-view').append(btns);
      // console.log(btns)
    }
  }

  renderBtn();

  
  //=== 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. ===///
  
  const showGifs = () => {
    $(document).on('click', '.gif', showGifs);    
    let request = $(this).attr('data-name');
    let queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + searchTopic + '&api_key=GOMwIk5Tv7IYqXslbh9zV20jOChqVTjs&limit=10&rating=pg-13';
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: 'GET'
      
    }).then(function (response) {
      console.log(response);
      
      const results = response.data; //grabs the data 
      
      for (let i = 0; i < response.data.length; i++) {
        let rating = results[i].rating
        
        //=== 5. Under every gif, display its rating (PG, G, so on) ===//
        
        let imgs = `
        <div>
        <img src='${results[i].images.fixed_height_small_still.url}'  data-still='${results[i].images.original_still.url}' data-animate='${results[i].images.original.url}' data-state='still' class='gif'>
        <p>Rating: ${rating}</p>
        </div>`;
        
        $('#gif-images').prepend(imgs);
      };
      
      //=== 6. Add a form to your page that takes a value from a user input box and adds it to your `topics` array. ===//
    
      let addBtn = () => {
        $('#gifBtn').on('click', function(event) {
          event.preventDefault();
          const gifs = $('#giphy-input').val().trim(); // This line will grab the text from the input box
          searchTopic = gifs;
          // if (gifs == '') {
          //   alert("Don't be a bore, put in a meme")
          //   return false;
          // }
          topics.push(gifs);
          renderBtn();
          $('form').trigger('reset');
        });
      }
    
      addBtn();
      //=== 4. When the user clicks one of the still GIPHY images, the gif should animate/pause ===//
      
      $('.gif').on('click', function () {
        let state = $(this).attr('data-state');
        
        if (state == 'still') {
          $(this).attr('src', $(this).data('animate'));
          $(this).attr('data-state', 'animate');
        } else {
          $(this).attr('src', $(this).data('still'));
          $(this).attr('data-state', 'still');
        }
      });
    });
  }

  showGifs();
  renderBtn();

});


