const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortBands = bands.sort((a, b) => {
  const aWithoutArticle = a.replace(/^(a|an|the)\s+/i, '');
  const bWithoutArticle = b.replace(/^(a|an|the)\s+/i, '');
  return aWithoutArticle.localeCompare(bWithoutArticle);
});

const bandsList = document.getElementById('bands');
bandsList.innerHTML = sortBands.map(band => `<li>${band}</li>`).join('');