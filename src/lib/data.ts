export const personalData = {
	name: 'Nils Janosch Schlegel',
	title: 'Full-Stack Developer',
	bio: 'A passionate developer creating modern, beautiful, and functional web experiences. I am always looking for new challenges and opportunities to learn and grow.',
	email: 'me@nilsschlegel.dev',
	socials: {
		github: 'https://github.com/NilsJanoschSchlegel',
		linkedin: '#',
		twitter: '#'
	},
	funFacts: [
		"I can solve a Rubik's cube in under 30 seconds.",
		'I went to Eastbourne (UK) for a month.',
		'My favorite country is sweden.'
	]
};

export const skills = [
	'Svelte',
	'TypeScript',
	'JavaScript',
	'Node.js',
	'bun',
	'Python',
	'React',
	'Next.js',
	'GSAP',
	'TailwindCSS',
	'PostgreSQL',
	'Docker',
	'Kotlin',
	'Bash',
	'Git',
	'Linux',
	'HTML',
	'CSS',
	'Markdown',
	'JSON',
	'XML',
	'YAML',
	'SQL',
	'NoSQL',
	'REST',
	'GraphQL',
	'C',
	'C++',
	'Java',
	'Go',
	'Rust'
];

export type Project = {
	title: string;
	description: string;
	technologies: string[];
	link: string;
};

export const projects: Project[] = [
	{
		title: 'Portfolio Website',
		description: 'A personal portfolio website to showcase my projects and skills.',
		technologies: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Bits UI'],
		link: 'https://nilsschlegel.dev'
	}
];

export const experience = [
	{
		company: 'Primary School Gossau SG',
		role: 'Student',
		period: '2014 - 2020',
		description: 'Completed primary education with a focus on foundational skills and teamwork.'
	},
	{
		company: 'Secondary School Gossau SG',
		role: 'Student',
		period: '2020 - 2023',
		description:
			'Completed secondary education with a focus on academic goals and finding my passion.'
	},
	{
		company: 'Abacus Research AG',
		role: 'Apprentice',
		period: 'Summer 2023 - Present',
		description: 'Worked on developing the ERP System of Abacus Research AG.'
	}
];
