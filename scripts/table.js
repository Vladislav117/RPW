var TABLE_NAME="table";
Events.on(ClientLoadEvent,event=>{
  Core.atlas.getRegions().each(region=>{
    print(region.name);
  });
    Vars.content.blocks().each(block=>{
        if (!(block.name.includes(TABLE_NAME)))return;
        if (!(block instanceof Wall))return;
        //print(block.name+" rotatadle");
        block.buildType = () => extend(Building,{
          unit(){
            this.super$init();
          },
          draw(){
              function isNull(build){
                return (build==null || build.block!=block);
              }
              var region_;
              if (block.variants == 0) {
                  region_=block.region;
              } else {
                  region_=block.variantRegions[Mathf.randomSeed(this.tile.pos(), 0, Math.max(0, block.variantRegions.length - 1))];
              }
              //var regionLight = Core.atlas.find(block.name+"-light-1");
              //var regionDark = Core.atlas.find(block.name+"-dark-1");
              var regionLight = Core.atlas.find(block.name+"-light-0");
              var regionDark = Core.atlas.find(block.name+"-dark-0");
              var regionLight1 = Core.atlas.find(block.name+"-light-1");
              var regionDark1 = Core.atlas.find(block.name+"-dark-1");
              var regionLight2 = Core.atlas.find(block.name+"-light-2");
              var regionDark2 = Core.atlas.find(block.name+"-dark-2");
              Draw.rect(region_, this.x, this.y);
              var nota=block.buildType.get();
              if (isNull(this.nearby(-1,0))) {
                if (isNull(this.nearby(0,1)) && isNull(this.nearby(0,-1))){
                  Draw.rect(regionDark, this.x, this.y,0);
                } else if(!isNull(this.nearby(0,1)) && !isNull(this.nearby(0,-1)) && isNull(this.nearby(-1,1)) && isNull(this.nearby(-1,-1))) {
                  Draw.rect(regionDark2, this.x, this.y,0);
                } else if(!isNull(this.nearby(0,1)) && isNull(this.nearby(-1,1))) {
                  Draw.rect(regionDark1, this.x, this.y,0);
                } else if(!isNull(this.nearby(0,-1)) && isNull(this.nearby(-1,-1))) {
                  regionDark1.flip(false,true);
                  Draw.rect(regionDark1, this.x, this.y,0);
                  regionDark1.flip(false,true);
                }else {
                  Draw.rect(regionDark, this.x, this.y,0);
                }
              }
              if (isNull(this.nearby(0,-1))){
                regionDark.flip(true,false);
                regionDark1.flip(true,false);
                regionDark2.flip(true,false);
                if (isNull(this.nearby(1,0)) && isNull(this.nearby(-1,0))){
                  Draw.rect(regionDark, this.x, this.y,3*90);
                } else if(!isNull(this.nearby(1,0)) && !isNull(this.nearby(-1,0)) && isNull(this.nearby(1,-1)) && isNull(this.nearby(-1,-1))) {
                  Draw.rect(regionDark2, this.x, this.y,3*90);
                } else if(!isNull(this.nearby(1,0)) && isNull(this.nearby(1,-1))) {
                  Draw.rect(regionDark1, this.x, this.y,3*90);
                } else if(!isNull(this.nearby(-1,0)) && isNull(this.nearby(-1,-1))) {
                  regionDark1.flip(false,true);
                  Draw.rect(regionDark1, this.x, this.y,3*90);
                  regionDark1.flip(false,true);
                }else {
                  Draw.rect(regionDark, this.x, this.y,3*90);
                }
                regionDark.flip(true,false);
                regionDark1.flip(true,false);
                regionDark2.flip(true,false);
              }
              if (isNull(this.nearby(1,0))) {
                if (isNull(this.nearby(0,-1)) && isNull(this.nearby(0,1))){
                  Draw.rect(regionLight, this.x, this.y,0);
                } else if(!isNull(this.nearby(0,1)) && !isNull(this.nearby(0,-1)) && isNull(this.nearby(1,1)) && isNull(this.nearby(1,-1))) {
                  Draw.rect(regionLight2, this.x, this.y,0);
                } else if(!isNull(this.nearby(0,1)) && isNull(this.nearby(1,1))) {
                  Draw.rect(regionLight1, this.x, this.y,0);
                } else if(!isNull(this.nearby(0,-1)) && isNull(this.nearby(1,-1))) {
                  regionLight1.flip(false,true);
                  Draw.rect(regionLight1, this.x, this.y,0);
                  regionLight1.flip(false,true);
                }else {
                  Draw.rect(regionLight, this.x, this.y,0);
                }
              };
              if (isNull(this.nearby(0,1))){
                regionLight.flip(true,false);
                regionLight1.flip(true,false);
                regionLight2.flip(true,false);
                if (isNull(this.nearby(1,0)) && isNull(this.nearby(-1,0))){
                  Draw.rect(regionLight, this.x, this.y,3*90);
                } else if(!isNull(this.nearby(1,0)) && !isNull(this.nearby(-1,0)) && isNull(this.nearby(1,1)) && isNull(this.nearby(-1,1))) {
                  Draw.rect(regionLight2, this.x, this.y,3*90);
                } else if(!isNull(this.nearby(1,0)) && isNull(this.nearby(1,1))) {
                  Draw.rect(regionLight1, this.x, this.y,3*90);
                } else if(!isNull(this.nearby(-1,0)) && isNull(this.nearby(-1,1))) {
                  regionLight1.flip(false,true);
                  Draw.rect(regionLight1, this.x, this.y,3*90);
                  regionLight1.flip(false,true);
                }else {
                  Draw.rect(regionLight, this.x, this.y,3*90);
                }
                regionLight.flip(true,false);
                regionLight1.flip(true,false);
                regionLight2.flip(true,false);
              }
              if (block.flashHit) {
              if (this.hit < 1.0E-4) {
                  return;
              }

              Draw.color(block.flashColor);
              Draw.alpha(this.hit * 0.5);
              Draw.blend(Blending.additive);
              Fill.rect(this.x, this.y, (float)(8 * block.size), (float)(8 * block.size));
              Draw.blend();
              Draw.reset();
              this.hit = Mathf.clamp(this.hit - Time.delta / 10.0);

              }
          },
          collision(bullet){
            this.super$collision(bullet);
            //super.collision(bullet);
            this.hit = 1.0;
            if (block.lightningChance > 0.0 && Mathf.chance(block.lightningChance)) {
                Lightning.create(this.team, block.lightningColor, block.lightningDamage, this.x, this.y, bullet.rotation() + 180.0, block.lightningLength);
                block.lightningSound.at(this.tile, Mathf.random(0.9, 1.1));
            }

            if (block.chanceDeflect > 0.0) {
                if (bullet.vel().len() > 0.1 && bullet.type.reflectable) {
                    if (!Mathf.chance((block.chanceDeflect / bullet.damage()))) {
                        return true;
                    } else {
                        block.deflectSound.at(this.tile, Mathf.random(0.9, 1.1));
                        bullet.trns(-bullet.vel.x, -bullet.vel.y);
                        var penX = Math.abs(this.x - bullet.x);
                        var penY = Math.abs(this.y - bullet.y);
                        var var10000;
                        if (penX > penY) {
                            var10000 = bullet.vel;
                            var10000.x *= -1.0;
                        } else {
                            var10000 = bullet.vel;
                            var10000.y *= -1.0;
                        }

                        bullet.owner(this);
                        bullet.team(this.team);
                        bullet.time(bullet.time() + 1.0);
                        return false;
                    }
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }
        });
    })
});
