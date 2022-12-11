import rica4 from '../../Assets/rica4.jpg'
const img2 = 'https://www.mcgill.ca/continuingstudies/files/continuingstudies/supply-chain-management_1440x600.jpg'
const img3 = 'https://www.dktruck.com/imp.oem/Cascadia-1.jpg'
const img4 = 'https://media.istockphoto.com/photos/big-ten-wheels-truck-with-container-f-picture-id1355096028?b=1&k=20&m=1355096028&s=170667a&w=0&h=d_JEMsJwwlqFB1KieXLDQepreB2YfA5SeIiI74FbMM8='
export const slideShowData = [ 
    { 
        img: rica4, 
        title: `We're here to help`, 
        body: 'Call Us: +1 (587) 574-4890',
        linkPath: `/Contact`,
        linkName: `Contact Us`

    }, 
    {
        img: img2,
        title: `Excellence`, 
        body: `Safest Fleet Service in Brampton`,
        linkPath: `/Services`,
        linkName: `Services`
    },
    {
        img: img3,
        title: `Delivering Success`, 
        body: `Top class service delivered over years`,
        linkPath: `/Aboutus`,
        linkName: `About Us`
    },
    {
        img: img4,
        title: `We're hiring`,
        body: `Apply today and get what you deserve`,
        linkPath: `/Careers`,
        linkName: `Careers`
    }
];
