import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function proxied(src) {
  try {
    return src;
  } catch {
    return src;
  }
}

export function imageSrc(src) {
  if (!src) return src;
  return /^https?:\/\//i.test(src) ? proxied(src) : src;
}
