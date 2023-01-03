export  const spells: Spell[] = [
    //Cantrip
    {
        name: "Know Direction",
        level: 0,
        category: "Support"
    },
    {
        name: "Daze",
        level: 0,
        category: "Mental"
    },
    {
        name: "Message",
        level: 0,
        category: "Support",
    },
    {
        name: "Shield",
        level: 0,
        category: "Protection"
    },

    // Level 1
    {
        name: "Magic Missles",
        level: 1,
        category: "Damage"
    },
    {
        name: "Grim Tendrills",
        level: 1,
        category: "Damage"
    },
    {
        name: "Soothe",
        level: 1,
        category: "Heal"
    },
    {
        name: "Fear",
        level: 1,
        category: "Mental"
    },
    //Level 2
    {
        name: "Dispel Magic",
        level: 2,
        category: "Mental"
    },
    {
        name: "Worms Repast",
        level: 2,
        category: "Damage"
    }
];

export const quotes: Quote[] = [
    {text: 'Die Feder ist mächtiger als das Schwert', suitableFor: ['Magic Missles', 'Grim Tendrills']},
    {text: 'Achtung ein dreiköpfiger Affe!', suitableFor: ['Magic Missles']},
    {text: 'Wird schon wieder', suitableFor: ['Soothe']}
]

export type Quote = {
    text: string;
    suitableFor: (SpellName | SpellCategory)[]
}

export type SpellName = "Magic Missles" | "Grim Tendrills"| "Soothe" | "Know Direction" | "Message" | "Shield" | "Forbidding Ward" | "Daze" | "Fear" | "Counterperformance" | "Dispel Magic" | "Worms Repast"
export type SpellCategory = "Support" | "Damage" | "Heal" | "Mental" | "Protection"


export type Spell = {
    name: SpellName;
    level: number,
    category: SpellCategory;
}