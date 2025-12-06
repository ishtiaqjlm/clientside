document.addEventListener('DOMContentLoaded',function(){
  // Mobile menu toggle
  const btn=document.querySelector('.menu-toggle');
  if(btn){
    btn.addEventListener('click',function(){
      const nav=document.querySelector('.nav');
      if(nav.style.display==='flex') nav.style.display='';
      else nav.style.display='flex';
    });
  }

  // Contact form validation
  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name=form.name.value.trim();
      const email=form.email.value.trim();
      const msg=form.message.value.trim();
      const errors=[];
      if(!name) errors.push('Name is required.');
      if(!email||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('Valid email is required.');
      if(!msg||msg.length<10) errors.push('Message must be at least 10 characters.');
      const notice=document.getElementById('formNotice');
      if(errors.length){notice.textContent=errors.join(' ');notice.style.color='crimson';return;}
      notice.textContent='Thank you — your message has been sent (mock).';notice.style.color='green';
      form.reset();
    });
  }
});


