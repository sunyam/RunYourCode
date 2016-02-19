// Calculating height of codeWindow
		var winH = $(window).height();
		var menH = $("#menuBar").height();
		var x = winH - menH;
		$(".codeContainer").height(x+"px");
	
		// Toggling
		$(".toggle").click( function() {
		
			$(this).toggleClass("selected");
			
			var activeDiv = $(this).html();
			
			$("#"+activeDiv+"Container").toggle();
			
			var showingDivs = $(".codeContainer").filter( function() {
									return($(this).css("display") != "none");
							}).length;
			
			var width = 100/showingDivs;
			$(".codeContainer").css("width", width + "%");
		
		});
		
		$("#runButton").click( function() {
		
			$("iframe").contents().find("html").html('<style>'+$("#csscode").val()+'</style>' +  $("#htmlcode").val());
		
		});
		

