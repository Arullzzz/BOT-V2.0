/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6285822347348','6285822347348','6285822347348']
global.pemilik = ['6285822347348']
global.premium = ['6285822347348']
global.pengguna = 'ArullOfc'
global.botnma = 'ArullBotzMD'
global.harga = '10k'
global.atasreply = 'Subscribe' //BUAT REPLAY DI ATAS NYA ADA TEXT
global.atasreply2 = 'Follow Instagram' //BUAT REPLAY DI ATAS NYA ADA TEXT KE 2
global.webreply = 'https://youtube.com/c/KahfzXzyy' //URL DI ATAS REPLAY
global.webreply2 = 'https://instagram.com/sahrulwara_____' //URL BUAT DI ATAS REPLAY KE 2
global.melcanz = 'melcantik'
global.footer = 'ArullOfc' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://instagram.com/sahrulwara_____' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://github.com/Arullwara' //Ubah Jga Bebas Sama lu 
global.ganti = 'A R U L' //Edit Terserah Lu Mau Apa
global.ganti2 = 'G A N T E N G'
global.accestken = 'KahfzTod'
global.ownernma = 'ArullOfc'
global.packname = 'Sticker by'
global.author = 'ArullOfc'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ S u c c e s s',
    admin: 'Fitur Khusus Admin Group!😞',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!❌',
    owner: 'Fitur Khusus Owner Bot❌',
    group: 'Fitur Digunakan Hanya Untuk Group!❌',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!❌',
    bot: 'Fitur Khusus Pengguna Nomor Bot❌',
    wait: 'W a i t . . . . ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
