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
	} catch (error) {
		console.error("Error fetching socks:" + error);
	}
	
    
};

function updateHTML(socks) {

	if(document.getElementById('data1')){
		document.getElementById('data1').innerHTML = "";
	}
    
	for (let i = 0; i < socks.length; i++) {
		let sock = socks[i];
		//Define table heading to append
		let sockDiv = document.createElement('tr');
		//Dynamically attach header
		sockDiv.innerHTML = `
			<td>${sock.sockDetails.size}</td>
			<td>${sock.sockDetails.color}</td>
			<td>${sock.sockDetails.pattern}</td>
			<td>${sock.sockDetails.material}</td>
			<td>${sock.sockDetails.condition}</td>
			<td>${sock.sockDetails.forFoot}</td>
		`;
		//Append to DOM
		document.getElementById('data1').appendChild(sockDiv);
	
	}
}

