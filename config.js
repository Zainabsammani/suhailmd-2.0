const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_37_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTczLFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMixcbiAgICAgICAgNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk4wUjA2VVZId0tjdlQ1NWJhM1V1VG9abmV6VktZNEhYM2JvOUFicmhBL2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklZVFdJaFEzUlltSExEcFNjX211Q2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2UwZDBmZjktNjRjYi00ODI1LWE0MmItNDMxMGY1NzAyNjU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgOTAsXG4gICAgICAxNDAsXG4gICAgICA4OSxcbiAgICAgIDEyMSxcbiAgICAgIDY5LFxuICAgICAgMjEyLFxuICAgICAgMjU0LFxuICAgICAgNTksXG4gICAgICA3NyxcbiAgICAgIDIxMCxcbiAgICAgIDI4LFxuICAgICAgNzEsXG4gICAgICA0NSxcbiAgICAgIDE3MixcbiAgICAgIDg0LFxuICAgICAgMTExLFxuICAgICAgMTY2LFxuICAgICAgMjI1LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAyNixcbiAgICAgIDEzOSxcbiAgICAgIDEyNSxcbiAgICAgIDE3OSxcbiAgICAgIDE1MixcbiAgICAgIDMyLFxuICAgICAgNjgsXG4gICAgICA2NSxcbiAgICAgIDMsXG4gICAgICAyNDksXG4gICAgICAyNCxcbiAgICAgIDIzOCxcbiAgICAgIDEzLFxuICAgICAgMTc3LFxuICAgICAgNixcbiAgICAgIDE4NixcbiAgICAgIDY0LFxuICAgICAgMTk2LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkMyQUFEOFBCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM1MTk3ODY4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNDgyNjQ1NDAyODUyMzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqRXRlY0lFS2JLczdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ0NkVm9iaEpHSU5EK1FxR09iQm9GL2ZJVUFETE1qeGtJR3g1eGNEa2pBUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJralYxdXFWL0tpcmxuYUY1dXh1M0ZGR2l1YzZBKzF3cTJ2RjRwZTRLOEhCemk3bUpleXVTcFl5R1hJOUFYWnoxWXlML0pHeFU5cWRrQ0lKSG5DOXlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoUHJFOS9BMEdibFo3cDljZFprSWM5R0d2UjBNQVJTeGNYMlhkTlJTcG10L0dOeVg0ak8yMktTamp6SXZ3T1NCYStnbkxNVXRvK1U3bGhnSzJ4Ly9nQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM1MTk3ODY4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMDkyNjUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjhXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCOFcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUMHZvb2Z4R21DNGpScjlKVTlQVnFtR3pMY3IwMXRnb3ZSYVpQTTBOL0MwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzNjQzNjc0ODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzA5MjY1NjY1N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
