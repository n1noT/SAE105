
// NAV

let nav = {

    navMenu: [
        { navLabel: "Products", navUrl: "" },
        { navLabel: "Pricing", navUrl: "" },
        { navLabel: "Community", navUrl: "" },


    ],

    navNom: "Startup 3",

    navPers: [
        { navLabel: "Help", navUrl: "" },
        { navLabel: "Login", navUrl: "" },

    ],

    navBtn: [
        { navLabel: "Sign up", navUrl: "" },

    ]
}

let View = {};

View.formatOneNavRubrique = function (name, url) {
    let templateNavR = document.querySelector("#nav_pers_template");
    let rubriqueNav = templateNavR.innerHTML;
    rubriqueNav = rubriqueNav.replaceAll("{{nav-rubrique}}", name);
    rubriqueNav = rubriqueNav.replaceAll("{{nav-url}}", url);


    return rubriqueNav

};

View.formatOneNavBouton = function (name, url) {
    let templateNavB = document.querySelector("#nav_btn_template");
    let boutonNav = templateNavB.innerHTML;
    boutonNav = boutonNav.replaceAll("{{nav-button}}", name);
    boutonNav = boutonNav.replaceAll("{{nav-url}}", url);


    return boutonNav

};

View.formatNavMenu = function (r) {
    let templateNavMenu = document.querySelector('#nav_template');
    let navHtml = templateNavMenu.innerHTML;

    let itemsMenuNav = ""
    let itemsPersNav = ""
    let itemsBtnNav = ""

    // menu gauche
    for (let ru of r.navMenu) {
        itemsMenuNav = itemsMenuNav + View.formatOneNavRubrique(ru.navLabel, ru.navUrl);

    }

    navHtml = navHtml.replace('{{nav-liste-menu}}', itemsMenuNav);


    // Nom
    navHtml = navHtml.replaceAll("{{nav-nom}}", r.navNom)


    // menu droite rubrique
    for (let sec of r.navPers) {
        itemsPersNav = itemsPersNav + View.formatOneNavRubrique(sec.navLabel, sec.navUrl);

    }

    navHtml = navHtml.replace('{{nav-liste-pers}}', itemsPersNav);


    // menu droite bouton
    for (let bout of r.navBtn) {
        itemsBtnNav = itemsBtnNav + View.formatOneNavBouton(bout.navLabel, bout.navUrl,);
    }
    navHtml = navHtml.replace('{{nav-liste-btn}}', itemsBtnNav);

    return navHtml;
};

View.renderNav = function (data) {
    let divNav = document.querySelector('.nav');
    let ensNav = View.formatNavMenu(data)

    divNav.innerHTML = ensNav;

}


View.renderNav(nav)


// HEADER

let header = {
    headerTitle: "Create  sites without routine",
    headerPara: "Startup gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding."

}

View.formatHeader = function (t, p) {
    let head = document.querySelector(".header");
    let headerHtml = head.innerHTML;
    headerHtml = headerHtml.replaceAll("{{header-title}}", t);
    headerHtml = headerHtml.replaceAll("{{header-para}}", p);

    return headerHtml

};


View.renderHeader = function (data) {
    let divHead = document.querySelector('.header');
    let ensHead = View.formatHeader(data.headerTitle, data.headerPara)

    divHead.innerHTML = ensHead;

}


View.renderHeader(header)


// CONTENT

let content = {
    contentTitle: "Boost your workflow with Startup",
    contentPara: "Design and code"

}

View.formatContent = function (t, p) {
    let content = document.querySelector(".content");
    let contentHtml = content.innerHTML;
    contentHtml = contentHtml.replaceAll("{{content-title}}", t);
    contentHtml = contentHtml.replaceAll("{{content-para}}", p);

    return contentHtml

};


View.renderContent = function (data) {
    let divContent = document.querySelector('.content');
    let ensContent = View.formatContent(data.contentTitle, data.contentPara)

    divContent.innerHTML = ensContent;

}


View.renderContent(content)


// FEATURES

