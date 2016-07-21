var animatePoints = function() {
    var points = document.getElementsByClassName('point');

    var revealPoint = function(index){
        point[index].style.opacity = 1;
        point[index].style.transform = "scaleX(1) translateY(0)";
        point[index].style.msTransform = "scaleX(1) translateY(0)";
        point[index].style.WebkiteTransform = "scaleX(1) translateY(0)";
    };
        
    for (var i = 0; i < points.length; i++){
        revealPoint(i);
    }
};