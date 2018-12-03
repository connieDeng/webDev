REGULAR_CARD = 0, STUDENT_CARD = 1, UNLIMITED_CARD = 2;
NUM_TRIPS = 3;
RIDE_PRICE = 2.75;

/*
	Metrocard Constructor
	
	This function is called when a new Metrocard object is created.
	
	Parameters:
		type - what kind of card is being created.
	
	Properties
		cardType - The card can be a regular card, a student card, or an unlimited card.  This information comes from the "type" parameter.
		
		awaitingTransfer - When you use a regular card, a transfer to another line is automatically put on it.  When the card is created, this property should be set to false.
		
		cardBalance - Only regular cards have a balance.  The balance, regardless of the cardType, should start at 0.
		
		numTrips - Students get 3 trips a day.  If this card is a student card, the number of trips should be set to 3.  Otherwise, it should be set to 0.
*/
function Metrocard(type)
{
	/*******************************************************************************
								MEMBER VARIABLES
	*******************************************************************************/
			this.cardType = type;
			this.awaitingTransfer = false;
			this.cardBalance = 0;
			
			if (cardType == STUDENT_CARD)
			{
				this.numTrips == NUM_TRIPS;
			}
			else
			{
				this.numTrips == 0;
			}

	
	/*******************************************************************************
								MEMBER FUNCTIONS
	*******************************************************************************/
	
	/*
		addMoney
		
		Adds money to the card's balance ONLY if the card is a regular card AND if the amount specified is greater than or equal to 0.
		
		Paramaters:
			howmuch - the amount of money to be added.
	*/
	this.addMoney = function(howmuch)
	{
		if (this.cardType == REGULAR_CARD && howmuch >= 0)
		{
			this.cardBalance = this.cardBalance + howmuch;			
		}
 
	}
	
	/*
		resetTrips
		
		If the card is a student card, then the number of trips resets to 3.
	*/
	this.resetTrips() = function()
	{
		if (numTrips == 0 && this.cardType == STUDENT_CARD)
		{
			this.numTrips == NUM_TRIPS;
		}
	}
	
	/*
		toggleTransfer

		Changes whether or not there is a transfer on the card.
		
	*/
	this.toggleTransfer = function()
	{		
		this.awaitingTransfer = !awaitingTransfer;
	}
	
	/*
		recordStudentTrip
		
		First checks to see whether or not there is a transfer on the card.  If there is, then the trip is recorded successfully without taking a trip off of the card.  Otherwise, it removes one trip from the card ONLY if there are still trips left on the card.
		
		Returns:
			true if it was able to record the trip, false otherwise.
	*/
	this.recordStudentTrip = function()
	{
		if (this.awaitingTransfer == true)
		{
			return true;
		}
		
		if (this.awaitingTransfer == false)
		{
			this.numTrips = numTrips-1;
			
			if (this.numTrips == 0)
			{
				return false;
			}
			
				return true;
		}		
	}
	
	/*
		recordRegularTrip
		
		First checks to see whether or not there is a transfer on the card.  If there is, then the trip is recorded successfully without taking a money out of the balance.  Otherwise, it removes the amount of a trip from the card's balance ONLY if there is enough money to pay for the trip.
		
		Returns:
			true if it was able to record the trip, false otherwise.
	*/
	this.recordRegularTrip = function()
	{
		if (awaitingTransfer == false && cardBalance <= 0)
		{
			return this.false;
		}

		else 
		{
			cardBalance = cardBalance-RIDE_PRICE;
		}
	}
	
	/*
		recordTrip
		
		If the cardType is unlimited, then the trip is automatic.  Otherwise, this function calls and returns the value of the appropriate function based on card type.
		
		Returns:
			true if the card is unlimited, otherwise the value returned by the appropriate "record...Trip" function.
	*/
	this.recordTrip = function()
	{
	}
}