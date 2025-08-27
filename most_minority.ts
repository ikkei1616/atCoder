const input = await new Response(Deno.stdin.readable).text();

const [firstLine, ...lines] = input.trim().split("\n");


const [participantNum, voteNum] = firstLine.split(" ");
const resultArray:number[] = new Array(Number(participantNum)).fill(0);

//投票回数分回す
for(let c = 0; c < Number(voteNum); c++) {
  
  const voteResultArray: number[] = [0,0];
  //  
  for (let r = 0; r < (Number(participantNum)); r++) {
    const vote = lines[r][c];
    if (0 === Number(vote)) {
      voteResultArray[0] += 1;
    } else {
      voteResultArray[1] += 1;
    };
  };

  let minorityVote:number;
  if (voteResultArray[0] > voteResultArray[1]) {
    minorityVote = 1;
  } else if ((voteResultArray[0] === Number(participantNum) || voteResultArray[1] === Number(participantNum))) {
    minorityVote = 2;
  } else {
    minorityVote = 0;
  };

  
  if (minorityVote === 2) {
    resultArray.forEach((item,i)=>{
      resultArray[i] = resultArray[i]+ 1;
    })
  } else {
    for (let r = 0; r < Number(participantNum) ;r++) {
      if (Number(lines[r][c]) === minorityVote) {
      
        resultArray[r] += 1;
      }
    };
  };


}

const maxScore = Math.max(...resultArray);
const output:number[] = [];
resultArray.forEach((voterScore,i)=>{
  if (maxScore === voterScore) {
    output.push(i+1);
  }
});

console.log(output.join(" "));




export {};
