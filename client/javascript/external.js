let counter = 1;

async function getData() {
	try {
		// Use fetch to retrieve data over the network from an API endpoint
		urlEndpoint = `https://ecs.the-sock-exchange.com/api/socks/${counter}/10`;
		const socks = await fetch(urlEndpoint).then(res => res.json());
		console.log("10 Records Fetched!")
		updateHTML(socks);  // Update HTML after data is fetched
		// console.log("i: "+counter);
		// console.log(urlEndpoint);
		counter++;

		// Modal when server response is empty (no more sock data)
		if(socks.length === 0){
			alert("No more socks to retrieve from server. Please restart!");
		}

	} catch (error) {
		console.error("Error fetching socks:" + error);
	}
};

function updateHTML(socks) {

	//Refresh header and body after clicking next
	if(document.getElementById('data1')){
		document.getElementById('data1').innerHTML = "";
		document.getElementById('data').innerHTML = "";
	}

	//Table header generation
	let headerDiv = document.createElement('tr');
	headerDiv.innerHTML = `
		<th scope="col">size</th>
		<th scope="col">color</th>
		<th scope="col">pattern</th>
		<th scope="col">material</th>
		<th scope="col">condition</th>
		<th scope="col">forFoot</th>
	`
	//Append header to DOM
	document.getElementById('data').appendChild(headerDiv);
    
	for (let i = 0; i < socks.length; i++) {
		let sock = socks[i];
		//Table body generation
		let sockDiv = document.createElement('tr');
		sockDiv.innerHTML = `
			<td>${sock.sockDetails.size}</td>
			<td>${sock.sockDetails.color}</td>
			<td>${sock.sockDetails.pattern}</td>
			<td>${sock.sockDetails.material}</td>
			<td>${sock.sockDetails.condition}</td>
			<td>${sock.sockDetails.forFoot}</td>
		`;
		//Append table body to DOM
		document.getElementById('data1').appendChild(sockDiv);
	}
}

