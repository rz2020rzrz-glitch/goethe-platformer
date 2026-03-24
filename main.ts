controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_player.isHittingTile(CollisionDirection.Bottom)) {
        _player.setVelocity(0, -170)
        jumpstate = 1
    } else if (jumpstate == 1) {
        _player.startEffect(effects.starField, 500)
        _player.startEffect(effects.starField, 500)
        _player.setVelocity(0, -180)
        jumpstate = 2
    }
    _player.sayText(jumpstate)
})
function loadLevel (level: number) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else {
    	
    }
}
let jumpstate = 0
let _player: Sprite = null
scene.setBackgroundImage(assets.image`myImage0`)
_player = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(_player, 90, 0)
tiles.setCurrentTilemap(tilemap`level1`)
_player.setFlag(SpriteFlag.ShowPhysics, true)
scene.cameraFollowSprite(_player)
_player.ay = 500
let foe = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 3 . . 
    . 3 . . . 3 . . . 3 3 . . 3 . . 
    . 3 3 . . 3 . . 3 . . 3 . 3 3 . 
    . 3 . 3 . 3 . . . 3 3 . . 3 . 3 
    . 3 3 . . 3 . . 3 . . . . 3 . 3 
    . . . . . . 3 . . 3 3 3 . 3 . 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
foe.follow(_player, 40)
let level = 0
loadLevel(level)
game.onUpdate(function () {
    if (_player.isHittingTile(CollisionDirection.Bottom)) {
        jumpstate = 0
    }
})
