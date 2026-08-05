/**
 * Member roster — replace with Supabase queries when auth/data layer is ready.
 * Components consume these arrays directly; swap the source, not the UI.
 *
 * Supabase table shape (members):
 *   id, name, designation, category, responsibility, image, idNumber, phone,
 *   email, bloodGroup, bio, jefPeriod, currentJob,
 *   socials: { facebook, linkedin, instagram }
 */

// ─── Types ─────────────────────────────────────────────────────────────────

export type MemberCategory = 'advisor' | 'moderator' | 'executive' | 'general'

export type Member = {
  id: string
  name: string
  designation: string
  /** Category drives which section the member appears in */
  category: MemberCategory
  image: string
  idNumber: string
  phone: string
  email: string
  bloodGroup: string
  /** Short description of this member's specific role or responsibility */
  responsibility?: string
  bio?: string
  /** Advisor-only: the JEF session period they served, e.g. "2022–2024" */
  jefPeriod?: string
  /** Advisor-only: current professional position */
  currentJob?: string
  socials?: {
    facebook?: string
    linkedin?: string
    instagram?: string
  }
}

// ─── Portrait helpers ───────────────────────────────────────────────────────

const portraitIds = [
  '1507003211169-0a1dd7228f2d',
  '1494790108377-be9c29b29330',
  '1500648767791-00dcc994a43e',
  '1438761681033-6461ffad8d80',
  '1472099645785-5658abf4ff4e',
  '1534528741775-53994a69daeb',
  '1517841909550-4feac47a834d',
  '1506794778202-cad84cf45f1d',
  '1544005313-94ddf0286df2',
  '1560250097-0b93528c311a',
  '1573496359142-b8d87734a5a2',
  '1580489944761-94519e8b67f2',
  '1599566134092-d2924eb19773',
  '1619895862022-09118b169d59',
  '1633332755193-727a05c4013b',
  '1639762681480-074b7f4c0a9c',
  '1649976017211-68c0a0051540',
  '1664575609620-4f4b39c7455f',
]

function portraitUrl(index: number): string {
  const id = portraitIds[index % portraitIds.length]
  return `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop&crop=faces`
}

// ─── Factory ────────────────────────────────────────────────────────────────

