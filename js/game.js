

  var count=0;
  var levels=1;
  var audioElement = document.createElement('audio');
$( init );
function init() {


  TimeSet(05);
  RandomOrder("source-gallery");
  RandomOrder("dest-gallery");
  SetDraggable();
  SetDroppable();


}
function handleDropEvent( event, ui ) {
  var draggable = ui.draggable.attr("id");
  var droppable = $(this).attr("id");
  if ( draggable ==1 && droppable=="drop-1" ||
        draggable ==2 && droppable=="drop-2" ||
        draggable ==3 && droppable=="drop-3" ||
        draggable ==4 && droppable=="drop-4" ||
        draggable ==5 && droppable=="drop-5" ||
        draggable ==6 && droppable=="drop-6" ) {
  //  ui.draggable.draggable( 'disable' );
  //  $(this).droppable( 'disable' );
  audioElement.setAttribute('src', 'sounds/hurray.mp3');
  audioElement.play();
     $( "#"+draggable ).effect("bounce", { times:3 },1000);
    //ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    //ui.draggable.draggable( 'option', 'revert', false );
    $( "#"+draggable ).hide(0);

      count++;
      $("#score").text(count);

      if(count==6)
      {
        reset();
        //ui.draggable.draggable( 'enable' );
        //$(this).droppable( 'enable' );
        //ui.draggable.draggable( 'option', 'revert', true );
        //$( "#"+draggable ).show(0);
      }
  }
  else {
    audioElement.setAttribute('src', 'sounds/sadtrombone.mp3');
    audioElement.play();
  }

}
function reset() {
  $("#score").text(0);
  levels++;
  if(levels==2)
  {
    TimeSet(4);
    $("#level").text(levels);
  }
  else if (levels==3) {
    TimeSet(2);
    $("#level").text(levels);
  }

  count=0;
  ShowAll();
  RandomOrder("source-gallery");
  RandomOrder("dest-gallery");
//  SetDraggable();
//  SetDroppable();
}

function ShowAll() {
  for (var i = 1; i <= 6; i++) {
      $("#"+i).delay(1500).show(0);
  }

}


function TimeSet(min) {
  $('#ms_timer').countdowntimer({
      minutes :min,
      seconds : 00,
      size : "lg",
      timeUp : timeIsUp
  });
  function timeIsUp() {
        	//Code to be executed when timer expires.
          ShowAll();
        }
}

function SetDraggable() {
  for ( var i=1; i<=6; i++ ) {
  $("#"+i).draggable(
    {
      enable: true,
      revert: true,
    }
  );
  }
}

function SetDroppable() {
  for ( var i=1; i<=6; i++ ) {
  $("#drop-"+i).droppable( {
    enable: true,
    drop: handleDropEvent
  } );
  }
}

function RandomOrder(cls) {
  var cards = $("."+cls);
    for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}
}