let features = {
    featTitle: "Multi Useful Components",
    featPara: "We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.",
    featDl: "Download Photos",
    featMore: "Learn More",
    featImg: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80"

}



View.formatFeatures = function (t, p, d, m, i) {
    let feat = document.querySelector(".features");
    let featHtml = feat.innerHTML;
    featHtml = featHtml.replaceAll("{{features-title}}", t);
    featHtml = featHtml.replaceAll("{{features-para}}", p);
    featHtml = featHtml.replaceAll("{{features-download}}", d);
    featHtml = featHtml.replaceAll("{{features-more}}", m);
    featHtml = featHtml.replaceAll("{{features-url}}", i);

    return featHtml

};


View.renderFeatures = function (data) {
    let divFeat = document.querySelector('.features');
    let ensFeat = View.formatFeatures(data.featTitle, data.featPara, data.featDl, data.featMore, data.featImg)

    divFeat.innerHTML = ensFeat;

}


View.renderFeatures(features)


// CALL TO ACTION

let cta = {
    ctaTitle: "Get Started for Free",

}


View.formatCta = function (t) {
    let cta = document.querySelector(".cta");
    let ctaHtml = cta.innerHTML;
    ctaHtml = ctaHtml.replaceAll("{{cta-title}}", t);

    return ctaHtml

};


View.renderCta = function (data) {
    let divCta = document.querySelector('.cta');
    let ensCta = View.formatCta(data.ctaTitle)

    divCta.innerHTML = ensCta;

}


View.renderCta(cta)


// FORMS

let forms = {
    formsTitle: "Subscribe to our free eBooks, UI Kit’s & Design Articles.",
    formsPara: "Subscribing",
    formsInput: "Your email",
    formsButton: "Sign Up"

}

View.formatForms = function (t, p, i, b) {
    let forms = document.querySelector(".forms");
    let formsHtml = forms.innerHTML;
    formsHtml = formsHtml.replaceAll("{{forms-title}}", t);
    formsHtml = formsHtml.replaceAll("{{forms-para}}", p);
    formsHtml = formsHtml.replaceAll("{{forms-input}}", i);
    formsHtml = formsHtml.replaceAll("{{forms-button}}", b);

    return formsHtml

};


View.renderForms = function (data) {
    let divForms = document.querySelector('.forms');
    let ensForms = View.formatForms(data.formsTitle, data.formsPara, data.formsInput, data.formsButton)

    divForms.innerHTML = ensForms;

}


View.renderForms(forms)


// TESTIMONIALS

let testi = [
    {
        testiUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        testiCom: "Extremely easy to use, helped us develop our Vote for George Washington micro-site extre- mely quickly! We will definitely use it again for other projects",
        testiName: "Timothy Nathan"

    },
    {
        testiUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
        testiCom: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
        testiName: "Austin Campbell"

    },

]




View.formatOneTesti = function (url, com, name) {
    let templateTesti = document.querySelector("#testi_template");
    let testiHtmlTemp = templateTesti.innerHTML;
    testiHtmlTemp = testiHtmlTemp.replaceAll("{{testi-url}}", url);
    testiHtmlTemp = testiHtmlTemp.replaceAll("{{testi-com}}", com);
    testiHtmlTemp = testiHtmlTemp.replaceAll("{{testi-name}}", name);

    return testiHtmlTemp

};

View.formatTesti = function (r) {
    let testi = document.querySelector('.testi');
    let testiHtml = testi.innerHTML;

    let itemsTesti = ""

    for (let tes of r) {
        itemsTesti = itemsTesti + View.formatOneTesti(tes.testiUrl, tes.testiCom, tes.testiName);

    }

    testiHtml = testiHtml.replace('{{testi-liste}}', itemsTesti);

    return testiHtml;
};

View.renderTesti = function (data) {
    let divTesti = document.querySelector('.testi');
    let ensTesti = View.formatTesti(data)

    divTesti.innerHTML = ensTesti;

}


View.renderTesti(testi)


// SHOWCASE

