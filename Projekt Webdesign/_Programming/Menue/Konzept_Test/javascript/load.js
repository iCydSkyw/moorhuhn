/**
 * @author kleinm
 */

function main () {
//Schriftzug "Moorhuhn" wird animiert
//ich baue eine delay funktion ein aus folgendem Grund:
//Ich habe die M�glichkeit in animate einen delay zu platzieren, dadurch wird die animation allerdings tr�ge und undynamisch
//Mit der delay() funktion verhindere ich das
	$("#M").delay(1550).animate({
	"marginLeft": "+=150"
	});

	$("#O1").delay(1350).animate({
	"marginLeft": "+=219"
	});

	$("#O2").delay(1150).animate({
	"marginLeft": "+=273"
	});

	$("#R").delay(950).animate({
	"marginLeft": "+=331"
	});

	$("#H").delay(750).animate({
	"marginLeft": "+=381"
	});

	$("#U").delay(550).animate({
	"marginLeft": "+=430"
	});

	$("#H2").delay(350).animate({
	"marginLeft": "+=480"
	});
	
	$("#N").delay(150).animate({
	"marginLeft": "+=530"
	});


//Sch�sse mit einem delay anzeigen (erst nachdem der "Moorhuhn"-Schriftzug im Bild ist)
	$("#sg1").delay(1000).show();
	$("#sg2").delay(1000).fadeIn();
	$("#sg3").delay(1000).fadeIn();
	$("#sk1").delay(1000).fadeIn();
	
//Moorhuhn-Bild animieren
	$("#huhn").delay(1000).show();
 

}