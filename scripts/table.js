var BLOCKS_NAMES=["table"];
function has(name){
  for (let s of BLOCKS_NAMES){
    if (name.includes(s))return true;
  }
  return false;
}
Events.on(ClientLoadEvent,event=>{
    Vars.content.blocks().each(block=>{

        if (!has(block.name))return;
        if (!(block instanceof Wall))return;
        //print(block.name+" rotatadle");
        var regionLight = Core.atlas.find(block.name+"-light-0");
        var regionDark = Core.atlas.find(block.name+"-dark-0");
        var regionLight1 = Core.atlas.find(block.name+"-light-1");
        var regionDark1 = Core.atlas.find(block.name+"-dark-1");
        var regionLight2 = Core.atlas.find(block.name+"-light-2");
        var regionDark2 = Core.atlas.find(block.name+"-dark-2");
        block.buildType = () => extend(Building,{
          unit(){
            this.super$init();
          },
          draw(){
              function isNull(build){
                return (build==null || build.block!=block);
              }
              if (block.variants == 0) {
                Draw.rect(block.region, this.x, this.y);
              } else {
                Draw.rect(block.variantRegions[Mathf.randomSeed(this.tile.pos(), 0, Math.max(0, block.variantRegions.length - 1))], this.x, this.y);
              }
              var
                b_1f0=isNull(this.nearby(-1,0)),
                b_1f_1=isNull(this.nearby(-1,-1)),
                b0f_1=isNull(this.nearby(0,-1)),
                b1f_1=isNull(this.nearby(1,-1)),
                b1f0=isNull(this.nearby(1,0)),
                b1f1=isNull(this.nearby(1,1)),
                b0f1=isNull(this.nearby(0,1)),
                b_1f1=isNull(this.nearby(-1,1))
              if (b_1f0) {
                if (b0f1 && b0f_1){
                  Draw.rect(regionDark, this.x, this.y,0);
                } else if(!b0f1 && !b0f_1 && b_1f1 && b_1f_1) {
                  Draw.rect(regionDark2, this.x, this.y,0);
                } else if(!b0f1 && b_1f1) {
                  Draw.rect(regionDark1, this.x, this.y,0);
                } else if(!b0f_1 && b_1f_1) {
                  regionDark1.flip(false,true);
                  Draw.rect(regionDark1, this.x, this.y,0);
                  regionDark1.flip(false,true);
                }else {
                  Draw.rect(regionDark, this.x, this.y,0);
                }
              }
              if (b0f_1){
                if (b1f0 && b_1f0){
                  regionDark.flip(true,false);
                  Draw.rect(regionDark, this.x, this.y,3*90);
                    regionDark.flip(true,false);

                } else if(!b1f0 && !b_1f0 && b1f_1 && b_1f_1) {
                regionDark2.flip(true,false);
                  Draw.rect(regionDark2, this.x, this.y,3*90);
                  regionDark2.flip(true,false);

                } else if(!b1f0 && b1f_1) {
                regionDark1.flip(true,false);
                  Draw.rect(regionDark1, this.x, this.y,3*90);
                  regionDark1.flip(true,false);

                } else if(!b_1f0 && b_1f_1) {
                  regionDark1.flip(true,true);
                  Draw.rect(regionDark1, this.x, this.y,3*90);
                  regionDark1.flip(true,true);

                }else {
                regionDark.flip(true,false);
                  Draw.rect(regionDark, this.x, this.y,3*90);
                  regionDark.flip(true,false);
                }
              }
              if (b1f0) {
                if (b0f_1 && b0f1){
                  Draw.rect(regionLight, this.x, this.y,0);
                } else if(!b0f1 && !b0f_1 && b1f1 && b1f_1) {
                  Draw.rect(regionLight2, this.x, this.y,0);
                } else if(!b0f1 && b1f1) {
                  Draw.rect(regionLight1, this.x, this.y,0);
                } else if(!b0f_1 && b1f_1) {
                  regionLight1.flip(false,true);
                  Draw.rect(regionLight1, this.x, this.y,0);
                  regionLight1.flip(false,true);
                }else {
                  Draw.rect(regionLight, this.x, this.y,0);
                }
              };
              if (b0f1){
                if (b1f0 && b_1f0){
                  regionLight.flip(true,false);
                  Draw.rect(regionLight, this.x, this.y,3*90);
                    regionLight.flip(true,false);

                } else if(!b1f0 && !b_1f0 && b1f1 && b_1f1) {
                regionLight2.flip(true,false);
                  Draw.rect(regionLight2, this.x, this.y,3*90);
                  regionLight2.flip(true,false);

                } else if(!b1f0 && b1f1) {
                regionLight1.flip(true,false);
                  Draw.rect(regionLight1, this.x, this.y,3*90);
                  regionLight1.flip(true,false);

                } else if(!b_1f0 && b_1f1) {
                  regionLight1.flip(true,true);
                  Draw.rect(regionLight1, this.x, this.y,3*90);
                  regionLight1.flip(true,true);

                }else {
                regionLight.flip(true,false);
                  Draw.rect(regionLight, this.x, this.y,3*90);
                  regionLight.flip(true,false);
                }
              }
          }
        });
    })
});
