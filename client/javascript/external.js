async function getData() {
    // Use fetch to retrieve data over the network from an API endpoint
	const socks = await fetch('http://localhost:3000/data/socks.json').then(res => res.json());
	updateHTML(socks);  // Update HTML after data is fetched
};

function updateHTML(socks) {
	for (let i = 0; i < socks.length; i++) {
		let sock = socks[i];
		let sockDiv = document.createElement('div');
		sockDiv.innerHTML = `<div>Color: ${sock.color}</div><div>Size: ${sock.size}</div>`;
		document.getElementById('data').appendChild(sockDiv);
	}
}

// Call the function to fetch and update data
getData();
