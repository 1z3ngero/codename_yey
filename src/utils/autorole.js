module.exports = async (client, guild, member) => {
  if (member.bot) return;

  const dbItem = await db.autorole.findOne({ where: { server: member.guild.id } });
  if (dbItem) {
    if (!dbItem.autorole) return;
    if (member.guild.me.permission.has("manageRoles")) {
      try {
        await member.addRole(dbItem.autorole);
      } catch (err) {
        client.logger.error(`Unexpected autorole error:\n${err.stack}`);
      }
    }
  }
}
