const { test, expect } = require("@jest/globals");

const posts = require('../posts');

const creaSlug = (name) => {
    const baseSlug = name.replaceAll(' ', '-').toLowerCase().replaceAll('/', '');
    const slugs = pizze.map(p => p.slug);
    let counter = 1;
    let slug = baseSlug;
    while(slugs.includes(slug)){
        slug = `${baseSlug}-${counter}`;
        counter ++;
    }
    return slug;
}

const createSlug = (titolo) =>{
    if(typeof titolo !== 'string'){
         throw new Error("Il titolo passato non è una stringa");
     }
    const baseSlug = titolo.replaceAll(' ','-').toLowerCase().replaceAll('/', '');

    return baseSlug ;
}

// createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa',()=>{
    

    expect(typeof(createSlug("questa e una stringa"))).toBe('string');
})

//createSlug dovrebbe ritornare una stringa in lowercase

test('createSlug dovrebbe ritornare una stringa in lowercase',()=>{

    expect(createSlug("QUESTA E UNA STRINGA")).toBe('questa-e-una-stringa')
})