'use client'

export type Language = 'en' | 'es' | 'de' | 'ja' | 'fr' | 'yo'

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Identity',
    'nav.skills': 'Architecture',
    'nav.services': 'Capabilities',
    'nav.projects': 'Deployments',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Uplink',
    
    // Hero Section
    'hero.title': 'EMMANUEL ABIODUN OLADIPO',
    'hero.tagline': 'Systems // Engineering // Innovation',
    'hero.cta': 'INITIALIZE_CONTACT()',
    'hero.logs': 'VIEW_SYSTEM_LOGS',
    'hero.description': 'Architecting robust, scalable software solutions for a global digital landscape. Focused on performance, security, and exceptional user engineering.',
    
    // About Section
    'about.identity': 'Identity_Profile // v3.0',
    'about.title': 'CORE_ARCHITECT',
    'about.bio': 'High-performance software engineer specializing in scalable full-stack systems and technical UI architecture.',
    
    // Services
    'services.title': 'CAPABILITIES',
    'services.tagline': 'Engineered to scale. Built to perform.',
    
    // Projects
    'projects.title': 'ENGINEERING SOLUTIONS',
    'projects.tagline': 'A selection of high-performance systems and full-stack applications.',
    'projects.viewLive': 'LIVE_PREVIEW',
    'projects.viewCase': 'VIEW_CASE_STUDY',
    
    // Contact
    'contact.title': 'COMMS_UPLINK',
    'contact.send': 'TRANSMIT_MESSAGE()',
    
    // Footer
    'footer.copyright': '© 2026 EMMADRID // SYSTEM_STABLE',
    'footer.designed': 'Engineered by Emmanuel Abiodun Oladipo',
  },
  
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.skills': 'Habilidades',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.uiDesign': 'Diseño UI',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    
    'hero.title': 'Emmanuel Abiodun Oladipo',
    'hero.role1': 'Diseñador y Desarrollador Web',
    'hero.role2': 'Experto en Diseño UI/UX',
    'hero.role3': 'Desarrollador Web Full Stack',
    'hero.description': 'Convierto ideas innovadoras en realidad a través de tecnologías web de vanguardia y diseño reflexivo',
    'hero.cta': 'Comenzar',
    'hero.learnMore': 'Más Información',
    
    'about.title': 'Acerca de Mí',
    'about.intro': 'Soy Emmanuel Abiodun Oladipo, estudiante de Ciencias de la Computación de Nigeria',
    'about.tagline': 'Convirtiendo Ideas en Realidad',
    'about.bio': 'Con experiencia en desarrollo web full-stack, diseño UI/UX y desarrollo de software, transformo desafíos empresariales en soluciones digitales',
    
    'services.title': 'Servicios',
    'services.webDevelopment': 'Desarrollo Web',
    'services.uiux': 'Diseño UI/UX',
    'services.saas': 'Desarrollo SaaS',
    
    'projects.title': 'Proyectos',
    'projects.viewLive': 'Ver En Vivo',
    'projects.viewProject': 'Ver Proyecto',
    
    'pricing.title': 'Precios',
    'pricing.basic': 'Básico',
    'pricing.pro': 'Profesional',
    'pricing.enterprise': 'Empresarial',
    'pricing.negotiate': 'Se Permite Negociación',
    
    'contact.title': 'Contácteme',
    'contact.message': 'Comuníquese para consultas de desarrollo web',
    'contact.send': 'Enviar Mensaje',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.subject': 'Asunto',
    'contact.body': 'Mensaje',
    
    'footer.copyright': '© 2026 EMMADRID. Todos los derechos reservados.',
    'footer.designed': 'Diseñado y desarrollado por Emmanuel Abiodun Oladipo',
  },
  
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über Mich',
    'nav.skills': 'Fähigkeiten',
    'nav.services': 'Dienstleistungen',
    'nav.projects': 'Projekte',
    'nav.uiDesign': 'UI-Design',
    'nav.pricing': 'Preise',
    'nav.contact': 'Kontakt',
    
    'hero.title': 'Emmanuel Abiodun Oladipo',
    'hero.role1': 'Web-Designer und -Entwickler',
    'hero.role2': 'UI/UX-Design-Experte',
    'hero.role3': 'Full-Stack-Web-Entwickler',
    'hero.description': 'Ich verwandle innovative Ideen durch modernste Webtechnologien und durchdachtes Design in die Realität um',
    'hero.cta': 'Jetzt Starten',
    'hero.learnMore': 'Mehr Erfahren',
    
    'about.title': 'Über Mich',
    'about.intro': 'Ich bin Emmanuel Abiodun Oladipo, ein Informatikstudent aus Nigeria',
    'about.tagline': 'Ideen in Wirklichkeit Umwandeln',
    'about.bio': 'Mit Expertise in Full-Stack-Webentwicklung, UI/UX-Design und Softwareentwicklung transformiere ich geschäftliche Herausforderungen in digitale Lösungen',
    
    'services.title': 'Dienstleistungen',
    'services.webDevelopment': 'Webentwicklung',
    'services.uiux': 'UI/UX-Design',
    'services.saas': 'SaaS-Entwicklung',
    
    'projects.title': 'Projekte',
    'projects.viewLive': 'Live Ansehen',
    'projects.viewProject': 'Projekt Ansehen',
    
    'pricing.title': 'Preise',
    'pricing.basic': 'Basis',
    'pricing.pro': 'Professionell',
    'pricing.enterprise': 'Unternehmens',
    'pricing.negotiate': 'Verhandlung Ist Erlaubt',
    
    'contact.title': 'Kontaktieren Sie Mich',
    'contact.message': 'Setzen Sie sich in Verbindung für Webentwicklungsanfragen',
    'contact.send': 'Nachricht Senden',
    'contact.name': 'Vollständiger Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.subject': 'Betreff',
    'contact.body': 'Nachricht',
    
    'footer.copyright': '© 2026 EMMADRID. Alle Rechte vorbehalten.',
    'footer.designed': 'Entworfen und entwickelt von Emmanuel Abiodun Oladipo',
  },
  
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '概要',
    'nav.skills': 'スキル',
    'nav.services': 'サービス',
    'nav.projects': 'プロジェクト',
    'nav.uiDesign': 'UIデザイン',
    'nav.pricing': '価格',
    'nav.contact': 'お問い合わせ',
    
    'hero.title': 'Emmanuel Abiodun Oladipo',
    'hero.role1': 'ウェブデザイナー・開発者',
    'hero.role2': 'UI/UXデザイン専門家',
    'hero.role3': 'フルスタックウェブ開発者',
    'hero.description': '最先端のウェブ技術と思慮深い設計を通じて、革新的なアイデアを現実に変えます',
    'hero.cta': '始める',
    'hero.learnMore': 'もっと詳しく',
    
    'about.title': '概要',
    'about.intro': 'ナイジェリアのコンピュータサイエンス学生、Emmanuel Abiodun Oladipo です',
    'about.tagline': 'アイデアを現実にする',
    'about.bio': 'フルスタックウェブ開発、UI/UXデザイン、ソフトウェア開発の専門知識により、ビジネスの課題をデジタルソリューションに変革します',
    
    'services.title': 'サービス',
    'services.webDevelopment': 'ウェブ開発',
    'services.uiux': 'UI/UXデザイン',
    'services.saas': 'SaaS開発',
    
    'projects.title': 'プロジェクト',
    'projects.viewLive': 'ライブを見る',
    'projects.viewProject': 'プロジェクトを見る',
    
    'pricing.title': '価格',
    'pricing.basic': 'ベーシック',
    'pricing.pro': 'プロフェッショナル',
    'pricing.enterprise': 'エンタープライズ',
    'pricing.negotiate': '交渉可能',
    
    'contact.title': 'お問い合わせ',
    'contact.message': 'ウェブ開発のお問い合わせ',
    'contact.send': 'メッセージを送信',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.subject': '件名',
    'contact.body': 'メッセージ',
    
    'footer.copyright': '© 2026 EMMADRID. すべての権利が保有されています。',
    'footer.designed': 'Emmanuel Abiodun Oladipo によってデザイン・開発されました',
  },
  
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.skills': 'Compétences',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.uiDesign': 'Design UI',
    'nav.pricing': 'Tarification',
    'nav.contact': 'Contact',
    
    'hero.title': 'Emmanuel Abiodun Oladipo',
    'hero.role1': 'Concepteur et Développeur Web',
    'hero.role2': 'Expert en Design UI/UX',
    'hero.role3': 'Développeur Web Full Stack',
    'hero.description': 'Je concrétise des idées innovantes en réalité grâce aux technologies web de pointe et à un design réfléchi',
    'hero.cta': 'Commencer',
    'hero.learnMore': 'En Savoir Plus',
    
    'about.title': 'À Propos de Moi',
    'about.intro': 'Je suis Emmanuel Abiodun Oladipo, étudiant en informatique au Nigeria',
    'about.tagline': 'Transformer les Idées en Réalité',
    'about.bio': 'Avec une expertise en développement web full-stack, design UI/UX et développement logiciel, je transforme les défis commerciaux en solutions numériques',
    
    'services.title': 'Services',
    'services.webDevelopment': 'Développement Web',
    'services.uiux': 'Design UI/UX',
    'services.saas': 'Développement SaaS',
    
    'projects.title': 'Projets',
    'projects.viewLive': 'Voir en Direct',
    'projects.viewProject': 'Voir le Projet',
    
    'pricing.title': 'Tarification',
    'pricing.basic': 'Basique',
    'pricing.pro': 'Professionnel',
    'pricing.enterprise': 'Entreprise',
    'pricing.negotiate': 'La Négociation est Autorisée',
    
    'contact.title': 'Me Contacter',
    'contact.message': 'Contactez-moi pour les demandes de développement web',
    'contact.send': 'Envoyer le Message',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse E-mail',
    'contact.subject': 'Objet',
    'contact.body': 'Message',
    
    'footer.copyright': '© 2026 EMMADRID. Tous les droits réservés.',
    'footer.designed': 'Conçu et développé par Emmanuel Abiodun Oladipo',
  },
  
  yo: {
    'nav.home': 'Ile',
    'nav.about': 'Idanimo',
    'nav.skills': 'Ipilẹ',
    'nav.services': 'Agbara',
    'nav.projects': 'Iṣẹ-ọwọ',
    'nav.pricing': 'Iye',
    'nav.contact': 'Isopọ',
    
    'hero.title': 'EMMANUEL ABIODUN OLADIPO',
    'hero.tagline': 'Itoju // Imọ-ẹrọ // Atunṣe',
    'hero.cta': 'BẸRẸ_ISOPỌ()',
    'hero.logs': 'WO_ÌWÉ_ÌTÀN',
    'hero.description': 'A n kọ awọn ojutu software ti o lagbara ati ti o le pọ si fun agbaye dijitali. Idojukọ lori iṣẹ ṣiṣe, aabo, ati imọ-ẹrọ olumulo ti o tayọ.',
    
    'about.identity': 'Idanimo_Profile // v3.0',
    'about.title': 'OLU_APẸRẸ',
    'about.bio': 'Onimọ-ẹrọ software to ga julọ ti o ṣe pataki ni awọn eto full-stack ati apẹrẹ UI ti imọ-ẹrọ.',
    
    'services.title': 'ÀWỌN AGBARA',
    'services.tagline': 'Ti a ṣe lati pọ si. Ti a kọ lati ṣiṣẹ.',
    
    'projects.title': 'AWỌN OJTU IMỌ-ẸRỌ',
    'projects.tagline': 'Aṣayan awọn eto iṣẹ ṣiṣe giga ati awọn ohun elo full-stack.',
    'projects.viewLive': 'WO_NI_IPE',
    'projects.viewCase': 'WO_ÌTÀN_IṢẸ́',
    
    'contact.title': 'ISOPỌ_IBI_IṢẸ́',
    'contact.send': 'FI_IFIRANṢẸ_RANṢẸ()',
    
    'footer.copyright': '© 2026 EMMADRID // SYSTEM_STABLE',
    'footer.designed': 'Ti a kọ nipasẹ Emmanuel Abiodun Oladipo',
  },
}

export function t(key: string, lang: Language): string {
  return translations[lang][key] || key
}
