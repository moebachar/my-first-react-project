const members = [

    {name: 'Mehdi Hayani Mechkouri',
    image: 'mehdi.jpg',
    roles: ['Président'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic.',
    commiteMembre: true,
    cellule: {_id : '1', name: 'formation'},
    year:  5,
    media: {facebook: 'https://web.facebook.com/Mehd.Chakor', instagram:  'https://www.instagram.com/mehdi__hayani/', linkedin: 'https://ma.linkedin.com/in/mehdi-hayani-mechkouri-9ba3161bb'},
    mail: 'member_email@gmail.com'
    },

    {name: 'Ahmed Amine Nouabi',
    roles: ['Vice Président', 'Chef Cellule formation'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic.',
    image:'nouabi.jpg',
    commiteMembre: true,
    cellule: {_id : '1', name: 'formation'},
    year:  4,
    media: {facebook: 'https://web.facebook.com/amine.nouabi',  instagram: 'https://www.instagram.com/aminenouabi/', linkedin: 'https://ma.linkedin.com/in/amine-nouabi-2508461b9'},
    mail: 'member_email@gmail.com'
    },

    {name: 'Amine Firdawsi',
    roles: ['Vice Président', 'Trésorier'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic.',
    image:'firdawsi.jpg',
    commiteMembre: true,
    cellule: {_id : '1', name: 'formation'},
    year:  3,
    media: {facebook: 'https://web.facebook.com/fi.amine.39', instagram: null, linkedin:  'https://ma.linkedin.com/in/amine-firdawsi-735745239'},
    mail: 'member_email@gmail.com'
    },

    {name: 'Layla Omari',
    roles: ['Secrétaire'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic.',
    image:'leila.jpg',
    commiteMembre: true,
    cellule: {_id : '2', name: 'media'},
    year:  4,
    media: {facebook: null, instagram: 'https://www.instagram.com/l_alay_omaril/', linkedin: null},
    mail: 'member_email@gmail.com'
    },

    {name: 'Oumayma Moussaoumrah',
    roles: ['Chef cellule contact'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic.',
    image:'oumaima.jpg',
    commiteMembre: true,
    cellule: {_id : '3', name: 'contact'},
    year:  4,
    media: {facebook: null, instagram: null, linkedin: null},
    mail: 'member_email@gmail.com'
    },

    {name: 'Aroua Ankit',
    roles: ['Chef cellule media'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic.',
    image:'aroua.jpg',
    commiteMembre: true,
    cellule: {_id : '2', name: 'media'},
    year:  4,
    media: {facebook: null, instagram: null, linkedin: null},
    mail: 'member_email@gmail.com'
    },

    {name: 'Houssam Eddine Syouti',
    roles: ['Chef cellule event'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum maxime temporibus tempore qui iure soluta quaerat quo? Mollitia provident alias accusamus fugit, illo quae repudiandae ducimus itaque eos recusandae hic.',
    image:'houssam.jpg',
    commiteMembre: true,
    cellule: {_id : '4', name: 'event'},
    year:  2,
    media: {facebook: null, instagram: null, linkedin: null},
    mail: 'member_email@gmail.com'
    },

    
    

]

export function getMembers(){
    return members;
}


