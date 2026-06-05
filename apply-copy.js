const fs = require('fs');
const path = require('path');

// Dictionary of simple text replacements (raw text and JSON payload)
// Order matters: replace longer strings first to avoid partial replacements.
const simpleReplacements = [
    // META & SEO
    { anchor: `PixelPerfect Web Agency | Stunning Web Design &amp; Development`, copy: `Cypher — Advanced Scaling System per PMI italiane` },
    { anchor: `PixelPerfect Web Agency | Stunning Web Design & Development`, copy: `Cypher — Advanced Scaling System per PMI italiane` },
    { anchor: `PixelPerfect Web Agency | Stunning Web Design \\u0026 Development`, copy: `Cypher — Advanced Scaling System per PMI italiane` },
    { anchor: `Ignite Digital: Your Creative Web Agency Partner`, copy: `Cypher — Advanced Scaling System per PMI italiane` },
    { anchor: `Transform your online presence with PixelPerfect Web Agency. We craft bespoke, high-performance websites that captivate audiences and drive results for your business.`, copy: `Non gestione di pubblicità: sistemi di acquisizione clienti. Strategia, advertising performance e AI, con compenso legato ai risultati. Padova · Veneto.` },
    
    // HERO
    { anchor: `Award-Winning Agency`, copy: `Advanced Scaling System · Padova` },
    { anchor: `We Build Digital Experiences`, copy: `Costruiamo sistemi di acquisizione clienti.` },
    { anchor: `Transform your brand with cutting‑edge web design and development. We craft stunning websites that convert visitors into customers.`, copy: `Non vendiamo gestione di pubblicità. Strategia, advertising performance e AI in un unico sistema — con compenso legato alle vendite che generiamo.` },
    { anchor: `Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers.`, copy: `Non vendiamo gestione di pubblicità. Strategia, advertising performance e AI in un unico sistema — con compenso legato alle vendite che generiamo.` },
    
    // FEATURE 1 (SERVICES)
    { anchor: `Our Services`, copy: `Il sistema` },
    { anchor: `We offer a full suite of digital services to help your brand stand out online.`, copy: `Tre moduli, un solo obiettivo: trasformare l'investimento pubblicitario in clienti. Ogni modulo si aggancia al precedente.` },
    { anchor: `We optimize your website to rank higher on search engines and drive organic traffic.`, copy: `Strategia e posizionamento. Mercato, offerta, margini, cliente ideale: il piano viene prima delle campagne. Sempre.` },
    { anchor: `Custom-built websites that are fast, responsive, and designed to convert.`, copy: `Advertising performance su Meta, Google e LinkedIn. Test, lettura dei dati, scaling disciplinato.` },
    { anchor: `Build a memorable brand identity that resonates with your audience.`, copy: `Automazioni e AI: follow-up, CRM, gestione e-commerce. Dove il sistema diventa operativo ogni giorno.` },
    { anchor: `Web Development`, copy: `Cypher Engine` },
    { anchor: `Branding`, copy: `Cypher Lab` },
    { anchor: `SEO`, copy: `Cypher OS` },

    // FEATURE 2 (OUR WORK)
    { anchor: `Our Work`, copy: `I settori` },
    { anchor: `A selection of projects we&#39;ve crafted for clients across industries.`, copy: `Lavoriamo dove ci sono prodotto solido, margini sani e un founder che vuole crescere.` },
    { anchor: `A selection of projects we've crafted for clients across industries.`, copy: `Lavoriamo dove ci sono prodotto solido, margini sani e un founder che vuole crescere.` },
    { anchor: `Luxury fragrance e-commerce`, copy: `Prodotto differenziato, vendita B2B e B2C` },
    { anchor: `Bespoke luxury travel experiences`, copy: `Acquisizione pazienti privati, locale` },
    { anchor: `Premier dental practice`, copy: `Traffico, prenotazioni, ripetizione d'acquisto` },
    { anchor: `Professional roofing services`, copy: `Brand propri, no puro arbitraggio` },
    { anchor: `Luxury property listings`, copy: `Percorsi di acquisizione lunghi, alto ticket` },
    { anchor: `Umbra Skincare`, copy: `Manifattura di nicchia` },
    { anchor: `Luxuria Travel`, copy: `Studi medici e dentistici` },
    { anchor: `Dental Care`, copy: `Ristorazione e retail multi-sede` },
    { anchor: `Summit Roofing`, copy: `E-commerce di prodotto` },
    { anchor: `Dubai Real Estate`, copy: `B2B e servizi specializzati` },

    // FEATURE 3 (METHOD)
    { anchor: `Our Promise`, copy: `Il metodo` },
    { anchor: `We deliver results that speak for themselves.`, copy: `Niente magia: processo, dati e disciplina. Così funziona la partnership, dal giorno uno.` },
    { anchor: `All Devices Optimization`, copy: `Un sistema, tutti i canali` },
    { anchor: `Pixel-perfect websites that look stunning on every screen size and device.`, copy: `Meta, Google, LinkedIn: messaggio coerente e creatività adattate a ogni piattaforma, senza dispersione.` },
    { anchor: `Secure Hosting`, copy: `Tracking a prova di decisione` },
    { anchor: `Enterprise-grade security and 99.9% uptime for your website.`, copy: `Pixel, conversioni e attribuzione configurati bene. Se i dati sono sporchi, le decisioni sono sbagliate.` },
    { anchor: `Project Launch`, copy: `Onboarding` },
    { anchor: `Discovery &amp; wireframes — Day 1-3`, copy: `Audit, accessi, margini` },
    { anchor: `Design &amp; development — Day 4-10`, copy: `Strategia, offerta, setup` },
    { anchor: `Testing &amp; deployment — Day 11-14`, copy: `Prime campagne live` },
    { anchor: `Discovery & wireframes — Day 1-3`, copy: `Audit, accessi, margini` },
    { anchor: `Design & development — Day 4-10`, copy: `Strategia, offerta, setup` },
    { anchor: `Testing & deployment — Day 11-14`, copy: `Prime campagne live` },
    { anchor: `Week 1`, copy: `Giorno 1-3` },
    // "Live" remains "Live"
    { anchor: `Fast Turnaround`, copy: `Live in 14 giorni` },
    { anchor: `From concept to launch in record time without sacrificing quality.`, copy: `Dalla firma alle prime campagne attive in due settimane. La strategia non resta in un documento.` },
    { anchor: `Seamless Integrations`, copy: `Si integra con i tuoi strumenti` },
    { anchor: `Connect with the tools you already use — CRMs, analytics, payments, and more.`, copy: `CRM, analytics, e-commerce, gestionale: il sistema si collega a ciò che usi già. Niente migrazioni forzate.` },
    { anchor: `Growth Trends`, copy: `Cypher Atlas` },
    { anchor: `Data-driven insights to optimize your search presence and drive traffic.`, copy: `La dashboard sempre aperta: ROAS, CAC e vendite in tempo reale. Sai dove va ogni euro, prima di chiederlo.` },

    // TESTIMONIAL
    { anchor: `Webild completely transformed our online presence. The team delivered a stunning website that exceeded our expectations and doubled our conversion rate.`, copy: `Le metriche di vanity non pagano gli stipendi. Per questo non le presentiamo: in dashboard trovi ROAS, CAC e vendite — i numeri che muovono il fatturato.` },
    { anchor: `— Maria Santos, CEO at Luxuria Travel`, copy: `— Marco Milanello, Founder di Cypher` },

    // METRICS
    { anchor: `Trusted by Industry Leaders`, copy: `Il modello, in cifra` },
    { anchor: `Years of experience building digital products that drive real results.`, copy: `Numeri di struttura, non promesse: come funziona la partnership con Cypher.` },
    { anchor: `Projects`, copy: `Giorni` },
    { anchor: `Successfully delivered across all industries`, copy: `Dalla firma alle prime campagne live` },
    { anchor: `Satisfaction`, copy: `Performance fee` },
    { anchor: `Client satisfaction rate and counting`, copy: `Sulle vendite generate. Skin in the game.` },
    { anchor: `Years`, copy: `Proprietà tua` },
    { anchor: `Of crafting exceptional digital experiences`, copy: `Account, dati e creatività restano all'azienda` },
    { anchor: `100+`, copy: `14` },
    { anchor: `99%`, copy: `5-10%` },
    { anchor: `8+`, copy: `100%` },

    // FEATURE COMPARISON
    { anchor: `Why Choose Webild`, copy: `Perché Cypher` },
    { anchor: `See the difference a professional web agency makes.`, copy: `La differenza tra gestire campagne e costruire un sistema di acquisizione.` },
    { anchor: `Generic templates with no personality`, copy: `Fee mensile fissa, slegata dai risultati` },
    { anchor: `Slow load times and poor performance`, copy: `Report di metriche vanity che nessuno legge` },
    { anchor: `No SEO strategy or search visibility`, copy: `Campagne lanciate senza strategia a monte` },
    { anchor: `Outdated design that hurts credibility`, copy: `Account pubblicitari e dati in mano all'agenzia` },
    { anchor: `No ongoing support after launch`, copy: `Stesso playbook per ogni cliente` },
    { anchor: `Custom designs tailored to your brand`, copy: `Quota fissa + performance fee sulle vendite` },
    { anchor: `Lightning-fast performance on all devices`, copy: `Dashboard live: ROAS, CAC e vendite sempre visibili` },
    { anchor: `Built-in SEO to drive organic traffic`, copy: `Prima la strategia: mercato, offerta, margini` },
    { anchor: `Modern design that builds trust`, copy: `Accessi, dati e creatività restano di tua proprietà` },
    { anchor: `Dedicated support and maintenance`, copy: `Sistema su misura: test, lettura dati, scaling` },

    // TEAM
    { anchor: `Meet the Team`, copy: `Chi c'è dietro` },
    { anchor: `The creative minds behind your next project.`, copy: `Niente reparti fantasma: chi lavora sul tuo sistema ha nome e cognome.` },
    { anchor: `Sarah Miller`, copy: `Marco Milanello` },
    { anchor: `Lead Developer`, copy: `Founder · Strategia & Performance` },
    { anchor: `Valentina Reyes`, copy: `[NOME 2 — chiedere a Marco]` },
    { anchor: `Creative Director`, copy: `[RUOLO 2]` },
    { anchor: `Carlos Mendoza`, copy: `[NOME 3 — chiedere a Marco]` },
    { anchor: `UX Designer`, copy: `[RUOLO 3]` },

    // FAQ
    { anchor: `Frequently Asked Questions`, copy: `Domande frequenti` },
    { anchor: `Everything you need to know about working with us.`, copy: `Quello che chiedono tutti, prima di iniziare. Risposte dirette.` },
    
    { anchor: `How long does a typical project take?`, copy: `In cosa siete diversi da un'agenzia?` },
    { anchor: `Every project is unique, but a standard corporate website usually takes 4-6 weeks from initial consultation to launch. More complex applications or e-commerce platforms may take 8-12 weeks. We&#39;ll provide a detailed timeline during our discovery phase.`, copy: `Un'agenzia gestisce campagne e fattura ore. Cypher costruisce un sistema di acquisizione — strategia, advertising, automazioni, dati — e lega il proprio compenso alle vendite generate. Se non cresci tu, non cresciamo noi.` },
    { anchor: `Every project is unique, but a standard corporate website usually takes 4-6 weeks from initial consultation to launch. More complex applications or e-commerce platforms may take 8-12 weeks. We'll provide a detailed timeline during our discovery phase.`, copy: `Un'agenzia gestisce campagne e fattura ore. Cypher costruisce un sistema di acquisizione — strategia, advertising, automazioni, dati — e lega il proprio compenso alle vendite generate. Se non cresci tu, non cresciamo noi.` },

    { anchor: `What is your pricing structure?`, copy: `Come funziona il compenso?` },
    { anchor: `We offer custom pricing based on your specific requirements. After our initial discovery call, we&#39;ll provide a detailed proposal with transparent costs. We typically structure payments in milestones throughout the project lifecycle.`, copy: `Quota fissa mensile più una performance fee del 5–10% sulle vendite generate dal sistema, tracciate in dashboard condivisa. Niente costi nascosti: il media budget resta tuo, sui tuoi account.` },
    { anchor: `We offer custom pricing based on your specific requirements. After our initial discovery call, we'll provide a detailed proposal with transparent costs. We typically structure payments in milestones throughout the project lifecycle.`, copy: `Quota fissa mensile più una performance fee del 5–10% sulle vendite generate dal sistema, tracciate in dashboard condivisa. Niente costi nascosti: il media budget resta tuo, sui tuoi account.` },

    { anchor: `Do you offer ongoing maintenance?`, copy: `Qual è l'investimento per partire?` },
    { anchor: `Yes, we provide comprehensive maintenance packages to ensure your digital assets remain secure, up-to-date, and performing optimally. This includes security patches, performance monitoring, and regular content updates.`, copy: `Una quota fissa a partire da circa €1.500/mese più un media budget consigliato di €2.000–10.000/mese, in base a margini e obiettivi. Sotto certe soglie il sistema non è sostenibile: in audit te lo diciamo subito.` },

    { anchor: `Can you redesign my existing website?`, copy: `In quanto tempo vedo i primi risultati?` },
    { anchor: `Absolutely. We can completely overhaul your current website, improving its performance, user experience, and visual appeal while ensuring a seamless transition that protects your existing SEO rankings.`, copy: `Le prime campagne sono live entro 14 giorni dalla firma. I primi segnali affidabili arrivano in 30–60 giorni; la scalabilità si costruisce in 90–180. Chi ti promette risultati garantiti in una settimana sta vendendo altro.` },

    { anchor: `What technologies do you use?`, copy: `Lavorate con qualsiasi azienda?` },
    { anchor: `We use modern, scalable technologies including React, Next.js, and TypeScript for the frontend, alongside robust backend solutions and headless CMS platforms. We select the best tech stack specifically suited for your project&#39;s needs.`, copy: `No. Lavoriamo con PMI con prodotto solido, margine lordo sano e un decisore operativo. Non lavoriamo con pre-product-market-fit, puro arbitraggio e-commerce o settori incompatibili con la performance. Meglio dirlo prima.` },
    { anchor: `We use modern, scalable technologies including React, Next.js, and TypeScript for the frontend, alongside robust backend solutions and headless CMS platforms. We select the best tech stack specifically suited for your project's needs.`, copy: `No. Lavoriamo con PMI con prodotto solido, margine lordo sano e un decisore operativo. Non lavoriamo con pre-product-market-fit, puro arbitraggio e-commerce o settori incompatibili con la performance. Meglio dirlo prima.` },

    // CONTACT
    { anchor: `Get in Touch`, copy: `Contatti` },
    { anchor: `Ready to Transform Your Digital Presence?`, copy: `Vediamo se sei il caso giusto per Cypher.` },
    { anchor: `Let&#39;s build something extraordinary together. Get in touch and let&#39;s discuss your next project.`, copy: `Un audit di 30 minuti: guardiamo offerta, numeri e margini. Se non possiamo aiutarti, te lo diciamo subito — senza impegno e senza script di vendita.` },
    { anchor: `Let's build something extraordinary together. Get in touch and let's discuss your next project.`, copy: `Un audit di 30 minuti: guardiamo offerta, numeri e margini. Se non possiamo aiutarti, te lo diciamo subito — senza impegno e senza script di vendita.` },

    // FOOTER
    { anchor: `Company`, copy: `Cypher` },
    { anchor: `Webild`, copy: `cypher` },
    { anchor: `© 2026 | Webild | Privacy Policy`, copy: `© 2026 Cypher · P.IVA [INSERIRE] · Padova — Privacy Policy` },
    { anchor: `© 2026 | cypher | Privacy Policy`, copy: `© 2026 Cypher · P.IVA [INSERIRE] · Padova — Privacy Policy` },
    { anchor: `Privacy Policy`, copy: `Privacy Policy` },
];

