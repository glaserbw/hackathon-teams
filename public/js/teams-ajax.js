$(document).ready(function() {
	$(".delete-link").click(function(e){
		e.preventDefault();
 		$.ajax({
			method: "DELETE",
			url: $(this).attr("href")
		}).done(function(response){
			console.log("delete attempted");
			window.location.href = "/teams";
		});
	});

	$(".edit-form").submit(function(e){
		e.preventDefault();
 		$.ajax({
			method: "PUT",
			url: $(this).attr("action"),
			data: {
				name: $("#new-name").val(),
				members: $("#members").val()
			}
		}).done(function(response){
			console.log("promise successful");
			window.location.href = "/teams";
		});
	});
});
