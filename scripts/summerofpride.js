

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

                row.lunes = nl2br(row.lunes);
                row.martes = nl2br(row.martes);
                row.miercoles = nl2br(row.miercoles);
                row.jueves = nl2br(row.jueves);
                row.viernes = nl2br(row.viernes);
                row.sabado = nl2br(row.sabado);

                row.instructor_lunes = nl2br(row.instructor_lunes);
                row.instructor_martes = nl2br(row.instructor_martes);
                row.instructor_miercoles = nl2br(row.instructor_miercoles);
                row.instructor_jueves = nl2br(row.instructor_jueves);
                row.instructor_viernes = nl2br(row.instructor_viernes);
                row.instructor_sabado = nl2br(row.instructor_sabado);

                  tr = tr+'<td nowrap="nowrap"><span class="horario">'+row.horario+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.lunes+'</span><span class="instructor">'+row.instructor_lunes+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.martes+'</span><span class="instructor">'+row.instructor_martes+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.miercoles+'</span><span class="instructor">'+row.instructor_miercoles+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.jueves+'</span><span class="instructor">'+row.instructor_jueves+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.viernes+'</span><span class="instructor">'+row.instructor_viernes+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.sabado+'</span><span class="instructor">'+row.instructor_sabado+'</span></td>';

                  $('#horario tbody').append(tr);
            });
          },
          error : function() {
            console.log("Are you sure you are connected to the internet?");
          }
        });

    $(function(){
         $('#showall').click(function(){
               $('.targetDiv').show();
        });
        $('.showSingle').click(function(){
              $('.targetDiv').fadeOut("fast");;
              $('#div'+$(this).attr('target')).fadeIn("fast");
        });
    $('.targetDiv').fadeOut("fast");;
$('#div1').fadeIn("fast");

});




});