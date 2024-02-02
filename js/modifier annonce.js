$(function() {

var wilaya=$('#Wilaya');
var comm=$('#COMM');
wilaya.change(function(){
  var nwilaya=$(this).val()
$.ajax({
  url : 'ajax_commune.php?commune='+nwilaya+'',
  type:'GET',
  dataType : 'html',
  success:  function(code_html, statut){comm.html(code_html);
  },
  error: function(resultat, statut, erreur){alert(resultat);}
       }); 

});
});