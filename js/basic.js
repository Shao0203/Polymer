$(function() {

	$('.delete').click(function() {
		confirm("Are you sure to delete it?");
	});

	var checks = document.getElementsByTagName("paper-checkbox");
	var flag = false;
	checks[0].onclick = function ()	{
		if (!flag) {
			for (var i = 1; i < checks.length; i++)	{
				checks[i].checked = true;
				flag = true;
			} 
		} else if (flag) {
			for (var i = 1; i < checks.length; i++)	{
				checks[i].checked = false;
				flag = false;
			}
		}
	}

});
