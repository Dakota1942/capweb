$(document).ready(function(){
    $('#block4').hide();
    $('#block5').hide();
    $('#block6').hide();
});

$('#block1').mouseover(function(){
    $('#block4').show();
});
$('#block1').mouseout(function(){
    $('#block4').hide();
});

$('#block2').mouseover(function(){
    $('#block5').show();
});
$('#block2').mouseout(function(){
    $('#block5').hide();
});

$('#block3').mouseover(function(){
    $('#block6').show();
});
$('#block3').mouseout(function(){
    $('#block6').hide();
});