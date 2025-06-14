fetch('MyProjects.json')
  .then(response => response.json())
  .then(data => {
    const projetos = data.projetos;
    const container = document.getElementById('allCards');

    projetos.forEach((projeto, index) => {
      const card = document.createElement('div');
      card.className = 'cardPrjt';

      const img = document.createElement('img');
      img.className = 'imgProjet';
      img.src = projeto.picture;
      img.alt = projeto.title;
      card.appendChild(img);

      const title = document.createElement('h3');
      title.className = 'nomSite';
      title.textContent = projeto.title;
      card.appendChild(title);

      const desc = document.createElement('p');
      desc.className = 'pProjet';
      desc.textContent = projeto.description;
      card.appendChild(desc);

      const link = document.createElement('a');
      link.className = 'btnProjet';
      link.href = projeto.link;
      link.textContent = 'Regarde Ici';
      link.target = '_blank';
      card.appendChild(link);

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os projetos:', error);
  });

fetch('Skills.json')
  .then(response => response.json())
  .then(data => {
    const skills = data.skills;
    const container = document.getElementById('divMySkills');

    let ul = document.querySelector('#divMySkills .ulSkills');
    if (!ul) {
      ul = document.createElement('ul');
      ul.className = 'ulSkills';
      container.appendChild(ul);
    }

    skills.forEach((skill, index) => {
      const li = document.createElement('li');
      li.className = 'liSkills';

      const img = document.createElement('img');
      img.className = 'imgMySkills';
      img.src = skill.logo;
      img.alt = skill.title;
      li.appendChild(img);

      const title = document.createElement('h4');
      title.className = 'h4Skills';
      title.textContent = skill.title;
      li.appendChild(title);

      ul.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar as skills:', error);
  });

function typeWriterHTML(element, text, speed = 60, callback) {
  element.innerHTML = "";
  let i = 0;
  let isTag = false;
  let buffer = "";

  function typing() {
    if (i < text.length) {
      if (text[i] === "<") {
        isTag = true;
        buffer += text[i];
      } else if (text[i] === ">") {
        buffer += text[i];
        element.innerHTML += `<span class="typewriter-red">${buffer}</span>`;
        buffer = "";
        isTag = false;
      } else if (isTag) {
        buffer += text[i];
      } else {
        element.innerHTML += text[i];
      }
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

window.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('typeTitle');
  const subtitle = document.getElementById('h2Intro');
  if (title && subtitle) {
    const titleText = title.textContent;
    const subtitleText = subtitle.textContent;
    typeWriterHTML(title, titleText, 60, () => {
      setTimeout(() => {
        subtitle.innerHTML = "";
        subtitle.style.visibility = "visible";
        typeWriterHTML(subtitle, subtitleText, 60);
      }, 400);
    });
  } else if (title) {
    typeWriterHTML(title, title.textContent, 60);
  } else if (subtitle) {
    subtitle.innerHTML = "";
    subtitle.style.visibility = "visible";
    typeWriterHTML(subtitle, subtitle.textContent, 60);
  }
});