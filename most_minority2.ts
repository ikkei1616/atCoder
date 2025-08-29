

const input =  await new Response(Deno.stdin.readable).text();


const [firstLine, ...votes] = input.trim().split('\n');

const [participantsNumStr, voteNumStr] = firstLine.split(" ");
const participantsNum = Number(participantsNumStr);
const voteNum = Number(voteNumStr);

const pointsArray:number[] = new Array(Number(participantsNum)).fill(0);

for(let c = 0; c < voteNum ; c++) {
  let zeros = 0;

  for(let r = 0; r < participantsNum; r++) {
    if (votes[r][c] === "0") zeros++;
  };

  const ones = participantsNum - zeros;

  if (zeros === 0 || ones === 0) {
    for (let i = 0; i < participantsNum; i++) pointsArray[i]++;
  } else {
    const minorityVote = zeros < ones ? "0" : "1";
    for (let i = 0; i< participantsNum;i++) {
      if (votes[i][c] === minorityVote) pointsArray[i] ++;
    }
  }

};

const maxScore = Math.max(...pointsArray);
const result:number[] = []

for (let i = 0; i < participantsNum; i++) if(pointsArray[i] === maxScore) result.push(i+1);

console.log(result.join(" "));

export {};

