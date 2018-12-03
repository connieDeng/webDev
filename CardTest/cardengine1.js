//CONSTANTS
ACE = 1, JACK = 11, QUEEN = 12, KING = 13;
CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3;

/*
	generateStandardDeck
	
	Creates a deck of standard playing cards as an array.
	
	returns
		The deck of cards
*/
function generateStandardDeck()
{
	//The deck starts as an empty array.
	var deck = [];
	
	/*
		A double for loop will create all 52 cards, running the 13 ranks each 4 times for the suits.
	*/
	for (var r = ACE; r <= KING; r++)
		for (var s = CLUB; s <= SPADE; s++)
		{
			/*
				By declaring the card as an empty object, we can begin to create member variables (rank, suit, and cardImg) dynamically, assigning them values on the fly.
				
				Each call to new Object() creates a new object in card so that the loop creates 52 individual cards.
			*/
			var card = [];
			card.rank = r;
			card.suit = s;
			card.cardImg = r + "-" + s + ".png";
			deck.push(card);
		}
		
	//return the completed array.
	return deck;
}

function generateDeckWithPointValues(pointValues)
{
	//The deck starts as an empty array.
	var deck = [];
	if (pointValues.length != 13)
		return deck;
	/*
		A double for loop will create all 52 cards, running the 13 ranks each 4 times for the suits.
	*/
	for (var r = ACE; r <= KING; r++)
		for (var s = CLUB; s <= SPADE; s++)
		{
			/*
				By declaring the card as an empty object, we can begin to create member variables (rank, suit, and cardImg) dynamically, assigning them values on the fly.
				
				Each call to new Object() creates a new object in card so that the loop creates 52 individual cards.
			*/
			var card = new Object();
			card.rank = r;
			card.suit = s;
			card.pointValue = pointValues[r-1];
			card.cardImg = r + "-" + s + ".png";
			deck.push(card);
		}
		
	//return the completed array.
	return deck;
}

function getRandomInteger (low,high)
{
	if (low > high)
	{
		temp=low;
		low=high;
		high=temp;
	}
	options = high-low + 1;
	return parseInt(Math.random()*(options))+ low;
}

function dealCard(deck)
{
	return deck.shift();
}

function shuffleDeck(deck)	
{
	var shuffledDeck = [];
	while(0 < deck.length)
{
	var index = getRandomInteger(0, deck.length - 1);
	var newDeck = deck.splice(index,1);
	shuffledDeck.push(newDeck[0]);
}
	return shuffledDeck;
}

function replaceCard(index)
{
	var theTD = jBoard.cells[index];
		if(myDeck.length > 0)
		{
			cardsOnBoard[index] = dealCard(myDeck);
			theTD.innerHTML = "<img src = 'cardimages/" + cardsOnBoard[index].cardImg + "' />";
		}
		
		else
		{
			cardsOnBoard[index] = null;
			theTD.innerHTML = "<img src = 'cardimages/back-blue-75-1.png' />";
		}
		
	selectUnselect(theTD);
}

function selectUnselect(tD)
{
	for (var i = 0; i < jBoard.cells.length; i++)
	{
		if (jBoard.cells[i] == tD)
		{
			selected[i] = !selected[i];

			if (selected[i])
				tD.style.border = "thick solid green";
			else
				tD.style.border = "none";
			return;
		}
	}
}








