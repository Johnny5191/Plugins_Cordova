
$(document).on("click","#alerta", function(){
  navigator.notification.alert("Minha mensagem", null, "Aviso!", "Aceito");
});
$(document).on("click","#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu a opção A");
    }else{
      navigator.notification.alert("Escolheu a opção B");
    }
  }
  navigator.notification.confirm("Escolha A ou B", confirma, "Escolha:",['A','B']);
});
$(document).on("click","#beep", function(){
  navigator.notification.beep(10);
});
$(document).on("click","#vibrar", function(){
  navigator.vibrate(4000);
});

function mostraMapa(lat, long){

  L.mapquest.key = '5HQNFaF0m2LtIJyKF4Ux0cbvXtSJ6cws';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });
        L.marker([lat, long], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).addTo(map);
        map.addControl(L.mapquest.control());
}

$(document).on("click","#local", function(){
  
});
var onSuccess = function(position) {
      mostraMapa(position.coords.latitude, position.coords.longitude)

    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
