const oses = {
  'Linux x86_64': 'Linux',
  Win32: 'Windows',
  MacIntel: 'Mac OS X',
};
document.querySelectorAll('#wanna button')[0].innerHTML += ` for ${oses[navigator.platform]}`;