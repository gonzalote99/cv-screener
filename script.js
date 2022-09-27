console.log("this is script.js");

const data = [
  {
    name: " name one",
    age: 22,
    city: "city one",
    laguage: "javascript",
    framework: "react",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    name: " name two",
    age: 22,
    city: "city two",
    laguage: "python",
    framework: "django",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    name: " name three",
    age: 22,
    city: "city three",
    laguage: "javascript",
    framework: "angular",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    name: " name four",
    age: 22,
    city: "city four",
    laguage: "python",
    framework: "flask",
    image: "https://randomuser.me/api/portraits/men/57.jpg"
  },
  
  {
    name: " name five",
    age: 22,
    city: "city five",
    laguage: "javascript",
    framework: "angular",
    image: "https://randomuser.me/api/portraits/men/61.jpg"
  }
  
  

]

function cvIterator(profiles) {
  let nextIndex = 0;
    return {
      next: function() {
        return nextIndex<profiles.length ? 
        {value: profiles[nextIndex++], done: false} :
        {done: true}
      }
    };


}

const candidates = cvIterator(data);


nextCV();

const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if(currentCandidate != undefined) {
    image.innerHTML = `<img src="${currentCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group">;
    <li class="list-group-item">name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age}years old</li>
    <li class="list-group-item">"lives in ${currentCandidate.city}</li>
    <li class="list-group-item">work in ${currentCandidate.laguage}</li>
    <li class="list-group-item">framework ${currentCandidate.framework}</li>

     </ul>`;
  } else {
    alert("finish candiate");
    window.location.reload();

  }

}
