var fishData = [
  {
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet',
    rating: 0
  },
  {
    name: 'Pufferfish',
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!',
    rating: 0

  }, 
  {
    name: 'Tuna',
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? They\'re terrifying.',
    rating: 0

  }
];
  
//think of this as kind of like a view and you are now calling the instance of App
ReactDOM.render(
	<App data={fishData}/>,
	document.getElementById('app')
);