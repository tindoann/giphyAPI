//=== 1. Create an array of strings ===// 
  const topics = ['Reanu Reeves', 'Pepe', 'Trump', 'Cats', 'Rainbows'];

//=== 2. The topics in this array and create buttons in your HTML ===//

  let renderBtn = () => {
    $('#btn-view').empty() 
    for (let i = 0; i < topics.length; i++) {
      btns = `<button class='memes' data-value='${topics[i]}'>${topics[i]}</button>`;
      $('#btn-view').append(btns);
      // console.log(btns)
  }
}

  $('#gifBtn').on('click', event => {
    event.preventDefault();
    const gifs = $('#giphy-input').val().trim(); // This line will grab the text from the input box
    topics.push(gifs); 
    renderBtn();
  });
    renderBtn();

//=== 3. The page should grab 10 static, non-animated gif images from the GIPHY API ===//  
  
  const showGifs = () => {

    const request = $(this).attr("data-name");
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + request + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      //===============CREATING GIFS==================//

          var results = response.data;

                // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating == "pg-13") {
          

                for (let i = 0; i < results; i++) {
                  gifStills = 
                  
                  `<div class='memes' data-state='${results[i]}'>${results[i]}</div>
                  <img src='${results[i]}.images.fixed_height.url'`;
                  $('#gif-images').append(gifStills);
                  console.log(this)

                
                }
              }
            })
          }
                