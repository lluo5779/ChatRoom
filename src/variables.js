const token = 'YLX3LE3OPB6SXF3LHDBPFAN5HZHDCDFS';

const ladypic = 'http://www.ahalsiyakhat.com/wp-content/uploads/2016/07/profile-unknown-female-2.jpeg.png';
const manpic = 'https://image.freepik.com/vector-gratis/perfil-de-avatar-de-hombre-en-icono-redondo_24640-14044.jpg';
const guypic = 'https://image.flaticon.com/icons/svg/74/74276.svg';


const DUMMY_MESSAGE=[
    {messageName: 'Ami',
    messageContent: 'Hello Underworld!',
    profilesrc: ladypic,
    fromUser: false},
    {messageName: 'Underworld',
    messageContent:'Online',
    profilesrc: manpic,
    fromUser: false},
    {messageName: 'Ami',
    messageContent: 'Who lives in a pineapple under the sea?',
    profilesrc: ladypic,
    fromUser: false},
    {messageName: 'Underworld',
    messageContent: 'SpongeBob SquarePants!',
    profilesrc: manpic,
    fromUser: false},
    {messageName: 'Louis',
    messageContent: 'I hope this works!',
    profilesrc:guypic,
    fromUser: true},

];



const allJokes = {
  math: [
    'Why should you never talk to Pi? Because she’ll go on and on and on forever.',
    'Why was the math lecture so long? The professor kept going off on a tangent.',
    'Why is it sad that parallel lines have so much in common? Because they will never meet.'  
  ],
  tech: [
    'Did you hear about the two antennas that got married? The ceremony was long and boring, but the reception was great!',
    'Why do geeks mistake Halloween and Christmas? Because Oct 31 === Dec 25.',
  ],
  puns: ['I asked my French friend if she likes to play video games. She said, “Wii."',
        'What kind of cats like to go bowling? Alley cats.'
  ],
  bye: ['See you soon!'],
  default: [
    'Why was the Math book sad? Because it had so many problems.',
  ],
};


export {token, DUMMY_MESSAGE, allJokes}