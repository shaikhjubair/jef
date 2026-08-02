/**
 * Member roster — replace with Supabase queries when auth/data layer is ready.
 * Components consume these arrays directly; swap the source, not the UI.
 */

export type Member = {
  id: string
  name: string
  designation: string
  image: string
  idNumber: string
  phone: string
  email: string
  bloodGroup: string
}

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
  return `https://images.unsplash.com/photo-${id}?w=200&h=200&fit=crop&crop=faces`
}

function member(
  id: string,
  name: string,
  designation: string,
  index: number,
  overrides?: Partial<Pick<Member, 'idNumber' | 'phone' | 'email' | 'bloodGroup'>>,
): Member {
  const slug = id.replace(/-/g, '')
  return {
    id,
    name,
    designation,
    image: portraitUrl(index),
    idNumber: overrides?.idNumber ?? `UIU-${2020 + (index % 5)}-${String(index + 1).padStart(3, '0')}`,
    phone: overrides?.phone ?? `017${String(10000000 + index * 111111).slice(0, 8)}`,
    email: overrides?.email ?? `${slug}@bseco.uiu.ac.bd`,
    bloodGroup: overrides?.bloodGroup ?? ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-'][index % 6],
  }
}

export const executiveCommittee: Member[] = [
  member('mustafizur-rahman', 'Mustafizur Rahman', 'President', 0),
  member('rifat-hossen', 'Rifat Hossen', 'Vice President', 1),
  member('abir-hasan-jisan', 'Abir Hasan Jisan', 'General Secretary (In)', 2),
  member('abirul-islam', 'Abirul Islam', 'General Secretary (Ex)', 3),
  member('jobayda-tasin', 'Jobayda Tasin', 'Treasurer', 4),
  member('md-arafat-rahman', 'MD. Arafat Rahman', 'Joint Secretary', 5),
  member('al-amin-anas', 'Al Amin Anas', 'Organizational Secretary', 6),
  member('hk-gufran-hossain-sikder', 'HK Gufran Hossain Sikder', 'Executive of Event', 7),
  member('md-arman-hosen-sarker', 'MD. Arman Hosen Sarker', 'Executive of Event', 8),
  member('sakib-khan', 'Sakib Khan', 'Executive of Event', 9),
  member('rajaye-mohammad-rayen', 'Rajaye Mohammad Rayen', 'Executive of Communication', 10),
  member('rubaiya-nasrin', 'Rubaiya Nasrin', 'Executive of Communication', 11),
  member('afia-akter', 'Afia Akter', 'Executive of Communication', 12),
  member('saima-farnaz', 'Saima Farnaz', 'Executive of Communication', 13),
  member('suha-hossain', 'Suha Hossain', 'Executive of PR & Marketing', 14),
  member('touhidur-rahman', 'Touhidur Rahman', 'Executive of PR & Marketing', 15),
  member('maheru-tasnim', 'Maheru Tasnim', 'Executive of PR & Marketing', 16),
  member('md-rana-islam-shuvo', 'Md. Rana Islam Shuvo', 'Executive of PR & Marketing', 17),
]

export const generalMembers: Member[] = [
  member('general-member-1', 'General Member 1', 'General Member', 0),
  member('general-member-2', 'General Member 2', 'General Member', 1),
  member('general-member-3', 'General Member 3', 'General Member', 2),
]

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
