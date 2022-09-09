const courses = [
    {
      id: 1,
      title: "Computer Support Technician",
      category: "Computer Networking Programs",
      time: '6-20 Weeks | 160 hours',
      img: "./img/item1.jpg",
      desc: `Computer Coach will feed your need for knowledge as you learn about hardware & software, and conquer how to accurately diagnose and resolve common computer problems found in businesses.  `,
      method: `Certification Exam Prep Avail`, 
      checkbox: `Certification`, 
    },
    {
      id: 2,
      title: "IT Systems Administration",
      category: "Computer Networking Programs",
      time: '4-14 Weeks | 120 hours',
      img: "./img/item2.jpg",
      desc: `Computer Coach’s System Admin program helps you prepare to work in a critical role in IT departments found in most businesses. System Admins oversee the day-to-day operations of client/server networks.  `,
      method: `Certification Exam Prep Avail`,
      checkbox: `Certification`,
    },
    {
      id: 3,
      title: "IT Network Administration",
      category: "Computer Networking Programs",
      time: '3-6 Weeks | 120 hours',
      img: "./img/item3.jpg",
      desc: `Computer Coach’s Network Administration training program teaches how to manage day-to-day operations of networks. Learn how to organize, install, & support computer systems, wide area networks, network segments, intranets, and other data communication systems. `,
      method: `Certification Exam Prep Avail`,
      checkbox: `Certification`,
    },
    {
      id: 4,
      title: "Cloud Integration Specialist",
      category: "Computer Networking Programs",
      time: '1 Weeks | 104 Hours',
      img: "./img/item4.jpg",
      desc: `Delve into the intricacies of “The Cloud” with Computer Coach’s Cloud Integration Specialist program. A cloud integration specialist provides insight, setup, troubleshooting, and maintenance for cloud environments found in businesses of all sizes.`,
      method: `Certification Exam Prep Avail`,
      checkbox: `Certification`,
    },
    {
      id: 5,
      title: "IT Security Professional",
      category: "IT Security Programs",
      time: '4-18 Weeks | 120 Hours',
      img: "./img/item5.jpg",
      desc: `Learn computer security fundamentals in Computer Coach’s Security Professional training program. In this program you will learn how to protect a company’s network, systems, and data.`,
      method: `Certification Exam Prep Avail`,
      checkbox: `Certification`,
    },
    {
      id: 6,
      title: "Cyber Security Specialist",
      category: "IT Security Programs",
      time: ' 5-23 Weeks | 200 Hours',
      img: "./img/item6.jpg",
      desc: `Computer Coach’s Cyber Security Specialist program will help you learn a comprehensive level of knowledge in networking and cyber security skills from the ground up.`,
      method: `Certification Exam Prep Avail`,
      checkbox: `Certification`,
    },
    {
      id: 7,
      title: "Data Specialist",
      category: "Data Program",
      time: '3-16 Weeks | 120 Hours',
      img: "./img/item7.jpg",
      desc: `Computer Coach's Data Specialist programs provides training for activities related to the administration of databases. This includes maintenance of dictionaries.`,
      method: `Certification Exam Prep Avail`,
      checkbox: `Certification`,
    },
    {
      id: 8,
      title: "Front End Web Development",
      category: "Coding Programs",
      time: '5-23 Weeks | 200 Hours',
      img: "./img/item8.jpg",
      desc: `In Computer Coach’s Front-End Web Dev program you will learn to produce HTML, CSS, and JavaScript for a website or web application so that a user can see and interact with sites directly on the client-side, through a web browser.`,
      method: `Portfolio Capstone`,
      checkbox: `Portfolio`
    },
    {
      id: 9,
      title: "Full Stack Application",
      category: "Coding Programs",
      time: ' 5-23 Weeks | 200 Hours',
      img: "./img/item9.jpg",
      desc: `In this hands-on program you will learn how to connect and write code that integrates and creates server-side code to generate responses to user input.`,
      method: `Portfolio Capstone`,
      checkbox: `Portfolio`
    },
    {
      id: 10,
      title: "Service Management",
      category: "Business Programs",
      time: '2-11 Weeks | 96 Hours',
      img: "./img/item10.jpg",
      desc: `Computer Coach’s Service Management Training Program covers the keys to being successful in business. In this course we teach how to create a top-notch environment for the customer experience.`,
      method: `Certification Exam Prep Avail`,
      checkbox: `Certification`,
    },
    {
      id: 11,
      title: "Digital Marketing Specialist",
      category: "Business Programs",
      time: '2-9 Weeks | 76 Hours',
      img: "./img/item11.jpg",
      desc: `A Digital Marketing Specialist promotes a business’ brand, products, and/or services through internet technologies. They create brand loyalty by using their creative analysis of industry trends to create a marketing plan that exceptionally increases business revenue.`,
      method: `Portfolio Capstone`,
      checkbox: `Portfolio`
    },
]
const searchBox = document.querySelector('#data-search')
const coursesConainter = document.querySelector('.courses-container');
const btnContainer = document.querySelector('.btn-container');
const Xmark = document.getElementsByClassName('x-mark');
const Cer = document.getElementById('cer');
const Por = document.getElementById('por');


