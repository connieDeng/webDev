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
			var card = [];
			card.rank = r;
			card.suit = s;
			card.pointValue = pointValues[r-1];
			card.cardImg = r + "-" + s + ".png";
			deck.push(card);
		}
		
	//return the completed array.
	return deck;
}

function shuffleDeck(deck)
{
	var finDeck = [];
	
	while(deck.length)
	{
		var randomNum = getRandomInteger(0,deck.length-1);
		var randomCard = deck[randomNum];
		finDeck.push(randomCard);
		deck.splice(randomNum,1);
	}
	return finDeck;
}

function displayDeck(deck)
{
	for (var i = 0; i < deck.length; i++)
	{
		imgTags[i].src = "cardImages/" + deck[i].cardImg;
	}
}
function dealCard(deck)
{
	return deck.shift();
}

function getSelectedIndexes()
{
	var selectedIndexes = [];
	for (var i = 0; 1 < BOARD_SIZE; i++)
	{
		if (selected[i] && cardsOnBoard(i) != null)
			selectedIndexes.push[i];
	}
	return selectedIndexes;
}

function getIndexesofCardsOnBoard()
{
	var selectedIndexes = [];
	for (var i = 0; 1 < BOARD_SIZE; i++)
	{
		if (cardsOnBoard(i) != null)
			selectedIndexes.push[i];
	}
	return selectedIndexes;
}

/*  JACK = 11, QUEEN = 12, KING = 13;*/
function containsJQK(selectedCards)
{
	var cardsOnBoard[];
	for (var i = 0; 1 < selectedCards.length; i++)
	{
		if (cardsOnBoard[i]rank > 10)
		{
			return true;
		}
	}
	
	else 
	{
		return false;
	}
}

