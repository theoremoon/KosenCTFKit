from flask import Blueprint, jsonify
from kosenctfkit.models import Config
from kosenctfkit.utils import (
    get_login_user,
    get_users,
    get_teams,
    get_challenges,
    get_user_and_team,
)


root = Blueprint("root", __name__)


@root.route("/update")
def update():
    user = get_login_user()
    config = Config.get()
    ctf_name = config.name
    register_open = config.register_open
    ctf_open = config.ctf_open
    ctf_frozen = config.ctf_frozen
    valid_only = not ctf_frozen
    users = get_users(valid_only=valid_only)
    teams = get_teams(valid_only=valid_only)
    scoreboard = get_teams(valid_only=True)

    r = {
        "is_login": bool(user),
        "ctf_name": ctf_name,
        "ctf_open": ctf_open,
        "ctf_frozen": ctf_frozen,
        "register_open": register_open,
        "users": users,
        "teams": teams,
        "scoreboard": scoreboard,
        "challenges": {},
    }
    if user:
        userinfo, teaminfo = get_user_and_team(user, valid_only=valid_only)
        r["challenges"] = get_challenges()
        r["user"] = userinfo
        r["team"] = teaminfo
    return jsonify(r)