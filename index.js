var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-GB";

let para = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(para);

recognition.addEventListener('result', event => {
  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    para.textContent = transcript;

    if(transcript.includes('idea')) {
      console.log('💡💡💡💡💡💡💡💡')
    }

    if(transcript.includes('light')){
      transcript.replace(/light/gi, '💡');
    }

    if(event.results[0].isFinal) {
      para = document.createElement('p');
      words.appendChild(para);
    }

  });

recognition.addEventListener('end', recognition.start);

recognition.start();
