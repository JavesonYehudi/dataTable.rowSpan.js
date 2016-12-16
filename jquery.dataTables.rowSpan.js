(function ($) {
    $.fn.rowSpan = function () {
    	drawTable($(this));

		this.on( 'draw.dt', function () {
		    drawTable($(this));
		} );

		function drawTable(table){
			var columnsRowGroup = [];

			var i = 0;
			$(table).find(".has-rowspan").each(function(){
				columnsRowGroup[i] = $(this).index();
				i++;
			})

			$(table).find("tbody").find("tr").each(function(){
				var identificador = $($(this).find("td")[0]).html().toLowerCase().replace(/ /g, '_');
				$(this).attr("data-identificador", identificador);
			});

			$(table).find("tbody").find("td").each(function(){
				var identificador = $(this).parents("tr").attr("data-identificador");
				$(this).attr("rowspan", 0);
				$(this).show();
				$(this).attr("data-identificador", "td".concat(identificador));
			});

			
			var trUpper = null;
			var rowSpan = 1
			$(table).find("tbody").find("tr").each(function(index){
				if(trUpper != null)
					var trUpperIdentificador = $(trUpper).attr("data-identificador");
				
				var thisIdentificador = $(this).attr("data-identificador");
				if(trUpperIdentificador == thisIdentificador){
					rowSpan++;
					for(i = 0; i < columnsRowGroup.length; i++){
						var trUpperValue = $($(trUpper).find("td")[columnsRowGroup[i]]).html().toLowerCase().replace(/ /g, '').trim();
						var thisValue = $($(this).find("td")[columnsRowGroup[i]]).html().toLowerCase().replace(/ /g, '').trim();
						if(trUpperValue == thisValue){
							$($(trUpper).find("td")[columnsRowGroup[i]]).attr("rowspan", rowSpan);
							$($(this).find("td")[columnsRowGroup[i]]).hide();
						}
					}
				}else{
					trUpper = $(this);
					rowSpan = 1;
				}
			});
		}
    }
})(jQuery);