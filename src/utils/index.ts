import bcrypt from 'bcryptjs'
const crpytPasswordUtil = (password: string): string => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

const decryptIsPassword = (hash: string, password: string): boolean => {
  return bcrypt.compareSync(hash, password)
}
/**
 *
 * @param {*} all
 * @returns 类型String
 */

const Typeing = (value: any): string => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
export { crpytPasswordUtil, decryptIsPassword, Typeing }
