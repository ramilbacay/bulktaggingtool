document.getElementById('employees').onclick = function(event)
{
    document.getElementById('teams').classList.remove("active");
    document.getElementById('awards').classList.remove("active");
    this.classList.add("active");
    document.getElementById('h2').innerHTML = "Please select the employees you wish to tag.";
 	document.getElementById('h5').innerHTML = "Tip: You can filter the employees displayed using the filters on the side.";
}

document.getElementById('teams').onclick = function(event)
{
 	document.getElementById('employees').classList.remove("active");
 	document.getElementById('awards').classList.remove("active");
 	this.classList.add("active");
 	this.classList.remove("disabled");
 	document.getElementById('h2').innerHTML = "Please select the team of selected employee/s.";
 	document.getElementById('h5').innerHTML = "Tip: You can select multiple teams.";
}

document.getElementById('awards').onclick = function(event)
{
    
    document.getElementById('employees').classList.remove("active");
    document.getElementById('teams').classList.remove("active");
    this.classList.add("active");
    document.getElementById('h2').innerHTML = "Please select the awards tag of selected employee/s.";
 	document.getElementById('h5').innerHTML = "Tip: You can select multiple tags.";
}