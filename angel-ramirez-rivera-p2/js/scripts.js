const staff = [
    {
        firstName:"Bedros",
        lastName:"Keuilian",
        img: "/images/facepics/bedros-keuilian-headshot.jpeg",
        title: "Manger",
        info:"Bedros Keuilian is a fitness entrepreneur, author, and business coach known for his contributions to the fitness industry and his role in founding Fit Body Boot Camp, a global fitness franchise. Bedros Keuilian has built a reputation as a successful business mentor, helping fitness professionals and entrepreneurs scale their businesses. He is also the author of books like 'Man Up: How to Cut the Bullshit and Kick Ass in Business (and in Life)' and 'The Art of Selling Fitness.' Keuilian is recognized for his motivational speaking, coaching programs, and commitment to helping individuals achieve success in their fitness and business endeavors. His influence extends beyond the fitness industry, as he shares insights on entrepreneurship, marketing, and personal development through various platforms.",
    },
    {
        firstName:"Patrick",
        lastName:"Bet-David",
        img:"/images/facepics/patrick.jpeg",
        title: "Sales Rep",
        info:"Patrick Bet-David is a successful entrepreneur, author, and financial educator. He is the founder of PHP Agency, Inc., a financial services marketing organization, and Valuetainment, a media company focused on providing content related to entrepreneurship and personal development. Patrick Bet-David is recognized for his dynamic and insightful approach to business education, often sharing practical advice and interviews with influential figures on his Valuetainment YouTube channel. His book, 'Your Next Five Moves: Master the Art of Business Strategy,' reflects his strategic mindset and offers valuable insights into building successful businesses. Patrick Bet-David's engaging and informative content has made him a prominent figure in the entrepreneurship and business education space.",
    },
    {
        firstName:"Elon",
        lastName:"Musk",
        img:"/images/facepics/Elon_Musk.jpeg",
        title: "Sales Rep",
        info:"Elon Musk is a visionary entrepreneur and business magnate known for his involvement in various groundbreaking ventures. As of my last knowledge update in January 2022: Elon Musk, a South African-born American entrepreneur, is the CEO and lead designer of SpaceX, CEO and product architect of Tesla, Inc., CEO of Neuralink, and founder of The Boring Company. Musk is recognized for his ambitious goals in advancing space exploration, electric vehicles, renewable energy, and neural interface technology. His innovative approach has had a significant impact on the tech and automotive industries, making him one of the most influential figures in contemporary technology and business. Musk is known for his bold vision for the future, including plans for human colonization of Mars, the development of high-speed transportation systems, and the advancement of artificial intelligence.",
    },
    {
        firstName:"Alex",
        lastName:"Hormozi",
        img:"/images/facepics/Alex-Hormozi.webp",
        title: "Sales Rep",
        info:"Alex Hormozi is a fitness entrepreneur and business owner. He is known for his involvement in the fitness business industry. Alex has been associated with building and scaling successful fitness-related companies. He is recognized for his expertise in business and has shared insights on entrepreneurship and scaling businesses in the fitness and coaching space.",
    },
    {
        firstName:"Chris",
        lastName:"Bumstead",
        img:"/images/facepics/chris-bumstead.jpeg",
        title: "Trainer",
        info:"Chris Bumstead is a professional bodybuilder from Canada. He is notably known for his success in the Men's Classic Physique division. As of my last update, he has achieved significant recognition and success in bodybuilding competitions, including winning the prestigious Mr. Olympia title in the Men's Classic Physique category.",
    },
];

let submittedForms = [];
//Displays the staff below
function displayStaff() {
    const staffConatiner = document.getElementById('staff-container');

    staff.forEach(person => {
        const personDiv = document.createElement('div');
        personDiv.innerHTML = `
            <h6 id="staff-name">${person.firstName} ${person.lastName}</h6>
            <p id="staff-title"><strong>Title:</strong> ${person.title}</p>
            <img id="staff-img" src="${person.img}" alt="${person.firstName} ${person.lastName}">
            <article id="staff-info" style="display: none;">${person.info}</article> 
            <button class="info-button">Learn More</button>
            <hr>
            `;
        staffConatiner.appendChild(personDiv);
        //Creates a div element then creates the follwoing elements the infomations from the ojects in staff array
    });

    const infoButtons = document.querySelectorAll('.info-button');
    infoButtons.forEach(button => {
        button.addEventListener('click', handleInfoButtonClick);
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function handleInfoButtonClick(event){
    const button = event.target;
    const staffInfo = button.previousElementSibling;

    if(staffInfo){
        staffInfo.style.display = staffInfo.style.display === 'none' || staffInfo.style.display === '' ? 'block' : 'none';
    } 
}

function handleFormSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('country').value;
    const subject = document.getElementById('subject').value;

    // Create an object with form values
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        location: location,
        subject: subject
    };

    // Add the form data to the submittedForms array
    submittedForms.push(formData);

    // Optionally, you can do something with the form data, like displaying it or sending it to a server
    console.log('Form submitted:', formData);

    document.querySelector('form').reset();
}

displayStaff();