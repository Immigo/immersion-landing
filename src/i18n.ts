import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'es'];
const defaultLocale = 'en';
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale : string | undefined = await requestLocale;

    if (!locale || !locales.includes(locale as string)) {
        locale = defaultLocale;
    }
    
  console.log(locale)
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});