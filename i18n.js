const I18N_KEY = "language";

const messages = {
    en: {
        ruleManagement: "Rule Management",
        language: "Language",
        matchType: "Match Type",
        match: "match (Wildcard)",
        regex: "regex (RegExp)",
        pattern: "Pattern",
        title: "Title",
        icon: "Icon",
        action: "Action",
        add: "Add",
        addRule: "Add Rule",
        delete: "Delete",
        adresse: "URL",
        patternPlaceholderMatch: "Example: https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "Example: ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "Page title",
        iconPlaceholder: "Icon URL (optional)",
        requiredTitlePattern: "Title and pattern are required",
        addedSuccessfully: "Added successfully",
        advancedSettings: "Advanced Settings",
        quickActions: "Quick Actions"
    },
    zh_CN: {
        ruleManagement: "规则管理",
        language: "语言",
        matchType: "匹配类型",
        match: "match（通配）",
        regex: "regex（正则）",
        pattern: "匹配模式",
        title: "标题",
        icon: "图标",
        action: "操作",
        add: "添加",
        addRule: "添加规则",
        delete: "删除",
        adresse: "地址",
        patternPlaceholderMatch: "示例：https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "示例：^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "设置的标题",
        iconPlaceholder: "图标 URL（可选）",
        requiredTitlePattern: "标题和链接必填",
        addedSuccessfully: "添加成功",
        advancedSettings: "高级设置",
        quickActions: "快速操作"
    }, hi: {
        ruleManagement: "नियम प्रबंधन",
        language: "भाषा",
        matchType: "मिलान प्रकार",
        match: "match (वाइल्डकार्ड)",
        regex: "regex (रेगुलर एक्सप्रेशन)",
        pattern: "पैटर्न",
        title: "शीर्षक",
        icon: "आइकन",
        action: "क्रिया",
        add: "जोड़ें",
        addRule: "नियम जोड़ें",
        delete: "हटाएं",
        adresse: "URL",
        patternPlaceholderMatch: "उदाहरण: https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "उदाहरण: ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "पेज शीर्षक",
        iconPlaceholder: "आइकन URL (वैकल्पिक)",
        requiredTitlePattern: "शीर्षक और पैटर्न आवश्यक हैं",
        addedSuccessfully: "सफलतापूर्वक जोड़ा गया",
        advancedSettings: "उन्नत सेटिंग्स",
        quickActions: "त्वरित क्रियाएँ"
    }, fr: {
        ruleManagement: "Gestion des règles",
        language: "Langue",
        matchType: "Type de correspondance",
        match: "match (joker)",
        regex: "regex (expression régulière)",
        pattern: "Modèle",
        title: "Titre",
        icon: "Icône",
        action: "Action",
        add: "Ajouter",
        addRule: "Ajouter une règle",
        delete: "Supprimer",
        adresse: "URL",
        patternPlaceholderMatch: "Exemple : https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "Exemple : ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "Titre de la page",
        iconPlaceholder: "URL de l’icône (optionnel)",
        requiredTitlePattern: "Le titre et le modèle sont requis",
        addedSuccessfully: "Ajouté avec succès",
        advancedSettings: "Paramètres avancés",
        quickActions: "Actions rapides"
    }, es: {
        ruleManagement: "Gestión de reglas",
        language: "Idioma",
        matchType: "Tipo de coincidencia",
        match: "match (comodín)",
        regex: "regex (expresión regular)",
        pattern: "Patrón",
        title: "Título",
        icon: "Icono",
        action: "Acción",
        add: "Agregar",
        addRule: "Agregar regla",
        delete: "Eliminar",
        adresse: "URL",
        patternPlaceholderMatch: "Ejemplo: https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "Ejemplo: ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "Título de la página",
        iconPlaceholder: "URL del icono (opcional)",
        requiredTitlePattern: "El título y el patrón son obligatorios",
        addedSuccessfully: "Agregado correctamente",
        advancedSettings: "Configuración avanzada",
        quickActions: "Acciones rápidas"
    }, de: {
        ruleManagement: "Regelverwaltung",
        language: "Sprache",
        matchType: "Übereinstimmungstyp",
        match: "match (Wildcard)",
        regex: "regex (Regulärer Ausdruck)",
        pattern: "Muster",
        title: "Titel",
        icon: "Symbol",
        action: "Aktion",
        add: "Hinzufügen",
        addRule: "Regel hinzufügen",
        delete: "Löschen",
        adresse: "URL",
        patternPlaceholderMatch: "Beispiel: https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "Beispiel: ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "Seitentitel",
        iconPlaceholder: "Symbol-URL (optional)",
        requiredTitlePattern: "Titel und Muster sind erforderlich",
        addedSuccessfully: "Erfolgreich hinzugefügt",
        advancedSettings: "Erweiterte Einstellungen",
        quickActions: "Schnellaktionen"
    }, ja: {
        ruleManagement: "ルール管理",
        language: "言語",
        followBrowser: "ブラウザ言語に従う",
        matchType: "一致タイプ",
        match: "match（ワイルドカード）",
        regex: "regex（正規表現）",
        pattern: "パターン",
        title: "タイトル",
        icon: "アイコン",
        action: "操作",
        add: "追加",
        addRule: "ルール追加",
        delete: "削除",
        adresse: "URL",
        patternPlaceholderMatch: "例：https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "例：^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "ページタイトル",
        iconPlaceholder: "アイコンURL（任意）",
        requiredTitlePattern: "タイトルとパターンは必須です",
        addedSuccessfully: "追加しました",
        advancedSettings: "詳細設定",
        quickActions: "クイック操作"
    }, pt: {
        ruleManagement: "Gerenciamento de regras",
        language: "Idioma",
        match: "match (curinga)",
        regex: "regex (expressão regular)",
        pattern: "Padrão",
        title: "Título",
        icon: "Ícone",
        action: "Ação",
        add: "Adicionar",
        addRule: "Adicionar regra",
        delete: "Excluir",
        adresse: "URL",
        patternPlaceholderMatch: "Exemplo: https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "Exemplo: ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "Título da página",
        iconPlaceholder: "URL do ícone (opcional)",
        requiredTitlePattern: "Título e padrão são obrigatórios",
        addedSuccessfully: "Adicionado com sucesso",
        advancedSettings: "Configurações avançadas",
        quickActions: "Ações rápidas"
    }, ru: {
        ruleManagement: "Управление правилами",
        language: "Язык",
        followBrowser: "Следовать языку браузера",
        matchType: "Тип совпадения",
        match: "match (подстановочный знак)",
        regex: "regex (регулярное выражение)",
        pattern: "Шаблон",
        title: "Заголовок",
        icon: "Иконка",
        action: "Действие",
        add: "Добавить",
        addRule: "Добавить правило",
        delete: "Удалить",
        adresse: "URL",
        patternPlaceholderMatch: "Пример: https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "Пример: ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "Заголовок страницы",
        iconPlaceholder: "URL иконки (необязательно)",
        requiredTitlePattern: "Требуются заголовок и шаблон",
        addedSuccessfully: "Успешно добавлено",
        advancedSettings: "Расширенные настройки",
        quickActions: "Быстрые действия"
    }, ar: {
        ruleManagement: "إدارة القواعد",
        language: "اللغة",
        matchType: "نوع المطابقة",
        match: "match (wildcard)",
        regex: "regex (تعبير منتظم)",
        pattern: "النمط",
        title: "العنوان",
        icon: "الأيقونة",
        action: "الإجراء",
        add: "إضافة",
        addRule: "إضافة قاعدة",
        delete: "حذف",
        adresse: "URL",
        patternPlaceholderMatch: "مثال: https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "مثال: ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "عنوان الصفحة",
        iconPlaceholder: "رابط الأيقونة (اختياري)",
        requiredTitlePattern: "العنوان والنمط مطلوبان",
        addedSuccessfully: "تمت الإضافة بنجاح",
        advancedSettings: "الإعدادات المتقدمة",
        quickActions: "الإجراءات السريعة"
    },ko: {
        ruleManagement: "규칙 관리",
        language: "언어",
        matchType: "매칭 유형",
        match: "match (와일드카드)",
        regex: "regex (정규식)",
        pattern: "패턴",
        title: "제목",
        icon: "아이콘",
        action: "작업",
        add: "추가",
        addRule: "규칙 추가",
        delete: "삭제",
        adresse: "URL",
        patternPlaceholderMatch: "예시: https://www.qidian.com/chapter/*",
        patternPlaceholderRegex: "예시: ^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+",
        titlePlaceholder: "페이지 제목",
        iconPlaceholder: "아이콘 URL (선택)",
        requiredTitlePattern: "제목과 패턴은 필수입니다",
        addedSuccessfully: "추가되었습니다",
        advancedSettings: "고급 설정",
        quickActions: "빠른 작업"
    }

};

