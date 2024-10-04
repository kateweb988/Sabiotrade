$(document).ready(function () {

  var arrLang = {
    "ENG": {
      "TITLE": "Scale up your trades, Speed up your earnings!",
      "text1": "Open positions  during the weekend",
      "text2": "profits split",
      "text3": "No time limits",
      "btn": "Get funded now",
      "btn2": "Mentor me",
      "title2": "How to start earning?",
      "sub1": "From registration to earning through your strategy",
      "title3": "Register",
      "text4": "Sign up with SabioTrade and select an evaluation plan that aligns with your unique trading approach",
      "title4": "Evaluate",
      "text5": "Showcase your skills by managing risk and generating profit while meeting the account trading objectives.",
      "title5": "Start Earning",
      "text6": "Receive access to the SabioTrade funded account, allowing you to start earning up to 90% of your profits through your strategy. Request first payouts as soon as you get profits",
      "title6": "Payouts system",
      "text7": "At SabioTrade we focus on rewarding our traders the best   way possible. Not only do we offer instant payouts, but also  the most versatile payment options that best fit traders around the world.",
      "title7": "Become a SabioTrader",
      "title77": "Starter Mentorship",
      "sub2": "Select the tariff type that suits you best and become a SabioTrader",
      "text8": "Standard",
      "balance": "Your balance",
      "profit": "Profit Payout",
      "fee": "One-Time Feet",
      "btn3": "Get funded",
      "text9": "Premium",
      "text10": "Platinum",
      "text11": "Starter Mentorship",
      "btn4": "Learn More",
      "text12": "*Mentorship is not included",
      "text13": "	Not confident in your skills? Complete  the assessment with SabioTrade mentor!",
      "text14": "Boost your trading skills with SabioTrade Mentorship program",
      "text15": "You will be able to:",
      "li1": "Ask trading questions to our mentors;",
      "li2": "Post your planned or closed trades and receive feedback from community members on how to improve trading efficiency;",
      "li3": "View trades of successful traders and learn different trading approaches.",
      "text16": "By becoming a member of our community, you will learn how to:",
      "text17": "Trade with more discipline and avoid emotional trading",
      "text18": "Analyze the strengths and weaknesses of your trading strategy and other traders' systems",
      "title8": "Mentor me",
      "text19": "Correctly calculate trading risks",
      "title8": "Why we’re the leading prop firm",
      "title9": "Easy payouts",
      "title10": "Mobile app",
      "text20": "Instant withdrawal right after making your first profit",
      "text21": "Instant access to your deals  from your phone",
      "title11": "Sabio Academy",
      "text22": "Release your trading genius with our edu materials and pro mentors",
      "title12": "1:30 Leverage",
      "text23": "Scale your account up  to $2,000,000",
      "title13": "250+ assets",
      "text24": "FX, stocks, crypto, commodities, indices, and ETFs — trade what you know best!",
      "title14": "1-step assessment",
      "text25": "No pressure — take as  much time as you need",
      "title15": "Lowest spreads in prop trading",
      "text26": "From 0 pips on EUR/USD during the assessment",
      "title16": "Sabio traders’ voices",
      "text27": "	Reliable firm. I cashed out $1,600 in the first month, plus they paid my assessment fee back in the same transaction.",
      "text28": "Very simple flow with no hiccups: passed the assessment in 3 days, live trading is going well. Would rate @sabiotrade 10/10.",
      "text29": "Multiple assessment attempts at PRO were a great idea! Less stress, higher chances.",
      "text30": "Sabio dashboard after the upgrade is a wow! Now it looks like a single space for everything, I’m loving it ❤️",
      "text31": "Best approach to education I've met in prop trading. They actually prepare you for the assessment️",
      "text32": "This is a really high level mentorship! Webinars with Markus were super helpful, he answered my  burning questions, and his tip has just won me a $1,500 deal. Keep up the good work!",
      "text33": "Finally, a prop firm with an app! Much appreciated",
      "text34": "Thank you for hiring competent people to the support team 🙏 I reached out to them with a payment gateway problem and [Name] resolved it very fast and professionally.",
      "text35": "Very useful knowledge and smart tutors that know their drill",
      "title17": "Frequently Asked Questions",
      "faq1": "Trading rules",
      "faq2": "Accounts",
      "faq3": "General questions",
      "faq4": "What are the rules for SabioTrade Prop-Trading Assessment account?",
      "text36": "SabioTrade Proprietary Trading company establishes the following rules:",
      "li4": "3% Daily Loss Limit (hard breach)",
      "li5": "6% Max Trailing Drawdown (hard breach)",
      "li6": "Flatten on Fridays - all positions closed on Friday at 3:45PM EST (soft breach)",
      "li7": "Must place a trade once every 30 days (hard breach)",
      "text37": "This intends to assess your Risk Management and Trading Strategies.",
      "text38": "What is the difference between a Hard Breach and Soft Breach rule?",
      "li8": "Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Assessment or Funded account.",
      "li9": "Hard breach means that you violated either the Daily Loss Limit or Max Trailing Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the Assessment or have your Funded account taken away.",
      "text39": "How do you calculate the 3% Daily Loss Limit?",
      "text40": "Daily Loss Limit is calculated based on the previous day's end of day (5pm EST)  balance.",
      "text41": "Example: If your prior day's end of day balance was $100,000 you would breach the Daily Loss Limit of 3% should your equity the next day fall to $97,000.",
      "text42": "How do you calculate the 6% Max Trailing Drawdown?",
      "text43": "Maximum Trailing drawdown is the maximum your account can drawdown before you would hard breach your account. When you open the account, your Max Trailing Drawdown is set at 6% of your starting balance. This 6% trails your closed trading balance until you reach 6% profits in your account. Once you have achieved 6% in your account the max trailing locks in at your starting balance, and no longer trails your account.",
      "text44": "Example: If your starting balance is $100,000, you can drawdown to $94,000 before you would violate the Maximum Trailing Drawdown rule. Then for example let's say you take your account to $103,000 in closed balance. This is your new high-water mark, which would mean your new Maximum Trailing Drawdown would be $97,000. Next, let's say you take your account to $106,000 in closed balance, which would be your new high-water mark. At this point your Maximum Trailing Drawdown would be locked in at your starting balance of $100,000. So, regardless of how high your account goes, you would only breach this rule if your account drew back down to $100,000 (note, you can still violate the Daily Loss Limit). For example, if you take your account to $170,000, as long as you do not drawdown more than 3% in any given day, you would only breach if your account equity reaches $100,000.",
      "text45": "Can I hold positions over the weekend?",
      "text46": "Yes. For all Sabio accounts obtained after July 1st 2024, you can keep your positions open during the weekend.",
      "text47": "Is there a breach for inactivity?",
      "text48": "Yes. If you do not place a trade at least once every 30 days on your account on your SabioTraderoom, we will consider you inactive and your account will be breached. You will lose access to your SabioTraderoom for that specific account, but you still can see your trading history and previous statistics on your SabioDashboard.",
      "text49": "How Long does it take to receive my Assessment account?",
      "text50": "Your Assessment account will be ready for trading within minutes of purchasing. Look for the credentials to your SabioTraderoom and SabioDashboard in your inbox immediately after completing your purchase. From the SabioDashboard you can follow up your progress on your Assessment, request your future payouts, and acces our Trading resources, Trading courses, and our Trading platform. From the SabioTraderoom, you can open and close your deals, apply your trading strategies, access our trading tools, check your trading history, etc.",
      "text51": "How long does it take to receive my Funded account?",
      "text52": "Once you have passed your Assessment and have supplied your KYC documents, the account will be issued within 24-48 business hours.",
      "text53": "Once I pass the Assessment am I provided with a demo or live account?",
      "text54": "Once a trader passes the SabioTrade Assessment we provide them with a live account, funded with real money.",
      "text55": "What are the rules for the SabioTrade Funded account?",
      "text56": "The rules for the SabioTrade Funded account are exactly the same as your SabioTrade Assessment account. However, with a Funded account, there is no cap on the profits you can generate.",
      "text57": "What happens if I have a hard breach in my Funded account while in profit?",
      "text58": "If you have profits in your Funded account at the time of a hard breach, you will still receive your portion of those profits.",
      "text59": "For example, if you have a $100,000 account and you grow that account to $110,000. Should you then have a hard breach we would close the account. Of the $10,000 in profits, you would be paid your 80% portion ($8,000).",
      "text60": "How do I withdraw my profits?",
      "text61": "When you are ready to request your payouts, you can place your request on the Profit Share section of your SabioDashboard. Your funded account will be temporarily freeze to withdraw your profit and deduct our profit share. You will receive the funds on your bank account, and regain access to your funded account to continue trading in as little as 24 hours.",
      "text62": "When can I withdraw profits from my Funded account?",
      "text63": "You can withdrawal your profits at any time. At the time of any withdrawal request, we will also withdraw our share of the profits made, as well.",
      "text64": "Important Note: Once you request a withdrawal, your maximum trailing drawdown will be set at your starting balance.",
      "text65": "Do I have to use one of your accounts for the Assessment or can I use my own?",
      "text66": "We have risk management software that is synced with the accounts we create. This allows us to analyze your performance in real time for achievements or rule violations. As such, you must use an account that we provide to you.",
      "text67": "What Countries are accepted?",
      "text68": "All countries, excluding OFAC listed countries, can take part in our program.",
      "text69": "Where do I track the progress of my SabioTrade account?",
      "text70": "Upon purchasing an Assessment or registering for a Free Trial, you will receive access to the SabioDashboard where you can monitor your progress for your Assessment and Funded accounts. SabioDashboard is updated every time we calculate metrics, which occurs roughly every 60 seconds. It is your responsibility to monitor your breach levels.",
      "text71": "What Trading Platform can I trade on when using SabioTrade?",
      "text72": "Our risk management technology is currently integrated with QuadCode trading platform. When using SabioTrade free trial, assessment, or funded accounts, you will be trading on a QuadCode powered trading platform, directly from your SabioDashboard. You will have everything you need for a pleasant and successful trading experience in the same place.",
      "text73": "What is the leverage?",
      "text74": "The maximum available leverage provided by SabioTrade Prop-Trading Firm varies depending on the asset. We have assets with a leverage of up to 1:100, or 1:500 For example, for currency pairs, and in line with sound risk management practices, we provide up to 30:1 leverage. Note that the leverage is directly applied to your trade for simplicity and convenience.",
      "text75": "What are the trading hours?",
      "text76": "Trading hours are set by our broker, QuadCode. SabioTrade does not have any control over the specific trading hours for the products offered by QuadCode.",
      "text77": "Please note that holidays can have an impact on available trading hours.",
      "text78": "Additionally, pursuant to the no holding trades over the weekend rule, we close all open trades at 3:45pm EST on Fridays.",
      "text79": "Do your accounts charge commissions?",
      "text80": "No.",
      "text81": "Can I trade during the News?",
      "text82": "Yes, you can trade during the news",
      "text83": "How will I see the charge on my Statement?",
      "text84": "Charges come across in the name of CODEVIL.",
      "text85": "Risk Warning",
      "text86": "The content on this website is for general information and educational purposes only and is not (and cannot be construed or relied upon as) personal advice nor as an offer to buy/sell/subscribe to any of the financial products mentioned herein. No investment objectives, financial circumstances or needs of any individual have been taken into consideration in the preparation or delivery of the content.",
      "text87": "Financial products are complex, entail risk of loss, may rise and fall, and are impacted by a range of market and economic factors, and you should always obtain professional advice to ensure trading or investing in CFD instruments is suitable for your circumstances, and ensure you obtain, read and understand any applicable terms and conditions.",
      "text88": "Terms & Conditions",
      "text89": "Privacy policy",
      "name": "Complete the assessment  with SabioTrade mentor!",
      "title49": "Start Earning",

    },
    "ENG2": {
      "TITLE": "Scale up your trades, Speed up your earnings!",
      "text1": "Open positions  during the weekend",
      "text2": "profits split",
      "text3": "No time limits",
      "btn": "Get funded now",
      "btn2": "Mentor me",
      "title2": "How to start earning?",
      "sub1": "From registration to earning through your strategy",
      "title3": "Register",
      "text4": "Sign up with SabioTrade and select an evaluation plan that aligns with your unique trading approach",
      "title4": "Evaluate",
      "text5": "Showcase your skills by managing risk and generating profit while meeting the account trading objectives.",
      "title5": "Start Earning",
      "text6": "Receive access to the SabioTrade funded account, allowing you to start earning up to 90% of your profits through your strategy. Request first payouts as soon as you get profits",
      "title6": "Payouts system",
      "text7": "At SabioTrade we focus on rewarding our traders the best   way possible. Not only do we offer instant payouts, but also  the most versatile payment options that best fit traders around the world.",
      "title7": "Become a SabioTrader",
      "title77": "Starter Mentorship",
      "sub2": "Select the tariff type that suits you best and become a SabioTrader",
      "text8": "Standard",
      "balance": "Your balance",
      "profit": "Profit Payout",
      "fee": "One-Time Feet",
      "btn3": "Get funded",
      "text9": "Premium",
      "text10": "Platinum",
      "text11": "Starter Mentorship",
      "btn4": "Learn More",
      "text12": "*Mentorship is not included",
      "text13": "	Not confident in your skills? Complete  the assessment with SabioTrade mentor!",
      "text14": "Boost your trading skills with SabioTrade Mentorship program",
      "text15": "You will be able to:",
      "li1": "Ask trading questions to our mentors;",
      "li2": "Post your planned or closed trades and receive feedback from community members on how to improve trading efficiency;",
      "li3": "View trades of successful traders and learn different trading approaches.",
      "text16": "By becoming a member of our community, you will learn how to:",
      "text17": "Trade with more discipline and avoid emotional trading",
      "text18": "Analyze the strengths and weaknesses of your trading strategy and other traders' systems",
      "title8": "Mentor me",
      "text19": "Correctly calculate trading risks",
      "title8": "Why we’re the leading prop firm",
      "title9": "Easy payouts",
      "title10": "Mobile app",
      "text20": "Instant withdrawal right after making your first profit",
      "text21": "Instant access to your deals  from your phone",
      "title11": "Sabio Academy",
      "text22": "Release your trading genius with our edu materials and pro mentors",
      "title12": "1:30 Leverage",
      "text23": "Scale your account up  to $2,000,000",
      "title13": "250+ assets",
      "text24": "FX, stocks, crypto, commodities, indices, and ETFs — trade what you know best!",
      "title14": "1-step assessment",
      "text25": "No pressure — take as  much time as you need",
      "title15": "Lowest spreads in prop trading",
      "text26": "From 0 pips on EUR/USD during the assessment",
      "title16": "Sabio traders’ voices",
      "text27": "	Reliable firm. I cashed out $1,600 in the first month, plus they paid my assessment fee back in the same transaction.",
      "text28": "Very simple flow with no hiccups: passed the assessment in 3 days, live trading is going well. Would rate @sabiotrade 10/10.",
      "text29": "Multiple assessment attempts at PRO were a great idea! Less stress, higher chances.",
      "text30": "Sabio dashboard after the upgrade is a wow! Now it looks like a single space for everything, I’m loving it ❤️",
      "text31": "Best approach to education I've met in prop trading. They actually prepare you for the assessment️",
      "text32": "This is a really high level mentorship! Webinars with Markus were super helpful, he answered my  burning questions, and his tip has just won me a $1,500 deal. Keep up the good work!",
      "text33": "Finally, a prop firm with an app! Much appreciated",
      "text34": "Thank you for hiring competent people to the support team 🙏 I reached out to them with a payment gateway problem and [Name] resolved it very fast and professionally.",
      "text35": "Very useful knowledge and smart tutors that know their drill",
      "title17": "Frequently Asked Questions",
      "faq1": "Trading rules",
      "faq2": "Accounts",
      "faq3": "General questions",
      "faq4": "What are the rules for SabioTrade Prop-Trading Assessment account?",
      "text36": "SabioTrade Proprietary Trading company establishes the following rules:",
      "li4": "3% Daily Loss Limit (hard breach)",
      "li5": "6% Max Trailing Drawdown (hard breach)",
      "li6": "Flatten on Fridays - all positions closed on Friday at 3:45PM EST (soft breach)",
      "li7": "Must place a trade once every 30 days (hard breach)",
      "text37": "This intends to assess your Risk Management and Trading Strategies.",
      "text38": "What is the difference between a Hard Breach and Soft Breach rule?",
      "li8": "Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Assessment or Funded account.",
      "li9": "Hard breach means that you violated either the Daily Loss Limit or Max Trailing Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the Assessment or have your Funded account taken away.",
      "text39": "How do you calculate the 3% Daily Loss Limit?",
      "text40": "Daily Loss Limit is calculated based on the previous day's end of day (5pm EST)  balance.",
      "text41": "Example: If your prior day's end of day balance was $100,000 you would breach the Daily Loss Limit of 3% should your equity the next day fall to $97,000.",
      "text42": "How do you calculate the 6% Max Trailing Drawdown?",
      "text43": "Maximum Trailing drawdown is the maximum your account can drawdown before you would hard breach your account. When you open the account, your Max Trailing Drawdown is set at 6% of your starting balance. This 6% trails your closed trading balance until you reach 6% profits in your account. Once you have achieved 6% in your account the max trailing locks in at your starting balance, and no longer trails your account.",
      "text44": "Example: If your starting balance is $100,000, you can drawdown to $94,000 before you would violate the Maximum Trailing Drawdown rule. Then for example let's say you take your account to $103,000 in closed balance. This is your new high-water mark, which would mean your new Maximum Trailing Drawdown would be $97,000. Next, let's say you take your account to $106,000 in closed balance, which would be your new high-water mark. At this point your Maximum Trailing Drawdown would be locked in at your starting balance of $100,000. So, regardless of how high your account goes, you would only breach this rule if your account drew back down to $100,000 (note, you can still violate the Daily Loss Limit). For example, if you take your account to $170,000, as long as you do not drawdown more than 3% in any given day, you would only breach if your account equity reaches $100,000.",
      "text45": "Can I hold positions over the weekend?",
      "text46": "Yes. For all Sabio accounts obtained after July 1st 2024, you can keep your positions open during the weekend.",
      "text47": "Is there a breach for inactivity?",
      "text48": "Yes. If you do not place a trade at least once every 30 days on your account on your SabioTraderoom, we will consider you inactive and your account will be breached. You will lose access to your SabioTraderoom for that specific account, but you still can see your trading history and previous statistics on your SabioDashboard.",
      "text49": "How Long does it take to receive my Assessment account?",
      "text50": "Your Assessment account will be ready for trading within minutes of purchasing. Look for the credentials to your SabioTraderoom and SabioDashboard in your inbox immediately after completing your purchase. From the SabioDashboard you can follow up your progress on your Assessment, request your future payouts, and acces our Trading resources, Trading courses, and our Trading platform. From the SabioTraderoom, you can open and close your deals, apply your trading strategies, access our trading tools, check your trading history, etc.",
      "text51": "How long does it take to receive my Funded account?",
      "text52": "Once you have passed your Assessment and have supplied your KYC documents, the account will be issued within 24-48 business hours.",
      "text53": "Once I pass the Assessment am I provided with a demo or live account?",
      "text54": "Once a trader passes the SabioTrade Assessment we provide them with a live account, funded with real money.",
      "text55": "What are the rules for the SabioTrade Funded account?",
      "text56": "The rules for the SabioTrade Funded account are exactly the same as your SabioTrade Assessment account. However, with a Funded account, there is no cap on the profits you can generate.",
      "text57": "What happens if I have a hard breach in my Funded account while in profit?",
      "text58": "If you have profits in your Funded account at the time of a hard breach, you will still receive your portion of those profits.",
      "text59": "For example, if you have a $100,000 account and you grow that account to $110,000. Should you then have a hard breach we would close the account. Of the $10,000 in profits, you would be paid your 80% portion ($8,000).",
      "text60": "How do I withdraw my profits?",
      "text61": "When you are ready to request your payouts, you can place your request on the Profit Share section of your SabioDashboard. Your funded account will be temporarily freeze to withdraw your profit and deduct our profit share. You will receive the funds on your bank account, and regain access to your funded account to continue trading in as little as 24 hours.",
      "text62": "When can I withdraw profits from my Funded account?",
      "text63": "You can withdrawal your profits at any time. At the time of any withdrawal request, we will also withdraw our share of the profits made, as well.",
      "text64": "Important Note: Once you request a withdrawal, your maximum trailing drawdown will be set at your starting balance.",
      "text65": "Do I have to use one of your accounts for the Assessment or can I use my own?",
      "text66": "We have risk management software that is synced with the accounts we create. This allows us to analyze your performance in real time for achievements or rule violations. As such, you must use an account that we provide to you.",
      "text67": "What Countries are accepted?",
      "text68": "All countries, excluding OFAC listed countries, can take part in our program.",
      "text69": "Where do I track the progress of my SabioTrade account?",
      "text70": "Upon purchasing an Assessment or registering for a Free Trial, you will receive access to the SabioDashboard where you can monitor your progress for your Assessment and Funded accounts. SabioDashboard is updated every time we calculate metrics, which occurs roughly every 60 seconds. It is your responsibility to monitor your breach levels.",
      "text71": "What Trading Platform can I trade on when using SabioTrade?",
      "text72": "Our risk management technology is currently integrated with QuadCode trading platform. When using SabioTrade free trial, assessment, or funded accounts, you will be trading on a QuadCode powered trading platform, directly from your SabioDashboard. You will have everything you need for a pleasant and successful trading experience in the same place.",
      "text73": "What is the leverage?",
      "text74": "The maximum available leverage provided by SabioTrade Prop-Trading Firm varies depending on the asset. We have assets with a leverage of up to 1:100, or 1:500 For example, for currency pairs, and in line with sound risk management practices, we provide up to 30:1 leverage. Note that the leverage is directly applied to your trade for simplicity and convenience.",
      "text75": "What are the trading hours?",
      "text76": "Trading hours are set by our broker, QuadCode. SabioTrade does not have any control over the specific trading hours for the products offered by QuadCode.",
      "text77": "Please note that holidays can have an impact on available trading hours.",
      "text78": "Additionally, pursuant to the no holding trades over the weekend rule, we close all open trades at 3:45pm EST on Fridays.",
      "text79": "Do your accounts charge commissions?",
      "text80": "No.",
      "text81": "Can I trade during the News?",
      "text82": "Yes, you can trade during the news",
      "text83": "How will I see the charge on my Statement?",
      "text84": "Charges come across in the name of CODEVIL.",
      "text85": "Risk Warning",
      "text86": "The content on this website is for general information and educational purposes only and is not (and cannot be construed or relied upon as) personal advice nor as an offer to buy/sell/subscribe to any of the financial products mentioned herein. No investment objectives, financial circumstances or needs of any individual have been taken into consideration in the preparation or delivery of the content.",
      "text87": "Financial products are complex, entail risk of loss, may rise and fall, and are impacted by a range of market and economic factors, and you should always obtain professional advice to ensure trading or investing in CFD instruments is suitable for your circumstances, and ensure you obtain, read and understand any applicable terms and conditions.",
      "text88": "Terms & Conditions",
      "text89": "Privacy policy",
      "name": "Complete the assessment  with SabioTrade mentor!",
      "title49": "Start Earning",

    },
    "ESP": {
      "TITLE": "Escala tus operaciones, ¡Acelera tus ganancias!",
      "text1": "Posiciones abiertas durante el fin de semana",
      "text2": "de las ganancias",
      "text3": "Sin limites de tiempo",
      "btn": "Obten financiamiento ahora",
      "btn2": "Mentoria",
      "title2": "¿Como empezar a ganar?",
      "sub1": "Desde el registro hasta ganar con tu estrategia",
      "title3": "¿Registrate",
      "text4": "Inscribete en SabioTrade y selecciona un plan de evaluacion que se alinee con tu enfoque único de trading.",
      "title4": "Evalúa",
      "text5": "Demuestra tus habilidades gestionando el riesgo y generando ganancias mientras cumples con los objetivos de la cuenta de trading.",
      "title5": "Comienza a ganar",
      "text6": "Recibe acceso a la cuenta financiada de SabioTrade, lo que te permitira ganar hasta el 90% de tus ganancias con tu estrategia. Solicita los primeros pagos tan pronto como obtengas ganancias.",
      "title6": "Sistema de pagos",
      "text7": "En SabioTrade nos enfocamos en recompensar a nuestros traders de la mejor manera posible. No solo ofrecemos pagos cada 7 dias, sino tambien las opciones de pago mas versatiles que mejor se adaptan  a los traders de todo el mundo.",
      "title7": "Conviertete en SabioTrader",
      "sub2": "Selecciona el tipo de tarifa que mas te convenga y conviertete en SabioTrader",
      "text8": "Estandar",
      "balance": "Tu saldo",
      "profit": "Pago de ganancias",
      "fee": "Tarifa única",
      "btn3": "Obten financiamiento",
      "text9": "Premium",
      "text10": "Platino",
      "text11": "Inicio MENTORiA",
      "btn4": "Mas informacion",
      "text12": "*La tutoria no esta incluida",
      "text13": "	¿No tienes confianza en tus habilidades?   ¡Completa la evaluacion con un mentor de SabioTrade!",
      "text14": "Mejora tus habilidades de trading con el programa de mentoria de SabioTrade",
      "text15": "Podras:",
      "li1": "hacer preguntas de trading a nuestros mentores;",
      "li2": "publicar tus operaciones planificadas o cerradas y recibir comentarios de los miembros de la comunidad sobre como mejorar la eficiencia de tus operaciones;",
      "li3": "ver las operaciones de traders exitosos y aprender diferentes enfoques de trading.",
      "text16": "Al convertirte en miembro  de nuestra comunidad, aprenderas a:",
      "text17": "operar con mas disciplina y evitar el trading emocional;",
      "text18": "analizar las fortalezas y debilidades de tu estrategia de trading y los sistemas de otros traders.",
      "title8": "Mentoria",
      "text19": "calcular correctamente los riesgos de trading;",
      "title8": "Por que somos la firma prop lider",
      "title9": "Pagos faciles",
      "title10": "Aplicacion movil",
      "text20": "Retiro instantaneo justo despues  de obtener tu primera ganancia",
      "text21": "Acceso instantaneo a tus  operaciones desde tu telefono",
      "title11": "Academia Sabio",
      "text22": "Libera tu genio del trading con nuestros  materiales educativos y mentores profesionales",
      "title12": "Apalancamiento 1:30",
      "text23": "Escala tu cuenta  hasta $2,000,000",
      "title13": "250+ activos",
      "text24": "FX, acciones, criptomonedas, materias primas, indices y ETFs — ¡opera lo que mejor conozcas!",
      "title14": "Evaluacion en un paso",
      "text25": "Sin presion: toma todo el  tiempo que necesites",
      "title15": "Los spreads mas bajos en prop trading",
      "text26": "Desde 0 pips en EUR/USD durante la evaluacion",
      "title16": "Voces de los traders de Sabio",
      "text27": "Firma confiable. Retire $1,600 en el primer mes, ademas me devolvieron la tarifa de evaluacion en la misma transaccion.",
      "text28": "Flujo muy simple sin problemas: pase la evaluacion en 3 dias, el trading en vivo va bien. Calificaria a @sabiotrade con 10/10.",
      "text29": "¡Múltiples intentos de evaluacion en PRO fueron una gran idea! Menos estres, mayores oportunidades.",
      "text30": "El tablero de Sabio despues de la actualizacion es impresionante. Ahora parece un espacio único para todo, me encanta ❤️",
      "text31": "El mejor enfoque educativo que he encontrado en prop trading. Realmente te preparan para la evaluacion.",
      "text32": "¡Esta mentoria es de muy alto nivel! Los seminarios web con Markus fueron muy útiles, respondio a mis preguntas urgentes, y su consejo me acaba de ganar un trato de $1,500. ¡Sigan con el buen trabajo!",
      "text33": "Finalmente, ¡una firma prop con una aplicacion! Muy apreciado.",
      "text34": "Gracias por contratar a personas competentes en el equipo de soporte 🙏 Me comunique con ellos por un problema con la pasarela de pago y [Nombre] lo resolvio muy rapido y profesionalmente.",
      "text35": "Conocimientos muy útiles y tutores inteligentes que saben lo que hacen.",
      "title17": "Preguntas Frecuente",
      "faq1": "Reglas de trading",
      "faq2": "Cuentas",
      "faq3": "Preguntas generales",
      "faq4": "	¿Cuales son las reglas para la cuenta de evaluacion de Prop-Trading de SabioTrade?",
      "text36": "La sociedad de Comercio por Cuenta SabioTrade establece las siguientes reglas:",
      "li4": "Limite de perdida diaria del 3% (incumplimiento grave)",
      "li5": "6% de reduccion maxima final (violacion grave)",
      "li6": "Aplanar los viernes: todas las posiciones se cerraron el viernes a las 3:45  p.m. EST (incumplimiento leve)",
      "li7": "Debe realizar una operacion una vez cada 30 dias (infraccion grave)",
      "text37": "Esto tiene como objetivo evaluar su gestion de riesgos y estrategias comerciales.",
      "text38": "¿Cual es la diferencia entre una regla de infraccion grave y de infraccion leve?",
      "li8": "Una infraccion leve significa que cerraremos todas las operaciones que hayan violado la regla. Sin embargo, puede continuar operando en su cuenta de evaluacion o financiada.",
      "li9": "Incumplimiento grave significa que usted violo el limite de perdida diaria o el limite maximo de perdida. Regla de reduccion final. Ambas reglas constituyen una grave violacion. En el caso de que usted Si tiene una infraccion grave, no aprobara la evaluacion o su cuenta financiada quitado.",
      "title77": "Mentoria",
      "text39": "¿Como se calcula el limite de perdida diaria del 3%?",
      "text40": "El limite de perdida diaria se calcula según el final del dia anterior (5:00 p.  m. EST) balance.",
      "text41": "Ejemplo: si el saldo al final del dia del dia anterior era de $100 000, incumpliria el limite de perdida diaria del 3 % si su capital al dia siguiente cayera a $97 000.",
      "text42": "¿Como se calcula la reduccion maxima del 6 %?",
      "text43": "La reduccion maxima final es el maximo que su cuenta puede reducir antes de que usted infrinja su cuenta. Cuando abre la cuenta, su Max Trailing Drawdown se establece en el 6% de su saldo inicial. Este 6% sigue su saldo comercial cerrado hasta que alcance una ganancia del 6% en su cuenta. Una vez que haya alcanzado el 6% en su cuenta, el seguimiento maximo se fija en su saldo inicial y ya no sigue su cuenta.",
      "text44": "Ejemplo: si su saldo inicial es de $100 000, puede retirar su saldo a $94 000 antes de violar la regla de retiro maximo final. Entonces, por ejemplo, digamos que lleva su cuenta a $103,000 en saldo cerrado. Esta es su nueva marca maxima, lo que significaria que su nueva reduccion maxima final seria de $ 97 000. A continuacion, digamos que lleva su cuenta a $106,000 en saldo cerrado, que seria su nueva marca maxima. En este punto, su reduccion maxima final quedaria fijada en su saldo inicial de $100,000. Por lo tanto, independientemente de que tan alto llegue su cuenta, solo infringiria esta regla si su cuenta volviera a bajar a $100,000 (tenga en cuenta que aún puede violar el limite de perdida diaria). Por ejemplo, si lleva su cuenta a $170,000, siempre y cuando no retire mas del 3% en un dia determinado, solo incumplira si el capital de su cuenta alcanza $100,000.",
      "text45": "¿Puedo ocupar puestos durante el fin de semana?",
      "text46": "Si. Para todas las cuentas Sabio obtenidas despues del 1 de julio de 2024, puedes mantener tus posiciones abiertas durante el fin de semana.",
      "text47": "Existe violaçao por inatividade?",
      "text48": "Si. Si no realiza una operacion al menos una vez cada 30 dias en su cuenta en SabioTraderoom, lo consideraremos inactivo y su cuenta sera violada. Perdera el acceso a su SabioTraderoom para esa cuenta especifica, pero aún podra ver su historial de operaciones y estadisticas anteriores en su SabioDashboard.",
      "text49": "¿Cuanto tiempo lleva recibir mi cuenta de evaluacion?",
      "text50": "Su cuenta de evaluacion estara lista para operar a los pocos minutos de realizar la compra. Busque las credenciales de su SabioTraderoom y SabioDashboard en su bandeja de entrada inmediatamente despues de completar su compra. Desde SabioDashboard puede seguir el progreso de su Evaluacion, solicitar sus pagos futuros y acceder a nuestros recursos de Trading, cursos de Trading y nuestra plataforma de Trading. Desde SabioTraderoom, puede abrir y cerrar sus operaciones, aplicar sus estrategias comerciales, acceder a nuestras herramientas comerciales, consultar su historial comercial, etc.",
      "text51": "¿Cuanto tiempo lleva recibir mi cuenta financiada?",
      "text52": "Una vez que haya aprobado su evaluacion y haya proporcionado sus documentos KYC, la cuenta se emitira dentro de 24 a 48 horas habiles.",
      "text53": "Una vez que pase la evaluacion, ¿se me proporcionara una cuenta demo o real?",
      "text54": "Una vez que un operador pasa la evaluacion de SabioTrade, le proporcionamos una  cuenta real, financiada con dinero real.",
      "text55": "¿Cuales son las reglas para la cuenta financiada de SabioTrade?",
      "text56": "Las reglas para la cuenta financiada de SabioTrade son exactamente las mismas que las de su cuenta de evaluacion de SabioTrade. Sin embargo, con una cuenta financiada, no hay limite en las ganancias que puedes generar.",
      "text57": "¿Que sucede si tengo una infraccion grave en mi cuenta financiada mientras tengo ganancias?",
      "text58": "Si tiene ganancias en su cuenta financiada en el momento de una infraccion grave, aún recibira su parte de esas ganancias.",
      "text59": "Por ejemplo, si tiene una cuenta de $100 000 y la aumenta a $110 000. Si luego tuviera una infraccion grave, cerrariamos la cuenta. De los $10,000 en ganancias, a usted se le pagara su porcion del 80% ($8,000).",
      "text60": "¿Como retiro mis ganancias?",
      "text61": "Cuando este listo para solicitar sus pagos, puede realizar su solicitud en la seccion Participacion en las ganancias de su SabioDashboard. Su cuenta financiada se congelara temporalmente para retirar sus ganancias y deducir nuestra participacion en las ganancias. Recibira los fondos en su cuenta bancaria y recuperara el acceso a su cuenta financiada para continuar operando en tan solo 24 horas.",
      "text62": "¿Cuando puedo retirar ganancias de mi cuenta financiada?",
      "text63": "Puedes retirar tus ganancias en cualquier momento. En el momento de cualquier solicitud de retiro, tambien retiraremos nuestra parte de las ganancias obtenidas.",
      "text64": "Nota importante: una vez que solicite un retiro, su retiro maximo final se establecera en su saldo inicial.",
      "text65": "¿Tengo que usar una de sus cuentas para la Evaluacion o puedo usar la mia propia?",
      "text66": "Contamos con un software de gestion de riesgos que se sincroniza con las cuentas que creamos. Esto nos permite analizar su desempeño en tiempo real en busca de logros o violaciones de reglas. Como tal, debe utilizar una cuenta que le proporcionamos.",
      "text67": "¿Que paises se aceptan?",
      "text68": "Todos los paises, excepto los paises incluidos en la lista de la OFAC, pueden participar en nuestro programa.",
      "text69": "¿Donde puedo seguir el progreso de mi cuenta SabioTrade?",
      "text70": "Al comprar una Evaluacion o registrarse para una Prueba gratuita, recibira acceso al SabioDashboard donde podra monitorear su progreso para sus cuentas de Evaluacion y Financiadas. SabioDashboard se actualiza cada vez que calculamos metricas, lo que ocurre aproximadamente cada 60 segundos. Es su responsabilidad monitorear sus niveles de incumplimiento.",
      "text71": "¿En que plataforma de negociacion puedo operar cuando uso SabioTrade?",
      "text72": "Nuestra tecnologia de gestion de riesgos esta actualmente integrada con la plataforma comercial QuadCode. Cuando utilice cuentas de prueba, evaluacion o financiadas gratuitas de SabioTrade, operara en una plataforma comercial impulsada por QuadCode, directamente desde su SabioDashboard. Tendra todo lo que necesita para una experiencia comercial placentera y exitosa en el mismo lugar.",
      "text73": "¿Cual es el apalancamiento?",
      "text74": "El apalancamiento maximo disponible proporcionado por SabioTrade Prop-Trading Firm varia según el activo. Tenemos activos con un apalancamiento de hasta 1:100 o 1:500. Por ejemplo, para pares de divisas, y de acuerdo con practicas solidas de gestion de riesgos, ofrecemos un apalancamiento de hasta 30:1. Tenga en cuenta que el apalancamiento se aplica directamente a su operacion por simplicidad y conveniencia.",
      "text75": "¿Cuales son los horarios de negociacion?",
      "text76": "El horario de operaciones lo establece nuestro corredor, QuadCode. SabioTrade no tiene ningún control sobre los horarios de negociacion especificos de los productos ofrecidos por QuadCode.",
      "text77": "Tenga en cuenta que los dias festivos pueden tener un impacto en el horario comercial disponible.",
      "text78": "Ademas, de conformidad con la regla de no mantener operaciones durante el fin de semana, cerramos todas las operaciones abiertas los viernes a las 3:45 p.m. EST.",
      "text79": "¿Sus cuentas cobran comisiones?",
      "text80": "No.",
      "text81": "¿Puedo operar durante las noticias?",
      "text82": "Si, puedes operar durante las noticias.",
      "text83": "¿Como vere el cargo en mi Estado de Cuenta?",
      "text84": "Los cargos aparecen a nombre de CODEVIL.",
      "text85": "Advertencia de riesgo",
      "text86": "El contenido de este sitio web tiene fines educativos y de informacion general únicamente y no es (y no puede interpretarse ni considerarse como) un consejo personal ni una oferta para comprar/vender/suscribirse a ninguno de los productos financieros mencionados en este documento. No se han tenido en cuenta objetivos de inversion, circunstancias financieras o necesidades de ningún individuo en la preparacion o entrega del contenido.",
      "text87": "Los productos financieros son complejos, conllevan riesgo de perdida, pueden subir y bajar y se ven afectados por una variedad de factores economicos y de mercado, y siempre debe obtener asesoramiento profesional para asegurarse de que operar o invertir en instrumentos CFD sea adecuado para sus circunstancias y garantizar usted obtiene, lee y comprende los terminos y condiciones aplicables.",
      "text88": "Terminos y condiciones",
      "text89": "Politica de privacidad",
      "name": "¡Completa la evaluacion con el mentor de SabioTrade!",
      "title49": "Comienza a ganar",





    },
    "POR": {
      "TITLE": "Escale suas negociações, Acelere seus ganhos!",
      "text1": "Posições abertas durante o fim de semana",
      "text2": "de divisao de lucros",
      "text3": "Sem limites de tempo",
      "btn": "Obtenha financiamento agora",
      "btn2": "Mentor me",
      "title2": "Como começar a ganhar?",
      "sub1": "Do registro ao ganho atraves da sua estrategia",
      "title3": "Registrar",
      "text4": "Cadastre-se no SabioTrade e selecione um plano de avaliaçao que se alinhe com sua abordagem única de trading.",
      "title4": "Avaliar",
      "text5": "Mostre suas habilidades gerenciando riscos e gerando lucros enquanto atinge os objetivos de trading da conta.",
      "title5": "Comece a ganhar",
      "text6": "Receba acesso a conta financiada do SabioTrade, permitindo que voce comece a ganhar ate 90% de seus lucros atraves da sua estrategia. Solicite os primeiros pagamentos assim que obter lucros.",
      "title6": "	Sistema de pagamentos",
      "text7": "No SabioTrade, focamos em recompensar nossos traders da melhor maneira possivel. Nao apenas oferecemos pagamentos em 7 dias, mas tambem as opções de pagamento mais versateis que melhor atendem traders em todo o mundo.",
      "title7": "Torne-se um SabioTrader",
      "sub2": "Selecione o tipo de tarifa que melhor lhe convier e torne-se um SabioTrader",
      "text8": "Standard",
      "balance": "Seu saldo",
      "profit": "Pagamento de Lucros",
      "fee": "Taxa Única",
      "btn3": "Obtenha financiamento",
      "text9": "Premium",
      "text10": "Platinum",
      "text11": "Starter MENTORIA",
      "btn4": "Saber mais",
      "text12": "*Mentoria nao incluida",
      "text13": "Nao confiante em suas habilidades?  Complete a avaliaçao com um mentor do SabioTrade!",
      "text14": "Aprimore suas habilidades de trading com o programa de Mentoria do SabioTrade",
      "text15": "Voce podera:",
      "li1": "fazer perguntas sobre trading aos nossos mentores;",
      "li2": "publicar suas negociações planejadas ou fechadas e receber feedback dos membros da comunidade sobre como melhorar a eficiencia do trading;",
      "li3": "visualizar negociações de traders bem-sucedidos e aprender diferentes abordagens de trading.",
      "text16": "Ao se tornar um membro de nossa   comunidade, voce aprendera a:",
      "text17": "negociar com mais disciplina e evitar negociações emocionais;",
      "text18": "analisar os pontos fortes e fracos de sua estrategia de negociaçao e dos sistemas de outros traders.",
      "title8": "Mentor me",
      "text19": "calcular corretamente os riscos de negociaçao;",
      "title8": "Por que somos a principal empresa de prop trading",
      "title9": "Pagamentos faceis",
      "title10": "Aplicativo movel",
      "text20": "Retirada instantânea logo apos  obter seu primeiro lucro",
      "text21": "Acesso instantâneo as suas  negociações a partir do seu celular",
      "title11": "Academia Sabio",
      "text22": "Liberte seu genio do trading com  nossos materiais educacionais e mentores  profissionaisr",
      "title12": "Alavancagem de 1:30",
      "text23": "Escale sua conta  ate $2,000,000",
      "title13": "250+ ativos",
      "text24": "FX, ações, criptomoedas, commodities, indices e ETFs — negocie o que voce conhece melhor!",
      "title14": "Avaliaçao de 1 etapa",
      "text25": "Sem pressao — leve  o tempo que precisar",
      "title15": "Menores spreads no prop trading",
      "text26": "A partir de 0 pips no EUR/USD durante a avaliaçao",
      "title16": "Vozes dos traders da SabioPor que somos a principal empresa de prop trading",
      "text27": "Empresa confiavel. Saquei $1,600 no primeiro mes, alem de terem devolvido minha taxa de avaliaçao na mesma transaçao.",
      "text28": "Fluxo muito simples sem complicações: passei na avaliaçao em 3 dias, a negociaçao ao vivo esta indo bem. Avaliaria @sabiotrade 10/10.",
      "text29": "Varias tentativas de avaliaçao no PRO foram uma otima ideia! Menos estresse, maiores chances.",
      "text30": "O painel do Sabio apos a atualizaçao e incrivel! Agora parece um espaço único para tudo, estou  amando ❤️",
      "text31": "	Melhor abordagem de educaçao que encontrei no prop trading. Eles realmente te preparam para a avaliaçao",
      "text32": "Esta mentoria e realmente de alto nivel! Os webinars com Markus foram super úteis, ele respondeu minhas perguntas urgentes, e sua dica acabou de me render um negocio de $1,500. Continuem com o bom trabalho!",
      "text33": "Finalmente, uma empresa de prop trading com aplicativo! Muito apreciado.",
      "text34": "Obrigado por contratar pessoas competentes para a equipe de suporte 🙏 Entrei em contato com eles sobre um problema no gateway de pagamento e [Nome] resolveu muito rapido e profissionalmente.",
      "text35": "Conhecimento muito útil e tutores inteligentes que conhecem o assunto",
      "title17": "Perguntas Frequentes",
      "faq1": "Regras de Trading",
      "faq2": "Contas",
      "faq3": "Perguntas Gerais",
      "faq4": "Quais sao as regras para a conta SabioTrade Prop-Trading Assessment?",
      "text36": "A empresa SabioTrade Proprietary Trading estabelece as seguintes regras:",
      "li4": "Limite de perda diaria de 3% (violaçao grave)",
      "li5": "Rebaixamento maximo de 6% (violaçao grave)",
      "li6": "Flatten as sextas-feiras - todas as posições fechadas na sexta-feira as 15h45  EST (violaçao suave)",
      "li7": "Deve fazer uma negociaçao uma vez a cada 30 dias (violaçao grave)",
      "text37": "O objetivo e avaliar suas estrategias de gerenciamento de risco e negociaçao.",
      "text38": "Qual e a diferença entre uma regra de violaçao grave e violaçao suave?",
      "li8": "Violaçao leve significa que fecharemos todas as negociações que violaram a regra. No entanto, voce pode continuar negociando em sua conta de Avaliaçao ou  Financiada.",
      "li9": "Violaçao grave significa que voce violou o limite de perda diaria ou o limite maximo Regra de rebaixamento final. Ambas as regras constituem uma violaçao grave.  Caso voce tiver uma violaçao grave, voce sera reprovado na avaliaçao ou tera sua conta financiada levado embora.",
      "title77": "Mentor me",
      "text39": "Como voce calcula o limite de perda diaria de 3%?",
      "text40": "O Limite de Perda Diaria e calculado com base no final do dia anterior (17h EST) equilibrio.",
      "text41": "Exemplo: Se o saldo de final do dia anterior fosse de US$ 100.000, voce violaria o Limite de Perda Diaria de 3% caso seu patrimônio no dia seguinte caisse para US$ 97.000.",
      "text42": "Como voce calcula o Trailing Drawdown maximo de 6%?",
      "text43": "O rebaixamento maximo final e o maximo que sua conta pode sacar antes de voce violar sua conta. Quando voce abre a conta, seu Max Trailing Drawdown e definido em 6% do seu saldo inicial. Esses 6% acompanham seu saldo comercial fechado ate atingir lucros de 6% em sua conta. Depois de atingir 6% em sua conta, o trailing maximo e fixado em seu saldo inicial e nao rastreia mais sua conta.",
      "text44": "	Exemplo: Se o seu saldo inicial for de US$ 100.000, voce podera sacar para US$ 94.000 antes de violar a regra de Maximum Trailing Drawdown. Entao, por exemplo, digamos que voce aumente sua conta para $ 103.000 em saldo fechado. Este e o seu novo limite maximo, o que significaria que seu novo Trailing Drawdown maximo seria de US$ 97.000. Em seguida, digamos que voce aumente sua conta para $ 106.000 em saldo fechado, que seria seu novo limite maximo. Neste ponto, seu Trailing Drawdown maximo estaria bloqueado em seu saldo inicial de US$ 100.000. Portanto, independentemente do valor da sua conta, voce so violaria essa regra se sua conta voltasse para US$ 100.000 (observe que voce ainda pode violar o Limite de Perda Diaria). Por exemplo, se voce elevar sua conta para US$ 170.000, desde que nao sace mais de 3% em um determinado dia, voce so violara se o patrimônio de sua conta atingir US$ 100.000.",
      "text45": "Posso ocupar cargos no fim de semana?",
      "text46": "Sim. Para todas as contas Sabio obtidas apos 1º de julho de 2024, voce podera manter suas posições abertas durante o fim de semana.",
      "text47": "Existe violaçao por inatividade?",
      "text48": "Sim. Se voce nao realizar uma negociaçao pelo menos uma vez a cada 30 dias em sua conta no SabioTraderoom, consideraremos voce inativo e sua conta sera violada. Voce perdera o acesso ao SabioTraderoom dessa conta especifica, mas ainda podera ver seu historico de negociaçao e estatisticas anteriores no seu SabioDashboard.",
      "text49": "Quanto tempo leva para receber minha conta de avaliaçao?",
      "text50": "Sua conta de avaliaçao estara pronta para negociaçao minutos apos a compra. Procure as credenciais do seu SabioTraderoom e SabioDashboard em sua caixa de entrada imediatamente apos concluir sua compra. No SabioDashboard voce pode acompanhar o progresso da sua Avaliaçao, solicitar pagamentos futuros e acessar nossos recursos de Trading, cursos de Trading e nossa plataforma de Trading. Na SabioTraderoom voce pode abrir e fechar suas negociações, aplicar suas estrategias de negociaçao, acessar nossas ferramentas de negociaçao, verificar seu historico de negociaçao, etc.",
      "text51": "Quanto tempo leva para receber minha conta financiada?",
      "text52": "Depois de passar na avaliaçao e fornecer seus documentos KYC, a conta sera emitida dentro de 24 a 48 horas úteis.",
      "text53": "Depois de passar na avaliaçao, receberei uma conta demo ou real?",
      "text54": "Depois que um trader passa na Avaliaçao SabioTrade, fornecemos a ele uma conta real, financiada com dinheiro real.",
      "text55": "Quais sao as regras para a conta financiada pela SabioTrade?",
      "text56": "As regras para a conta financiada pela SabioTrade sao exatamente as mesmas da sua conta de avaliaçao SabioTrade. No entanto, com uma conta financiada, nao ha limite para os lucros que voce pode gerar.",
      "text57": "O que acontece se eu tiver uma violaçao grave na minha conta financiada enquanto estiver com lucro?",
      "text58": "Se voce tiver lucros em sua conta financiada no momento de uma violaçao grave, ainda recebera sua parte desses lucros.",
      "text59": "Por exemplo, se voce tiver uma conta de US$ 100.000 e aumentar essa conta para US$ 110.000. Se voce tiver uma violaçao grave, fecharemos a conta. Dos $ 10.000 em lucros, voce recebera sua parcela de 80% ($ 8.000).",
      "text60": "Como faço para retirar meus lucros?",
      "text61": "Quando estiver pronto para solicitar seus pagamentos, voce pode fazer sua solicitaçao na seçao Participaçao nos Lucros do seu SabioDashboard. Sua conta financiada sera temporariamente congelada para retirar seu lucro e deduzir nossa participaçao nos lucros. Voce recebera os fundos em sua conta bancaria e recuperara o acesso a sua conta financiada para continuar negociando em ate 24 horas.",
      "text62": "Quando posso retirar lucros da minha conta financiada?",
      "text63": "Voce pode retirar seus lucros a qualquer momento. No momento de qualquer solicitaçao de saque, tambem retiraremos nossa parte dos lucros obtidos.",
      "text64": "Nota importante: Depois de solicitar um saque, o saque final maximo sera definido no seu saldo inicial.",
      "text65": "Devo usar uma de suas contas para a Avaliaçao ou posso usar a minha propria?",
      "text66": "Temos um software de gerenciamento de risco sincronizado com as contas que criamos. Isso nos permite analisar seu desempenho em tempo real em busca de conquistas ou violações de regras. Como tal, voce deve usar uma conta que fornecemos a voce.",
      "text67": "Quais paises sao aceitos?",
      "text68": "Todos os paises, excluindo os paises listados na OFAC, podem participar do nosso programa.",
      "text69": "Onde posso acompanhar o progresso da minha conta SabioTrade?",
      "text70": "Ao adquirir uma Avaliaçao ou registrar-se para uma Avaliaçao Gratuita, voce recebera acesso ao SabioDashboard, onde podera monitorar o progresso de suas contas de Avaliaçao e Financiadas. O SabioDashboard e atualizado sempre que calculamos as metricas, o que ocorre aproximadamente a cada 60 segundos. e sua responsabilidade monitorar seus niveis de violaçao.",
      "text71": "Em qual plataforma de negociaçao posso negociar ao usar o SabioTrade?",
      "text72": "Nossa tecnologia de gerenciamento de risco esta atualmente integrada a plataforma de negociaçao QuadCode. Ao usar contas de avaliaçao, avaliaçao ou financiadas gratuitas do SabioTrade, voce estara negociando em uma plataforma de negociaçao com tecnologia QuadCode, diretamente de seu SabioDashboard. Voce tera tudo o que precisa para uma experiencia de negociaçao agradavel e bem-sucedida no mesmo lugar.",
      "text73": "Qual e a alavancagem?",
      "text74": "A alavancagem maxima disponivel fornecida pela SabioTrade Prop-Trading Firm varia dependendo do ativo. Temos ativos com alavancagem de ate 1:100 ou 1:500. Por exemplo, para pares de moedas, e em linha com praticas solidas de gestao de risco, oferecemos alavancagem de ate 30:1. Observe que a alavancagem e aplicada diretamente a sua negociaçao para maior simplicidade e conveniencia.",
      "text75": "Quais sao os horarios de negociaçao?",
      "text76": "O horario de negociaçao e definido pela nossa corretora, QuadCode. A SabioTrade nao tem qualquer controle sobre os horarios especificos de negociaçao dos produtos oferecidos pela QuadCode.",
      "text77": "Observe que os feriados podem afetar o horario de negociaçao disponivel.",
      "text78": "Alem disso, de acordo com a regra de nao realizar negociações durante o fim de semana, fechamos todas as negociações abertas as 15h45 EST as sextas-feiras.",
      "text79": "Suas contas cobram comissões?",
      "text80": "Nao.",
      "text81": "Posso negociar durante as Noticias?",
      "text82": "Sim, voce pode negociar durante as noticias",
      "text83": "Como verei a cobrança no meu Extrato?",
      "text84": "As cobranças sao feitas em nome da CODEVIL.",
      "text85": "Aviso de risco",
      "text86": "O conteúdo deste site e apenas para fins informativos e educacionais gerais e nao e (e nao pode ser interpretado ou considerado como) conselho pessoal nem como uma oferta de compra/venda/assinatura de qualquer um dos produtos financeiros aqui mencionados. Nenhum objetivo de investimento, situaçao financeira ou necessidade de qualquer individuo foi levado em consideraçao na preparaçao ou entrega do conteúdo.",
      "text87": "Os produtos financeiros sao complexos, implicam risco de perda, podem subir e descer e sao afetados por uma serie de fatores de mercado e economicos, e deve sempre obter aconselhamento profissional para garantir que a negociaçao ou o investimento em instrumentos de CFD e adequado as suas circunstâncias, e garantir voce obtem, le e entende quaisquer termos e condições aplicaveis.",
      "text88": "Termos e Condições",
      "text89": "Politica de Privacidade",
      "name": "Conclua a avaliaçao com o mentor SabioTrade!",
      "title49": "Comece a ganhar",




    },
    "ITA": {
      "TITLE": "Scala le tue operazioni, Accelera i tuoi guadagni!",
      "text1": "Posizioni aperte durante il weekend",
      "text2": "dei profitti",
      "text3": "Nessun limite di tempo",
      "btn": "Ottieni finanziamenti ora",
      "btn2": "Mentor me",
      "title2": "Come iniziare a guadagnare?",
      "sub1": "Dalla registrazione al guadagno attraverso la tua strategia",
      "title3": "Registrati",
      "text4": "Iscriviti a SabioTrade e seleziona un piano di valutazione che si allinea al tuo approccio di trading unico",
      "title4": "Valuta",
      "text5": "Mostra le tue capacita gestendo i rischi e generando profitti rispettando gli obiettivi di trading dell'account.",
      "title5": "Inizia a guadagnare",
      "text6": "Ricevi l'accesso all'account finanziato di SabioTrade, che ti permette di guadagnarefino al 90% dei tuoi profitti attraverso la tua strategia. Richiedi i primi pagamenti non appena ottieni i profitti",
      "title6": "Sistema  di pagamenti",
      "text7": "A SabioTrade ci concentriamo sul premiare i nostri trader nel miglior modo possibile. Non solo offriamo pagamenti in 7 giorni, ma anche le opzioni di pagamento più versatili che meglio si adattano ai trader di tutto il mondo.",
      "title7": "Diventa un SabioTrader",
      "sub2": "Seleziona il tipo di tariffa che ti si addice meglio e diventa un SabioTrader",
      "text8": "Standard",
      "balance": "Il tuo saldo",
      "profit": "Pagamento dei profitti",
      "fee": "Quota unica",
      "btn3": "Ottieni finanziamenti",
      "text9": "Premium",
      "text10": "Platinum",
      "text11": "Starter Mentorship",
      "btn4": "	Saperne di più",
      "text12": "*Il tutoraggio non e incluso",
      "text13": "Non sei sicuro delle tue abilita?  Completa la valutazione con un mentore di SabioTrade!",
      "text14": "Aprimore suas habilidades de trading com o programa de Mentoria do SabioTrade",
      "text15": "Potrai:",
      "li1": "fare domande di trading ai nostri mentori;",
      "li2": "pubblicare le tue operazioni pianificate o chiuse e ricevere feedback dai membri della comunita su come migliorare l'efficienza del trading;",
      "li3": "visualizzare le operazioni dei trader di successo e imparare diversi approcci di trading.",
      "text16": "Diventando membro della   nostra comunita, imparerai a:",
      "text17": "trattare con più disciplina ed evitare il trading emotivo;",
      "text18": "analizzare i punti di forza e di debolezza della tua strategia di trading e dei sistemi di altri trader.",
      "title8": "Mentor me",
      "text19": "calcolare correttamente i rischi di trading;",
      "title8": "Perche siamo la principale prop firm",
      "title9": "Pagamenti facili",
      "title10": "App mobile",
      "text19": "Ritiro istantaneo subito dopo  aver realizzato il primo profitto",
      "text21": "RAccesso istantaneo alle tue  operazioni dal tuo telefono",
      "title11": "Sabio Academy",
      "text22": "Libera il tuo genio del trading  con i nostri materiali educativi e mentori professionisti",
      "title12": "1:30 Leverage",
      "text23": "Scala il tuo account fino a $2,000,000",
      "title13": "250+ asset",
      "text24": "FX, azioni, cripto, materie prime, indici ed ETF — negozia ciò che conosci meglio!",
      "title14": "Valutazione in un solo step",
      "text25": "Nessuna pressione —   prenditi tutto il tempo necessario",
      "title15": "Gli spread più bassi nel prop trading",
      "text26": "Da 0 pips su EUR/USD durante la valutazione",
      "title16": "Voci dei trader di Sabio",
      "text27": "	Ditta affidabile. Ho incassato $1,600 nel primo mese, oltre a farmi rimborsare la quota di  valutazione nella stessa transazione.",
      "text28": "	Flusso molto semplice senza intoppi: ho superato la valutazione in 3 giorni, il trading live sta  andando bene. Darebbe @sabiotrade 10/10.",
      "text29": "Molteplici tentativi di valutazione al PRO sono stati un'ottima idea! Meno stress, maggiori possibilita.",
      "text30": "La dashboard di Sabio dopo l'aggiornamento e fantastica! Ora sembra uno spazio unico per tutto, la adoro ❤️",
      "text31": "Il miglior approccio educativo che ho incontrato nel prop trading. Ti preparano davvero per la valutazione",
      "text32": "Questo e davvero un mentoring di alto livello! I webinar con Markus sono stati molto utili, ha risposto alle mie domande urgenti, e il suo consiglio mi ha appena fatto guadagnare $1,500. Continuate così!",
      "text33": "Finalmente, una prop firm con un'app! Molto apprezzato",
      "text34": "Grazie per aver assunto persone competenti nel team di supporto 🙏 Ho contattato loro per un problema con il gateway di pagamento e [Nome] l'ha risolto molto velocemente e  professionalmente.",
      "text35": "	Conoscenze molto utili e tutor intelligenti che conoscono bene il loro mestiere",
      "title17": "Domande Frequenti",
      "faq1": "Regole di trading",
      "faq2": "Account",
      "faq3": "Domande generali",
      "faq4": "Quali sono le regole per il conto di valutazione Prop-Trading di SabioTrade?",
      "text36": "La societa di Commercio Proprietario SabioTrade stabilisce le seguenti regole:",
      "li4": "Limite di perdita giornaliero del 3% (violazione grave)",
      "li5": "6% Max Trailing Drawdown (violazione grave)",
      "li6": "Appiattisci il venerdì: tutte le posizioni sono chiuse venerdì alle 15:45 EST (violazione lieve)",
      "li7": " necessario effettuare un'operazione una volta ogni 30 giorni (violazione grave)",
      "text37": "Ciò intende valutare la gestione del rischio e le strategie di trading.",
      "text38": "Qual e la differenza tra una regola di Hard Breach e una di Soft Breach?",
      "li8": "Soft Breach significa che chiuderemo tutte le operazioni che hanno violato la regola. Tuttavia, puoi continuare a fare trading nel tuo conto di valutazione o finanziato.",
      "li9": "Violazione grave significa che hai violato il limite di perdita giornaliero o il limite massimo di perdita Regola del Trailing Drawdown. Entrambe le regole costituiscono una grave violazione. Nel caso tu subisci una violazione grave, non supererai la valutazione o avrai il tuo account finanziato portato via.",
      "title77": "Mentor me",
      "text39": "Come si calcola il limite di perdita giornaliero del 3%?",
      "text40": "Il limite di perdita giornaliero viene calcolato in base alla fine della giornata del giorno precedente (17:00 EST) bilancia.",
      "text41": "Esempio: se il saldo di fine giornata del giorno precedente fosse di $ 100.000, supereresti il ​​limite di perdita giornaliera del 3% nel caso in cui il tuo capitale il giorno successivo scendesse a $ 97.000.",
      "text42": "Come si calcola il Trailing Drawdown massimo del 6%?",
      "text43": "Il prelievo massimo finale e il prelievo massimo che il tuo account può prelevare prima di violare gravemente il tuo account. Quando apri il conto, il tuo Trailing Drawdown massimo e fissato al 6% del tuo saldo iniziale. Questo 6% segue il tuo saldo di trading chiuso fino a raggiungere il 6% di profitto nel tuo account. Una volta raggiunto il 6% nel tuo conto, il limite massimo si blocca sul tuo saldo iniziale e non trascina più il tuo conto.",
      "text44": "Esempio: se il tuo saldo iniziale e $ 100.000, puoi prelevare fino a $ 94.000 prima di violare la regola del prelievo massimo finale. Quindi, ad esempio, supponiamo che tu porti il ​​tuo account a $ 103.000 in saldo chiuso. Questo e il tuo nuovo limite massimo, il che significherebbe che il tuo nuovo prelievo massimo finale sarebbe di $ 97.000. Successivamente, supponiamo che tu porti il ​​tuo conto a $ 106.000 in saldo chiuso, che sarebbe il tuo nuovo limite massimo. A questo punto il tuo prelievo massimo finale sara bloccato sul tuo saldo iniziale di $ 100.000. Pertanto, indipendentemente da quanto alto sia il tuo account, violeresti questa regola solo se il tuo account scendesse a $ 100.000 (nota, puoi comunque violare il limite di perdita giornaliero). Ad esempio, se porti il ​​tuo conto a $ 170.000, a condizione che non prelevi più del 3% in un dato giorno, potresti violare la posizione solo se il capitale del tuo conto raggiunge $ 100.000.",
      "text45": "Posso mantenere posizioni durante il fine settimana?",
      "text46": "SÌ. Per tutti i conti Sabio ottenuti dopo il 1 luglio 2024, puoi mantenere aperte le tue posizioni durante il fine settimana.",
      "text47": "Esiste una violazione per inattivita?",
      "text48": "SÌ. Se non effettui un'operazione almeno una volta ogni 30 giorni sul tuo conto nella tua SabioTraderoom, ti considereremo inattivo e il tuo conto verra violato. Perderai l'accesso alla tua SabioTraderoom per quell'account specifico, ma potrai comunque vedere la cronologia dei tuoi scambi e le statistiche precedenti sulla tua SabioDashboard.",
      "text49": "Quanto tempo ci vuole per ricevere il mio account di valutazione?",
      "text50": "Il tuo conto di valutazione sara pronto per il trading entro pochi minuti dall'acquisto. Cerca le credenziali per la tua SabioTraderoom e SabioDashboard nella tua casella di posta subito dopo aver completato l'acquisto. Dalla SabioDashboard puoi seguire i tuoi progressi nella valutazione, richiedere i tuoi pagamenti futuri e accedere alle nostre risorse di trading, ai corsi di trading e alla nostra piattaforma di trading. Dalla SabioTraderoom puoi aprire e chiudere le tue operazioni, applicare le tue strategie di trading, accedere ai nostri strumenti di trading, controllare la cronologia di trading, ecc.",
      "text51": "Quanto tempo ci vuole per ricevere il mio conto finanziato?",
      "text52": "Una volta superata la valutazione e forniti i documenti KYC, l'account verra rilasciato entro 24-48 ore lavorative.",
      "text53": "Una volta superato il test di valutazione mi viene fornito un conto demo o reale?",
      "text54": "Una volta che un trader supera la valutazione SabioTrade, gli forniamo un conto live, finanziato con denaro reale.",
      "text55": "Quali sono le regole per il Conto Finanziato SabioTrade?",
      "text56": "Le regole per il conto finanziato SabioTrade sono esattamente le stesse del tuo conto di valutazione SabioTrade. Tuttavia, con un conto finanziato, non vi e alcun limite ai profitti che puoi generare.",
      "text57": "Cosa succede se ho una grave violazione del mio conto finanziato mentre sono in profitto?",
      "text58": "Se disponi di profitti nel tuo conto finanziato al momento di una violazione grave, riceverai comunque la tua parte di tali profitti.",
      "text59": "Ad esempio, se hai un account da $ 100.000 e lo fai crescere fino a $ 110.000. In caso di violazione grave, chiuderemo l'account. Dei $ 10.000 di profitti, ti verra pagata la tua quota dell'80% ($ 8.000).",
      "text60": "Come posso ritirare i miei profitti?",
      "text61": "Quando sei pronto per richiedere i tuoi pagamenti, puoi inserire la tua richiesta nella sezione Partecipazione agli utili del tuo SabioDashboard. Il tuo conto finanziato verra temporaneamente congelato per prelevare i tuoi profitti e detrarre la nostra quota di profitto. Riceverai i fondi sul tuo conto bancario e riacquisterai l'accesso al tuo conto finanziato per continuare a fare trading in sole 24 ore.",
      "text62": "Quando posso prelevare i profitti dal mio conto finanziato?",
      "text63": "Puoi ritirare i tuoi profitti in qualsiasi momento. Al momento di qualsiasi richiesta di prelievo, ritireremo anche la nostra quota dei profitti realizzati.",
      "text64": "Nota importante: una volta richiesto un prelievo, il prelievo finale massimo verra fissato sul saldo iniziale.",
      "text65": "Devo utilizzare uno dei vostri account per la valutazione o posso utilizzare il mio?",
      "text66": "Disponiamo di un software di gestione del rischio sincronizzato con gli account che creiamo. Questo ci consente di analizzare le tue prestazioni in tempo reale per risultati o violazioni delle regole. Pertanto, devi utilizzare un account che ti forniamo.",
      "text67": "Quali Paesi sono accettati?",
      "text68": "Tutti i paesi, esclusi quelli elencati nell'OFAC, possono prendere parte al nostro programma.",
      "text69": "Dove posso monitorare l'andamento del mio conto SabioTrade?",
      "text70": "Dopo aver acquistato una valutazione o esserti registrato per una prova gratuita, riceverai l'accesso a SabioDashboard dove potrai monitorare i tuoi progressi per i tuoi conti Valutazione e Finanziati. SabioDashboard viene aggiornato ogni volta che calcoliamo le metriche, il che avviene all'incirca ogni 60 secondi. e tua responsabilita monitorare i livelli di violazione.",
      "text71": "Su quale piattaforma di trading posso fare trading quando utilizzo SabioTrade?",
      "text72": "La nostra tecnologia di gestione del rischio e attualmente integrata con la piattaforma di trading QuadCode. Quando utilizzi i conti di prova, valutazione o finanziati di SabioTrade, farai trading su una piattaforma di trading basata su QuadCode, direttamente dal tuo SabioDashboard. Avrai tutto ciò di cui hai bisogno per un'esperienza di trading piacevole e di successo nello stesso posto.",
      "text73": "Qual e la leva finanziaria?",
      "text74": "La leva massima disponibile fornita da SabioTrade Prop-Trading Firm varia a seconda dell'asset. Disponiamo di asset con una leva fino a 1:100 o 1:500. Ad esempio, per le coppie di valute e in linea con solide pratiche di gestione del rischio, forniamo una leva fino a 30:1. Tieni presente che la leva viene applicata direttamente alla tua operazione per semplicita e comodita.",
      "text75": "Quali sono gli orari di negoziazione?",
      "text76": "Gli orari di trading sono stabiliti dal nostro broker, QuadCode. SabioTrade non ha alcun controllo sugli orari di negoziazione specifici per i prodotti offerti da QuadCode.",
      "text77": "Tieni presente che le festivita possono avere un impatto sugli orari di negoziazione disponibili.",
      "text78": "Inoltre, in base alla regola di non trattenere le operazioni durante il fine settimana, chiudiamo tutte le operazioni aperte il venerdì alle 15:45 EST.",
      "text79": "I tuoi conti addebitano commissioni?",
      "text80": "NO.",
      "text81": "Posso fare trading durante le Notizie?",
      "text82": "Sì, puoi fare trading durante le notizie",
      "text83": "Come vedrò l'addebito sul mio estratto conto?",
      "text84": "Le accuse arrivano a nome di CODEVIL.",
      "text85": "Avviso di rischio",
      "text86": "Il contenuto di questo sito Web e solo a scopo informativo generale e didattico e non e (e non può essere interpretato o considerato come) consulenza personale ne come offerta di acquisto/vendita/sottoscrizione a nessuno dei prodotti finanziari qui menzionati. Nessun obiettivo di investimento, situazione finanziaria o necessita di alcun individuo e stato preso in considerazione nella preparazione o nella consegna del contenuto.",
      "text87": "I prodotti finanziari sono complessi, comportano rischi di perdita, possono aumentare e diminuire e sono influenzati da una serie di fattori economici e di mercato; dovresti sempre ottenere una consulenza professionale per assicurarti che il trading o l'investimento in strumenti CFD siano adatti alle tue circostanze e per assicurarti ottieni, leggi e comprendi tutti i termini e le condizioni applicabili.",
      "text88": "Termini e condizioni",
      "text89": "Politica sulla riservatezza",
      "name": "Completa la valutazione con il mentore SabioTrade!",
      "title49": "Inizia a guadagnare",



    },
    "FRA": {
      "TITLE": "Developpez vos trades, Accelerez vos gains!",
      "text1": "Positions ouvertes le week-end",
      "text2": "de partage des profits",
      "text3": "Pas de limites de temps",
      "btn": "Obtenez des fonds maintenant",
      "btn2": "Mentorez-moi",
      "title2": "Comment commencer a gagner?",
      "sub1": "De l'inscription a gagner grâce a votre strategie",
      "title3": "Inscription",
      "text4": "Inscrivez-vous sur SabioTrade et selectionnez un plan d'evaluation qui correspond a votre approche de trading unique",
      "title4": "evaluation",
      "text5": "Demontrez vos competences en gerant les risques et en generant des profits tout en atteignant les objectifs de trading du compte.",
      "title5": "Commencez a gagner",
      "text6": "Recevez l'acces au compte finance SabioTrade, vous permettant de commencer a gagner jusqu'a 90% de vos profits grâce a votre strategie. Demandez vos premiers paiements des que vous realisez des profits",
      "title6": "Systeme de paiements",
      "text7": "Chez SabioTrade, nous nous concentrons sur la meilleure façon de recompenser nos traders. Non seulement nous offrons des paiements en 7 jours, mais aussi les options de paiement les plus polyvalentes qui conviennent le mieux aux traders du monde entier.",
      "title7": "Devenez un SabioTrader",
      "sub2": "Selectionnez le type de tarif qui vous convient le mieux et devenez un SabioTrader",
      "text8": "Standard",
      "balance": "Votre solde",
      "profit": "Part des profits",
      "fee": "Frais uniques",
      "btn3": "Obtenez des fond",
      "text9": "Premium",
      "text10": "Platinum",
      "text11": "Debutant MENTORAT",
      "btn4": "Apprendre encore plus",
      "text12": "*Le mentorat n'est pas inclus",
      "text13": "Pas sûr de vos competences? Completez  l'evaluation avec un mentor de SabioTrade!",
      "text14": "Boostez vos competences de trading avec le programme de mentorat SabioTrade",
      "text15": "Vous pourrez :",
      "li1": "poser des questions de trading a nos mentors;",
      "li2": "publier vos trades planifies ou clôtures et recevoir des retours des membres de la communaute sur comment ameliorer l'efficacite de votre trading;",
      "li3": "consulter les trades des traders a succes et apprendre differentes approches de trading.",
      "text16": "En devenant membre de notre   communaute, vous apprendrez a :",
      "text17": "trader avec plus de discipline et eviter le trading emotionnel;",
      "text18": "analyser les forces et faiblesses de votre strategie de trading et des systemes d'autres traders.",
      "title8": "Mentorez  moi",
      "text19": "calculer correctement les risques de trading",
      "title8": "Pourquoi nous sommes la principale societe de trading prop",
      "title9": "Paiements facile",
      "title10": "Application mobile",
      "text20": "Retrait instantane des que vous realisez votre premier profit",
      "text21": "Accedez instantanement a vos trades depuis votre telephone",
      "title11": "Sabio Academy",
      "text22": "Liberez votre genie du trading avec  nos materiaux educatifs et nos mentors pros",
      "title12": "Levier 1:30",
      "text23": "Augmentez votre compte  jusqu'a 2 000 000$",
      "title13": "250+ actifs",
      "text24": "FX, actions, crypto, matieres premieres, indices et ETF — tradez ce que vous connaissez le mieux!",
      "title14": "evaluation en 1 etape",
      "text25": "Pas de pression — prenez tout   le temps dont vous avez besoin",
      "title15": "Les spreads les plus bas dans le trading prop",
      "text26": "a partir de 0 pips sur EUR/USD pendant l'evaluation",
      "title16": "Les voix des traders de Sabio",
      "text27": "Entreprise fiable. J'ai encaisse 1 600 $ le premier mois, et ils ont rembourse mes frais d'evaluation dans la meme transaction.",
      "text28": "Flux tres simple sans accroc : j'ai reussi l'evaluation en 3 jours, le trading en direct se passe bien. Je donnerais une note de 10/10 a @sabiotrade.",
      "text29": "Les tentatives multiples d'evaluation en PRO etaient une excellente idee! Moins de stress, plus de chances.",
      "text30": "Le tableau de bord Sabio apres la mise a niveau est un wow ! Maintenant, il ressemble a un espace unique pour tout, j'adore ❤️",
      "text31": "La meilleure approche educative que j'ai rencontree dans le trading prop. Ils vous preparent  vraiment pour l'evaluation",
      "text32": "	C'est un mentorat de tres haut niveau! Les webinaires avec Markus etaient super utiles, il a repondu a mes questions brûlantes, et son conseil vient de me faire gagner un deal de 1 500 $. Continuez le bon travail!",
      "text33": "Enfin, une societe de trading prop avec une application ! Tres apprecie",
      "text34": "Merci d'avoir embauche des personnes competentes dans l'equipe de support 🙏 J'ai contacte le support pour un probleme de passerelle de paiement et [Nom] l'a resolu tres rapidement et professionnellement.",
      "text35": "Des connaissances tres utiles et des tuteurs intelligents qui connaissent leur metier",
      "title17": "Questions frequemment posees",
      "faq1": "Regles de trading",
      "faq2": "Comptes",
      "faq3": "Questions generales",
      "faq4": "Quelles sont les regles du compte SabioTrade Prop-Trading Assessment ?",
      "text36": "La societe SabioTrade Proprietary Trading etablit les regles suivantes :",
      "li4": "Limite de perte quotidienne de 3 % (violation materielle)",
      "li5": "6 % de reduction maximale (breche importante)",
      "li6": "Aplatir le vendredi - toutes les positions sont fermees le vendredi a 15h45 HNE (breche douce)",
      "li7": "Doit effectuer une transaction une fois tous les 30 jours (infraction grave)",
      "text37": "Une violation legere signifie que nous clôturerons toutes les transactions qui ont enfreint la regle. Cependant, vous pouvez continuer a negocier sur votre compte d'evaluation ou finance.",
      "text38": "Une violation grave signifie que vous avez viole soit la limite de perte quotidienne, soit la limite maximale. Regle de tirage suiveur. Les deux regles constituent une infraction grave. Dans le cas où vous avez une violation grave, vous echouerez a l'evaluation ou votre compte sera  finance  emporte.",
      "title77": "Mentorez-moi",
      "text39": "Comment calculez-vous la limite de perte quotidienne de 3 % ?",
      "text40": "La limite de perte quotidienne est calculee en fonction de la fin de journee de la veille (17 h HNE). equilibre.",
      "text41": "Exemple : Si votre solde de fin de journee de la veille etait de 100 000 $, vous depasseriez la limite de perte quotidienne de 3 % si vos capitaux propres tombaient le lendemain a 97 000 $.",
      "text42": "Comment calculez-vous le prelevement suiveur maximum de 6 % ?",
      "text43": "Le retrait maximum final est le maximum que votre compte peut retirer avant que vous ne violiez gravement votre compte. Lorsque vous ouvrez le compte, votre Max Trailing Drawdown est fixe a 6 % de votre solde de depart. Ces 6 % suivent votre solde de trading ferme jusqu'a ce que vous atteigniez 6 % de benefices sur votre compte. Une fois que vous avez atteint 6 % sur votre compte, le solde maximum se bloque sur votre solde de depart et ne suit plus votre compte.",
      "text44": "Exemple : Si votre solde de depart est de 100 000 $, vous pouvez effectuer un retrait jusqu'a 94 000 $ avant de violer la regle du retrait maximal maximal. Alors, par exemple, disons que vous portez votre compte a 103 000 $ de solde ferme. Il s’agit de votre nouvelle ligne haute, ce qui signifierait que votre nouveau prelevement maximum serait de 97 000 $. Ensuite, disons que vous portez votre compte a 106 000 $ de solde ferme, ce qui constituerait votre nouveau point culminant. a ce stade, votre prelevement maximum sera bloque sur votre solde de depart de 100 000 $. Ainsi, quel que soit le montant de votre compte, vous ne violerez cette regle que si votre compte redescend a 100 000 $ (notez que vous pouvez toujours violer la limite de perte quotidienne). Par exemple, si vous portez votre compte a 170 000 $, tant que vous ne retirez pas plus de 3 % au cours d'une journee donnee, vous ne violerez votre compte que si les capitaux propres de votre compte atteignent 100 000 $.",
      "text45": "Puis-je occuper des postes pendant le week-end ?",
      "text46": "Oui. Pour tous les comptes Sabio obtenus apres le 1er juillet 2024, vous pouvez garder vos positions ouvertes pendant le week-end.",
      "text47": "Y a-t-il une breche pour inactivite ?",
      "text48": "Oui. Si vous n'effectuez pas de transaction au moins une fois tous les 30 jours sur votre compte sur votre SabioTraderoom, nous vous considererons comme inactif et votre compte sera pirate. Vous perdrez l'acces a votre SabioTraderoom pour ce compte specifique, mais vous pourrez toujours voir votre historique de trading et vos statistiques precedentes sur votre SabioDashboard.",
      "text49": "Combien de temps faut-il pour recevoir mon compte d'evaluation ?",
      "text50": "Votre compte d'evaluation sera pret a etre negocie quelques minutes apres l'achat. Recherchez les informations d'identification de votre SabioTraderoom et SabioDashboard dans votre boîte de reception immediatement apres avoir termine votre achat. Depuis le SabioDashboard, vous pouvez suivre vos progres dans votre evaluation, demander vos futurs paiements et acceder a nos ressources de trading, nos cours de trading et notre plateforme de trading. Depuis SabioTraderoom, vous pouvez ouvrir et clôturer vos transactions, appliquer vos strategies de trading, acceder a nos outils de trading, consulter votre historique de trading, etc.",
      "text51": "Combien de temps faut-il pour recevoir mon compte finance ?",
      "text52": "Une fois que vous avez reussi votre evaluation et fourni vos documents KYC, le compte sera emis dans les 24 a 48 heures ouvrables.",
      "text53": "Une fois que j'ai reussi l'evaluation, suis-je dote d'un compte demo ou reel ?",
      "text54": "Une fois qu'un trader reussit l'evaluation SabioTrade, nous lui fournissons un compte reel, finance avec de l'argent reel.",
      "text55": "Quelles sont les regles du compte SabioTrade Funded ?",
      "text56": "Les regles du compte SabioTrade Funded sont exactement les memes que celles de votre compte SabioTrade Assessment. Cependant, avec un compte finance, il n’y a pas de plafond sur les benefices que vous pouvez generer.",
      "text57": "Que se passe-t-il si je constate une violation grave de mon compte finance alors que je suis en profit ?",
      "text58": "Si vous avez des benefices sur votre compte finance au moment d'une violation grave, vous recevrez toujours votre part de ces benefices.",
      "text59": "Par exemple, si vous avez un compte de 100 000 $ et que vous faites croître cecompte a 110 000 $. En cas de violation grave, nous fermerions le compte. Sur les10 000 $ de benefices, vous recevrez votre part de 80 % (8 000 $).",
      "text60": "Comment retirer mes benefices ?",
      "text61": "Lorsque vous etes pret a demander vos paiements, vous pouvez placer votre demande dans la section Participation aux benefices de votre SabioDashboard. Votre compte finance sera temporairement gele pour retirer vos benefices et deduire notre part des benefices. Vous recevrez les fonds sur votre compte bancaire et retrouverez l'acces a votre compte finance pour continuer a trader en seulement 24 heures.",
      "text62": "Quand puis-je retirer les benefices de mon compte finance ?",
      "text63": "Vous pouvez retirer vos benefices a tout moment. Lors de toute demande de retrait, nous retirerons egalement notre part des benefices realises.",
      "text64": "Remarque importante : une fois que vous avez demande un retrait, votre prelevement final maximum sera fixe a votre solde de depart.",
      "text65": "Dois-je utiliser l'un de vos comptes pour l'evaluation ou puis-je utiliser le mien ?",
      "text66": "Nous disposons d'un logiciel de gestion des risques synchronise avec les comptes que nous creons. Cela nous permet d'analyser vos performances en temps reel pour detecter les realisations ou les violations des regles. A ce titre, vous devez utiliser un compte que nous vous fournissons.",
      "text67": "Quels pays sont acceptes ?",
      "text68": "Tous les pays, a l'exclusion des pays repertories par l'OFAC, peuvent participer a notre programme.",
      "text69": "Où puis-je suivre la progression de mon compte SabioTrade ?",
      "text70": "Lors de l'achat d'une evaluation ou de l'inscription a un essai gratuit, vous aurez acces au SabioDashboard où vous pourrez suivre vos progres pour vos comptes d'evaluation et finances. SabioDashboard est mis a jour chaque fois que nous calculons des metriques, ce qui se produit environ toutes les 60 secondes. Il est de votre responsabilite de surveiller vos niveaux de violation.",
      "text71": "Sur quelle plateforme de trading puis-je trader lorsque j'utilise SabioTrade ?",
      "text72": "Notre technologie de gestion des risques est actuellement integree a la plateforme de trading QuadCode. Lorsque vous utilisez l'essai gratuit, l'evaluation ou les comptes finances de SabioTrade, vous negocierez sur une plateforme de trading alimentee par QuadCode, directement depuis votre SabioDashboard. Vous aurez tout ce dont vous avez besoin pour vivre une experience de trading agreable et reussie au meme endroit.",
      "text73": "Quel est l'effet de levier ?",
      "text74": "L'effet de levier maximum disponible fourni par SabioTrade Prop-Trading Firm varie en fonction de l'actif. Nous disposons d'actifs avec un effet de levier allant jusqu'a 1:100 ou 1:500. Par exemple, pour les paires de devises, et conformement a de saines pratiques de gestion des risques, nous fournissons un effet de levier allant jusqu'a 30:1. Notez que l’effet de levier est directement applique a votre transaction pour plus de simplicite et de commodite.",
      "text75": "Quelles sont les heures de trading ?",
      "text76": "Les heures de negociation sont fixees par notre courtier, QuadCode. SabioTrade n'a aucun contrôle sur les heures de negociation specifiques pour les produits proposes par QuadCode.",
      "text77": "Veuillez noter que les jours feries peuvent avoir un impact sur les heures de trading disponibles.",
      "text78": "De plus, conformement a la regle d'interdiction de transactions pendant le week-end, nous clôturons toutes les transactions ouvertes a 15 h 45 HNE le vendredi.",
      "text79": "Vos comptes facturent-ils des commissions ?",
      "text80": "Non.",
      "text81": "Puis-je trader pendant les News ?",
      "text82": "Oui, vous pouvez trader pendant les actualites",
      "text83": "Comment verrai-je le montant sur mon releve ?",
      "text84": "Les accusations apparaissent au nom de CODEVIL.",
      "text85": "Avertissement de risque",
      "text86": "Le contenu de ce site Web est uniquement destine a des fins d’information generale et educatives et ne constitue pas (et ne peut etre interprete ou invoque comme) un conseil personnel ni une offre d’achat/vente/souscription a l’un des produits financiers mentionnes ici. Aucun objectif d'investissement, situation financiere ou besoin d'un individu n'a ete pris en compte dans la preparation ou la livraison du contenu.",
      "text87": "Les produits financiers sont complexes, comportent un risque de perte, peuvent augmenter et diminuer et sont influences par une serie de facteurs de marche et economiques. Vous devez toujours obtenir des conseils professionnels pour vous assurer que le trading ou l'investissement dans des instruments CFD est adapte a votre situation, et vous assurer que vous obtenez, lisez et comprenez tous les termes et conditions applicables.",
      "text88": "Conditions generales",
      "text89": "Politique de confidentialite",
      "name": "Completez l'evaluation avec le mentor SabioTrade !",
      "title49": "Commencez a gagner",




    },
    "GER": {
      "TITLE": "Skalieren Sie Ihre Trades, Beschleunigen Sie Ihre Einnahmen!",
      "text1": "Offene Positionen am Wochenende",
      "text2": "Gewinnbeteiligung",
      "text3": "Keine Zeitlimits",
      "btn": "Jetzt finanzieren lassen",
      "btn2": "Mentor mich",
      "title2": "Wie anfangen zu verdienen?",
      "sub1": "Von der Registrierung bis zum Verdienst durch Ihre Strategie",
      "title3": "Registrieren",
      "text4": "Melden Sie sich bei SabioTrade an und wählen Sie einen Evaluationsplan, der zu Ihrem einzigartigen Handelsansatz passt.",
      "title4": "Evaluieren",
      "text5": "Zeigen Sie Ihre Fähigkeiten, indem Sie das Risiko managen und Gewinne erzielen, während Sie die Handelskriterien des Kontos erfüllen.",
      "title5": "Beginnen Sie zu verdienen",
      "text6": "Erhalten Sie Zugang zu einem finanzierten Konto bei SabioTrade und verdienen Sie bis zu 90% Ihrer Gewinne durch Ihre Strategie. Fordern Sie Ihre ersten Auszahlungen an, sobald Sie Gewinne erzielt haben.",
      "title6": "Auszahlungssystem",
      "text7": "Bei SabioTrade legen wir großen Wert darauf, unsere Trader bestmoglich zu belohnen. Wir bieten nicht nur Auszahlungen alle 7 Tage an, sondern auch die vielseitigsten Zahlungsoptionen, die am besten zu Tradern weltweit passen.",
      "title7": "Werden Sie ein SabioTrader",
      "sub2": "Wählen Sie den Tariftyp, der am besten zu Ihnen passt und werden Sie ein SabioTrader",
      "text8": "Standard",
      "balance": "Ihr Guthaben",
      "profit": "Gewinnauszahlung",
      "fee": "Einmalige Gebühr",
      "btn3": "Jetzt finanzieren lassen",
      "text9": "Premium",
      "text10": "Platinum",
      "text11": "Starter MENTORING",
      "btn4": "Erfahren Sie mehr",
      "text12": "*Mentoring ist nicht inbegriffen",
      "text13": "Nicht sicher in Ihren Fähigkeiten?  Beenden Sie die Bewertung mit einem SabioTrade-Mentor!",
      "text14": "Verbessern Sie Ihre Handelsfähigkeiten mit dem SabioTrade-Mentoring-Programm",
      "text15": "Sie konnen:",
      "li1": "Handelsfragen an unsere Mentoren stellen;",
      "li2": "Ihre geplanten oder abgeschlossenen Trades posten und Feedback von Community-Mitgliedern erhalten, wie Sie die Handelseffizienz verbessern konnen;",
      "li3": "Trades erfolgreicher Trader einsehen und verschiedene Handelsansätze lernen.;",
      "text16": "Indem Sie Mitglied unserer Community werden, lernen Sie:",
      "text17": "mit mehr Disziplin zu handeln und emotionales Trading zu vermeiden;",
      "text18": "die Stärken und Schwächen Ihrer Handelsstrategie und der Systeme anderer Trader zu analysieren.",
      "title8": "Mentor mich",
      "text19": "Handelsrisiken korrekt zu berechnen;",
      "title8": "Warum wir die führende Prop-Trading-Firma sind",
      "title9": "Einfache Auszahlungen",
      "title10": "Mobile App",
      "text20": "Sofortige Auszahlung direkt  nach dem ersten Gewinn;",
      "text21": "Sofortiger Zugriff auf Ihre Deals  von Ihrem Handy",
      "title11": "Sabio Academy",
      "text22": "Entfalten Sie Ihr Trading-Genie mit unseren  Bildungsmaterialien und Profi-Mentoren",
      "title12": "1:30 Hebelwirkung",
      "text23": "Skalieren Sie Ihr Konto auf   bis zu 2.000.000 $",
      "title13": "250+ Vermogenswert",
      "text24": "FX, Aktien, Krypto, Rohstoffe, Indizes und ETFs — handeln Sie, was Sie am besten kennen!",
      "title14": "1-Schritt-Bewertung",
      "text25": "Kein Druck — nehmen Sie sich so viel Zeit wie notig",
      "title15": "Niedrigste Spreads im Prop-Trading",
      "text26": "Ab 0 Pips auf EUR/USD während der Bewertung",
      "title16": "Stimmen der Sabio-Trader",
      "text27": "	Zuverlässige Firma. Ich habe im ersten Monat 1.600 $ ausgezahlt, plus sie haben meine  Bewertungsgebühr in derselben Transaktion zurückgezahlt.",
      "text28": "Sehr einfacher Ablauf ohne Probleme: Ich habe die Bewertung in 3 Tagen bestanden, das  Live-Trading läuft gut. Würde @sabiotrade mit 10/10 bewerten.",
      "text29": "Mehrere Bewertungsversuche bei PRO waren eine großartige Idee! Weniger Stress, hohere Chancen.",
      "text30": "Das Sabio-Dashboard nach dem Upgrade ist der Hammer! Jetzt sieht es aus wie ein einziger Raum für alles, ich liebe es ❤️",
      "text31": "Der beste Ansatz zur Ausbildung, den ich im Prop-Trading erlebt habe. Sie bereiten einen tatsächlich auf die Bewertung vor.",
      "text32": "Dies ist wirklich ein Mentoring auf hohem Niveau! Webinare mit Markus waren super hilfreich, er hat meine brennenden Fragen beantwortet, und sein Tipp hat mir gerade einen 1.500 $ Deal eingebracht. Weiter so!",
      "text33": "Endlich eine Prop-Firma mit einer App! Sehr geschätzt",
      "text34": "Danke, dass Sie kompetente Leute im Support-Team eingestellt haben 🙏 Ich habe mich mit einem  Problem im Zahlungsgateway an sie gewandt und [Name] hat es sehr schnell und professionell gelost.",
      "text35": "Sehr nützliches Wissen und kluge Tutoren, die ihr Handwerk verstehen",
      "title17": "Häufig gestellte Fragen",
      "faq1": "Handelsregeln",
      "faq2": "Konten",
      "faq3": "Allgemeine Fragen",
      "faq4": "Welche Regeln gelten für das SabioTrade Prop-Trading Assessment-Konto?",
      "text36": "Das Proprietary Trading-Unternehmen SabioTrade legt die folgenden Regeln fest:",
      "li4": "3 % tägliches Verlustlimit (schwerer Verstoß)",
      "li5": "6 % max. Trailing Drawdown (harter Durchbruch)",
      "li6": "Freitags Abflachung – alle Positionen wurden am Freitag um 15:45 Uhr EST geschlossen (leichter Durchbruch)",
      "li7": "Alle 30 Tage muss ein Trade getätigt werden (schwerer Verstoß)",
      "text37": "Ziel ist die Bewertung Ihres Risikomanagements und Ihrer Handelsstrategien.",
      "text38": "Was ist der Unterschied zwischen einer Hard Breach- und einer Soft Breach-Regel?",
      "li8": "Soft Breach bedeutet, dass wir alle Trades schließen, die gegen die Regel verstoßen haben. Sie konnen jedoch weiterhin mit Ihrem Bewertungs- oder Guthabenkonto handeln.",
      "li9": "Schwerer Verstoß bedeutet, dass Sie entweder das tägliche Verlustlimit oder das maximale Verlustlimit überschritten haben  Trailing Drawdown-Regel. Beide Regeln stellen einen schweren Verstoß dar. Für den Fall, dass Sie Wenn Sie einen schwerwiegenden Verstoß erleiden, werden Sie die Bewertung  nicht bestehen oder Ihr Konto ist gedeckt weggenommen.",
      "title77": "Mentor mich",
      "text39": "Wie berechnet man das tägliche Verlustlimit von 3 %?",
      "text40": "Das tägliche Verlustlimit wird auf Grundlage des Tagesendes des Vortages (17:00 Uhr EST) berechnet. Gleichgewicht.",
      "text41": "Beispiel: Wenn Ihr Tagesendsaldo am Vortag 100.000 US-Dollar betrug, würden Sie das tägliche Verlustlimit von 3 % überschreiten, wenn Ihr Eigenkapital am nächsten Tag auf 97.000 US-Dollar sinken würde.",
      "text42": "Wie berechnet man den maximalen Trailing Drawdown von 6 %?",
      "text43": "Der maximale Trailing-Drawdown ist der maximale Drawdown, den Ihr Konto in Anspruch nehmen kann, bevor es zu einem schweren Verstoß gegen Ihr Konto kommt. Wenn Sie das Konto eroffnen, wird Ihr maximaler Trailing Drawdown auf 6 % Ihres Startguthabens festgelegt. Diese 6 % bleiben auf Ihrem geschlossenen Handelssaldo zurück, bis Sie 6 % Gewinn auf Ihrem Konto erreichen. Sobald Sie 6 % auf Ihrem Konto erreicht haben, wird die maximale Nachlaufzeit bei Ihrem Anfangssaldo festgelegt und belastet Ihr Konto nicht mehr.",
      "text44": "Beispiel: Wenn Ihr Startguthaben 100.000 US-Dollar beträgt, konnen Sie einen Drawdown auf 94.000 US-Dollar durchführen, bevor Sie gegen die Regel für den maximalen nachlaufenden Drawdown verstoßen. Nehmen wir zum Beispiel an, dass Ihr Konto einen geschlossenen Saldo von 103.000 US-Dollar aufweist. Dies ist Ihre neue Hochstgrenze, was bedeuten würde, dass Ihr neuer maximaler Trailing Drawdown 97.000 $ betragen würde. Nehmen wir als Nächstes an, Sie bringen Ihr Konto auf einen geschlossenen Saldo von 106.000 US-Dollar, was Ihr neuer Hochststand wäre. Zu diesem Zeitpunkt wäre Ihr maximaler Trailing Drawdown bei Ihrem Startguthaben von 100.000 $ festgelegt. Unabhängig davon, wie hoch Ihr Konto ist, würden Sie also nur dann gegen diese Regel verstoßen, wenn Ihr Konto wieder auf 100.000 US-Dollar sinkt (beachten Sie, dass Sie immer noch gegen das tägliche Verlustlimit verstoßen konnen). Wenn Sie Ihr Konto beispielsweise auf 170.000 US-Dollar erhohen und an einem bestimmten Tag nicht mehr als 3 % in Anspruch nehmen, würden Sie nur dann brechen, wenn Ihr Kontoguthaben 100.000 US-Dollar erreicht.",
      "text45": "Kann ich Positionen über das Wochenende halten?",
      "text46": "Ja. Für alle Sabio-Konten, die nach dem 1. Juli 2024 eroffnet wurden, konnen Sie Ihre Positionen am Wochenende offen halten.",
      "text47": "Gibt es einen Verstoß wegen Inaktivität?",
      "text48": "Ja. Wenn Sie nicht mindestens alle 30 Tage einen Handel auf Ihrem Konto in Ihrem SabioTraderoom tätigen, betrachten wir Sie als inaktiv und Ihr Konto wird verletzt. Sie verlieren für dieses bestimmte Konto den Zugriff auf Ihren SabioTraderoom, konnen aber weiterhin Ihren Handelsverlauf und frühere Statistiken auf Ihrem SabioDashboard einsehen.",
      "text49": "Wie lange dauert es, bis ich mein Bewertungskonto erhalte?",
      "text50": "Ihr Assessment-Konto ist innerhalb weniger Minuten nach dem Kauf handelsbereit. Suchen Sie unmittelbar nach Abschluss Ihres Kaufs in Ihrem Posteingang nach den Zugangsdaten für Ihren SabioTraderoom und Ihr SabioDashboard. Über das SabioDashboard konnen Sie Ihren Fortschritt bei Ihrer Bewertung verfolgen, Ihre zukünftigen Auszahlungen anfordern und auf unsere Handelsressourcen, Handelskurse und unsere Handelsplattform zugreifen. Im SabioTraderoom konnen Sie Ihre Geschäfte eroffnen und abschließen, Ihre Handelsstrategien anwenden, auf unsere Handelstools zugreifen, Ihren Handelsverlauf überprüfen usw.",
      "text51": "Wie lange dauert es, bis ich mein Guthabenkonto erhalte?",
      "text52": "Sobald Sie Ihre Prüfung bestanden und Ihre KYC-Dokumente vorgelegt haben, wird das Konto innerhalb von 24 bis 48 Geschäftsstunden ausgestellt.",
      "text53": "Erhalte ich nach bestandener Prüfung ein Demo- oder Live-Konto?",
      "text54": "Sobald ein Händler die SabioTrade-Bewertung besteht, stellen wir ihm ein Live-Konto zur Verfügung, das mit echtem Geld finanziert wird.",
      "text55": "Welche Regeln gelten für das SabioTrade Funded-Konto?",
      "text56": "Die Regeln für das SabioTrade Funded-Konto sind genau die gleichen wie für Ihr SabioTrade Assessment-Konto. Bei einem Guthabenkonto gibt es jedoch keine Obergrenze für die Gewinne, die Sie erzielen konnen.",
      "text57": "Was passiert, wenn es während der Gewinnphase zu einem schwerwiegenden Verstoß gegen mein Guthabenkonto kommt?",
      "text58": "Wenn Sie zum Zeitpunkt eines schwerwiegenden Verstoßes Gewinne auf Ihrem Guthabenkonto haben, erhalten Sie trotzdem Ihren Anteil an diesen Gewinnen.",
      "text59": "Wenn Sie beispielsweise ein Konto im Wert von 100.000 US-Dollar haben und dieses Konto auf 110.000 US-Dollar erweitern mochten. Sollte es dann zu einem schwerwiegenden Verstoß kommen, würden wir das Konto schließen. Von den 10.000 $ Gewinn würden Ihnen 80 % (8.000 $) ausgezahlt.",
      "text60": "Wie kann ich meine Gewinne abheben?",
      "text61": "Wenn Sie bereit sind, Ihre Auszahlungen anzufordern, konnen Sie Ihre Anfrage im Abschnitt „Gewinnbeteiligung“ Ihres SabioDashboards platzieren. Ihr Guthabenkonto wird vorübergehend gesperrt, um Ihren Gewinn abzuheben und unseren Gewinnanteil abzuziehen. Sie erhalten das Geld auf Ihr Bankkonto und erhalten innerhalb von 24 Stunden wieder Zugriff auf Ihr Guthabenkonto, um mit dem Handel fortzufahren.",
      "text62": "Wann kann ich Gewinne von meinem Guthabenkonto abheben?",
      "text63": "Sie konnen Ihre Gewinne jederzeit auszahlen lassen. Zum Zeitpunkt einer Auszahlungsanfrage werden wir auch unseren Anteil am erzielten Gewinn abheben.",
      "text64": "Wichtiger Hinweis: Sobald Sie eine Auszahlung beantragen, wird Ihr maximaler nachlaufender Drawdown auf Ihr Startguthaben festgelegt.",
      "text65": "Muss ich eines Ihrer Konten für die Bewertung verwenden oder kann ich mein eigenes verwenden?",
      "text66": "Wir verfügen über eine Risikomanagementsoftware, die mit den von uns erstellten Konten synchronisiert wird. Dadurch konnen wir Ihre Leistung in Echtzeit auf Erfolge oder Regelverstoße analysieren. Daher müssen Sie ein Konto verwenden, das wir Ihnen zur Verfügung stellen.",
      "text67": "Welche Länder werden akzeptiert?",
      "text68": "Alle Länder, mit Ausnahme der OFAC-gelisteten Länder, konnen an unserem Programm teilnehmen.",
      "text69": "Wo kann ich den Fortschr",
      "text70": "Nach dem Kauf eines Assessments oder der Registrierung für eine kostenlose Testversion erhalten Sie Zugriff auf das SabioDashboard, wo Sie den Fortschritt Ihres Assessment- und Funded-Kontos überwachen konnen. SabioDashboard wird jedes Mal aktualisiert, wenn wir Metriken berechnen, was etwa alle 60 Sekunden geschieht. Es liegt in Ihrer Verantwortung, Ihre Verstoße zu überwachen.",
      "text71": "Auf welcher Handelsplattform kann ich mit SabioTrade handeln?",
      "text72": "Unsere Risikomanagementtechnologie ist derzeit in die QuadCode-Handelsplattform integriert. Wenn Sie die kostenlose Testversion, die Bewertung oder die Konten mit Guthaben von SabioTrade nutzen, handeln Sie auf einer von QuadCode betriebenen Handelsplattform, direkt von Ihrem SabioDashboard aus. Sie haben alles, was Sie für ein angenehmes und erfolgreiches Handelserlebnis benotigen, am selben Ort.",
      "text73": "Was ist die Hebelwirkung?",
      "text74": "Der maximal verfügbare Hebel, der von der SabioTrade Prop-Trading Firm bereitgestellt wird, variiert je nach Vermogenswert. Wir verfügen über Vermogenswerte mit einem Hebel von bis zu 1:100 oder 1:500. Für Währungspaare bieten wir beispielsweise im Einklang mit soliden Risikomanagementpraktiken einen Hebel von bis zu 30:1. Beachten Sie, dass der Hebel der Einfachheit und Bequemlichkeit halber direkt auf Ihren Handel angewendet wird.",
      "text75": "Wie sind die Handelszeiten?",
      "text76": "Die Handelszeiten werden von unserem Broker QuadCode festgelegt. SabioTrade hat keinen Einfluss auf die spezifischen Handelszeiten für die von QuadCode angebotenen Produkte.",
      "text77": "Bitte beachten Sie, dass Feiertage Auswirkungen auf die verfügbaren Handelszeiten haben konnen.",
      "text78": "Darüber hinaus schließen wir gemäß der Regel, dass am Wochenende keine Geschäfte getätigt werden dürfen, alle offenen Geschäfte freitags um 15:45 Uhr EST.",
      "text79": "Erheben Ihre Konten Provisionen?",
      "text80": "NEIN.",
      "text81": "Kann ich während der Nachrichten handeln?",
      "text82": "Ja, Sie konnen während der Nachrichten handeln",
      "text83": "Wie kann ich die Belastung auf meiner Abrechnung sehen?",
      "text84": "Es werden Anklagen im Namen von CODEVIL erhoben.",
      "text85": "Risikowarnung",
      "text86": "Der Inhalt dieser Website dient ausschließlich allgemeinen Informations- und Bildungszwecken und stellt weder eine personliche Beratung noch ein Angebot zum Kauf/Verkauf/Abonnement eines der hier genannten Finanzprodukte dar (und kann auch nicht als solche ausgelegt oder als verlässlich angesehen werden). Bei der Erstellung oder Bereitstellung der Inhalte wurden keine Anlageziele, finanziellen Verhältnisse oder Bedürfnisse einzelner Personen berücksichtigt.",
      "text87": "Finanzprodukte sind komplex, bergen Verlustrisiken, konnen steigen und fallen und werden von einer Reihe von Markt- und Wirtschaftsfaktoren beeinflusst. Sie sollten stets professionellen Rat einholen, um sicherzustellen, dass der Handel oder die Investition in CFD-Instrumente für Ihre Umstände geeignet ist und sicherstellen Sie erhalten, lesen und verstehen alle geltenden Geschäftsbedingungen.",
      "text88": "Allgemeine Geschäftsbedingungen",
      "text89": "Datenschutzrichtlinie",
      "name": "Schließen Sie die Bewertung mit dem SabioTrade-Mentor ab!",
      "title49": "Beginnen Sie zu verdienen",

    }
  };

  $(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  // The default language is English
  var lang = "rulang";
  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });

});

