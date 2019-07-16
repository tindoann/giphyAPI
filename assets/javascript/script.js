$(document).ready(function () {

  //=== 1. Create an array of strings ===// 
  const topics = ['Reanu Reeves', 'Pepe', 'Trump', 'Cats', 'Rainbows'];

  const showGifs = () => {

    let request = $(this).attr('data-value');
    let queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + request + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      //=== 3. The page should grab 10 static, non-animated gif images from the GIPHY API ===//  

      let results = response.data; //grabs the data 

      for (let i = 0; i < response.data.length; i++) {
        let rating = results[i].rating
        let imgs = `
           <div>
              <p>Rating: ${rating}</p>
              <img src="${results[i].images.fixed_height_small_still.url}"  data-still="${results[i].images.original_still.url}" data-animate="${results[i].images.original.url}" data-state="still" class="gif">
            </div>    
              `;         
          $('#gif-images').prepend(imgs);
        };
    
        console.log(response); //note: 
      }
    
    )
  }

  showGifs()

  //=== 2. The topics in this array and create buttons in your HTML ===//

  let renderBtn = () => {
    $('#btn-view').empty()
    for (let i = 0; i < topics.length; i++) {
      let btns = `<button class='gif' data-value='${topics[i]}'>${topics[i]}</button>`;
      $('#btn-view').append(btns);
      // console.log(btns)
    }
  }


  let addBtn = () => {
    $('#gifBtn').on('click', event => {
      event.preventDefault();
      const gifs = $('#giphy-input').val().trim(); // This line will grab the text from the input box
      if (gifs == '') {
        alert("Don't be a bore, put in a meme")
        return false;
      }
      topics.push(gifs);
      renderBtn();
    });
  }
  renderBtn();
  addBtn();
  showGifs(); 
  renderBtn();

});


