import * as dayjs from 'dayjs'

export function today(): string {
  return dayjs().format('YYYY-MM-DD')
}

export function rfc3339(): string {
  return dayjs().format()
}
