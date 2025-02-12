import discord
from discord.ext import commands

# Dein Bot-Token
TOKEN = 'MTMwNDA2NTAyODk3ODI0NTcwNA.GuWkgQ.3POlIMtifrsL-80eBnEXDceahrcGMDdHkmI_Qc'

# Bot-Setup mit erweiterten Intents
intents = discord.Intents.default()
intents.members = True  # Wichtig für Member-Tracking

bot = commands.Bot(command_prefix="!", intents=intents)

@bot.command()
async def member_count(ctx):
    guild = ctx.guild
    total_members = guild.member_count
    online_members = sum(1 for member in guild.members if member.status != discord.Status.offline)
    offline_members = total_members - online_members

    # Erstelle ein schönes Embed
    embed = discord.Embed(title="📊 Server-Mitglieder", color=discord.Color.blue())
    embed.add_field(name="👥 Gesamt:", value=f"{total_members}", inline=False)
    embed.add_field(name="🟢 Online:", value=f"{online_members}", inline=True)
    embed.add_field(name="⚫ Offline:", value=f"{offline_members}", inline=True)
    embed.set_footer(text=f"Angefordert von {ctx.author.name}", icon_url=ctx.author.avatar.url)

    await ctx.send(embed=embed)

bot.run(TOKEN)
