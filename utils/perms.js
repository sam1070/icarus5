const sf = require("../config/snowflakes.json");

const perms = {
  isAdmin: (msg) => sf.adminId.includes((msg.author ?? msg.user).id),
  isOwner: (msg) => (msg.author ?? msg.user).id === sf.ownerId,
  isMod: function(msg) {
    const roles = msg.member?.roles.cache;
    return roles?.has(sf.roles.mod) || roles?.has(sf.roles.management);
  },
  isTeam: (msg) => msg.member?.roles.cache.has(sf.roles.team)
};

module.exports = perms;