export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const navigateToSignIn = () => {
  window.location.href = '/sign-in';
};
