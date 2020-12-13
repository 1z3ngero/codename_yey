module.exports = {
  langName: "ru",

  cantUseCommandInDM: `> :x: Вы не можете использовать данную команду в личных сообщениях.`,
  clickHere: "(нажмите сюда)",
  daysAgo: days => `(${days} дней назад)`,
  commandUsage: function (prefix, command) {
    let usages = command.usage;
    let str = `>>> Как использовать: `;
    if (usages instanceof Array) {
      usages = usages.map(u => `${prefix}${command.name} ${this[u]}`).join("\n");
      str += `\`\`\`\n${usages}\n\`\`\``
    }
    else str += `\`${prefix}${command.name} ${this[command.usage]}\``;

    return str;
  },
  botDontHavePerms: perm => `У меня нет права \"${perm}\" для выполнения этого действия.`,
  userIsOwner: "Этот пользователь является владельцем сервера",
  roleHigher: "Роль этого пользователя выше моей роли.",
  memberRoleHigher: "Роль этого пользователя выше вашей роли.",
  somethingWentWrong: "Что-то пошло не так. Попробуйте позже.",
  dontHavePerms: ":x: Вы не имеете нужных прав на использование этой команды.",
  missingPermission: perm => `Нужное право: \`${perm}\``,
  errorInCommand: `:x: Произошла непредвиденная ошибка при выполнении этой команды.`,
  errorDesc: "Эта ошибка была отправлена на сервер поддержки, и будет скоро исправлена.",
  errorFooter: "Вы можете дополнительно сообщить об этой ошибке на сервер поддержки.",
  cooldown: left => `> :warning: Вам нужно подождать ${left} секунд, чтобы использовать эту команду снова.`,
  cantFindUser: "> :x: Пользователь не найден.",
  botPrefix: (prefix, user) => `>>> ${user.mention}, мой префикс на этом сервере \`${prefix}\`.\nВведите \`${prefix}help\` для получения команд бота.`,
  antiInviteReason: "отправил ссылку-приглашение",

  permissions: {
    kickMembers: "Выгонять участников",
    banMembers: "Банить участников",
    manageRoles: "Управлять ролями",
    manageMessages: "Управлять сообщениями",
    manageGuild: "Управлять сервером",
  },

  status: {
    online: "<:online:737261991017840660> В сети",
    idle: "<:idle:737262151718141963> Не активен",
    dnd: "<:dnd:737262249378316360> Не беспокоить",
    offline: "<:offline:737262088904507402> Не в сети",
  },

  generalGroup: "Основные",
  devGroup: "Команды разработчика",
  moderationGroup: "Модерация",
  settingsGroup: "Настройки",
  utilityGroup: "Утилиты",
  funGroup: "Развлекательные",
  miscGroup: "Разное",
  musicGroup: "Музыка",
  
  avatarDescription: "Показывает ваш аватар, либо аватар указанного пользователя.",
  avatarUsage: "[пользователь: id, упоминание либо тег]",
  avatarUsageServer: "server",
  avatarUser: user => `Аватар ${user.tag}:`,
  serverIcon: "Иконка сервера:",

  helpDescription: "Показывает информацию о командах бота.",
  helpUsage: "[команда]",
  helpCommandDoesntExist: cmd => `Команды **${cmd}** не существует.`,
  helpCommandDoesntExistDesc: prefix => `Введите ${prefix}help для получения списка всех команд.`,
  helpCommandEmbedTitle: cmd => `Справка по команде \`${cmd}\`:`,
  helpCommandUsage: "Как использовать:",
  helpTitle: "Команды бота:",
  helpTip: prefix => `Хотите получить информацию о какой-либо команде? Используйте ${prefix}help [команда]`,
  helpAliases: "Псевдонимы:",

  pingDescription: "Показывает задержку бота до серверов Discord'а.",
  pingMeasuring: "Измеряется...",
  pingBotLatency: latency => `Задержка бота ${latency} мс.`,
  pingWebSocketLatency: latency => `Задержка WebSocket ${latency} мс.`,

  serverDescription: "Показывает информацию о сервере.",
  serverOwner: "Владелец:",
  serverRegion: "Регион:",
  serverMembers: "Участников:",
  serverMembersTotal: "всего",
  serverMembersBots: "ботов",
  serverMembersOnline: "в сети",
  serverMembersIdle: "не активны",
  serverMembersDND: "не беспокоить",
  serverMembersOffline: "не в сети",
  serverChannels: "Каналов:",
  serverChannelsCategories: "категорий",
  serverChannelsText: "текстовых",
  serverChannelsVoice: "голосовых",
  serverTotalRoles: "Кол-во ролей:",
  serverCreatedAt: "Создан:",
  serverVerificationLevel: "Уровень проверки:",
  verificationLevel: [
    "Отсутствует",
    "Низкий",
    "Средний",
    "Высокий",
    "Очень высокий",
  ],
  serverEmojis: "Эмодзи:",
  serverEmojisStatic: "статичные",
  serverEmojisAnimated: "анимированные",

  statsDescription: "Показывает статистику бота.",
  statsTitle: "Статистика бота",
  statsUptime: "Аптайм:",
  statsServers: "Кол-во серверов:",
  statsUsers: "Кол-во пользователей:",
  statsPlatform: "Платформа:",
  statsVersions: "Версии:",
  statsRamUsed: "ОЗУ использовано:",
  statsBot: "бота",
  statsCpu: "Процессор:",
  cantGetCpuInfo: "Невозможно получить информацию о процессоре",

  userDescription: "Показывает информацию о вас или о указанном пользователе.",
  userUsage: "[пользователь: id, упоминание или тег]",
  userStatus: "Статус:",
  userRegisteredAt: "Зарегистрировался:",
  userJoinedAt: "Вошел на этот сервер:",
  userRoles: "Роли:",
  userBot: "Бот?",
  userBotDefine: bot => bot ? "Да" : "Нет",
  userCustomStatus: "Пользовательский статус:",
  userWatching: "Смотрит:",
  userListening: "Слушает:",
  userStreaming: "Стримит:",
  userPlaying: "Играет в:",
  userVoiceChannel: "Голосовой канал:",

  evalDescription: "Выполняет JavaScript-код",
  evalUsage: "<код>",

  reloadDescription: "Перезагружает команду.",
  reloadUsage: "<команда>",
  reloadCmdDoesntExist: command => `> :x: Команды \`${command}\` не существует.`,
  
  setgameDescription: "Задает статус бота.",
  setgameUsage: "[-w, --watching] [-l, --listening] <текст>",

  updateDescription: "git pull",
  updateSuccess: ":white_check_mark: Успешно обновлено.",

  banDescription: "Банит указанного пользователя.\nЭта команда требует право \"Банить пользователей.\"",
  banUsage: "<пользователь: упоминание, тег или id> [причина]",
  banSuccess: user => `${user.tag} забанен`,
  reason: reason => `Причина: ${reason || "отсутствует"}`,
  cantBanYourself: `> :x: Вы не можете забанить самого себя.`,
  cantBanBot: `> :x: Вы не можете забанить бота.`,
  banFail: ":x: Не удалось забанить этого пользователя.",

  hackbanDescription: "Хакбанит указанного пользователя.\nЭта команда требует право \"Банить пользователей\".",
  hackbanUsage: "<id пользователя> [причина]",
  hackbanSuccess: id => `:white_check_mark: Пользователь с ID \`${id}\` был успешно хакбанен.`,
  hackbanFail: ":x: Не удалось забанить этого пользователя.",
  
  kickDescription: "Кикает указанного пользователя.\nЭта команда требует право \"Выгонять участников\".",
  kickUsage: "<пользователь: упоминание, тег или id> [причина]",
  cantKickYourself: "> :x: Вы не можете кикнуть самого себя.",
  cantKickBot: "> :x: Вы не можете кикнуть бота.",
  kickSuccess: user => `${user.tag} был кикнут`,
  kickFail: ":x: Не удалось кикнуть этого пользователя.",

  muteDescription: "Мутит указанного пользователя.\nРазрешенные настройки времени: Ns, Nm, Nh, Nd, где N - число.\nЭта команда требует право \"Выгонять участников\".",
  muteUsage: "<пользователь: упоминание, тег или id> [время] [причина]",
  cantMuteYourself: "> :x: Вы не можете замутить самого себя.",
  cantMuteBot: "> :x: Вы не можете замутить бота.",
  userAlreadyMuted: "> :x: Данный пользователь уже замучен.",
  muteSuccess: user => `${user.tag} был замучен`,
  canUnmuteSuggestion: prefix => `Вы можете размутить пользователя, введя ${prefix}unmute <пользователь: упоминание, тег или id>.`,
  muteFail: ":x: Не удалось замутить этого пользователя.",
  muteTimeTooLong: "> :x: Время мута должно быть не более 7 дней.",

  purgeDescription: "Удаляет указанное кол-во сообщений в канале.\nЭта команда требует право \"Управлять сообщениями\".",
  purgeUsage: "<amount>",
  amountIsNaN: "> :x: Указанное кол-во не является числом.",
  notLessThan1Msg: "> :x: Не менее, чем 1 сообщение за раз.",
  notMoreThan100Msgs: "> :x: Не более 100 сообщений за раз",
  purgeSuccess: amount => `:white_check_mark: Успешно удалено ${amount} сообщений.`,
  msgWillBeDeleted: "Это сообщение будет автоматически удалено через 5 секунд.",
  purgeFailed: ":x: Не удалось удалить сообщения.",

  unmuteDescription: "Размутит указанного пользователя.\nЭта команда требует право \"Выгонять участников\".",
  unmuteUsage: "<пользователь: упоминание, тег или id>",
  userNotMuted: "> :x: Данный пользователь не был замучен.",
  unmuteSuccess: user => `${user.tag} был размучен`,
  unmuteFail: ":x: Не удалось размутить этого пользователя.",

  warnDescription: "Выдает предупреждение указанному пользователю. Также позволяет вам смотреть свои предупреждения или предупреждения указанного пользователя, либо же удалять их (если у вас есть право \"Выгонять участников\".)",
  warnUsage: "[-l, --list [пользователя]] [-d, --delete <id>] <пользователь: упоминание, тег или id> [причина]",
  totalWarns: number => `Всего предупреждений: ${number}`,
  invalidID: "> :x: Неверный ID предупреждения.",
  warnOnAnotherServer: "> :x: Это предупреждение расположено на другом сервере.",
  warnDeleteSuccess: id => `> :white_check_mark: Удалено предупреждение с ID ${id}`,
  cantWarnYourself: "> :x: Вы не можете выдать предупреждение самому себе.",
  cantWarnBot: "> :x: Вы не можете выдать предупреждение боту.",
  cantWarnAdmin: "> :x: Вы не можете выдать предупреждение участнику, роль которого выше вашей.",
  warnSuccess: user => `Выдано предупреждение пользователю ${user.tag}`,
  warnID: id => `ID предупреждения: ${id}`,
  warnsFooter: (total, maxPages, page) => `Всего предупреждений: ${total} | Страница ${page} из ${maxPages}`,
  warnListFieldName: (id, user) => `ID: ${id} | выдал ${user.tag}`,

  autoroleDescription: "Позволяет вам включить или выключить автороль.\nТребует право \"Управлять сервером\".",
  autoroleUsage: "[роль: id, имя либо \"disable\" для выключения]",
  autorole: "Автороль",
  autoroleEnabled: role => `Автороль включена для роли **${role}**.`,
  autoroleDisabled: "Автороль выключена.",
  autoroleTip: prefix => `Вы можете включить или сменить автороль, введя ${prefix}autorole [роль], либо ${prefix}autorole для выключения.`,
  autoroleDisableSuccess: "> :white_check_mark: Автороль была выключена.",
  autoroleSuccess: role => `> :white_check_mark: Автороль была успешно включена для роли **"${role}"**.`,
  invalidRoleID: "> :x: Неправильное имя или ID роли.",
  autoroleRoleHigher: "> :x: Эта роль находится выше моей роли или наравне с ней.",

  modlogsDescription: "Позволяет вам управлять каналом для логов модерации.\nТребует право \"Управлять сервером\".",
  modlogsUsage: "[канал: упоминание или id]",
  modlogs: "Логи модерации",
  modlogsEnabled: channel => `Логи модерации включены в канале ${channel}.`,
  modlogsDisabled: "Логи модерации выключены.",
  modlogsTip: prefix => `Вы можете включить логи модерации либо изменить канал для них, введя ${prefix}modlogs [канал], или ${prefix}modlogs disable для выключения.`,
  modlogsDisableSuccess: "> :white_check_mark: Логи модерации были выключены.",
  modlogsSuccess: channel => `> :white_check_mark: Логи модерации были включены в канале **\"${channel}\"**.`,
  invalidChannel: "> :x: Указан неверный канал.",
  modlogsDontHavePerms: ":x: Я не имею прав на отправление сообщений в этом канале",
  modlogsDontHavePermsDesc: "Пожалуйста, выдайте мне права \"Отправлять сообщения\" и \"Встраивать ссылки\" в этом канале, потом попробуйте снова.",

  _8ballDescription: "Магический шар-восьмерка.",
  _8ballUsage: "<вопрос>",
  magicballAnswer: ":8ball: Магический шар ответил:",
  yourQuestion: "Ваш вопрос:",
  _8ballAnswers: {
    "true": [
      "Бесспорно",
      "Без сомнений",
      "Да",
      "Определенно да",
      "Можешь быть уверен(а) в этом",
      "Предрешено",
      "Мне кажется - да",
      "Хорошие перспективы",
      "Вероятнее всего",
      "Знаки говорят - да",
    ],
    "false": [
      "Даже не думай",
      "Нет",
      "Перспективы не очень хорошие",
      "Весьма сомнительно",
      "По моим данным - нет",
    ],
  },
  _8ballFailAnswers: [
    "Пока не ясно, попробуй снова",
    "Спроси позже",
    "Лучше не рассказывать",
    "Сейчас нельзя предсказать",
    "Сконцентрируйся и спроси опять",
  ],

  pollDescription: "Создает опрос из реакций (до 10 вариантов ответа).\nЕсли указан ключ -d или --delete, то пробует удалить ваше сообщение.\nВы также можете использовать двойные кавычки для вопроса и ответов.",
  pollUsage: "[-d, --delete] <вопрос> <ответы>",
  noAnswers: "> :warning: В опросе должен быть как минимум один вариант ответа.",
  pollNotMoreThan10Answers: "> :x: Не более 10 вариантов ответа.",
  startedBy: user => `Начал опрос: ${user.tag}`,
  pollCantDeleteMessage: "> :warning: Невозможно удалить сообщение, проверьте разрешения бота",

  qrDescription: "Генерирует QR-код из вашего текста.",
  qrUsage: "<текст>",
  generationTime: time => `Заняло ${time} мс.`,

  sayDescription: "Говорит ваш текст в эмбеде.",
  sayUsage: "<text>",

  udDescription: "Ищет определение слова в Urban Dictionary (на английском языке).",
  udUsage: "<слово>",
  wordNotFound: ":x: Слово не найдено.",
  cantShowDefinition: ":x: Я не могу показать это определение здесь.",
  linkToDefinition: link => `Ссылка на определение: [(нажмите сюда)](${link})`,
  example: "Example:",
  author: author => `Author: ${author}`,

  languageDescription: "Меняет ваш язык.",
  languageUsage: "[язык]",
  availableLanguages: "Доступные языки:",
  yourLanguage: "Ваш язык:",
  languagesTip: prefix => `Вы можете сменить язык, введя ${prefix}language [язык]`,
  langDoesntExist: "> :x: Данного языка не существует.",
  langSuccess: name => `> :white_check_mark: Ваш язык был изменен на \`${name}\`.`,

  randomDescription: "Генерирует случайное число в заданном диапазоне.\nЕсли одно число предоставлено, генерирует в диапазоне от 1 до заданного числа.\nЕсли 2 числа предоставлено, генерирует в диапазоне от меньшего до большего числа.",
  randomUsageMax: "<макс>",
  randomUsageMinMax: "<мин> <макc>",
  notANumber: "> :x: Не число.",
  
  xkcdDescription: "Получает случайный комикс xkcd (на англ. языке).",

  roleDescription: "Показывает информацию о указанной роли.",
  roleUsage: "<роль: id, имя или упоминание>",
  roleNotFound: "> :x: Роль не найдена.",
  roleColor: "Цвет:",
  yesNo: what => what ? "Да" : "Нет",
  roleMentionable: "Упоминаемая:",
  roleCreatedAt: "Создана:",
  roleMembers: "Участники с этой ролью:",
  roleHoisted: "Показывается отдельно:",
  roleManaged: "Управляется интеграцией:",

  supportDescription: "Отправляет вопрос на сервер поддержки.\nОбратите внимание, что вам может быть запрещено использование этой команды за флуд/спам/т.п.",
  supportUsage: "<вопрос>",
  supportBan: reason => `> :x: Вам запрещено использовать эту команду. Причина: ${reason || "отсутствует"}`,
  emptyQuestion: "> :warning: Вопрос не может быть пустым.",
  supportSuccess: "> :white_check_mark: Ваш вопрос был успешно отправлен на сервер поддержки. Пожалуйста, ожидайте ответ, это обычно занимает от 5 до 10 минут.",

  respondDescription: "Отвечает на вопрос",
  respondUsage: "<id> <ответ>",
  respondInvalidID: "> :x: Неправильный ID.",
  receivedAnswer: "На ваш вопрос пришел ответ:",
  respondQuestion: "Ваш вопрос:",

  remindmeDescription: "Задает напоминание.\nРазрешенные настройки времени: Ns, Nm, Nh, Nd, где N - число.",
  remindmeUsage: "<время> <текст>",
  remindmeInvalidTime: "> :x: Неправильно указано время.",
  notMoreThan7Days: "> :warning: Вы можете задать напоминание на не более чем 7 дней.",
  textCantBeEmpty: "> :x: Текст не может быть пустым.",
  remindmeSuccess: "> :white_check_mark: Напоминание успешно задано.",
  reminder: "Напоминание:",

  decodeqrDescription: "Декодирует QR-код из изображения.",
  decodeqrUsage: "<изображение: url или вложение>",
  decodeqrInvalidURL: "> :x: Неправильный URL. Возможно, вы указали URL без протокола?",
  decodeqrFail: "> :x: Невозможно декодировать QR-код из этого изображения.",

  discriminatorDescription: "Показывает до 20 пользователей, которые имеют указанный дискриминатор.\nЕсли дискриминатор не указан, показывает пользователей с таким же дискриминатором, как у вас.",
  discriminatorUsage: "[дискриминатор]",
  invalidDiscriminator: "> :x: Вы указали неправильный дискриминатор. Дискриминаторы должны быть в диапазоне от 0001 до 9999",
  discriminatorEmbedTitle: discrim => `Пользователи с дискриминатором #${discrim}:`,
  discriminatorNoUsersFound: "Сейчас я не вижу пользователей с таким дискриминатором.",

  rextesterDescription: "Выполняет ваш код Node.js на Rextester.",
  rextesterUsage: "<код>",
  rextesterError: ":x: Произошла ошибка во время выполнения вашего кода:",
  rextesterCantShowResult: ":x: Результат слишком большой, чтобы его показать.",
  rextesterSuccess: ":white_check_mark: Вот результат выполнения кода:",
  rextesterEmptyResult: "Код вернул пустой результат.",

  infoDescription: "Информация о боте.",
  infoDesc: "Простой в использовании многофункциональный бот, написанный на JavaScript с использованием библиотеки Eris.",
  infoDeveloper: "Разработчик:",
  infoLinks: "Ссылки:",
  infoBotInvite: "Добавить меня на свой сервер",
  infoSupportServer: "Сервер поддержки",
  infoDonate: "Пожертвовать",
  infoGitHubRepo: "Репозиторий GitHub",

  inviteDescription: "Показывает информацию о приглашении.",
  inviteUsage: "<приглашение>",
  inviteInvalid: "> :x: Приглашение неправильное или истек срок его действия.",
  inviteVerificationLevel: "Уровень проверки:",
  inviteChannel: "Канал:",
  inviteMemberCount: "Кол-во участников:",
  inviteInviter: "Приглашающий:",
  inviteMemberCountDesc: (count, presences) => `${count} (${presences} в сети)`,

  embedDescription: "Посылает эмбед из JSON. Вы можете использовать [этот генератор эмбедов](https://leovoel.github.io/embed-visualizer/) или [Discohook](https://discohook.com), чтобы сгенерировать ваш эмбед.",
  embedParseError: ":x: Произошла ошибка при обработке JSON:",
  embedInvalid: "> :x: Эмбед должен быть объектом.",

  prefixDescription: "Задает новый префикс бота.\nЭта команда требует право \"Управлять сервером\".",
  prefixUsage: "[префикс]",
  prefixDesc: prefix => `Мой префикс на этом сервере - \`${prefix}\``,
  prefixFooter: prefix => `Вы можете сменить префикс, введя ${prefix}prefix [префикс]`,
  prefixCantBeLong: "> :x: Префикс не может быть длинее 10 символов.",
  prefixSuccess: prefix => `> :white_check_mark: Теперь мой новый префикс на этом сервере - \`${prefix}\``,

  joinmessageDescription: "Задает сообщение при входе участника на сервер.\n" +
    "Эти ключевые слова могут быть использованы в сообщении:\n" +
    "`{mention}` - будет заменено на упоминание участника\n" +
    "`{tag}` - будет заменено на тег участника\n" +
    "`{server}` - будет заменено на имя сервера\n" +
    "`{memberCount}` - будет заменено на количество участникoв на сервере\n" + 
    "Требует право \"Управлять сервером\".",
  joinmessageUsage: "[канал] [текст]",
  joinmessageDisabled: "Сообщения при входе выключены.",
  joinmessageEnabled: channel => `Сообщения при входе включены в канале ${channel}`,
  joinMessage: "Сообщение:",
  joinmessageInvalidChannel: "> :x: Такого канала не существует либо он не является текстовым.",
  joinmessageEmpty: "> :x: Текст не должен быть пустым.",
  joinmessageSuccess: channel => `> :white_check_mark: Сообщения при входе успешно включены в каналн ${channel}.`,
  joinmessageFooter: prefix => `Вы можете включить сообщения при входе, введя ${prefix}joinmessage [канал] [текст], либо ${prefix}joinmessage disable для выключения.`,
  joinmessageDisableSuccess: "> :white_check_mark: Сообщения при входе были выключены.",

  leavemessageDescription: "Задает сообщение при выходе участника с сервера.\nВсе аналогично команде joinmessage.",
  leavemessageDisabled: "Сообщения при выходе выключены.",
  leavemessageEnabled: "Сообщения при выходе включены.",
  leavemessageDisableSuccess: "> :white_check_mark: Сообщения при выходе были выключены.",
  leavemessageSuccess: channel => `> :white_check_mark: Сооьщения при выходе были успешно включены в канале ${channel}.`,
  leavemessageFooter: prefix => `Вы можеье включить сообщения при выходе, введя ${prefix}leavemessage [канал] [текст], либо ${prefix}leavemessage disable для выключения.`,

  weatherDescription: "Получает текущую погоду в указанном местоположении.",
  weatherUsage: "<местоположение>",
  locationNotFound: "> :x: Местоположение не найдено.",
  weatherEmbedTitle: location => `Погода в ${location}:`,
  weatherTemperature: "Температура:",
  weatherFeelsLike: "Ощущается как:",
  weatherHumidity: "Влажность воздуха:",
  weatherWind: "Ветер:",

  base64Description: "Кодирует ваш текст в base64.\nВы можете использовать ключ -d или --decode для декодирования из base64.",
  base64Usage: "<текст>",
  base64DecodeUsage: "-d <текст> или --decode <текст>",

  antiinviteDescription: "Позволяет управлять вам анти-инвайтом.",
  antiinviteUsage: "[действие: delete, warn, kick, ban или disable]",
  antiinviteEnabled: action => `Анти-инвайт включен с действием \`${action}\``,
  antiinviteDisabled: "Анти-инвайт выключен.",
  antiinviteDisableSuccess: "> :white_check_mark: Анти-инвайт был успешно выключен.",
  antiinviteInvalidAction: "> :x: Вы указали неверное действие для анти-инвайта.",
  antiinviteEnableSuccess: action => `> :white_check_mark: Анти-инвайт был успешно включен с действием \`${action}\`.`,
  antiinviteFooter: prefix => `Вы можете управлять анти-инвайтом, используя ${prefix}antiinvite [действие: delete, warn, kick, ban или disable]`,

  githubDescription: "Ищет и показывает информацию о репозитории на GitHub.",
  githubUsage: "запрос",
  githubRepoNotFound: "> :x: Репозиторий не найден.",
  githubStars: "Звезды:",
  githubForks: "Форки:",
  githubLicense: "Лицензия:",
  githubLanguage: "Язык:",
  githubRepoCreatedAt: "Репозиторий создан:",

  unbanDescription: "Разбанивает указанного пользователя.\nТребует право `Банить участников`.",
  unbanUsage: "<id пользователя>",
  unbanSuccess: user => `${user} разбанен`,
  unbanInvalidUser: "Такого пользователя не существует, или пользователь не забанен.",
  unbanFail: ":x: Не удалось разбанить этого пользователя.",

  playDescription: "Проигрывает указанный трек в голосовом канале.",
  playUsage: "<трек: имя или ссылка>",
  playNotInVoiceChannel: "> :x: Вы не находитесь в голосовом канале.",
  playAddedToQueue: track => `> Добавлено в очередь: \`${track}\``,
  nowPlaying: ":arrow_forward: Сейчас играет:",
  playAuthor: author => `Загружено пользователем: ${author}`,
  allTracksPlayed: "> :stop_button: Все треки проиграны.",
  playlistsNotSupported: "> :x: Плейлисты не поддерживаются.",
  trackNotFound: "> :x: Трек не найден.",
  playFailed: msg => `> :x: Не удалось загрузить трек. \`${msg}\``,
  duration: "Продолжительность:",

  pauseDescription: "Ставит трек на паузу.",
  notPlaying: "> Сейчас ничего не играет.",
  alreadyPaused: "> :pause_button: Трек уже на паузе.",
  paused: prefix => `> :pause_button: На паузе. Введите \`${prefix}resume\` для продолжения воспроизведения.`,

  resumeDescription: "Продолжает воспроизведение трека.",
  alreadyPlaying: "> :arrow_forward: Трек уже воспроизводится.",
  resumed: "> :arrow_forward: Воспроизведение продолжено.",

  stopDescription: "Останавливает проигрывание и чистит очередь.",

  nowplayingDescription: "Показывает трек, который сейчас играет.",

  skipDescription: "Пропускает трек.",
  skipping: "> :fast_forward: Пропущено...",

  queueDescription: "Показывает очередь треков.",
  trackQueue: "Очередь треков:",
  durationRequestedBy: (duration, user) => `Продолжительность: ${duration} | Запросил ${user}`,
  queueIsEmpty: "> Очередь пустая.",
};
