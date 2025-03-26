const iconModules = import.meta.glob('assets/icons/*.svg', { eager: true, as: 'react' });

const iconMapping = {};

for (const path in iconModules) {
  const fileName = path.split('/').pop();
  const slug = fileName.replace('-icon.svg', '');
  iconMapping[slug] = iconModules[path].default;
}

export default iconMapping;