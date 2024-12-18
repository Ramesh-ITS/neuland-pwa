// Check for Web Share API support
document.getElementById('share').addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'Contact Neuland Labs',
  text: 'Reach out to Saharsh at +91 4067611600 or visit www.neulandlabs.com.',
  url: 'https://www.neulandlabs.com'
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  });
   
  // Save contact functionality
  document.getElementById('save-contactxx').addEventListener('click', () => {
    const vCard = `BEGIN:VCARD
  VERSION:3.0
  FN:Neuland Labs
  TEL:+91 4067611600
  URL:https://www.neulandlabs.com
  END:VCARD`;
   
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
  a.download = 'NeulandLabs.vcf';
  a.click();
    URL.revokeObjectURL(url);
  });



  document.getElementById('save-contactxx').addEventListener('click', () => {
    a.href = url;
  a.download = 'NeulandLabs.vcf';
  a.click();
    URL.revokeObjectURL(url);
  });


  document.getElementById('save-contact').addEventListener("click",  () => {
    // Contact Information
    // create a vcard file
    var vcard = "BEGIN:VCARD\nVERSION:3.0\n"
      + "N:Saharash\n"
      + "FN:Saharash Davuluri\n"
      + "TEL;CELL:+914067611600\n"
      + "EMAIL;HOME:saharsh@neulandlabs.com\n"
      + "ADR;HOME:Hyderabad\n"
      + "ORG;WORK:Hyderabad\n"
      + "TITLE:Managing Director\n"
      + "URL:https://neulandlabs.com\n"
      + "NOTE:Neuland\n"
      + "END:VCARD";  
    
    // var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);
    
    if (navigator.share) {
       
      navigator.share({
      
        title: 'New Contacts',
        text: 'Save contacts',
        files: [new File([blob], 'newcontact.vcf', { type: 'text/vcard' })],
      }).then(() => { });
  
    } else {
        const newLink = document.createElement('a');
        newLink.download =  "Saharsh.vcf";
        newLink.textContent = "Saharsh";
        newLink.href = url;
  
        newLink.click();
  
        // window.close();
    
    }
  });