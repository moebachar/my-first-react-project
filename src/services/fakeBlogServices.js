const blogs =[

    {id:'1',
     title:'This is the blog title',
     subHeading: 'This is the sub heading that is located under the title',
     image:'blog1.jpg',
     content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo vel eveniet nam sint pariatur, repudiandae id nobis illo quisquam deserunt, consequatur itaque et exercitationem unde ea nesciunt odit ratione',
     likes: 34,
     publishDate: new Date(2022, 7, 14),
     tags: [],
     writer:'BACHAR Mohamed'
    },

    {id:'2',
     title:'This is the blog title',
     subHeading: 'This is the sub heading that is located under the title',
     image:'blog2.jpg',
     content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo vel eveniet nam sint pariatur, repudiandae id nobis illo quisquam deserunt, consequatur itaque et exercitationem unde ea nesciunt odit ratione',
     likes: 4,
     publishDate: new Date(2022, 7, 13),
     tags: [],
     writer:'BACHAR Mohamed'  
    },

    {id:'3',
     title:'This is the blog title',
     subHeading: 'This is the sub heading that is located under the title',
     image:'blog3.jpg',
     content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo vel eveniet nam sint pariatur, repudiandae id nobis illo quisquam deserunt, consequatur itaque et exercitationem unde ea nesciunt odit ratione',
     likes: 14,
     publishDate: new Date(2022, 6, 14), 
     tags: [],
     writer:'BACHAR Mohamed' 
    },

    {id:'4',
     title:'This is the blog title',
     subHeading: 'This is the sub heading that is located under the title',
     image:'blog4.jpg',
     content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo vel eveniet nam sint pariatur, repudiandae id nobis illo quisquam deserunt, consequatur itaque et exercitationem unde ea nesciunt odit ratione',
     likes: 24,
     publishDate: new Date(2021, 7, 14), 
     tags: [],
     writer:'BACHAR Mohamed' 
    },

    
];


export function getBlogs(){
    return blogs;
}

