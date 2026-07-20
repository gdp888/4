export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  id: 'Bahasa Indonesia',
};

export const langCodes = {
  en: 'ENG',
  es: 'ESP',
  pt: 'POR',
  id: 'IND',
};

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Meta
    'meta.title': 'WhatsApp Without Saving Number — Free & Private | OPN Chat',
    'meta.description': 'Send a WhatsApp message without saving the number. Free, private, no sign-up. Just enter the phone number with country code and chat instantly.',
    'meta.keywords': 'whatsapp without saving number, message whatsapp without saving contact, whatsapp direct message, send whatsapp without adding contact, wa.me link, click to chat whatsapp, whatsapp no save, open whatsapp chat, opnchat, free whatsapp chat',
    'meta.og.title': 'WhatsApp Without Saving Number — Free & Private | OPN Chat',
    'meta.og.description': 'Send a WhatsApp message without saving the number. Free, private, no sign-up. Enter any phone and chat instantly.',
    'meta.twitter.title': 'WhatsApp Without Saving Number — Free & Private',
    'meta.twitter.description': 'Send a WhatsApp message without saving the number. Free, private, no sign-up. Enter any phone and chat instantly.',

    // Header
    'header.title': 'OPN Chat',
    'header.subtitle': 'Message WhatsApp Without Saving Number',
    'header.description': 'Message WhatsApp Without Saving Number',

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
    'footer.disclaimer.link': 'Legal Disclaimer',
    'footer.disclaimer.brief': 'OPN Chat is not affiliated with Meta, WhatsApp, or OpenChat DAO.',
    'footer.blog': 'Blog',
    'footer.telegram': 'Telegram Version',
    'footer.privacy.link': 'Privacy Policy',

    // Blog
    'blog.title': 'Blog',
    'blog.description': 'Tips, guides, and tutorials about WhatsApp messaging.',
    'blog.noPosts': 'No articles yet.',
    'blog.backToBlog': 'Back to Blog',

    // Disclaimer page
    'disclaimer.meta.title': 'Legal Disclaimer — OPN Chat',
    'disclaimer.meta.description': 'Legal disclaimer and terms of use for OPN Chat (opnchat.net). Independent tool, not affiliated with Meta or WhatsApp.',
    'disclaimer.heading': 'Legal Disclaimer',
    'disclaimer.lastUpdated': 'Last updated: July 2026',

    'disclaimer.independence.heading': 'Independent Application',
    'disclaimer.independence.text': 'OPN Chat (opnchat.net) is an independent web application and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Meta Platforms, Inc., WhatsApp LLC, OpenChat DAO, OpenAI, or any of their subsidiaries or affiliates. The official WhatsApp website can be found at <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">whatsapp.com</a>. The names "WhatsApp", "OpenChat", "Open Chat", as well as related names, marks, emblems, and images are registered trademarks of their respective owners.',

    'disclaimer.purpose.heading': 'Purpose of the Service',
    'disclaimer.purpose.text': 'OPN Chat provides a convenient interface for opening WhatsApp conversations using the official wa.me link protocol. This is the same as manually typing a wa.me URL into your browser address bar — we simply make it faster and easier. OPN Chat does not intercept, read, store, or modify any messages sent through WhatsApp. All communication happens directly between your device and WhatsApp\'s servers.',

    'disclaimer.privacy.heading': 'Privacy & Data',
    'disclaimer.privacy.text': 'OPN Chat does not collect, store, or transmit any personal data to external servers. Phone numbers you enter are used solely to generate a wa.me link and are optionally saved in your browser\'s localStorage for your convenience (recent numbers feature). No data is ever sent to our servers or any third party. You can clear your history at any time using the "Clear" button in the app or by clearing your browser data.',

    'disclaimer.warranty.heading': 'No Warranty',
    'disclaimer.warranty.text': 'This utility is provided "as is" without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We make no guarantee that the service will be uninterrupted, timely, secure, or error-free. Use of the service is at your sole risk.',

    'disclaimer.limitation.heading': 'Limitation of Liability',
    'disclaimer.limitation.text': 'In no event shall the creators of OPN Chat be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with the use of the service. This includes, but is not limited to, damages for loss of profits, goodwill, data, or other intangible losses resulting from the use or inability to use the service.',

    'disclaimer.trademarks.heading': 'Trademarks',
    'disclaimer.trademarks.text': 'All product names, logos, brands, and other trademarks featured or referred to within OPN Chat are the property of their respective trademark holders. These trademark holders are not affiliated with OPN Chat, our products, or our website. They do not sponsor or endorse our service.',

    'disclaimer.changes.heading': 'Changes to This Disclaimer',
    'disclaimer.changes.text': 'We reserve the right to update or modify this disclaimer at any time without prior notice. Changes become effective immediately upon being posted on this page. Your continued use of the service after any changes constitutes your acceptance of the updated disclaimer.',

    'disclaimer.back': 'Back to OPN Chat',

    // Privacy Policy page
    'privacy.meta.title': 'Privacy Policy — OPN Chat',
    'privacy.meta.description': 'Privacy policy for OPN Chat (opnchat.net). Learn how we protect your data with privacy-first analytics and no personal data collection.',
    'privacy.heading': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: July 2026',

    'privacy.intro.heading': 'Introduction',
    'privacy.intro.text': 'At OPN Chat (opnchat.net), your privacy is our top priority. This Privacy Policy explains what data we collect, how we use it, and why you can trust us. We built OPN Chat with a "privacy-first" philosophy: we collect the absolute minimum amount of data necessary to operate and improve the service, and we are fully transparent about every tool and technology we use. We do not require you to create an account, and we never ask for personal information such as your name, email address, or phone number.',

    'privacy.nodata.heading': 'No Personal Data Collection',
    'privacy.nodata.text': 'OPN Chat does not collect, store, or transmit any personal data to external servers. Phone numbers you enter are used solely to generate a wa.me or t.me link and are optionally saved in your browser\'s localStorage for your convenience (the "recent numbers" feature). No data is ever sent to our servers or any third party. You can clear your history at any time using the "Clear" button in the app or by clearing your browser data. We have no databases, no user accounts, and no server-side logs that could identify you personally.',

    'privacy.cloudflare.heading': 'Analytics & Data Usage (Cloudflare Web Analytics)',
    'privacy.cloudflare.text': 'We use Cloudflare Web Analytics exclusively to understand general visit statistics and improve our website. This tool is fundamentally different from traditional analytics services like Google Analytics. Here is why Cloudflare Web Analytics is fully compatible with a privacy-first approach:',

    'privacy.cloudflare.nocookie.heading': 'No Cookies',
    'privacy.cloudflare.nocookie.text': 'The Cloudflare Web Analytics script does not set or read any cookies on your device. Unlike most analytics platforms that rely on cookies to track user behavior over time, this tool operates entirely without them. This means there is no persistent identifier stored on your browser, no tracking of your return visits, and no way to build a profile about you across sessions.',

    'privacy.cloudflare.nocross.heading': 'No Cross-Site Tracking',
    'privacy.cloudflare.nocross.text': 'Cloudflare Web Analytics does not track you across different websites. Your activity on opnchat.net is never linked to your activity on any other site. There are no third-party trackers, no advertising networks, and no data sharing with other platforms. What happens on our site stays on our site — and even then, only in an aggregated, anonymized form.',

    'privacy.cloudflare.aggregated.heading': 'Aggregated Data Only',
    'privacy.cloudflare.aggregated.text': 'Only anonymized, aggregated metrics are collected — such as total page views, general geographic region (country level), device type (mobile vs. desktop), and referral source. None of these data points can be used to identify a specific individual. For example, we can see that "500 people from Spain visited the WhatsApp page on mobile devices," but we cannot see who those people are, what their IP addresses are, or what they did on the site.',

    'privacy.cloudflare.nopii.heading': 'No PII Collection',
    'privacy.cloudflare.nopii.text': 'Cloudflare Web Analytics does not collect any Personally Identifiable Information (PII). It does not record names, email addresses, exact IP addresses in an identifiable form, or any other data that could directly or indirectly identify you. The service is designed from the ground up to be incapable of tracking individuals, which is why it complies with GDPR, CCPA, and ePrivacy regulations without requiring a cookie consent banner.',

    'privacy.cloudflare.conclusion.text': 'Because of these characteristics, Cloudflare Web Analytics — similar to privacy-focused alternatives like Plausible or Fathom — does not require an intrusive cookie consent banner in most jurisdictions, including the European Union. We chose this tool specifically because it allows us to understand how our site is used without compromising your privacy.',

    'privacy.localstorage.heading': 'Local Storage (Browser Only)',
    'privacy.localstorage.text': 'OPN Chat uses your browser\'s localStorage to save your recently used phone numbers and usernames. This data never leaves your device — it is not transmitted to any server. You have full control over this data and can clear it at any time by clicking the "Clear" button next to your recent history or by clearing your browser\'s site data. We chose localStorage instead of cookies specifically because it is under your control and cannot be accessed by third parties.',

    'privacy.thirdparty.heading': 'Third-Party Services',
    'privacy.thirdparty.text': 'OPN Chat generates links using the official WhatsApp (wa.me) and Telegram (t.me) protocols. When you click "Open Chat," you are redirected to WhatsApp or Telegram\'s own apps or websites. We have no control over, and are not responsible for, the privacy practices of Meta/WhatsApp or Telegram. We encourage you to review their respective privacy policies. Aside from Cloudflare Web Analytics (described above) and the CDN hosting for our static site, we do not use any other third-party services, scripts, or trackers.',

    'privacy.children.heading': 'Children\'s Privacy',
    'privacy.children.text': 'OPN Chat does not knowingly collect any personal information from children under the age of 13. Since we do not collect personal data from any users regardless of age, our service is inherently safe for minors to use. However, we recommend that parents and guardians supervise their children\'s use of any online tool, including OPN Chat, and review WhatsApp\'s and Telegram\'s own age requirements.',

    'privacy.rights.heading': 'Your Rights',
    'privacy.rights.text': 'Under GDPR (for EU residents) and CCPA (for California residents), you have the right to access, correct, delete, or port your personal data. Since OPN Chat does not collect any personal data in the first place, there is nothing to request, correct, or delete from our side. If you wish to remove your locally stored history, you can do so directly from the app using the "Clear" button or by clearing your browser\'s site data. If you have any questions about your rights or this policy, feel free to contact us at: <a href="mailto:privacy@opnchat.net">privacy@opnchat.net</a>.',

    'privacy.changes.heading': 'Changes to This Policy',
    'privacy.changes.text': 'We reserve the right to update or modify this Privacy Policy at any time. We will indicate the date of the latest revision at the top of this page. For any material changes to how we handle data, we will provide a prominent notice on our website prior to the change becoming effective. We encourage you to review this page periodically to stay informed about how we protect your privacy. Your continued use of the service after any changes constitutes your acceptance of the updated policy.',

    'privacy.back': 'Back to OPN Chat',

    // 404 page
    '404.title': 'Page Not Found',
    '404.heading': '404',
    '404.message': 'Oops! The page you\'re looking for doesn\'t exist.',
    '404.description': 'It might have been moved or deleted, or the URL might be incorrect.',
    '404.back': 'Back to OPN Chat',

    // Telegram
    'tg.meta.title': 'Telegram Without Saving Number — Free & Private | OPN Chat',
    'tg.meta.description': 'Send a Telegram message without saving the number or adding contacts. Free, private, no sign-up. Enter @username or phone number and chat instantly.',
    'tg.meta.keywords': 'telegram without saving number, message telegram without contact, telegram direct message, send telegram without adding contact, t.me link, open telegram chat, telegram no save, opnchat telegram, free telegram chat',
    'tg.meta.og.title': 'OPN Chat — Message Telegram Without Saving Number',
    'tg.meta.og.description': 'Start a Telegram conversation with any username or number instantly. No contact saving, no sign-up, 100% private.',
    'tg.meta.twitter.title': 'OPN Chat — Message Telegram Without Saving Number',
    'tg.meta.twitter.description': 'Start a Telegram conversation with any username or number instantly. No contact saving, no sign-up, 100% private.',
    'tg.header.description': 'Message Telegram Without Saving Number',
    'tg.form.label.input': 'Enter username or phone number',
    'tg.form.placeholder.input': '@username or phone number',
    'tg.form.hint': 'Enter a Telegram @username (e.g. @durov) or phone number with country code (e.g. 7 951 899 4988)',
    'tg.form.hint.plus': 'The + sign before the country code is optional',
    'tg.form.error.username': 'Please enter a valid username (3+ characters)',
    'tg.form.error.phone': 'Please enter a valid phone number',
    'tg.form.error.short': 'Phone number is too short',
    'tg.form.submit': 'Open Chat in Telegram',
    'tg.history.title': 'Recent',
    'tg.history.clear': 'Clear',
    'tg.seo.opn.heading': 'What Does OPN Stand For?',
    'tg.seo.opn.text': 'OPN is an acronym for <strong>O</strong>nline <strong>P</strong>rivacy <strong>N</strong>etwork. We chose this name because our tool is built from the ground up with a privacy-first approach. We never store, log, or track any usernames, phone numbers, or messages you enter. Everything happens securely inside your own web browser, ensuring complete data sovereignty.',
    'tg.seo.without.heading': 'Telegram Without Saving Number',
    'tg.seo.without.text': 'OPN Chat lets you start a Telegram conversation with any username or phone number instantly — no need to save the contact first. Whether you\'re reaching out to a delivery driver, a business, or someone from a marketplace, simply enter their Telegram username or phone number and open a chat directly in Telegram. It\'s the fastest way to message someone on Telegram without cluttering your contacts list.',
    'tg.seo.how.heading': 'How It Works',
    'tg.seo.how.text': 'Using OPN Chat for Telegram is simple and takes just a few seconds. Enter a Telegram @username or a phone number with country code, and optionally write a message that will be pre-filled in the chat. Click "Open Chat in Telegram" and you\'ll be redirected straight to the conversation. No sign-up, no app install, no data stored on any server — everything runs right in your browser.',
    'tg.seo.why.heading': 'Why Use OPN Chat for Telegram?',
    'tg.seo.why.feature1.title': 'Instant Access',
    'tg.seo.why.feature1.desc': 'Open a Telegram chat in seconds. No contact saving, no app downloads, no accounts to create.',
    'tg.seo.why.feature2.title': '100% Private',
    'tg.seo.why.feature2.desc': 'No data is stored on our servers. Your usernames, phone numbers and messages stay in your browser only.',
    'tg.seo.why.feature3.title': 'Works Everywhere',
    'tg.seo.why.feature3.desc': 'Works with any Telegram username or phone number worldwide. Use it on any device — phone, tablet, or desktop.',
    'tg.seo.why.feature4.title': 'Username or Phone',
    'tg.seo.why.feature4.desc': 'Enter a @username for direct messaging or a phone number to find someone on Telegram. One field, both options.',
    'tg.seo.cases.heading': 'Common Use Cases',
    'tg.seo.cases.text': 'OPN Chat for Telegram is useful in dozens of everyday situations. Contact a freelancer or contractor without adding them to your contacts. Reach out to a seller on a marketplace or community group. Message a business or support channel without saving their number. Send a quick message to someone you just met at an event. Communicate with travel guides, hotel staff, or local services while traveling — all without polluting your contacts.',
    'tg.seo.direct.heading': 'Telegram Direct Message — The Smart Way',
    'tg.seo.direct.text': 'OPN Chat for Telegram uses the official t.me link protocol to open a chat with any username or phone number. This means your message is sent through Telegram\'s own secure infrastructure. OPN Chat simply provides a convenient interface — we never intercept, read, or store your messages. It\'s the same as typing a t.me link manually, but faster and easier.',
    'tg.seo.faq.heading': 'Frequently Asked Questions',
    'tg.seo.faq.q1': 'Do I need to install anything?',
    'tg.seo.faq.a1': 'No. OPN Chat works in any web browser. You just need Telegram installed on your device to open the chat.',
    'tg.seo.faq.q2': 'Can I message someone by username?',
    'tg.seo.faq.a2': 'Yes! Simply enter their @username (e.g. @durov) and OPN Chat will open a direct chat with them on Telegram. No phone number needed.',
    'tg.seo.faq.q3': 'Can I also use a phone number?',
    'tg.seo.faq.a3': 'Yes. Enter a phone number with the country code and OPN Chat will open a Telegram chat with that number using the t.me/+number format.',
    'tg.seo.faq.q4': 'Is OPN Chat free?',
    'tg.seo.faq.a4': 'Yes, OPN Chat is completely free to use. No hidden fees, no premium tiers, no ads. We believe in making communication easier for everyone.',
    'tg.seo.faq.q5': 'What happens to the data I enter?',
    'tg.seo.faq.a5': 'Nothing is sent to our servers. Your recent entries are stored locally in your browser\'s localStorage for convenience only. You can clear them anytime.',
    'tg.footer.tagline': 'opnchat.net — OPN Chat Telegram. No data stored on servers. Everything runs in your browser.',
    'tg.footer.disclaimer.brief': 'OPN Chat is not affiliated with Telegram or Telegram FZ-LLC.',
    'tg.footer.whatsapp': 'WhatsApp Version',

    // Hub page
    'hub.meta.title': 'OPN Chat — Free Online Tools: WhatsApp & Telegram Without Saving Number',
    'hub.meta.description': 'Free online tools that run in your browser. Send WhatsApp and Telegram messages without saving numbers. No sign-up, no data on servers. Private and instant.',
    'hub.meta.keywords': 'whatsapp without saving number, telegram without saving number, free online tools, private browser tools, send message without contact, wa.me, t.me, opnchat',
    'hub.hero.title': 'Free Online Tools',
    'hub.hero.subtitle': 'Private. Instant. No sign-up. Everything runs in your browser.',
    'hub.service.whatsapp.title': 'WhatsApp',
    'hub.service.whatsapp.desc': 'Message any WhatsApp number without saving it to your contacts. Fast, private, free.',
    'hub.service.whatsapp.cta': 'Open WhatsApp',
    'hub.service.telegram.title': 'Telegram',
    'hub.service.telegram.desc': 'Message any Telegram username or phone number without adding contacts. One smart input field.',
    'hub.service.telegram.cta': 'Open Telegram',
    'hub.service.more.title': 'More Tools Coming Soon',
    'hub.service.more.desc': 'QR codes, timers, password generators and more — all private, all free, all in your browser.',
    'hub.seo.what.heading': 'What Is OPN Chat?',
    'hub.seo.what.text': 'OPN Chat is a collection of free online tools built with a privacy-first approach. Every tool runs entirely in your web browser — no data is ever sent to our servers. Whether you need to send a WhatsApp message without saving a number, reach someone on Telegram without adding contacts, or use other everyday utilities, OPN Chat provides a fast, private, and sign-up-free experience. The name OPN stands for Online Privacy Network, reflecting our core principle: your data stays with you.',
    'hub.seo.why.heading': 'Why People Use OPN Chat',
    'hub.seo.why.text': 'People use OPN Chat for its simplicity and privacy. There are no accounts to create, no personal data to enter, and no ads to close. Each tool does one thing well — open a chat, generate a code, convert a unit — and gets out of your way. All processing happens locally in your browser using official link protocols (wa.me for WhatsApp, t.me for Telegram), so your messages go directly through the official apps. Nothing is intercepted, stored, or tracked.',

    // Language switcher
    'lang.switch': 'Español',
    'lang.current': 'English',
  },
  es: {
    // Meta
    'meta.title': 'WhatsApp Sin Guardar Número — Gratis y Privado | OPN Chat',
    'meta.description': 'Escribe por WhatsApp sin guardar el número. Gratis, privado, sin registro. Ingresa el número con código de país y chatea al instante.',
    'meta.keywords': 'whatsapp sin guardar numero, enviar whatsapp sin guardar contacto, mensaje whatsapp sin contacto, whatsapp directo, wa.me link, click to chat whatsapp, whatsapp sin agregar, abrir chat whatsapp, opnchat, whatsapp gratis',
    'meta.og.title': 'WhatsApp Sin Guardar Número — Gratis y Privado | OPN Chat',
    'meta.og.description': 'Escribe por WhatsApp sin guardar el número. Gratis, privado, sin registro. Ingresa cualquier número y chatea al instante.',
    'meta.twitter.title': 'WhatsApp Sin Guardar Número — Gratis y Privado',
    'meta.twitter.description': 'Escribe por WhatsApp sin guardar el número. Gratis, privado, sin registro. Ingresa cualquier número y chatea al instante.',

    // Header
    'header.title': 'OPN Chat',
    'header.subtitle': 'Mensaje por WhatsApp Sin Guardar el Número',
    'header.description': 'Mensaje por WhatsApp Sin Guardar el Número',

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
    'footer.disclaimer.link': 'Aviso Legal',
    'footer.disclaimer.brief': 'OPN Chat no está afiliado con Meta, WhatsApp ni OpenChat DAO.',
    'footer.blog': 'Blog',
    'footer.telegram': 'Versión Telegram',
    'footer.privacy.link': 'Política de Privacidad',

    // Blog
    'blog.title': 'Blog',
    'blog.description': 'Consejos, guías y tutoriales sobre mensajería por WhatsApp.',
    'blog.noPosts': 'Sin artículos aún.',
    'blog.backToBlog': 'Volver al Blog',

    // Disclaimer page
    'disclaimer.meta.title': 'Aviso Legal — OPN Chat',
    'disclaimer.meta.description': 'Aviso legal y condiciones de uso de OPN Chat (opnchat.net). Herramienta independiente, no afiliada con Meta ni WhatsApp.',
    'disclaimer.heading': 'Aviso Legal',
    'disclaimer.lastUpdated': 'Última actualización: Julio 2026',

    'disclaimer.independence.heading': 'Aplicación Independiente',
    'disclaimer.independence.text': 'OPN Chat (opnchat.net) es una aplicación web independiente y no está afiliada, asociada, autorizada, respaldada ni conectada de ninguna manera oficial con Meta Platforms, Inc., WhatsApp LLC, OpenChat DAO, OpenAI, ni con ninguna de sus filiales. El sitio web oficial de WhatsApp se encuentra en <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">whatsapp.com</a>. Los nombres "WhatsApp", "OpenChat", "Open Chat", así como los nombres, marcas, emblemas e imágenes relacionados son marcas registradas de sus respectivos propietarios.',

    'disclaimer.purpose.heading': 'Propósito del Servicio',
    'disclaimer.purpose.text': 'OPN Chat proporciona una interfaz conveniente para abrir conversaciones de WhatsApp utilizando el protocolo oficial de enlaces wa.me. Esto es lo mismo que escribir manualmente una URL wa.me en la barra de direcciones de tu navegador — simplemente lo hacemos más rápido y fácil. OPN Chat no intercepta, lee, almacena ni modifica ningún mensaje enviado a través de WhatsApp. Toda la comunicación ocurre directamente entre tu dispositivo y los servidores de WhatsApp.',

    'disclaimer.privacy.heading': 'Privacidad y Datos',
    'disclaimer.privacy.text': 'OPN Chat no recopila, almacena ni transmite ningún dato personal a servidores externos. Los números de teléfono que ingresas se utilizan únicamente para generar un enlace wa.me y, opcionalmente, se guardan en el localStorage de tu navegador para tu conveniencia (función de números recientes). Nunca se envían datos a nuestros servidores ni a terceros. Puedes limpiar tu historial en cualquier momento usando el botón "Borrar" en la aplicación o limpiando los datos de tu navegador.',

    'disclaimer.warranty.heading': 'Sin Garantía',
    'disclaimer.warranty.text': 'Esta herramienta se proporciona "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo pero no limitándose a las garantías implícitas de comercialización, idoneidad para un propósito particular o no infracción. No garantizamos que el servicio sea ininterrumpido, oportuno, seguro o libre de errores. El uso del servicio es bajo tu propio riesgo.',

    'disclaimer.limitation.heading': 'Limitación de Responsabilidad',
    'disclaimer.limitation.text': 'En ningún caso los creadores de OPN Chat serán responsables de ningún daño directo, indirecto, incidental, especial, consecuencial o ejemplar que surja de o en conexión con el uso del servicio. Esto incluye, pero no se limita a, daños por pérdida de beneficios, buena voluntad, datos u otras pérdidas intangibles resultantes del uso o la imposibilidad de uso del servicio.',

    'disclaimer.trademarks.heading': 'Marcas Registradas',
    'disclaimer.trademarks.text': 'Todos los nombres de productos, logotipos, marcas y otras marcas comerciales que aparecen o se mencionan en OPN Chat son propiedad de sus respectivos titulares. Estos titulares de marcas no están afiliados con OPN Chat, nuestros productos o nuestro sitio web. No patrocinan ni respaldan nuestro servicio.',

    'disclaimer.changes.heading': 'Cambios en Este Aviso',
    'disclaimer.changes.text': 'Nos reservamos el derecho de actualizar o modificar este aviso legal en cualquier momento sin previo aviso. Los cambios entran en vigor inmediatamente después de su publicación en esta página. Tu uso continuado del servicio después de cualquier cambio constituye tu aceptación del aviso actualizado.',

    'disclaimer.back': 'Volver a OPN Chat',

    // Privacy Policy page
    'privacy.meta.title': 'Política de Privacidad — OPN Chat',
    'privacy.meta.description': 'Política de privacidad de OPN Chat (opnchat.net). Conozca cómo protegemos sus datos con analítica privacy-first y sin recopilación de datos personales.',
    'privacy.heading': 'Política de Privacidad',
    'privacy.lastUpdated': 'Última actualización: Julio 2026',

    'privacy.intro.heading': 'Introducción',
    'privacy.intro.text': 'En OPN Chat (opnchat.net), su privacidad es nuestra máxima prioridad. Esta Política de Privacidad explica qué datos recopilamos, cómo los usamos y por qué puede confiar en nosotros. Construimos OPN Chat con una filosofía "privacy-first": recopilamos la cantidad mínima absoluta de datos necesarios para operar y mejorar el servicio, y somos completamente transparentes sobre cada herramienta y tecnología que utilizamos. No requiere que cree una cuenta y nunca le pedimos información personal como su nombre, dirección de correo electrónico o número de teléfono.',

    'privacy.nodata.heading': 'Sin Recopilación de Datos Personales',
    'privacy.nodata.text': 'OPN Chat no recopila, almacena ni transmite ningún dato personal a servidores externos. Los números de teléfono que ingresa se utilizan únicamente para generar un enlace wa.me o t.me y, opcionalmente, se guardan en el localStorage de su navegador para su conveniencia (la función de "números recientes"). Nunca se envían datos a nuestros servidores ni a terceros. Puede limpiar su historial en cualquier momento usando el botón "Borrar" en la aplicación o limpiando los datos de su navegador. No tenemos bases de datos, cuentas de usuario ni registros del lado del servidor que puedan identificarle personalmente.',

    'privacy.cloudflare.heading': 'Analítica y Uso de Datos (Cloudflare Web Analytics)',
    'privacy.cloudflare.text': 'Utilizamos Cloudflare Web Analytics exclusivamente para comprender las estadísticas generales de visitas y mejorar nuestro sitio web. Esta herramienta es fundamentalmente diferente de los servicios de analítica tradicionales como Google Analytics. Aquí le explicamos por qué Cloudflare Web Analytics es totalmente compatible con un enfoque privacy-first:',

    'privacy.cloudflare.nocookie.heading': 'Sin Cookies',
    'privacy.cloudflare.nocookie.text': 'El script de Cloudflare Web Analytics no establece ni lee ninguna cookie en su dispositivo. A diferencia de la mayoría de las plataformas de analítica que dependen de cookies para rastrear el comportamiento del usuario a lo largo del tiempo, esta herramienta opera completamente sin ellas. Esto significa que no hay ningún identificador persistente almacenado en su navegador, no se rastrea sus visitas recurrentes y no hay forma de crear un perfil sobre usted entre sesiones.',

    'privacy.cloudflare.nocross.heading': 'Sin Rastreo Entre Sitios',
    'privacy.cloudflare.nocross.text': 'Cloudflare Web Analytics no le rastrea entre diferentes sitios web. Su actividad en opnchat.net nunca se vincula con su actividad en ningún otro sitio. No hay rastreadores de terceros, redes publicitarias ni intercambio de datos con otras plataformas. Lo que sucede en nuestro sitio se queda en nuestro sitio — e incluso entonces, solo de forma agregada y anonimizada.',

    'privacy.cloudflare.aggregated.heading': 'Solo Datos Agregados',
    'privacy.cloudflare.aggregated.text': 'Solo se recopilan métricas anonimizadas y agregadas — como el total de páginas vistas, la región geográfica general (nivel de país), el tipo de dispositivo (móvil vs. escritorio) y la fuente de referencia. Ninguno de estos puntos de datos puede utilizarse para identificar a un individuo específico. Por ejemplo, podemos ver que "500 personas de España visitaron la página de WhatsApp en dispositivos móviles", pero no podemos ver quiénes son esas personas, cuáles son sus direcciones IP ni qué hicieron en el sitio.',

    'privacy.cloudflare.nopii.heading': 'Sin Recopilación de PII',
    'privacy.cloudflare.nopii.text': 'Cloudflare Web Analytics no recopila ninguna Información de Identificación Personal (PII). No registra nombres, direcciones de correo electrónico, direcciones IP exactas de forma identificable ni ningún otro dato que pueda identificarle directa o indirectamente. El servicio está diseñado desde sus cimientos para ser incapaz de rastrear individuos, por lo que cumple con las regulaciones GDPR, CCPA y ePrivacy sin requerir un banner de consentimiento de cookies.',

    'privacy.cloudflare.conclusion.text': 'Gracias a estas características, Cloudflare Web Analytics — similar a alternativas enfocadas en la privacidad como Plausible o Fathom — no requiere un banner intrusivo de consentimiento de cookies en la mayoría de las jurisdicciones, incluyendo la Unión Europea. Elegimos esta herramienta específicamente porque nos permite entender cómo se usa nuestro sitio sin comprometer su privacidad.',

    'privacy.localstorage.heading': 'Almacenamiento Local (Solo en el Navegador)',
    'privacy.localstorage.text': 'OPN Chat utiliza el localStorage de su navegador para guardar los números de teléfono y nombres de usuario utilizados recientemente. Estos datos nunca salen de su dispositivo — no se transmiten a ningún servidor. Usted tiene control total sobre estos datos y puede eliminarlos en cualquier momento haciendo clic en el botón "Borrar" junto a su historial reciente o limpiando los datos del sitio en su navegador. Elegimos localStorage en lugar de cookies específicamente porque está bajo su control y no puede ser accedido por terceros.',

    'privacy.thirdparty.heading': 'Servicios de Terceros',
    'privacy.thirdparty.text': 'OPN Chat genera enlaces utilizando los protocolos oficiales de WhatsApp (wa.me) y Telegram (t.me). Cuando hace clic en "Abrir Chat", es redirigido a las propias aplicaciones o sitios web de WhatsApp o Telegram. No tenemos control sobre las prácticas de privacidad de Meta/WhatsApp o Telegram, ni somos responsables de ellas. Le recomendamos revisar sus respectivas políticas de privacidad. Aparte de Cloudflare Web Analytics (descrito anteriormente) y el alojamiento CDN para nuestro sitio estático, no utilizamos ningún otro servicio, script o rastreador de terceros.',

    'privacy.children.heading': 'Privacidad de Menores',
    'privacy.children.text': 'OPN Chat no recopila conscientemente ninguna información personal de menores de 13 años. Dado que no recopilamos datos personales de ningún usuario independientemente de su edad, nuestro servicio es inherentemente seguro para que lo usen menores. Sin embargo, recomendamos que los padres y tutores supervisen el uso que sus hijos hacen de cualquier herramienta en línea, incluyendo OPN Chat, y revisen los requisitos de edad de WhatsApp y Telegram.',

    'privacy.rights.heading': 'Sus Derechos',
    'privacy.rights.text': 'Bajo el GDPR (para residentes de la UE) y el CCPA (para residentes de California), usted tiene derecho a acceder, corregir, eliminar o portar sus datos personales. Dado que OPN Chat no recopila datos personales en primer lugar, no hay nada que solicitar, corregir o eliminar por nuestra parte. Si desea eliminar su historial almacenado localmente, puede hacerlo directamente desde la aplicación usando el botón "Borrar" o limpiando los datos del sitio en su navegador. Si tiene preguntas sobre sus derechos o esta política, no dude en contactarnos en: <a href="mailto:privacy@opnchat.net">privacy@opnchat.net</a>.',

    'privacy.changes.heading': 'Cambios en Esta Política',
    'privacy.changes.text': 'Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Indicaremos la fecha de la última revisión en la parte superior de esta página. Para cualquier cambio material en la forma en que manejamos los datos, proporcionaremos un aviso destacado en nuestro sitio web antes de que el cambio entre en vigor. Le recomendamos revisar esta página periódicamente para mantenerse informado sobre cómo protegemos su privacidad. Su uso continuado del servicio después de cualquier cambio constituye su aceptación de la política actualizada.',

    'privacy.back': 'Volver a OPN Chat',

    // 404 page
    '404.title': 'Página No Encontrada',
    '404.heading': '404',
    '404.message': '¡Ups! La página que buscas no existe.',
    '404.description': 'Puede que haya sido movida o eliminada, o que la URL sea incorrecta.',
    '404.back': 'Volver a OPN Chat',

    // Telegram
    'tg.meta.title': 'Telegram Sin Guardar Número — Gratis y Privado | OPN Chat',
    'tg.meta.description': 'Escribe por Telegram sin guardar el número ni añadir contactos. Gratis, privado, sin registro. Ingresa @usuario o número y chatea al instante.',
    'tg.meta.keywords': 'telegram sin guardar numero, enviar telegram sin contacto, mensaje telegram sin agregar, telegram directo, t.me link, abrir chat telegram, telegram sin añadir contacto, opnchat telegram, telegram gratis',
    'tg.meta.og.title': 'OPN Chat — Mensaje por Telegram Sin Guardar el Número',
    'tg.meta.og.description': 'Inicia una conversación de Telegram con cualquier usuario o número al instante. Sin guardar contacto, sin registro, 100% privado.',
    'tg.meta.twitter.title': 'OPN Chat — Mensaje por Telegram Sin Guardar el Número',
    'tg.meta.twitter.description': 'Inicia una conversación de Telegram con cualquier usuario o número al instante. Sin guardar contacto, sin registro, 100% privado.',
    'tg.header.description': 'Mensaje por Telegram Sin Guardar el Número',
    'tg.form.label.input': 'Ingresa nombre de usuario o número de teléfono',
    'tg.form.placeholder.input': '@usuario o número de teléfono',
    'tg.form.hint': 'Ingresa un nombre de usuario de Telegram (ej. @durov) o un número de teléfono con código de país (ej. 34 612 345 678)',
    'tg.form.hint.plus': 'El signo + antes del código de país es opcional',
    'tg.form.error.username': 'Ingresa un nombre de usuario válido (3+ caracteres)',
    'tg.form.error.phone': 'Ingresa un número de teléfono válido',
    'tg.form.error.short': 'El número de teléfono es demasiado corto',
    'tg.form.submit': 'Abrir Chat en Telegram',
    'tg.history.title': 'Recientes',
    'tg.history.clear': 'Borrar',
    'tg.seo.opn.heading': '¿Qué Significa OPN?',
    'tg.seo.opn.text': 'OPN es el acrónimo de <strong>O</strong>nline <strong>P</strong>rivacy <strong>N</strong>etwork (Red de Privacidad en Línea). Elegimos este nombre porque nuestra herramienta está diseñada desde cero con un enfoque centrado en la privacidad. Nunca almacenamos, registramos ni rastreamos ningún nombre de usuario, número de teléfono o mensaje que ingreses. Todo ocurre de forma segura dentro de tu propio navegador web.',
    'tg.seo.without.heading': 'Telegram Sin Guardar el Número',
    'tg.seo.without.text': 'OPN Chat te permite iniciar una conversación de Telegram con cualquier nombre de usuario o número de teléfono al instante — sin necesidad de guardar el contacto primero. Ya sea que te comuniques con un repartidor, una empresa o alguien de un marketplace, simplemente ingresa su nombre de usuario o número de teléfono y abre un chat directamente en Telegram.',
    'tg.seo.how.heading': 'Cómo Funciona',
    'tg.seo.how.text': 'Usar OPN Chat para Telegram es sencillo y toma solo unos segundos. Ingresa un nombre de usuario de Telegram (@usuario) o un número de teléfono con código de país y, opcionalmente, redacta un mensaje. Haz clic en "Abrir Chat en Telegram" y serás redirigido directamente a la conversación. Sin registro, sin instalación, sin datos almacenados en ningún servidor.',
    'tg.seo.why.heading': '¿Por Qué Usar OPN Chat para Telegram?',
    'tg.seo.why.feature1.title': 'Acceso Instantáneo',
    'tg.seo.why.feature1.desc': 'Abre un chat de Telegram en segundos. Sin guardar contacto, sin descargar apps, sin crear cuentas.',
    'tg.seo.why.feature2.title': '100% Privado',
    'tg.seo.why.feature2.desc': 'No almacenamos datos en nuestros servidores. Tus nombres de usuario, números y mensajes permanecen solo en tu navegador.',
    'tg.seo.why.feature3.title': 'Funciona en Todas Partes',
    'tg.seo.why.feature3.desc': 'Compatible con cualquier nombre de usuario o número de teléfono del mundo. Úsalo en cualquier dispositivo.',
    'tg.seo.why.feature4.title': 'Usuario o Teléfono',
    'tg.seo.why.feature4.desc': 'Ingresa un @usuario para mensaje directo o un número de teléfono para encontrar a alguien en Telegram. Un campo, ambas opciones.',
    'tg.seo.cases.heading': 'Casos de Uso Comunes',
    'tg.seo.cases.text': 'OPN Chat para Telegram es útil en docenas de situaciones cotidianas. Comunícate con un freelancer o contratista sin añadirlo a tus contactos. Contacta a un vendedor en un marketplace o grupo comunitario. Envía un mensaje a una empresa o canal de soporte sin guardar su número. Escribe rápidamente a alguien que acabas de conocer en un evento.',
    'tg.seo.direct.heading': 'Mensaje Directo por Telegram — La Forma Inteligente',
    'tg.seo.direct.text': 'OPN Chat para Telegram utiliza el protocolo oficial de enlaces t.me para abrir un chat con cualquier nombre de usuario o número de teléfono. Esto significa que tu mensaje se envía a través de la propia infraestructura segura de Telegram. OPN Chat simplemente proporciona una interfaz conveniente — nunca interceptamos, leemos ni almacenamos tus mensajes.',
    'tg.seo.faq.heading': 'Preguntas Frecuentes',
    'tg.seo.faq.q1': '¿Necesito instalar algo?',
    'tg.seo.faq.a1': 'No. OPN Chat funciona en cualquier navegador web. Solo necesitas tener Telegram instalado en tu dispositivo para abrir el chat.',
    'tg.seo.faq.q2': '¿Puedo enviar un mensaje por nombre de usuario?',
    'tg.seo.faq.a2': '¡Sí! Simplemente ingresa su @usuario (ej. @durov) y OPN Chat abrirá un chat directo con ellos en Telegram. No necesitas número de teléfono.',
    'tg.seo.faq.q3': '¿También puedo usar un número de teléfono?',
    'tg.seo.faq.a3': 'Sí. Ingresa un número de teléfono con el código de país y OPN Chat abrirá un chat de Telegram con ese número usando el formato t.me/+número.',
    'tg.seo.faq.q4': '¿OPN Chat es gratis?',
    'tg.seo.faq.a4': 'Sí, OPN Chat es completamente gratis. Sin tarifas ocultas, sin niveles premium, sin anuncios.',
    'tg.seo.faq.q5': '¿Qué pasa con los datos que ingreso?',
    'tg.seo.faq.a5': 'Nada se envía a nuestros servidores. Tus entradas recientes se almacenan localmente en tu navegador solo por conveniencia. Puedes borrarlas en cualquier momento.',
    'tg.footer.tagline': 'opnchat.net — OPN Chat Telegram. Sin datos en servidores. Todo funciona en tu navegador.',
    'tg.footer.disclaimer.brief': 'OPN Chat no está afiliado con Telegram ni Telegram FZ-LLC.',
    'tg.footer.whatsapp': 'Versión WhatsApp',

    // Hub page
    'hub.meta.title': 'OPN Chat — Herramientas Gratis: WhatsApp y Telegram Sin Guardar Número',
    'hub.meta.description': 'Herramientas online gratis que funcionan en tu navegador. Escribe por WhatsApp y Telegram sin guardar números. Sin registro, sin datos en servidores. Privado e instantáneo.',
    'hub.meta.keywords': 'whatsapp sin guardar numero, telegram sin guardar numero, herramientas online gratis, herramientas privadas, enviar mensaje sin contacto, wa.me, t.me, opnchat',
    'hub.hero.title': 'Herramientas Online Gratuitas',
    'hub.hero.subtitle': 'Privadas. Instantáneas. Sin registro. Todo funciona en tu navegador.',
    'hub.service.whatsapp.title': 'WhatsApp',
    'hub.service.whatsapp.desc': 'Envía un mensaje a cualquier número de WhatsApp sin guardarlo en tus contactos. Rápido, privado, gratis.',
    'hub.service.whatsapp.cta': 'Abrir WhatsApp',
    'hub.service.telegram.title': 'Telegram',
    'hub.service.telegram.desc': 'Envía un mensaje a cualquier usuario o número de Telegram sin añadir contactos. Un solo campo inteligente.',
    'hub.service.telegram.cta': 'Abrir Telegram',
    'hub.service.more.title': 'Más Herramientas Próximamente',
    'hub.service.more.desc': 'Códigos QR, temporizadores, generadores de contraseñas y más — todo privado, todo gratis, todo en tu navegador.',
    'hub.seo.what.heading': '¿Qué Es OPN Chat?',
    'hub.seo.what.text': 'OPN Chat es una colección de herramientas online gratuitas diseñadas con un enfoque centrado en la privacidad. Cada herramienta funciona completamente en tu navegador web — ningún dato se envía a nuestros servidores. Ya sea que necesites enviar un mensaje por WhatsApp sin guardar un número, contactar a alguien en Telegram sin añadir contactos, o usar otras utilidades cotidianas, OPN Chat ofrece una experiencia rápida, privada y sin registro. El nombre OPN significa Online Privacy Network, reflejando nuestro principio fundamental: tus datos se quedan contigo.',
    'hub.seo.why.heading': '¿Por Qué la Gente Usa OPN Chat',
    'hub.seo.why.text': 'La gente usa OPN Chat por su simplicidad y privacidad. No hay cuentas que crear, no hay datos personales que ingresar y no hay anuncios que cerrar. Cada herramienta hace una cosa bien — abrir un chat, generar un código, convertir una unidad — y no te estorba. Todo el procesamiento ocurre localmente en tu navegador usando protocolos de enlaces oficiales (wa.me para WhatsApp, t.me para Telegram), así que tus mensajes van directamente a través de las apps oficiales. Nada es interceptado, almacenado ni rastreado.',

    // Language switcher
    'lang.switch': 'English',
    'lang.current': 'Español',
  },
  pt: {
    // Meta
    'meta.title': 'WhatsApp Sem Salvar Contato — Grátis e Privado | OPN Chat',
    'meta.description': 'Envie mensagem no WhatsApp sem salvar o contato. Grátis, privado, sem cadastro. Digite o número com DDD e converse direto.',
    'meta.keywords': 'whatsapp sem salvar contato, enviar whatsapp sem adicionar, mensagem whatsapp sem salvar numero, whatsapp direto, wa.me link, clique para conversar, whatsapp sem cadastrar, abrir chat whatsapp, opnchat, whatsapp gratis',
    'meta.og.title': 'WhatsApp Sem Salvar Contato — Grátis e Privado | OPN Chat',
    'meta.og.description': 'Envie mensagem no WhatsApp sem salvar o contato. Grátis, privado, sem cadastro. Digite qualquer número e converse direto.',
    'meta.twitter.title': 'WhatsApp Sem Salvar Contato — Grátis e Privado',
    'meta.twitter.description': 'Envie mensagem no WhatsApp sem salvar o contato. Grátis, privado, sem cadastro. Digite qualquer número e converse direto.',

    // Header
    'header.title': 'OPN Chat',
    'header.subtitle': 'Enviar Mensagem no WhatsApp Sem Salvar Contato',
    'header.description': 'Enviar Mensagem no WhatsApp Sem Salvar Contato',

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
    'footer.disclaimer.link': 'Aviso Legal',
    'footer.disclaimer.brief': 'OPN Chat não é afiliado à Meta, WhatsApp ou OpenChat DAO.',
    'footer.blog': 'Blog',
    'footer.telegram': 'Versão Telegram',
    'footer.privacy.link': 'Política de Privacidade',

    // Blog
    'blog.title': 'Blog',
    'blog.description': 'Dicas, guias e tutoriais sobre mensagens no WhatsApp.',
    'blog.noPosts': 'Nenhum artigo ainda.',
    'blog.backToBlog': 'Voltar ao Blog',

    // Disclaimer page
    'disclaimer.meta.title': 'Aviso Legal — OPN Chat',
    'disclaimer.meta.description': 'Aviso legal e condições de uso do OPN Chat (opnchat.net). Ferramenta independente, não afiliada à Meta ou WhatsApp.',
    'disclaimer.heading': 'Aviso Legal',
    'disclaimer.lastUpdated': 'Última atualização: Julho 2026',

    'disclaimer.independence.heading': 'Aplicativo Independente',
    'disclaimer.independence.text': 'OPN Chat (opnchat.net) é um aplicativo web independente e não é afiliado, associado, autorizado, endossado ou de qualquer forma conectado oficialmente com a Meta Platforms, Inc., WhatsApp LLC, OpenChat DAO, OpenAI ou qualquer uma de suas subsidiárias ou afiliadas. O site oficial do WhatsApp pode ser encontrado em <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">whatsapp.com</a>. Os nomes "WhatsApp", "OpenChat", "Open Chat", bem como nomes, marcas, emblemas e imagens relacionados são marcas registradas de seus respectivos proprietários.',

    'disclaimer.purpose.heading': 'Propósito do Serviço',
    'disclaimer.purpose.text': 'O OPN Chat fornece uma interface conveniente para abrir conversas no WhatsApp usando o protocolo oficial de links wa.me. Isso é o mesmo que digitar manualmente uma URL wa.me na barra de endereços do seu navegador — nós apenas tornamos mais rápido e fácil. O OPN Chat não intercepta, lê, armazena ou modifica nenhuma mensagem enviada pelo WhatsApp. Toda a comunicação acontece diretamente entre seu dispositivo e os servidores do WhatsApp.',

    'disclaimer.privacy.heading': 'Privacidade e Dados',
    'disclaimer.privacy.text': 'O OPN Chat não coleta, armazena ou transmite nenhum dado pessoal para servidores externos. Os números de telefone que você digita são usados exclusivamente para gerar um link wa.me e, opcionalmente, são salvos no localStorage do seu navegador para sua conveniência (recurso de números recentes). Nenhum dado é enviado aos nossos servidores ou a terceiros. Você pode limpar seu histórico a qualquer momento usando o botão "Limpar" no aplicativo ou limpando os dados do navegador.',

    'disclaimer.warranty.heading': 'Sem Garantia',
    'disclaimer.warranty.text': 'Esta ferramenta é fornecida "no estado em que se encontra", sem garantias de qualquer tipo, sejam expressas ou implícitas, incluindo, mas não se limitando às garantias implícitas de comercialização, adequação a uma finalidade específica ou não violação. Não garantimos que o serviço será ininterrupto, oportuno, seguro ou livre de erros. O uso do serviço é por sua conta e risco.',

    'disclaimer.limitation.heading': 'Limitação de Responsabilidade',
    'disclaimer.limitation.text': 'Em nenhuma circunstância os criadores do OPN Chat serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou exemplares decorrentes ou em conexão com o uso do serviço. Isso inclui, mas não se limita a, danos por perda de lucros, boa vontade, dados ou outras perdas intangíveis resultantes do uso ou da incapacidade de usar o serviço.',

    'disclaimer.trademarks.heading': 'Marcas Registradas',
    'disclaimer.trademarks.text': 'Todos os nomes de produtos, logotipos, marcas e outras marcas comerciais apresentados ou referidos no OPN Chat são propriedade de seus respectivos titulares. Esses titulares de marcas não são afiliados ao OPN Chat, aos nossos produtos ou ao nosso site. Eles não patrocinam ou endossam nosso serviço.',

    'disclaimer.changes.heading': 'Alterações Neste Aviso',
    'disclaimer.changes.text': 'Reservamo-nos o direito de atualizar ou modificar este aviso legal a qualquer momento sem aviso prévio. As alterações entram em vigor imediatamente após serem publicadas nesta página. Seu uso continuado do serviço após quaisquer alterações constitui sua aceitação do aviso atualizado.',

    'disclaimer.back': 'Voltar ao OPN Chat',

    // Privacy Policy page
    'privacy.meta.title': 'Política de Privacidade — OPN Chat',
    'privacy.meta.description': 'Política de privacidade do OPN Chat (opnchat.net). Saiba como protegemos seus dados com análises privacy-first e sem coleta de dados pessoais.',
    'privacy.heading': 'Política de Privacidade',
    'privacy.lastUpdated': 'Última atualização: Julho 2026',

    'privacy.intro.heading': 'Introdução',
    'privacy.intro.text': 'No OPN Chat (opnchat.net), sua privacidade é nossa máxima prioridade. Esta Política de Privacidade explica quais dados coletamos, como os usamos e por que você pode confiar em nós. Construímos o OPN Chat com uma filosofia "privacy-first": coletamos o mínimo absoluto de dados necessário para operar e melhorar o serviço, e somos totalmente transparentes sobre cada ferramenta e tecnologia que utilizamos. Não exigimos que você crie uma conta e nunca pedimos informações pessoais como seu nome, endereço de e-mail ou número de telefone.',

    'privacy.nodata.heading': 'Sem Coleta de Dados Pessoais',
    'privacy.nodata.text': 'O OPN Chat não coleta, armazena ou transmite nenhum dado pessoal para servidores externos. Os números de telefone que você digita são usados exclusivamente para gerar um link wa.me ou t.me e, opcionalmente, são salvos no localStorage do seu navegador para sua conveniência (o recurso de "números recentes"). Nenhum dado é enviado aos nossos servidores ou a terceiros. Você pode limpar seu histórico a qualquer momento usando o botão "Limpar" no aplicativo ou limpando os dados do seu navegador. Não temos bancos de dados, contas de usuário ou registros do lado do servidor que possam identificá-lo pessoalmente.',

    'privacy.cloudflare.heading': 'Análise e Uso de Dados (Cloudflare Web Analytics)',
    'privacy.cloudflare.text': 'Usamos o Cloudflare Web Analytics exclusivamente para entender as estatísticas gerais de visitas e melhorar nosso site. Esta ferramenta é fundamentalmente diferente dos serviços de análise tradicionais como o Google Analytics. Veja por que o Cloudflare Web Analytics é totalmente compatível com uma abordagem privacy-first:',

    'privacy.cloudflare.nocookie.heading': 'Sem Cookies',
    'privacy.cloudflare.nocookie.text': 'O script do Cloudflare Web Analytics não define nem lê nenhum cookie no seu dispositivo. Ao contrário da maioria das plataformas de análise que dependem de cookies para rastrear o comportamento do usuário ao longo do tempo, esta ferramenta opera inteiramente sem eles. Isso significa que não há nenhum identificador persistente armazenado no seu navegador, nenhum rastreamento de suas visitas recorrentes e nenhuma maneira de criar um perfil sobre você entre sessões.',

    'privacy.cloudflare.nocross.heading': 'Sem Rastreamento Entre Sites',
    'privacy.cloudflare.nocross.text': 'O Cloudflare Web Analytics não rastreia você em diferentes sites. Sua atividade no opnchat.net nunca é vinculada à sua atividade em qualquer outro site. Não há rastreadores de terceiros, redes de publicidade ou compartilhamento de dados com outras plataformas. O que acontece no nosso site fica no nosso site — e mesmo assim, apenas de forma agregada e anonimizada.',

    'privacy.cloudflare.aggregated.heading': 'Apenas Dados Agregados',
    'privacy.cloudflare.aggregated.text': 'Apenas métricas anonimizadas e agregadas são coletadas — como total de visualizações de página, região geográfica geral (nível de país), tipo de dispositivo (móvel vs. desktop) e fonte de referência. Nenhum desses pontos de dados pode ser usado para identificar um indivíduo específico. Por exemplo, podemos ver que "500 pessoas do Brasil visitaram a página do WhatsApp em dispositivos móveis", mas não podemos ver quem são essas pessoas, quais são seus endereços IP ou o que fizeram no site.',

    'privacy.cloudflare.nopii.heading': 'Sem Coleta de PII',
    'privacy.cloudflare.nopii.text': 'O Cloudflare Web Analytics não coleta nenhuma Informação de Identificação Pessoal (PII). Ele não registra nomes, endereços de e-mail, endereços IP exatos de forma identificável ou qualquer outro dado que possa identificá-lo direta ou indiretamente. O serviço é projetado desde a base para ser incapaz de rastrear indivíduos, motivo pelo qual está em conformidade com as regulamentações GDPR, CCPA e ePrivacy sem exigir um banner de consentimento de cookies.',

    'privacy.cloudflare.conclusion.text': 'Devido a essas características, o Cloudflare Web Analytics — semelhante a alternativas focadas em privacidade como Plausible ou Fathom — não requer um banner intrusivo de consentimento de cookies na maioria das jurisdições, incluindo a União Europeia. Escolhemos esta ferramenta especificamente porque nos permite entender como nosso site é usado sem comprometer sua privacidade.',

    'privacy.localstorage.heading': 'Armazenamento Local (Apenas no Navegador)',
    'privacy.localstorage.text': 'O OPN Chat usa o localStorage do seu navegador para salvar os números de telefone e nomes de usuário usados recentemente. Esses dados nunca saem do seu dispositivo — não são transmitidos para nenhum servidor. Você tem controle total sobre esses dados e pode limpá-los a qualquer momento clicando no botão "Limpar" ao lado do seu histórico recente ou limpando os dados do site no seu navegador. Escolhemos localStorage em vez de cookies especificamente porque está sob seu controle e não pode ser acessado por terceiros.',

    'privacy.thirdparty.heading': 'Serviços de Terceiros',
    'privacy.thirdparty.text': 'O OPN Chat gera links usando os protocolos oficiais do WhatsApp (wa.me) e Telegram (t.me). Quando você clica em "Abrir Chat", é redirecionado para os próprios aplicativos ou sites do WhatsApp ou Telegram. Não temos controle sobre as práticas de privacidade do Meta/WhatsApp ou Telegram, nem somos responsáveis por elas. Recomendamos que você revise suas respectivas políticas de privacidade. Além do Cloudflare Web Analytics (descrito acima) e da hospedagem CDN para nosso site estático, não usamos nenhum outro serviço, script ou rastreador de terceiros.',

    'privacy.children.heading': 'Privacidade de Menores',
    'privacy.children.text': 'O OPN Chat não coleta conscientemente nenhuma informação pessoal de menores de 13 anos. Como não coletamos dados pessoais de nenhum usuário independentemente da idade, nosso serviço é inerentemente seguro para menores usarem. No entanto, recomendamos que pais e responsáveis supervisionem o uso de qualquer ferramenta online por seus filhos, incluindo o OPN Chat, e revisem os requisitos de idade do WhatsApp e do Telegram.',

    'privacy.rights.heading': 'Seus Direitos',
    'privacy.rights.text': 'Sob o GDPR (para residentes da UE) e o CCPA (para residentes da Califórnia), você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais. Como o OPN Chat não coleta dados pessoais em primeiro lugar, não há nada a solicitar, corrigir ou excluir do nosso lado. Se desejar remover seu histórico armazenado localmente, pode fazê-lo diretamente no aplicativo usando o botão "Limpar" ou limpando os dados do site no seu navegador. Se tiver perguntas sobre seus direitos ou esta política, sinta-se à vontade para nos contatar em: <a href="mailto:privacy@opnchat.net">privacy@opnchat.net</a>.',

    'privacy.changes.heading': 'Alterações Nesta Política',
    'privacy.changes.text': 'Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento. Indicaremos a data da última revisão no topo desta página. Para quaisquer alterações materiais na forma como lidamos com os dados, forneceremos um aviso destacado em nosso site antes da alteração entrar em vigor. Recomendamos que você revise esta página periodicamente para se manter informado sobre como protegemos sua privacidade. Seu uso continuado do serviço após quaisquer alterações constitui sua aceitação da política atualizada.',

    'privacy.back': 'Voltar ao OPN Chat',

    // 404 page
    '404.title': 'Página Não Encontrada',
    '404.heading': '404',
    '404.message': 'Ops! A página que você está procurando não existe.',
    '404.description': 'Ela pode ter sido movida ou excluída, ou a URL pode estar incorreta.',
    '404.back': 'Voltar ao OPN Chat',

    // Telegram
    'tg.meta.title': 'Telegram Sem Salvar Contato — Grátis e Privado | OPN Chat',
    'tg.meta.description': 'Envie mensagem no Telegram sem salvar o contato ou adicionar contatos. Grátis, privado, sem cadastro. Digite @usuario ou número e converse direto.',
    'tg.meta.keywords': 'telegram sem salvar numero, enviar telegram sem adicionar, mensagem telegram sem contato, telegram direto, t.me link, abrir chat telegram, telegram sem cadastrar, opnchat telegram, telegram gratis',
    'tg.meta.og.title': 'OPN Chat — Mensagem no Telegram Sem Salvar o Número',
    'tg.meta.og.description': 'Inicie uma conversa no Telegram com qualquer usuário ou número instantaneamente. Sem salvar contato, sem cadastro, 100% privado.',
    'tg.meta.twitter.title': 'OPN Chat — Mensagem no Telegram Sem Salvar o Número',
    'tg.meta.twitter.description': 'Inicie uma conversa no Telegram com qualquer usuário ou número instantaneamente. Sem salvar contato, sem cadastro, 100% privado.',
    'tg.header.description': 'Mensagem no Telegram Sem Salvar o Número',
    'tg.form.label.input': 'Digite nome de usuário ou número de telefone',
    'tg.form.placeholder.input': '@usuario ou número de telefone',
    'tg.form.hint': 'Digite um @nome de usuário do Telegram (ex. @durov) ou número de telefone com código do país (ex. 55 11 91234 5678)',
    'tg.form.hint.plus': 'O sinal de + antes do código do país é opcional',
    'tg.form.error.username': 'Digite um nome de usuário válido (3+ caracteres)',
    'tg.form.error.phone': 'Digite um número de telefone válido',
    'tg.form.error.short': 'O número de telefone é muito curto',
    'tg.form.submit': 'Abrir Chat no Telegram',
    'tg.history.title': 'Recentes',
    'tg.history.clear': 'Limpar',
    'tg.seo.opn.heading': 'O Que Significa OPN?',
    'tg.seo.opn.text': 'OPN é a sigla de <strong>O</strong>nline <strong>P</strong>rivacy <strong>N</strong>etwork (Rede de Privacidade Online). Escolhemos este nome porque nossa ferramenta é construída desde a base com uma abordagem focada em privacidade. Nunca armazenamos, registramos ou rastreamos nomes de usuário, números de telefone ou mensagens que você digitar. Tudo acontece de forma segura dentro do seu próprio navegador.',
    'tg.seo.without.heading': 'Telegram Sem Salvar o Número',
    'tg.seo.without.text': 'OPN Chat permite iniciar uma conversa no Telegram com qualquer nome de usuário ou número de telefone instantaneamente — sem precisar salvar o contato primeiro. Seja para contatar um entregador, empresa ou alguém de um marketplace, basta digitar o nome de usuário ou número e abrir o chat diretamente no Telegram.',
    'tg.seo.how.heading': 'Como Funciona',
    'tg.seo.how.text': 'Usar OPN Chat para Telegram é simples e leva poucos segundos. Digite um @nome de usuário do Telegram ou número de telefone com código do país e, opcionalmente, escreva uma mensagem. Clique em "Abrir Chat no Telegram" e você será redirecionado diretamente para a conversa. Sem cadastro, sem instalação, sem dados armazenados em servidores.',
    'tg.seo.why.heading': 'Por Que Usar OPN Chat para Telegram?',
    'tg.seo.why.feature1.title': 'Acesso Instantâneo',
    'tg.seo.why.feature1.desc': 'Abra um chat do Telegram em segundos. Sem salvar contato, sem baixar apps, sem criar contas.',
    'tg.seo.why.feature2.title': '100% Privado',
    'tg.seo.why.feature2.desc': 'Nenhum dado é armazenado em nossos servidores. Seus nomes de usuário, números e mensagens ficam apenas no seu navegador.',
    'tg.seo.why.feature3.title': 'Funciona em Qualquer Lugar',
    'tg.seo.why.feature3.desc': 'Compatível com qualquer nome de usuário ou número de telefone do mundo. Use em qualquer dispositivo.',
    'tg.seo.why.feature4.title': 'Usuário ou Telefone',
    'tg.seo.why.feature4.desc': 'Digite um @usuário para mensagem direta ou número de telefone para encontrar alguém no Telegram. Um campo, duas opções.',
    'tg.seo.cases.heading': 'Casos de Uso Comuns',
    'tg.seo.cases.text': 'OPN Chat para Telegram é útil em dezenas de situações do dia a dia. Contate um freelancer ou prestador de serviço sem adicioná-lo aos contatos. Alcance um vendedor em marketplace ou grupo comunitário. Envie mensagem para uma empresa ou canal de suporte sem salvar o número. Comunique-se com guias de viagem, funcionários de hotel ou serviços locais enquanto viaja.',
    'tg.seo.direct.heading': 'Mensagem Direta no Telegram — A Forma Inteligente',
    'tg.seo.direct.text': 'OPN Chat para Telegram usa o protocolo oficial de links t.me para abrir um chat com qualquer nome de usuário ou número de telefone. Isso significa que sua mensagem é enviada pela própria infraestrutura segura do Telegram. OPN Chat apenas fornece uma interface conveniente — nunca interceptamos, lemos ou armazenamos suas mensagens.',
    'tg.seo.faq.heading': 'Perguntas Frequentes',
    'tg.seo.faq.q1': 'Preciso instalar algo?',
    'tg.seo.faq.a1': 'Não. OPN Chat funciona em qualquer navegador web. Você só precisa ter o Telegram instalado no seu dispositivo para abrir o chat.',
    'tg.seo.faq.q2': 'Posso mandar mensagem pelo nome de usuário?',
    'tg.seo.faq.a2': 'Sim! Basta digitar o @nome_de_usuário (ex. @durov) e OPN Chat abrirá um chat direto com ele no Telegram. Não precisa de número de telefone.',
    'tg.seo.faq.q3': 'Posso usar número de telefone também?',
    'tg.seo.faq.a3': 'Sim. Digite um número de telefone com código do país e OPN Chat abrirá um chat do Telegram com esse número usando o formato t.me/+número.',
    'tg.seo.faq.q4': 'OPN Chat é grátis?',
    'tg.seo.faq.a4': 'Sim, OPN Chat é totalmente gratuito. Sem taxas ocultas, sem planos premium, sem anúncios.',
    'tg.seo.faq.q5': 'O que acontece com os dados que digito?',
    'tg.seo.faq.a5': 'Nada é enviado aos nossos servidores. Suas entradas recentes ficam salvas localmente no seu navegador apenas por conveniência. Você pode limpá-las a qualquer momento.',
    'tg.footer.tagline': 'opnchat.net — OPN Chat Telegram. Sem dados em servidores. Tudo funciona no seu navegador.',
    'tg.footer.disclaimer.brief': 'OPN Chat não é afiliado ao Telegram ou Telegram FZ-LLC.',
    'tg.footer.whatsapp': 'Versão WhatsApp',

    // Hub page
    'hub.meta.title': 'OPN Chat — Ferramentas Grátis: WhatsApp e Telegram Sem Salvar Contato',
    'hub.meta.description': 'Ferramentas online grátis que funcionam no seu navegador. Envie mensagens no WhatsApp e Telegram sem salvar contatos. Sem cadastro, sem dados em servidores. Privado e instantâneo.',
    'hub.meta.keywords': 'whatsapp sem salvar contato, telegram sem salvar numero, ferramentas online gratis, ferramentas privadas, enviar mensagem sem contato, wa.me, t.me, opnchat',
    'hub.hero.title': 'Ferramentas Online Gratuitas',
    'hub.hero.subtitle': 'Privadas. Instantâneas. Sem cadastro. Tudo funciona no seu navegador.',
    'hub.service.whatsapp.title': 'WhatsApp',
    'hub.service.whatsapp.desc': 'Envie uma mensagem para qualquer número do WhatsApp sem salvar nos seus contatos. Rápido, privado, grátis.',
    'hub.service.whatsapp.cta': 'Abrir WhatsApp',
    'hub.service.telegram.title': 'Telegram',
    'hub.service.telegram.desc': 'Envie uma mensagem para qualquer usuário ou número do Telegram sem adicionar contatos. Um campo inteligente.',
    'hub.service.telegram.cta': 'Abrir Telegram',
    'hub.service.more.title': 'Mais Ferramentas em Breve',
    'hub.service.more.desc': 'Códigos QR, temporizadores, geradores de senhas e mais — tudo privado, tudo grátis, tudo no seu navegador.',
    'hub.seo.what.heading': 'O Que É o OPN Chat?',
    'hub.seo.what.text': 'OPN Chat é uma coleção de ferramentas online gratuitas construídas com uma abordagem focada em privacidade. Cada ferramenta funciona inteiramente no seu navegador — nenhum dado é enviado aos nossos servidores. Seja para enviar uma mensagem no WhatsApp sem salvar um número, contatar alguém no Telegram sem adicionar contatos ou usar outras utilidades do dia a dia, o OPN Chat oferece uma experiência rápida, privada e sem cadastro. O nome OPN significa Online Privacy Network, refletindo nosso princípio fundamental: seus dados ficam com você.',
    'hub.seo.why.heading': 'Por Que as Pessoas Usam o OPN Chat',
    'hub.seo.why.text': 'As pessoas usam o OPN Chat pela sua simplicidade e privacidade. Não há contas para criar, dados pessoais para inserir ou anúncios para fechar. Cada ferramenta faz uma coisa bem — abrir um chat, gerar um código, converter uma unidade — e sai do seu caminho. Todo o processamento acontece localmente no seu navegador usando protocolos de link oficiais (wa.me para WhatsApp, t.me para Telegram), então suas mensagens vão diretamente pelos apps oficiais. Nada é interceptado, armazenado ou rastreado.',

    // Language switcher
    'lang.switch': 'English',
    'lang.current': 'Português',
  },
  id: {
    // Meta
    'meta.title': 'WhatsApp Tanpa Simpan Nomor — Gratis & Privat | OPN Chat',
    'meta.description': 'Kirim pesan WhatsApp tanpa simpan nomor. Gratis, privat, tanpa daftar. Masukkan nomor telepon dengan kode negara dan langsung chat.',
    'meta.keywords': 'whatsapp tanpa simpan nomor, kirim whatsapp tanpa kontak, pesan whatsapp tanpa simpan, whatsapp langsung, wa.me link, klik untuk chat, whatsapp tanpa tambah, buka chat whatsapp, opnchat, whatsapp gratis',
    'meta.og.title': 'WhatsApp Tanpa Simpan Nomor — Gratis & Privat | OPN Chat',
    'meta.og.description': 'Kirim pesan WhatsApp tanpa simpan nomor. Gratis, privat, tanpa daftar. Masukkan nomor dan langsung chat.',
    'meta.twitter.title': 'WhatsApp Tanpa Simpan Nomor — Gratis & Privat',
    'meta.twitter.description': 'Kirim pesan WhatsApp tanpa simpan nomor. Gratis, privat, tanpa daftar. Masukkan nomor dan langsung chat.',

    // Header
    'header.title': 'OPN Chat',
    'header.subtitle': 'Kirim Pesan WhatsApp Tanpa Simpan Nomor',
    'header.description': 'Kirim Pesan WhatsApp Tanpa Simpan Nomor',

    // Form
    'form.label.phone': 'Masukkan nomor telepon lengkap tanpa +',
    'form.label.message': 'Pesan',
    'form.addMessage': 'Tambahkan pesan',
    'form.label.optional': '(opsional)',
    'form.placeholder.phone': '62 812 3456 7890',
    'form.placeholder.message': 'Halo! Saya ingin menanyakan tentang...',
    'form.hint': 'Sertakan kode negara (contoh: 62 untuk Indonesia, 1 untuk AS, 55 untuk Brasil)',
    'form.error.valid': 'Silakan masukkan nomor telepon yang valid',
    'form.error.short': 'Nomor telepon terlalu pendek',
    'form.submit': 'Buka Chat di WhatsApp',

    // History
    'history.title': 'Nomor Terbaru',
    'history.clear': 'Hapus',

    // SEO — What Does OPN Stand For
    'seo.opn.heading': 'Apa Arti OPN?',
    'seo.opn.text': 'OPN adalah singkatan dari <strong>O</strong>nline <strong>P</strong>rivacy <strong>N</strong>etwork (Jaringan Privasi Online). Kami memilih nama ini karena alat kami dirancang dari awal dengan pendekatan yang mengutamakan privasi. Kami tidak pernah menyimpan, mencatat, atau melacak nomor telepon atau pesan yang Anda masukkan. Semuanya berjalan dengan aman di dalam peramban web Anda sendiri, memastikan kedaulatan data Anda sepenuhnya.',

    // SEO — WhatsApp Without Saving Number
    'seo.without.heading': 'WhatsApp Tanpa Simpan Nomor',
    'seo.without.text': 'OPN Chat memungkinkan Anda memulai percakapan WhatsApp dengan nomor telepon apa pun secara instan — tanpa perlu menyimpan kontak terlebih dahulu. Baik saat Anda ingin menghubungi kurir pengiriman, bisnis, atau seseorang dari marketplace, cukup masukkan nomor telepon mereka dan buka obrolan langsung di WhatsApp. Ini adalah cara tercepat untuk mengirim pesan di WhatsApp tanpa memenuhi daftar kontak Anda.',

    // SEO — How It Works
    'seo.how.heading': 'Cara Kerja',
    'seo.how.text': 'Menggunakan OPN Chat sangat mudah dan hanya butuh beberapa detik. Masukkan nomor telepon beserta kode negara, dan secara opsional tulis pesan yang akan otomatis terisi di chat. Klik "Buka Chat di WhatsApp" dan Anda akan langsung diarahkan ke percakapan. Tanpa pendaftaran, tanpa instalasi aplikasi, tidak ada data yang disimpan di server mana pun — semuanya berjalan langsung di peramban Anda.',

    // SEO — Why Use OPN Chat
    'seo.why.heading': 'Mengapa Menggunakan OPN Chat?',
    'seo.why.feature1.title': 'Akses Instan',
    'seo.why.feature1.desc': 'Buka chat WhatsApp dalam hitungan detik. Tanpa simpan kontak, tanpa unduh aplikasi, tanpa buat akun.',
    'seo.why.feature2.title': '100% Privat',
    'seo.why.feature2.desc': 'Tidak ada data yang disimpan di server kami. Nomor telepon dan pesan Anda hanya tersimpan di peramban Anda.',
    'seo.why.feature3.title': 'Bisa Digunakan di Mana Saja',
    'seo.why.feature3.desc': 'Mendukung nomor telepon dari seluruh dunia. Gunakan di perangkat apa pun — ponsel, tablet, atau komputer. Tanpa instalasi.',
    'seo.why.feature4.title': 'Pesan Otomatis Terisi',
    'seo.why.feature4.desc': 'Tulis pesan sebelum membuka chat. Sangat cocok untuk pertanyaan bisnis, perkenalan singkat, atau tindak lanjut.',

    // SEO — Common Use Cases
    'seo.cases.heading': 'Contoh Penggunaan Umum',
    'seo.cases.text': 'OPN Chat sangat berguna dalam berbagai situasi sehari-hari. Hubungi kurir atau driver pengiriman tanpa menambahkan mereka ke ponsel Anda. Hubungi penjual di marketplace seperti Shopee, Tokopedia, atau Bukalapak. Kirim pesan ke bisnis atau penyedia layanan tanpa menyimpan nomor mereka. Kirim pesan cepat ke seseorang yang baru saja Anda temui di sebuah acara. Berkomunikasi dengan pemilik penginapan, sopir taksi, atau staf hotel saat bepergian — semuanya tanpa mengotori daftar kontak Anda.',

    // SEO — WhatsApp Direct Message
    'seo.direct.heading': 'Pesan Langsung WhatsApp — Cara yang Cerdas',
    'seo.direct.text': 'Juga dikenal sebagai "WhatsApp Direct" atau "Klik untuk Chat", OPN Chat menggunakan protokol tautan wa.me resmi WhatsApp untuk membuka chat dengan nomor telepon apa pun. Ini berarti pesan Anda dikirim melalui infrastruktur aman milik WhatsApp sendiri. OPN Chat hanya menyediakan antarmuka yang nyaman — kami tidak pernah mencegat, membaca, atau menyimpan pesan Anda. Ini persis sama dengan mengetik tautan wa.me secara manual, tetapi jauh lebih cepat dan mudah.',

    // SEO — FAQ
    'seo.faq.heading': 'Pertanyaan yang Sering Diajukan',
    'seo.faq.q1': 'Apakah saya perlu menginstal sesuatu?',
    'seo.faq.a1': 'Tidak. OPN Chat berjalan di peramban web apa pun di perangkat apa pun. Anda hanya perlu menginstal aplikasi WhatsApp di ponsel atau komputer Anda agar chat dapat terbuka.',
    'seo.faq.q2': 'Apakah nomor telepon saya bisa dilihat oleh orang lain?',
    'seo.faq.a2': 'Ya — saat Anda mengirim pesan, penerima akan melihat nomor WhatsApp Anda seperti chat biasa. OPN Chat hanya membuka percakapan, alat ini tidak membuat nomor Anda menjadi anonim.',
    'seo.faq.q3': 'Apakah orang lain harus menyimpan nomor saya?',
    'seo.faq.a3': 'Tidak. Pesan Anda akan tetap terkirim. Namun, jika orang tersebut memiliki pengaturan privasi yang sangat ketat yang membatasi pesan dari orang asing, mereka mungkin perlu menerima permintaan chat Anda terlebih dahulu.',
    'seo.faq.q4': 'Apakah OPN Chat gratis?',
    'seo.faq.a4': 'Ya, OPN Chat sepenuhnya gratis. Tanpa biaya tersembunyi, tanpa fitur premium, dan tanpa iklan. Kami percaya pada kemudahan komunikasi untuk semua orang.',
    'seo.faq.q5': 'Apa yang terjadi dengan nomor yang saya masukkan?',
    'seo.faq.a5': 'Tidak ada data yang dikirim ke server kami. Nomor terbaru Anda disimpan secara lokal di localStorage peramban Anda hanya untuk kenyamanan. Anda dapat menghapusnya kapan saja menggunakan tombol "Hapus" atau dengan menghapus data peramban Anda.',

    // Footer
    'footer.tagline': 'opnchat.net — OPN Chat. Tanpa data di server. Semuanya berjalan di peramban Anda.',
    'footer.disclaimer.link': 'Penafian Hukum',
    'footer.disclaimer.brief': 'OPN Chat tidak berafiliasi dengan Meta, WhatsApp, atau OpenChat DAO.',
    'footer.blog': 'Blog',
    'footer.telegram': 'Versi Telegram',
    'footer.privacy.link': 'Kebijakan Privasi',

    // Blog
    'blog.title': 'Blog',
    'blog.description': 'Tips, panduan, dan tutorial tentang pesan WhatsApp.',
    'blog.noPosts': 'Belum ada artikel.',
    'blog.backToBlog': 'Kembali ke Blog',

    // Disclaimer page
    'disclaimer.meta.title': 'Penafian Hukum — OPN Chat',
    'disclaimer.meta.description': 'Penafian hukum dan ketentuan penggunaan OPN Chat (opnchat.net). Alat independen, tidak berafiliasi dengan Meta atau WhatsApp.',
    'disclaimer.heading': 'Penafian Hukum',
    'disclaimer.lastUpdated': 'Terakhir diperbarui: Juli 2026',

    'disclaimer.independence.heading': 'Aplikasi Independen',
    'disclaimer.independence.text': 'OPN Chat (opnchat.net) adalah aplikasi web independen dan tidak berafiliasi, dikaitkan, diizinkan, didukung oleh, atau dengan cara apa pun terhubung secara resmi dengan Meta Platforms, Inc., WhatsApp LLC, OpenChat DAO, OpenAI, atau anak perusahaan atau afiliasi mereka. Situs web resmi WhatsApp dapat ditemukan di <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">whatsapp.com</a>. Nama "WhatsApp", "OpenChat", "Open Chat", serta nama, merek, lambang, dan gambar terkait adalah merek dagang terdaftar dari pemiliknya masing-masing.',

    'disclaimer.purpose.heading': 'Tujuan Layanan',
    'disclaimer.purpose.text': 'OPN Chat menyediakan antarmuka yang nyaman untuk membuka percakapan WhatsApp menggunakan protokol tautan wa.me resmi. Ini sama dengan mengetik URL wa.me secara manual di bilah alamat peramban Anda — kami hanya membuatnya lebih cepat dan mudah. OPN Chat tidak mencegat, membaca, menyimpan, atau mengubah pesan apa pun yang dikirim melalui WhatsApp. Semua komunikasi terjadi langsung antara perangkat Anda dan server WhatsApp.',

    'disclaimer.privacy.heading': 'Privasi & Data',
    'disclaimer.privacy.text': 'OPN Chat tidak mengumpulkan, menyimpan, atau mengirimkan data pribadi apa pun ke server eksternal. Nomor telepon yang Anda masukkan hanya digunakan untuk menghasilkan tautan wa.me dan secara opsional disimpan di localStorage peramban Anda untuk kenyamanan (fitur nomor terbaru). Tidak ada data yang pernah dikirim ke server kami atau pihak ketiga mana pun. Anda dapat menghapus riwayat kapan saja menggunakan tombol "Hapus" di aplikasi atau dengan menghapus data peramban Anda.',

    'disclaimer.warranty.heading': 'Tanpa Jaminan',
    'disclaimer.warranty.text': 'Alat ini disediakan "apa adanya" tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan tersirat mengenai kelayakan untuk diperdagangkan, kesesuaian untuk tujuan tertentu, atau non-pelanggaran. Kami tidak menjamin bahwa layanan akan berjalan tanpa gangguan, tepat waktu, aman, atau bebas dari kesalahan. Penggunaan layanan sepenuhnya menjadi risiko Anda sendiri.',

    'disclaimer.limitation.heading': 'Batasan Tanggung Jawab',
    'disclaimer.limitation.text': 'Dalam keadaan apa pun, pembuat OPN Chat tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, konsekuensial, atau contoh yang timbul dari atau sehubungan dengan penggunaan layanan. Ini termasuk, namun tidak terbatas pada, kerugian akibat hilangnya keuntungan, itikad baik, data, atau kerugian tidak berwujud lainnya yang diakibatkan oleh penggunaan atau ketidakmampuan menggunakan layanan.',

    'disclaimer.trademarks.heading': 'Merek Dagang',
    'disclaimer.trademarks.text': 'Semua nama produk, logo, merek, dan merek dagang lainnya yang ditampilkan atau disebutkan dalam OPN Chat adalah milik pemilik merek dagang masing-masing. Pemilik merek dagang ini tidak berafiliasi dengan OPN Chat, produk kami, atau situs web kami. Mereka tidak mensponsori atau mendukung layanan kami.',

    'disclaimer.changes.heading': 'Perubahan Penafian Ini',
    'disclaimer.changes.text': 'Kami berhak memperbarui atau mengubah penafian hukum ini kapan saja tanpa pemberitahuan sebelumnya. Perubahan berlaku segera setelah dipublikasikan di halaman ini. Penggunaan layanan yang berkelanjutan setelah perubahan apa pun merupakan penerimaan Anda terhadap penafian yang diperbarui.',

    'disclaimer.back': 'Kembali ke OPN Chat',

    // Privacy Policy page
    'privacy.meta.title': 'Kebijakan Privasi — OPN Chat',
    'privacy.meta.description': 'Kebijakan privasi OPN Chat (opnchat.net). Pelajari bagaimana kami melindungi data Anda dengan analitik privacy-first dan tanpa pengumpulan data pribadi.',
    'privacy.heading': 'Kebijakan Privasi',
    'privacy.lastUpdated': 'Terakhir diperbarui: Juli 2026',

    'privacy.intro.heading': 'Pendahuluan',
    'privacy.intro.text': 'Di OPN Chat (opnchat.net), privasi Anda adalah prioritas utama kami. Kebijakan Privasi ini menjelaskan data apa yang kami kumpulkan, bagaimana kami menggunakannya, dan mengapa Anda dapat mempercayai kami. Kami membangun OPN Chat dengan filosofi "privacy-first": kami mengumpulkan jumlah data minimum yang diperlukan untuk mengoperasikan dan meningkatkan layanan, dan kami sepenuhnya transparan tentang setiap alat dan teknologi yang kami gunakan. Kami tidak mengharuskan Anda membuat akun, dan kami tidak pernah meminta informasi pribadi seperti nama, alamat email, atau nomor telepon Anda.',

    'privacy.nodata.heading': 'Tanpa Pengumpulan Data Pribadi',
    'privacy.nodata.text': 'OPN Chat tidak mengumpulkan, menyimpan, atau mengirimkan data pribadi apa pun ke server eksternal. Nomor telepon yang Anda masukkan hanya digunakan untuk menghasilkan tautan wa.me atau t.me dan secara opsional disimpan di localStorage peramban Anda untuk kenyamanan (fitur "nomor terbaru"). Tidak ada data yang pernah dikirim ke server kami atau pihak ketiga mana pun. Anda dapat menghapus riwayat kapan saja menggunakan tombol "Hapus" di aplikasi atau dengan menghapus data peramban Anda. Kami tidak memiliki basis data, akun pengguna, atau log sisi server yang dapat mengidentifikasi Anda secara pribadi.',

    'privacy.cloudflare.heading': 'Analitik dan Penggunaan Data (Cloudflare Web Analytics)',
    'privacy.cloudflare.text': 'Kami menggunakan Cloudflare Web Analytics secara eksklusif untuk memahami statistik kunjungan umum dan meningkatkan situs web kami. Alat ini secara fundamental berbeda dari layanan analitik tradisional seperti Google Analytics. Berikut alasan mengapa Cloudflare Web Analytics sepenuhnya kompatibel dengan pendekatan privacy-first:',

    'privacy.cloudflare.nocookie.heading': 'Tanpa Cookies',
    'privacy.cloudflare.nocookie.text': 'Skrip Cloudflare Web Analytics tidak menyetel atau membaca cookies apa pun di perangkat Anda. Berbeda dengan sebagian besar platform analitik yang bergantung pada cookies untuk melacak perilaku pengguna dari waktu ke waktu, alat ini beroperasi sepenuhnya tanpa cookies. Ini berarti tidak ada pengidentifikasi persisten yang disimpan di peramban Anda, tidak ada pelacakan kunjungan berulang Anda, dan tidak ada cara untuk membangun profil tentang Anda antar sesi.',

    'privacy.cloudflare.nocross.heading': 'Tanpa Pelacakan Lintas Situs',
    'privacy.cloudflare.nocross.text': 'Cloudflare Web Analytics tidak melacak Anda di berbagai situs web. Aktivitas Anda di opnchat.net tidak pernah ditautkan dengan aktivitas Anda di situs lain mana pun. Tidak ada pelacak pihak ketiga, jaringan iklan, atau berbagi data dengan platform lain. Apa yang terjadi di situs kami tetap di situs kami — dan bahkan kemudian, hanya dalam bentuk agregat dan anonim.',

    'privacy.cloudflare.aggregated.heading': 'Hanya Data Agregat',
    'privacy.cloudflare.aggregated.text': 'Hanya metrik yang dianonimkan dan diagregasi yang dikumpulkan — seperti total tampilan halaman, wilayah geografis umum (tingkat negara), jenis perangkat (seluler vs. desktop), dan sumber rujukan. Tidak ada titik data ini yang dapat digunakan untuk mengidentifikasi individu tertentu. Misalnya, kami dapat melihat bahwa "500 orang dari Indonesia mengunjungi halaman WhatsApp di perangkat seluler," tetapi kami tidak dapat melihat siapa orang-orang tersebut, apa alamat IP mereka, atau apa yang mereka lakukan di situs.',

    'privacy.cloudflare.nopii.heading': 'Tanpa Pengumpulan PII',
    'privacy.cloudflare.nopii.text': 'Cloudflare Web Analytics tidak mengumpulkan Informasi Identifikasi Pribadi (PII) apa pun. Layanan ini tidak mencatat nama, alamat email, alamat IP yang tepat dalam bentuk yang dapat diidentifikasi, atau data lain apa pun yang dapat mengidentifikasi Anda secara langsung atau tidak langsung. Layanan ini dirancang dari dasar untuk tidak mampu melacak individu, itulah mengapa layanan ini mematuhi peraturan GDPR, CCPA, dan ePrivacy tanpa memerlukan banner persetujuan cookies.',

    'privacy.cloudflare.conclusion.text': 'Dengan karakteristik ini, Cloudflare Web Analytics — mirip dengan alternatif yang berfokus pada privasi seperti Plausible atau Fathom — tidak memerlukan banner persetujuan cookies yang mengganggu di sebagian besar yurisdiksi, termasuk Uni Eropa. Kami memilih alat ini secara khusus karena memungkinkan kami memahami bagaimana situs kami digunakan tanpa mengorbankan privasi Anda.',

    'privacy.localstorage.heading': 'Penyimpanan Lokal (Hanya di Peramban)',
    'privacy.localstorage.text': 'OPN Chat menggunakan localStorage peramban Anda untuk menyimpan nomor telepon dan nama pengguna yang baru saja digunakan. Data ini tidak pernah meninggalkan perangkat Anda — tidak ditransmisikan ke server mana pun. Anda memiliki kendali penuh atas data ini dan dapat menghapusnya kapan saja dengan mengklik tombol "Hapus" di samping riwayat terbaru Anda atau dengan menghapus data situs di peramban Anda. Kami memilih localStorage alih-alih cookies secara khusus karena berada di bawah kendali Anda dan tidak dapat diakses oleh pihak ketiga.',

    'privacy.thirdparty.heading': 'Layanan Pihak Ketiga',
    'privacy.thirdparty.text': 'OPN Chat menghasilkan tautan menggunakan protokol resmi WhatsApp (wa.me) dan Telegram (t.me). Ketika Anda mengklik "Buka Chat", Anda akan dialihkan ke aplikasi atau situs web WhatsApp atau Telegram itu sendiri. Kami tidak memiliki kendali atas praktik privasi Meta/WhatsApp atau Telegram, dan tidak bertanggung jawab atas praktik tersebut. Kami menyarankan Anda untuk meninjau kebijakan privasi masing-masing. Selain Cloudflare Web Analytics (dijelaskan di atas) dan hosting CDN untuk situs statis kami, kami tidak menggunakan layanan, skrip, atau pelacak pihak ketiga lainnya.',

    'privacy.children.heading': 'Privasi Anak',
    'privacy.children.text': 'OPN Chat dengan sengaja tidak mengumpulkan informasi pribadi dari anak-anak di bawah usia 13 tahun. Karena kami tidak mengumpulkan data pribadi dari pengguna mana pun terlepas dari usia, layanan kami secara inheren aman untuk digunakan oleh anak di bawah umur. Namun, kami menyarankan agar orang tua dan wali mengawasi penggunaan alat daring apa pun oleh anak-anak mereka, termasuk OPN Chat, dan meninjau persyaratan usia WhatsApp dan Telegram.',

    'privacy.rights.heading': 'Hak Anda',
    'privacy.rights.text': 'Di bawah GDPR (untuk penduduk UE) dan CCPA (untuk penduduk California), Anda berhak untuk mengakses, memperbaiki, menghapus, atau memindahkan data pribadi Anda. Karena OPN Chat tidak mengumpulkan data pribadi sejak awal, tidak ada yang perlu diminta, diperbaiki, atau dihapus dari pihak kami. Jika Anda ingin menghapus riwayat yang disimpan secara lokal, Anda dapat melakukannya langsung dari aplikasi menggunakan tombol "Hapus" atau dengan menghapus data situs di peramban Anda. Jika Anda memiliki pertanyaan tentang hak Anda atau kebijakan ini, jangan ragu untuk menghubungi kami di: <a href="mailto:privacy@opnchat.net">privacy@opnchat.net</a>.',

    'privacy.changes.heading': 'Perubahan Kebijakan Ini',
    'privacy.changes.text': 'Kami berhak memperbarui atau mengubah Kebijakan Privasi ini kapan saja. Kami akan menunjukkan tanggal revisi terbaru di bagian atas halaman ini. Untuk perubahan material dalam cara kami menangani data, kami akan memberikan pemberitahuan yang menonjol di situs web kami sebelum perubahan berlaku. Kami menyarankan Anda untuk meninjau halaman ini secara berkala agar tetap mendapat informasi tentang bagaimana kami melindungi privasi Anda. Penggunaan layanan yang berkelanjutan setelah perubahan apa pun merupakan penerimaan Anda terhadap kebijakan yang diperbarui.',

    'privacy.back': 'Kembali ke OPN Chat',

    // 404 page
    '404.title': 'Halaman Tidak Ditemukan',
    '404.heading': '404',
    '404.message': 'Ups! Halaman yang Anda cari tidak ada.',
    '404.description': 'Mungkin halaman telah dipindahkan atau dihapus, atau URL salah.',
    '404.back': 'Kembali ke OPN Chat',

    // Telegram
    'tg.meta.title': 'Telegram Tanpa Simpan Nomor — Gratis & Privat | OPN Chat',
    'tg.meta.description': 'Kirim pesan Telegram tanpa simpan nomor atau tambah kontak. Gratis, privat, tanpa daftar. Masukkan @username atau nomor dan langsung chat.',
    'tg.meta.keywords': 'telegram tanpa simpan nomor, kirim telegram tanpa kontak, pesan telegram tanpa tambah, telegram langsung, t.me link, buka chat telegram, telegram tanpa daftar, opnchat telegram, telegram gratis',
    'tg.meta.og.title': 'OPN Chat — Kirim Pesan Telegram Tanpa Simpan Nomor',
    'tg.meta.og.description': 'Mulai percakapan Telegram dengan username atau nomor apa pun secara instan. Tanpa simpan kontak, tanpa daftar, 100% privat.',
    'tg.meta.twitter.title': 'OPN Chat — Kirim Pesan Telegram Tanpa Simpan Nomor',
    'tg.meta.twitter.description': 'Mulai percakapan Telegram dengan username atau nomor apa pun secara instan. Tanpa simpan kontak, tanpa daftar, 100% privat.',
    'tg.header.description': 'Kirim Pesan Telegram Tanpa Simpan Nomor',
    'tg.form.label.input': 'Masukkan username atau nomor telepon',
    'tg.form.placeholder.input': '@username atau nomor telepon',
    'tg.form.hint': 'Masukkan @username Telegram (contoh: @durov) atau nomor telepon dengan kode negara (contoh: 62 812 3456 7890)',
    'tg.form.hint.plus': 'Tanda + sebelum kode negara bersifat opsional',
    'tg.form.error.username': 'Silakan masukkan username yang valid (3+ karakter)',
    'tg.form.error.phone': 'Silakan masukkan nomor telepon yang valid',
    'tg.form.error.short': 'Nomor telepon terlalu pendek',
    'tg.form.submit': 'Buka Chat di Telegram',
    'tg.history.title': 'Terbaru',
    'tg.history.clear': 'Hapus',
    'tg.seo.opn.heading': 'Apa Arti OPN?',
    'tg.seo.opn.text': 'OPN adalah singkatan dari <strong>O</strong>nline <strong>P</strong>rivacy <strong>N</strong>etwork (Jaringan Privasi Online). Kami memilih nama ini karena alat kami dirancang dari awal dengan pendekatan yang mengutamakan privasi. Kami tidak pernah menyimpan, mencatat, atau melacak username, nomor telepon, atau pesan yang Anda masukkan. Semuanya berjalan dengan aman di dalam peramban web Anda sendiri.',
    'tg.seo.without.heading': 'Telegram Tanpa Simpan Nomor',
    'tg.seo.without.text': 'OPN Chat memungkinkan Anda memulai percakapan Telegram dengan username atau nomor telepon apa pun secara instan — tanpa perlu menyimpan kontak terlebih dahulu. Baik saat Anda ingin menghubungi kurir, bisnis, atau seseorang dari marketplace, cukup masukkan username atau nomor telepon mereka dan buka obrolan langsung di Telegram.',
    'tg.seo.how.heading': 'Cara Kerja',
    'tg.seo.how.text': 'Menggunakan OPN Chat untuk Telegram sangat mudah dan hanya butuh beberapa detik. Masukkan @username Telegram atau nomor telepon beserta kode negara, dan secara opsional tulis pesan. Klik "Buka Chat di Telegram" dan Anda akan langsung diarahkan ke percakapan. Tanpa pendaftaran, tanpa instalasi, tidak ada data yang disimpan di server mana pun.',
    'tg.seo.why.heading': 'Mengapa Menggunakan OPN Chat untuk Telegram?',
    'tg.seo.why.feature1.title': 'Akses Instan',
    'tg.seo.why.feature1.desc': 'Buka chat Telegram dalam hitungan detik. Tanpa simpan kontak, tanpa unduh aplikasi, tanpa buat akun.',
    'tg.seo.why.feature2.title': '100% Privat',
    'tg.seo.why.feature2.desc': 'Tidak ada data yang disimpan di server kami. Username, nomor telepon, dan pesan Anda hanya tersimpan di peramban Anda.',
    'tg.seo.why.feature3.title': 'Bisa Digunakan di Mana Saja',
    'tg.seo.why.feature3.desc': 'Mendukung username atau nomor telepon dari seluruh dunia. Gunakan di perangkat apa pun — ponsel, tablet, atau komputer.',
    'tg.seo.why.feature4.title': 'Username atau Telepon',
    'tg.seo.why.feature4.desc': 'Masukkan @username untuk pesan langsung atau nomor telepon untuk menemukan seseorang di Telegram. Satu kolom, dua pilihan.',
    'tg.seo.cases.heading': 'Contoh Penggunaan Umum',
    'tg.seo.cases.text': 'OPN Chat untuk Telegram sangat berguna dalam berbagai situasi sehari-hari. Hubungi freelancer atau kontraktor tanpa menambahkan mereka ke kontak Anda. Hubungi penjual di marketplace atau grup komunitas. Kirim pesan ke bisnis atau kanal dukungan tanpa menyimpan nomor mereka. Kirim pesan cepat ke seseorang yang baru Anda temui di sebuah acara.',
    'tg.seo.direct.heading': 'Pesan Langsung Telegram — Cara yang Cerdas',
    'tg.seo.direct.text': 'OPN Chat untuk Telegram menggunakan protokol tautan t.me resmi untuk membuka chat dengan username atau nomor telepon apa pun. Ini berarti pesan Anda dikirim melalui infrastruktur aman milik Telegram sendiri. OPN Chat hanya menyediakan antarmuka yang nyaman — kami tidak pernah mencegat, membaca, atau menyimpan pesan Anda.',
    'tg.seo.faq.heading': 'Pertanyaan yang Sering Diajukan',
    'tg.seo.faq.q1': 'Apakah saya perlu menginstal sesuatu?',
    'tg.seo.faq.a1': 'Tidak. OPN Chat berjalan di peramban web apa pun. Anda hanya perlu menginstal aplikasi Telegram di perangkat Anda agar chat dapat terbuka.',
    'tg.seo.faq.q2': 'Bisakah saya mengirim pesan melalui username?',
    'tg.seo.faq.a2': 'Ya! Cukup masukkan @username mereka (contoh: @durov) dan OPN Chat akan membuka chat langsung dengan mereka di Telegram. Tidak perlu nomor telepon.',
    'tg.seo.faq.q3': 'Bisakah saya juga menggunakan nomor telepon?',
    'tg.seo.faq.a3': 'Ya. Masukkan nomor telepon dengan kode negara dan OPN Chat akan membuka chat Telegram dengan nomor tersebut menggunakan format t.me/+nomor.',
    'tg.seo.faq.q4': 'Apakah OPN Chat gratis?',
    'tg.seo.faq.a4': 'Ya, OPN Chat sepenuhnya gratis. Tanpa biaya tersembunyi, tanpa fitur premium, dan tanpa iklan.',
    'tg.seo.faq.q5': 'Apa yang terjadi dengan data yang saya masukkan?',
    'tg.seo.faq.a5': 'Tidak ada data yang dikirim ke server kami. Entri terbaru Anda disimpan secara lokal di peramban Anda hanya untuk kenyamanan. Anda dapat menghapusnya kapan saja.',
    'tg.footer.tagline': 'opnchat.net — OPN Chat Telegram. Tanpa data di server. Semuanya berjalan di peramban Anda.',
    'tg.footer.disclaimer.brief': 'OPN Chat tidak berafiliasi dengan Telegram atau Telegram FZ-LLC.',
    'tg.footer.whatsapp': 'Versi WhatsApp',

    // Hub page
    'hub.meta.title': 'OPN Chat — Alat Gratis: WhatsApp & Telegram Tanpa Simpan Nomor',
    'hub.meta.description': 'Alat online gratis yang berjalan di peramban Anda. Kirim pesan WhatsApp dan Telegram tanpa simpan nomor. Tanpa daftar, tanpa data di server. Privat dan instan.',
    'hub.meta.keywords': 'whatsapp tanpa simpan nomor, telegram tanpa simpan nomor, alat online gratis, alat privat, kirim pesan tanpa kontak, wa.me, t.me, opnchat',
    'hub.hero.title': 'Alat Online Gratis',
    'hub.hero.subtitle': 'Privat. Instan. Tanpa daftar. Semuanya berjalan di peramban Anda.',
    'hub.service.whatsapp.title': 'WhatsApp',
    'hub.service.whatsapp.desc': 'Kirim pesan ke nomor WhatsApp mana pun tanpa menyimpannya ke kontak Anda. Cepat, privat, gratis.',
    'hub.service.whatsapp.cta': 'Buka WhatsApp',
    'hub.service.telegram.title': 'Telegram',
    'hub.service.telegram.desc': 'Kirim pesan ke nama pengguna atau nomor Telegram mana pun tanpa menambahkan kontak. Satu bidang pintar.',
    'hub.service.telegram.cta': 'Buka Telegram',
    'hub.service.more.title': 'Alat Lainnya Segera Hadir',
    'hub.service.more.desc': 'Kode QR, penghitung waktu, pembuat kata sandi dan lainnya — semuanya privat, semuanya gratis, semuanya di peramban Anda.',
    'hub.seo.what.heading': 'Apa Itu OPN Chat?',
    'hub.seo.what.text': 'OPN Chat adalah kumpulan alat online gratis yang dibangun dengan pendekatan mengutamakan privasi. Setiap alat berjalan sepenuhnya di peramban web Anda — tidak ada data yang pernah dikirim ke server kami. Baik Anda perlu mengirim pesan WhatsApp tanpa menyimpan nomor, menghubungi seseorang di Telegram tanpa menambahkan kontak, atau menggunakan utilitas sehari-hari lainnya, OPN Chat memberikan pengalaman yang cepat, privat, dan tanpa daftar. Nama OPN berarti Online Privacy Network, mencerminkan prinsip inti kami: data Anda tetap dengan Anda.',
    'hub.seo.why.heading': 'Mengapa Orang Menggunakan OPN Chat',
    'hub.seo.why.text': 'Orang menggunakan OPN Chat karena kesederhanaan dan privasinya. Tidak ada akun untuk dibuat, tidak ada data pribadi untuk dimasukkan, dan tidak ada iklan untuk ditutup. Setiap alat melakukan satu hal dengan baik — membuka obrolan, membuat kode, mengonversi satuan — dan tidak menghalangi Anda. Semua pemrosesan terjadi secara lokal di peramban Anda menggunakan protokol tautan resmi (wa.me untuk WhatsApp, t.me untuk Telegram), jadi pesan Anda langsung melalui aplikasi resmi. Tidak ada yang dicegat, disimpan, atau dilacak.',

    // Language switcher
    'lang.switch': 'English',
    'lang.current': 'Bahasa Indonesia',
  },
} as const;
