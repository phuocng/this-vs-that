const slugify = (item: string) => item.toLowerCase().split(' ').join('-');

const unslugify = (slug: string) => slug.toLowerCase().split('-').join(' ');

export {
    slugify,
    unslugify,
};
