export  const spells: SpellName[] = ["Magic Missles", "Grim Tendrills", "Soothe"];

export const quotes: Quote[] = [
    {text: 'Die Feder ist mächtiger als das Schwert', suitableFor: ['Magic Missles', 'Grim Tendrills']},
    {text: 'Achtung ein dreiköpfiger Affe!', suitableFor: ['Magic Missles']},
    {text: 'Wird schon wieder', suitableFor: ['Soothe']}
]

export type Quote = {
    text: string;
    suitableFor: SpellName[]
}

export type SpellName = "Magic Missles" | "Grim Tendrills"| "Soothe"