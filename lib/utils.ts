import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Return the correct asset URL for both development and production environments
 * In production, this prefixes assets with the basePath from next.config.mjs
 */
export function getAssetPath(path: string): string {
  // Make sure path starts with a slash
  const formattedPath = path.startsWith('/') ? path : `/${path}`
  
  // Add the base path in production
  if (process.env.NODE_ENV === 'production') {
    return `/ai-hypetrain.github.io${formattedPath}`
  }
  
  return formattedPath
}

