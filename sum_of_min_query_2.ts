const input = await new Response(Deno.stdin.readable).text();

const [firstLine, A, B, ...queries] = input.trim().split("\n");

const [arrayLength, queryNum] = firstLine.split(" ").map(Number);
const arrayA: number[] = A.split(" ").map(Number);
const arrayB: number[] = B.split(" ").map(Number);

let ans: number = 0;
for (let i = 0; i < arrayLength; i++) {
  const min = Math.min(arrayA[i], arrayB[i]);
  ans += min;
}


for (const query in queries) {
  console.log(query);
  const [c, x, v] = query.split(" ");
  // console.log(c,x,v);
  const index: number = Number(x) - 1;
  // console.log(index);
  // console.log(Math.min(arrayA[index], arrayB[index]));
  // ans -= Math.min(arrayA[index], arrayB[index]);
  
  // if (c === "A") {
  //   arrayA[index] = Number(v);
  // } else {
  //   arrayB[index] = Number(v);
  // }

  // ans += Math.min(arrayA[index], arrayB[index]);

  // console.log(ans);
}
