const input = await new Response(Deno.stdin.readable).text();

const [firstLine, ...line] = input.trim().split("\n");

const [participantsNumStr, voteNumStr] = firstLine.split(" ");
const participantNum = Number(participantsNumStr);
const voteNum = Number(voteNumStr);
const scoreArray = new Array(participantNum).fill(0);

for(let c = 0; c < voteNum; c++) {
  let zeros = 0;

  for (let r = 0; r < participantNum;r++) {
    const vote = line[r][c];
    if ( vote === "0") zeros ++;
  };
  const ones = participantNum - zeros;

  if (zeros === 0 || ones === 0) {
    for (let i = 0; i < participantNum; i++) scoreArray[i]++ ;
  } else {
    const minority = zeros < ones ? "0": "1";
    for (let i = 0; i< participantNum; i++) {
      const vote = line[i][c];
      if( vote === minority) scoreArray[i]++;
    ;}
  };
}

const maxScore = Math.max(...scoreArray);
const resultArray:number[] = [];

for (let i = 0 ; i < participantNum ; i++) {
  
  if (scoreArray[i] === maxScore) resultArray.push(i+1);
};

console.log(resultArray.join(" "));

export {};