const exactWordReplacements = [
    { anchor: `Work`, copy: `Sistema` },
    { anchor: `Services`, copy: `Metodo` },
    { anchor: `About`, copy: `Team` },
    { anchor: `Contact`, copy: `Contatti` },
    { anchor: `Connect`, copy: `Social` },
    { anchor: `Twitter`, copy: `LinkedIn` },
    { anchor: `LinkedIn`, copy: `Instagram` }, 
    { anchor: `Instagram`, copy: `Email` },
    { anchor: `Dribbble`, copy: ` ` },
    { anchor: `Webild`, copy: `cypher` },
    { anchor: `PixelPerfect`, copy: `Cypher` },
];

const ariaLabels = [
    { anchor: `Main navigation`, copy: `Navigazione principale` },
    { anchor: `Open menu`, copy: `Apri il menu` },
    { anchor: `Navigate to Work`, copy: `Vai a Sistema` },
    { anchor: `Navigate to Services`, copy: `Vai a Metodo` },
    { anchor: `Navigate to About`, copy: `Vai a Team` },
    { anchor: `Navigate to Contact`, copy: `Vai a Contatti` },
    { anchor: `Hero section`, copy: `Sezione di apertura` },
    { anchor: `Feature section`, copy: `Il sistema` },
    { anchor: `Testimonial section`, copy: `Citazione del founder` },
    { anchor: `Metrics section`, copy: `Il modello in cifra` },
    { anchor: `Feature comparison section`, copy: `Confronto con le agenzie tradizionali` },
    { anchor: `Team section`, copy: `Chi c'è dietro` },
    { anchor: `FAQ section`, copy: `Domande frequenti` },
    { anchor: `Contact section`, copy: `Contatti` },
    { anchor: `Site footer`, copy: `Piè di pagina` },
    { anchor: `Previous slide`, copy: `Slide precedente` },
    { anchor: `Next slide`, copy: `Slide successiva` },
    { anchor: `Carousel progress`, copy: `Avanzamento carosello` }
];

