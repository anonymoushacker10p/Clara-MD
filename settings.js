const chalk = require("chalk")
const fs = require("fs")

// Apikey 
global.apikeys = 'ZPItVSYOCM'
// Note: Kalau Lu Gada Apikeynya Daftar Dulu Biar Semua Fiturnya Aktif, Webnya Di Bawah Ya
// • https://api.xyroinee.xyz

// Info Owner
global.owner = ['62895348056622']
global.nomorown = "62895348056622"
global.ownername = "Ridhzz"
global.ownerNumber = ["62895348056622@s.whatsapp.net"]
global.creator = "62895348056622@s.whatsapp.net"
global.author = "Ridhzz"
global.location = "Indonesia"

//Bot Setting
global.botname = "Avt∅ - MD"
global.wm = "Follow Instagram: gridhzz"
global.packname = "Sticker By"
global.prefa = ['','!','.','#','&','`']
global.hituet = 0

// Social Media
global.yt = "https://www.youtube.com/"
global.gh = "https://github.com/"
global.ig = "https://instagram.com/gridhzz"
global.fb = "https://facebook.com/riiddhs"
global.web = "https://api.xyroinee.xyz"
global.gcwa = "https://chat.whatsapp.com/LAWdIQri9SKee5kqmISH0"

// Foto Bot
global.thumb = fs.readFileSync("./media/clara.jpg")

// Message/Pesan
global.mess = {
success: '_Sukses...!_',
admin: '_Maaf Kak, Tapi Fitur Ini Hanya Bisa Digunakan Oleh Admin Grup_',
botAdmin: '_Jadikan Saya Sebagai Admin Terlebih Dahulu Agar Dapan Mengaktifkan Fitur Ini_',
prem: '_Fitur Ini Khusus Premium Kak, Jika Ingin Menjadi User Premium Ketik .premium Atau Hubungin Owner_',
owner: '_Maaf Kak, Tapi Fitur Ini Hanya Bisa Digunakan Oleh Ownerku_',
group: '_Fitur Ini Hanya Bisa Di Pakai Di Dalam Grup_',
private: '_Fitur Ini Hanya Bisa Di Pakai Di Dalam Chat Pribadi_',
bot: 'Fitur Khusus Bot',
wait: '_Sedang Di Proses, Mohon Tunggu_...',
link: '_Uhm...Linknya Mana?_'
}
// Ini Panel Ya Njing
global.host = "https://zrstore.panelrun.xyz"
global.application = {
    api_key: "", //Ambil Di Panel Lu Caranya Pergi Ke Setting Admin Terus Tap Garis Tiga Pojok Kiri Atas Terus Tap Application API Tinggal Salin Apikeynya
    c_api_key: "" //Ambil Di Panel Lu Caranya Ke Account Setting Atau Tap Foto Akun Lu Terus Tap API Credentials Terus Isi Descriptionya Sange Terus Tap Create Nah Lu Salin C Apikeynya
}
global.serverCreate = {
    nestId: "5", //Nest Id Panel Lu
    eggId: "15", //Egg Id Panel Lu
    limits: {
      db: "1", //Mending Ga Usah Diganti
      backups: "1", //Mending Ga Usah Diganti
      allocation: "0" //Mending Ga Usah Diganti
    },
    eggs: {
      environment: {
        "CUSTOM_COMMAND": "npm start", //Sesuaiin Sama Eggs Panel Lu
        "GIT_ADDRESS": "",
        "BRANCH": "",
        "USERNAME": "",
        "ACCESS_TOKEN": ""
      }
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
