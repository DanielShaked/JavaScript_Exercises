function guessCity(capital, coastal, famous, ancient) {
	if (capital && !coastal && famous && ancient) {
		console.log("The city is Jerusalem!");
	} else if (!capital && coastal && famous && !ancient) {
		console.log("The city is Tel Aviv!");
	} else if (!capital && coastal && !famous && ancient) {
		console.log("The city is Acre!");
	} else if (!capital && !coastal && !famous && ancient) {
		console.log("The city is ktzrin!");
	} else if (!capital && coastal && !famous && !ancient) {
		console.log("The city is Zikim!");
	} else if (!capital && !coastal && !famous && !ancient) {
		console.log("The city is Musmus!");
	}
}

guessCity(false, true, true, false);