function makeMember(
  id: string,
  name: string,
  designation: string,
  category: MemberCategory,
  index: number,
  overrides?: Partial<
    Pick<
      Member,
      | 'idNumber'
      | 'phone'
      | 'email'
      | 'bloodGroup'
      | 'bio'
      | 'responsibility'
      | 'jefPeriod'
      | 'currentJob'
      | 'socials'
    >
  >,
): Member {
  const slug = id.replace(/-/g, '')
  return {
    id,
    name,
    designation,
    category,
    image: portraitUrl(index),
    idNumber: overrides?.idNumber ?? `UIU-${2020 + (index % 5)}-${String(index + 1).padStart(3, '0')}`,
    phone: overrides?.phone ?? `017${String(10000000 + index * 111111).slice(0, 8)}`,
    email: overrides?.email ?? `${slug}@bseco.uiu.ac.bd`,
    bloodGroup: overrides?.bloodGroup ?? ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-'][index % 6],
    bio:
      overrides?.bio ??
      'Dedicated member of UIUJEF, passionate about entrepreneurship, innovation, and empowering the next generation of leaders at United International University.',
    responsibility: overrides?.responsibility,
    jefPeriod: overrides?.jefPeriod,
    currentJob: overrides?.currentJob,
    socials: overrides?.socials ?? {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  }
}

// ─── Advisors ───────────────────────────────────────────────────────────────

export const advisors: Member[] = [
  makeMember(
    'dr-kamrul-hasan',
    'Dr. Kamrul Hasan',
    'Associate Professor, Dept. of Finance',
    'advisor',
    0,
    {
      email: 'kamrulhasan@uiu.ac.bd',
      responsibility: 'Faculty advisor overseeing academic integrity and strategic direction of the club.',
      bio: 'Dr. Kamrul Hasan is an Associate Professor at the Department of Finance, United International University. With over 15 years of academic and industry experience, he has been a guiding force behind UIUJEF since its inception, mentoring students toward impactful careers in finance and entrepreneurship.',
      jefPeriod: '2020 – Present',
      currentJob: 'Associate Professor & Head of Finance, UIU',
    },
  ),
  makeMember(
    'dr-mahfuza-akter',
    'Dr. Mahfuza Akter',
    'Assistant Professor, Dept. of Economics',
    'advisor',
    2,
    {
      email: 'mahfuza@uiu.ac.bd',
      responsibility: 'Guides research initiatives and economic policy discussions within UIUJEF.',
      bio: "Dr. Mahfuza Akter is a passionate educator and researcher specializing in development economics and microfinance. She has served as a faculty advisor for UIUJEF, contributing her expertise in economic empowerment to shape the club's vision.",
      jefPeriod: '2021 – 2024',
      currentJob: 'Senior Research Fellow, BIDS',
    },
  ),
  makeMember(
    'mr-tanvir-hossain',
    'Mr. Tanvir Hossain',
    'Lecturer, Dept. of Business',
    'advisor',
    4,
    {
      email: 'tanvir.hossain@uiu.ac.bd',
      responsibility: 'Coordinates industry linkage programs and alumni engagement for the club.',
      bio: 'Mr. Tanvir Hossain brings a blend of corporate and academic experience to UIUJEF. Having worked in the banking sector before joining academia, he bridges the gap between theoretical knowledge and real-world application.',
      jefPeriod: '2022 – Present',
      currentJob: 'Lecturer, UIU & Business Consultant',
    },
  ),
]

// ─── Moderators ─────────────────────────────────────────────────────────────

export const moderators: Member[] = [
  makeMember(
    'nafisa-anjum',
    'Nafisa Anjum',
    'Club Moderator',
    'moderator',
    5,
    {
      responsibility: 'Oversees all club activities, ensures compliance with university regulations, and acts as the primary liaison between UIUJEF and the university administration.',
      bio: 'Nafisa Anjum is a senior student leader serving as the official Club Moderator for UIUJEF. She manages day-to-day operations, coordinates with faculty advisors, and mentors junior members through their leadership journey.',
    },
  ),
  makeMember(
    'raiyan-chowdhury',
    'Raiyan Chowdhury',
    'Deputy Moderator',
    'moderator',
    6,
    {
      responsibility: 'Supports the Club Moderator in administrative tasks and leads the onboarding process for new members.',
      bio: 'Raiyan Chowdhury is a detail-oriented student leader who ensures smooth execution of all internal processes. He specializes in member engagement and digital communications strategy.',
    },
  ),
]

// ─── Executive Committee ────────────────────────────────────────────────────

export const executiveCommittee: Member[] = [
  makeMember('mustafizur-rahman', 'Mustafizur Rahman', 'President', 'executive', 0, {
    responsibility: 'Leads the overall strategic direction of UIUJEF, chairs all executive meetings, and represents the club at national and international forums.',
  }),
  makeMember('rifat-hossen', 'Rifat Hossen', 'Vice President', 'executive', 1, {
    responsibility: 'Assists the President in strategic planning and oversees departmental coordination across all executive wings.',
  }),
  makeMember('abir-hasan-jisan', 'Abir Hasan Jisan', 'General Secretary (In)', 'executive', 2, {
    responsibility: 'Manages internal correspondence, meeting minutes, and all formal documentation of the club.',
  }),
  makeMember('abirul-islam', 'Abirul Islam', 'General Secretary (Ex)', 'executive', 3, {
    responsibility: 'Handles external communications, partnerships, and inter-club collaborations.',
  }),
  makeMember('jobayda-tasin', 'Jobayda Tasin', 'Treasurer', 'executive', 4, {
    responsibility: 'Manages the club\'s financial accounts, budget planning, and fund allocation for all events.',
  }),
  makeMember('md-arafat-rahman', 'MD. Arafat Rahman', 'Joint Secretary', 'executive', 5, {
    responsibility: 'Supports both the Internal and External General Secretaries and coordinates cross-functional tasks.',
  }),
  makeMember('al-amin-anas', 'Al Amin Anas', 'Organizational Secretary', 'executive', 6, {
    responsibility: 'Plans and coordinates all organizational development initiatives and internal capacity building programs.',
  }),
  makeMember('hk-gufran-hossain-sikder', 'HK Gufran Hossain Sikder', 'Executive of Event', 'executive', 7, {
    responsibility: 'Leads event planning from conception to execution, managing logistics and vendor relations.',
  }),
  makeMember('md-arman-hosen-sarker', 'MD. Arman Hosen Sarker', 'Executive of Event', 'executive', 8, {
    responsibility: 'Coordinates on-ground event management and ensures seamless participant experience.',
  }),
  makeMember('sakib-khan', 'Sakib Khan', 'Executive of Event', 'executive', 9, {
    responsibility: 'Handles venue arrangements, technical setups, and post-event reporting.',
  }),
  makeMember('rajaye-mohammad-rayen', 'Rajaye Mohammad Rayen', 'Executive of Communication', 'executive', 10, {
    responsibility: 'Develops and executes the club\'s communication strategy across all digital channels.',
  }),
  makeMember('rubaiya-nasrin', 'Rubaiya Nasrin', 'Executive of Communication', 'executive', 11, {
    responsibility: 'Manages social media content calendars and crafts compelling narratives for club campaigns.',
  }),
  makeMember('afia-akter', 'Afia Akter', 'Executive of Communication', 'executive', 12, {
    responsibility: 'Handles press releases, newsletters, and internal communications bulletins.',
  }),
  makeMember('saima-farnaz', 'Saima Farnaz', 'Executive of Communication', 'executive', 13, {
    responsibility: 'Manages multimedia content production including photography and videography coordination.',
  }),
  makeMember('suha-hossain', 'Suha Hossain', 'Executive of PR & Marketing', 'executive', 14, {
    responsibility: 'Builds and maintains relationships with sponsors, corporate partners, and media outlets.',
  }),
  makeMember('touhidur-rahman', 'Touhidur Rahman', 'Executive of PR & Marketing', 'executive', 15, {
    responsibility: 'Designs and executes marketing campaigns to enhance the club\'s visibility across campus.',
  }),
  makeMember('maheru-tasnim', 'Maheru Tasnim', 'Executive of PR & Marketing', 'executive', 16, {
    responsibility: 'Manages brand identity, promotional materials, and merchandise design.',
  }),
  makeMember('md-rana-islam-shuvo', 'Md. Rana Islam Shuvo', 'Executive of PR & Marketing', 'executive', 17, {
    responsibility: 'Leads outreach programs and manages ambassador networks within the university.',
  }),
]

// ─── General Members ────────────────────────────────────────────────────────

export const generalMembers: Member[] = [
  makeMember('general-member-1', 'Tahmid Hasan', 'General Member', 'general', 8, {
    responsibility: 'Active participant in event management and community outreach programs.',
  }),
  makeMember('general-member-2', 'Nusrat Jahan', 'General Member', 'general', 9, {
    responsibility: 'Contributes to communication campaigns and social media content creation.',
  }),
  makeMember('general-member-3', 'Ariful Islam', 'General Member', 'general', 10, {
    responsibility: 'Supports PR & Marketing initiatives and on-ground event logistics.',
  }),
  makeMember('general-member-4', 'Sadia Sultana', 'General Member', 'general', 11, {
    responsibility: 'Involved in finance tracking and budget reconciliation for club events.',
  }),
  makeMember('general-member-5', 'Rakibul Hasan', 'General Member', 'general', 12, {
    responsibility: 'Participates in entrepreneurship workshops and mentorship programs.',
  }),
  makeMember('general-member-6', 'Farhana Yeasmin', 'General Member', 'general', 13, {
    responsibility: 'Leads creative design efforts for promotional materials and digital assets.',
  }),
]

// ─── Executive Hierarchy (for Org Chart) ────────────────────────────────────

export type ExecutiveDepartment = {
  id: string
  label: string
  members: Member[]
}

export type ExecutiveHierarchy = {
  president: Member
  vicePresident: Member
  tier3: Member[]
  tier4: Member[]
  departments: ExecutiveDepartment[]
}

function byId(id: string): Member {
  const found = executiveCommittee.find((m) => m.id === id)
  if (!found) throw new Error(`Executive member not found: ${id}`)
  return found
}

/** Structured executive roster for the organizational chart layout. */
export const executiveHierarchy: ExecutiveHierarchy = {
  president: byId('mustafizur-rahman'),
  vicePresident: byId('rifat-hossen'),
  tier3: [
    byId('abir-hasan-jisan'),
    byId('abirul-islam'),
    byId('jobayda-tasin'),
  ],
  tier4: [byId('md-arafat-rahman'), byId('al-amin-anas')],
  departments: [
    {
      id: 'event',
      label: 'Event',
      members: [
        byId('hk-gufran-hossain-sikder'),
        byId('md-arman-hosen-sarker'),
        byId('sakib-khan'),
      ],
    },
    {
      id: 'communication',
      label: 'Communication',
      members: [
        byId('rajaye-mohammad-rayen'),
        byId('rubaiya-nasrin'),
        byId('afia-akter'),
        byId('saima-farnaz'),
      ],
    },
    {
      id: 'pr-marketing',
      label: 'PR & Marketing',
      members: [
        byId('suha-hossain'),
        byId('touhidur-rahman'),
        byId('maheru-tasnim'),
        byId('md-rana-islam-shuvo'),
      ],
    },
  ],
}
