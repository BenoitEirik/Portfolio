interface SkillLevel {
  level: number;
  title: string;
  description: string;
}

export const skillLevels: SkillLevel[] = [
  {
    level: 1,
    title: 'Notions de base',
    description: 'Tu as acquis quelques connaissances théoriques et pratiques, mais tu n\'as pas encore beaucoup d\'expérience.'
  },
  {
    level: 2,
    title: 'Débutant',
    description: 'Tu as déjà utilisé la compétence dans un cadre limité, tu connais les concepts principaux et sais les appliquer avec un soutien ou des recherches.'
  },
  {
    level: 3,
    title: 'Intermédiaire',
    description: 'Tu maîtrises la compétence de manière autonome dans des contextes variés, mais tu rencontres encore parfois des défis ou des inconnus.'
  },
  {
    level: 4,
    title: 'Avancé',
    description: 'Tu es à l\'aise avec la compétence dans des situations complexes, tu peux guider d\'autres personnes et résoudre des problèmes plus difficiles.'
  },
  {
    level: 5,
    title: 'Expert',
    description: 'Tu maîtrises complètement la compétence, tu connais les meilleures pratiques, et tu peux enseigner ou innover dans ce domaine.'
  }
];
