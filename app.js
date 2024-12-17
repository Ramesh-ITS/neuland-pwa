// Check for Web Share API support
document.getElementById('share').addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'Contact Neuland Labs',
  text: 'Reach out to Neuland Labs at +1234567890 or visit www.neulandlabs.com.',
  url: 'https://www.neulandlabs.com'
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  });
   
  // Save contact functionality
  document.getElementById('save-contact').addEventListener('click', () => {
    const vCard = `BEGIN:VCARD
  VERSION:3.0
  FN:Neuland Labs
  TEL:+919871837304
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