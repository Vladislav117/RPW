var FILENAME_END="-corner";
Events.on(ClientLoadEvent,event=>{
    Vars.content.blocks().each(block=>{
        if (!(block instanceof Wall) || !(block.rotate) || !(block.name.endsWith(FILENAME_END)))return;
        //print(block.name+" rotatadle");
        block.buildType = () => extend(Building,{
          unit(){
            this.super$init();
          },
          draw(){
              var region_ = Core.atlas.find(block.name+"-"+this.rotation);
              if (region_==null)region_=Core.atlas.find("oh no");
              Draw.rect(region_, this.x, this.y);
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
