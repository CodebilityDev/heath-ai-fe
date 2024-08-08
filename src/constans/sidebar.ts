export const sidebarLinks = (args: { groupID: string }) => [
  {
    category: "GHL Application",
    links: [
      {
        name: "Dashboard",
        icon: "/svgs/link1.svg",
        to: `/app/view/${args.groupID}`,
      },
      {
        name: "Welcome Messages",
        icon: "/svgs/link1.svg",
        to: `/app/view/${args.groupID}/welcome`,
      },
      {
        name: "Auto Reply",
        icon: "/svgs/link1.svg",
        to: `/app/view/${args.groupID}/autoreply`,
      },
    ],
  },
  {
    category: "Bot Settings",
    links: [
      {
        name: "General Settings",
        icon: "/svgs/link2.svg",
        to: `/app/view/${args.groupID}/general-settings`,
      },
      {
        name: "Queued Messages",
        icon: "/svgs/link2.svg",
        to: `/app/view/${args.groupID}/queued-messages`,
      },
      {
        name: "Custom Fields",
        icon: "/svgs/link2.svg",
        to: `/app/view/${args.groupID}/custom-fields`,
      },
    ],
  },
  {
    category: "General Tools",
    links: [
      {
        name: "Shareable Chatbot Page",
        icon: "/svgs/link2.svg",
        to: "",
        type: "btn",
      },
    ],
  },
  {
    category: "Marketing",
    links: [
      {
        name: "Conversational Chat Builder",
        icon: "/svgs/link3.svg",
        to: `/app/view/${args.groupID}/conversationalchatbuilder`,
      },
      {
        name: "Insights",
        icon: "/svgs/link4.svg",
        to: "",
      },
      {
        name: "Analytics Tool",
        icon: "/svgs/link5.svg",
        to: "",
      },
      {
        name: "Branding",
        icon: "/svgs/link6.svg",
        to: `/app/view/${args.groupID}/branding`,
      },
    ],
  },
  {
    category: "Settings",
    links: [
      {
        name: "Username",
        icon: "/svgs/link7.svg",
        to: "",
      },
      {
        name: "Password",
        icon: "/svgs/link8.svg",
        to: "",
      },
      {
        name: "Open AI Keys",
        icon: "/svgs/link9.svg",
        to: "",
        type: "btn",
      },
      {
        name: "Health sherpa excel exports",
        icon: "/svgs/link9.svg",
        to: "",
        type: "btn",
      },
    ],
  },
];
