let quizQuestions = [
    {
        question: "The government should increase spending on social welfare programs such as healthcare, education, and housing.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Consider whether you think the government should play a significant role in providing social services, or whether these should be left to the private sector and individual responsibility."
    },
    {
        question: "Wealthy individuals and large corporations should be taxed at a higher rate to redistribute wealth more evenly among the population.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Reflect on whether you believe in progressive taxation to address income inequality, or if you prefer a flatter tax rate to encourage economic growth."
    },
    {
        question: "The government should increase the minimum wage to ensure a living wage for all workers.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Do you think a higher minimum wage is essential for fairness and to reduce poverty, or do you worry it might lead to higher unemployment or negatively impact businesses?"
    },
    {
        question: "The free market, without government intervention, is the best way to govern the economy.",
        type: "economic",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Consider if you favor an economy with minimal regulation that maximizes entrepreneurial freedom, or if you support active government involvement to regulate and guide the economy."
    },
    {
        question: "It is the government's responsibility to create jobs and ensure full employment.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Think about whether job creation should be a direct aim of government policy, or if you believe the private sector should take the lead on employment."
    },
    {
        question: "The government should protect domestic industries by implementing tariffs and quotas on imported goods.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Do you believe that protecting local businesses with tariffs will save jobs, or could it lead to trade wars and higher prices?"
    },
    {
        question: "Major industries such as energy, transportation, and healthcare should be publicly owned and operated.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Consider if you think public ownership is necessary for essential services, or if private ownership leads to better management and efficiency."
    },
    {
        question: "Economic globalization, including the free movement of goods, services, and labor across borders, is beneficial.",
        type: "economic",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Reflect on whether you believe globalization improves economic growth and consumer choice, or if it damages local economies and labor markets."
    },
    {
        question: "Strict regulations on banks and financial institutions are necessary to prevent economic crises.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Think about whether you feel strong oversight is needed to maintain stability, or if regulation stifles financial innovation and growth."
    },
    {
        question: "The government should provide a universal basic income to all citizens regardless of employment status.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Do you agree that a basic income would ensure a safety net for all, or are you concerned it might disincentivize work and be financially unsustainable?"
    },

    {
        question: "The government should enforce stricter laws to ensure equal treatment and opportunities for all citizens, regardless of gender, race, or sexual orientation.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Consider whether you believe that more laws are necessary to promote equality, or if existing laws are sufficient for protecting citizens' rights."
    },
    {
        question: "Strict gun control laws are necessary to improve public safety.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Do you think stricter gun control will lead to a safer society, or do you see it as an infringement on personal freedoms?"
    },
    {
        question: "The government should implement more stringent environmental regulations to combat climate change and protect natural resources.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Reflect on whether you favor aggressive measures to address environmental issues, or if you believe such regulations could harm economic growth."
    },
    {
        question: "Healthcare should be a universal right, and the government should provide it to all citizens free of charge.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Think about whether you support a healthcare system accessible to everyone as a right, or if you prefer a private, market-driven approach."
    },
    {
        question: "Education, including college and university, should be free and funded by the government.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Consider whether you believe in free public education for all levels, or if you think tuition-based higher education is preferable for its quality and efficiency."
    },
    {
        question: "The government should have more open and lenient immigration policies.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Do you believe that more open immigration policies enrich society and the economy, or do you have concerns about the impact of immigration on national resources and identity?"
    },
    {
        question: "The government should actively work to ensure the rights and protections of LGBTQ+ individuals are on par with those of other citizens.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Consider whether you think active government intervention is necessary to protect LGBTQ+ rights, or if you believe current laws are adequate."
    },
    {
        question: "The government should prioritize secular policies even if they conflict with certain religious beliefs.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Reflect on whether you support secular governance that may override religious considerations, or if you believe in the strong influence of religious values in government policy."
    },
    {
        question: "The death penalty should be abolished; no individual should be sentenced to death as a form of punishment.",
        type: "social",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Think about whether you view the death penalty as an inhumane practice that should be stopped, or as a necessary measure for the gravest crimes."
    },
    {
        question: "The government should have the ability to restrict speech and media in certain cases for the greater good of society.",
        type: "social",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Do you agree with restrictions on speech and media to protect societal well-being, or do you prioritize absolute freedom of expression?"
    }
];

const politicalAffiliations = {
    economic: [
        { min: -10, max: -7.5, label: "Communist" },
        { min: -7.49, max: -4.5, label: "Socialist" },
        { min: -4.49, max: -1.5, label: "Social Democrat" },
        { min: -1.49, max: 1.49, label: "Centrist" },
        { min: 1.5, max: 4.5, label: "Moderate Capitalist" },
        { min: 4.51, max: 7.5, label: "Free Market Capitalist" },
        { min: 7.51, max: 10, label: "Laissez-Faire Capitalist" }
    ],
    social: [
        { min: -10, max: -7.5, label: "Traditionalist" },
        { min: -7.49, max: -4.5, label: "Social Conservative" },
        { min: -4.49, max: -1.5, label: "Moderate Conservative" },
        { min: -1.49, max: 1.49, label: "Centrist" },
        { min: 1.5, max: 4.5, label: "Social Liberal" },
        { min: 4.51, max: 7.5, label: "Progressive" },
        { min: 7.51, max: 10, label: "Radical Progressive" }
    ]
};

const getPoliticalClassification = (economicScore, socialScore) => {
    const getAffiliation = (score, type) => {
        const category = politicalAffiliations[type].find(range => score >= range.min && score <= range.max);
        return category ? category.label : "Unknown";
    };

    let economicAffiliation = getAffiliation(economicScore, "economic");
    let socialAffiliation = getAffiliation(socialScore, "social");

    return {
        economicAffiliation,
        socialAffiliation,
        economicScore,
        socialScore,
    };
}

export { quizQuestions, getPoliticalClassification };