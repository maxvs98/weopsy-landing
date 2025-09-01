import { headers } from 'next/headers';
import { permanentRedirect } from 'next/navigation';

const ANDROID_APP_URL = 'https://play.google.com/store/apps/details?id=com.optimsystems.opsy';
const APPLE_APP_URL = 'https://apps.apple.com/cs/app/optim-system-app-weopsy/id6470450913';

function checkIsAppleDevice(userAgent: string): boolean {
  // Check for iOS devices
  const isIOS = /iphone|ipad|ipod/.test(userAgent);

  // Check for macOS
  const isMac = /macintosh|mac os x/.test(userAgent);

  // Check for Safari browser (additional check for Apple devices)
  const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);

  return isIOS || isMac || isSafari;
}

export default async function AppPage() {
  const head = await headers();

  const isApple = checkIsAppleDevice(head.get('user-agent')?.toLowerCase() ?? '');

  if (isApple) permanentRedirect(APPLE_APP_URL);
  permanentRedirect(ANDROID_APP_URL);
}
