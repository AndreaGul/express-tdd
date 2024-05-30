const { test, expect } = require("@jest/globals");


const posts = require("../posts");

const createSlug = (titolo, posts) => {
    if(!Array.isArray(posts) || posts.length ===0){
        throw new Error("Post non passati");
    }
    if (typeof titolo !== 'string') {
        throw new Error("Il titolo passato non è una stringa");
    }
    if (!titolo.trim()) {
        throw new Error("Nessun titolo è stato passato");
    }
    const baseSlug = titolo.toLowerCase().replaceAll(' ', '-').replaceAll('/', '');
    const slugs = posts.map(post => post.slug);
    let slug = baseSlug;
    let counter = 1;
   
    
    while (slugs.includes(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
    return slug;
};

// createSlug dovrebbe ritornare una stringa

test('createSlug dovrebbe ritornare una stringa', () => {

    expect(typeof(createSlug("questa e una stringa", posts))).toBe('string');

});

// createSlug dovrebbe ritornare una stringa in lowercase

test('createSlug dovrebbe ritornare una stringa in lowercase', () => {

    expect(createSlug("QUESTA E UNA STRINGA", posts)).toBe('questa-e-una-stringa');

});

// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -

test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    
    expect(createSlug("questa e una stringa", posts)).toBe('questa-e-una-stringa');

});

// createSlug dovrebbe incrementare di 1 lo slug quando esiste già

test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {

    expect(createSlug("torta paesana", posts)).toBe("torta-paesana-1");
    
});


//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato

test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', ()=>{
    
    expect(() => createSlug(false, posts)).toThrow("Il titolo passato non è una stringa");
    expect(() => createSlug("", posts)).toThrow("Nessun titolo è stato passato");
})

//createSlug dovrebbe lanciare un errore se manca l'array dei post


test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', ()=>{
    
    expect(() => createSlug("torta paesana", [])).toThrow("Post non passati");

})