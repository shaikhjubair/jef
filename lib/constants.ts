/**
 * Valid UIU student email domains for registration gating.
 * Use with Supabase Auth or any sign-up flow to restrict access to UIU students.
 */
export const UIU_STUDENT_EMAIL_DOMAINS = [
  '@bseee.uiu.ac.bd',
  '@bsce.uiu.ac.bd',
  '@bba.uiu.ac.bd',
  '@bbaais.uiu.ac.bd',
  '@bseco.uiu.ac.bd',
  '@baeng.uiu.ac.bd',
  '@bsds.uiu.ac.bd',
  '@mba.uiu.ac.bd',
  '@emba.uiu.ac.bd',
  '@mscse.uiu.ac.bd',
  '@mseee.uiu.ac.bd',
  '@mihrm.uiu.ac.bd',
  '@mds.uiu.ac.bd',
] as const

export type UiuStudentEmailDomain = (typeof UIU_STUDENT_EMAIL_DOMAINS)[number]

/** Returns true when the email ends with a recognized UIU student domain. */
export function isValidUiuStudentEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase()
  if (!normalized.includes('@')) return false
  return UIU_STUDENT_EMAIL_DOMAINS.some((domain) => normalized.endsWith(domain))
}