$(document).ready(function () {
  $(".drop").each(function () {
    $(".option").click(function () {
      var val = $(this).attr("data-value"),
        $drop = $(".drop"),
        prevActive = $(".drop .option.active").attr("data-value"),
        options = $(".drop .option").length;

      $drop.toggleClass("visible");
      $drop.removeClass("withBG");
      $(this).css("top");
      $drop.toggleClass("opacity");

      if ($drop.hasClass("visible")) {
        setTimeout(function () {
          $drop.addClass("withBG");
        }, 400 + options * 100);
      }
      if (val !== "placeholder" || prevActive === "placeholder") {
        $(".drop .option").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});
$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0) {
    container.removeClass('visible');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');
});
document.addEventListener("DOMContentLoaded", () => {
  function init() {
    const style = document.documentElement.style;
    const ss = document.getElementById("ss").sheet;
    const langs = document.querySelectorAll("#langs > option");
    for (var i = 0; i < langs.length; i++) {
      ss.insertRule(`[lang=${langs[i].value}] {display: var(--${langs[i].value});}`, i + 1);
      // add CSS rule
      if (langs[i].selected) {
        var display = 'block';
      } else {
        var display = 'none';
      }
      style.setProperty('--' + langs[i].value, display);
      // add CSS variable
    }
    ss.removeRule(0);
    document.getElementById("langs").addEventListener('change', SetLanguage);
  }

  function SetLanguage(value) {
    const selectedLanguage = document.querySelector("#langs").value;
    const langs = document.querySelectorAll("#langs > option");
    for (let lang of langs) {
      if (lang.value == selectedLanguage) {
        var display = 'block';
      } else {
        var display = 'none';
      }
      document.querySelector(':root').style.setProperty('--' + lang.value, display);
    }
  }

  window.addEventListener('load', init);
  function Util() { };
  Util.hasClass = function (el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  };
  Util.addClass = function (el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.add(classList[0]);
    else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
  };
  Util.removeClass = function (el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.remove(classList[0]);
    else if (Util.hasClass(el, classList[0])) {
      var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
    if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
  };
  Util.toggleClass = function (el, className, bool) {
    if (bool) Util.addClass(el, className);
    else Util.removeClass(el, className);
  };
  Util.setAttributes = function (el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };
  Util.getChildrenByClassName = function (el, className) {
    var children = el.children,
      childrenByClass = [];
    for (var i = 0; i < el.children.length; i++) {
      if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
    }
    return childrenByClass;
  };
  Util.is = function (elem, selector) {
    if (selector.nodeType) {
      return elem === selector;
    }
    var qa = (typeof (selector) === 'string' ? document.querySelectorAll(selector) : selector),
      length = qa.length,
      returnArr = [];
    while (length--) {
      if (qa[length] === elem) {
        return true;
      }
    }
    return false;
  };
  Util.setHeight = function (start, to, element, duration, cb) {
    var change = to - start,
      currentTime = null;
    var animateHeight = function (timestamp) {
      if (!currentTime) currentTime = timestamp;
      var progress = timestamp - currentTime;
      var val = parseInt((progress / duration) * change + start);
      element.style.height = val + "px";
      if (progress < duration) {
        window.requestAnimationFrame(animateHeight);
      } else {
        cb();
      }
    };
    element.style.height = start + "px";
    window.requestAnimationFrame(animateHeight);
  };
  Util.scrollTo = function (final, duration, cb) {
    var start = window.scrollY || document.documentElement.scrollTop,
      currentTime = null;
    var animateScroll = function (timestamp) {
      if (!currentTime) currentTime = timestamp;
      var progress = timestamp - currentTime;
      if (progress > duration) progress = duration;
      var val = Math.easeInOutQuad(progress, start, final - start, duration);
      window.scrollTo(0, val);
      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        cb && cb();
      }
    };
    window.requestAnimationFrame(animateScroll);
  };
  Util.moveFocus = function (element) {
    if (!element) element = document.getElementsByTagName("body")[0];
    element.focus();
    if (document.activeElement !== element) {
      element.setAttribute('tabindex', '-1');
      element.focus();
    }
  };
  Util.getIndexInArray = function (array, el) {
    return Array.prototype.indexOf.call(array, el);
  };
  Util.cssSupports = function (property, value) {
    if ('CSS' in window) {
      return CSS.supports(property, value);
    } else {
      var jsProperty = property.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
      return jsProperty in document.body.style;
    }
  };
  Util.extend = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }
    return extended;
  };
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
  if (typeof window.CustomEvent !== "function") {
    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  /**/
  (function () {
    var LanguagePicker = function (element) {
      this.element = element;
      this.select = this.element.getElementsByTagName('select')[0];
      this.options = this.select.getElementsByTagName('option');
      this.selectedOption = getSelectedOptionText(this);
      this.pickerId = this.select.getAttribute('id');
      this.trigger = false;
      this.dropdown = false;
      this.firstLanguage = false;
      // dropdown arrow inside the button element
      this.svgPath = '<svg viewBox="0 0 16 16"><polygon points="3,5 8,11 13,5 "></polygon></svg>';
      initLanguagePicker(this);
      initLanguagePickerEvents(this);
    };

    function initLanguagePicker(picker) {
      // create the HTML for the custom dropdown element
      picker.element.insertAdjacentHTML('beforeend', initButtonPicker(picker) + initListPicker(picker));

      // save picker elements
      picker.dropdown = picker.element.getElementsByClassName('language-picker__dropdown')[0];
      picker.firstLanguage = picker.dropdown.getElementsByClassName('language-picker__item')[0];
      picker.trigger = picker.element.getElementsByClassName('language-picker__button')[0];
    };

    function initLanguagePickerEvents(picker) {
      // make sure to add the icon class to the arrow dropdown inside the button element
      Util.addClass(picker.trigger.getElementsByTagName('svg')[0], 'icon');
      // language selection in dropdown
      // ⚠️ Important: you need to modify this function in production
      initLanguageSelection(picker);

      // click events
      picker.trigger.addEventListener('click', function () {
        toggleLanguagePicker(picker, false);
      });
    };

    function toggleLanguagePicker(picker, bool) {
      var ariaExpanded;
      if (bool) {
        ariaExpanded = bool;
      } else {
        ariaExpanded = picker.trigger.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
      }
      picker.trigger.setAttribute('aria-expanded', ariaExpanded);
      if (ariaExpanded == 'true') {
        picker.firstLanguage.focus(); // fallback if transition is not supported
        picker.dropdown.addEventListener('transitionend', function cb() {
          picker.firstLanguage.focus();
          picker.dropdown.removeEventListener('transitionend', cb);
        });
      }
    };

    function checkLanguagePickerClick(picker, target) { // if user clicks outside the language picker -> close it
      if (!picker.element.contains(target)) toggleLanguagePicker(picker, 'false');
    };

    function moveFocusToPickerTrigger(picker) {
      if (picker.trigger.getAttribute('aria-expanded') == 'false') return;
      if (document.activeElement.closest('.language-picker__dropdown') == picker.dropdown) picker.trigger.focus();
    };

    function initButtonPicker(picker) { // create the button element -> picker trigger
      // check if we need to add custom classes to the button trigger
      var customClasses = picker.element.getAttribute('data-trigger-class') ? ' ' + picker.element.getAttribute('data-trigger-class') : '';

      var button = '<button class="language-picker__button' + customClasses + '" aria-label="' + picker.select.value + ' ' + picker.element.getElementsByTagName('label')[0].innerText + '" aria-expanded="false" aria-contols="' + picker.pickerId + '-dropdown">';
      button = button + '<span aria-hidden="true" class="language-picker__label language-picker__flag language-picker__flag--' + picker.select.value + '"><em>' + picker.selectedOption + '</em>';
      button = button + picker.svgPath + '</span>';
      return button + '</button>';
    };

    function initListPicker(picker) { // create language picker dropdown
      var list = '<div class="language-picker__dropdown" aria-describedby="' + picker.pickerId + '-description" id="' + picker.pickerId + '-dropdown">';
      list = list + '<p class="sr-only" id="' + picker.pickerId + '-description">' + picker.element.getElementsByTagName('label')[0].innerText + '</p>';
      list = list + '<ul class="language-picker__list" role="listbox">';
      for (var i = 0; i < picker.options.length; i++) {
        var selected = picker.options[i].hasAttribute('selected') ? ' aria-selected="true"' : '',
          language = picker.options[i].getAttribute('lang');
        list = list + '<li><a lang="' + language + '" hreflang="' + language + '" href="' + getLanguageUrl(picker.options[i]) + '"' + selected + ' role="option" data-value="' + picker.options[i].value + '" class="language-picker__item language-picker__flag language-picker__flag--' + picker.options[i].value + '"><span>' + picker.options[i].text + '</span></a></li>';
      };
      return list;
    };

    function getSelectedOptionText(picker) { // used to initialize the label of the picker trigger button
      var label = '';
      if ('selectedIndex' in picker.select) {
        label = picker.options[picker.select.selectedIndex].text;
      } else {
        label = picker.select.querySelector('option[selected]').text;
      }
      return label;
    };

    function getLanguageUrl(option) {
      // ⚠️ Important: You should replace this return value with the real link to your website in the selected language
      // option.value gives you the value of the language that you can use to create your real url (e.g, 'english' or 'italiano')
      return '#';
    };

    function initLanguageSelection(picker) {
      picker.element.getElementsByClassName('language-picker__list')[0].addEventListener('click', function (event) {
        var language = event.target.closest('.language-picker__item');
        if (!language) return;

        if (language.hasAttribute('aria-selected') && language.getAttribute('aria-selected') == 'true') {
          // selecting the same language
          event.preventDefault();
          picker.trigger.setAttribute('aria-expanded', 'false'); // hide dropdown
        } else {
          // ⚠️ Important: this 'else' code needs to be removed in production. 
          // The user has to be redirected to the new url -> nothing to do here
          event.preventDefault();
          picker.element.getElementsByClassName('language-picker__list')[0].querySelector('[aria-selected="true"]').removeAttribute('aria-selected');
          language.setAttribute('aria-selected', 'true');
          picker.trigger.getElementsByClassName('language-picker__label')[0].setAttribute('class', 'language-picker__label language-picker__flag language-picker__flag--' + language.getAttribute('data-value'));
          picker.trigger.getElementsByClassName('language-picker__label')[0].getElementsByTagName('em')[0].innerText = language.innerText;
          picker.trigger.setAttribute('aria-expanded', 'false');
        }
      });
    };

    //initialize the LanguagePicker objects
    var languagePicker = document.getElementsByClassName('js-language-picker');
    if (languagePicker.length > 0) {
      var pickerArray = [];
      for (var i = 0; i < languagePicker.length; i++) {
        (function (i) { pickerArray.push(new LanguagePicker(languagePicker[i])); })(i);
      }

      // listen for key events
      window.addEventListener('keyup', function (event) {
        if (event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape') {
          // close language picker on 'Esc'
          pickerArray.forEach(function (element) {
            moveFocusToPickerTrigger(element); // if focus is within dropdown, move it to dropdown trigger
            toggleLanguagePicker(element, 'false'); // close dropdown
          });
        }
      });
      // close language picker when clicking outside it
      window.addEventListener('click', function (event) {
        pickerArray.forEach(function (element) {
          checkLanguagePickerClick(element, event.target);
        });
      });
    }
  }());
});
document.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    var elActive = '';
    $.fn.selectCF = function (options) {

      // option
      var settings = $.extend({
        color: "#888888", // color
        backgroundColor: "#FFFFFF", // background
        change: function () { }, // event change
      }, options);

      return this.each(function () {

        var selectParent = $(this);
        list = [],
          html = '';

        //parameter CSS
        var width = $(selectParent).width();

        $(selectParent).hide();
        if ($(selectParent).children('option').length == 0) { return; }
        $(selectParent).children('option').each(function () {
          if ($(this).is(':selected')) { s = 1; title = $(this).text(); } else { s = 0; }
          list.push({
            value: $(this).attr('value'),
            text: $(this).text(),
            selected: s,
          })
        })

        // style
        var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

        html += "<ul class='selectCF'>";
        html += "<li>";
        html += "<span class='arrowCF ion-chevron-right' style='" + style + "'></span>";
        html += "<span class='titleCF' style='" + style + "; width:" + width + "px'>" + title + "</span>";
        html += "<span class='searchCF' style='" + style + "; width:" + width + "px'><input style='color:" + settings.color + "' /></span>";
        html += "<ul>";
        $.each(list, function (k, v) {
          s = (v.selected == 1) ? "selected" : "";
          html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>";
        })
        html += "</ul>";
        html += "</li>";
        html += "</ul>";
        $(selectParent).after(html);
        var customSelect = $(this).next('ul.selectCF'); // add Html
        var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
        var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
        var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

        // handle active select
        $(customSelect).unbind('click').bind('click', function (e) {
          e.stopPropagation();
          if ($(this).hasClass('onCF')) {
            elActive = '';
            $(this).removeClass('onCF');
            $(this).removeClass('searchActive'); $(seachElInput).val('');
            $(seachElOption).show();
          } else {
            if (elActive != '') {
              $(elActive).removeClass('onCF');
              $(elActive).removeClass('searchActive'); $(seachElInput).val('');
              $(seachElOption).show();
            }
            elActive = $(this);
            $(this).addClass('onCF');
            $(seachEl).children('input').focus();
          }
        })

        // handle choose option
        var optionSelect = $(customSelect).children('li').children('ul').children('li');
        $(optionSelect).bind('click', function (e) {
          var value = $(this).attr('value');
          if ($(this).hasClass('selected')) {
            //
          } else {
            $(optionSelect).removeClass('selected');
            $(this).addClass('selected');
            $(customSelect).children('li').children('.titleCF').html($(this).html());
            $(selectParent).val(value);
            settings.change.call(selectParent); // call event change
          }
        })

        // handle search 
        $(seachEl).children('input').bind('keyup', function (e) {
          var value = $(this).val();
          if (value) {
            $(customSelect).addClass('searchActive');
            $(seachElOption).each(function () {
              if ($(this).text().search(new RegExp(value, "i")) < 0) {
                // not item
                $(this).fadeOut();
              } else {
                // have item
                $(this).fadeIn();
              }
            })
          } else {
            $(customSelect).removeClass('searchActive');
            $(seachElOption).fadeIn();
          }
        })

      });
    };
    $(document).click(function () {
      if (elActive != '') {
        $(elActive).removeClass('onCF');
        $(elActive).removeClass('searchActive');
      }
    })
  }(jQuery));

  $(function () {
    var event_change = $('#event-change');
    $(".select").selectCF({
      change: function () {
        var value = $(this).val();
        var text = $(this).children('option:selected').html();
        console.log(value + ' : ' + text);
        event_change.html(value + ' : ' + text);
      }
    });
  });

});

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons.length; i++) {
      accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
      pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass == "accordeon__button closed") {
      this.className = "accordeon__button active";
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  }
});
document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination1",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 24,
        slidesPerView: 3
      }
    }
  });
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination2",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 24,
        slidesPerView: 4
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Scroll
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});
// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});
