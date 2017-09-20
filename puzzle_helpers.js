function updateStatus() {
  var result = 'This block is selected ' + this.isSelected
  console.log(result)
}

function Block(id, imgs, activeImageId, isSelected) {
  this.id = id
  this.imgs = imgs;
  this.activeImageId = activeImageId;
  this.isSelected = isSelected;
  this.updateStatus = updateStatus;
  this.marginLeft = 0
  this.width = 25
  this.height = 25
  this.marginTop = 0
}

Array.matrix = function(numrows, numcols) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
          // create a reference to an HTML element that the block controls
          columns[j] = new Block("", [],0,false);
        }
        arr[i] = columns;
    }
    return arr;
}
