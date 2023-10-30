export default {
    name:'courses',
    title:'Courses',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'institution',
            title:'Institution',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'description',
            title:'Description',
            type:'string'
        }
    ]
}