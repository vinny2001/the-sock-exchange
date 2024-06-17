async function getData() {
    // Use fetch to retrieve data over the network from an API endpoint
	const socks = await fetch('http://localhost:3000/data/socks.json').then(res => res.json());
	updateHTML(socks);  // Update HTML after data is fetched
};

function updateHTML(socks) {
    // Now we are sure that socks is defined and contains the data
	document.querySelector('#size').innerHTML = 'Size: ' + socks.size;
	document.querySelector('#color').innerHTML = 'Color: ' + socks.color;
	document.querySelector('#pattern').innerHTML = 'Pattern: ' + socks.pattern;
	document.querySelector('#material').innerHTML = 'Material: ' + socks.material;
	document.querySelector('#condition').innerHTML = 'Condition: ' + socks.condition;
	document.querySelector('#forFoot').innerHTML = 'For Foot: ' + socks.forFoot;
    
}

// Call the function to fetch and update data
getData();
