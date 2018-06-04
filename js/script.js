document.getElementById('employees').onclick = function(event)
{
    document.getElementById('teams').classList.remove("active");
    document.getElementById('awards').classList.remove("active");
    this.classList.add("active");
    document.getElementById('h2').innerHTML = "Please select the employees you wish to tag.";
 	document.getElementById('h5').innerHTML = "Tip: You can filter the employees displayed using the filters on the side.";
}

document.getElementById('addTeam').onclick = function(event)
{
	document.getElementById('teams').classList.add("active");
	document.getElementById('employees').classList.remove("active");
	document.getElementById('teams').classList.remove("disabled");
	document.getElementById('h2').innerHTML = "Please select the team of selected employee/s.";
 	document.getElementById('h5').innerHTML = "Tip: You can select multiple teams.";
 	document.getElementById('teamsContent').style.display = "block";
 	document.getElementById('employeesContent').style.display = "none";
 	document.getElementById('addTeam').style.display = "none";
}

function filterResult() {
	if (document.getElementById('cle').checked) {
	document.getElementById('steph').style.display = "none";
	document.getElementById('durant').style.display = "none";
	document.getElementById('klay').style.display = "none";
	}
	else
	{
		document.getElementById('steph').style.display = "block";
		document.getElementById('durant').style.display = "block";
		document.getElementById('klay').style.display = "block";
	}
}

/*document.getElementById('teams').onclick = function(event)
{
 	document.getElementById('employees').classList.remove("active");
 	document.getElementById('awards').classList.remove("active");
 	this.classList.add("active");
 	this.classList.remove("disabled");
 	
}*/

/*document.getElementById('awards').onclick = function(event)
{
    
    document.getElementById('employees').classList.remove("active");
    document.getElementById('teams').classList.remove("active");
    this.classList.add("active");
    document.getElementById('h2').innerHTML = "Please select the awards tag of selected employee/s.";
 	document.getElementById('h5').innerHTML = "Tip: You can select multiple tags.";
}*/