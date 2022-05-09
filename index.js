const subjectsContainer = document.querySelector('.subjects')
const selectBox = document.getElementById('select-box')


let grades = ['a1', 'b2', 'b3', 'c4', 'c5', 'c6', 'd7', 'e8', 'f9']

const subjects = 'Chose a subject\nagricultural science\nanimal husbandry\napplied electricity or basic electricity\narabic\nauto body repairs and spray painting\nauto electrical work\nauto mechanical work\nauto mechanics\nauto parts merchandising\nbasketry\nbiology\nblocklaying, bricklaying and concreting\nbook keeping\nbuilding construction\nbusiness management\ncapentry and joinery\ncatering craft practice\nceramics\nchemistry\nchristian religious studies\ncivic education\nclerical office duties\nclothing and textiles\ncommerce\ncomputer studies\ncosmetology\ncrop husbandry and horticulture\ndata processing\ndyeing & bleaching\neconomics\nedo\nefik\nelectrical installation and maintenance\nelectronics or basic electronics\nenglish language\nfinancial accounting\nfisheries\nfoods and nutrition\nforestry\nfrench\nfurniture making\nfurther mathematics\ngarment making\ngeneral agriculture\ngeneral knowledge in art\ngeneral mathematics or mathematics\ngeography\nghanaian languages\ngovernment\ngraphic design\ngsm phones maintenance and repairs\nhausa\nhealth education or health science\nhistory\nhome management\nibibio\nigbo\ninformation and communication technology\ninsurance\nintegrated science\nislamic religious studies\njewellery\nleather goods\nleatherwork\nliterature in english\nmachine woodworking\nmarketing\nmathematics\nmetalwork\nmining\nmusic\noffice practice\npainting and decorating\nphotography\nphysical education\nphysics\npicture making\nplumbing and pipe fitting\nprinciples of cost accounting\nprinting craft practice\nradio,television and electronics works\nrefrigeration and air conditioning\nsalesmanship\nsculpture\nshorthand\nsocial studies\nstore keeping waec\nstore management\ntechnical drawing\ntextiles\ntourism\ntypewriting\nupholstery\nvisual art\nwelding and fabrication engineering craft practice\nwest african traditional religion\nwoodwork\nyoruba'.split(/\r?\n/)

for (let i = 0; i < 9; i++) {
   const subjectContainer = document.createElement('div')
   const newSelect = document.createElement('select')
   newSelect.classList.add('subject')
   const newSelectGrades = document.createElement('select')
   newSelectGrades.classList.add('grades')

   for (const [index, a] of subjects.entries()) {
      const newOption = document.createElement('option')
      newOption.value = a.split(' ')[0]
      newOption.innerHTML = a;

      if (index === 0) {

         newOption.classList.add('place-holder')

      } else {
         newOption.innerHTML = a;
      } newSelect.add(newOption, undefined)
      subjectContainer.appendChild(newSelect)
      subjectsContainer.appendChild(subjectContainer)

   }
   for (const [index, a] of grades.entries()) {
      const newOption = document.createElement('option')
      newOption.value = a,
         newOption.innerHTML = a;
      newSelectGrades.add(newOption, undefined)
      subjectContainer.appendChild(newSelectGrades)
      subjectsContainer.appendChild(subjectContainer)

   }
}

