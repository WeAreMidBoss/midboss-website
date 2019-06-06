

$(function(){

        var ds = new Miso.Dataset({
          importer : Miso.Dataset.Importers.GoogleSpreadsheet,
          parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
          key : "0AmiwpEaQwxurdDc5N0JQU1ZjQmdjeDVfWWJ6TEJuWHc",
          worksheet : "1"
        });

        ds.fetch({
          success : function() {
            this.each(function(row, k) {
                for(var i in row) if(row[i] == null) row[i] = '';

                switch(k){
                    case 0: $('.grupales-fecha').html(row.semana_fecha); break;
                    case 1: $('.grupal-semana-lunes').html(row.semana_fecha); break;
                    case 2: $('.grupal-semana-martes').html(row.semana_fecha); break;
                    case 3: $('.grupal-semana-miercoles').html(row.semana_fecha); break;
                    case 4: $('.grupal-semana-jueves').html(row.semana_fecha); break;
                    case 5: $('.grupal-semana-viernes').html(row.semana_fecha); break;
                    case 6: $('.grupal-semana-sabado').html(row.semana_fecha); break;
                }

                var tr = '<tr>';

                row.saturday_streamer = nl2br(row.saturday_streamer);
                row.sunday_streamer = nl2br(row.sunday_streamer);
                row.monday_streamer = nl2br(row.monday_streamer);
                row.tuesday_streamer = nl2br(row.tuesday_streamer);
                row.wednesday_streamer = nl2br(row.wednesday_streamer);
                row.thursday_streamer = nl2br(row.thursday_streamer);
                row.friday_streamer = nl2br(row.friday_streamer);

                row.saturday_game = nl2br(row.saturday_game);
                row.sunday_game = nl2br(row.sunday_game);
                row.monday_game = nl2br(row.monday_game);
                row.tuesday_game = nl2br(row.tuesday_game);
                row.wednesday_game = nl2br(row.wednesday_game);
                row.thursday_game = nl2br(row.thursday_game);
                row.friday_game = nl2br(row.friday_game);

                  tr = tr+'<td nowrap="nowrap"><span class="horario">'+row.time-day+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.saturday_streamer+'</span><span class="instructor">'+row.saturday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.sunday_streamer+'</span><span class="instructor">'+row.sunday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.monday_streamer+'</span><span class="instructor">'+row.monday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.tuesday_streamer+'</span><span class="instructor">'+row.tuesday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.wednesday_streamer+'</span><span class="instructor">'+row.wednesday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.thursday_streamer+'</span><span class="instructor">'+row.thursday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.friday_streamer+'</span><span class="instructor">'+row.friday_game+'</span></td>';

                  $('#horario tbody').append(tr);
            });
          },
          error : function() {
            console.log("Are you sure you are connected to the internet?");
          }
        });





$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



$("#toggle").click(function(){

         $("#target").slideToggle( 'slow',function(){
         $("#toggle").text($("#target").is(':visible') ? "▾ Valoración Física" : "▸ Valoración Física");
 });
});

 $("#toggle2").click(function(){

         $("#target2").slideToggle( 'slow',function(){
         $("#toggle2").text($("#target2").is(':visible') ? "▾ Programa de Inicio Rápido" : "▸ Programa de Inicio Rápido");
 });
});

 $("#toggle3").click(function(){

         $("#target3").slideToggle( 'slow',function(){
         $("#toggle3").text($("#target3").is(':visible') ? "▾ Sistema de Seguimiento" : "▸ Sistema de Seguimiento");
 });
});

$('#target').hide();
$('#target2').hide();
$('#target3').hide();

$('#contactform').submit(function(e){
    console.log('submit event fired');


$.post('submit.php', $('#contactform').serialize(),function(data){
console.log(data);
Shadowbox.open({
        content:    '<div id="welcome-msg">¡Tu mensaje ha sido enviado! </div>',
        player:     "html",
        title:      "KOSPORT",
        height:     70,
        width:      390
    });
});

    e.preventDefault();
return false;

});


});