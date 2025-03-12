import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Use the locale from the context
  // Load messages for the requested locale
  const messages = (await import(`../messages/${locale}/index.json`)).default;
  
  return {
    messages,
    timeZone: 'Europe/Warsaw',
    // Return the locale explicitly as recommended in next-intl 3.22+
    locale
  };
});

// This function can be used to create instances for client components
export function getMessages(locale) {
  return import(`../messages/${locale}/index.json`).then((module) => module.default);
}