let show = {
    showTitle: "Our Works",
    showPara: "The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit.",

    showCards: [
        {
            showUrl: "https://images.unsplash.com/photo-1672759671661-8bca465c564d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            showCardTitle: "Startup Framework",
            showCardPara: "Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!",
            showTags: ["Ui kit", " Framework", " Landing page", " generator"]

        },
        {
            showUrl: "https://images.unsplash.com/photo-1672776694747-46e589b384e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
            showCardTitle: "Slides",
            showCardPara: "We have created a new product that will help designers create websites for their startups.",
            showTags: ["Ui kit", " colorful", " Landing page", " Slide"]

        },
        {
            showUrl: "https://images.unsplash.com/photo-1672783127999-db9a638155ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            showCardTitle: "Flat UI Pro",
            showCardPara: "Components and blocks are fixed to the common and popular 12 Grid system.!",
            showTags: ["Ui kit", " ux kit", " design", " flat", " web"]

        },
        {
            showUrl: "https://images.unsplash.com/photo-1672836503992-a6e765dce9ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            showCardTitle: "Startup Framework",
            showCardPara: "Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!",
            showTags: ["Ui kit", " Framework", " Landing page", " generator"]

        },
    ]
}



View.formatOneWorkCard = function (url, title, para, t) {
    let card = document.querySelector("#show_card_template");
    let cardHtml = card.innerHTML;
    cardHtml = cardHtml.replaceAll("{{show-url}}", url);
    cardHtml = cardHtml.replaceAll("{{show-card-title}}", title);
    cardHtml = cardHtml.replaceAll("{{show-card-para}}", para);
    cardHtml = cardHtml.replace('{{show-liste-tags}}', t);

    return cardHtml

};


View.formatWorks = function (r) {
    let work = document.querySelector('.work');
    let showHtml = work.innerHTML;

    // Introduction 
    showHtml = showHtml.replaceAll("{{show-title}}", r.showTitle);
    showHtml = showHtml.replaceAll("{{show-para}}", r.showPara);

    let itemsShow = ""

    // Cartes
    for (let wo of r.showCards) {
        itemsShow = itemsShow + View.formatOneWorkCard(wo.showUrl, wo.showCardTitle, wo.showCardPara, wo.showTags);

    }

    showHtml = showHtml.replace('{{show-liste}}', itemsShow);

    return showHtml

};

View.renderWorks = function (data) {
    let divShow = document.querySelector('.work');
    let ensShow = View.formatWorks(data)

    divShow.innerHTML = ensShow;

}


View.renderWorks(show)


// TEAM

let team = {
    urlImg1: [
        { img: "https://images.unsplash.com/photo-1529421308418-eab98863cee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80" },

        { img: "https://images.unsplash.com/photo-1552960504-34e1e1be3f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" }
    ],

    urlImg2: "https://images.unsplash.com/photo-1555421689-43cad7100750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdvcmtlciUyMHN0YXJ0dXB8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",


    sub: "Why Choose Us",
    title: "Make your customers happy by giving services.",
    desc: [
        { para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },

        { para: "A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business." },

    ],
    btn: "Get Started"

}




View.formatOneImg1 = function (url) {
    let template = document.querySelector("#img1_template");
    let chaine = template.innerHTML;
    chaine = chaine.replaceAll("{{url-img1}}", url);

    return chaine

};

View.formatOneDesc = function (p) {
    let template = document.querySelector("#desc_template");
    let chaine = template.innerHTML;
    chaine = chaine.replaceAll("{{para}}", p);

    return chaine

};

View.formatTeam = function (r) {
    let tea = document.querySelector('.team');
    let html = tea.innerHTML;

    let itemsImg = ""
    let itemsDesc = ""

    // Images 1 
    for (let im of r.urlImg1) {
        itemsImg = itemsImg + View.formatOneImg1(im.img);

    }

    html = html.replaceAll('{{liste-photo}}', itemsImg);


    // Image 2 
    html = html.replaceAll("{{url-img2}}", r.urlImg2)
    // Sous-titre
    html = html.replaceAll("{{sub}}", r.sub)
    // Titre
    html = html.replaceAll("{{title}}", r.title)


    // Paragraphes  
    for (let pa of r.desc) {
        itemsDesc = itemsDesc + View.formatOneDesc(pa.para);

    }

    html = html.replace('{{liste-p}}', itemsDesc);

    // Bouton
    html = html.replaceAll("{{button}}", r.btn)

    return html
};


