import dayjs from 'dayjs'
import ust from 'dayjs/plugin/utc'

dayjs.extend(ust)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

function formatStringUct(str: string) {
  return dayjs.utc(str).utcOffset(8).format()
}

function formatUtcString(utcString: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}

export { formatStringUct, formatUtcString }
