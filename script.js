fris = 0;
bier = 0;
wijn = 0;
snack = 0;


function frisdrank(action1){
	if (action1 == 1) {fris++}
	else {if (fris == 0){
		console.log("no negative")
	}
		else {
			fris--
		}
	}
}

function bierdrank(action2){
	if (action2 == 1) {bier++}
	else {if (bier == 0){
		console.log("no negative")
	}
		else {
			bier--
		}
	}
}

function wijndrank(action3){
	if (action3 == 1) {wijn++}
	else {if (wijn == 0){
		console.log("no negative")
	}
		else {
			wijn--
		}
	}
}

function snackball(action4){
	if (action4 == 1) {snack = (snack + 8)}
	else {if (snack == 0){
		console.log("no negative")
	}
		else {
			snack = (snack + 8)
		}
	}
}

function current(){
	alert("huidige bestelling:\n Frisdrank: " + fris + "\n Bier: " + bier + "\n Wijn: " + wijn + "\n snack: " + snack)
}


function rekening(){

	if(fris == 0){
		console.log("geen bestelling")
	}

	else{
		alert("\nfrisdrank aantal: " + fris + "\nFrisdrank bedrag: €" + fris)
	}

/* bier */

	if(bier == 0){
		console.log("geen bestelling")
	}

	else{
		alert("\nbier aantal: " + bier + "\nbier bedrag: €" + bier)
	}

/* wijn */

	if(wijn == 0){
		console.log("geen bestelling")
	}

	else{
		alert("\nwijn aantal: " + wijn + "\nwijn bedrag: €" + wijn)
	}


	/* snack */

	if(snack == 0){
		console.log("geen bestelling")
	}

	else{
		alert("\nsnack aantal: " + snack + "\nsnack bedrag: €" + snack)
	}

/* totaal */

	alert("totaal bedrag: €" + (fris + bier + wijn + snack))

fris = 0;
bier = 0;
wijn = 0;
snack = 0;


}