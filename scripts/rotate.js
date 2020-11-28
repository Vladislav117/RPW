var toRotate=["armchair"]
Events.on(ClientLoadEvent,event=>{
    Vars.content.blocks().each(block=>{
        //if (!block.name.startsWith("rpworlds"))return;
        if (!(block instanceof Wall))return;
        //print(block.name);
        if (!(block.rotate))return;
        print(block.name+" rotatadle");
        block.buildType = () => extend(Building,{
          draw(){
              var region_;
              if (block.variants == 0) {
                  region_=block.region;
              } else {
                  region_=block.variantRegions[Mathf.randomSeed(this.tile.pos(), 0, Math.max(0, block.variantRegions.length - 1))];
              }
              Draw.rect(block.region, this.x, this.y,this.rotation * 90);
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
