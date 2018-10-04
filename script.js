/*
   Define variables:
   - gridSize,
   - gHeight, grid height or number of rows
   - gWidth, grid width or number of columns
   - gColor, cell color
*/
const gridSize = document.getElementById("sizePicker");
var gHeight = document.getElementById("inputHeight").value;
var gWidth = document.getElementById("inputWidth").value;
var gColor = document.getElementById("colorPicker").value;


/* Prevent the default action from occurring. In this case the form submit and reset the html to default values. If there are already colored squares in the grid, clicking the "Submit" button clears them out.*/
gridSize.addEventListener('submit', function (event) {
   var gtable = document.querySelector('table');
   document.body.removeChild(gtable);
   event.preventDefault();
});

gridSize.addEventListener('submit', makeGrid);



// Function to create grid and color it
function makeGrid(event) {

  // Store grid size and color selected by user
  gHeight = document.getElementById("inputHeight").value;
  gWidth = document.getElementById("inputWidth").value;
  gColor = document.getElementById("colorPicker").value;


  //Create a blank grid
  gridSize.height.value = gHeight ;
  gridSize.width.value = gWidth;

  // Create a container for the grid
  var container = document.createElement("table");

  for(var r=0; r < gHeight; r++){
    var row = document.createElement("tr");
    for (var c=0; c<gWidth; c++){
      var col = document.createElement("td");
      row.appendChild(col);
    }
    container.appendChild(row);
  }

  // Append the container to the body
  document.body.appendChild(container);

  // Change the cell background on click
  // If user changes the color, the pen will use the new color to color the background
  var cells = container.getElementsByTagName("td");
  for(var i = 0; i < cells.length; i++){
    var cell = cells[i];
    cell.addEventListener('click', function () {
      gColor = document.getElementById("colorPicker").value;
      this.style.backgroundColor = gColor;
    });

  }

}

