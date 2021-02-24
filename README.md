### BOT do carinha
Uma bot em português feita para PC, originalmente para o grupo Do Carinha Dos LINks no WhatsApp, possui mais de 150 comandos e continua em crescimento.

### Pedido Pessoal
- Por favor NÃO REMOVA os creditos, levei muito tempo e precisei ter muita dedicação pra se criar um BOT Brasileiro assim, agradeço pela cooperação.

### Para os donos
Você pode rodar comandos de Windows como "ipconfig", comandos de linux como "apt", ou comandos de programações como python -c tudo pelo WhatsApp, ninguém além de você pode usar isso, se você deseja que usem, remova a linha if (!isOnwer) [aqui](https://github.com/KillovSky/iris/blob/master/config.js#L3258), mas saiba que remove-la pode ser perigoso a você.

### Funções (Não são todas, +130)

| Função |Contém|
| ------------- | ------------- |
| Pausar BOT |✅|
| Bloquear/Desbloquear pessoas |✅|
| Puxar alguns dados |✅|
| Usar CMD/Terminal pelo WhatsAPP |✅|
| Anti-Fake/Blacklist |✅|
| Downloads (Redes-Sociais e YouTube) |✅|
| Conversar por texto/voz Sim-Simi/Local (ilimitado) |✅|
| Busca/fotos de animes |✅|
| Wikipedia |✅|
| Brainly |✅|
| Nasa |✅|
| Buscar anime por foto |✅|
| Stickers em imagem |✅|
| Ataques SMS |✅|
| Mandar mensagens a outro PV (por comando) |✅|
| Comandos de zoeira |✅|
| Prints de tela e sites |✅|
| Geração de textos |✅|
| Mensagem para Todos |✅|
| Sair de tudo |✅|
| Deletar todas as mensagens |✅|
| Revogar links de grupo|✅|
| Adicionar/remover pessoas |✅|
| Tirar ADM |✅|
| Anti porno/links de grupos |✅|
| Sticker/Sticker GIF |✅|
| Stickers sem fundo/Por palavra/Link |✅|
| Fabrica de meme/Pegar memes |✅|
| Busca de pinterest |✅|
| Construção de "diario" em foto |✅|
| Silenciar grupo para administradores |✅|
| Falar frases em 51 idiomas |✅|
| Mudar foto do grupo |✅|
| Marcar todos |✅|
| Stalkear instagram/twitter |✅|
| Google/Google Play |✅|
| Pesquisa por foto |✅|
| Upload de fotos em nuvem |✅|
| Tradutor |✅|
| Boas Vindas e Adeus |✅|
| Deletar mensagens do bot |✅|
| Remover todos |✅|
| Votações (Urna) |✅|
| Foto de garotas, macacos, etc |✅|
| Informações de Grupo/Perfil |✅|
| Outros (Lista tem mais de 130) |✅|

### Requisitos

- [NodeJS](https://nodejs.org) - Recomendo a LTS.
- [Git](https://git-scm.com) - Opcional (Se não usar Git Clone).
- [Ffmpeg](https://ffmpeg.org) - Para o comando de GIF.
Se desejar, pode tentar instalar o ffmpeg usando o npm, siga o codigo abaixo:

```bash
> npm i fluent-ffmpeg -g
```

Para a instalação do git, node e ffmpeg em Linux, use o comando abaixo:

```bash
> sudo apt install nodejs git ffmpeg -y
```

Caso você obtenha erros com a versão do node no repositório de seu Linux, use o [Node Source](https://github.com/nodesource/distributions), lembre-se de usar a LTS (14).

### Instalação
Você precisa ter esse repositório, é simples, rode os comandos abaixo, em caso de erros, rode como sudo/administrador.

```bash
> git clone https://github.com/manokillzero/carinhadoslinksbot
> cd carinhadoslinksbot
> npm i
```

### Iniciar
Para iniciar digite o comando abaixo e espere, após isso, escaneie o QR Code.

```bash
> npm start
```

### Ver todos os comandos
Digite no seu chat a mensagem:

```bash
> !menu
```

### Crie seus comandos
Abra sua config.js e ache um lugarzinho em branco bonito, darei um exemplo de resposta simples, va testando como quiser, a outros tipos, você pode ver quais por [aqui](https://docs.openwa.dev/classes/client.html) e na duvida, chame-me por [aqui](https://wa.me/+558293767174).

```bash
case 'Nome do comando sem espaços':
    await kill.reply(from, 'Sua mensagem', id)
    break
 ```
