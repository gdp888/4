#!/usr/bin/env python3
"""Refactor i18n/ui.ts: rename language keys en→eng, es→esp, pt→por, id→ind"""

import re

filepath = '/home/z/my-project/src/i18n/ui.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Rename keys in `languages` object
content = content.replace("  en: 'English',", "  eng: 'English',")
content = content.replace("  es: 'Español',", "  esp: 'Español',")
content = content.replace("  pt: 'Português',", "  por: 'Português',")
content = content.replace("  id: 'Bahasa Indonesia',", "  ind: 'Bahasa Indonesia',")

# 2. Rename keys in `langCodes` object
content = content.replace("  en: 'ENG',", "  eng: 'ENG',")
content = content.replace("  es: 'ESP',", "  esp: 'ESP',")
content = content.replace("  pt: 'POR',", "  por: 'POR',")
content = content.replace("  id: 'IND',", "  ind: 'IND',")

# 3. Update defaultLang
content = content.replace("export const defaultLang = 'en';", "export const defaultLang = 'eng';")

# 4. Rename ui object keys - these are `  en: {` and `  es: {` etc.
content = re.sub(r'^  en: \{', '  eng: {', content, flags=re.MULTILINE)
content = re.sub(r'^  es: \{', '  esp: {', content, flags=re.MULTILINE)
content = re.sub(r'^  pt: \{', '  por: {', content, flags=re.MULTILINE)
content = re.sub(r'^  id: \{', '  ind: {', content, flags=re.MULTILINE)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done! Renamed en→eng, es→esp, pt→por, id→ind in ui.ts")
