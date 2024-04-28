/**
 * @description User type.
 * @property {number} id - Id.
 */
export type User = {
  id: number
  email: string
  name: string
  role: {
    id: number
    name: string
  }
}