function normalizeLanguage(lang) {
    if (!lang) return "en";

    const value = lang.toLowerCase();

    if (value.startsWith("zh")) return "zh_CN";
    if (value.startsWith("en")) return "en";
    if (value.startsWith("hi")) return "hi";
    if (value.startsWith("fr")) return "fr";
    if (value.startsWith("es")) return "es";
    if (value.startsWith("de")) return "de";
    if (value.startsWith("ja")) return "ja";
    if (value.startsWith("ko")) return "ko";
    if (value.startsWith("pt")) return "pt";
    if (value.startsWith("ru")) return "ru";
    if (value.startsWith("ar")) return "ar";

    return "en";
}

async function getCurrentLanguage() {
    const {language} = await chrome.storage.sync.get(I18N_KEY);

    if (language && language !== "auto") {
        return language;
    }

    return normalizeLanguage(chrome.i18n.getUILanguage());
}

async function setLanguage(language) {
    await chrome.storage.sync.set({[I18N_KEY]: language});
}

async function applyI18n() {
    const lang = await getCurrentLanguage();
    const dict = messages[lang] || messages.en;

    document.documentElement.lang = lang === "zh_CN" ? "zh-CN" : lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key]) el.placeholder = dict[key];
    });

    const languageSelect = document.getElementById("language");
    if (languageSelect) {
        const {language = "auto"} = await chrome.storage.sync.get(I18N_KEY);
        languageSelect.value = language;

        languageSelect.addEventListener("change", async () => {
            await setLanguage(languageSelect.value);
            location.reload();
        });
    }
}