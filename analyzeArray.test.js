import analyzeArray from "./analyzeArray";

test("Analyze array [1,8,3,4,2,6] to be object{ \n average: 4 \n min: 1 \n max: 8 \n lenght: 6 \n };", () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({"average": 4, "min": 1, "max": 8, "length": 6});
});