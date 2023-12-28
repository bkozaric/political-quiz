let quizQuestions = [
    {
        question: "The government should increase spending on social welfare programs such as healthcare, education, and housing.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Consider whether you think the government should play a significant role in providing social services, or whether these should be left to the private sector and individual responsibility.",
        hintLong: "The question of whether the government should increase spending on social welfare programs like healthcare, education, and housing revolves around a fundamental choice. On one hand, government involvement can ensure universal access, reduce inequality, and provide stability, but it may come with higher costs and bureaucratic inefficiencies. On the other hand, relying on the private sector and individual responsibility can offer choice, competition, and cost control, but may lead to unequal access, unaffordability for some, and potential market failures. The decision hinges on striking a balance between societal needs and individual freedoms, considering pros and cons on both sides of the debate."
    },
    {
        question: "Wealthy individuals and large corporations should be taxed at a higher rate to redistribute wealth more evenly among the population.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Reflect on whether you believe in progressive taxation to address income inequality, or if you prefer a flatter tax rate to encourage economic growth.",
        hintLong: "The question of whether wealthy individuals and large corporations should face higher taxes to redistribute wealth centers on a key policy choice. Advocates for progressive taxation argue that it can mitigate income inequality by ensuring that those who earn more contribute a larger share, which can fund social programs and reduce disparities. However, opponents may favor a flatter tax rate, asserting that it incentivizes economic growth and entrepreneurship by reducing the tax burden on high earners, potentially encouraging investment and job creation. The decision hinges on a balance between wealth redistribution and economic incentives, with pros and cons on each side of the debate."
    },
    {
        question: "The government should increase the minimum wage to ensure a living wage for all workers.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Do you think a higher minimum wage is essential for fairness and to reduce poverty, or do you worry it might lead to higher unemployment or negatively impact businesses?",
        hintLong: "The question of whether the government should raise the minimum wage to guarantee a living wage for all workers revolves around a significant policy choice. Advocates for a higher minimum wage argue that it is essential for fairness, as it can help reduce poverty and ensure that workers earn enough to cover basic living expenses. However, opponents may express concerns that an increase could lead to higher unemployment rates as businesses might struggle to afford the higher labor costs, potentially impacting economic stability. The decision hinges on balancing fairness and poverty reduction with the potential consequences for employment and business sustainability, presenting pros and cons on both sides of the debate."
    },
    {
        question: "The free market, without government intervention, is the best way to govern the economy.",
        type: "economic",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Consider if you favor an economy with minimal regulation that maximizes entrepreneurial freedom, or if you support active government involvement to regulate and guide the economy.",
        hintLong: "The question of whether the free market, without government intervention, should govern the economy is a fundamental policy choice. Advocates for minimal regulation argue that it maximizes entrepreneurial freedom, encourages innovation, and can lead to efficient resource allocation. However, those in favor of active government involvement argue it's necessary to regulate and guide the economy, ensuring fairness, stability, and addressing market failures. The decision hinges on a balance between entrepreneurial freedom and the government's role in promoting economic fairness and stability, presenting pros and cons on both sides of the debate."
    },
    {
        question: "It is the government's responsibility to create jobs and ensure full employment.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Think about whether job creation should be a direct aim of government policy, or if you believe the private sector should take the lead on employment.",
        hintLong: "The question of whether it's the government's job to create jobs and guarantee that everyone has work is a significant policy choice. Some argue that the government should actively work to create jobs as a key goal of its policies, aiming to make sure as many people as possible have employment. On the other hand, some believe that the private sector, like businesses, should be the primary driver of job opportunities, with the government playing a less direct role. This debate revolves around how much responsibility the government should have in job creation and whether the private sector can lead the way in employment generation, and it comes with various pros and cons on each side."
    },
    {
        question: "The government should protect domestic industries by implementing tariffs and quotas on imported goods.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Do you believe that protecting local businesses with tariffs will save jobs, or could it lead to trade wars and higher prices?",
        hintLong: "The question of whether the government should safeguard local industries by imposing tariffs and quotas on imported products is a significant policy decision. Some argue that protecting local businesses with tariffs can help preserve jobs and industries by making foreign products more expensive. On the flip side, there are concerns that this could trigger trade conflicts with other countries, potentially harming the economy, and might also result in higher prices for consumers. This debate revolves around the balance between protecting domestic industries and the potential consequences, including trade tensions and increased costs, and it presents pros and cons on both sides of the argument."
    },
    {
        question: "Major industries such as energy, transportation, and healthcare should be publicly owned and operated.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Consider if you think public ownership is necessary for essential services, or if private ownership leads to better management and efficiency.",
        hintLong: "The question of whether major industries like energy, transportation, and healthcare should be owned and run by the government is a significant policy decision. Some argue that public ownership is necessary for essential services to ensure that everyone can access them and that they are managed in the best interests of the public. It's like saying these are like public parks, and everyone should have equal access. Others believe that private companies are more efficient at managing these industries, leading to better quality and innovation, similar to how different stores can offer unique products. This debate revolves around the balance between public and private ownership in major industries and the potential benefits and drawbacks of each approach."
    },
    {
        question: "Economic globalization, including the free movement of goods, services, and labor across borders, is beneficial.",
        type: "economic",
        calculatePoints: response => response === 5 ? 1 : response === 4 ? 0.5 : response === 2 ? -0.5 : response === 1 ? -1 : 0,
        hint: "Reflect on whether you believe globalization improves economic growth and consumer choice, or if it damages local economies and labor markets.",
        hintLong: "The question of economic globalization, which involves the free flow of goods, services, and people across borders, is a complex issue. Some argue that globalization is beneficial because it can boost economic growth and offer consumers a wider range of choices. It's akin to having access to various products and services from different parts of the world. However, others express concerns that globalization can have negative effects on local economies and job markets. It's similar to the idea that when products and workers from other countries enter a local market, it can impact local businesses and employment. People have different viewpoints on whether globalization is a positive or negative force."
    },
    {
        question: "Strict regulations on banks and financial institutions are necessary to prevent economic crises.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Think about whether you feel strong oversight is needed to maintain stability, or if regulation stifles financial innovation and growth.",
        hintLong: "The question of whether there should be stringent rules for banks and financial institutions is important. Some argue that strict regulations are necessary to keep the financial system stable and prevent economic crises, similar to having referees in a game to ensure fair play. They believe this oversight is crucial. However, others contend that too many rules can stifle innovation and slow down economic growth, just as too many rules in a game might make it less fun. This debate is about finding the right balance between strong oversight for financial stability and allowing room for innovation and growth, and there are pros and cons on both sides of the argument."
    },
    {
        question: "The government should provide a universal basic income to all citizens regardless of employment status.",
        type: "economic",
        calculatePoints: response => response === 1 ? 1 : response === 2 ? 0.5 : response === 4 ? -0.5 : response === 5 ? -1 : 0,
        hint: "Do you agree that a basic income would ensure a safety net for all, or are you concerned it might disincentivize work and be financially unsustainable?",
        hintLong: "The question of whether the government should offer a universal basic income to every citizen, regardless of their job situation, is a significant one. Some argue that a basic income would create a safety net for everyone, ensuring that no one falls into poverty, similar to having a safety cushion. However, others worry that it could discourage people from working and might be too expensive for the government to maintain. It's a debate about finding the right balance between providing financial security for all and addressing concerns about work incentives and affordability, with both sides presenting valid arguments."
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