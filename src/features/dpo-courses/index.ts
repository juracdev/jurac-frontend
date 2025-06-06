const PATHNAMES: string[] = ['/spisok-kursov.html', '/kursy.html'];

const runDpoCourses = () => {
  if (PATHNAMES.includes(window.location.pathname)) {
    const color = '#fffff0';

    const wrapper = document.getElementById('wrapper');
    wrapper.style.backgroundColor = color;
  }
};

export default runDpoCourses;