const buttonReplacements = [
    { anchor: `Get Started`, copy: `Prenota l'audit` },
    { anchor: `Start Project`, copy: `Prenota l'audit` },
    { anchor: `View Work`, copy: `Vedi il metodo` },
    { anchor: `All Services`, copy: `Come lavoriamo` },
    { anchor: `View All Work`, copy: `Verifica il tuo settore` },
    { anchor: `Start Your Project`, copy: `Prenota l'audit` },
    { anchor: `View Our Work`, copy: `Scrivici` },
];

function buildSpanHtml(text) {
    let html = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let delay = (i * 0.01).toFixed(2);
        if (delay === "0.00") delay = "0";
        if (delay.endsWith("0") && delay.includes(".")) delay = delay.slice(0, -1);
        
        let style = `transition-delay: ${delay}s;`;
        if (char === ' ') {
            style += ' white-space: pre;';
        }
        // HTML encode ' to &#39; if needed
        let safeChar = char === "'" ? "&#39;" : char;
        html += `<span style="${style}">${safeChar}</span>`;
    }
    return html;
}

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Process regular string replacements
    for (let rule of simpleReplacements) {
        content = content.split(rule.anchor).join(rule.copy);
    }
    
    // 2. Exact word replacements (mostly for navbar menus)
    for (let rule of exactWordReplacements) {
        content = content.replace(new RegExp(`>\\s*${rule.anchor}\\s*<`, 'g'), `>${rule.copy}<`);
        content = content.replace(new RegExp(`"${rule.anchor}"`, 'g'), `"${rule.copy}"`);
    }

    // 3. Process aria-labels
    for (let rule of ariaLabels) {
        content = content.split(`aria-label="${rule.anchor}"`).join(`aria-label="${rule.copy}"`);
    }

    // 4. Process buttons (both raw text in JSON and the span HTML)
    for (let rule of buttonReplacements) {
        content = content.split(`aria-label="${rule.anchor}"`).join(`aria-label="${rule.copy}"`);
        content = content.split(`"${rule.anchor}"`).join(`"${rule.copy}"`);
        content = content.split(`>${rule.anchor}<`).join(`>${rule.copy}<`);
        
        const oldSpanHtml = buildSpanHtml(rule.anchor);
        const newSpanHtml = buildSpanHtml(rule.copy);
        content = content.split(oldSpanHtml).join(newSpanHtml);
    }

    // 5. Marquee keywords replacement
    const marqueeOld = `Keywords | Backlinks | Meta Tags | Organic Traffic | Rankings | Analytics | SERP | Indexing`;
    const marqueeNew = `ROAS | CAC | LTV | Tracking | Creatività | Audience | Retention | Payback`;
    content = content.split(marqueeOld).join(marqueeNew);
    
    const marqueeOldNoSpace = marqueeOld.replace(/ /g, '');
    const marqueeNewNoSpace = marqueeNew.replace(/ /g, '');
    content = content.split(marqueeOldNoSpace).join(marqueeNewNoSpace);
    
    // 6. JSON-LD Injection
    if (filePath.endsWith('index.html') && !content.includes('application/ld+json')) {
        const jsonLd = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Cypher",
  "description": "Advanced Scaling System per PMI italiane: strategia, advertising performance e AI con compenso legato ai risultati.",
  "areaServed": "IT",
  "address": { "@type": "PostalAddress", "addressLocality": "Padova", "addressRegion": "Veneto", "addressCountry": "IT" },
  "founder": { "@type": "Person", "name": "Marco Milanello" },
  "url": "[DOMINIO — chiedere a Marco]"
}
</script>`;
        content = content.replace('</head>', jsonLd + '\n</head>');
    }
    
    // 7. Lang attribute
    if (filePath.endsWith('index.html')) {
        content = content.replace('lang="en"', 'lang="it"');
        // Fix JSON payload misses
        content = content.replace(/PixelPerfect/g, "Cypher");
        content = content.replace(/Webild/g, "cypher");
    }

    fs.writeFileSync(filePath, content);
}

function traverseDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDirectory(fullPath);
        } else {
            if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
                processFile(fullPath);
            }
        }
    }
}

console.log("Applying copy to sito-1...");
processFile(path.join(__dirname, 'sito-1', 'index.html'));
traverseDirectory(path.join(__dirname, 'sito-1', '_next', 'static', 'chunks'));

console.log("Applying copy to sito-2...");
processFile(path.join(__dirname, 'sito-2', 'index.html'));
traverseDirectory(path.join(__dirname, 'sito-2', '_next', 'static', 'chunks'));

console.log("Done.");
