export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Meta
    'meta.title': 'OPN Chat — Message WhatsApp Without Saving Number',
    'meta.description': 'OPN Chat — Message WhatsApp without saving the number. Free, private, no sign-up. Enter any phone number and start chatting instantly on opnchat.net.',
    'meta.keywords': 'OPN Chat, whatsapp without saving number, whatsapp direct, message whatsapp without contact, click to chat, wa.me, opnchat, direct message whatsapp, open chat no contact',
    'meta.og.title': 'OPN Chat — Message WhatsApp Without Saving Number',
    'meta.og.description': 'Start a WhatsApp conversation with any number instantly. No contact saving, no sign-up, 100% private.',
    'meta.twitter.title': 'OPN Chat — Message WhatsApp Without Saving Number',
    'meta.twitter.description': 'Start a WhatsApp conversation with any number instantly. No contact saving, no sign-up, 100% private.',

    // Header
    'header.title': 'OPN Chat',
    'header.subtitle': 'Message WhatsApp Without Saving Number',

    // Form
    'form.label.phone': 'Enter full phone number without +',
    'form.label.message': 'Message',
    'form.addMessage': 'Add a message',
    'form.label.optional': '(optional)',
    'form.placeholder.phone': '7 951 899 4988',
    'form.placeholder.message': "Hi! I'm writing about...",
    'form.hint': 'Include country code (e.g. 7 for Russia, 55 for Brazil, 1 for USA)',
    'form.error.valid': 'Please enter a valid phone number',
    'form.error.short': 'Phone number is too short',
    'form.submit': 'Open Chat in WhatsApp',

    // History
    'history.title': 'Recent Numbers',
    'history.clear': 'Clear',

    // SEO — What Does OPN Stand For
    'seo.opn.heading': 'What Does OPN Stand For?',
    'seo.opn.text': 'OPN is an acronym for <strong>O</strong>nline <strong>P</strong>rivacy <strong>N</strong>etwork. We chose this name because our tool is built from the ground up with a privacy-first approach. We never store, log, or track any phone numbers or messages you enter. Everything happens securely inside your own web browser, ensuring complete data sovereignty.',

    // SEO — WhatsApp Without Saving Number
    'seo.without.heading': 'WhatsApp Without Saving Number',
    'seo.without.text': "OPN Chat lets you start a WhatsApp conversation with any phone number instantly — no need to save the contact first. Whether you're reaching out to a delivery driver, a business, or someone from a marketplace, simply enter their phone number and open a chat directly in WhatsApp. It's the fastest way to message someone on WhatsApp without cluttering your contacts list.",

    // SEO — How It Works
    'seo.how.heading': 'How It Works',
    'seo.how.text': 'Using OPN Chat is simple and takes just a few seconds. Enter the phone number with the country code, and optionally write a message that will be pre-filled in the chat. Click "Open Chat in WhatsApp" and you\'ll be redirected straight to the conversation. No sign-up, no app install, no data stored on any server — everything runs right in your browser.',

    // SEO — Why Use OPN Chat
    'seo.why.heading': 'Why Use OPN Chat?',
    'seo.why.feature1.title': 'Instant Access',
    'seo.why.feature1.desc': 'Open a WhatsApp chat in seconds. No contact saving, no app downloads, no accounts to create.',
    'seo.why.feature2.title': '100% Private',
    'seo.why.feature2.desc': 'No data is stored on our servers. Your phone numbers and messages stay in your browser only.',
    'seo.why.feature3.title': 'Works Everywhere',
    'seo.why.feature3.desc': 'Works with any phone number worldwide. Use it on any device — phone, tablet, or desktop. No install needed.',
    'seo.why.feature4.title': 'Pre-filled Messages',
    'seo.why.feature4.desc': 'Write a message before opening the chat. Perfect for business inquiries, quick introductions, or follow-ups.',

    // SEO — Common Use Cases
    'seo.cases.heading': 'Common Use Cases',
    'seo.cases.text': 'OPN Chat is useful in dozens of everyday situations. Contact a courier or delivery driver without adding them to your phone. Reach out to a seller on a marketplace like Craigslist, OLX, or Avito. Message a business or service provider without saving their number. Send a quick message to someone you just met at an event. Communicate with landlords, taxi drivers, or hotel staff while traveling — all without polluting your contacts.',

    // SEO — WhatsApp Direct Message
    'seo.direct.heading': 'WhatsApp Direct Message — The Smart Way',
    'seo.direct.text': 'Also known as "WhatsApp Direct" or "Click to Chat," OPN Chat uses the official WhatsApp wa.me link protocol to open a chat with any phone number. This means your message is sent through WhatsApp\'s own secure infrastructure. OPN Chat simply provides a convenient interface — we never intercept, read, or store your messages. It\'s the same as typing a wa.me link manually, but faster and easier.',

    // SEO — FAQ
    'seo.faq.heading': 'Frequently Asked Questions',
    'seo.faq.q1': 'Do I need to install anything?',
    'seo.faq.a1': 'No. OPN Chat works in any web browser on any device. You just need WhatsApp installed on your phone or computer to receive the chat.',
    'seo.faq.q2': 'Is my phone number visible to the other person?',
    'seo.faq.a2': 'Yes — if you send a message, the recipient sees your WhatsApp number just like a normal conversation. OPN Chat simply opens the chat; it doesn\'t anonymize your number.',
    'seo.faq.q3': 'Does the other person need to have my number saved?',
    'seo.faq.a3': 'No. Your message will be delivered regardless. However, if they have privacy settings that restrict messages from unknown contacts, they may need to add your number first.',
    'seo.faq.q4': 'Is OPN Chat free?',
    'seo.faq.a4': 'Yes, OPN Chat is completely free to use. No hidden fees, no premium tiers, no ads. We believe in making communication easier for everyone.',
    'seo.faq.q5': 'What happens to the numbers I enter?',
    'seo.faq.a5': "Nothing is sent to our servers. Your recent numbers are stored locally in your browser's localStorage for convenience only. You can clear them anytime by clearing your browser data.",

    // Footer
    'footer.tagline': 'opnchat.net — OPN Chat. No data stored on servers. Everything runs in your browser.',
    'footer.disclaimer': '<strong>Legal Disclaimer:</strong> OPN Chat (opnchat.net) is an independent web application and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Meta Platforms, Inc., WhatsApp LLC, OpenChat DAO, OpenAI, or any of their subsidiaries or affiliates. The official WhatsApp website can be found at <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">whatsapp.com</a>. The names "WhatsApp", "OpenChat", "Open Chat", as well as related names, marks, emblems, and images are registered trademarks of their respective owners. This utility is provided "as is" without warranties of any kind, solely leveraging public URL protocols for user convenience.',

    // Language switcher
    'lang.switch': 'Español',
    'lang.current': 'English',
  },
  es: {
    // Meta
    'meta.title': 'OPN Chat — Mensaje por WhatsApp Sin Guardar el Número',
    'meta.description': 'OPN Chat — Envía un mensaje por WhatsApp sin guardar el número. Gratis, privado, sin registro. Ingresa cualquier número de teléfono y comienza a chatear al instante en opnchat.net.',
    'meta.keywords': 'OPN Chat, whatsapp sin guardar numero, whatsapp directo, mensaje whatsapp sin contacto, click to chat, wa.me, opnchat, mensaje directo whatsapp, chat sin contacto',
    'meta.og.title': 'OPN Chat — Mensaje por WhatsApp Sin Guardar el Número',
    'meta.og.description': 'Inicia una conversación de WhatsApp con cualquier número al instante. Sin guardar contacto, sin registro, 100% privado.',
    'meta.twitter.title': 'OPN Chat — Mensaje por WhatsApp Sin Guardar el Número',
    'meta.twitter.description': 'Inicia una conversación de WhatsApp con cualquier número al instante. Sin guardar contacto, sin registro, 100% privado.',

    // Header
    'header.title': 'OPN Chat',
    'header.subtitle': 'Mensaje por WhatsApp Sin Guardar el Número',

    // Form
    'form.label.phone': 'Ingresa el número completo sin +',
    'form.label.message': 'Mensaje',
    'form.addMessage': 'Agregar un mensaje',
    'form.label.optional': '(opcional)',
    'form.placeholder.phone': '34 612 345 678',
    'form.placeholder.message': '¡Hola! Escribo sobre...',
    'form.hint': 'Incluye el código de país (ej. 34 para España, 52 para México, 54 para Argentina)',
    'form.error.valid': 'Ingresa un número de teléfono válido',
    'form.error.short': 'El número de teléfono es demasiado corto',
    'form.submit': 'Abrir Chat en WhatsApp',

    // History
    'history.title': 'Números Recientes',
    'history.clear': 'Borrar',

    // SEO — What Does OPN Stand For
    'seo.opn.heading': '¿Qué Significa OPN?',
    'seo.opn.text': 'OPN es el acrónimo de <strong>O</strong>nline <strong>P</strong>rivacy <strong>N</strong>etwork (Red de Privacidad en Línea). Elegimos este nombre porque nuestra herramienta está diseñada desde cero con un enfoque centrado en la privacidad. Nunca almacenamos, registramos ni rastreamos ningún número de teléfono o mensaje que ingreses. Todo ocurre de forma segura dentro de tu propio navegador web, garantizando una completa soberanía de datos.',

    // SEO — WhatsApp Without Saving Number
    'seo.without.heading': 'WhatsApp Sin Guardar el Número',
    'seo.without.text': 'OPN Chat te permite iniciar una conversación de WhatsApp con cualquier número de teléfono al instante — sin necesidad de guardar el contacto primero. Ya sea que te comuniques con un repartidor, una empresa o alguien de un marketplace, simplemente ingresa su número de teléfono y abre un chat directamente en WhatsApp. Es la forma más rápida de enviar un mensaje por WhatsApp sin llenar tu lista de contactos.',

    // SEO — How It Works
    'seo.how.heading': 'Cómo Funciona',
    'seo.how.text': 'Usar OPN Chat es sencillo y toma solo unos segundos. Ingresa el número de teléfono con el código de país y, opcionalmente, redacta un mensaje que aparecerá prellenado en el chat. Haz clic en "Abrir Chat en WhatsApp" y serás redirigido directamente a la conversación. Sin registro, sin instalación de apps, sin datos almacenados en ningún servidor — todo funciona directamente en tu navegador.',

    // SEO — Why Use OPN Chat
    'seo.why.heading': '¿Por Qué Usar OPN Chat?',
    'seo.why.feature1.title': 'Acceso Instantáneo',
    'seo.why.feature1.desc': 'Abre un chat de WhatsApp en segundos. Sin guardar contacto, sin descargar apps, sin crear cuentas.',
    'seo.why.feature2.title': '100% Privado',
    'seo.why.feature2.desc': 'No almacenamos datos en nuestros servidores. Tus números y mensajes permanecen solo en tu navegador.',
    'seo.why.feature3.title': 'Funciona en Todas Partes',
    'seo.why.feature3.desc': 'Compatible con cualquier número de teléfono del mundo. Úsalo en cualquier dispositivo — teléfono, tablet o computadora. Sin instalación.',
    'seo.why.feature4.title': 'Mensajes Prellenados',
    'seo.why.feature4.desc': 'Escribe un mensaje antes de abrir el chat. Perfecto para consultas comerciales, presentaciones rápidas o seguimientos.',

    // SEO — Common Use Cases
    'seo.cases.heading': 'Casos de Uso Comunes',
    'seo.cases.text': 'OPN Chat es útil en docenas de situaciones cotidianas. Comunícate con un mensajero o repartidor sin añadirlo a tu teléfono. Contacta a un vendedor en un marketplace como Wallapop, MercadoLibre o OLX. Envía un mensaje a una empresa o proveedor de servicios sin guardar su número. Escribe rápidamente a alguien que acabas de conocer en un evento. Comunícate con propietarios, taxistas o personal de hotel mientras viajas — todo sin llenar tus contactos.',

    // SEO — WhatsApp Direct Message
    'seo.direct.heading': 'Mensaje Directo por WhatsApp — La Forma Inteligente',
    'seo.direct.text': 'También conocido como "WhatsApp Direct" o "Click to Chat", OPN Chat utiliza el protocolo oficial de enlaces wa.me de WhatsApp para abrir un chat con cualquier número de teléfono. Esto significa que tu mensaje se envía a través de la propia infraestructura segura de WhatsApp. OPN Chat simplemente proporciona una interfaz conveniente — nunca interceptamos, leemos ni almacenamos tus mensajes. Es lo mismo que escribir un enlace wa.me manualmente, pero más rápido y fácil.',

    // SEO — FAQ
    'seo.faq.heading': 'Preguntas Frecuentes',
    'seo.faq.q1': '¿Necesito instalar algo?',
    'seo.faq.a1': 'No. OPN Chat funciona en cualquier navegador web en cualquier dispositivo. Solo necesitas tener WhatsApp instalado en tu teléfono o computadora para recibir el chat.',
    'seo.faq.q2': '¿Mi número de teléfono es visible para la otra persona?',
    'seo.faq.a2': 'Sí — si envías un mensaje, el destinatario ve tu número de WhatsApp como en una conversación normal. OPN Chat simplemente abre el chat; no anonimiza tu número.',
    'seo.faq.q3': '¿La otra persona necesita tener mi número guardado?',
    'seo.faq.a3': 'No. Tu mensaje se entregará de todos modos. Sin embargo, si la persona tiene configuraciones de privacidad que restringen mensajes de contactos desconocidos, puede que necesite añadir tu número primero.',
    'seo.faq.q4': '¿OPN Chat es gratuito?',
    'seo.faq.a4': 'Sí, OPN Chat es completamente gratuito. Sin cargos ocultos, sin niveles premium, sin anuncios. Creemos en facilitar la comunicación para todos.',
    'seo.faq.q5': '¿Qué pasa con los números que ingreso?',
    'seo.faq.a5': 'No se envía nada a nuestros servidores. Tus números recientes se almacenan localmente en el localStorage de tu navegador solo por conveniencia. Puedes eliminarlos en cualquier momento borrando los datos de tu navegador.',

    // Footer
    'footer.tagline': 'opnchat.net — OPN Chat. Sin datos en servidores. Todo funciona en tu navegador.',
    'footer.disclaimer': '<strong>Aviso Legal:</strong> OPN Chat (opnchat.net) es una aplicación web independiente y no está afiliada, asociada, autorizada, respaldada ni conectada de ninguna manera oficial con Meta Platforms, Inc., WhatsApp LLC, OpenChat DAO, OpenAI, ni con ninguna de sus filiales. El sitio web oficial de WhatsApp se encuentra en <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">whatsapp.com</a>. Los nombres "WhatsApp", "OpenChat", "Open Chat", así como los nombres, marcas, emblemas e imágenes relacionados son marcas registradas de sus respectivos propietarios. Esta herramienta se proporciona "tal cual" sin garantías de ningún tipo, utilizando únicamente protocolos URL públicos para la comodidad del usuario.',

    // Language switcher
    'lang.switch': 'English',
    'lang.current': 'Español',
  },
  pt: {
    // Meta
    'meta.title': 'OPN Chat — Enviar Mensagem no WhatsApp Sem Salvar Contato',
    'meta.description': 'Inicie uma conversa no WhatsApp com qualquer número instantaneamente. Grátis, privado, sem cadastro. Digite o número e fale direto no opnchat.net.',
    'meta.keywords': 'OPN Chat, whatsapp sem salvar contato, whatsapp direto, enviar mensagem whatsapp sem adicionar, clique para conversar, wa.me, opnchat, mensagem direta whatsapp',
    'meta.og.title': 'OPN Chat — Enviar Mensagem no WhatsApp Sem Salvar Contato',
    'meta.og.description': 'Inicie uma conversa no WhatsApp com qualquer número instantaneamente. Sem salvar contato, sem cadastro, 100% privado.',
    'meta.twitter.title': 'OPN Chat — Enviar Mensagem no WhatsApp Sem Salvar Contato',
    'meta.twitter.description': 'Inicie uma conversa no WhatsApp com qualquer número instantaneamente. Sem salvar contato, sem cadastro, 100% privado.',

    // Header
    'header.title': 'OPN Chat',
    'header.subtitle': 'Enviar Mensagem no WhatsApp Sem Salvar Contato',

    // Form
    'form.label.phone': 'Digite o número completo sem +',
    'form.label.message': 'Mensagem',
    'form.addMessage': 'Adicionar uma mensagem',
    'form.label.optional': '(opcional)',
    'form.placeholder.phone': '55 11 99988 7766',
    'form.placeholder.message': 'Olá! Estou escrevendo sobre...',
    'form.hint': 'Inclua o código do país (ex. 55 para Brasil, 351 para Portugal, 1 para EUA)',
    'form.error.valid': 'Insira um número de telefone válido',
    'form.error.short': 'O número de telefone é muito curto',
    'form.submit': 'Abrir Conversa no WhatsApp',

    // History
    'history.title': 'Números Recentes',
    'history.clear': 'Limpar',

    // SEO — What Does OPN Stand For
    'seo.opn.heading': 'O Que Significa OPN?',
    'seo.opn.text': 'OPN é a sigla para <strong>O</strong>nline <strong>P</strong>rivacy <strong>N</strong>etwork (Rede de Privacidade Online). Escolhemos este nome porque nossa ferramenta foi desenvolvida do zero com foco total na privacidade. Nunca armazenamos, registramos ou rastreamos nenhum número de telefone ou mensagem que você insere. Tudo acontece de forma segura dentro do seu próprio navegador, garantindo total soberania dos seus dados.',

    // SEO — WhatsApp Without Saving Number
    'seo.without.heading': 'WhatsApp Sem Salvar o Número',
    'seo.without.text': 'O OPN Chat permite que você inicie uma conversa no WhatsApp com qualquer número de telefone instantaneamente — sem precisar salvar o contato primeiro. Seja para falar com um entregador, uma empresa ou um vendedor de marketplace, basta digitar o número e abrir o chat direto no WhatsApp. É a forma mais rápida de enviar mensagens no WhatsApp sem lotar sua agenda de contatos.',

    // SEO — How It Works
    'seo.how.heading': 'Como Funciona',
    'seo.how.text': 'Usar o OPN Chat é simples e leva apenas alguns segundos. Digite o número de telefone com o código do país e, se quiser, escreva uma mensagem que já aparecerá preenchida no chat. Clique em "Abrir Conversa no WhatsApp" e você será redirecionado direto para a conversa. Sem cadastro, sem instalar aplicativos, sem dados salvos em servidores — tudo roda direto no seu navegador.',

    // SEO — Why Use OPN Chat
    'seo.why.heading': 'Por Que Usar o OPN Chat?',
    'seo.why.feature1.title': 'Acesso Instantâneo',
    'seo.why.feature1.desc': 'Abra um chat do WhatsApp em segundos. Sem salvar contato, sem baixar apps, sem criar contas.',
    'seo.why.feature2.title': '100% Privado',
    'seo.why.feature2.desc': 'Não guardamos dados em nossos servidores. Seus números e mensagens ficam apenas no seu navegador.',
    'seo.why.feature3.title': 'Funciona em Tudo',
    'seo.why.feature3.desc': 'Funciona com qualquer número de telefone do mundo. Use em qualquer dispositivo — celular, tablet ou computador. Sem instalação.',
    'seo.why.feature4.title': 'Mensagens Preenchidas',
    'seo.why.feature4.desc': 'Escreva uma mensagem antes de abrir o chat. Perfeito para orçamentos, apresentações rápidas ou retornos.',

    // SEO — Common Use Cases
    'seo.cases.heading': 'Casos de Uso Comuns',
    'seo.cases.text': 'O OPN Chat é útil em dezenas de situações do dia a dia. Fale com um motoboy ou entregador sem adicioná-lo ao telefone. Entre em contato com um vendedor no Mercado Livre, OLX ou Facebook Marketplace. Envie uma mensagem para uma empresa ou prestador de serviços sem salvar o número. Mande uma mensagem rápida para alguém que acabou de conhecer em um evento. Fale com proprietários, motoristas de táxi ou funcionários de hotel enquanto viaja — tudo sem poluir seus contatos.',

    // SEO — WhatsApp Direct Message
    'seo.direct.heading': 'Mensagem Direta no WhatsApp — Do Jeito Inteligente',
    'seo.direct.text': 'Também conhecido como "WhatsApp Direto" ou "Clique para Conversar", o OPN Chat utiliza o protocolo de links oficial wa.me do WhatsApp para abrir conversas com qualquer número. Isso significa que sua mensagem é enviada através da própria infraestrutura segura do WhatsApp. O OPN Chat apenas fornece uma interface conveniente — nós nunca interceptamos, lemos ou armazenamos suas mensagens. É exatamente o mesmo que digitar um link wa.me manualmente, só que muito mais rápido e fácil.',

    // SEO — FAQ
    'seo.faq.heading': 'Perguntas Frequentes',
    'seo.faq.q1': 'Preciso instalar alguma coisa?',
    'seo.faq.a1': 'Não. O OPN Chat funciona em qualquer navegador web e em qualquer dispositivo. Você só precisa ter o WhatsApp instalado no seu celular ou computador para receber a conversa.',
    'seo.faq.q2': 'Meu número de telefone fica visível para a outra pessoa?',
    'seo.faq.a2': 'Sim — se você enviar uma mensagem, o destinatário verá seu número de WhatsApp normalmente, como em qualquer conversa. O OPN Chat apenas abre a conversa, ele não torna seu número anônimo.',
    'seo.faq.q3': 'A outra pessoa precisa ter o meu número salvo?',
    'seo.faq.a3': 'Não. Sua mensagem será entregue de qualquer forma. No entanto, se a pessoa tiver configurações de privacidade estritas que restringem mensagens de desconhecidos, ela pode precisar aceitar sua conversa primeiro.',
    'seo.faq.q4': 'O OPN Chat é gratuito?',
    'seo.faq.a4': 'Sim, o OPN Chat é totalmente gratuito. Sem taxas ocultas, sem funções premium e sem anúncios chatos. Acreditamos em facilitar a comunicação para todos.',
    'seo.faq.q5': 'O que acontece com os números que eu digito?',
    'seo.faq.a5': 'Nada é enviado para os nossos servidores. Seus números recentes são armazenados localmente no localStorage do seu navegador apenas para sua conveniência. Você pode apagá-los a qualquer momento limpando os dados do navegador.',

    // Footer
    'footer.tagline': 'opnchat.net — OPN Chat. Sem dados em servidores. Tudo roda no seu navegador.',
    'footer.disclaimer': '<strong>Aviso Legal:</strong> OPN Chat (opnchat.net) é um aplicativo web independente e não é afiliado, associado, autorizado, endossado ou de qualquer forma conectado oficialmente com a Meta Platforms, Inc., WhatsApp LLC, OpenChat DAO, OpenAI ou qualquer uma de suas subsidiárias ou afiliadas. O site oficial do WhatsApp pode ser encontrado em <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">whatsapp.com</a>. Os nomes "WhatsApp", "OpenChat", "Open Chat", bem como nomes, marcas, emblemas e imagens relacionados são marcas registradas de seus respectivos proprietários. Esta ferramenta é fornecida "no estado em que se encontra", sem garantias de qualquer tipo, utilizando exclusivamente protocolos de URL públicos para a conveniência do usuário.',

    // Language switcher
    'lang.switch': 'English',
    'lang.current': 'Português',
  },
} as const;
