import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale: requestedLocale}) => {
  // Use the locale from the context
  // Load messages for the requested locale
  const locale = requestedLocale; // Store the locale to return it
  const messages = (await import(`../messages/${locale}/index.json`)).default;
  
  return {
    messages,
    timeZone: 'Europe/Warsaw',
    // Include the locale in the return object to address the warning
    locale
  };
});

// This function can be used to create instances for client components
export function getMessages(locale) {
  return import(`../messages/${locale}/index.json`).then((module) => module.default);
}
