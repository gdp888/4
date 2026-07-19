#!/usr/bin/env python3
"""Revert i18n/ui.ts: rename language keys eng→en, esp→es, por→pt, ind→id"""

import re

filepath = '/home/z/my-project/src/i18n/ui.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Rename keys in `languages` object
content = content.replace("  eng: 'English',", "  en: 'English',")
content = content.replace("  esp: 'Español',", "  es: 'Español',")
content = content.replace("  por: 'Português',", "  pt: 'Português',")
content = content.replace("  ind: 'Bahasa Indonesia',", "  id: 'Bahasa Indonesia',")

# 2. Rename keys in `langCodes` object
content = content.replace("  eng: 'ENG',", "  en: 'ENG',")
content = content.replace("  esp: 'ESP',", "  es: 'ESP',")
content = content.replace("  por: 'POR',", "  pt: 'POR',")
content = content.replace("  ind: 'IND',", "  id: 'IND',")

# 3. Update defaultLang
content = content.replace("export const defaultLang = 'eng';", "export const defaultLang = 'en';")

# 4. Rename ui object keys
content = re.sub(r'^  eng: \{', '  en: {', content, flags=re.MULTILINE)
content = re.sub(r'^  esp: \{', '  es: {', content, flags=re.MULTILINE)
content = re.sub(r'^  por: \{', '  pt: {', content, flags=re.MULTILINE)
content = re.sub(r'^  ind: \{', '  id: {', content, flags=re.MULTILINE)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done! Reverted eng→en, esp→es, por→pt, ind→id in ui.ts")
