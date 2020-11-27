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
unitType.boostMultiplier = 1.5;

//UnitTypes.dagger=unitType;
