const input = await new Response(Deno.stdin.readable).text();

const [firstLine,strA,strB, ...queries] = input.trim().split("\n");
const [ ArrayLength, queryNum ] = firstLine.split(" ").map(Number);

const ArrayA:number[] = strA.split(" ").map(Number);
const ArrayB:number[] = strB.split(" ").map(Number);


let sum = 0;

for (let i = 0; i < ArrayLength; i++ ) {
  sum += Math.min(ArrayA[i],ArrayB[i]);
}

for (const query of queries) {
  const [c,x,v] = query.split(" ");
  const arrayIndex = Number(x) - 1;
  
  sum -= Math.min(ArrayA[arrayIndex],ArrayB[arrayIndex]);

  if (c === "A") {
    ArrayA[arrayIndex] = Number(v)
  } else {
    ArrayB[arrayIndex] = Number(v);
  };
  
  sum += Math.min(ArrayA[arrayIndex],ArrayB[arrayIndex]);
  console.log(sum);
};
