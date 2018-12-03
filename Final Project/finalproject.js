function newGame()
{
	//character stats
	level = 1;
	atk = 5;
	def = 5;
	speed = 5;
	health = 50;
	xp = 0;
	statPoints = 0;
	gold = 0;
	ownedWS = 0;
	ownedSS = 0;
	ownedIS = 0;
	ownedGS = 0;
	ownedDS = 0;
	eItem = "None";
	
	localStorage.mLevel = level;
	localStorage.mAtk = atk;
	localStorage.mDef = def;
	localStorage.mSpeed = speed;
	localStorage.mHealth = health;
	localStorage.mXp = xp;
	localStorage.mStatPoints = statPoints;
	localStorage.mGold = gold;
	localStorage.ownedWS = ownedWS;
	localStorage.ownedSS = ownedSS;
	localStorage.ownedIS = ownedIS;
	localStorage.ownedGS = ownedGS;
	localStorage.ownedDS = ownedDS;
	localStorage.eItem = eItem;
}
//save system
function loadGame()
{
	level = localStorage.mLevel;
	atk = localStorage.mAtk;
	def = localStorage.mDef;
	speed = localStorage.mSpeed;
	health = localStorage.mHealth;
	xp = localStorage.mXp;
	statPoints = localStorage.mStatPoints;
	gold = localStorage.mGold;
	ownedWS = localStorage.ownedWS;
	ownedSS = localStorage.ownedSS;
	ownedIS = localStorage.ownedIS;
	ownedGS = localStorage.ownedGS;
	ownedDS = localStorage.ownedDS;
	eItem = localStorage.eItem;
}
function saveGame()
{
	localStorage.mLevel = level;
	localStorage.mAtk = atk;
	localStorage.mDef = def;
	localStorage.mSpeed = speed;
	localStorage.mHealth = health;
	localStorage.mXp = xp
	localStorage.mStatPoints = statPoints;
	localStorage.mGold = gold;
	localStorage.ownedWS = ownedWS;
	localStorage.ownedSS = ownedSS;
	localStorage.ownedIS = ownedIS;
	localStorage.ownedGS = ownedGS;
	localStorage.ownedDS = ownedDS;
	localStorage.eItem = eItem;
}
//battle system
function attack()
{
	if(curEHealth > 0 && curHealth > 0)
	{
		if(speed > eSpeed)
		{	
			curEHealth = curEHealth - (atk - Math.round(eDef / 2));
			if(curEHealth < 1)
			{
				gStatus = "Victory"
			}
			else
			{
				curHealth = curHealth - (eAtk - Math.round(def/2));
				if(curHealth < 1)
				{
					gStatus = "Defeat";
				}
			}
		}
		else
		{
			curHealth = curHealth - (eAtk - Math.round(def/2));
			if(curHealth < 1)
			{
				gStatus = "Defeat";
			}
			else
			{
				curEHealth = curEHealth - (atk - Math.round(eDef / 2));
				if(curEHealth < 1)
				{
					gStatus = "Victory"
				}
			}
		}
	}
	if(curHealth > health)
	{
		curHealth = health;
	}
	if(curEHealth > eHealth)
	{
		curEHealth = eHealth;
	}
	if(curHealth < 0)
	{
		curHealth = 0;
	}
	if(curEHealth < 0)
	{
		curEHealth = 0;
	}
	if(gStatus == "Victory")
	{
		xp = parseInt(xp) + (50 * parseInt(eLvl));
		gold = parseInt(gold) + (10 * parseInt(eLvl));
	}
	levelUp();
	display();
}
//xp system
function levelUp()
{
	needXp = 50 + (50 * parseInt(level));
	if(needXp <= xp)
	{
		needXp = parseInt(needXp) + 100;
		xp = 0;
		level = parseInt(level) + 1;
		statPoints = parseInt(statPoints) + 3;
	}
}
//stats
function increaseHealth()
{
	if(statPoints >= 1)
	{
		health = parseInt(health) + 4;
		statPoints = parseInt(statPoints) - 1;
	}
	display();
}
function increaseAtk()
{
	if(statPoints >= 1)
	{
		atk = parseInt(atk) + 1;
		statPoints = parseInt(statPoints) - 1;
	}
	display();
}
function increaseDef()
{
	if(statPoints >= 1)
	{
		def = parseInt(def) + 1;
		statPoints = parseInt(statPoints) - 1;
	}
	display();
}
function increaseSpeed()
{
	if(statPoints >= 1)
	{
		speed = parseInt(speed) + 1;
		statPoints = parseInt(statPoints) - 1;
	}
	display();
}
//buying weapons
function buyWS()
{
	if(gold >= 50)
	{
		if(ownedWS < 1)
		{
			ownedWS = parseInt(ownedWS) + 1;
			gold = parseInt(gold) - 50;
		}
	}
}
function buySS()
{
	if(gold >= 200)
	{
		if(ownedSS < 1)
		{
			ownedSS = parseInt(ownedSS) + 1;
			gold = parseInt(gold) - 200;
		}
	}
}
function buyIS()
{
	if(gold >= 500)
	{
		if(ownedIS < 1)
		{
			ownedIS = parseInt(ownedIS) + 1;
			gold = parseInt(gold) - 500;
		}
	}
}
function buyGS()
{
	if(gold >= 1000)
	{
		if(ownedGS < 1)
		{
			ownedGS = parseInt(ownedGS) + 1;
			gold = parseInt(gold) - 1000;
		}
	}
}
function buyDS()
{
	if(gold >= 2000)
	{
		if(ownedDS < 1)
		{
			ownedDS = parseInt(ownedDS) + 1;
			gold = parseInt(gold) - 2000;
		}
	}
}
function equipItem(item)
{
	if(eItem == "None")
	{
		eItem = item;
		if(eItem == woodSword)
			atk = parseInt(atk) + 2;
		if(eItem == stoneSword)
			atk = parseInt(atk) + 5;
		if(eItem == ironSword)
			atk = parseInt(atk) + 10;
		if(eItem == goldSword)
			atk = parseInt(atk) + 25;
		if(eItem == diamondSword)
			atk = parseInt(atk) + 50;
	}
	display();
}
function unEquip()
{
		if(eItem == woodSword)
			atk = parseInt(atk) - 2;
		if(eItem == stoneSword)
			atk = parseInt(atk) - 5;
		if(eItem == ironSword)
			atk = parseInt(atk) - 10;
		if(eItem == goldSword)
			atk = parseInt(atk) - 25;
		if(eItem == diamondSword)
			atk = parseInt(atk) - 50;
	eItem = "None";
	display();
}