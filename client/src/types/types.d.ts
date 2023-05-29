export type Stack =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'mobile'
  | 'devops'
  | 'data'
  | 'otro'

export type Technology = 'react' | 'vue' | 'qwik' | 'angular' | 'svelte'
export type Illustrations = 'error' | 'evaluation'
export type Social = 'web' | 'linkedin' | 'message'

export type Job = {
  id: number
  id_infojobs: string
  title: string
  description: string
  company: string
  city: string
  stack: Stack
  skills: Technology[] | string[]
  url: string
  min_salary?: string
  max_salary?: string
  createdAt: string
  remote?: boolean
  is_active?: boolean
}

export type GraphColors =
  | 'slate'
  | 'violet'
  | 'indigo'
  | 'rose'
  | 'cyan'
  | 'amber'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'sky'
  | 'blue'
  | 'purple'
  | 'fuchsia'
  | 'pink'

interface KeyValue {
  id: number
  value: string
}

interface Money {
  amount: number
  amountId: number
  periodId: number
  periodValue: string
  amountValue: string
}

interface Profile {
  id: string
  name: string
  description: string
  province: KeyValue
  web: string
  numberWorkers: number
  logoUrl: string
  url: string
  corporateWebsiteUrl: string
  websiteUrl: string
  hidden: boolean
  typeIndustry: KeyValue
  country: KeyValue
  corporateResponsive: boolean
  showCorporativeHeader: boolean
  clientId: number
  followable: boolean
}

interface Skill {
  skill: string
}

interface Upsellings {
  highlightHomeMonth: boolean
  highlightHomeWeek: boolean
  highlightSubcategory: boolean
  highlightLogo: boolean
  highlightColor: boolean
  highlightUrgent: boolean
  highlightStandingOffer: boolean
}

export interface JobSpecific {
  title: string
  id: string
  state: number
  creationDate: string
  updateDate: string
  city: string
  externalUrlForm: string
  blocked: boolean
  applications: number
  province: KeyValue
  experienceMin: KeyValue
  category: KeyValue
  subcategory: KeyValue
  studiesMin: KeyValue
  residence: KeyValue
  country: KeyValue
  contractType: KeyValue
  journey: KeyValue
  subSegment: number
  profile: Profile
  cityPD: number
  zipCode: string
  latitude: number
  longitude: number
  exactLocation: boolean
  department: string
  vacancies: number
  minRequirements: string
  description: string
  desiredRequirements: string
  commissions: string
  contractDuration: string
  referenceId: string
  detailedStudiesId: number
  studying: boolean
  showPay: boolean
  multiProvince: boolean
  maxPay: Money
  minPay: Money
  schedule: string
  jobLevel: KeyValue
  staffInCharge: KeyValue
  hasKillerQuestions: number
  hasOpenQuestions: number
  upsellings: Upsellings
  epreselec: boolean
  fiscalAddress: string
  shouldAskExportConsent: boolean
  exportConsentName: string
  link: string
  active: boolean
  archived: boolean
  deleted: boolean
  disponibleForFullVisualization: boolean
  availableForVisualization: boolean
  skillsList: Skill[]
  salaryDescription: string
  error?: string
  stack: Stack
  teleworking: KeyValue
}
