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
    {
        name: "Inspire Courage",
        level: 0,
        category: "Inspire"
    },
    {
        name: "Inspire Competence",
        level: 0,
        category: "Inspire"
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
    {
        text: "Oft verliert man das Gute, wenn man das Bessere sucht.",
        suitableFor: ["Know Direction"]
    },
    {
        text: "Wege entstehen dadurch, dass wir sie gehen.",
        suitableFor: ["Know Direction"]
    },
    {
        text: "Manchmal zeigt sich der Weg erst, wenn man anfängt ihn zu gehen.",
        suitableFor: ["Know Direction"]
    },
    {
        text: "Du musst nur die Laufrichtung ändern, sagte die Katze zur Maus und fraß sie.",
        suitableFor: ["Know Direction"]
    },
    {
        text: "Wenn man einen falschen Weg einschlägt, verirrt man sich umso mehr, je schneller man geht.",
        suitableFor: ["Know Direction"]
    },
    {
        text: "Wer nicht weiß, wohin er geht, ist nicht aufzuhalten.",
        suitableFor: ["Know Direction"]
    },
    {
        text: "Der Wanderer muß nicht nur den Weg, sondern auch den Horizont dahinter sehen.",
        suitableFor: ["Know Direction"]
    },
    {
        text:"Wenn du nicht weißt, wo du hin willst, führen dich alle Wege dorthin!",
        suitableFor: ["Know Direction"]
    },
    {
        text:"Alles was du sagst, sollte wahr sein. Aber nicht alles was wahr ist, solltest du auch sagen.",
        suitableFor:["Message"]
    },
    {
        text: "Die größte Ehre, die man einem Menschen antun kann, ist die, dass man zu ihm Vertrauen hat.",
        suitableFor: ["Message"]
    },
    {
        text: "Man braucht zwei Jahre um sprechen zu lernen und fünfzig, um schweigen zu lernen.",
        suitableFor: ["Message"]
    },
    {
        text: "Besser schweigen und als Narr scheinen, als sprechen und jeden Zweifel beseitigen.",
        suitableFor: ["Message"]
    },
    {
        text:"Rüstung: die Kleidung eines Mannes, dessen Schneider ein Schmied ist.",
        suitableFor: ["Shield"]
    },
    {
        text: "Dicke Baumrinden geben alten Bäumen Schutz.",
        suitableFor: ["Shield"]
    },
    {
        text: "Es ist nur verständlich, dass die Wölfe die Abrüstung der Schafe verlangen, denn deren Wolle setzt dem Biss einen gewissen Widerstand entgegen.",
        suitableFor: ["Shield"]
    },
    {
        text: "Eine alte Hecke gibt besseren Schutz als ein neugepflanzter Wald.",
        suitableFor: ["Shield"]
    },
    {
        text: "Stärke wächst nicht aus körperlicher Kraft - vielmehr aus unbeugsamen Willen.",
        suitableFor: ["Forbidding Ward"]
    },
    {
        text: "Im Leben kommt es darauf an, Hammer oder Amboss zu sein - aber niemals das Material dazwischen.",
        suitableFor: ["Forbidding Ward"]
    },
    {
        text: "Ein wahrhaft großer Mann wird weder einen Wurm zertreten noch vor dem Kaiser kriechen.",
        suitableFor:  ["Forbidding Ward"]
    },
    {
        text: "Unser bester Schutz sind stets wir selbst.",
        suitableFor: ["Forbidding Ward"]
    },
    {
        text: "Glücklich wer das, was er liebt, auch wagt, mit Mut zu beschützen.",
        suitableFor: ["Forbidding Ward"]
    },
    {
        text: "Gegner bedürfen einander oft mehr als Freunde, denn ohne Wind gehen keine Mühlen.",
        suitableFor: ["Mental"]
    },
    {
        text: "Nicht den Tod sollte man fürchten, sondern dass man nie beginnen wird, zu leben.",
        suitableFor: ["Mental"]
    },
    {
        text: "Was man mit Gewalt gewinnt, kann man nur mit Gewalt behalten.",
        suitableFor: ["Mental"]
    },
    {
        text: "Die große Stärke der Narren ist es, dass sie keine Angst haben, Dummheiten zu sagen.",
        suitableFor: ["Mental", "Daze"]
    },
    {
        text: "Wer durch das Schwert lebt wird durch das Schwert sterben.",
        suitableFor: ["Fear"]
    },
    {
        text: "Mancher wird erst mutig, wenn er keinen anderen Ausweg mehr sieht.",
        suitableFor: ["Fear"]
    },
    {
        text: "Heldenhaftigkeit ist eine Todesart, keine Lebensart.",
        suitableFor: ["Fear"]
    },
    {
        text: "Kein Übel ist so groß, dass es nicht von einem neuen übertroffen werden könnte.",
        suitableFor: ["Grim Tendrills", "Worms Repast"]
    },
    {
        text: "Wer nicht hören will muss fühlen. ",
        suitableFor: ["Damage"]
    },
    {
        text: "Was fallen muss, fällt ohne Schuss.",
        suitableFor: ["Grim Tendrills", "Magic Missles"]
    },
    {
        text: "Eine Wunde von Worten geschlagen, ist schlimmer als eine Wunde, die das Schwert schlägt.",
        suitableFor: ["Damage"]
    },
    {
        text: "Der Tod lächelt uns alle an, das einzige was man machen kann ist zurücklächeln!",
        suitableFor: ["Heal"]
    },
    {
        text: "Was mich nicht umbringt, macht mich stärker.",
        suitableFor: ["Heal"]
    }, 
    {
        text: "Die Kunst ist, einmal mehr aufzustehen, als man umgeworfen wird.",
        suitableFor: ["Heal"]
    },
    {
        text: "Trage und Dulde: dir wird dieser Schmerz dereinst noch nutzen",
        suitableFor: ["Heal"]
    },
    {
        text: "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.",
        suitableFor: ["Inspire"]
    },
    {
        text: "Gebeugt erst zeigt der Bogen seine Kraft.",
        suitableFor: ["Inspire"]
    },
    {
        text: "Ein Held ist einer, der tut, was er kann. Die anderen tun es nicht.",
        suitableFor: ["Inspire"]
    },
    {
        text: "Wünsche dir nicht, dass es einfacher wäre. Wünsche dir, dass du besser darin wirst.",
        suitableFor: ["Inspire"]
    },
    {
        text: "Du musst genau das machen, wovon du glaubst: Das kann man nicht machen.",
        suitableFor: ["Inspire"]
    },
    {
        text: "Hindernisse und Schwierigkeiten sind Stufen, auf denen wir in die Höhe steigen.",
        suitableFor: [ "Inspire"]
    },
    {
        text: "Alle Träume können wahr werden, wenn wir den Mut haben, ihnen zu folgen.",
        suitableFor: ["Inspire"]
    },
    {
        text: "Wer Großes versucht, ist bewundernswert, auch wenn er fällt.",
        suitableFor: ["Inspire"]
    },
    {
        text: "Niemand weiß, was er kann, bevor er es versucht.",
        suitableFor: ["Inspire"]
    },
    {
        text:"Was wäre das Leben, hätten wir nicht den Mut, etwas zu riskieren?",
        suitableFor: ["Inspire"]
    },
    {
        text: "Einen Kampf gewinnt man nicht allein durch die Bereitschaft zu sterben, sondern durch die Bereitschaft zu kämpfen!",
        suitableFor: ["Inspire"]
    },
    {
        text: "Wer sich von der Wahrheit nicht besiegen lässt, der wird vom Irrtum besiegt.",
        suitableFor: ["Counterperformance"]
    },
    {
        text: "Die große Stärke der Narren ist es, dass sie keine Angst haben, Dummheiten zu sagen.",
        suitableFor: ["Counterperformance"]
    }, {
        text: "Keiner sollte eine Drohung aussprechen, die er nicht halten kann. Das macht einen schwach",
        suitableFor: ["Counterperformance"]
    }
]

export type Quote = {
    text: string;
    suitableFor: (SpellName | SpellCategory)[]
}

export type SpellName = "Magic Missles" | "Grim Tendrills"| "Soothe" | "Know Direction" | "Message" | "Shield" | "Forbidding Ward" | "Daze" | "Fear" | "Counterperformance" | "Dispel Magic" | "Worms Repast" | "Inspire Courage" | "Inspire Competence"
export type SpellCategory = "Support" | "Damage" | "Heal" | "Mental" | "Protection" | "Inspire"


export type Spell = {
    name: SpellName;
    level: number,
    category: SpellCategory;
}