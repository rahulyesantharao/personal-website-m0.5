$(document).ready(function() {
	$("#about").hide();
	$("#projects").hide();
	$("#contact").hide();

	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	
	$("#homeNav").click(function() {
		  $("title").text("Rahul Yesantharao")
		  $(".page-title").text("rahul.y");
		  $("nav").removeClass();
		  $("nav").addClass("light-blue accent-3");
		  $(".logo-dot").css("color", "#00b0ff")
	      $("#home").fadeIn();
	      $("#about").hide();
	      $("#projects").hide();
	      $("#contact").hide();
	      $("footer").removeClass();
		  $("footer").addClass("light-blue accent-3 white-text");
	});

	$("#aboutNav").click(function() {
		  $("title").text("About | Rahul Yesantharao")
		  $(".page-title").text("about");
		  $("nav").removeClass();
		  $("nav").addClass("red darken-1");
		  $(".logo-dot").css("color", "#e53935")
	      $("#home").hide();
	      $("#about").fadeIn();
	      $("#projects").hide();
	      $("#contact").hide();
	      $("footer").removeClass();
		  $("footer").addClass("red darken-1 white-text");
	});

	$("#projectsNav").click(function() {
		  $("title").text("Projects | Rahul Yesantharao")
		  $(".page-title").text("projects");
	      $("nav").removeClass();
		  $("nav").addClass("green accent-4");
		  $(".logo-dot").css("color", "#00c864")
	      $("#home").hide();
	      $("#about").hide();
	      $("#projects").fadeIn();
	      $("#contact").hide();
	      $("footer").removeClass();
		  $("footer").addClass("green accent-4 white-text");
	});

	$("#contactNav").click(function() {
		  $("title").text("Contact | Rahul Yesantharao")
		  $(".page-title").text("contact");
	      $("nav").removeClass();
		  $("nav").addClass("yellow darken-2");
		  $(".logo-dot").css("color", "#fbc02d")
	      $("#home").hide();
	      $("#about").hide();
	      $("#projects").hide();
	      $("#contact").fadeIn();
	      $("footer").removeClass();
		  $("footer").addClass("yellow darken-2 white-text");
	});

	// modal code	
	// $("#modal_trigger1").leanModal({
	// 	dismissible: true,
	// 	opacity: 0.5,
	// 	in_duration: 300,
	// 	out_duration: 200,
	// 	ready: function() {
	// 		console.log("Modal 1 Opened");
	// 		$("#chapter_select").val("0");
	// 		$("#section_select option:gt(0)").remove();
	// 		$("#section_select").attr("disabled", "");
	// 	},
	// 	complete: function() {}
	// });
	$('.modal-trigger').leanModal();
	
	// USACO Training pages
	var sections = [5, 4, 4, 4, 5, 5];
	var problems = [
		[
			{"Submitting Solutions":"test", "Your Ride is Here":"ride", "Greedy Gift Givers":"gift1", "Friday the Thirteenth":"friday", "Broken Necklace":"beads"},
			{"Milking Cows":"milk2", "Transformations":"transform", "Name That Number":"namenum", "Palindromic Squares":"palsquare", "Dual Palindromes":"dualpal"},
			{"Mixing Milk":"milk", "Barn Repair":"barn1", "Prime Cryptarithm":"crypt1", "Combination Lock":"combo", "Wormholes":"wormhole", "Ski Course Design":"skidesign"},
			{"Arithmetic Progressions":"ariprog", "Mother's Milk":"milk3"},
			{"Number Triangles":"numtri", "Prime Palindromes":"pprime", "SuperPrime Rib":"sprime"}
		],
		[
			{"The Castle":"castle", "Ordered Fractions":"frac1", "Sorting A Three-Valued Sequence":"sort3", "Healthy Holsteins":"holstein", "Hamming Codes":"hamming"},
			{"Preface Numbering":"preface", "Subset Sums":"subset", "Runaround Numbers":"runround", "Party Lamps":"lamps"},
			{"The Longest Prefix":"prefix", "Cow Pedigrees":"nocows", "Zero Sum":"zerosum", "Money Systems":"money", "Controlling Companies":"concom"},
			{"The Tamworth Two":"ttwo", "Overfencing":"maze1", "Cow Tours":"cowtour", "Bessie Comes Home":"comehome", "Fractions to Decimals":"fracdec"}
		],
		[
			{"Agri-Net":"agrinet", "Score Inflation":"inflate", "Humble Numbers":"humble", "Contact":"contact", "Stamps":"stamps"},
			{"Factorials":"fact4", "Stringsobits":"kimbits", "Spinning Wheels":"spin", "Feed Ratios":"ratios", "Magic Squares":"msquare", "Sweet Butter":"butter"},
			{"Riding the Fences":"fence", "Shopping Offers":"shopping", "Camelot":"camelot", "Home on the Range":"range", "A Game":"game1"},
			{"American Heritage":"heritage", "Electric Fence":"fence9"}
		],
		[
			{"Beef McNuggets":"nuggets", "Fence Loops":"fence6"},
			{"Drainage Ditches":"ditch", "The Perfect Stall":"stall4", "Job Processing":"job"},
			{"Buy Low, Buy Lower":"buylow", "Street Race":"race3", "Letter Game":"lgame"},
			{"Shuttle":"shuttle", "Pollutant Control":"milk6", "Frame Up":"frameup"}				
		],
		[],
		[]
	];
	$("select").material_select();
	$("#chapter_select").on("change", function() {
		$("#usaco_sol").text("");
		var ch = $("#chapter_select option:selected").val();
		// console.log("Changed!");
		// console.log(ch);
		$("#section_select").removeAttr("disabled");
		$("#section_select option:gt(0)").remove();
		for (var i = 1; i <= sections[ch-1]; i++) {
			$("#section_select").append($("<option></option>").attr("value", i).text("Section " + i.toString()));
			// console.log("Added: value=" + i.toString() + ", text: Section " + i.toString());
		}
		$("#section_select")[0].selectedIndex=0;
		$("#section_select").material_select();
		$("#problem_select").attr("disabled", "true");
		$("#problem_select")[0].selectedIndex=0;
		$("#problem_select").material_select();
	});
	$("#section_select").on("change", function() {
		$("#usaco_sol").text("");
		var ch = $("#chapter_select option:selected").val();
		var sec = $("#section_select option:selected").val();

		$("#problem_select").removeAttr("disabled");
		$("#problem_select option:gt(0)").remove();
		$.each(problems[ch-1][sec-1], function(value, key) {
			$("#problem_select").append($("<option></option>").attr("value", key).text(value));
		});
		$("#problem_select")[0].selectedIndex=0;
		$("#problem_select").material_select();
	});
	$("#problem_select").on("change", function() {
		var ch = $("#chapter_select option:selected").val();
		var sec = $("#section_select option:selected").val();
		var prob = $("#problem_select option:selected").text();
		var filename = $("#problem_select option:selected").val();
		var url = "./resources/tp/Chapter "+ch.toString()+"/Section " + sec.toString() +"/"+prob+"/"+filename+".cpp";
		// console.log(url);
		// $("#usaco_sol").load(encodeURIComponent(url));
		$.ajax({
			async:true, // WHY?
			url: encodeURIComponent(url),
			dataType: "text",
			success: function(data) {
				$("#usaco_sol").text(data);
				Prism.highlightElement($("#usaco_sol")[0]/*, true, function() { console.log("highlighted!"); }*/);
			}
		});
		// Prism.highlightElement($('#usaco_sol')[0]);
		// $("usaco_sol").addClass("language-cpp");
		// Prism.highlightElement($("#usaco_sol")[0], false, function() { console.log("highlighted!"); });
	});

	// zerorobotics
	$.ajax({
		async:true, // WHY?
		url: encodeURIComponent("./resources/zr14.cpp"),
		dataType: "text",
		success: function(data) {
			$("#zr_code").text(data);
			Prism.highlightElement($("#zr_code")[0]/*, true, function() { console.log("highlighted!"); }*/);
		}
	});

	$('.slider').slider({full_width: true});
	// $('.materialboxed').materialbox();

	// ---------- CONTACT -----------------------------------------------------
	$("#contact_button").prop("disabled",true);
	$("#contact_button").addClass("disabled");
	// $("#contact_button").css("display","none");
	$("form").submit(function(event) {
		console.log("Picked up Submit!");
		// prevent submission
		event.preventDefault();
		// get form data
		var formData = {
			'contact_name'			: $("#contact_name").val(),
			'contact_email'			: $("#contact_email").val(),
			'contact_subject'		: $("#contact_subject").val(),
			'contact_message'		: $("#contact_message").val(),
			'g-recaptcha-response'	: grecaptcha.getResponse()
		};

		// submit form with ajax
		$.ajax({
			type: 'POST',
			url: $("form").attr('action'),
			data: formData,
			dataType: 'json',
			encode: true
		}).done(function(data) {
			grecaptcha.reset();
			$("#contact_button").prop("disabled",true);
			$("#contact_button").addClass("disabled");
			// $("#contact_button").css("display","none");
			$(".formMessage").empty();
			if(!data.success) {
				if(data.errors.contact_name) {
					$(".formMessage").append(data.errors.contact_name+"\n");
				}
				if(data.errors.contact_email) {
					$(".formMessage").append(data.errors.contact_email+"\n");
				}
				if(data.errors.contact_subject) {
					$(".formMessage").append(data.errors.contact_subject+"\n");
				}
				if(data.errors.contact_message) {
					$(".formMessage").append(data.errors.contact_message+"\n");
				}
				if(data.errors.email) {
					$(".formMessage").append(data.errors.email+"\n");
				}
				if(data.errors.request_type) {
					$(".formMessage").append(data.errors.request_type+"\n");
				}
				if(data.errors.recaptcha) {
					$(".formMessage").append(data.errors.recaptcha+"\n");	
				}
			} else {
				$("#contact_name").val("");
				$("#contact_email").val("");
				$("#contact_subject").val("");
				$("#contact_message").val("");
				$(".formMessage").text("Your message has been sent.  Thank you!");
			}
			console.log("DONE:");
			console.log(data);
		}).fail(function(data) {
			grecaptcha.reset();
			$("#contact_button").prop("disabled",true);
			$("#contact_button").addClass("disabled");
			// $("#contact_button").css("display","none");
			if(data.errors) {
				$(".formMessage").text(data.errors);
				$(".formMessage").text("Errors were returned");
			}
			else {
				$(".formMessage").html('An error occurred and your message could not be sent.  If the error persists, try emailing <a href="mailto:rahul@rahulyesantharao.com"> rahul@rahulyesantharao.com </a>');	
			}
			console.log("FAILED:");
			console.log(data);
		});
	});
});

function enableBtn() {
	$("#contact_button").prop("disabled",false);
	$("#contact_button").removeClass("disabled");
	// $("#contact_button").css("display","block");
}