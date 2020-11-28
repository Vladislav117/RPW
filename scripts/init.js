var atrax=[UnitTypes.alpha, UnitTypes.beta, UnitTypes.flare, UnitTypes.gamma, UnitTypes.horizon, UnitTypes.mono, UnitTypes.poly]
var arkyid=[UnitTypes.mega, UnitTypes.zenith]
var toxopid=[UnitTypes.eclipse,UnitTypes.oct,UnitTypes.quad,UnitTypes.antumbra]
var to5size=[UnitTypes.eclipse,UnitTypes.oct,UnitTypes.antumbra]
var index;
var unitType;
var legCount, legGroupSize, legLength, legSpeed,
                                legTrns, legBaseOffset, legMoveSpace, legExtension,
                                legPairOffset, legLengthScl, kinematicScl, maxStretch,
                                legSplashDamage, legSplashRange, visualElevation,groundLayer,
                                rippleScale, speed,landShake,drag;
/*function unitTypeEdit(legCount = 4, legGroupSize = 2, legLength = 10.0, legSpeed = 0.1,+
                                legTrns = 1.0, legBaseOffset = 0.0, legMoveSpace = 1.0, legExtension = 0.0,+
                                legPairOffset = 0.0, legLengthScl = 1.0, kinematicScl = 1.0, maxStretch = 1.75+
                                legSplashDamage = 0.0, legSplashRange = 5.0, visualElevation = -1,groundLayer = 60.0+
                                rippleScale = 1.0, speed = 1.1
*/
function reset(){
  legCount = 4;
  legGroupSize = 2;
  legLength = 10.0;
  legSpeed = 0.1;
  legTrns = 1.0;
  legBaseOffset = 0.0;
  legMoveSpace = 1.0;
  legExtension = 0.0;
  legPairOffset = 0.0;
  legLengthScl = 1.0;
  kinematicScl = 1.0;
  maxStretch = 1.75;
  legSplashDamage = 0.0;
  legSplashRange = 5.0;
  visualElevation = -1;
  groundLayer = 60.0;
  rippleScale = 1.0;
  speed = 1.1;
  landShake=0.0;
  drag=0.3;
}
reset()
function unitTypeEdit() {
  if (unitType.constructor.get() instanceof Builderc) unitType.constructor=EntityMapping.map("BuilderLegsUnit"); else unitType.constructor=EntityMapping.map("LegsUnit");
  unitType.legCount = legCount;
  unitType.legGroupSize = legGroupSize;
  unitType.legLength = legLength;
  unitType.legSpeed = legSpeed;
  unitType.legTrns = legTrns;
  unitType.legBaseOffset = legBaseOffset;
  unitType.legMoveSpace = legMoveSpace;
  unitType.legExtension = legExtension;
  unitType.legPairOffset = legPairOffset;
  unitType.legLengthScl = legLengthScl;
  unitType.legSplashDamage = legSplashDamage;
  unitType.legSplashRange = legSplashRange;
  unitType.hovering = true;
  unitType.allowLegStep = true;
  unitType.visualElevation = visualElevation;
  unitType.groundLayer = groundLayer;
  reset()
}
for (index = 0; index < atrax.length; ++index) {
    unitType=atrax[index]
    drag=0.4;
    legCount = 4; legLength = 9.0; legSpeed = unitType.speed; legTrns = 0.6; legMoveSpace = 1.4; visualElevation = 0.2; groundLayer = 74.0; legLengthScl = 1;
    unitTypeEdit();

}
for (index = 0; index < arkyid.length; ++index) {
    unitType=arkyid[index]
    drag=0.1;
    legCount = 7; legMoveSpace = 1.0; legPairOffset = 8.0; legLength = 30.0;
    legExtension = -15.0; legBaseOffset = 4.0; landShake = 1.0; legSpeed = 0.1;
    legLengthScl = 0.96; rippleScale = 2.0; legSpeed = unitType.speed; legSplashDamage = 32.0;
    legSplashRange = 30.0; visualElevation = 0.65; groundLayer = 75.0;
    unitTypeEdit();
}
for (index = 0; index < toxopid.length; ++index) {
    unitType=toxopid[index]
    drag=0.1;
    legCount = 10; legMoveSpace = 0.8; legPairOffset = 3.0; legLength = 75.0;
    legExtension = -20.0; legBaseOffset = 8.0; landShake = 1.0; legSpeed = 0.1;
    legLengthScl = 0.93; rippleScale = 3.0; legSpeed = unitType.speed; legSplashDamage = 80.0;
    legSplashRange = 60.0; visualElevation = 0.95; groundLayer = 75.0;
    unitTypeEdit();
}
for (index = 0; index < to5size.length; ++index) {
    unitType=to5size[index]
    drag=0.1;
    legCount = 12; legMoveSpace = 0.8; legPairOffset = 10.0; legLength = 75.0;
    legExtension = -20.0; legBaseOffset = 16.0; landShake = 1.5; legSpeed = 0.1;
    legLengthScl = 0.93; rippleScale = 4.0; legSpeed = unitType.speed; legSplashDamage = 80.0;
    legSplashRange = 60.0; visualElevation = 0.95; groundLayer = 75.0;
    unitTypeEdit();
}

UnitTypes.antumbra.legBaseOffset=26
UnitTypes.oct.legBaseOffset=22
UnitTypes.eclipse.legBaseOffset=14
