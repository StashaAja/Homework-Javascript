//HOMEWORK 1:
let StoryArray = ['Anna','happy','dancing'];

let StoryArrayTwo = ['Vanja','excited','singing'];

function TellStory(input){

      let a = input[0];

    console.log(a);

      let b = input[1];

    console.log(b);

      let c = input[2];

    console.log(c);

   let Story = 'This is' + ' ' + a + '.' + a + ' ' + 'is a nice person. Today they are'+ ' ' + b + '. They are '+ c + ' ' + 'all day. The end.'

  return Story;
}

console.log(TellStory(StoryArray));

console.log(TellStory(StoryArrayTwo));

alert(TellStory(StoryArrayTwo));