import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Load messages for the requested locale
  const messages = (await import(`../messages/${locale}/index.json`)).default;
  
  return {
    messages,
    timeZone: 'Europe/Warsaw',
    locale
  };
});

// This function can be used to create instances for client components
export function getMessages(locale) {
  return import(`../messages/${locale}/index.json`).then((module) => module.default);
}
