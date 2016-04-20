var x 
var y

angular.module('myApp',[])
       .controller('myController', function($scope){
           
          
            
            $scope.pointArray = []
            var removedMarker = false
            
            

            $scope.doClick = function(event) {
                
                // x = event.x;
                // y = event.y;
                var x = event.pageX - 20
                var y = event.pageY - 45
                var offsetX = event.offsetX;
                var offsetY = event.offsetY;
            
                // you have lots of things to try here, not sure what you want to calculate
                //console.log(x, y) //offsetX, offsetY);    
                console.log(event)
                
                    // var d = document.getElementById('markerDiv');
                    //     d.style.left = x
                    //     d.style.top = y
                
                // $scope.myStyle = {
                //     'display': "inherit",
                //     'left': x + "px",
                //     'top': y + "px"
                // }
                if (event.altKey === true) {
                    console.log('ALT KEY PRESSED -- FOR NOTE')
                    removedMarker = true
                }
                
                if (removedMarker === false) {
                    $scope.pointArray.push({
                        x: x,
                        y: y
                    })
                
                } else {
                  console.log('skipped placing marker')    
                  removedMarker = false
                }
                
                
                //console.log($scope.pointArray)

            }
            
            $scope.marker = function() {
                var markerUrl = ""
                document.write(markerUrl)
            }
            
            $scope.removeMarker = function (index) {
              if (event.altKey === false) {             
                console.log('hiding marker')
                $scope.pointArray.splice(index, 1)
                console.log('splicing ID: ' + index)
                removedMarker = true
                // $scope.myStyle = { display: 'none' }
              }
            }
            
    })
    



// var $wrapper = $('#wrapper');

// $('#wrapper img').click(function(e) {
//     var $this = $(this);
//     var offset = $this.offset();
//     $('<span>1</span>').addClass('marker').css({
//         left: e.pageX-offset.left,
//         top: e.pageY-offset.top
//     }).appendTo($wrapper);
// });