View.renderTeam = function (data) {
    let div = document.querySelector('.team');
    let ens = View.formatTeam(data)

    div.innerHTML = ens;

}


View.renderTeam(team)


// CONTACT

let contact = {
    contactTitle: "Drop Us a Line",
    contactPara: "We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.",

    contactQId: [
        { contactQ: "Your name" },
        { contactQ: "Your message" },

    ],

    contactQ3: "Your message",
    contactBtn: "Let's Talk"

}



View.formatId = function (q) {
    let contactId = document.querySelector("#contact_q_template");
    let idHtml = contactId.innerHTML;
    idHtml = idHtml.replaceAll('{{contact-q}}', q)

    return idHtml

}

View.formatContact = function (t, p, q, q3, b) {
    let contact = document.querySelector(".contact");
    let htmlContact = contact.innerHTML;
    htmlContact = htmlContact.replaceAll("{{contact-title}}", t);
    htmlContact = htmlContact.replaceAll("{{contact-para}}", p);

    let itemsContact = ""

    for (let que of q) {
        itemsContact = itemsContact + View.formatId(que.contactQ)
    }

    htmlContact = htmlContact.replaceAll("{{liste-q}}", itemsContact);

    htmlContact = htmlContact.replaceAll("{{contact-q3}}", q3);
    htmlContact = htmlContact.replaceAll("{{contact-btn}}", b);

    return htmlContact

};


View.renderContact = function (data) {
    let divContact = document.querySelector('.contact');
    let ensContact = View.formatContact(data.contactTitle, data.contactPara, data.contactQId, data.contactQ3, data.contactBtn)

    divContact.innerHTML = ensContact;

}


View.renderContact(contact)


// PRICES

let prices = {
    pricesTitle: "Plans & Pricing",
    pricesPara: "Startup Framework is free forever — you only pay for custom domain hosting or to export your site.",

    pricesCards: [
        {
            pricesCardTitle: "Starter",
            pricesCardPrice: "9.99",
            pricesCardMoney: "$",
            pricesSvg: "./assets/Check_Icon.svg",
            pricesOpt: {
                enable: ["2 GB of space", "14 days of backups", "Social integrations", "Client billinge"],
                disable: ["Remote access", "Custom domain", "24 hours support", "Admin tools", "Collaboration tools", " User management"]

            },
            pricesCardButton: "Get Started"
        },
        {
            pricesCardTitle: "Professional",
            pricesCardPrice: "19.99",
            pricesCardMoney: "$",
            pricesSvg: "./assets/Check_Icon.svg",
            pricesOpt: {
                enable: ["2 GB of space", "14 days of backups", "Social integrations", "Client billinge", "Remote access", "Custom domain", "24 hours support"],
                disable: ["Admin tools", "Collaboration tools", " User management"]

            },
            pricesCardButton: "Get Started"
        },
        {
            pricesCardTitle: "Team",
            pricesCardPrice: "49.99",
            pricesCardMoney: "$",
            pricesSvg: "./assets/Check_Icon.svg",
            pricesOpt: {
                enable: ["2 GB of space", "14 days of backups", "Social integrations", "Client billinge", "Remote access", "Custom domain", "24 hours support", "Admin tools", "Collaboration tools", " User management"],
                disable: [""]

            },
            pricesCardButton: "Get Started"
        },

    ]
}



View.formatPriceCheck = function (s) {
    let check = document.querySelector("#check_template")
    let checkHtml = check.innerHTML
    checkHtml = checkHtml.replaceAll("{{prices-card-svg}}", s)

    return checkHtml
}

View.formatPriceEnable = function (e) {
    let valid = document.querySelector("#enable_template")
    let enable = valid.innerHTML
    enable = enable.replaceAll("{{enable}}", e)

    return enable
}

