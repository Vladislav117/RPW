var coresArray=[
Blocks.coreShard,
Blocks.coreFoundation,
Blocks.coreNucleus,
]
coresArray.forEach(function(entry) {
    entry.solid=false;
});
var unitType=UnitTypes.dagger;
unitType.mineTier=1;
unitType.mineSpeed = 6.5;
unitType.buildSpeed=5;
unitType.stats=new Stats();
unitType.setStats();
unitType.canBoost = true;
<<<<<<< HEAD
unitType.boostMultiplier = 1.5;
=======
unitType.boostMultiplier = 1.5f;
>>>>>>> 427b8154cfcdbcbc9b0a03c9a5253daae8f379f6

//UnitTypes.dagger=unitType;
