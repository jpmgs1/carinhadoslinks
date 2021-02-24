const { create, Client } = require('@open-wa/wa-automate') // As consts aqui declaram as funções de outros arquivos
const welcome = require('./lib/welcome') // Ou de modulos que usei
const kconfig = require('./config')
const options = require('./options')
const color = require('./lib/color')
const config = require('./lib/config/config.json')

// Cria um cliente de inicialização da BOT
const start = (kill = new Client()) => {
    console.log(color('\n> DEV OFICIAL ='), color(' CARINHA DOS LINKS > https://wa.me/+558293767174', 'yellow'))
	console.log(color('\n> GRUPO OFICIAL ='), color(' https://chat.whatsapp.com/FclVqIxKGyUCpauOeD4Qb1', 'yellow'))
	console.log(color('\n>'), color('Inicialização finalizada, os comandos podem ser usados agora...', 'red'))
	
		// Forçar recarregamento caso obtenha erros
		kill.onStateChanged((state) => {
			console.log('[Estado da Íris]', state)
			if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') kill.forceRefocus()
		})
	
		
        // Le as mensagens e limpa cache
        kill.onMessage((async (message) => {
            kill.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 2000) {
                    kill.cutMsgCache()
                }
            })
            kconfig(kill, message)
        }))
		
		// Configuração do welcome
        kill.onGlobalParicipantsChanged(async (heuh) => {
            await welcome(kill, heuh)
        })
        
		
		// Funções para caso seja adicionada em um grupo
        kill.onAddedToGroup(async (chat) => {
			const wlcmsg = 'Oi! 🌟\nFui requisitada como BOT para esse grupo, e estarei a disposição de vocês! 🤖\nSe quiserem ver minhas funcões usem /menu!'
			const lmtgru = await kill.getAllGroups()
            let totalMem = chat.groupMetadata.participants.length
			if (chat.groupMetadata.participants.includes(config.owner)) {
				await kill.sendText(chat.id, wlcmsg)
			} else if (gc.length > config.memberLimit) {
            	await kill.sendText(chat.id, `Um novo grupo, Eba! 😃\nUma pena que vocês não tem o requisito, que é ter pelo menos ${config.memberLimit} membros. Você possui ${totalMem}, junte mais pessoas! 😉`)
				await kill.leaveGroup(chat.id)
				await kill.deleteChat(chat.id)
			} else if (lmtgruc.length > config.gpLimit) {
				await kill.sendText(chat.id, `Desculpe, estamos no maximo de grupos!\nAtualmente estamos em ${lmtgru.length}/${config.gpLimit}`)
				await kill.leaveGroup(chat.id)
				await kill.deleteChat(chat.id)
            } else {
                kill.sendText(chat.id, wlcmsg)
            }
        })
		

        // Bloqueia na call
        kill.onIncomingCall(async (call) => {
            await kill.sendText(call.peerJid, `Que pena! Chamadas não são suportadas e atrapalham muito! 😊\nTe bloqueei para evitar novas, contate o dono wa.me/${config.owner.replace('c.us', '')} para efetuar o desbloqueio. 👋`)
            await kill.contactBlock(call.peerJid)
        })
    }

create(options(true, start))
    .then((kill) => start(kill))
    .catch((err) => new Error(err))
