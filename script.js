"use strict";
// Object-array data is serialized and parsed to demonstrate JSON operations.
const projectData = [
 {title:"Appointment Scheduler",category:"web",label:"Interface Design",image:"images/project1.jpg",alt:"Calendar and appointment planning interface illustration",description:"A student interface concept for organizing appointments with clear controls and a calendar layout."},
 {title:"Accessible Community Website",category:"web",label:"Front-End Development",image:"images/project2.jpg",alt:"Responsive website layout displayed on multiple devices",description:"A responsive website exercise emphasizing semantic HTML, readable design, navigation, and accessible forms."},
 {title:"AI for Digital Forensics",category:"security",label:"Research Concept",image:"images/project3.jpg",alt:"Abstract security dashboard with network analysis graphics",description:"A research-focused concept exploring how AI can help analysts examine patterns in digital evidence."}
];
const serializedProjects = JSON.stringify(projectData);
const projects = JSON.parse(serializedProjects);
const gallery = document.querySelector('#project-gallery');
const count = document.querySelector('#project-count');
function renderProjects(filter = 'all') {
 const visible = projects.filter(project => filter === 'all' || project.category === filter);
 gallery.replaceChildren();
 visible.forEach(project => {
  const article = document.createElement('article'); article.className='project-card';
  const img = document.createElement('img'); img.src=project.image; img.alt=project.alt; img.loading='lazy'; img.width=720; img.height=450;
  const body=document.createElement('div'); body.className='project-body';
  const tag=document.createElement('p'); tag.className='project-tag'; tag.textContent=project.label;
  const heading=document.createElement('h3'); heading.textContent=project.title;
  const desc=document.createElement('p'); desc.textContent=project.description;
  body.append(tag,heading,desc);article.append(img,body);gallery.append(article);
 });
 count.textContent=`Showing ${visible.length} of ${projects.length} projects`;
}
renderProjects();
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});
 button.classList.add('active');button.setAttribute('aria-pressed','true');renderProjects(button.dataset.filter);
}));
const menuButton=document.querySelector('#menu-toggle');const nav=document.querySelector('#site-nav');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && nav.classList.contains('open')){closeMenu();menuButton.focus()}});
const themeButton=document.querySelector('#theme-toggle');
function setTheme(theme){document.documentElement.dataset.theme=theme;const light=theme==='light';themeButton.setAttribute('aria-pressed',String(light));themeButton.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');themeButton.textContent=light?'☾ Theme':'☀ Theme'}
setTheme('dark');themeButton.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
const form=document.querySelector('#contact-form');const status=document.querySelector('#form-status');
function fieldError(id,message){const field=document.getElementById(id);const error=document.getElementById(id==='full-name'?'name-error':id+'-error');error.textContent=message;if(message){field.setAttribute('aria-invalid','true')}else{field.removeAttribute('aria-invalid')}}
form.addEventListener('submit',event=>{
 event.preventDefault();let valid=true;let firstInvalid=null;
 const name=document.querySelector('#full-name');const email=document.querySelector('#email');const message=document.querySelector('#message');const consent=document.querySelector('#consent');
 const checks=[['full-name',name.value.trim().length<2?'Please enter at least 2 characters.':''],['email',!email.validity.valid?'Please enter a valid email address.':''],['message',message.value.trim().length<10?'Please write at least 10 characters.':'']];
 checks.forEach(([id,error])=>{fieldError(id,error);if(error){valid=false;if(!firstInvalid)firstInvalid=document.getElementById(id)}});
 document.querySelector('#consent-error').textContent=consent.checked?'':'Please confirm this is a demonstration form.';
 if(!consent.checked){valid=false;if(!firstInvalid)firstInvalid=consent}
 status.textContent=valid?'Your message passed validation! This demo does not send or save it.':'Please correct the fields above and try again.';
 if(valid){form.reset()}else{firstInvalid.focus()}
});
document.querySelector('#year').textContent=new Date().getFullYear();