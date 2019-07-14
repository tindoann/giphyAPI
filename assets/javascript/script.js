//=== 1. Create an array of strings=== // 
  var topics = ['Reanu Reeves', 'Pepe', 'Trump', 'Cats', 'Rainbows'];

//=== 2. The topics in this array and create buttons in your HTML=== //

  const renderBtn = () => {
    $('#btn-view').empty() 
    for (let i = 0; i < topics.length; i++) {
      btns = `<button class='option' data-value='${topics[i]}'>${topics[i]}</button>`;
      $('#btn-view').append(btns);
      console.log(btns)
  }
}

  $('#gifBtn').on('click', event => {
    event.preventDefault();
    const gifs = $('#giphy-input').val().trim(); // This line will grab the text from the input box
    topics.push(gifs); 
    renderBtn();
  });
    renderBtn();

