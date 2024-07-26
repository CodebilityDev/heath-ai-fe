const langSnippet = {
  mission: {
    label:
      "What is your company's mission statement and what are your chatbot's capabilities? Be clear and concise.",
    placeholder:
      "Ex: Healthcare insurance is complicated for no reason. We use AI to find the best plans for your specific situation. This chatbot acts like a personal insurance agent.",
  },
  tone: {
    label: "Describe the chatbot's ideal tone and style.",
    placeholder: "Ex: Professional, friendly, and informative. Avoid slang.",
  },
  plan: {
    label: "Which plan types should the chatbot prioritize presenting?",
    options: [
      "Silver(Recommended)",
      "Gold",
      "Platinum",
      "Bronze",
      "Extended bronze",
    ],
  },
  carrier: {
    label: "Health Insurance Carriers Selection",
    options: [
      {
        name: "Popular",
        carriers: [
          "Aetna",
          "Blue Cross Blue Shield",
          "Cigna",
          "Humana",
          "Ambetter",
          "UnitedHealthcare",
          "Anthem",
          "Centene",
          "Molina Healthcare",
          "Health Care Service Corporation(HCSC)",
        ],
      },
      {
        name: "Others",
        carriers: [
          "Alliant Health Plans",
          "Ameri",
          "Ascension",
          "AultCare",
          "AvMed",
          "Blue Care Network",
          "Bridge Health",
          "Capital Health",
          "CareSource",
          "Care Health Plan",
          "Chinese Community Health Plan",
          "Christus",
          "Community First Health Plans",
          "Community Health Choice",
          "Cox Health",
          "Delta Dental Insurance Company",
          "Dominion Dental Services Inc.",
          "Educators Health Plans Life. Accident and Health",
          "Health Care Plans",
          "Health First",
          "Health Net",
          "HMO",
          "Imperial Insurance Companies, Inc.",
          "Inland Empire Health Plan",
          "Kaiser",
          "McLaren Health Plan Community",
          "Medica",
          "MedMutual",
          "Moda Health",
          "Octave",
          "Oscar",
          "Paramount Insurance",
          "Physicians Health",
          "Priority Health",
          "QualChoice",
          "Scott and White Health",
          "Select Health",
          "Sendero Health",
          "Sharp Health",
          "Solstice Healthplans",
          "Summa Care",
          "Sutter Health",
          "Truassure Insurance Company",
          "University of Utah Health",
          "US LLandhh ifiUS Health",
          "Valley Health",
          "Vantage Health",
          "Wellcare CoNnn hlf Wellcare of",
          "Wellfirst Health",
          "Western Health",
        ],
      },
    ],
  },
  recommendedPlan: {
    label: "How should the chatbot present plan recommendations?",
    options: ["One best plan and reason why", "The best 3 plans"],
  },
  chatbotQuestion: {
    label:
      "Are there any specific questions or statements you want the chatbot to ask?",
    placeholder: "Ex: Would you like to see if you are eligible for $0/month ?",
  },
  summary: {
    label: "How should the chatbot summarize messages to users? Be specific!",
    placeholder:
      "Ex: Keep summaries brief and easy to read. Don't repeat info.",
  },
  exMessage: {
    label:
      "Define here the behavior of the bot depending on the chat session status.",
    placeholder: `Please respond to user with following format:
If the user doesn't provide zip code, please respond with this format: 'Hey [first name of the user], this is [first and last name of the agent]. Thank you for applying for $0 or low-cost health plans. Could you please provide your zip code?'
If you don't find any matched insurance plans, please respond with this format: 'Hey [first name of the user], this is [first and last name of the agent]. I haven't found any insurance plans that match your criteria.\n\n Could you please provide your requirements in more detail?'
If the user provides zip code, please respond with this format: 'Hey [first name of the user], this is [first and last name of the agent]. Thank you for applying for $0 or low-cost health plans.\n\n I found a $0 plan [the insurance plan name. only the name of insurance plan.] from [the carrier name. only the carrier name], in your zip code [zipcode of user].\n\n Please reach out if you have any other preferences, otherwise, we'll move forward with ensuring you are covered!'
If an API call fails, an error data will be returned indicating what went wrong with the request. As an intelligent agent, you should be able to handle this error by trying to analyze the error message returned by the server and attempting to use other functions that could resolve the issue. If the missing information is not provided, continue the conversation with the focus on completing the required information.'
`,
  },
  welcomeMessage: {
    label:
      "If you have an example of a perfect welcome message, please paste it below.",
    placeholder: `Hey Ryan, this is Dave Jordan. Thank you for applying for $0 or low-cost health plans.

I found several $0 plans that match your criteria in your zip code 75757:

1. CHRISTUS Bronze from CHRISTUS Health Plan.
2. Blue Advantage Bronze HMO℠ 301 from Blue Cross and Blue Shield of Texas.
3. Blue Advantage Bronze HMO℠ 707 from Blue Cross and Blue Shield of Texas.

Please reach out if you have any other preferences, otherwise, we'll move forward with ensuring you are covered!
`,
  },
  noZipMessage: {
    label:
      "If you have an example of a message with no zip code yet. Provide here",
    placeholder: `Hey, this is Dave Jordan. Thank you for applying for $0 or low-cost health plans. Could you please provide your zip code?
`,
  },
};

export default langSnippet;