const move = [
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' },
]
const moveTime = {
  duration: 2000,
  iterations: 1,
}
window.addEventListener('DOMContentLoaded', function(){
  displaycourses(courses);
  btn();
});

function displaycourses(coursesItems){
  const coursDisplay = coursesItems.map(function(item){
    return`<article id="holder" class="card-holder ${item.checkbox}">
    <div  class="img-head">
      <img src="${item.img}" alt="computer">
    </div>
    <div class="text-holder">
    <h2>${item.title}</h2>
    <h3>${item.category}</h3>
    <p class="text">
    ${item.desc}
    <h4>${item.time}</h4>
    <span>${item.method}</span>
    </p>
    </div>
    </div>
  </article>`;


}).join("");
coursesConainter.innerHTML = coursDisplay;

const Portfolio = document.getElementsByClassName('Portfolio');
    
const checkbox = document.querySelector('input[type=checkbox]')

function show(classToShow) {	
  [].forEach.call(document.getElementsByClassName(classToShow), function (el) {
      el.hidden = false;
    });  
}

function hide(classToHide) {	
[].forEach.call(document.getElementsByClassName(classToHide), function (el) {
    el.hidden = true;
  });  
}


// ::: Events :::

// Event for the .com checkbox
Cer.addEventListener('change', function(){

  if (Cer.checked) show('Certification'); else hide('Certification');
})
Por.addEventListener('change', function(){

  if (Por.checked) show('Portfolio'); else hide('Portfolio');
})

};
Xmark.addEventListener('click', function(){
  e.target.value= " ";
 
});
searchBox.addEventListener('input', e => {
   const val = e.target.value.toLowerCase();
  const search = courses.filter(item =>{
  return(
 item.title.toLowerCase().includes(val) || item.category.toLowerCase().includes(val) || item.time.toLowerCase().includes(val) || item.method.toLowerCase().includes(val)
     );
  }); 
  console.log(Xmark)
  displaycourses(search)
  
})

function btn(){
    const btnId = courses.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ['All']
      );

    const btnDatamap = btnId.map(function (category){
        return`<button class="filter" data-id="${category}">${category}</button>`
        
      }).join("")
      //console.log(btnDatamap)

      const card = document.querySelectorAll('.card-holder');
     //console.log(card)
    btnContainer.innerHTML = btnDatamap
    const btnFilter = btnContainer.querySelectorAll('.filter');
    btnFilter.forEach(function (btn) {
      /*card.animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-300px)' }
      ], {
        // timing options
        duration: 1000,
        iterations: Infinity
      });*/
     btn.addEventListener("click", function(e){
          //console.log(e.currentTarget.dataset.id);
            const category =  e.currentTarget.dataset.id;
            const coursName = courses.filter(function (coursesItems){
                if(coursesItems.category === category){
                  return coursesItems;
                  }else{
                   

                  }
            });
            if(category === "All"){
              //console.log('yes')
              displaycourses(courses)
            }else{
              displaycourses(coursName)
            }
        });


    });
//refresh when clicked stop it!
   

  }

  /*function hide() {	
    [].forEach.call(document.getElementsByClassName('Certification'), function (el) {
      el.hidden = false;
    });  
  }
  
  // Show the element with classToShow
  function show() {	
    [].forEach.call(document.getElementsByClassName('Portfolio'), function (el) {
      el.hidden = true;
    });  
  }*/

 

 /* document.getElementById('Portfolio').onchange = function() {
    if(this.checked){
      Portfolio.classList.add('hide')
    }else{
      Portfolio.classList.remove('hide')
    }
  }*/



