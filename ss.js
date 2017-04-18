var correctMatches = 0;

$(init);

function init() {

  // Hide the success and fact messages
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );
  $('#message').hide();
  $('#message').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );


  // Reset the game
  correctMatches = 0;
  var numOfMatches=12;

  $('#draggableBlocks').html( '' );

  $('#targetArea').html( '' );

  // Create the draggable blocks
  var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];

  var text = [ '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''];

 numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<text.length; i++ ) {
    $('<div>' + text[numbers[i]-1] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'target'+numbers[i] ).appendTo( '#draggableBlocks' ).draggable( {
      containment: '#content',
      stack: '#draggableBlocks div',
      cursor: 'move',
      revert: true,
      start:hideMessage
    } );
  }

  // Create the target placeholders, like dates
  var words = [ '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '' ,
  '',
  ''];

  for ( var i=1; i<=words.length; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#targetArea' ).droppable( {
      accept: '#draggableBlocks div',
      hoverClass: 'hovered',
      drop: handleDrop
    } );
  }

}

function handleDrop( event, ui ) {

  var targetNumber = $(this).data( 'number' );
  var draggableBlockNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

 if ( targetNumber == draggableBlockNumber ) {
 //provide some related facts
 if(targetNumber==1){
  $('#message').show().html("");
  }
  if(targetNumber==2){
  $('#message').show().html("");
  }
  if(targetNumber==3){
  $('#message').show().html("");
  }
  if(targetNumber==4){
  $('#message').show().html("");
	 }
  if(targetNumber==5){
  $('#message').show().html("");
  }
  if(targetNumber==6){
  $('#message').show().html("");
  }
  if(targetNumber==7){
  $('#message').show().html("");
  }
  if(targetNumber==8){
  $('#message').show().html("");
  }
  if(targetNumber==9){
  $('#message').show().html("");
  }
  if(targetNumber==10){
  $('#message').show().html("");
  }
  if(targetNumber==11){
  $('#message').show().html("");
  }
  if(targetNumber==12){
  $('#message').show().html("");
  }

  animateMessage();
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctMatches++;

  }

  // If all the blocks have been placed correctly then display a message
  // and reset the blocks for another go

  if ( correctMatches == numOfMatches ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '70px',
      width: '300px',
      height: '60px',
      opacity: 1
    } );
  }

}
function animateMessage(){
$('#message').animate(
    {
      left: '180px',
      top: '200px',
      width: '600px',
      height: '100px',
      opacity: 1
    });

     }
function hideMessage(){
$('#message').animate(
    {
      left: '220px',
      top: '700px',
      width: '600px',
      height: '100px',
      opacity: 0
    });
}
