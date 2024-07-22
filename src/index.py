import discord # Install with command prompt or others terminal, this library. Visit official docs from Discord 'discordpy' 
from dotenv import load_dotenv #Install dotenv (visit their docs)
from discord.ext import commands,tasks
import numpy as np #Install numpy
import asyncio
import os

load_dotenv()
TOKEN2 = os.getenv('DISCORD_TOKEN2') #In /.env put your token from your bot 
intents = discord.Intents.all()
client = discord.Client(intents=intents)
wordsdictE = np.load('file.npy', allow_pickle='TRUE') #
wordsdictA = wordsdictE.tolist()
wordsdict = {}

if len(wordsdictA) != 0:
    wordsdict = wordsdictA


bot = commands.Bot(command_prefix='d.',description='Bot diccionario',intents=intents) # 'bot' variable we assing commands.bot, with this we can assing a prefix, and optionally a description 

@bot.event # Init the bot event, when the bot activates, he change his presence, depend from his activity (activity=Put the activity here) // Visit docs from Discord Python Docs
async def on_ready():
    task_loop.start() #This loop save a archive with the words
    print('Ready...') #Delete this pls, it's not necessary. I used it to test
    await bot.change_presence(activity=discord.Streaming(name="Your name", url="https://www.twitch.com/yourProfile/"))



@bot.command(name='dict',help='Get words or phraps') # Call the variable 'bot' with the function command(). In discord put the prefix and 'dict'. For example: q.dict word_or_phrap
async def diccionario(ctx, *, palabra): # Get the word o phrap, as the variable 'palabra'
    # Palabras y definición
    palabra = palabra.lower() # Change all words from upper case to lower case
    if palabra in wordsdict:
        await ctx.send(wordsdict[palabra]) #If math with the word in the dict, output the definition
    else:
        await ctx.send("La palabra es incorrecta o no existe") #If not math, output 'Incorrect word or none exist'

@bot.command(name='neword',help='Puedes agregar una letra al dict') # Write in discord the prefix and 'neword'. This two parameters 'word' and with space 'definition'
@commands.has_permissions(administrator=True) # Only the administrators can used it
async def agregar_letras(ctx,palabra, *, definicion):
    palabra = palabra.lower()
    wordsdict[palabra] = definicion
    valorBuscado = definicion
    claveEncontrado = None

    for clave,valor in wordsdict.items():
        if valor == valorBuscado:
            claveEncontrado = clave

    await ctx.send(f'La palabra {claveEncontrado} fue agregada')

@tasks.loop(seconds = 10)
async def task_loop():
    await bot.wait_until_ready()
    while not bot.is_closed():
        np.save('file.npy', wordsdict)
        await asyncio.sleep(30)

bot.run(TOKEN2)
