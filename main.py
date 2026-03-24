def on_a_pressed():
    global jumpstate
    if _player.is_hitting_tile(CollisionDirection.BOTTOM):
        _player.set_velocity(0, -170)
        jumpstate = 1
    elif jumpstate == 1:
        _player.start_effect(effects.star_field, 500)
        _player.start_effect(effects.star_field, 500)
        _player.set_velocity(0, -170)
        jumpstate = 2
    _player.say_text(jumpstate)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

jumpstate = 0
_player: Sprite = None
scene.set_background_image(assets.image("""
    myImage0
    """))
_player = sprites.create(assets.image("""
    myImage
    """), SpriteKind.player)
controller.move_sprite(_player, 90, 0)
tiles.set_current_tilemap(tilemap("""
    level
    """))
_player.set_flag(SpriteFlag.SHOW_PHYSICS, True)
scene.camera_follow_sprite(_player)
_player.ay = 500

def on_on_update():
    global jumpstate
    if _player.is_hitting_tile(CollisionDirection.BOTTOM):
        jumpstate = 0
game.on_update(on_on_update)
