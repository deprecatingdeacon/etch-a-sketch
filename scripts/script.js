$(document).ready(function() {
  createGrid(4);

  $(document).on('mouseenter', '.cell', function() {
    $(this).css({'background-color': 'black'})
  });

  $('#reset').on('click', function(){
    clearGrid();
    var size = prompt("How many boxes per side of the grid?");
    createGrid(size);
  });
});

function createGrid(size) {
  $('table').remove();
  var tempSize = size;
  var gridhtml = '<table>';
  for (var i = 0; i < size; i++) {
    gridhtml += '<tr class="row">';
    for (var j = 0; j < tempSize; j++) {
      gridhtml += '<td class="cell"></td>';
    }
    gridhtml += '</tr>';
  }
  gridhtml += '</table>';
  $('.etchasketch').append(gridhtml);
}

function clearGrid() {
  $('.cell').css({'background-color': 'white'});
}
