async function getData() {
    // Use fetch to retrieve data over the network from an API endpoint
	const socks = await fetch('http://localhost:3000/data/socks.json').then(res => res.json());
	updateHTML(socks);  // Update HTML after data is fetched
};

function updateHTML(socks) {
    
	for (let i = 0; i < socks.length; i++) {
		let sock = socks[i];
		//Define table heading to append
		let sockDiv = document.createElement('tr');
		//Dynamically attach header
		sockDiv.innerHTML = `
							<td>${sock.size}</td>
							<td>${sock.color}</td>
							<td>${sock.pattern}</td>
							<td>${sock.material}</td>
							<td>${sock.condition}</td>
							<td>${sock.forFoot}</td>`;
		//Append to DOM
		document.getElementById('data1').appendChild(sockDiv);
	
	}
}

// Call the function to fetch and update data
getData();
