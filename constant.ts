type NavItem = {
  name: string;
};

export const NAV_ITEM: NavItem[] = [
  {
    name: "home",
  },
  {
    name: "destinations",
  },
  {
    name: "about",
  },
  {
    name: "services",
  },
];

type Feature = {
  imgPath: string;
  name: string;
  description: string;
  keyFeature: boolean;
};

export const FEATURE: Feature[] = [
  {
    imgPath:
      "https://images.unsplash.com/photo-1613638377394-281765460baa?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Taxi",
    description: "waka jfihfh fnhf nifnh hifhr hhgf fwege.",
    keyFeature: true,
  },
  {
    imgPath: "/Food.png",
    name: "Scams",
    description: "waka jfihfh fnhf nifnh hifhr hhgf fwege.",
    keyFeature: false,
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hotel",
    description: "waka jfihfh fnhf nifnh hifhr hhgf fwege.",
    keyFeature: true,
  },
  {
    imgPath:
      "https://plus.unsplash.com/premium_photo-1677353359801-cd7127e5b828?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Helpline",
    description: "waka jfihfh fnhf nifnh hifhr hhgf fwege.",
    keyFeature: false,
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1981&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Food",
    description: "waka jfihfh fnhf nifnh hifhr hhgf fwege.",
    keyFeature: true,
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1519709042477-8de6eaf1fdc5?auto=format&fit=crop&q=80&w=2127&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Destination",
    description: "waka jfihfh fnhf nifnh hifhr hhgf fwege.",
    keyFeature: true,
  },
];
