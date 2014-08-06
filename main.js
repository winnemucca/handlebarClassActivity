$(document).on('ready', function() {

	// pre compile the handlebars template
	var templateSource = $('#my-template').html();
	console.log('template Source:', templateSource);

	var myTemplate = Handlebars.compile(templateSource);
	console.log('myTemplate', myTemplate);

	// Run the template funciton and append the output
	// to the html dom

	var context = {
		title: 'Using Handlebars!',
		message: 'this is a message from javascript'

	}


	var output = myTemplate(context);
	console.log(output);


	$('body').append(output);




	// render another elemtn to the page
	var context2 = {
		title: 'this is from 2',
		message: 'Hello world, from temp 2'
	}
	$('body').append(myTemplate( context2) );


	var games = [
	{title: 'braid', platform: 'all'},
	{title: 'halflife', platform: 'pc'},
	{title: 'system shock', platform: 'pc'}
	];

	var gameItemSource= $('#item-template').html();
	var gameItemTemplate= Handlebars.compile(gameItemSource);


	for(var i=0; i< games.length; i++){
		$('#games-list').append(gameItemTemplate(games[i]) )
	};

	//use the helper to redner the whole list of games..
	var gameHelperSource = $('#helper-template').html();
	var gameHelperTemplate = Handlebars.compile(gameHelperSource);

	$('#games-list-helper').append( gameHelperTemplate( {games: games}  ) );
  
});











