EXPIRATION_TIME = 7200000;		//2 hours
NO_RIDE = -1, BUS = 0, TRAIN = 1;
RIDE_TYPE_STRING = ["Bus", "Train"];

function Transfer()
{
	this.activeDate = null;
	this.rideType = NO_RIDE;
	
	/*
		activateTransfer
		
		Activates the transfer by:
			Setting the activeDate object to the current date and time
			Setting the rideType to the kind of transportation the rider is transferring from.
		
		Parameters:
			transferFrom - the type of transportation the rider is transferring from.
	*/
	this.activateTransfer = function(transferFrom)
	{
		this.activeDate = new Date();
		this.rideType = transferFrom;
	}

	/*
		isExpired
		
		Determines whether or not the transfer is expired.
		
		Returns
			true if expired
				there is no active date (null) OR the transfer has been active for 2 or more hours.
			false otherwise.
	*/
	this.isExpired = function()
	{
		if (this.activeDate == null || this.activeDate - new Date() > EXPIRATION_TIME)
		{
			return true;
		}
		
		return false;
	}
	
	/*
		useTransfer

		Checks to see whether or not the transfer is expired (no ride given)
		
		Checks to make sure that the ride is legitimate, either BUS to BUS, BUS to TRAIN, or TRAIN to BUS (otherwise no ride given)
		
		If the ride is given it deactivates the rideDate (sets it to null) and changes the rideType (NO_RIDE).
		
		Parameters:
			transferTo - the type of transportation the rider is transferring to.
		
		Returns
			true if the transfer is successfully used.
			false otherwise.
	*/
	this.useTransfer = function(transferTo)
	{
		if (!this.isExpired && (this.rideType != TRAIN && transferTo != TRAIN))
		{
			this.activeDate = null;
			this.rideType = NO_RIDE;
			
			return true;
		}
		
		return false;
	}
	
	/*
		toString
	*/
	this.toString = function()
	{
		if (this.activeDate == null)
			return "Inactive transfer";
		
		var d = new Date(this.activeDate.getTime() + EXPIRATION_TIME);
		return "You have an active transfer from a " + RIDE_TYPE_STRING[this.rideType] + " that expires on " + d.toString();
	}
}