View.formatPriceDisable = function (d) {
    let invalid = document.querySelector("#disable_template")
    let disable = invalid.innerHTML
    disable = disable.replaceAll("{{disable}}", d)

    return disable
}

View.formatOneCardPrice = function (title, price, money, svg, opt, button) {
    let priceCard = document.querySelector("#price_template");
    let cardHtmlPri = priceCard.innerHTML;
    cardHtmlPri = cardHtmlPri.replaceAll("{{prices-card-title}}", title);
    cardHtmlPri = cardHtmlPri.replaceAll("{{prices-card-price}}", price);
    cardHtmlPri = cardHtmlPri.replaceAll("{{prices-card-money}}", money);

    let itemsOpt = ""
    let itemsCheck = ""

    for (let i = 0; i < opt.enable.length; i++) {
        itemsOpt = itemsOpt + View.formatPriceEnable(opt.enable[i])
    }

    for (let i = 0; i < opt.disable.length; i++) {
        itemsOpt = itemsOpt + View.formatPriceDisable(opt.disable[i])
    }

    cardHtmlPri = cardHtmlPri.replaceAll("{{liste-opt}}", itemsOpt);

    for (let i = 0; i < opt.enable.length; i++) {
        itemsCheck = itemsCheck + View.formatPriceCheck(svg)
    }

    cardHtmlPri = cardHtmlPri.replaceAll("{{liste-check}}", itemsCheck)

    cardHtmlPri = cardHtmlPri.replaceAll("{{prices-button}}", button);

    return cardHtmlPri

};


View.formatPrices = function (r) {
    let prices = document.querySelector('.prices');
    let htmlPri = prices.innerHTML;

    // Introduction 
    htmlPri = htmlPri.replaceAll("{{prices-title}}", r.pricesTitle);
    htmlPri = htmlPri.replaceAll("{{prices-para}}", r.pricesPara);

    let itemsCardPri = ""

    // Cartes
    for (let pri of r.pricesCards) {
        itemsCardPri = itemsCardPri + View.formatOneCardPrice(pri.pricesCardTitle, pri.pricesCardPrice, pri.pricesCardMoney, pri.pricesSvg, pri.pricesOpt, pri.pricesCardButton);

    }

    htmlPri = htmlPri.replace('{{liste-prices}}', itemsCardPri);

    return htmlPri

};

View.renderPrices = function (data) {
    let divPri = document.querySelector('.prices');
    let ensPri = View.formatPrices(data)

    divPri.innerHTML = ensPri;

}


View.renderPrices(prices)


// FOOTER

let footer = [
    {
        footerLabel: "Porfolio",
        footerUrl: ""
    },
    {
        footerLabel: "How it works",
        footerUrl: ""
    },
    {
        footerLabel: "Pricing",
        footerUrl: ""
    },
    {
        footerLabel: "About",
        footerUrl: ""
    },
    {
        footerLabel: "Contacts",
        footerUrl: ""
    },
]




View.formatOneFooterSection = function (name, url) {
    let templateSection = document.querySelector("#section_template");
    let sectionHtml = templateSection.innerHTML;
    sectionHtml = sectionHtml.replaceAll("{{footer-nom}}", name);
    sectionHtml = sectionHtml.replaceAll("{{footer-url}}", url);

    return sectionHtml

};

View.formatFooterMenu = function (r) {
    let templateFooter = document.querySelector('#footer_template');
    let footerHtml = templateFooter.innerHTML;

    let itemsFooter = ""

    for (let sec of r) {
        itemsFooter = itemsFooter + View.formatOneFooterSection(sec.footerLabel, sec.footerUrl);

    }

    footerHtml = footerHtml.replace('{{footer-liste}}', itemsFooter);

    return footerHtml;
};

View.renderFooter = function (data) {
    let divFooter = document.querySelector('.footer');
    let ensFooter = View.formatFooterMenu(data)

    divFooter.innerHTML = ensFooter;

}


View.renderFooter(footer)