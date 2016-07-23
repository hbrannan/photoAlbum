var fishData = [
  {
    name: 'Rabi\'a al-Basri',
    image: 'http://www.deeptrancenow.com/images/sufi-love.jpg',
    description: 'Burned heaven and doused hell',
    rating: 0
  },
  {
    name: 'Theresa of Avila',
    image: 'http://www.artble.com/imgs/d/a/5/431705/the_ecstasy_of_saint_theresa.jpg',
    description: 'Extacy of Caramel',
    rating: 0

  }, 
  {
    name: 'Yeshe Tsogyal',
    image: 'http://static1.squarespace.com/static/5654037de4b0a689b3fbb9fd/t/5660f6d0e4b0c8e9dc5c51ab/1449195224222/Yeshe-Tsogyal-1-Samye_lzn_w.jpg?format=750w',
    description: 'Victorious ocean of wisdom.',
    rating: 0

  }
];
  //Julian of Norwich
//think of this as kind of like a view and you are now calling the instance of App
ReactDOM.render(
	<App data={fishData}/>,
	document.getElementById('app')
);