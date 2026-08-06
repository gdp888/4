/**
 * Shared timezone data for all timezone-related tools.
 * Single source of truth for the city list, i18n keys, and UTC offset hints.
 */

export interface TimezoneEntry {
  /** IANA timezone identifier, e.g. 'Europe/Moscow' */
  value: string;
  /** i18n key for the localized city name, e.g. 'tz.city.moscow' */
  cityKey: string;
  /** Static UTC offset hint for the <select> dropdown, e.g. 'UTC+3' or 'UTC-5/-4' */
  offset: string;
}

export const timezones: TimezoneEntry[] = [
  { value: 'Europe/Moscow', cityKey: 'tz.city.moscow', offset: 'UTC+3' },
  { value: 'Asia/Dubai', cityKey: 'tz.city.dubai', offset: 'UTC+4' },
  { value: 'America/New_York', cityKey: 'tz.city.new_york', offset: 'UTC-5/-4' },
  { value: 'America/Los_Angeles', cityKey: 'tz.city.los_angeles', offset: 'UTC-8/-7' },
  { value: 'Europe/London', cityKey: 'tz.city.london', offset: 'UTC+0/+1' },
  { value: 'Europe/Berlin', cityKey: 'tz.city.berlin', offset: 'UTC+1/+2' },
  { value: 'Asia/Kolkata', cityKey: 'tz.city.mumbai', offset: 'UTC+5:30' },
  { value: 'Asia/Shanghai', cityKey: 'tz.city.shanghai', offset: 'UTC+8' },
  { value: 'Asia/Tokyo', cityKey: 'tz.city.tokyo', offset: 'UTC+9' },
  { value: 'Asia/Singapore', cityKey: 'tz.city.singapore', offset: 'UTC+8' },
  { value: 'Asia/Jakarta', cityKey: 'tz.city.jakarta', offset: 'UTC+7' },
  { value: 'Asia/Riyadh', cityKey: 'tz.city.riyadh', offset: 'UTC+3' },
  { value: 'America/Sao_Paulo', cityKey: 'tz.city.sao_paulo', offset: 'UTC-3' },
  { value: 'America/Chicago', cityKey: 'tz.city.chicago', offset: 'UTC-6/-5' },
  { value: 'America/Denver', cityKey: 'tz.city.denver', offset: 'UTC-7/-6' },
  { value: 'Australia/Sydney', cityKey: 'tz.city.sydney', offset: 'UTC+10/+11' },
  { value: 'Pacific/Auckland', cityKey: 'tz.city.auckland', offset: 'UTC+12/+13' },
  { value: 'Africa/Cairo', cityKey: 'tz.city.cairo', offset: 'UTC+2' },
  { value: 'Africa/Lagos', cityKey: 'tz.city.lagos', offset: 'UTC+1' },
  { value: 'Asia/Karachi', cityKey: 'tz.city.karachi', offset: 'UTC+5' },
  { value: 'Asia/Bangkok', cityKey: 'tz.city.bangkok', offset: 'UTC+7' },
  { value: 'Europe/Istanbul', cityKey: 'tz.city.istanbul', offset: 'UTC+3' },
  { value: 'Europe/Paris', cityKey: 'tz.city.paris', offset: 'UTC+1/+2' },
  { value: 'America/Toronto', cityKey: 'tz.city.toronto', offset: 'UTC-5/-4' },
  { value: 'America/Mexico_City', cityKey: 'tz.city.mexico_city', offset: 'UTC-6/-5' },
  { value: 'America/Bogota', cityKey: 'tz.city.bogota', offset: 'UTC-5' },
  { value: 'Asia/Kuala_Lumpur', cityKey: 'tz.city.kuala_lumpur', offset: 'UTC+8' },
  { value: 'Asia/Seoul', cityKey: 'tz.city.seoul', offset: 'UTC+9' },
  { value: 'Asia/Taipei', cityKey: 'tz.city.taipei', offset: 'UTC+8' },
  { value: 'Asia/Hong_Kong', cityKey: 'tz.city.hong_kong', offset: 'UTC+8' },
  { value: 'Europe/Madrid', cityKey: 'tz.city.madrid', offset: 'UTC+1/+2' },
  { value: 'Europe/Rome', cityKey: 'tz.city.rome', offset: 'UTC+1/+2' },
  { value: 'Europe/Amsterdam', cityKey: 'tz.city.amsterdam', offset: 'UTC+1/+2' },
  { value: 'Europe/Warsaw', cityKey: 'tz.city.warsaw', offset: 'UTC+1/+2' },
  { value: 'Europe/Kiev', cityKey: 'tz.city.kyiv', offset: 'UTC+2/+3' },
  { value: 'Europe/Lisbon', cityKey: 'tz.city.lisbon', offset: 'UTC+0/+1' },
  { value: 'Europe/Zurich', cityKey: 'tz.city.zurich', offset: 'UTC+1/+2' },
  { value: 'Asia/Dhaka', cityKey: 'tz.city.dhaka', offset: 'UTC+6' },
  { value: 'Asia/Tehran', cityKey: 'tz.city.tehran', offset: 'UTC+3:30' },
  { value: 'Asia/Kabul', cityKey: 'tz.city.kabul', offset: 'UTC+4:30' },
  { value: 'Asia/Yangon', cityKey: 'tz.city.yangon', offset: 'UTC+6:30' },
  { value: 'Pacific/Honolulu', cityKey: 'tz.city.honolulu', offset: 'UTC-10' },
];
