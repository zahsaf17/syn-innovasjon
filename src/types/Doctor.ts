import { Accesses } from '@/types/Accesses'

export interface Doctor {
  id: string
  nameOfDoctor: string
  doctorsOffice: string
  doctorType: string
  hasAccessTo: {name:string, checked:boolean, expanded: boolean, indeterminate:boolean, subCat:{name: string, checked: boolean}[]}[]
  hide:boolean
}
